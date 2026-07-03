'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Cpu, Database, Boxes, Network, Terminal, Package, Layers, Bot, Code2, Trophy, GitBranch, Sparkles } from 'lucide-react'
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
  techStack: string[]
  features: Feature[]
  metrics: { label: string; value: string }[]
}

const projects: Project[] = [
  {
    num: '01',
    title: 'KYDEV TOOLBOX',
    tagline: 'The ultimate native Linux Developer Dashboard. 1-click graphical UX for daily system management & dev tasks — built with Rust + Tauri.',
    category: 'Linux / Native Dev Tool',
    year: '2026',
    role: 'Creator · Solo',
    hue: 'from-emerald-400 to-teal-600',
    href: 'https://github.com/alertxsto/kydev',
    external: true,
    techStack: ['Rust', 'Tauri', 'React', 'TypeScript', 'Tailwind', 'daisyUI', 'Shell', 'pkexec'],
    features: [
      { icon: Boxes, label: 'Mega Environments — 1-click bootstrap 100+ toolchains' },
      { icon: Layers, label: 'Project Bootstrapper — Next.js, Vite+React, Rust, Go, Python' },
      { icon: Package, label: 'Docker Manager — visual compose.yml builder' },
      { icon: Database, label: 'DB Studio & Connection Doctor — auto-heal down services' },
      { icon: Network, label: 'Built-in API Tester — mini-Postman, CORS bypass via native curl' },
      { icon: Terminal, label: 'Localhost Tunneling — expose dev server via localtunnel' },
      { icon: Cpu, label: 'Native DNF Manager — search, install, history' },
      { icon: Sparkles, label: 'Persistent Workspace State — switch tasks, lose nothing' },
    ],
    metrics: [
      { label: 'Version', value: '0.8.8' },
      { label: 'License', value: 'MIT' },
      { label: 'Platform', value: 'Linux (DNF)' },
      { label: 'Toolchains', value: '100+' },
    ],
  },
  {
    num: '02',
    title: 'ZEROCODE',
    tagline: 'Cyberpunk-themed coding academy. 19 production courses, browser-based Monaco IDE, multi-engine execution, AI assistant, and full virtual Git environment.',
    category: 'E-Learning / Web App',
    year: '2026',
    role: 'Founder & Lead Architect',
    hue: 'from-cyan-400 to-blue-600',
    href: 'https://zerocode.web.id',
    external: true,
    techStack: ['React 19', 'Vite', 'PostgreSQL', 'Monaco Editor', 'Pyodide', 'Gemini AI', 'Framer Motion', 'Tailwind'],
    features: [
      { icon: Code2, label: 'Browser-based Monaco IDE — multi-file, IntelliSense, cyberpunk theme' },
      { icon: Terminal, label: 'Multi-Engine Runner — Python (Pyodide WASM), React, TS, Vue, virtual Git' },
      { icon: Bot, label: 'Nebula AI — Gemini Flash + RAG, <500ms context-aware hints' },
      { icon: Trophy, label: 'Gamification — XP, 5-tier ranks, streaks, 365-day heatmap' },
      { icon: GitBranch, label: 'Virtual Terminal — 50+ commands incl. full Git workflow sim' },
      { icon: Layers, label: 'Neural Tech Tree — 3D hexagon map of 19 courses' },
      { icon: Database, label: 'Ghost Progress Detection — flags outdated refactored content' },
      { icon: Sparkles, label: 'Community Forum — tier badges, votes, category filters' },
    ],
    metrics: [
      { label: 'Courses', value: '19' },
      { label: 'Active users', value: '1,247+' },
      { label: 'Completion', value: '43%' },
      { label: 'Submissions', value: '24,567+' },
    ],
  },
]

function ProjectRow({ p, index }: { p: Project; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
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
      {/* The row itself */}
      <a
        ref={ref}
        href={p.href}
        target={p.external ? '_blank' : undefined}
        rel={p.external ? 'noopener noreferrer' : undefined}
        className="project-row group block border-t border-border py-6 md:py-10 px-2 md:px-4 relative"
        onMouseMove={onMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        data-cursor="hover"
      >
        <div className="relative z-[2] flex items-baseline justify-between gap-6">
          <div className="flex items-baseline gap-4 md:gap-10 flex-1 min-w-0">
            <span className="font-mono text-xs md:text-sm text-muted-foreground group-hover:text-accent-foreground shrink-0">
              ({p.num})
            </span>
            <h3 className="project-title group-hover:translate-x-2 transition-transform duration-500">
              {p.title}
            </h3>
          </div>
          <div className="hidden md:flex items-baseline gap-10 font-mono text-xs uppercase tracking-wider shrink-0">
            <span className="project-meta text-muted-foreground w-40">{p.category}</span>
            <span className="project-meta text-muted-foreground w-28">{p.role}</span>
            <span className="project-meta text-muted-foreground w-12 text-right">{p.year}</span>
            <ArrowUpRight
              className="project-meta text-muted-foreground group-hover:rotate-45 transition-transform"
              size={28}
            />
          </div>
          <span className="project-meta font-mono text-xs text-muted-foreground md:hidden shrink-0">
            {p.year}
          </span>
        </div>

        {/* Mobile meta */}
        <div className="md:hidden mt-2 font-mono text-xs text-muted-foreground pl-10">
          {p.category} — {p.role}
        </div>

        {/* Floating image preview */}
        <motion.div
          className="pointer-events-none absolute z-[3] hidden md:block w-64 h-40 overflow-hidden rounded-md shadow-2xl"
          animate={{
            x: pos.x - 128,
            y: pos.y - 80,
            opacity: visible ? 1 : 0,
            scale: visible ? 1 : 0.6,
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
      </a>

      {/* Detail panel under the row */}
      <div className="grid md:grid-cols-12 gap-6 md:gap-10 py-8 md:py-12 pl-2 md:pl-4">
        {/* Tagline + tech stack */}
        <div className="md:col-span-5">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            {p.tagline}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {p.techStack.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] md:text-xs px-2.5 py-1 border border-border rounded-full text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
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

        {/* Metrics */}
        <div className="md:col-span-2">
          <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4">
            [Metrics]
          </div>
          <div className="space-y-4">
            {p.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display font-bold text-2xl md:text-3xl leading-none tracking-tight">
                  {m.value}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
          <a
            href={p.href}
            target={p.external ? '_blank' : undefined}
            rel={p.external ? 'noopener noreferrer' : undefined}
            className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground hover:text-accent transition-colors group/link"
            data-cursor="hover"
          >
            {p.external ? 'Visit' : 'Open'}
            <ArrowUpRight
              size={14}
              className="group-hover/link:rotate-45 transition-transform"
            />
          </a>
        </div>
      </div>

      {/* Separator line at bottom of each (skip last) */}
      {index < projects.length - 1 && (
        <div className="border-b border-border" />
      )}
    </motion.div>
  )
}

export default function Projects() {
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
            (02 Flagship Projects)
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-medium text-[clamp(2rem,5vw,4.5rem)] leading-tight tracking-tight max-w-4xl mb-16 md:mb-24"
        >
          Two flagship builds — <span className="text-accent">one ships on Linux desktops</span>,
          one teaches the next generation to code.
        </motion.h2>

        <div>
          {projects.map((p, i) => (
            <ProjectRow key={p.num} p={p} index={i} />
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
