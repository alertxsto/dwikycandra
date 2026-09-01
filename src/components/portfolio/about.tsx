'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Certifications from './certifications'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const duration = 1600
    const start = performance.now()
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.floor(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setN(to)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span ref={ref}>
      {n.toLocaleString('en-US')}
      {suffix}
    </span>
  )
}

const stats = [
  { value: 1247, suffix: '+', label: 'Active learners', note: 'ZeroCode platform' },
  { value: 16, suffix: '+', label: 'Projects shipped', note: 'production · real users' },
  { value: 370, suffix: '+', label: 'Automated tests', note: '93% coverage · PyPI library' },
  { value: 4, suffix: '', label: 'Pro certifications', note: 'IBM × IDCamp × DBS × AWS' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-40 px-6 md:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">[02]</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            About
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Big intro text */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-medium tracking-[-0.03em] leading-[1.05] text-[clamp(2rem,6vw,5.5rem)] max-w-6xl"
        >
          I build <span className="text-accent">agentic AI systems</span> that reason and ship. I do
          it from an <span className="text-outline">openSUSE Tumbleweed</span> terminal
          after years of distrohopping. Code that thinks, on a system that just works.
        </motion.h2>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-20 md:mt-32 border border-border">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-background p-6 md:p-10 group hover:bg-accent hover:text-accent-foreground transition-colors duration-300 cursor-default"
            >
              <div className="font-display font-bold text-[clamp(2.5rem,7vw,5rem)] leading-none tracking-tight">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-4 font-display font-semibold text-base md:text-xl">{s.label}</div>
              <div className="mt-1 font-mono text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground group-hover:text-accent-foreground/70">
                {s.note}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-20 mt-20 md:mt-32">
          <div className="md:col-span-1">
            <div className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
              [Bio]
            </div>
            <div className="font-display text-2xl md:text-3xl font-medium leading-tight">
              Coffee → code → autonomous agents.
            </div>
          </div>
          <div className="md:col-span-2 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              I&apos;m Dwiky, a full-stack developer who fell hard into agentic AI. I build agents
              that don&apos;t just answer questions but plan, use tools, and ship work end-to-end.
              Hermes-style orchestration, LangChain graphs, RAG pipelines over real
              production data, covering the whole stack from prompt engineering to deployment.
            </p>
            <p>
              On the OS side, I&apos;m a recovering distrohopper. I&apos;ve daily-driven Arch,
              Fedora, NixOS, Debian, Pop!_OS, Endeavour, and a few I&apos;d rather forget, and I
              finally landed on{' '}
              <span className="text-foreground font-medium">openSUSE Tumbleweed</span> for the
              rolling-release freshness with the stability of Zypper and Btrfs snapshots. When
              something breaks, I roll back. When it doesn&apos;t, I ship.
            </p>
            <p>
              I build and maintain{' '}
              <span className="text-foreground font-medium">Luminary Memory</span>, an open-source
              self-hosted memory layer on PyPI for autonomous AI agents. Alongside{' '}
              <span className="text-foreground font-medium">ZeroCode</span> (coding academy with a browser
              Monaco IDE) and <span className="text-foreground font-medium">kydev</span> (native Linux
              dashboard), I focus on local ONNX inference, Hermes agent orchestration, and bulletproof
              systems programming on Linux.
            </p>
          </div>
        </div>

        {/* Certifications & programs */}
        <Certifications />
      </div>
    </section>
  )
}
