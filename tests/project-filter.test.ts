import assert from "node:assert/strict";
import test from "node:test";
import { filterProjects } from "../src/components/portfolio/project-filter.ts";

const projects = [
  {
    id: "jwis",
    title: "JWIS",
    category: "Systems",
    tags: ["FastAPI", "MapLibre"],
    featured: true,
  },
  {
    id: "kasir-pintar",
    title: "Kasir Pintar",
    category: "Products",
    tags: ["Expo", "SQLite"],
    featured: true,
  },
  {
    id: "waste-cv",
    title: "Waste CV",
    category: "Research",
    tags: ["YOLO", "ONNX"],
    featured: false,
  },
];

test("returns all projects when no query or category is selected", () => {
  assert.deepEqual(
    filterProjects(projects, "", "All").map((project) => project.id),
    ["jwis", "kasir-pintar", "waste-cv"],
  );
});

test("filters projects by category and search text", () => {
  assert.deepEqual(
    filterProjects(projects, "onnx", "Research").map((project) => project.id),
    ["waste-cv"],
  );
  assert.deepEqual(
    filterProjects(projects, "kasir", "All").map((project) => project.id),
    ["kasir-pintar"],
  );
});
