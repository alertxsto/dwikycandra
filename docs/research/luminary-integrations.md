# Luminary Memory integration research

## Scope and revisions checked

This research uses only the authoritative repository `alertxsto/luminary-memory`:

- Current `main`: [`420e6ca36ec20e1fec957deaad3be7b693d3863d`](https://github.com/alertxsto/luminary-memory/tree/420e6ca36ec20e1fec957deaad3be7b693d3863d)
- Release tag `v0.3.0`: [`a54ee4744c67149cd8628b2200d6907f1d169394`](https://github.com/alertxsto/luminary-memory/tree/a54ee4744c67149cd8628b2200d6907f1d169394)

The package metadata on current `main` still declares `version = "0.3.0"` ([`pyproject.toml`, lines 7-8](https://github.com/alertxsto/luminary-memory/blob/420e6ca36ec20e1fec957deaad3be7b693d3863d/pyproject.toml#L7-L8)). I inspected the repository tree, README, tracked documentation, `pyproject.toml`, Hermes scripts, and the Python source. A whole-word case-insensitive search of tracked files in both `main` and `v0.3.0` found no `Pi` or `OpenCode` integration path or references. The current `main` tree has no `opencode/`, `src/luminary_memory/opencode/`, or Pi-specific directory.

## Executive conclusion

| Host | Explicit first-class support in `v0.3.0` / current `main`? | Portfolio wording |
|---|---:|---|
| Hermes Agent | **Yes** | Truthfully say Luminary Memory supports/integrates with Hermes Agent as a first-class memory provider. |
| Pi coding agent | **No** | Do not say the repository supports Pi. At most, say the generic Python API/CLI could be manually used by an agent, if that configuration is separately built and tested. |
| OpenCode | **No in `v0.3.0` or current `main`** | Do not claim released/current-main OpenCode support. A separate branch named `feature/opencode-integration` contains an explicit OpenCode adapter, but that branch is not the inspected release or `main`. |

## What is first-class: Hermes Agent

The repository explicitly labels Hermes support as first-class in the README:

> “## Hermes Agent, first-class memory provider”
>
> “Luminary integrates through Hermes' public `MemoryProvider` entry point.”

Source: [`README.md`, lines 68-72](https://github.com/alertxsto/luminary-memory/blob/420e6ca36ec20e1fec957deaad3be7b693d3863d/README.md#L68-L72).

The release documentation repeats the claim and names the supported contract:

> “Use luminary-memory as a first-class **memory provider** for [Hermes Agent](https://github.com/NousResearch/hermes-agent).”
>
> “`luminary-memory` ships a Hermes `MemoryProvider` registered through the `hermes_agent.memory_providers` entry-point group.”

Source: [`docs/hermes-integration.md`, lines 1-11](https://github.com/alertxsto/luminary-memory/blob/420e6ca36ec20e1fec957deaad3be7b693d3863d/docs/hermes-integration.md#L1-L11).

The package metadata provides the concrete integration registration:

> `hermes = []`
>
> `[project.entry-points."hermes_agent.memory_providers"]`
>
> `luminary = "luminary_memory.hermes"`

Source: [`pyproject.toml`, lines 38-49](https://github.com/alertxsto/luminary-memory/blob/420e6ca36ec20e1fec957deaad3be7b693d3863d/pyproject.toml#L38-L49).

The source package implements the registration surface:

> “This package registers luminary-memory as a Hermes `MemoryProvider` through the `hermes_agent.memory_providers` entry-point group.”
>
> `ctx.register_memory_provider(LuminaryMemoryProvider())`

Source: [`src/luminary_memory/hermes/__init__.py`, lines 1-26](https://github.com/alertxsto/luminary-memory/blob/420e6ca36ec20e1fec957deaad3be7b693d3863d/src/luminary_memory/hermes/__init__.py#L1-L26).

The provider source is Hermes-specific rather than a generic adapter accidentally named for Hermes:

> “The provider imports the `MemoryProvider` ABC from `agent.memory_provider`, which exists only in the hermes-agent runtime.”
>
> `from agent.memory_provider import MemoryProvider  # present only in hermes runtime`

Source: [`src/luminary_memory/hermes/provider.py`, lines 1-22](https://github.com/alertxsto/luminary-memory/blob/420e6ca36ec20e1fec957deaad3be7b693d3863d/src/luminary_memory/hermes/provider.py#L1-L22).

The integration kit is also host-specific and operational, not merely a README claim. Its installer:

> `pip install -q "luminary-memory[hermes]"`
>
> `from agent.memory_provider import MemoryProvider`
>
> `entry_points.select(group="hermes_agent.memory_providers")`
>
> `python -m luminary_memory.hermes.activation --all-profiles "$CONFIG"`

Source: [`hermes/install.sh`, lines 48-94](https://github.com/alertxsto/luminary-memory/blob/420e6ca36ec20e1fec957deaad3be7b693d3863d/hermes/install.sh#L48-L94).

The installer and documentation explicitly state the boundary:

> “The installer does not edit Hermes source. It only selects the public provider entry point and disables Hermes' existing native memory switches so there is a single persistent surface.”

Source: [`hermes/README.md`, lines 120-122](https://github.com/alertxsto/luminary-memory/blob/420e6ca36ec20e1fec957deaad3be7b693d/hermes/README.md#L120-L122).

## Pi coding agent: no explicit integration found

There is no Pi-specific package, plugin, entry point, skill, hook, installer, or documentation in the `v0.3.0` or current `main` trees. The metadata exposes only the generic CLI and the Hermes provider entry point:

> `[project.scripts]`
>
> `luminary-memory = "luminary_memory.cli:app"`
>
> `[project.entry-points."hermes_agent.memory_providers"]`
>
> `luminary = "luminary_memory.hermes"`

Source: [`pyproject.toml`, lines 44-49](https://github.com/alertxsto/luminary-memory/blob/420e6ca36ec20e1fec957deaad3be7b693d3863d/pyproject.toml#L44-L49).

The root package exports only the Python client and version, not a Pi adapter:

> `from luminary_memory.api import MemoryClient`
>
> `__all__ = ["MemoryClient", "__version__"]`

Source: [`src/luminary_memory/__init__.py`, lines 1-4](https://github.com/alertxsto/luminary-memory/blob/420e6ca36ec20e1fec957deaad3be7b693d3863d/src/luminary_memory/__init__.py#L1-L4).

The generic CLI describes itself as a memory layer for AI agents and accepts a generic `LUMINARY_AGENT_ID` scope value:

> `help="Self-hosted memory layer for AI agents."`
>
> `("agent_id", "LUMINARY_AGENT_ID")`

Source: [`src/luminary_memory/cli.py`, lines 13-18 and 28-38](https://github.com/alertxsto/luminary-memory/blob/420e6ca36ec20e1fec957deaad3be7b693d3863d/src/luminary_memory/cli.py#L13-L18), [`src/luminary_memory/cli.py`, lines 28-38](https://github.com/alertxsto/luminary-memory/blob/420e6ca36ec20e1fec957deaad3be7b693d3863d/src/luminary_memory/cli.py#L28-L38).

That is generic library/CLI compatibility, not Pi integration. The repository provides no Pi-specific lifecycle hooks, configuration schema, plugin package, install command, or runtime adapter. A user could create a Pi configuration that invokes the generic API or CLI, but that would be user-created integration and should not be described as repository-supported Pi integration.

## OpenCode: absent from `v0.3.0` and current `main`

The release and current-main trees contain no OpenCode adapter or package. The shipped documentation index identifies the `0.3.0` baseline as the “strict CLI/Hermes accuracy path” and links Hermes, but not Pi or OpenCode:

> “Released baseline: `0.3.0` — the strict CLI/Hermes accuracy path”
>
> “**First-class Hermes Agent memory provider**”
>
> `- [Hermes integration](hermes-integration.md)`

Source: [`docs/index.md`, lines 5-24 and 64-65](https://github.com/alertxsto/luminary-memory/blob/420e6ca36ec20e1fec957deaad3be7b693d3863d/docs/index.md#L5-L24), [`docs/index.md`, lines 60-65](https://github.com/alertxsto/luminary-memory/blob/420e6ca36ec20e1fec957deaad3be7b693d/docs/index.md#L60-L65).

The supported quickstart integration section is explicitly Hermes-only:

> “## Hermes Agent Integration”
>
> “Set the memory provider in your Hermes `config.yaml`”
>
> “The installer edits the public Hermes config boundary only. It does not patch Hermes source, pin a Hermes release, or create profile configs that do not already exist.”

Source: [`docs/quickstart.md`, lines 74-100](https://github.com/alertxsto/luminary-memory/blob/420e6ca36ec20e1fec957deaad3be7b693d3863d/docs/quickstart.md#L74-L100).

The generic `MemoryClient` and CLI could be called by any external process, but that is not an OpenCode integration. In particular, an OpenAI-compatible LLM endpoint mentioned in the quickstart is an enrichment-provider compatibility detail, not an OpenCode plugin or host integration:

> “Any OpenAI-compatible endpoint works.”

Source: [`docs/quickstart.md`, lines 132-136](https://github.com/alertxsto/luminary-memory/blob/420e6ca36ec20e1fec957deaad3be7b693d3863d/docs/quickstart.md#L132-L136).

## Important repository distinction: an OpenCode feature branch exists

The repository has a separate remote branch named `feature/opencode-integration`, currently at [`26938e333508bbcaa775e749ec0bcdf92d665c09`](https://github.com/alertxsto/luminary-memory/tree/26938e333508bbcaa775e749ec0bcdf92d665c09). That branch contains explicit OpenCode integration work, including `docs/opencode-integration.md`, an `opencode/` npm package, and `src/luminary_memory/opencode/` sidecar code. This is evidence of a planned or in-development integration, not evidence that `v0.3.0` or current `main` ships it.

The branch documentation explicitly says:

> “Luminary Memory supports OpenCode through the published `opencode-luminary-memory` npm plugin and the `luminary-memory` Python package.”
>
> “OpenCode loads the compiled TypeScript plugin from the npm package.”

Source: [`docs/opencode-integration.md` on `feature/opencode-integration`, lines 3-11](https://github.com/alertxsto/luminary-memory/blob/26938e333508bbcaa775e749ec0bcdf92d665c09/docs/opencode-integration.md#L3-L11).

The branch also provides a concrete package and install configuration:

> `# opencode-luminary-memory`
>
> “This package provides the Luminary Memory OpenCode plugin and its agent skill.”
>
> `"plugin": ["opencode-luminary-memory@0.1.0"]`

Sources: [`opencode/README.md` on `feature/opencode-integration`, lines 1-3](https://github.com/alertxsto/luminary-memory/blob/26938e333508bbcaa775e749ec0bcdf92d665c09/opencode/README.md#L1-L3), [`opencode/README.md` on `feature/opencode-integration`, lines 24-30](https://github.com/alertxsto/luminary-memory/blob/26938e333508bbcaa775e749ec0bcdf92d665c09/opencode/README.md#L24-L30), [`opencode/package.json` on `feature/opencode-integration`](https://github.com/alertxsto/luminary-memory/blob/26938e333508bbcaa775e749ec0bcdf92d665c09/opencode/package.json).

The branch README labels that adapter's tested pairing as `luminary-memory==0.3.0` plus the npm plugin, but also limits the compatibility claim:

> “`opencode-luminary-memory@0.1.0` is tested with `luminary-memory==0.3.0` and the `@opencode-ai/plugin` API baseline `^1.18.29`.”
>
> “This documents the tested plugin API baseline, not a claim that every OpenCode release is compatible.”

Source: [`opencode/README.md` on `feature/opencode-integration`, lines 76-78](https://github.com/alertxso/luminary-memory/blob/26938e333508bbcaa775e749ec0bcdf92d665c09/opencode/README.md#L76-L78).

Unless and until that branch is merged and released, the portfolio should not collapse this branch-level work into a claim that the released/current-main Luminary Memory package supports OpenCode.

## Portfolio-safe wording

- **Safe:** “Luminary Memory provides a first-class Hermes Agent memory-provider integration.”
- **Not supported by `v0.3.0` / current `main`:** “Luminary Memory supports Pi.”
- **Not supported by `v0.3.0` / current `main`:** “Luminary Memory supports OpenCode.”
- **Potentially accurate with an explicit qualifier:** “OpenCode integration is implemented on the `feature/opencode-integration` branch” or “OpenCode integration is in development,” provided the portfolio links to that branch and does not present it as part of the `v0.3.0` release/current `main`.

## Final determination

The portfolio may truthfully claim **Hermes Agent support**. It may not truthfully claim **Pi support** based on this repository. It may not claim **released/current-main OpenCode support**; the authoritative repository contains explicit OpenCode work only on a separate feature branch.
