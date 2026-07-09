import { copyFile, cp, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

await Promise.all([
  copyFile(join(root, "index.html"), join(dist, "index.html")),
  copyFile(join(root, "styles.css"), join(dist, "styles.css")),
  copyFile(join(root, "main.js"), join(dist, "main.js")),
  copyFile(join(root, "scene.js"), join(dist, "scene.js")),
  copyFile(join(root, "favicon.ico"), join(dist, "favicon.ico")),
  copyFile(join(root, "robots.txt"), join(dist, "robots.txt")),
  copyFile(join(root, "sitemap.xml"), join(dist, "sitemap.xml")),
  copyFile(
    join(root, "Portfolio-original.html"),
    join(dist, "Portfolio-original.html"),
  ),
  cp(join(root, "assets"), join(dist, "assets"), { recursive: true }),
]);

console.log("Built 3D portfolio into dist/");
