"use client";

import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useMemo, useRef, useState } from "react";
import type { ComponentType, PointerEvent as ReactPointerEvent } from "react";
import {
  AlertTriangle,
  ArrowUpRight,
  BarChart3,
  Bell,
  Bot,
  Boxes,
  Brain,
  ChevronDown,
  Code2,
  Cpu,
  Database,
  Factory,
  HeartHandshake,
  GitBranch,
  Layers,
  ListChecks,
  Map,
  Moon,
  Network,
  Package,
  Route,
  ScanLine,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Terminal,
  Trophy,
  Users,
} from "lucide-react";
import CursorGrid from "./cursor-grid";
import { filterProjects } from "./project-filter";
import type { ProjectFilterItem } from "./project-filter";

interface Feature {
  icon: ComponentType<{ size?: number; className?: string }>;
  label: string;
}

interface ProjectLink {
  label: string;
  href: string;
}

interface Project extends ProjectFilterItem {
  num: string;
  tagline: string;
  year: string;
  role: string;
  hue: string;
  featured: boolean;
  status?: string;
  links: ProjectLink[];
  techStack: string[];
  features: Feature[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    id: "jwis",
    num: "01",
    title: "JWIS",
    category: "Civic Systems",
    year: "2026",
    role: "Project Leader · Systems Architecture",
    hue: "from-cyan-400 to-indigo-600",
    featured: true,
    status: "DLH DKI Jakarta case · Competition prototype",
    tagline:
      "A command center for the Dinas Lingkungan Hidup (DLH) DKI Jakarta waste case, connecting fleet supervision, route decisions, forecasting, and field dispatch in one operational loop.",
    tags: ["DLH DKI Jakarta", "React", "FastAPI", "MapLibre", "Operations"],
    links: [
      { label: "Source", href: "https://github.com/alertxsto/jwis-system" },
    ],
    techStack: [
      "React",
      "Vite",
      "FastAPI",
      "MapLibre",
      "Prophet",
      "XGBoost",
      "OSRM",
      "SQLite",
      "Playwright",
    ],
    features: [
      {
        icon: Map,
        label:
          "Command-center workflow for DLH DKI Jakarta to supervise fleet movement and waste operations",
      },
      {
        icon: Route,
        label:
          "Fleet map with route deviation signals and a live operational view",
      },
      {
        icon: Route,
        label:
          "A* and OSRM route recommendations with queue-aware dispatch planning",
      },
      {
        icon: BarChart3,
        label:
          "Waste-volume forecasting and resource planning across 42 Jakarta kecamatan",
      },
      {
        icon: Bell,
        label:
          "Manager-to-field dispatch flow with confirmation and audit context",
      },
      {
        icon: Network,
        label:
          "Fleet, TPA queue, forecast, and field signals stay in one operational context",
      },
      {
        icon: ListChecks,
        label:
          "Integrated planning translates forecast signals into fleet, crew, and dispatch decisions",
      },
      {
        icon: Cpu,
        label:
          "Prophet and XGBoost models expose forecast metrics, factors, and evaluation scope",
      },
      {
        icon: ShieldCheck,
        label:
          "Real, modeled, simulated, and fallback data are labeled separately",
      },
    ],
    metrics: [
      { label: "Cases", value: "2" },
      { label: "Kecamatan models", value: "42" },
      { label: "Core layers", value: "5" },
      { label: "Role", value: "Lead" },
    ],
  },
  {
    id: "fisa-jaya",
    num: "02",
    title: "FISA JAYA",
    category: "Client Work",
    year: "2026",
    role: "Web Delivery · Client Build",
    hue: "from-amber-300 to-orange-600",
    featured: true,
    status: "Live · fisajaya.com",
    tagline:
      "A service-led company site for custom material-handling design and fabrication, built to explain capability before asking for a quotation.",
    tags: ["Next.js", "TypeScript", "Service design", "Deployment"],
    links: [
      { label: "Live", href: "https://www.fisajaya.com/" },
      { label: "Source", href: "https://github.com/alertxsto/fisajaya" },
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Responsive UI",
    ],
    features: [
      {
        icon: Factory,
        label: "Service-led positioning for custom material-handling work",
      },
      {
        icon: Layers,
        label:
          "Six capability areas organized around a typical project engagement",
      },
      {
        icon: Boxes,
        label:
          "Reference solutions presented without pretending to be a fixed SKU catalog",
      },
      {
        icon: ListChecks,
        label:
          "Typical engagement is framed from understanding the process through design, fabrication, trial, and support",
      },
      {
        icon: ShieldCheck,
        label:
          "Claims and reference builds stay bounded by confirmed company and project information",
      },
      {
        icon: Sparkles,
        label:
          "Bilingual and multilingual-ready content structure with clear consultation CTAs",
      },
    ],
    metrics: [
      { label: "Live domain", value: "1" },
      { label: "Capabilities", value: "6" },
      { label: "Languages", value: "3" },
      { label: "Delivery", value: "Web" },
    ],
  },
  {
    id: "luminary-memory",
    num: "03",
    title: "LUMINARY MEMORY",
    category: "Knowledge Systems",
    year: "2026",
    role: "Creator · Lead Architect",
    hue: "from-indigo-400 to-purple-600",
    featured: true,
    status: "Open source · v0.3.0",
    tagline:
      "A lightweight, self-hosted memory layer for AI agents. Four retrieval strategies fuse scoped, evidence-backed context with DB-backed core memory and a first-class Hermes Agent provider; an OpenCode adapter is in development.",
    tags: ["Python", "ONNX", "Evidence", "Hermes Agent"],
    links: [
      { label: "Live", href: "https://alertxsto.github.io/luminary-memory/" },
      { label: "Source", href: "https://github.com/alertxsto/luminary-memory" },
      {
        label: "OpenCode (dev)",
        href: "https://github.com/alertxsto/luminary-memory/tree/feature/opencode-integration",
      },
    ],
    techStack: [
      "Python 3.11+",
      "FastEmbed (ONNX)",
      "SQLite (FTS5)",
      "pgvector",
      "Hermes Agent",
      "Pytest",
      "Weighted RRF",
    ],
    features: [
      {
        icon: Brain,
        label:
          "Up to four retrieval strategies combine ONNX vector search, FTS5 BM25, temporal decay, and entity-graph signals through weighted RRF",
      },
      {
        icon: Database,
        label:
          "Scope-aware core memory and local recall storage stay deduplicated across user, workspace, agent, and session boundaries",
      },
      {
        icon: Network,
        label:
          "Rule-aware query expansion preserves useful context when an entity graph has no direct match",
      },
      {
        icon: ShieldCheck,
        label:
          "Evidence-backed claims retain grounded quotes, canonical keys, validity, and lifecycle state for auditable recall",
      },
      {
        icon: Layers,
        label:
          "Conflicting claims stay preserved until explicit evidence-grounded supersession or retraction",
      },
      {
        icon: Sparkles,
        label:
          "Adaptive importance tunes recall ranking and pruning rather than pinning recalled context into the prompt",
      },
      {
        icon: Cpu,
        label:
          "Temporal signals, health scoring, TTL cleanup, and semantic consolidation keep the store inspectable and healthy",
      },
      {
        icon: Bot,
        label:
          "Hermes Agent provider supports per-turn auto-recall and bounded exact-session continuity; Pi support is not shipped",
      },
    ],
    metrics: [
      { label: "Version", value: "0.3.0" },
      { label: "Coverage", value: "83%" },
      { label: "Tests", value: "505+" },
      { label: "License", value: "Apache-2.0" },
    ],
  },
  {
    id: "kydev",
    num: "04",
    title: "KYDEV TOOLBOX",
    category: "Systems & Tools",
    year: "2026",
    role: "Creator · Solo",
    hue: "from-emerald-400 to-teal-600",
    featured: true,
    status: "Open source · v0.8.8",
    tagline:
      "The ultimate native Linux Developer Dashboard. 1-click graphical UX for daily system management & dev tasks, built with Rust + Tauri.",
    tags: ["Rust", "Tauri", "React", "Developer tools"],
    links: [{ label: "Source", href: "https://github.com/alertxsto/kydev" }],
    techStack: [
      "Rust",
      "Tauri",
      "React",
      "TypeScript",
      "Tailwind",
      "Shell",
      "SQLite",
    ],
    features: [
      {
        icon: Boxes,
        label:
          "One-click environment bootstrap for 100+ development toolchains",
      },
      {
        icon: Layers,
        label:
          "Project bootstrapper covers Next.js, Vite/React, Rust, Go, and Python setups",
      },
      {
        icon: Package,
        label:
          "Visual Docker compose builder for repeatable local environments",
      },
      {
        icon: Database,
        label:
          "DB Studio and Connection Doctor diagnose and heal local services",
      },
      {
        icon: Network,
        label:
          "Built-in API tester provides a native request workflow for local APIs",
      },
      {
        icon: Terminal,
        label:
          "Native operations surface covers packages, Docker, APIs, and localhost tunnels",
      },
      {
        icon: Cpu,
        label:
          "Native DNF manager exposes package search, install, and history actions",
      },
      {
        icon: Sparkles,
        label:
          "Persistent workspace state keeps project context across task switches",
      },
    ],
    metrics: [
      { label: "Version", value: "0.8.8" },
      { label: "License", value: "MIT" },
      { label: "Platform", value: "Linux" },
      { label: "Toolchains", value: "100+" },
    ],
  },
  {
    id: "zerocode",
    num: "05",
    title: "ZEROCODE",
    category: "Products",
    year: "2026",
    role: "Founder · Lead Architect",
    hue: "from-cyan-400 to-blue-600",
    featured: true,
    status: "Live · zerocode.web.id",
    tagline:
      "Cyberpunk-themed coding academy. 19 production courses, browser-based Monaco IDE, multi-engine execution, AI assistant, and full virtual Git environment.",
    tags: ["React", "Monaco", "Pyodide", "Learning product"],
    links: [
      { label: "Live", href: "https://www.zerocode.web.id/" },
      { label: "Source", href: "https://github.com/alertxsto/ZeroCode" },
    ],
    techStack: [
      "React 19",
      "Vite",
      "PostgreSQL",
      "Monaco Editor",
      "Pyodide",
      "Gemini AI",
      "Framer Motion",
    ],
    features: [
      {
        icon: Code2,
        label:
          "Browser-based Monaco IDE supports multi-file lessons and IntelliSense-style editing",
      },
      {
        icon: Terminal,
        label:
          "Python via Pyodide, React, TypeScript, Vue, and virtual Git run inside the learning surface",
      },
      {
        icon: Bot,
        label:
          "Nebula AI combines Gemini Flash and RAG for context-aware learning hints",
      },
      {
        icon: Trophy,
        label:
          "XP, five-tier ranks, streaks, and a 365-day activity heatmap make progress visible",
      },
      {
        icon: GitBranch,
        label:
          "Virtual terminal exposes 50+ commands and a complete simulated Git workflow",
      },
      {
        icon: Layers,
        label:
          "A neural tech tree maps the 19-course path into a navigable progression",
      },
      {
        icon: Database,
        label:
          "Ghost Progress Detection flags learning content that needs a refresh",
      },
      {
        icon: Users,
        label:
          "Community forum supports tier badges, votes, and category filters",
      },
    ],
    metrics: [
      { label: "Courses", value: "19" },
      { label: "Active users", value: "1,247+" },
      { label: "Completion", value: "43%" },
      { label: "Submissions", value: "24,567+" },
    ],
  },
  {
    id: "kasir-pintar",
    num: "06",
    title: "KASIR PINTAR",
    category: "Products",
    year: "2026",
    role: "Product Builder · Solo",
    hue: "from-emerald-300 to-teal-700",
    featured: true,
    status: "Expo · v1.0.3-1",
    tagline:
      "An offline-first point-of-sale system for small shops, designed to keep daily operations useful when connectivity is unreliable.",
    tags: ["Expo", "React Native", "SQLite", "Mobile product"],
    links: [
      { label: "Source", href: "https://github.com/alertxsto/warung-app" },
      {
        label: "Releases",
        href: "https://github.com/alertxsto/warung-app/releases",
      },
    ],
    techStack: [
      "Expo SDK 54",
      "React Native",
      "SQLite",
      "AsyncStorage",
      "Tamagui",
      "OpenRouter",
      "EAS",
    ],
    features: [
      {
        icon: ShoppingCart,
        label:
          "Checkout flow with cart confirmation and automatic stock reduction",
      },
      {
        icon: Boxes,
        label:
          "Product management covers cost/sale price, stock, categories, units, and wholesale pricing",
      },
      {
        icon: BarChart3,
        label:
          "Dashboard tracks daily/monthly revenue, profit, seven-day trends, and comparisons",
      },
      {
        icon: ListChecks,
        label:
          "Reports surface daily/monthly summaries, top five products, and transaction details",
      },
      {
        icon: Database,
        label:
          "Debt Manager supports customer debt, partial payments, and paid/unpaid status",
      },
      {
        icon: Package,
        label:
          "Full JSON backup/restore and CSV export keep shop data portable",
      },
      {
        icon: Bot,
        label:
          "Optional AI assistant keeps chat history on-device for shop operations",
      },
      {
        icon: GitBranch,
        label:
          "Version tags trigger an automated EAS local APK build and GitHub Release workflow",
      },
    ],
    metrics: [
      { label: "Screens", value: "8" },
      { label: "Data store", value: "SQLite" },
      { label: "Platforms", value: "3" },
      { label: "Release", value: "APK" },
    ],
  },
  {
    id: "distrowar",
    num: "07",
    title: "DISTROWAR",
    category: "Data Products",
    year: "2026",
    role: "Creator · Solo",
    hue: "from-orange-400 to-red-600",
    featured: false,
    status: "Live · distrowar.vercel.app",
    tagline:
      "Linux distro comparison publication. Live data from DistroWatch for 492+ distros, head-to-head battle arena across 8 technical dimensions, a 19-question finder quiz, and community voting.",
    tags: ["Next.js", "Prisma", "SQLite", "Data interface"],
    links: [
      { label: "Live", href: "https://distrowar.vercel.app/" },
      { label: "Source", href: "https://github.com/alertxsto/distrowar" },
    ],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Prisma",
      "SQLite",
      "Tailwind CSS",
      "Framer Motion",
    ],
    features: [
      {
        icon: Database,
        label:
          "Live leaderboard tracks 492+ distributions across four time periods",
      },
      {
        icon: Cpu,
        label:
          "Battle Arena compares distributions across eight technical dimensions",
      },
      {
        icon: Brain,
        label:
          "A 19-question finder uses a three-stage weighted scoring engine for recommendations",
      },
      {
        icon: Users,
        label:
          "Community voting adds a separate signal to the technical comparison layer",
      },
      {
        icon: Terminal,
        label:
          "Admin tools trigger a DistroWatch scrape and manage the data refresh path",
      },
      {
        icon: GitBranch,
        label:
          "Manual seed, rule-based inference, and LLM enrichment form the data pipeline",
      },
    ],
    metrics: [
      { label: "Distros", value: "492+" },
      { label: "Quiz steps", value: "19" },
      { label: "Battle dims", value: "8" },
      { label: "License", value: "MIT" },
    ],
  },
  {
    id: "syncology",
    num: "08",
    title: "SYNCOLOGY",
    category: "Collaboration",
    year: "2026",
    role: "Creator · Solo",
    hue: "from-fuchsia-400 to-purple-600",
    featured: false,
    status: "Open source · desktop app",
    tagline:
      "Collaborative task manager for IT teams. Desktop app with real-time room sync, peer review, smart escalation, and a Ghost Pool where abandoned tasks become fair game for anyone to rescue.",
    tags: ["Python", "PySide6", "Firestore", "Collaboration"],
    links: [
      { label: "Source", href: "https://github.com/alertxsto/syncology-app" },
    ],
    techStack: [
      "Python 3.10+",
      "PySide6",
      "Firebase Firestore",
      "Firebase Auth",
      "Cloud Functions",
      "QSS",
    ],
    features: [
      {
        icon: Users,
        label:
          "Room-based collaboration with six-character invite codes and real-time sync",
      },
      {
        icon: ListChecks,
        label:
          "Task lifecycle moves from Proposed to Todo, Review, Done, or Disputed",
      },
      {
        icon: AlertTriangle,
        label:
          "Smart escalation marks H-2, Late, and Ghost states through Cloud Functions",
      },
      {
        icon: HeartHandshake,
        label:
          "Ghost Pool lets teammates adopt abandoned work for a rescue bonus",
      },
      {
        icon: ShieldCheck,
        label:
          "Peer review assigns reviewers and requires an approve/reject reason",
      },
      {
        icon: Bell,
        label:
          "Nudge limits and accountability points encourage timely follow-through",
      },
      {
        icon: Trophy,
        label:
          "Contribution ledger, leaderboard, and Ghost Alert badges make ownership visible",
      },
      {
        icon: Moon,
        label:
          "Dark-first Qt interface organized into Overview, Tasks, Ledger, and Room Info tabs",
      },
    ],
    metrics: [
      { label: "License", value: "MIT" },
      { label: "Platforms", value: "3" },
      { label: "Functions", value: "8" },
      { label: "Sync cycle", value: "3s" },
    ],
  },
  {
    id: "waste-cv",
    num: "09",
    title: "WASTE CV",
    category: "Research",
    year: "2026",
    role: "ML Foundation · JWIS",
    hue: "from-lime-300 to-green-700",
    featured: false,
    status: "Foundation · linked to JWIS",
    tagline:
      "A computer-vision training and taxonomy pipeline prepared as the model foundation for waste detection in JWIS.",
    tags: ["YOLO", "PyTorch", "ONNX", "Computer vision"],
    links: [
      { label: "JWIS", href: "https://github.com/alertxsto/jwis-system" },
    ],
    techStack: ["Python", "YOLO", "PyTorch", "Kaggle", "OpenCV", "ONNX"],
    features: [
      {
        icon: ScanLine,
        label:
          "YOLO detection pipeline combines WaRP-D, TACO, and Garbage Detection datasets",
      },
      {
        icon: Layers,
        label:
          "Bottle subclasses and source labels are remapped into a unified 17-class vocabulary",
      },
      {
        icon: ShieldCheck,
        label:
          "Outputs distinguish residu, non-residu, and review instead of hiding uncertainty",
      },
      {
        icon: Database,
        label:
          "Dataset preparation preserves a reproducible download, merge, and label-rewrite path",
      },
      {
        icon: Boxes,
        label:
          "The pipeline keeps object-detection labels and split structure ready for model training",
      },
      {
        icon: BarChart3,
        label:
          "Evaluation produces precision, recall, mAP50, and mAP50-95 before export",
      },
      {
        icon: Cpu,
        label:
          "The trained model is exported to ONNX as a deployable foundation for JWIS",
      },
    ],
    metrics: [
      { label: "Datasets", value: "3" },
      { label: "Unified classes", value: "17" },
      { label: "Output", value: "ONNX" },
      { label: "Parent system", value: "JWIS" },
    ],
  },
];

