'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'Delivered production-ready code with 95% test coverage. Consistently meets deadlines with clean, maintainable solutions.',
    who: 'IDCamp Technical Mentor',
    role: 'Generative AI Engineering',
  },
  {
    text: 'Led frontend architecture decisions that reduced load time by 65%. Strong technical leadership and clear communication.',
    who: 'Team Lead',
    role: 'Career Pods Explorer',
  },
  {
    text: 'Exceeded project requirements. Delivered 2 weeks early with comprehensive documentation and 99.5% uptime.',
    who: 'Client',
    role: 'President FoodConnect',
  },
  {
    text: 'Intuitive UI with flawless mobile responsiveness. Performance optimizations made the app feel instant.',
    who: 'Beta Tester',
    role: 'Z Studio',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10 border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12 md:mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">[✦]</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            What People Say
          </span>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            (04 Quotes)
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-medium text-[clamp(1.75rem,4vw,3.5rem)] leading-tight tracking-tight max-w-4xl mb-16 md:mb-20"
        >
          Receipts from mentors, leads, and clients who shipped with me.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-background p-8 md:p-10 group hover:bg-secondary transition-colors relative"
            >
              <Quote
                size={40}
                className="text-accent mb-6 opacity-60 group-hover:opacity-100 transition-opacity"
              />
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                {t.text}
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-display font-bold shrink-0">
                  {t.who.charAt(0)}
                </div>
                <div>
                  <div className="font-display font-semibold text-sm">{t.who}</div>
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
