'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Cpu, Database, Boxes, Network, Terminal, Package, Layers, Bot, Code2, Trophy, GitBranch, Sparkles, Brain, Users, ListChecks, AlertTriangle, HeartHandshake, Bell, ShieldCheck, Moon } from 'lucide-react'
import { useRef, useState } from 'react'

interface Feature {
  icon: React.ComponentType<{ size?: number; className?: string }>
  label: string
}

interface Project {
  num: string
  title: string
  tagline: string
  category: string
  year: string
  role: string
  hue: string
  href: string
  external: boolean
  status?: string
  techStack: string[]
  features: Feature[]
  metrics: { label: string; value: string }[]
}

const projects: Project[] = [
  {
    num: '01',
    title: 'LUMINARY MEMORY',
    tagline: 'A lightweight, self-hosted memory layer for AI agents. 4-strategy parallel fusion (ONNX, SQLite FTS5, temporal, graph), DB-backed core memory, and first-class Hermes Agent provider.',
    category: 'Agentic AI / Python Library',
    year: '2026',
    role: 'Creator · Lead Architect',
    hue: 'from-indigo-400 to-purple-600',
    href: 'https://github.com/alertxsto/luminary-memory',
    external: true,
    status: 'Live · v0.2.16 on PyPI',
    techStack: ['Python 3.11+', 'FastEmbed (ONNX)', 'SQLite (FTS5)', 'pgvector', 'Hermes Agent', 'NumPy', 'Pytest (93% cov)', 'RRF'],
    features: [
      { icon: Brain, label: '4-Way Parallel Fusion - ONNX vector, FTS5 BM25, temporal decay, entity graph' },
      { icon: Layers, label: 'Core Memory (DB-Backed) - auto-loaded into system prompt every session' },
      { icon: Sparkles, label: 'Adaptive Importance - recalled memories climb into persistent context dynamically' },
      { icon: ShieldCheck, label: 'Rule Hygiene - rule pinning at ≥0.9, auto-replace anti-contradiction' },
      { icon: Network, label: 'Rule-Aware Query Expansion - lossless expansion when graph has no entity' },
      { icon: Database, label: 'Content-Level Anti-Duplication - core, persistent, and recall never duplicate' },
      { icon: Cpu, label: 'Autonomous Lifecycle - TTL cleanup, semantic consolidation, health score (0-100)' },
      { icon: Bot, label: 'Hermes Agent Provider - per-turn prefetch (1.2ms latency), 29 dashboard fields' },
    ],
    metrics: [
      { label: 'Version', value: 'v0.2.16' },
      { label: 'Coverage', value: '93%' },
      { label: 'Tests', value: '370+' },
      { label: 'Cloud Tokens', value: '0' },
    ],
  },
  {
    num: '02',
    title: 'KYDEV TOOLBOX',
    tagline: 'The ultimate native Linux Developer Dashboard. 1-click graphical UX for daily system management & dev tasks - built with Rust + Tauri.',
    category: 'Linux / Native Dev Tool',
    year: '2026',
    role: 'Creator · Solo',
    hue: 'from-emerald-400 to-teal-600',
    href: 'https://github.com/alertxsto/kydev',
    external: true,
    status: 'Live · v0.8.8',
    techStack: ['Rust', 'Tauri', 'React', 'TypeScript', 'Tailwind', 'daisyUI', 'Shell', 'pkexec'],
    features: [
      { icon: Boxes, label: 'Mega Environments - 1-click bootstrap 100+ toolchains' },
      { icon: Layers, label: 'Project Bootstrapper - Next.js, Vite+React, Rust, Go, Python' },
      { icon: Package, label: 'Docker Manager - visual compose.yml builder' },
      { icon: Database, label: 'DB Studio & Connection Doctor - auto-heal down services' },
      { icon: Network, label: 'Built-in API Tester - mini-Postman, CORS bypass via native curl' },
      { icon: Terminal, label: 'Localhost Tunneling - expose dev server via localtunnel' },
      { icon: Cpu, label: 'Native DNF Manager - search, install, history' },
      { icon: Sparkles, label: 'Persistent Workspace State - switch tasks, lose nothing' },
    ],
    metrics: [
      { label: 'Version', value: '0.8.8' },
      { label: 'License', value: 'MIT' },
      { label: 'Platform', value: 'Linux' },
      { label: 'Toolchains', value: '100+' },
    ],
  },
  {
    num: '03',
    title: 'ZEROCODE',
    tagline: 'Cyberpunk-themed coding academy. 19 production courses, browser-based Monaco IDE, multi-engine execution, AI assistant, and full virtual Git environment.',
    category: 'E-Learning / Web App',
    year: '2026',
    role: 'Founder & Lead Architect',
    hue: 'from-cyan-400 to-blue-600',
    href: 'https://zerocode.web.id',
    external: true,
    status: 'Live · 1,247+ users',
    techStack: ['React 19', 'Vite', 'PostgreSQL', 'Monaco Editor', 'Pyodide', 'Gemini AI', 'Framer Motion', 'Tailwind'],
    features: [
      { icon: Code2, label: 'Browser-based Monaco IDE - multi-file, IntelliSense, cyberpunk theme' },
      { icon: Terminal, label: 'Multi-Engine Runner - Python (Pyodide WASM), React, TS, Vue, virtual Git' },
      { icon: Bot, label: 'Nebula AI - Gemini Flash + RAG, <500ms context-aware hints' },
      { icon: Trophy, label: 'Gamification - XP, 5-tier ranks, streaks, 365-day heatmap' },
      { icon: GitBranch, label: 'Virtual Terminal - 50+ commands incl. full Git workflow sim' },
      { icon: Layers, label: 'Neural Tech Tree - 3D hexagon map of 19 courses' },
      { icon: Database, label: 'Ghost Progress Detection - flags outdated refactored content' },
      { icon: Sparkles, label: 'Community Forum - tier badges, votes, category filters' },
    ],
    metrics: [
      { label: 'Courses', value: '19' },
      { label: 'Active users', value: '1,247+' },
      { label: 'Completion', value: '43%' },
      { label: 'Submissions', value: '24,567+' },
    ],
  },
  {
    num: '04',
    title: 'DISTROWAR',
    tagline: 'Linux distro comparison publication. Live data from DistroWatch for 492+ distros, head-to-head battle arena across 8 technical dimensions, a 19-question finder quiz, and community voting.',
    category: 'Web App / Linux',
    year: '2026',
    role: 'Creator · Solo',
    hue: 'from-orange-400 to-red-600',
    href: 'https://github.com/alertxsto',
    external: true,
    status: 'Live · Personal Project',
    techStack: ['Next.js 16', 'TypeScript', 'Prisma', 'SQLite', 'Tailwind CSS', 'Framer Motion', 'shadcn/ui'],
    features: [
      { icon: Database, label: 'Live Leaderboard - 492+ distros, 4 time periods, trend arrows' },
      { icon: Cpu, label: 'Battle Arena - 8-dimension technical head-to-head, no popularity bias' },
      { icon: Brain, label: '19-question Finder Quiz - 3-stage scoring engine, weighted 35/40/25' },
      { icon: Users, label: 'Community Voting - 1 vote/session, IP-stamped, shown on leaderboard' },
      { icon: Terminal, label: 'Admin Dashboard - password-protected, trigger live DistroWatch scrape' },
      { icon: GitBranch, label: 'Data Pipeline - manual seed + rule-based inference + LLM enrichment' },
    ],
    metrics: [
      { label: 'Distros', value: '492+' },
      { label: 'Quiz steps', value: '19' },
      { label: 'Battle dims', value: '8' },
      { label: 'License', value: 'MIT' },
    ],
  },
  {
    num: '05',
    title: 'SYNCOLOGY',
    tagline: 'Collaborative task manager for IT teams. Desktop app with real-time room sync, peer review, smart escalation, and a Ghost Pool where abandoned tasks become fair game for anyone to rescue.',
    category: 'Desktop / Real-time Collab',
    year: '2026',
    role: 'Creator · Solo',
    hue: 'from-fuchsia-400 to-purple-600',
    href: 'https://github.com/alertxsto/syncology-app',
    external: true,
    status: 'Live · Open Source',
    techStack: ['Python 3.10+', 'PySide6 (Qt 6)', 'Firebase Firestore', 'Firebase Auth', 'Cloud Functions', 'Node.js', 'QSS', 'REST API'],
    features: [
      { icon: Users, label: 'Room-based collab - 6-char invite codes, real-time team sync' },
      { icon: ListChecks, label: 'Full task pipeline - Proposed → Todo → Review → Done/Disputed' },
      { icon: AlertTriangle, label: 'Smart escalation - H-2 / Late / Ghost (48h+) via Cloud Functions' },
      { icon: HeartHandshake, label: 'Ghost Pool rescue - anyone can adopt abandoned tasks for +50% bonus' },
      { icon: ShieldCheck, label: 'Peer review - random reviewer assigned, approve/reject with reason' },
      { icon: Bell, label: 'Nudge system - 3/day cap, +2 pts to sender for accountability' },
      { icon: Trophy, label: 'Accountability ledger - contribution %, leaderboard, Ghost Alert badges' },
      { icon: Moon, label: 'Dark-first Qt UI - QSS, 4 tabs: Overview / Tasks / Ledger / Room Info' },
    ],
    metrics: [
      { label: 'License', value: 'MIT' },
      { label: 'Platforms', value: '3' },
      { label: 'CF functions', value: '8' },
      { label: 'Sync cycle', value: '3s' },
    ],
  },
]

