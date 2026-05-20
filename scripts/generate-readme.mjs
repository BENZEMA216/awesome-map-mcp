import { readFile, writeFile } from "node:fs/promises";

const categories = [
  "Provider-maintained and reference servers",
  "AMap and Gaode servers",
  "Baidu Maps",
  "Google Maps servers",
  "OpenStreetMap and open geospatial servers",
  "Mapbox",
  "GIS, geocoding, and other providers",
  "Agent apps and workflows",
  "Examples, demos, and low-signal candidates",
  "Mirrors and forks"
];

const projects = JSON.parse(await readFile(new URL("../data/projects.json", import.meta.url), "utf8"));
const excluded = JSON.parse(await readFile(new URL("../data/excluded.json", import.meta.url), "utf8"));

const byCategory = new Map(categories.map((category) => [category, []]));
for (const project of projects) {
  if (!byCategory.has(project.category)) {
    throw new Error(`Unknown category: ${project.category} (${project.name})`);
  }
  byCategory.get(project.category).push(project);
}

for (const items of byCategory.values()) {
  items.sort((a, b) => {
    const starDelta = (b.stars ?? -1) - (a.stars ?? -1);
    return starDelta || a.name.localeCompare(b.name);
  });
}

const date = new Date().toISOString().slice(0, 10);
const confirmedCount = projects.filter((item) => item.status === "confirmed").length;
const candidateCount = projects.filter((item) => item.status === "candidate").length;
const providers = new Set(projects.map((item) => item.provider)).size;

function esc(value) {
  return String(value ?? "")
    .replaceAll("|", "\\|")
    .replaceAll("\n", " ")
    .trim();
}

function signals(project) {
  return project.signals.map((signal) => `\`${signal}\``).join(", ");
}

function row(project) {
  const title = `[${esc(project.name)}](${project.url})`;
  const status = project.status === "confirmed" ? "" : " _candidate_";
  const stars = typeof project.stars === "number" ? ` · ${project.stars}★` : "";
  return `| ${title}${status} | ${esc(project.kind)} | ${esc(project.provider)} | ${signals(project)} | ${esc(project.notes)}${stars} |`;
}

function section(category, items) {
  if (items.length === 0) return "";
  return [
    `## ${category}`,
    "",
    "| Project | Kind | Provider | Map signals | Notes |",
    "|---|---|---|---|---|",
    ...items.map(row),
    ""
  ].join("\n");
}

const readme = `# Awesome Map MCP

A curated list of map, geospatial, LBS, routing, POI, weather-location, and location-intelligence projects built around the Model Context Protocol (MCP).

The list is intentionally strict about scope. A project belongs here when map/geospatial capability is a core product surface, MCP server, skill, agent workflow, or demo. General apps that merely call a map/weather helper as a side feature are tracked in \`data/excluded.json\` instead of being listed.

Generated on ${date} from \`data/projects.json\`.

## Snapshot

- ${projects.length} listed projects
- ${confirmedCount} confirmed entries
- ${candidateCount} candidates that need deeper README/code verification
- ${providers} map or geospatial provider groups
- ${excluded.length} explicitly excluded false positives

## Inclusion rules

- Include: MCP servers for maps/LBS/GIS/geocoding/routing/POI/weather-by-location, agent apps where map data drives the output, map-focused skills, and runnable examples.
- Include with \`candidate\` status: relevant projects with weak README evidence, low stars, forks, mirrors, or incomplete setup notes.
- Exclude: source maps, dependency maps, gene-expression GEO, generic MCP routers, generic agent apps, and business apps where maps are only incidental.
- Exclude: "MCP" projects where MCP clearly means Map Content Platform rather than Model Context Protocol.

## Contents

${categories.map((category) => `- [${category}](#${category.toLowerCase().replaceAll(" ", "-").replaceAll(",", "")})`).join("\n")}
- [Excluded edge cases](#excluded-edge-cases)

${categories.map((category) => section(category, byCategory.get(category))).filter(Boolean).join("\n")}
## Excluded edge cases

These are intentionally not listed, mostly to avoid re-adding attractive false positives.

| Project | Reason |
|---|---|
${excluded.map((item) => `| [${esc(item.name)}](${item.url}) | ${esc(item.reason)} |`).join("\n")}

## Contributing

Add new entries to \`data/projects.json\`, then run:

\`\`\`bash
npm run build
npm run check
\`\`\`

Every listed entry should explain why it is map-related through \`signals\` and \`notes\`. Put rejected or ambiguous projects in \`data/excluded.json\` with a short reason.
`;

await writeFile(new URL("../README.md", import.meta.url), readme);
