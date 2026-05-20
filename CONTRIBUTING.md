# Contributing

This repository tracks MCP projects where map, geospatial, LBS, routing, POI, weather-by-location, or location intelligence is central to the project.

## Add a project

1. Add an entry to `data/projects.json`.
2. Set `status` to `confirmed` only when the README, package page, or code clearly shows Model Context Protocol plus map/geospatial functionality.
3. Use `candidate` when the project looks relevant but still needs deeper verification.
4. Use `notes` for the English note. Add `notesZh` when the Chinese README needs a clearer localized note than the English fallback.
5. Run:

```bash
npm run build
npm run check
```

## Exclude a project

Add false positives to `data/excluded.json` when a project is attractive but out of scope. Common reasons:

- MCP means Map Content Platform, not Model Context Protocol.
- The project is about source maps, dependency maps, gene-expression GEO, or generic routing of MCP calls.
- Maps are incidental to a larger unrelated app.

Use `reason` for English and optional `reasonZh` for a localized Chinese explanation.

## Bilingual README mode

`npm run build` generates three README files from the same source data:

- `README.md`: Chinese default entry for GitHub.
- `README.zh-CN.md`: Chinese mirror for explicit language links.
- `README.en.md`: English version.

Do not edit generated README tables directly. Update `data/projects.json`, `data/excluded.json`, or `scripts/generate-readme.mjs`, then rebuild.

## Fields

- `signals`: short tags showing the map/geospatial evidence.
- `notes`: one sentence explaining why the project belongs here.
- `stars`: optional GitHub stars at discovery time.
