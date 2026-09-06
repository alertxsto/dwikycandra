import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const projectsSource = readFileSync(
  new URL("../src/components/portfolio/projects.tsx", import.meta.url),
  "utf8",
);
const aboutSource = readFileSync(
  new URL("../src/components/portfolio/about.tsx", import.meta.url),
  "utf8",
);

test("showcase reports Luminary's current release metrics", () => {
  assert.match(projectsSource, /status: "Open source · v0\.3\.0"/);
  assert.match(projectsSource, /\{ label: "Coverage", value: "83%" \}/);
  assert.match(projectsSource, /\{ label: "Tests", value: "505\+" \}/);
  assert.match(projectsSource, /\{ label: "License", value: "Apache-2\.0" \}/);
  assert.match(projectsSource, /OpenCode adapter is in development/);
  assert.match(projectsSource, /feature\/opencode-integration/);
  assert.match(aboutSource, /value: 505/);
  assert.match(aboutSource, /83% coverage · Luminary Memory/);
});

test("showcase avoids stale or unsupported Luminary claims", () => {
  assert.doesNotMatch(projectsSource, /v0\.2\.16|93%|370\+|Cloud tokens/);
  assert.doesNotMatch(
    projectsSource,
    /graduate into persistent context|contradiction-aware replacement/i,
  );
  assert.match(
    projectsSource,
    /explicit evidence-grounded supersession or retraction/i,
  );
  assert.match(
    projectsSource,
    /importance tunes recall ranking and pruning/i,
  );
});
