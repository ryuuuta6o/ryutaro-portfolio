import { copyFile, mkdir, readdir, rm } from "node:fs/promises";
import { extname, join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

await copyFile(join(root, "Portfolio (standalone).html"), join(dist, "index.html"));

const entries = await readdir(root, { withFileTypes: true });
await Promise.all(
  entries
    .filter((entry) => entry.isFile() && extname(entry.name).toLowerCase() === ".png")
    .map((entry) => copyFile(join(root, entry.name), join(dist, entry.name)))
);

console.log("Built static portfolio into dist/");
