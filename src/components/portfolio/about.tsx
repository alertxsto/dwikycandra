'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

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
      {n}
      {suffix}
    </span>
  )
}

const stats = [
  { value: 6, suffix: '+', label: 'Years building', note: 'shipping products' },
  { value: 48, suffix: '', label: 'Projects done', note: 'clients worldwide' },
  { value: 12, suffix: 'M', label: 'Users reached', note: 'through shipped work' },
  { value: 9, suffix: '', label: 'Awards', note: 'design & dev' },
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
          I&apos;m a <span className="text-accent">creative developer</span> obsessed with
          the intersection of <span className="text-outline">design, code & motion.</span>{' '}
          I turn ambitious ideas into pixel-perfect interfaces that move, breathe, and convert.
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
              The short version.
            </div>
          </div>
          <div className="md:col-span-2 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Born in Bandung, raised on the early internet. I started writing HTML at 12 to mod
              my gaming forum, and never stopped. Today I lead front-end at a fintech startup while
              taking on select freelance gigs where I can push the craft harder.
            </p>
            <p>
              My work lives at the seam between design and engineering — I write production
              TypeScript by day and obsess over kerning pairs by night. I believe the best
              interfaces are <span className="text-foreground font-medium">felt before they&apos;re
              understood</span>, and that performance is a feature.
            </p>
            <p>
              Outside the screen, you&apos;ll find me collecting mechanical keyboards, brewing
              single-origin coffee, and losing badly at chess to my 9-year-old nephew.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
