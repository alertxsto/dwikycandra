'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useRef, useState } from 'react'

interface Project {
  num: string
  title: string
  category: string
  year: string
  role: string
  hue: string
}

const projects: Project[] = [
  {
    num: '01',
    title: 'NEONBANK',
    category: 'Fintech / Web App',
    year: '2025',
    role: 'Lead Frontend',
    hue: 'from-lime-300 to-emerald-500',
  },
  {
    num: '02',
    title: 'STUDIO ATLAS',
    category: 'Architecture / Portfolio',
    year: '2025',
    role: 'Design + Dev',
    hue: 'from-orange-400 to-red-500',
  },
  {
    num: '03',
    title: 'PULSE FM',
    category: 'Music / Streaming',
    year: '2024',
    role: 'Creative Dev',
    hue: 'from-fuchsia-400 to-purple-600',
  },
  {
    num: '04',
    title: 'TANAHAIR',
    category: 'Gov / Civic Tech',
    year: '2024',
    role: 'Frontend Lead',
    hue: 'from-sky-400 to-blue-600',
  },
  {
    num: '05',
    title: 'KARUNIA',
    category: 'E-commerce / Headless',
    year: '2023',
    role: 'Full-stack',
    hue: 'from-amber-300 to-rose-500',
  },
]

function ProjectRow({ p }: { p: Project }) {
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
    <a
      ref={ref}
      href="#contact"
      className="project-row group block border-t border-border last:border-b py-6 md:py-10 px-2 md:px-4 relative"
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
            (05 Projects)
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-medium text-[clamp(2rem,5vw,4.5rem)] leading-tight tracking-tight max-w-4xl mb-16 md:mb-24"
        >
          A curated cut of <span className="text-accent">recent work</span> — hover any row.
        </motion.h2>

        <div>
          {projects.map((p) => (
            <ProjectRow key={p.num} p={p} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
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
