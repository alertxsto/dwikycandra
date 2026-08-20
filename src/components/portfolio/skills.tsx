'use client'

import { motion } from 'framer-motion'
import Marquee from './marquee'

interface SkillGroup {
  title: string
  items: string[]
  accent: string // tailwind text color class for category title
  pillAccent: string // tailwind classes for pill hover state
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Agentic AI',
    items: ['Hermes Agent', 'Luminary Memory', 'FastEmbed / ONNX', 'LangGraph', 'RRF Fusion', 'Knowledge Graphs', 'Vector DBs', 'RAG Pipelines'],
    accent: 'text-lime-300',
    pillAccent: 'hover:bg-lime-300 hover:text-lime-950 hover:border-lime-300',
  },
  {
    title: 'Linux',
    items: ['openSUSE Tumbleweed', 'Zypper', 'Btrfs', 'Bash', 'Systemd', 'Tmux', 'Neovim', 'Fish'],
    accent: 'text-cyan-300',
    pillAccent: 'hover:bg-cyan-300 hover:text-cyan-950 hover:border-cyan-300',
  },
  {
    title: 'Frontend',
    items: ['TypeScript', 'React 19', 'Next.js 16', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    accent: 'text-foreground',
    pillAccent: 'hover:bg-foreground hover:text-background hover:border-foreground',
  },
  {
    title: 'Backend & Systems',
    items: ['Python (Systems)', 'Node.js', 'PostgreSQL / pgvector', 'SQLite / FTS5', 'Rust / Tauri', 'Prisma'],
    accent: 'text-orange-300',
    pillAccent: 'hover:bg-orange-300 hover:text-orange-950 hover:border-orange-300',
  },
]

const marqueeItems = [
  'AGENTIC AI',
  'TUMBLEWEED DAILY',
  'COFFEE → CODE → AUTONOMY',
  'LUMINARY MEMORY',
  'SHIP BOLD',
  'RAG PIPELINES',
  'OPEN SOURCE',
]

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-border">
      {/* Marquee banner */}
      <div className="py-8 md:py-12 border-b border-border bg-accent text-accent-foreground marquee-tilt">
        <Marquee items={marqueeItems} fast />
      </div>

      <div className="py-24 md:py-40 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12 md:mb-20">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">[04]</span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Capabilities
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display font-medium text-[clamp(2rem,5vw,4.5rem)] leading-tight tracking-tight max-w-4xl mb-16 md:mb-24"
          >
            Tools I reach for <span className="text-accent">first</span> - from agent frameworks
            to the terminal I live in.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {skillGroups.map((g, gi) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.08, duration: 0.5 }}
                className="bg-background p-8 md:p-12 group hover:bg-secondary transition-colors"
              >
                <div className="flex items-baseline justify-between mb-8">
                  <h3 className={`font-display font-bold text-3xl md:text-5xl tracking-tight ${g.accent}`}>
                    {g.title}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    ({String(gi + 1).padStart(2, '0')})
                  </span>
                </div>
                <ul className="flex flex-wrap gap-2 md:gap-3">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      data-cursor="hover"
                      className={`font-mono text-sm md:text-base px-3 md:px-4 py-1.5 md:py-2 border border-border rounded-full transition-all cursor-default ${g.pillAccent}`}
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Reverse marquee */}
      <div className="py-8 md:py-12 border-y border-border marquee-tilt-rev">
        <Marquee items={marqueeItems.slice().reverse()} reverse />
      </div>
    </section>
  )
}