const categoryOptions = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.category))),
];

const PREVIEW_WIDTH = 292;
const PREVIEW_HEIGHT = 176;
const PREVIEW_GAP = 18;

function previewPosition(event: ReactPointerEvent<HTMLButtonElement>) {
  const maxX = window.innerWidth - PREVIEW_WIDTH - 12;
  const maxY = window.innerHeight - PREVIEW_HEIGHT - 12;
  const preferredX = event.clientX + PREVIEW_GAP;
  const preferredY = event.clientY + PREVIEW_GAP;
  return {
    x: Math.max(12, Math.min(preferredX, maxX)),
    y: Math.max(12, Math.min(preferredY, maxY)),
  };
}

function ProjectPreview({
  project,
  position,
}: {
  project: Project;
  position: { x: number; y: number };
}) {
  return (
    <motion.div
      className="project-preview"
      style={{ left: position.x, top: position.y }}
      initial={{ opacity: 0, scale: 0.92, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 4 }}
      transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden="true"
    >
      <div className={`project-preview-art bg-gradient-to-br ${project.hue}`}>
        <div className="project-preview-grid" />
        <span>{project.num}</span>
        <strong>{project.title}</strong>
      </div>
      <div className="project-preview-meta">
        <span>{project.category}</span>
        <span>{project.status ?? project.year}</span>
      </div>
    </motion.div>
  );
}

