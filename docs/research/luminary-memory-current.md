# LUMINARY MEMORY: Current State

**Research date:** 2026-09-06 UTC
**Scope:** First-party GitHub sources only: repository metadata, release/tag APIs, README, `pyproject.toml`, changelog, and tracked documentation.

## Executive findings

- **Latest release:** `v0.3.0`, published **2026-08-23 22:19:57 UTC**. The tag points to commit `a54ee4744c67149cd8628b2200d6907f1d169394`, whose commit timestamp is **2026-08-23 22:18:40 UTC**. The changelog labels the release `0.3.0` with date `2026-08-24`.
- **Current package metadata:** `pyproject.toml` declares version `0.3.0`, Python `>=3.11`, Apache-2.0, and the Hermes entry point.
- The portfolio entry in `src/components/portfolio/projects.tsx` is materially stale for **version**, **coverage**, and **test count**.
- Several feature descriptions remain accurate, but two need qualification: four-way retrieval is fused but the query planner may skip low-value strategies, and automatic contradiction replacement is no longer the provider behavior.
- `Cloud tokens: 0` is not a repository-wide measured metric. It is only true for a local/no-LLM deployment; the project supports optional configurable LLM endpoints.

## Release and package evidence

| Finding | First-party evidence |
| --- | --- |
| Latest released version is `v0.3.0` | [GitHub Releases API `/releases/latest`](https://api.github.com/repos/alertxsto/luminary-memory/releases/latest): `"tag_name":"v0.3.0"`, `"published_at":"2026-08-23T22:19:57Z"`, and `"html_url":"https://github.com/alertxsto/luminary-memory/releases/tag/v0.3.0"`. The [tags API](https://api.github.com/repos/alertxsto/luminary-memory/tags) lists `v0.3.0` first. |
| Tag/commit date | [Tag target commit API](https://api.github.com/repos/alertxsto/luminary-memory/commits/a54ee4744c67149cd8628b2200d6907f1d169394): commit `a54ee...`, author and committer date `2026-08-23T22:18:40Z`. |
| Changelog date and release contents | [`CHANGELOG.md`, `## [0.3.0] - 2026-08-24`](https://github.com/alertxsto/luminary-memory/blob/main/CHANGELOG.md#030---2026-08-24): “Major release. Memory is now scoped, evidenced, and auditable end to end” and current verification `505 passed, 3 skipped`, `83%` full-source coverage. |
| Package version and runtime | [`pyproject.toml`, `[project]`](https://github.com/alertxsto/luminary-memory/blob/main/pyproject.toml): `version = "0.3.0"`, `requires-python = ">=3.11"`, `license = { text = "Apache-2.0" }`. |
| Hermes provider packaging | [`pyproject.toml`, `[project.entry-points."hermes_agent.memory_providers"]`](https://github.com/alertxsto/luminary-memory/blob/main/pyproject.toml): `luminary = "luminary_memory.hermes"`. |

## Portfolio claim audit

The claims below are the LUMINARY MEMORY entry at [`src/components/portfolio/projects.tsx:L211-L287`](../../src/components/portfolio/projects.tsx).

### Identity, tagline, and stack

| Portfolio claim | Assessment | Located first-party evidence |
| --- | --- | --- |
| `Open source · v0.2.16` | **Partly stale.** Open-source status is supported, but the version is stale; current release/package version is `v0.3.0`. | [`pyproject.toml`, `[project]`](https://github.com/alertxsto/luminary-memory/blob/main/pyproject.toml) declares Apache-2.0 and `0.3.0`; [latest release](https://github.com/alertxsto/luminary-memory/releases/tag/v0.3.0) is `v0.3.0`. |
| “A lightweight, self-hosted memory layer for AI agents.” | **Accurate.** | [`README.md`, opening description](https://github.com/alertxsto/luminary-memory/blob/main/README.md): “**A lightweight, self-hosted memory layer for AI agents.**” |
| “4-strategy parallel fusion (ONNX, SQLite FTS5, temporal, graph)” | **Mostly accurate, but qualify `parallel`.** The four strategies and weighted fusion are current; the planner may skip a low-value strategy. | [`README.md`, “Four retrieval strategies. One fused result. Local by default.”](https://github.com/alertxsto/luminary-memory/blob/main/README.md): “**Four retrieval strategies. One fused result. Local by default.**” [`docs/recall.md`, “Four strategies”](https://github.com/alertxsto/luminary-memory/blob/main/docs/recall.md#four-strategies): “`recall(query)` evaluates up to four complementary strategies and fuses them”; it also says the query planner “may skip a low-value strategy.” |
| “DB-backed core memory” | **Accurate.** | [`README.md`, “Important rules always in context.”](https://github.com/alertxsto/luminary-memory/blob/main/README.md): “Durable rules tagged `core` are auto-loaded ... (the DB-backed `MEMORY.md`).” [`docs/recall.md`, “Core memory”](https://github.com/alertxsto/luminary-memory/blob/main/docs/recall.md#core-memory-db-backed-auto-loaded): “Rules tagged `core` are injected into the system prompt every session.” |
| “first-class Hermes Agent provider” | **Accurate.** | [`docs/hermes-integration.md`, “Preferred: install the provider”](https://github.com/alertxsto/luminary-memory/blob/main/docs/hermes-integration.md#preferred-install-the-provider): “`luminary-memory` ships a Hermes `MemoryProvider` registered through the `hermes_agent.memory_providers` entry-point group.” |
| `Python 3.11+` | **Accurate.** | [`pyproject.toml`, `[project]`](https://github.com/alertxsto/luminary-memory/blob/main/pyproject.toml): `requires-python = ">=3.11"`. |
| `FastEmbed (ONNX)` | **Accurate.** | [`README.md`, “Four retrieval strategies...”](https://github.com/alertxsto/luminary-memory/blob/main/README.md): semantic retrieval uses “ONNX embeddings (384-dim, CPU, no GPU needed)”; [`pyproject.toml`](https://github.com/alertxsto/luminary-memory/blob/main/pyproject.toml) includes `fastembed>=0.4.0`. |
| `SQLite (FTS5)` | **Accurate.** | [`docs/recall.md`, “Keyword”](https://github.com/alertxsto/luminary-memory/blob/main/docs/recall.md#2-keyword): “FTS5 (SQLite) ... term matching.” |
| `pgvector` | **Accurate.** | [`pyproject.toml`, dependencies](https://github.com/alertxsto/luminary-memory/blob/main/pyproject.toml) includes `pgvector>=0.2.5`; [`README.md`, configuration table](https://github.com/alertxsto/luminary-memory/blob/main/README.md#configuration) documents `pg_dsn` as “pgvector only.” |
| `Hermes Agent` | **Accurate.** | [`pyproject.toml`, entry points](https://github.com/alertxsto/luminary-memory/blob/main/pyproject.toml) registers the Hermes provider; [`docs/hermes-integration.md`](https://github.com/alertxsto/luminary-memory/blob/main/docs/hermes-integration.md) documents installation and activation. |
| `Pytest` | **Accurate.** | [`pyproject.toml`, dev dependencies](https://github.com/alertxsto/luminary-memory/blob/main/pyproject.toml) includes `pytest>=8.0`; [`CHANGELOG.md`, v0.3.0 tests](https://github.com/alertxsto/luminary-memory/blob/main/CHANGELOG.md#030---2026-08-24) reports `505 passed, 3 skipped`. |
| `RRF` | **Accurate.** | [`docs/recall.md`, “Fusion”](https://github.com/alertxsto/luminary-memory/blob/main/docs/recall.md#fusion): “**Weighted Reciprocal Rank Fusion (RRF)** combines the four ranked lists,” with weights `0.4 / 0.3 / 0.2 / 0.1`. |

### Feature cards

| Portfolio claim | Assessment | Located first-party evidence |
| --- | --- | --- |
| “Four-way parallel fusion combines ONNX vector search, FTS5 BM25, temporal decay, and entity graph signals” | **Accurate after qualifying `parallel` as above.** | [`docs/recall.md`, “Four strategies”](https://github.com/alertxsto/luminary-memory/blob/main/docs/recall.md#four-strategies) defines semantic, keyword/FTS5, temporal, and graph retrieval; “Fusion” defines RRF. |
| “DB-backed core memory, persistent memory, and recall storage stay local and deduplicated” | **Mostly accurate.** Core memory is DB-backed/local and core/query injection deduplicates by IDs and content hashes. Avoid wording that implies the removed importance-based “persistent context” surface. | [`docs/recall.md`, “Core memory”](https://github.com/alertxsto/luminary-memory/blob/main/docs/recall.md#core-memory-db-backed-auto-loaded): “Anti-duplication: memory ids and content hashes ... are tracked per turn”; [`docs/hermes-integration.md`, “Store layout”](https://github.com/alertxsto/luminary-memory/blob/main/docs/hermes-integration.md#store-layout) places the store at the local `$HERMES_HOME/luminary/memory.db`. |
| “Rule-aware query expansion preserves useful context when an entity graph has no direct match” | **Accurate.** | [`README.md`, “Accuracy safeguards”](https://github.com/alertxsto/luminary-memory/blob/main/README.md#architecture): “When the graph is empty, content tokens from a topically related important memory may be appended.” [`docs/recall.md`, “Query expansion”](https://github.com/alertxsto/luminary-memory/blob/main/docs/recall.md#query-expansion) documents the v0.2.15 content-aware fallback. |
| “Rule pinning, contradiction-aware replacement, and content-level anti-duplication protect durable context” | **Partly stale/needs rewrite.** Pinning and content-level dedup are current. Automatic/destructive contradiction replacement is not the current provider behavior; current docs require explicit, evidence-grounded supersession and preserve conflicts. | [`docs/hermes-integration.md`, “Rule hygiene”](https://github.com/alertxsto/luminary-memory/blob/main/docs/hermes-integration.md#rule-hygiene-v0211): “Hermes disables semantic rule auto-replacement”; a conflicting claim remains conflicted until explicit supersession. [`CHANGELOG.md`, v0.3.0](https://github.com/alertxsto/luminary-memory/blob/main/CHANGELOG.md#030---2026-08-24) describes explicit claim supersession/retraction and atomic deduplication. |
| “Adaptive importance lets useful recalled memories graduate into persistent context” | **Stale.** The importance-based persistent-context injection was removed in `v0.2.18`; importance now affects query relevance/pruning, not prompt pinning. | [`docs/recall.md`, “Core memory”](https://github.com/alertxsto/luminary-memory/blob/main/docs/recall.md#core-memory-db-backed-auto-loaded): “Persistent-context injection ... was **removed in v0.2.18**.” [`docs/recall.md`, “Adaptive importance”](https://github.com/alertxsto/luminary-memory/blob/main/docs/recall.md#adaptive-importance-v0215) says recalled memories are re-estimated for the next turn’s query recall ranking. |
| “Temporal signals and health scoring make memory freshness and relevance inspectable” | **Accurate.** | [`docs/recall.md`, “Temporal”](https://github.com/alertxsto/luminary-memory/blob/main/docs/recall.md#3-temporal) defines recency/access scoring; [`docs/lifecycle.md`, “health_score()”](https://github.com/alertxsto/luminary-memory/blob/main/docs/lifecycle.md#health_score-store-health-report-v024) documents a 0–100 report with staleness, importance, density, size, and duplicate-rate dimensions. |
| “TTL cleanup and semantic consolidation keep the store healthy as it grows” | **Accurate.** | [`docs/lifecycle.md`, “cleanup, TTL expiry”](https://github.com/alertxsto/luminary-memory/blob/main/docs/lifecycle.md#cleanup-ttl-expiry) and “consolidate, merge near-duplicates” document TTL removal plus semantic embedding-cosine/Jaccard consolidation. |
| “Hermes Agent provider integration supports per-turn context prefetch” | **Accurate.** | [`docs/hermes-integration.md`, “On the next session Hermes will”](https://github.com/alertxsto/luminary-memory/blob/main/docs/hermes-integration.md#preferred-install-the-provider) says “Auto-recall every turn”; [`CHANGELOG.md`, v0.2.1](https://github.com/alertxsto/luminary-memory/blob/main/CHANGELOG.md#021---2026-08-18) documents warm background prefetch and cached recall. |

### Metrics

| Portfolio metric | Assessment | Current evidence |
| --- | --- | --- |
| `Version: 0.2.16` | **Stale.** Update to `0.3.0`. | [`pyproject.toml`](https://github.com/alertxsto/luminary-memory/blob/main/pyproject.toml): `version = "0.3.0"`; [release `v0.3.0`](https://github.com/alertxsto/luminary-memory/releases/tag/v0.3.0). |
| `Coverage: 93%` | **Stale.** Current release evidence reports **83% full-source coverage**. | [`CHANGELOG.md`, v0.3.0 tests](https://github.com/alertxsto/luminary-memory/blob/main/CHANGELOG.md#030---2026-08-24): “`83%` full-source coverage (`4,866` statements, `837` missed).” The [README badge](https://github.com/alertxsto/luminary-memory/blob/main/README.md) also says `coverage-83%`. |
| `Tests: 370+` | **Stale.** Current release evidence reports **505 passed, 3 skipped**; README advertises `505+ passing`. | [`CHANGELOG.md`, v0.3.0 tests](https://github.com/alertxsto/luminary-memory/blob/main/CHANGELOG.md#030---2026-08-24); [`README.md` test badge](https://github.com/alertxsto/luminary-memory/blob/main/README.md). |
| `Cloud tokens: 0` | **Conditionally true, not a universal project metric.** Local/default operation has no configured LLM endpoint or key, but optional LLM curation/maintenance can use a configured endpoint and key. | [`README.md`, configuration](https://github.com/alertxsto/luminary-memory/blob/main/README.md#configuration): `llm_base_url` and `llm_api_key` default to empty strings and the LLM features are optional. [`docs/hermes-integration.md`, configuration](https://github.com/alertxsto/luminary-memory/blob/main/docs/hermes-integration.md#configuration) documents configurable OpenAI-compatible endpoints, including hosted examples. |

## Showcase update recommendation

At minimum, update the entry to `Open source · v0.3.0`, `Coverage: 83%`, and `Tests: 505+` (or `505 passed, 3 skipped`). Rewrite the adaptive-importance card so it describes ranking/pruning rather than graduation into persistent context, and rewrite contradiction handling as explicit evidence-grounded supersession/retraction rather than automatic replacement. Keep the four-strategy, DB-backed core, Hermes, lifecycle, and stack claims, with the `parallel` wording qualified by the query planner behavior.