function ProjectRow({ p, index, isOpen, onToggle }: { p: Project; index: number; isOpen: boolean; onToggle: () => void }) {
  const ref = useRef<HTMLButtonElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {/* The row - now a button for accessibility */}
      <button
        ref={ref}
        onClick={onToggle}
        className="project-row group block w-full text-left border-t border-border py-6 md:py-10 px-2 md:px-4 relative"
        onMouseMove={onMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        data-cursor="hover"
        aria-expanded={isOpen}
      >
        <div className="relative z-[2] flex items-baseline justify-between gap-6">
          <div className="flex items-baseline gap-4 md:gap-10 flex-1 min-w-0">
            <span className="font-mono text-xs md:text-sm text-muted-foreground group-hover:text-accent-foreground shrink-0">
              ({p.num})
            </span>
            <h3 className="project-title group-hover:translate-x-2 transition-transform duration-500">
              {p.title}
            </h3>
            {p.status && (
              <span className="hidden md:inline-flex font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-border rounded-full text-muted-foreground shrink-0">
                {p.status}
              </span>
            )}
          </div>
          <div className="hidden md:flex items-baseline gap-10 font-mono text-xs uppercase tracking-wider shrink-0">
            <span className="project-meta text-muted-foreground w-40">{p.category}</span>
            <span className="project-meta text-muted-foreground w-28">{p.role}</span>
            <span className="project-meta text-muted-foreground w-12 text-right">{p.year}</span>
            <ChevronDown
              size={24}
              className={`project-meta text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
          <span className="project-meta font-mono text-xs text-muted-foreground md:hidden shrink-0">
            {p.year}
          </span>
        </div>

        {/* Mobile meta + status */}
        <div className="md:hidden mt-2 font-mono text-xs text-muted-foreground pl-10 flex items-center gap-2 flex-wrap">
          <span>{p.category}</span>
          <span>·</span>
          <span>{p.role}</span>
          {p.status && (
            <>
              <span>·</span>
              <span className="text-accent">{p.status}</span>
            </>
          )}
        </div>

        {/* Floating image preview - only on hover, hidden when expanded */}
        <motion.div
          className="pointer-events-none absolute z-[3] hidden md:block w-64 h-40 overflow-hidden rounded-md shadow-2xl"
          animate={{
            x: pos.x - 128,
            y: pos.y - 80,
            opacity: visible && !isOpen ? 1 : 0,
            scale: visible && !isOpen ? 1 : 0.6,
          }}
          transition={{ type: 'spring', stiffness: 250, damping: 25 }}
        >
          <div className={`w-full h-full bg-gradient-to-br ${p.hue} relative`}>
            <div className="absolute inset-0 bg-grid opacity-40" />
            <div className="absolute bottom-3 left-3 font-display font-bold text-2xl text-black/80">
              {p.title}
            </div>
            <div className="absolute top-3 right-3 font-mono text-[10px] text-black/60 uppercase">
              {p.num}
            </div>
          </div>
        </motion.div>
      </button>

      {/* Expandable detail panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="grid md:grid-cols-12 gap-8 md:gap-10 py-8 md:py-12 pl-2 md:pl-4">
              {/* Tagline + tech stack + visit link */}
              <div className="md:col-span-4">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  {p.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.techStack.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] md:text-xs px-2.5 py-1 border border-border rounded-full text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.href}
                  target={p.external ? '_blank' : undefined}
                  rel={p.external ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground hover:text-accent transition-colors group/link"
                  data-cursor="hover"
                >
                  {p.external ? 'Visit project' : 'Open'}
                  <ArrowUpRight
                    size={14}
                    className="group-hover/link:rotate-45 transition-transform"
                  />
                </a>
              </div>

              {/* Features */}
              <div className="md:col-span-5">
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4">
                  [Key Features]
                </div>
                <ul className="space-y-2.5">
                  {p.features.map((f, i) => {
                    const Icon = f.icon
                    return (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-foreground/90 leading-snug"
                      >
                        <Icon size={16} className="text-accent shrink-0 mt-0.5" />
                        <span>{f.label}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Metrics - 3 col, more breathing room */}
              <div className="md:col-span-3">
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4">
                  [Metrics]
                </div>
                <div className="space-y-5">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display font-bold text-3xl md:text-4xl leading-none tracking-tight">
                        {m.value}
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Separator line at bottom of each (skip last) */}
      {index < projects.length - 1 && (
        <div className="border-b border-border" />
      )}
    </motion.div>
  )
}

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="work" className="relative py-24 md:py-40 px-6 md:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12 md:mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">[03]</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Selected Work
          </span>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            (04 Projects · Click to expand)
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-medium text-[clamp(2rem,5vw,4.5rem)] leading-tight tracking-tight max-w-4xl mb-16 md:mb-24"
        >
          Five builds - <span className="text-accent">one powers agentic AI memory</span>,
          one ships on Linux desktops, one teaches coding, one compares 492+ distros, one orchestrates IT teams.
        </motion.h2>

        <div>
          {projects.map((p, i) => (
            <ProjectRow
              key={p.num}
              p={p}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/alertxsto"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-display font-semibold text-2xl md:text-4xl border-b-2 border-foreground pb-2 hover:text-accent hover:border-accent transition-colors"
          >
            View full archive
            <ArrowUpRight size={32} className="group-hover:rotate-45 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
