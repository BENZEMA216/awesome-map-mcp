import { readFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";

const projectPath = new URL("../data/projects.json", import.meta.url);
const excludedPath = new URL("../data/excluded.json", import.meta.url);
const generatedPaths = [
  new URL("../README.md", import.meta.url),
  new URL("../README.zh-CN.md", import.meta.url),
  new URL("../README.en.md", import.meta.url)
];

const projects = JSON.parse(await readFile(projectPath, "utf8"));
const excluded = JSON.parse(await readFile(excludedPath, "utf8"));

const required = ["name", "url", "category", "kind", "provider", "status", "signals", "notes"];
const urls = new Set();
const names = new Set();

for (const project of projects) {
  for (const field of required) {
    if (!project[field] || (Array.isArray(project[field]) && project[field].length === 0)) {
      throw new Error(`Missing ${field}: ${project.name ?? project.url ?? "unknown"}`);
    }
  }
  if (!["confirmed", "candidate"].includes(project.status)) {
    throw new Error(`Invalid status: ${project.name}`);
  }
  if (urls.has(project.url)) throw new Error(`Duplicate URL: ${project.url}`);
  if (names.has(project.name)) throw new Error(`Duplicate name: ${project.name}`);
  urls.add(project.url);
  names.add(project.name);
}

for (const item of excluded) {
  if (!item.name || !item.url || !item.reason) {
    throw new Error(`Invalid excluded entry: ${JSON.stringify(item)}`);
  }
}

const before = new Map();
for (const path of generatedPaths) {
  before.set(path.href, await readFile(path, "utf8").catch(() => ""));
}

const result = spawnSync(process.execPath, ["scripts/generate-readme.mjs"], {
  cwd: new URL("..", import.meta.url),
  encoding: "utf8"
});

if (result.status !== 0) {
  process.stderr.write(result.stderr);
  process.stdout.write(result.stdout);
  process.exit(result.status ?? 1);
}

for (const path of generatedPaths) {
  const after = await readFile(path, "utf8");
  if (before.get(path.href) !== after) {
    const name = path.pathname.split("/").pop();
    throw new Error(`${name} was not in sync; regenerated it. Run npm run check again.`);
  }
}

console.log(`Checked ${projects.length} projects, ${excluded.length} excluded entries, and ${generatedPaths.length} generated READMEs.`);
