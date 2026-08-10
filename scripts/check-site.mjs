import { access, readFile } from "node:fs/promises";
import { dirname, join, normalize } from "node:path";

const root = process.cwd();
const baseUrl = "https://ryutaro-portfolio-orpin.vercel.app";
const pages = [
  { file: "index.html", lang: "ja", canonical: `${baseUrl}/` },
  { file: "en/index.html", lang: "en", canonical: `${baseUrl}/en/` },
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function matchOne(html, pattern, label, file) {
  const match = html.match(pattern);
  assert(match, `${file}: missing ${label}`);
  return match[1];
}

function localTarget(pageFile, value) {
  const clean = value.split(/[?#]/, 1)[0];
  if (!clean || clean.startsWith("#")) return null;
  if (/^(?:https?:|mailto:|tel:|data:)/.test(clean)) return null;
  if (clean === "/") return "index.html";
  if (clean === "/en" || clean === "/en/") return "en/index.html";
  if (clean.startsWith("/")) return clean.slice(1);
  return normalize(join(dirname(pageFile), clean));
}

for (const page of pages) {
  const html = await readFile(join(root, page.file), "utf8");
  const htmlLang = matchOne(html, /<html\s+lang="([^"]+)"/, "html lang", page.file);
  assert(htmlLang === page.lang, `${page.file}: expected lang=${page.lang}`);

  const canonical = matchOne(html, /<link\s+rel="canonical"\s+href="([^"]+)"/, "canonical", page.file);
  assert(canonical === page.canonical, `${page.file}: incorrect canonical ${canonical}`);

  const alternates = new Map(
    [...html.matchAll(/<link\s+rel="alternate"\s+hreflang="([^"]+)"\s+href="([^"]+)"/g)]
      .map((match) => [match[1], match[2]]),
  );
  assert(alternates.get("ja") === `${baseUrl}/`, `${page.file}: invalid ja hreflang`);
  assert(alternates.get("en") === `${baseUrl}/en/`, `${page.file}: invalid en hreflang`);
  assert(alternates.get("x-default") === `${baseUrl}/`, `${page.file}: invalid x-default hreflang`);

  const jsonLdBlocks = [...html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  assert(jsonLdBlocks.length > 0, `${page.file}: JSON-LD is missing`);
  for (const block of jsonLdBlocks) JSON.parse(block[1]);

  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
  for (const match of html.matchAll(/(?:href|src|data-lightbox-src)="([^"]+)"/g)) {
    const value = match[1];
    if (value.startsWith("#")) {
      assert(ids.has(value.slice(1)), `${page.file}: broken anchor ${value}`);
      continue;
    }
    const target = localTarget(page.file, value);
    if (target) await access(join(root, target));
  }

  const workCount = (html.match(/<article class="work-card/g) || []).length;
  assert(workCount === 10, `${page.file}: expected 10 project cards, found ${workCount}`);
}

const english = await readFile(join(root, "en/index.html"), "utf8");
for (const required of [
  "Native Japanese speaker",
  "ChatGPT, Claude Code, and Codex",
  "AI output evaluation",
  "Ambiguity detection",
  "Human review workflow design",
  "actual workflows",
]) {
  assert(english.includes(required), `en/index.html: missing required positioning: ${required}`);
}
for (const forbidden of [
  "Expert software engineer",
  "Senior developer",
  "Independently developed all code",
  "Advanced coding expertise",
]) {
  assert(!english.includes(forbidden), `en/index.html: forbidden overclaim found: ${forbidden}`);
}

const sitemap = await readFile(join(root, "sitemap.xml"), "utf8");
assert(sitemap.includes(`${baseUrl}/en/`), "sitemap.xml: English URL is missing");
assert(sitemap.includes('hreflang="ja"') && sitemap.includes('hreflang="en"'), "sitemap.xml: language alternates are missing");

const robots = await readFile(join(root, "robots.txt"), "utf8");
assert(robots.includes(`${baseUrl}/sitemap.xml`), "robots.txt: sitemap reference is missing");

console.log("Site lint passed: metadata, JSON-LD, language links, local links, and project counts are valid.");
