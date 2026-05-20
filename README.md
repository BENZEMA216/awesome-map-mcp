# Awesome Map MCP

A curated list of map, geospatial, LBS, routing, POI, weather-location, and location-intelligence projects built around the Model Context Protocol (MCP).

The list is intentionally strict about scope. A project belongs here when map/geospatial capability is a core product surface, MCP server, skill, agent workflow, or demo. General apps that merely call a map/weather helper as a side feature are tracked in `data/excluded.json` instead of being listed.

Generated on 2026-05-20 from `data/projects.json`.

## Snapshot

- 136 listed projects
- 96 confirmed entries
- 40 candidates that need deeper README/code verification
- 18 map or geospatial provider groups
- 9 explicitly excluded false positives

## Inclusion rules

- Include: MCP servers for maps/LBS/GIS/geocoding/routing/POI/weather-by-location, agent apps where map data drives the output, map-focused skills, and runnable examples.
- Include with `candidate` status: relevant projects with weak README evidence, low stars, forks, mirrors, or incomplete setup notes.
- Exclude: source maps, dependency maps, gene-expression GEO, generic MCP routers, generic agent apps, and business apps where maps are only incidental.
- Exclude: "MCP" projects where MCP clearly means Map Content Platform rather than Model Context Protocol.

## Contents

