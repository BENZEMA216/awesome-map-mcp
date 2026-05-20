import { readFile, writeFile } from "node:fs/promises";

const categoryIds = [
  "provider",
  "amap",
  "baidu",
  "google",
  "osm",
  "mapbox",
  "gis",
  "apps",
  "examples",
  "mirrors"
];

const categoryById = {
  provider: {
    data: "Provider-maintained and reference servers",
    en: "Provider-maintained and reference servers",
    zh: "服务商维护和参考 Server"
  },
  amap: {
    data: "AMap and Gaode servers",
    en: "AMap and Gaode servers",
    zh: "高德 / AMap Server"
  },
  baidu: {
    data: "Baidu Maps",
    en: "Baidu Maps",
    zh: "百度地图"
  },
  google: {
    data: "Google Maps servers",
    en: "Google Maps servers",
    zh: "Google Maps Server"
  },
  osm: {
    data: "OpenStreetMap and open geospatial servers",
    en: "OpenStreetMap and open geospatial servers",
    zh: "OpenStreetMap 与开放地理空间 Server"
  },
  mapbox: {
    data: "Mapbox",
    en: "Mapbox",
    zh: "Mapbox"
  },
  gis: {
    data: "GIS, geocoding, and other providers",
    en: "GIS, geocoding, and other providers",
    zh: "GIS、地理编码与其他服务商"
  },
  apps: {
    data: "Agent apps and workflows",
    en: "Agent apps and workflows",
    zh: "Agent 应用和工作流"
  },
  examples: {
    data: "Examples, demos, and low-signal candidates",
    en: "Examples, demos, and low-signal candidates",
    zh: "示例、Demo 和低信号候选"
  },
  mirrors: {
    data: "Mirrors and forks",
    en: "Mirrors and forks",
    zh: "镜像和 Fork"
  }
};

const locales = {
  en: {
    file: "../README.en.md",
    title: "Awesome Map MCP",
    switcher: "[中文](README.md) | English",
    intro:
      "A curated list of map, geospatial, LBS, routing, POI, weather-location, and location-intelligence projects built around the Model Context Protocol (MCP).",
    scope:
      "The list is intentionally strict about scope. A project belongs here when map/geospatial capability is a core product surface, MCP server, skill, agent workflow, or demo. General apps that merely call a map/weather helper as a side feature are tracked in `data/excluded.json` instead of being listed.",
    generated: "Generated on",
    source: "from `data/projects.json`.",
    snapshot: "Snapshot",
    listed: "listed projects",
    confirmed: "confirmed entries",
    candidates: "candidates that need deeper README/code verification",
    providers: "map or geospatial provider groups",
    excluded: "explicitly excluded false positives",
    inclusionRules: "Inclusion rules",
    include1:
      "Include: MCP servers for maps/LBS/GIS/geocoding/routing/POI/weather-by-location, agent apps where map data drives the output, map-focused skills, and runnable examples.",
    include2:
      "Include with `candidate` status: relevant projects with weak README evidence, low stars, forks, mirrors, or incomplete setup notes.",
    exclude1:
      "Exclude: source maps, dependency maps, gene-expression GEO, generic MCP routers, generic agent apps, and business apps where maps are only incidental.",
    exclude2:
      'Exclude: "MCP" projects where MCP clearly means Map Content Platform rather than Model Context Protocol.',
    contents: "Contents",
    project: "Project",
    kind: "Kind",
    provider: "Provider",
    signals: "Map signals",
    notes: "Notes",
    candidate: "candidate",
    excludedEdgeCases: "Excluded edge cases",
    excludedIntro: "These are intentionally not listed, mostly to avoid re-adding attractive false positives.",
    reason: "Reason",
    contributing: "Contributing",
    contributingIntro: "Add new entries to `data/projects.json`, then run:",
    contributingOutro:
      "Every listed entry should explain why it is map-related through `signals` and `notes`. Add `notesZh` for Chinese-specific wording when the English note is not clear enough. Put rejected or ambiguous projects in `data/excluded.json` with a short reason.",
    footer: ""
  },
  zh: {
    file: "../README.md",
    mirrorFile: "../README.zh-CN.md",
    title: "Awesome Map MCP",
    switcher: "中文 | [English](README.en.md)",
    intro: "围绕 Model Context Protocol (MCP) 的地图、地理空间、LBS、路线规划、POI、按位置查天气和位置智能项目清单。",
    scope:
      "这个清单会刻意收紧边界：只有当地图/地理空间能力是产品主功能、MCP Server、Skill、Agent 工作流或可运行 Demo 时才收录。只是顺手调用地图/天气工具的泛应用会放进 `data/excluded.json`，不会进入主榜单。",
    generated: "生成日期",
    source: "数据来自 `data/projects.json`。",
    snapshot: "概览",
    listed: "个已收录项目",
    confirmed: "个已确认条目",
    candidates: "个仍需进一步核验 README/代码的候选条目",
    providers: "个地图或地理空间服务商分组",
    excluded: "个明确排除的误收项目",
    inclusionRules: "收录规则",
    include1:
      "收录：地图/LBS/GIS/地理编码/路线规划/POI/按位置查天气相关 MCP Server，地图数据驱动输出的 Agent 应用，地图相关 Skill，以及可运行示例。",
    include2: "以 `候选` 标记收录：相关但 README 证据较弱、star 很少、fork/镜像、或安装说明不完整的项目。",
    exclude1: "排除：source maps、dependency maps、基因表达 GEO、通用 MCP 路由器、泛 Agent 应用，以及地图只是边缘能力的业务应用。",
    exclude2: "排除：`MCP` 明确表示 Map Content Platform，而不是 Model Context Protocol 的项目。",
    contents: "目录",
    project: "项目",
    kind: "类型",
    provider: "服务商",
    signals: "地图信号",
    notes: "说明",
    candidate: "候选",
    excludedEdgeCases: "排除边界",
    excludedIntro: "这些项目被明确排除，主要是为了避免后续反复误收。",
    reason: "原因",
    contributing: "贡献方式",
    contributingIntro: "新增项目时先改 `data/projects.json`，然后运行：",
    contributingOutro:
      "每个条目都应该通过 `signals` 和 `notes` 解释为什么它和地图相关。中文说明不够清楚时可额外填写 `notesZh`。被拒绝或模糊的项目放进 `data/excluded.json` 并写明原因。",
    footer: ""
  }
};