function ProjectRow({
  project,
  isOpen,
  onToggle,
}: {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [previewVisible, setPreviewVisible] = useState(false);

  const onPointerMove = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (event.pointerType !== "mouse") return;
    setPosition(previewPosition(event));
  };

  const onPointerEnter = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === "mouse") setPreviewVisible(true);
  };

  const preview =
    previewVisible && typeof document !== "undefined"
      ? createPortal(
          <ProjectPreview project={project} position={position} />,
          document.body,
        )
      : null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <button
          ref={buttonRef}
          onClick={onToggle}
          onPointerMove={onPointerMove}
          onPointerEnter={onPointerEnter}
          onPointerLeave={() => setPreviewVisible(false)}
          onFocus={() => setPreviewVisible(false)}
          className="project-row group block w-full text-left border-t border-border py-6 md:py-10 px-2 md:px-4 relative"
          data-cursor="hover"
          aria-expanded={isOpen}
          aria-controls={`project-details-${project.id}`}
        >
          <div className="project-row-header relative z-[2]">
            <div className="project-row-title flex min-w-0 items-baseline gap-4 md:gap-10">
              <span className="shrink-0 font-mono text-xs text-muted-foreground group-hover:text-accent-foreground md:text-sm">
                ({project.num})
              </span>
              <h3 className="project-title group-hover:translate-x-2 transition-transform duration-500">
                {project.title}
              </h3>
            </div>
            <div className="project-row-meta hidden shrink-0 items-baseline font-mono text-xs uppercase tracking-wider md:flex">
              <span className="project-row-status text-muted-foreground">
                {project.status ?? project.year}
              </span>
              <span className="project-meta text-muted-foreground">
                {project.category}
              </span>
              <span className="project-meta text-muted-foreground">
                {project.role}
              </span>
              <span className="project-meta text-right text-muted-foreground">
                {project.year}
              </span>
              <ChevronDown
                size={24}
                className={`project-meta text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-2 pl-10 font-mono text-xs text-muted-foreground md:hidden">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.role}</span>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={`project-details-${project.id}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
              role="region"
              aria-label={`${project.title} details`}
            >
              <div className="grid gap-8 py-8 pl-2 md:grid-cols-12 md:gap-10 md:py-12 md:pl-4">
                <div className="md:col-span-4">
                  <p className="mb-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                    {project.tagline}
                  </p>
                  <div className="mb-6 flex flex-wrap gap-1.5">
                    {project.techStack.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground md:text-xs"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground transition-colors hover:text-accent"
                        data-cursor="hover"
                      >
                        {link.label}
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover/link:rotate-45"
                          aria-hidden="true"
                        />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">
                    [Key Features]
                  </div>
                  <ul className="space-y-2.5">
                    {project.features.map((feature) => {
                      const Icon = feature.icon;
                      return (
                        <li
                          key={feature.label}
                          className="flex items-start gap-3 text-sm leading-snug text-foreground/90"
                        >
                          <Icon
                            size={16}
                            className="mt-0.5 shrink-0 text-accent"
                            aria-hidden="true"
                          />
                          <span>{feature.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="md:col-span-3">
                  <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">
                    [Metrics]
                  </div>
                  <div className="space-y-5">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="font-display text-3xl font-bold leading-none tracking-tight md:text-4xl">
                          {metric.value}
                        </div>
                        <div className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {project.num !== projects[projects.length - 1].num && (
          <div className="border-b border-border" />
        )}
      </motion.div>
      <AnimatePresence>{previewVisible ? preview : null}</AnimatePresence>
    </>
  );
}

function ArchiveControls({
  query,
  category,
  onQueryChange,
  onCategoryChange,
}: {
  query: string;
  category: string;
  onQueryChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}) {
  return (
    <div className="project-archive-controls">
      <label className="project-search-label" htmlFor="project-search">
        Search the archive
      </label>
      <input
        id="project-search"
        type="search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Search title, category, or tool"
        className="project-search-input"
      />
      <div
        className="project-category-list"
        aria-label="Project categories"
        role="group"
      >
        {categoryOptions.map((option) => (
          <button
            key={option}
            type="button"
            className={`project-category-chip ${category === option ? "is-active" : ""}`}
            onClick={() => onCategoryChange(option)}
            aria-pressed={category === option}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [openProjectId, setOpenProjectId] = useState<string | null>("jwis");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const featuredProjects = projects.filter((project) => project.featured);
  const archiveProjects = useMemo(
    () =>
      filterProjects(
        projects.filter((project) => !project.featured),
        query,
        category,
      ),
    [category, query],
  );

  const toggleProject = (id: string) => {
    setOpenProjectId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-border px-6 py-24 md:px-10 md:py-40"
    >
      <CursorGrid
        className="inset-0"
        cellSize={72}
        color="#bef264"
        radius={170}
        holdTime={220}
        fadeDuration={700}
        maxOpacity={0.52}
        lineWidth={1}
        clickPulse={false}
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-4 md:mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            [03]
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Selected Work
          </span>
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            ({projects.length} indexed)
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-5xl font-display text-[clamp(2.25rem,5vw,5rem)] font-medium leading-tight tracking-[-0.05em] md:mb-24"
        >
          Systems, products, and interfaces built to make complex work{" "}
          <span className="text-accent">clearer.</span>
        </motion.h2>

        <div className="project-featured-heading">
          <span>Featured systems</span>
          <span>{featuredProjects.length} highlighted builds</span>
        </div>
        <div className="project-featured-list">
          {featuredProjects.map((project) => (
            <ProjectRow
              key={project.id}
              project={project}
              isOpen={openProjectId === project.id}
              onToggle={() => toggleProject(project.id)}
            />
          ))}
        </div>

        <div className="project-archive">
          <div className="project-archive-heading">
            <div>
              <span className="section-kicker">Project archive</span>
              <h3>Everything else, still worth finding.</h3>
            </div>
            <p aria-live="polite">
              {archiveProjects.length} result
              {archiveProjects.length === 1 ? "" : "s"}
            </p>
          </div>
          <ArchiveControls
            query={query}
            category={category}
            onQueryChange={setQuery}
            onCategoryChange={setCategory}
          />
          <div className="project-archive-list">
            {archiveProjects.length > 0 ? (
              archiveProjects.map((project) => (
                <ProjectRow
                  key={project.id}
                  project={project}
                  isOpen={openProjectId === project.id}
                  onToggle={() => toggleProject(project.id)}
                />
              ))
            ) : (
              <p className="project-archive-empty">
                No project matches that search yet.
              </p>
            )}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/alertxsto"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border-b-2 border-foreground pb-2 font-display text-2xl font-semibold transition-colors hover:border-accent hover:text-accent md:text-4xl"
            data-cursor="hover"
          >
            View full archive
            <ArrowUpRight
              size={32}
              className="transition-transform group-hover:rotate-45"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