- [Provider-maintained and reference servers](#provider-maintained-and-reference-servers)
- [AMap and Gaode servers](#amap-and-gaode-servers)
- [Baidu Maps](#baidu-maps)
- [Google Maps servers](#google-maps-servers)
- [OpenStreetMap and open geospatial servers](#openstreetmap-and-open-geospatial-servers)
- [Mapbox](#mapbox)
- [GIS, geocoding, and other providers](#gis-geocoding-and-other-providers)
- [Agent apps and workflows](#agent-apps-and-workflows)
- [Examples, demos, and low-signal candidates](#examples-demos-and-low-signal-candidates)
- [Mirrors and forks](#mirrors-and-forks)
- [Excluded edge cases](#excluded-edge-cases)

## Provider-maintained and reference servers

| Project | Kind | Provider | Map signals | Notes |
|---|---|---|---|---|
| [baidu-maps/mcp](https://github.com/baidu-maps/mcp) | server | Baidu Maps | `geocoding`, `poi`, `routing`, `weather`, `traffic` | Official Baidu Map MCP server with Python and TypeScript options. · 426★ |
| [mapbox/mcp-devkit-server](https://github.com/mapbox/mcp-devkit-server) | developer server | Mapbox | `mapbox-dev`, `docs`, `tooling` | Developer-focused Mapbox MCP server. · 54★ |
| [@modelcontextprotocol/server-google-maps](https://www.npmjs.com/package/@modelcontextprotocol/server-google-maps) | reference server | Google Maps | `geocoding`, `places`, `directions` | Reference Google Maps MCP package; useful as a legacy baseline. |
| [AMap Maps MCP Server (npm)](https://www.npmjs.com/package/@amap/amap-maps-mcp-server) | server | AMap/Gaode | `geocoding`, `poi`, `routing`, `weather` | AMap MCP package used by many Gaode examples; runs via npx with AMAP_MAPS_API_KEY. |
| [Mapbox MCP Server](https://github.com/mapbox/mcp-server) | server | Mapbox | `geocoding`, `poi`, `routing`, `isochrone`, `static-map` | Official Mapbox MCP server with hosted endpoint and npm package. |
| [mapbox/mcp-docs-server](https://github.com/mapbox/mcp-docs-server) | docs server | Mapbox | `docs`, `mapbox-dev` | Mapbox documentation MCP server. |

## AMap and Gaode servers

| Project | Kind | Provider | Map signals | Notes |
|---|---|---|---|---|
| [sugarforever/amap-mcp-server](https://github.com/sugarforever/amap-mcp-server) | server | AMap/Gaode | `geocoding`, `weather`, `routing`, `stdio`, `sse` | Community Gaode MCP server supporting stdio, SSE, and streamable HTTP. · 106★ |
| [zxypro1/amap-maps-mcp-server](https://github.com/zxypro1/amap-maps-mcp-server) | server | AMap/Gaode | `geocoding`, `poi`, `routing`, `weather` | GitHub source/repackage for @amap/amap-maps-mcp-server. · 22★ |
| [merulas/amap-mcp-weather](https://github.com/merulas/amap-mcp-weather) | server | AMap/Gaode | `weather`, `amap` | Amap weather API service. · 7★ |
| [GeBabyGeeGee/AmapMCPServer](https://github.com/GeBabyGeeGee/AmapMCPServer) _candidate_ | server | AMap/Gaode | `amap`, `mcp-server` | Amap MCP server repo with minimal public description. · 3★ |
| [Keldon-Pro/amap-mcp-streamable_http](https://github.com/Keldon-Pro/amap-mcp-streamable_http) | server | AMap/Gaode | `streamable-http`, `routing`, `geocoding` | AMap MCP server variant using Streamable HTTP. · 3★ |
| [Francis235/amap-mcp](https://github.com/Francis235/amap-mcp) _candidate_ | server | AMap/Gaode | `amap`, `mcp` | Low-signal AMap MCP candidate. · 2★ |
| [qiao101660/gaode_mcp](https://github.com/qiao101660/gaode_mcp) _candidate_ | server | AMap/Gaode | `gaode`, `mcp` | Gaode MCP candidate with sparse description. · 2★ |
| [JavaAIDev/amap-mcp-server](https://github.com/JavaAIDev/amap-mcp-server) | server | AMap/Gaode | `amap`, `kotlin`, `mcp-server` | Kotlin AMap MCP server. · 1★ |
| [kfzzzzzz/gaode-mcp-server](https://github.com/kfzzzzzz/gaode-mcp-server) _candidate_ | server | AMap/Gaode | `gaode`, `homeassistant`, `mcp-server` | Gaode MCP server candidate for Home Assistant. · 1★ |
| [aliyun-computenest/quickstart-amap-mcp](https://github.com/aliyun-computenest/quickstart-amap-mcp) _candidate_ | deployment quickstart | AMap/Gaode | `quickstart`, `deployment`, `amap` | Compute Nest quickstart for deploying AMap MCP. |
| [Fottas/amap-mcp-server](https://github.com/Fottas/amap-mcp-server) _candidate_ | server | AMap/Gaode | `amap`, `mcp-server` | Low-signal Java AMap MCP server candidate. |
| [longyuan1996/amap-maps-mcp](https://github.com/longyuan1996/amap-maps-mcp) | server | AMap/Gaode | `routing`, `geocoding`, `poi`, `weather` | AMap MCP plugin focused on route-planning v2/v5 API support. |
| [luozengchang/mcp-amap](https://github.com/luozengchang/mcp-amap) | server | AMap/Gaode | `amap`, `mcp-server` | Gaode Map MCP server. |
| [maoshuorz/openclaw-skills](https://github.com/maoshuorz/openclaw-skills) _candidate_ | skill collection | AMap/Gaode | `skill`, `amap-mcp` | OpenClaw skill collection that includes an AMap MCP skill. |
| [NanSsye-de/amap-maps](https://github.com/NanSsye-de/amap-maps) | plugin | AMap/Gaode | `routing`, `geocoding`, `nearby-search`, `navigation`, `weather` | Gaode MCP plugin covering routing, geocoding, nearby search, navigation wakeup, and weather. |

## Baidu Maps

| Project | Kind | Provider | Map signals | Notes |
|---|---|---|---|---|
| [BACH-AI-Tools/baidu-maps-mcp](https://github.com/BACH-AI-Tools/baidu-maps-mcp) _candidate_ | server | Baidu Maps | `baidu-map`, `mcp-server` | Baidu Maps MCP package/repackaging candidate. |
| [luowei0526/Fine-tuning](https://github.com/luowei0526/Fine-tuning) _candidate_ | agent app | Baidu Maps | `navigation`, `service-station`, `multi-agent` | Description claims a map-navigation agent using Baidu Maps MCP, but README/code still needs verification. |

## Google Maps servers

| Project | Kind | Provider | Map signals | Notes |
|---|---|---|---|---|
| [Neutrollized/google-maps-mcp-server](https://github.com/Neutrollized/google-maps-mcp-server) | server | Google Maps | `google-maps-platform`, `mcp-server` | Google Maps Platform MCP server. · 14★ |
| [Garblesnarff/google-maps-mcp](https://github.com/Garblesnarff/google-maps-mcp) | server | Google Maps | `geocoding`, `places`, `directions`, `weather`, `environment` | Comprehensive Google Maps MCP server for outdoor/location analysis. · 10★ |
| [apurvaumredkar/google-maps-mcp](https://github.com/apurvaumredkar/google-maps-mcp) | server | Google Maps | `places`, `routes`, `static-map`, `street-view`, `geocoding` | Published as mcp-server-google-maps with broad Google Maps coverage. · 9★ |
| [ettysekhon/google-maps-mcp-server](https://github.com/ettysekhon/google-maps-mcp-server) | server | Google Maps | `places`, `directions`, `geocoding`, `roads`, `kubernetes` | Google Maps MCP server with Kubernetes deployment notes. · 4★ |
| [Mastan1301/google_maps_mcp](https://github.com/Mastan1301/google_maps_mcp) | server | Google Maps | `places` | Google Maps MCP server using the Places API. · 4★ |
| [vicpeacock/google-maps-comprehensive-mcp](https://github.com/vicpeacock/google-maps-comprehensive-mcp) | server | Google Maps | `geocoding`, `places`, `directions`, `elevation` | Complete Google Maps MCP server with eight tools. · 4★ |
| [david-pivonka/google-maps-mcp-server](https://github.com/david-pivonka/google-maps-mcp-server) | server | Google Maps | `stdio`, `google-maps-platform` | STDIO-based MCP server for Google Maps Platform APIs. · 2★ |
| [arthurkatcher/google-maps-mcp](https://github.com/arthurkatcher/google-maps-mcp) | server | Google Maps | `places`, `directions`, `geocoding`, `uvx` | Google Maps MCP server for Claude Desktop, Cursor, and Claude Code. · 1★ |
| [annyzhou/google-maps-mcp](https://github.com/annyzhou/google-maps-mcp) | server | Google Maps | `places`, `routes`, `read-only` | Dedalus MCP server for read-only access to Google Maps Platform APIs. |
| [BrendanMartin/google-maps-mcp](https://github.com/BrendanMartin/google-maps-mcp) | server | Google Maps | `go`, `google-maps-rest` | Lightweight Go MCP server wrapping Google Maps REST APIs. |
| [cablate/mcp-google-map](https://github.com/cablate/mcp-google-map) | server | Google Maps | `geocoding`, `search`, `directions`, `weather`, `air-quality`, `map-images` | NPM package @cablate/mcp-google-map with 18 Google Maps tools. |
| [niklasmeixner-langdock/googlemaps-mcp-server](https://github.com/niklasmeixner-langdock/googlemaps-mcp-server) | app server | Google Maps | `oauth`, `interactive-map-ui` | Google Maps MCP app server with OAuth DCR and interactive map UI. |
| [PeterJBurke/google-maps-mcp-server](https://github.com/PeterJBurke/google-maps-mcp-server) | server | Google Maps | `cloud-run`, `chatgpt`, `google-maps-platform` | Google Maps Platform Code Assist MCP Server deployable to Cloud Run. |
| [pipeworx-io/mcp-google_maps](https://github.com/pipeworx-io/mcp-google_maps) | server | Google Maps | `geocoding`, `places`, `directions`, `distance-matrix`, `elevation` | Google Maps MCP pack. |

## OpenStreetMap and open geospatial servers

| Project | Kind | Provider | Map signals | Notes |
|---|---|---|---|---|
| [jagan-shanmugam/open-streetmap-mcp](https://github.com/jagan-shanmugam/open-streetmap-mcp) | server | OpenStreetMap | `location-services`, `geospatial-data` | OpenStreetMap MCP server for location-based services. · 193★ |
| [NERVsystems/osmmcp](https://github.com/NERVsystems/osmmcp) | server | OpenStreetMap | `geocoding`, `routing`, `nearby-places`, `ev-charging` | OpenStreetMap MCP server with precision geospatial tools. · 22★ |
| [tpp6me/osm-mcp-server](https://github.com/tpp6me/osm-mcp-server) | server | OpenStreetMap | `nominatim`, `osrm` | MCP server for Nominatim and OSRM applications. · 5★ |
| [neco001/openstreetmap-mcp](https://github.com/neco001/openstreetmap-mcp) | server | OpenStreetMap | `geocoding`, `livability`, `commute-analysis` | Advanced OpenStreetMap MCP server for AI agents. · 1★ |
| [Subhashnaidudulla/osm-mcp-server](https://github.com/Subhashnaidudulla/osm-mcp-server) | server | OpenStreetMap | `openstreetmap`, `mcp-server` | OpenStreetMap MCP server implementation. · 1★ |
| [agent-engineering-studio/mcp-osm](https://github.com/agent-engineering-studio/mcp-osm) | server + agent | OpenStreetMap | `nominatim`, `overpass`, `osrm`, `docker` | OpenStreetMap MCP server plus Microsoft Agent Framework agent. |
| [AiAgentKarl/geospatial-mcp-server](https://github.com/AiAgentKarl/geospatial-mcp-server) | server | OpenStreetMap | `geocoding`, `poi`, `routing`, `area-stats` | Geospatial data MCP server backed by OpenStreetMap. |
| [yuiseki/osm-mcp-server](https://github.com/yuiseki/osm-mcp-server) | server | OpenStreetMap | `openstreetmap-api` | Model Context Protocol server for OpenStreetMap APIs. |

## Mapbox

| Project | Kind | Provider | Map signals | Notes |
|---|---|---|---|---|
| [AidenYangX/mapbox-mcp-server](https://github.com/AidenYangX/mapbox-mcp-server) | server | Mapbox | `mapbox-api` | MCP server for Mapbox API. · 12★ |
| [gaopengbin/mapbox-mcp](https://github.com/gaopengbin/mapbox-mcp) | server | Mapbox | `mapbox-gl-js`, `2d-map`, `3d-map`, `map-control` | AI-powered 2D/3D Mapbox GL JS control via MCP. · 2★ |
| [LandAdvisors/mapbox_mcp_demo](https://github.com/LandAdvisors/mapbox_mcp_demo) | demo server | Mapbox | `cloudflare-worker`, `map-control` | Cloudflare Worker MCP demo for controlling Mapbox maps. |
| [mattpodwysocki/ai-poland-mapbox-mcp](https://github.com/mattpodwysocki/ai-poland-mapbox-mcp) _candidate_ | workshop demo | Mapbox | `mapbox`, `workshop` | AI Poland 2025 Mapbox MCP workshop repo. |
| [moritzzzzz/mapbox-mcp-tools-ios](https://github.com/moritzzzzz/mapbox-mcp-tools-ios) _candidate_ | ios tooling | Mapbox | `ios`, `mapbox` | Low-signal Mapbox MCP tools for iOS. |
| [windsornguyen/mapbox-mcp](https://github.com/windsornguyen/mapbox-mcp) | server | Mapbox | `mapbox-web-services` | Mapbox MCP server exposing Mapbox web services APIs. |

## GIS, geocoding, and other providers

| Project | Kind | Provider | Map signals | Notes |
|---|---|---|---|---|
| [chirikuuka/mlit-geospatial-mcp](https://github.com/chirikuuka/mlit-geospatial-mcp) | server | Japan MLIT | `geospatial`, `mlit` | MLIT geospatial MCP server. · 176★ |
| [mahdin75/geoserver-mcp](https://github.com/mahdin75/geoserver-mcp) | server | GeoServer | `geoserver`, `rest-api` | MCP server connecting LLMs to the GeoServer REST API. · 73★ |
| [burningion/geoapify-mcp](https://github.com/burningion/geoapify-mcp) | server | Geoapify | `geoapify`, `geocoding`, `places` | Demo MCP server for the Geoapify API. · 4★ |
| [mgurbuz-tr/geoserver-mcp](https://github.com/mgurbuz-tr/geoserver-mcp) _candidate_ | server | GeoServer | `geoserver` | GeoServer MCP candidate. · 3★ |
| [NodeGIS/geo-mcp-server](https://github.com/NodeGIS/geo-mcp-server) _candidate_ | server | GIS | `geo`, `mcp-server` | Geo MCP server candidate. · 3★ |
| [cschotte/azure-maps-mcp](https://github.com/cschotte/azure-maps-mcp) | server | Azure Maps | `azure-maps` | Azure Maps MCP server. · 2★ |
| [OriShmila/geoapify-mcp-server](https://github.com/OriShmila/geoapify-mcp-server) _candidate_ | server | Geoapify | `geoapify` | Low-signal Geoapify MCP server candidate. · 1★ |
| [FjolleI/geo-mcp](https://github.com/FjolleI/geo-mcp) | server | Geo utilities | `weather`, `geocoding`, `timezone`, `nearby-places` | Geospatial MCP server for Claude. · 0★ |
| [pyramid146/geo-mcp](https://github.com/pyramid146/geo-mcp) | server | UK geospatial | `flood`, `property`, `heritage`, `crime`, `elevation` | UK geospatial MCP server. · 0★ |
| [anandaroop/geonames-mcp](https://github.com/anandaroop/geonames-mcp) | server | GeoNames | `geonames`, `geocoding` | Model Context Protocol server for the GeoNames API. |
| [ArashM0z/geoserver-mcp-server](https://github.com/ArashM0z/geoserver-mcp-server) | server | GeoServer | `wfs`, `wms`, `cql`, `helm` | GeoServer MCP server exposing WFS/WMS as typed tools. |
| [archetipo/geonames-mcp-server](https://github.com/archetipo/geonames-mcp-server) | server | GeoNames | `geonames` | MCP server for GeoNames. |
| [geoplugin-hq/geoplugin-mcp-server](https://github.com/geoplugin-hq/geoplugin-mcp-server) _candidate_ | server | geoPlugin | `geolocation` | geoPlugin MCP server candidate. |
| [govex/geocoding-mcp-server](https://github.com/govex/geocoding-mcp-server) | server | Census geocoder | `geocoding`, `boundary-data`, `residency-verification` | Geocoding and residency verification MCP server. |
| [gurnebwaissneq/tomtom-mcp-server](https://github.com/gurnebwaissneq/tomtom-mcp-server) | server | TomTom | `tomtom`, `geospatial` | TomTom geospatial MCP server. |
| [honua-io/geospatial-mcp](https://github.com/honua-io/geospatial-mcp) | standard | Open geospatial | `geospatial-standard`, `analyst-workflows`, `map-workflows` | Open geospatial MCP standard for analyst, map, and app-builder workflows. |
| [jackyang25/geolocation-mcp-server](https://github.com/jackyang25/geolocation-mcp-server) | server | WalkScore | `geolocation`, `walkability`, `transit`, `bike-score` | Geolocation MCP server with WalkScore API integration. |

## Agent apps and workflows

| Project | Kind | Provider | Map signals | Notes |
|---|---|---|---|---|
| [geekjourneyx/travel-guidebook](https://github.com/geekjourneyx/travel-guidebook) | skill | AMap/Gaode | `travel-guide`, `pdf`, `poi`, `routing` | Agent Skill that generates travel guidebook HTML/PDF using parallel agents and AMap MCP. · 61★ |
| [eason69113-source/AI_Trip_Planner](https://github.com/eason69113-source/AI_Trip_Planner) | agent app | AMap/Gaode | `trip-planning`, `poi`, `hotel`, `weather`, `budget` | LangChain + FastAPI multi-agent travel planner using Gaode MCP/server data. · 16★ |
| [Ceeon/mcp-chat-client](https://github.com/Ceeon/mcp-chat-client) | chat client | AMap/Gaode | `chat`, `amap-mcp` | Chat client built on Gaode Map MCP services. · 13★ |
| [luuisotorres/mcp-ai-agent](https://github.com/luuisotorres/mcp-ai-agent) | agent app | Google Maps | `google-adk`, `location-questions`, `tool-tracing` | Google ADK agent using Google Maps MCP for real-world location questions. · 8★ |
| [blacsheep/LLM-Amap-mcp](https://github.com/blacsheep/LLM-Amap-mcp) | agent app | AMap/Gaode | `address-service`, `llm`, `amap` | LLM plus AMap MCP address service. · 6★ |
| [fjh2021/amap-mcp-119](https://github.com/fjh2021/amap-mcp-119) | emergency app | AMap/Gaode | `escape-route`, `hospital`, `fire-station`, `rescue-routing` | Fire emergency app using AMap MCP for alarm location and rescue routes. · 5★ |
| [gokborayilmaz/Best-Restaurants-Route-Planner-Agent](https://github.com/gokborayilmaz/Best-Restaurants-Route-Planner-Agent) | route planner | Google Maps | `restaurant-search`, `shortest-route`, `google-maps-mcp` | Restaurant route planner using Google Maps MCP. · 4★ |
| [KFAaron/mcp-client](https://github.com/KFAaron/mcp-client) | client | AMap/Gaode | `deepseek`, `amap-mcp` | Simple MCP client integrating DeepSeek and Gaode Map MCP. · 4★ |
| [OliviaWYQ/weather_harmony](https://github.com/OliviaWYQ/weather_harmony) | mobile app | AMap/Gaode | `weather`, `harmonyos`, `amap-mcp` | HarmonyOS app querying weather through Gaode Map MCP. · 4★ |
| [MisterZhouZhou/cursor-amap-travel](https://github.com/MisterZhouZhou/cursor-amap-travel) | travel app | AMap/Gaode | `travel-planning`, `amap-mcp` | Cursor + Gaode MCP travel planning. · 3★ |
| [oldsheep1101/offduty-escape-agent](https://github.com/oldsheep1101/offduty-escape-agent) | local planning app | AMap/Gaode | `entertainment-planning`, `route-context`, `amap-mcp` | Post-work movie and food route planner using Gaode Map MCP. · 3★ |
| [ScholarChen20/travel_agent](https://github.com/ScholarChen20/travel_agent) | travel agent | AMap/Gaode | `helloagents`, `trip-planning`, `amap-mcp` | HelloAgents-based intelligent travel system with Gaode Map MCP. · 3★ |
| [gokborayilmaz/smart-traffic-navigator-agent](https://github.com/gokborayilmaz/smart-traffic-navigator-agent) | traffic agent | Google Maps | `traffic`, `alternative-routes`, `travel-time` | Traffic navigation agent using Google Maps MCP. · 2★ |
| [Abhi-245/Trip_planner_agent_mcp_server](https://github.com/Abhi-245/Trip_planner_agent_mcp_server) | travel planner | Google Maps | `streamlit`, `airbnb`, `distance`, `itinerary`, `calendar-export` | Trip planner integrating Airbnb MCP and Google Maps MCP. · 1★ |
| [longyaoyoudu/map_agent](https://github.com/longyaoyoudu/map_agent) | agent app | AMap/Gaode | `react-agent`, `amap-mcp` | ReAct agent that calls AMap MCP. · 1★ |
| [shayan2772/Travel-Itinerary-Generator-with-Google-Maps-MCP](https://github.com/shayan2772/Travel-Itinerary-Generator-with-Google-Maps-MCP) | travel planner | Google Maps | `travel-itinerary`, `openai`, `google-maps-mcp` | AI travel itinerary generator combining OpenAI and Google Maps through MCP. · 1★ |
| [TeliangWang/LLM-CherryStudio-MCP](https://github.com/TeliangWang/LLM-CherryStudio-MCP) | travel assistant | AMap/Gaode | `cherrystudio`, `travel-planning`, `amap-mcp` | Personal travel planning assistant using AMap MCP and CherryStudio. · 1★ |
| [V8dkA/voice-mcp-assistant](https://github.com/V8dkA/voice-mcp-assistant) | voice assistant | AMap/Gaode | `asr`, `tts`, `weather`, `poi`, `routing`, `geocoding` | Voice assistant pipeline calling AMap MCP tools. · 1★ |
| [yo2580/trip_planner](https://github.com/yo2580/trip_planner) | travel planner | AMap/Gaode | `langgraph`, `trip-planning`, `amap-mcp` | LangGraph travel planner with Gaode Map MCP. · 1★ |
| [2022124030jc/SmartRoute_Service_Nest](https://github.com/2022124030jc/SmartRoute_Service_Nest) | route service | AMap/Gaode | `nestjs`, `route-planning`, `llm`, `amap-mcp` | NestJS smart route service combining Gaode MCP and LLM UX. |
| [649019011/hangzhou-tour](https://github.com/649019011/hangzhou-tour) | travel web app | AMap/Gaode | `hangzhou`, `itinerary`, `poi`, `weather` | Hangzhou three-day travel guide web app based on Gaode MCP API. |
| [aryxenv/Google-Maps-MCP-Speech](https://github.com/aryxenv/Google-Maps-MCP-Speech) | speech app | Google Maps | `speech-to-text`, `google-maps-mcp` | Google Maps MCP web app with speech-to-text functionality. |
| [bruce256/amap-agent](https://github.com/bruce256/amap-agent) | route agent | AMap/Gaode | `route-planning`, `agent`, `amap-mcp` | Path-planning agent built with Gaode Map MCP. |
| [cacohe/trip-planner](https://github.com/cacohe/trip-planner) | travel planner | AMap/Gaode | `langchain`, `minimax`, `amap-mcp` | LangChain travel planner integrating Gaode Map MCP and MiniMax. |
| [ChinaPoger/MarsAI](https://github.com/ChinaPoger/MarsAI) _candidate_ | route app | AMap/Gaode | `route-planning`, `amap-mcp` | Uses Gaode MCP for route planning. |
| [ClarenceChen0627/helloagents-trip-planner](https://github.com/ClarenceChen0627/helloagents-trip-planner) | travel planner | AMap/Gaode | `helloagents`, `trip-planning`, `amap-mcp` | HelloAgents travel planner integrating Gaode Map MCP. |
| [farheen2604/location-intelligence-adk-agent](https://github.com/farheen2604/location-intelligence-adk-agent) | location intelligence | Google Maps | `google-adk`, `bigquery`, `location-intelligence` | Location intelligence ADK agent using Google Maps MCP and BigQuery. |
| [gejibin/travel-assistant](https://github.com/gejibin/travel-assistant) | travel planner | AMap/Gaode | `trip-planning`, `amap-mcp`, `translation`, `image-search` | Travel assistant integrating Gaode MCP, translation, and image search. |
| [goodgqbb/travel_agent](https://github.com/goodgqbb/travel_agent) | travel agent | AMap/Gaode | `langgraph`, `multi-agent`, `memory`, `amap-mcp` | Supervisor-style travel planning agent with Gaode MCP tools. |
| [kaleys/my-mastra-agent](https://github.com/kaleys/my-mastra-agent) _candidate_ | weather agent | AMap/Gaode | `mastra`, `weather`, `amap-mcp` | Mastra agent that calls Gaode MCP for regional weather. |
| [kenvinZero11/TravelPlanAgent](https://github.com/kenvinZero11/TravelPlanAgent) | travel planner | AMap/Gaode | `deepseek`, `fastapi`, `c-backend`, `route-planning`, `cards` | Tourism planning agent with AMap MCP and a Linux C route backend. |
| [Kudo330/helloagents](https://github.com/Kudo330/helloagents) | travel agent | AMap/Gaode | `helloagents`, `solo-travel`, `amap-mcp` | Solo travel planning agent with Gaode Map MCP. |
| [lllyyysss77/gaode_agent](https://github.com/lllyyysss77/gaode_agent) | travel agent | AMap/Gaode | `qwen`, `rag`, `route-planning`, `interactive-map` | Travel planning agent with Qwen, Gaode MCP, Tavily, RAG, and map visualization. |
| [ly-le/trip-planner](https://github.com/ly-le/trip-planner) | travel planner | AMap/Gaode | `trip-planning`, `vue`, `amap-mcp` | Intelligent trip planner with Gaode Map MCP. |
| [Me106y/UAVCDS](https://github.com/Me106y/UAVCDS) | drone dispatch | AMap/Gaode | `uav`, `dispatch`, `poi`, `kmz`, `amap-mcp` | Multi-agent UAV command/dispatch system using Gaode MCP POI data. |
| [omgyanghe/Travel_with_AI](https://github.com/omgyanghe/Travel_with_AI) | travel planner | AMap/Gaode | `langchain`, `trip-planning`, `amap-mcp` | LangChain 1.x travel assistant with Gaode Map MCP. |
| [passionworkeer/gaode_agent](https://github.com/passionworkeer/gaode_agent) | travel agent | AMap/Gaode | `qwen`, `rag`, `route-planning`, `interactive-map` | LLM travel planning agent using Qwen, Gaode MCP, and RAG. |
| [renjinguo/yanxue](https://github.com/renjinguo/yanxue) | study-tour app | AMap/Gaode | `study-tour`, `planning`, `amap-mcp` | Study-tour planning web app built with Gaode Map MCP. |
| [Rickyvicky/TravelGuide](https://github.com/Rickyvicky/TravelGuide) _candidate_ | travel guide | AMap/Gaode | `cursor`, `travel-guide`, `amap-mcp` | Cursor + Gaode MCP generated travel guide. |
| [sen10-24-2024/HelloAgents-Trip-Planner](https://github.com/sen10-24-2024/HelloAgents-Trip-Planner) | travel planner | AMap/Gaode | `helloagents`, `vue`, `map-view`, `export`, `amap-mcp` | FastAPI + HelloAgents + Vue trip planner with AMap MCP tools. |
| [shettyneha21/adk-location-intelligence-agent](https://github.com/shettyneha21/adk-location-intelligence-agent) | location intelligence | Google Maps | `google-adk`, `bigquery`, `google-maps-mcp` | Location intelligence AI agent using ADK, BigQuery, and Google Maps MCP. |
| [Sourita1308/Location-Intelligence-ADK-Agent](https://github.com/Sourita1308/Location-Intelligence-ADK-Agent) | location intelligence | Google Maps | `google-adk`, `business-location`, `bigquery` | Bakery location intelligence agent using Google Maps, MCP, BigQuery, and Gemini. |
| [tapirian/travel_guide](https://github.com/tapirian/travel_guide) | travel guide | AMap/Gaode | `cursor`, `travel-guide`, `amap-mcp` | China travel guides generated with Gaode MCP and Cursor. |
| [vdaubry/mcp-app-google-maps](https://github.com/vdaubry/mcp-app-google-maps) | mcp app | Google Maps | `directions`, `places`, `geocoding`, `interactive-map-widget` | Google Maps MCP App with embedded interactive map widget. |
| [xiaoguang0723/helloagents-trip-planner-langgraph](https://github.com/xiaoguang0723/helloagents-trip-planner-langgraph) | travel planner | AMap/Gaode | `langgraph`, `poi`, `weather`, `route-planning`, `vector-search` | LangGraph trip planner whose sub-agents collect data through Gaode MCP. |
| [xiaohongmao-yamiyami/hy-app](https://github.com/xiaohongmao-yamiyami/hy-app) _candidate_ | android app | AMap/Gaode | `android`, `travel-planning`, `amap-mcp` | Android app for a one-stop AI travel planner based on Gaode MCP. |
| [xiaohongmao-yamiyami/hy-back-H5](https://github.com/xiaohongmao-yamiyami/hy-back-H5) _candidate_ | travel backend | AMap/Gaode | `backend`, `travel-planning`, `amap-mcp` | Backend for a one-stop AI travel assistant based on Gaode MCP. |
| [xiaohongmao-yamiyami/hy-front-h5](https://github.com/xiaohongmao-yamiyami/hy-front-h5) _candidate_ | travel frontend | AMap/Gaode | `h5`, `travel-planning`, `amap-mcp` | Frontend for a one-stop AI travel assistant based on Gaode MCP. |

## Examples, demos, and low-signal candidates

| Project | Kind | Provider | Map signals | Notes |
|---|---|---|---|---|
| [lm-rebooter/amapMcpDemo](https://github.com/lm-rebooter/amapMcpDemo) _candidate_ | demo | AMap/Gaode | `demo`, `amap-mcp` | Gaode Map MCP demo. · 2★ |
| [arunrajece/google-maps-mcp-server](https://github.com/arunrajece/google-maps-mcp-server) _candidate_ | server | Google Maps | `local-node`, `google-maps-mcp` | Local Node.js Google Maps MCP server. · 1★ |
| [sphynxlee/amap-mcp-demo](https://github.com/sphynxlee/amap-mcp-demo) | demo | AMap/Gaode | `api-demo`, `frontend`, `backend` | Demo project for all AMap MCP APIs. · 1★ |
| [NewbieNL/enhanced-google-maps-mcp](https://github.com/NewbieNL/enhanced-google-maps-mcp) _candidate_ | demo | Google Maps | `layout`, `google-maps-mcp` | Enhanced Google Maps MCP demo. · 0★ |
| [arunrajece/google-maps-mcp-cloudrun](https://github.com/arunrajece/google-maps-mcp-cloudrun) _candidate_ | cloud demo | Google Maps | `cloud-run`, `google-maps-mcp` | Google Maps MCP server for GCP hosting. |
| [gydd/Amap-mcp-test](https://github.com/gydd/Amap-mcp-test) _candidate_ | test | AMap/Gaode | `test`, `amap-mcp` | AMap MCP test repo. |
| [Jungle00/travel-mcp-server](https://github.com/Jungle00/travel-mcp-server) _candidate_ | demo | AMap/Gaode | `travel`, `gaode-mcp` | Gaode MCP travel server experiment. |
| [Mesmile888/mcpCs](https://github.com/Mesmile888/mcpCs) _candidate_ | test | AMap/Gaode | `test`, `amap-mcp` | Test project for Gaode MCP. |
| [NewbieNL/google-maps-mcp-server](https://github.com/NewbieNL/google-maps-mcp-server) _candidate_ | server | Google Maps | `traffic-layer`, `google-maps-mcp` | Google Maps MCP server with traffic layer functionality. |
| [nicholasFree/AmapMcpTest](https://github.com/nicholasFree/AmapMcpTest) _candidate_ | test | AMap/Gaode | `test`, `amap-mcp` | AMap MCP test repo. |
| [OneChainTech/amap-mcp-demo](https://github.com/OneChainTech/amap-mcp-demo) _candidate_ | demo | AMap/Gaode | `demo`, `amap-mcp` | AMap MCP demo candidate. |
| [phyllisllc/gaodeMCP](https://github.com/phyllisllc/gaodeMCP) _candidate_ | candidate | AMap/Gaode | `gaode-mcp` | Low-signal Gaode MCP candidate. |
| [ryuyx/amap-mcp](https://github.com/ryuyx/amap-mcp) _candidate_ | candidate | AMap/Gaode | `amap-mcp` | Low-signal AMap MCP candidate. |
| [Xiang-aipython/Amap_MCP](https://github.com/Xiang-aipython/Amap_MCP) _candidate_ | candidate | AMap/Gaode | `amap-mcp` | Low-signal AMap MCP candidate. |
| [xueyuxin8888/ReActAgentAmapMCPServer](https://github.com/xueyuxin8888/ReActAgentAmapMCPServer) _candidate_ | react demo | AMap/Gaode | `react-agent`, `amap-mcp` | ReAct agent AMap MCP server experiment. |

## Mirrors and forks

| Project | Kind | Provider | Map signals | Notes |
|---|---|---|---|---|
| [masx200/amap-maps-mcp-server](https://github.com/masx200/amap-maps-mcp-server) _candidate_ | fork | AMap/Gaode | `fork`, `amap-mcp` | Fork/mirror of zxypro1/amap-maps-mcp-server. · 3★ |
| [estebamod/osmmcp](https://github.com/estebamod/osmmcp) _candidate_ | fork | OpenStreetMap | `fork`, `osm` | Fork of an OpenStreetMap MCP server. · 2★ |
| [feifeiwong1979/baidu-maps_mcp](https://github.com/feifeiwong1979/baidu-maps_mcp) _candidate_ | mirror | Baidu Maps | `mirror`, `baidu-map` | Mirror of baidu-maps/mcp. |
| [lwsinclair/burningion_geoapify-mcp](https://github.com/lwsinclair/burningion_geoapify-mcp) _candidate_ | mirror | Geoapify | `mirror`, `geoapify` | Mirror of burningion/geoapify-mcp. |
| [mcpflow/AidenYangX_mapbox-mcp-server](https://github.com/mcpflow/AidenYangX_mapbox-mcp-server) _candidate_ | mirror | Mapbox | `mirror`, `mapbox` | Mirror of AidenYangX/mapbox-mcp-server. |

## Excluded edge cases

These are intentionally not listed, mostly to avoid re-adding attractive false positives.

| Project | Reason |
|---|---|
| [bamboo-moon/zhisaotong-Agent](https://github.com/bamboo-moon/zhisaotong-Agent) | Sweeping-robot customer-service/RAG app; AMap weather/location is incidental rather than the core product. |
| [oldjie/Wuhan-Art-Map](https://github.com/oldjie/Wuhan-Art-Map) | Uses AMap MCP as Map Content Platform wording, not Model Context Protocol. |
| [wsyqwsyq/CampusDateMap_-MCP-](https://github.com/wsyqwsyq/CampusDateMap_-MCP-) | Campus map app, but README language points to AMap platform/API rather than Model Context Protocol. |
| [QuentinCody/depmap-mcp-server](https://github.com/QuentinCody/depmap-mcp-server) | DepMap means cancer dependency map, not geographic maps. |
| [openpharma-org/geo-mcp-server](https://github.com/openpharma-org/geo-mcp-server) | GEO means Gene Expression Omnibus, not geospatial/location. |
| [mbender-ms/geo-mcp-server](https://github.com/mbender-ms/geo-mcp-server) | GEO means Generative Engine Optimization, not map/geospatial. |
| [YZDame/geogebra-mcp-server](https://github.com/YZDame/geogebra-mcp-server) | GeoGebra geometry/CAS server, not map/geospatial data. |
| [202422/DoctorAssistant](https://github.com/202422/DoctorAssistant) | Medical multi-agent app; Google Maps MCP is only used by one pharmacy-finder sub-agent. |
| [psrikanthm/expense-report](https://github.com/psrikanthm/expense-report) | Expense categorization app; Google Maps MCP is optional grounding for merchant names. |

## Contributing

Add new entries to `data/projects.json`, then run:

```bash
npm run build
npm run check
```

Every listed entry should explain why it is map-related through `signals` and `notes`. Put rejected or ambiguous projects in `data/excluded.json` with a short reason.
