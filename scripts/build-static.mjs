import { copyFile, cp, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

await Promise.all([
  copyFile(join(root, "index.html"), join(dist, "index.html")),
  copyFile(
    join(root, "Portfolio-original.html"),
    join(dist, "Portfolio-original.html"),
  ),
  cp(join(root, "assets"), join(dist, "assets"), { recursive: true }),
]);

console.log("Built responsive portfolio into dist/");
