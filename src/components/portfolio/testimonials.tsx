'use client'

import { motion } from 'framer-motion'

interface Testimonial {
  metric: string
  metricLabel: string
  text: string
  who: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    metric: '95%',
    metricLabel: 'test coverage',
    text: 'Delivered production-ready code with 95% test coverage. Consistently meets deadlines with clean, maintainable solutions.',
    who: 'IDCamp Technical Mentor',
    role: 'Generative AI Engineering',
  },
  {
    metric: '65%',
    metricLabel: 'load faster',
    text: 'Led frontend architecture decisions that reduced load time by 65%. Strong technical leadership and clear communication.',
    who: 'Team Lead',
    role: 'Career Pods Explorer',
  },
  {
    metric: '2wks',
    metricLabel: 'ahead of schedule',
    text: 'Exceeded project requirements. Delivered 2 weeks early with comprehensive documentation and 99.5% uptime.',
    who: 'Client',
    role: 'President FoodConnect',
  },
  {
    metric: '99.5%',
    metricLabel: 'uptime post-launch',
    text: 'Intuitive UI with flawless mobile responsiveness. Performance optimizations made the app feel instant.',
    who: 'Beta Tester',
    role: 'Z Studio',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 px-6 md:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12 md:mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">[03.5]</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Receipts
          </span>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            (04 Verified)
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-medium text-[clamp(1.75rem,4vw,3.5rem)] leading-tight tracking-tight max-w-4xl mb-16 md:mb-20"
        >
          Numbers from mentors, leads, and clients who shipped with me.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-background p-8 md:p-10 group hover:bg-accent hover:text-accent-foreground transition-colors duration-300 relative flex flex-col"
              data-cursor="hover"
            >
              {/* Big metric - the visual hook */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-display font-bold text-[clamp(3.5rem,8vw,6rem)] leading-none tracking-tighter text-accent group-hover:text-accent-foreground transition-colors">
                  {t.metric}
                </span>
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground group-hover:text-accent-foreground/70 transition-colors pb-2">
                  {t.metricLabel}
                </span>
              </div>

              <blockquote className="text-sm md:text-base text-muted-foreground group-hover:text-accent-foreground/85 leading-relaxed mb-6 flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-6 border-t border-border group-hover:border-accent-foreground/20 transition-colors">
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent group-hover:text-accent-foreground">
                  {String(i + 1).padStart(2, '0')} / 04
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-semibold text-sm truncate">{t.who}</div>
                  <div className="font-mono text-[10px] text-muted-foreground group-hover:text-accent-foreground/60 uppercase tracking-wider truncate">
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