const projects = JSON.parse(await readFile(new URL("../data/projects.json", import.meta.url), "utf8"));
const excluded = JSON.parse(await readFile(new URL("../data/excluded.json", import.meta.url), "utf8"));

const byCategory = new Map(categoryIds.map((id) => [id, []]));
const categoryIdByDataName = new Map(categoryIds.map((id) => [categoryById[id].data, id]));

for (const project of projects) {
  const id = categoryIdByDataName.get(project.category);
  if (!id) {
    throw new Error(`Unknown category: ${project.category} (${project.name})`);
  }
  byCategory.get(id).push(project);
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

function localizedNote(project, locale) {
  if (locale === locales.zh && project.notesZh) return project.notesZh;
  return project.notes;
}

function row(project, locale) {
  const title = `[${esc(project.name)}](${project.url})`;
  const status = project.status === "confirmed" ? "" : ` _${locale.candidate}_`;
  const stars = typeof project.stars === "number" ? ` · ${project.stars}★` : "";
  return `| ${title}${status} | ${esc(project.kind)} | ${esc(project.provider)} | ${signals(project)} | ${esc(localizedNote(project, locale))}${stars} |`;
}

function section(id, locale) {
  const items = byCategory.get(id);
  if (items.length === 0) return "";
  const title = categoryById[id][locale === locales.zh ? "zh" : "en"];
  return [
    `<a id="${id}"></a>`,
    `## ${title}`,
    "",
    `| ${locale.project} | ${locale.kind} | ${locale.provider} | ${locale.signals} | ${locale.notes} |`,
    "|---|---|---|---|---|",
    ...items.map((item) => row(item, locale)),
    ""
  ].join("\n");
}

function render(localeKey) {
  const locale = locales[localeKey];
  return `# ${locale.title}

${locale.switcher}

${locale.intro}

${locale.scope}

${locale.generated} ${date} ${locale.source}

## ${locale.snapshot}

- ${projects.length} ${locale.listed}
- ${confirmedCount} ${locale.confirmed}
- ${candidateCount} ${locale.candidates}
- ${providers} ${locale.providers}
- ${excluded.length} ${locale.excluded}

## ${locale.inclusionRules}

- ${locale.include1}
- ${locale.include2}
- ${locale.exclude1}
- ${locale.exclude2}

## ${locale.contents}

${categoryIds.map((id) => `- [${categoryById[id][localeKey === "zh" ? "zh" : "en"]}](#${id})`).join("\n")}
- [${locale.excludedEdgeCases}](#excluded-edge-cases)

${categoryIds.map((id) => section(id, locale)).filter(Boolean).join("\n")}
<a id="excluded-edge-cases"></a>
## ${locale.excludedEdgeCases}

${locale.excludedIntro}

| ${locale.project} | ${locale.reason} |
|---|---|
${excluded.map((item) => `| [${esc(item.name)}](${item.url}) | ${esc(localeKey === "zh" && item.reasonZh ? item.reasonZh : item.reason)} |`).join("\n")}

## ${locale.contributing}

${locale.contributingIntro}

\`\`\`bash
npm run build
npm run check
\`\`\`

${locale.contributingOutro}
`;
}

for (const localeKey of Object.keys(locales)) {
  const locale = locales[localeKey];
  const content = render(localeKey);
  await writeFile(new URL(locale.file, import.meta.url), content);
  if (locale.mirrorFile) {
    await writeFile(new URL(locale.mirrorFile, import.meta.url), content);
  }
}
