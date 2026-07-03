'use client'

import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 md:pt-32 pb-8 px-6 md:px-10 overflow-hidden bg-grid"
    >
      {/* Top meta row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground"
      >
        <div>
          <span className="text-accent">[01]</span> Location
          <br />
          <span className="text-foreground">Jakarta, ID</span>
        </div>
        <div>
          <span className="text-accent">[02]</span> Status
          <br />
          <span className="text-foreground">Open for work</span>
        </div>
        <div>
          <span className="text-accent">[03]</span> Role
          <br />
          <span className="text-foreground">Creative Dev</span>
        </div>
        <div>
          <span className="text-accent">[04]</span> Year
          <br />
          <span className="text-foreground">2026 ©</span>
        </div>
      </motion.div>

      {/* Giant name */}
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 md:mb-6"
        >
          — Creative Developer & Designer
        </motion.div>

        <h1 className="font-display font-bold leading-[0.85] tracking-[-0.04em]">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3.5rem,18vw,16rem)]"
          >
            RANGGA
          </motion.div>
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3.5rem,18vw,16rem)] flex items-baseline gap-2 md:gap-6 flex-wrap"
          >
            <span className="text-outline">PRA</span>
            <span className="text-accent">TAMA</span>
            <motion.span
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 md:w-28 md:h-28 rounded-full bg-accent text-accent-foreground shrink-0"
            >
              <ArrowUpRight size={48} strokeWidth={2.5} className="md:w-12 md:h-12 w-8 h-8" />
            </motion.span>
          </motion.div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-8 md:mt-12 max-w-2xl text-base md:text-xl text-muted-foreground leading-relaxed"
        >
          I craft <span className="text-foreground font-medium">bold, interactive digital
          experiences</span> where typography meets motion. Currently shipping front-end magic &
          design systems from Jakarta to the world.
        </motion.p>
      </div>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="flex items-end justify-between mt-12"
      >
        <a
          href="#work"
          className="group flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
            <ArrowDown size={16} className="animate-bounce" />
          </span>
          Scroll to explore
        </a>
        <div className="font-mono text-[10px] md:text-xs text-muted-foreground text-right">
          <div>(01 / 05)</div>
          <div className="text-accent">— Index</div>
        </div>
      </motion.div>

      {/* Decorative blur orbs */}
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent), transparent 70%)' }}
      />
    </section>
  )
}
