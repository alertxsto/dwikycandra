'use client'

import { motion } from 'framer-motion'
import { Award, ArrowUpRight } from 'lucide-react'

const certs = [
  {
    title: 'Generative AI Engineering',
    issuer: 'IDCamp 2025 · Indosat Ooredoo',
    year: '2025',
    achievement: '60%',
    achievementLabel: 'search accuracy boost',
    detail: 'Deployed semantic search serving 500+ active students',
    hue: 'from-lime-300 to-emerald-500',
  },
  {
    title: 'AI Course',
    issuer: 'Pijak × IBM SkillsBuild',
    year: '2025',
    achievement: '40%',
    achievementLabel: 'faster chatbot response',
    detail: 'Built AI chatbot prototype with optimized model selection',
    hue: 'from-cyan-400 to-blue-600',
  },
  {
    title: 'Cloud Backend Development',
    issuer: 'AWS Backend Academy',
    year: '2025',
    achievement: '10K+',
    achievementLabel: 'daily API requests',
    detail: 'Serverless API with 99.5% uptime, 200ms avg response',
    hue: 'from-orange-400 to-red-500',
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'Coding Camp 2026 · DBS Foundation',
    year: '2026',
    achievement: 'Top 10%',
    achievementLabel: 'of cohort',
    detail: 'Built 3 production apps deployed to 200+ users',
    hue: 'from-fuchsia-400 to-purple-600',
  },
]

export default function Certifications() {
  return (
    <div className="mt-20 md:mt-32">
      <div className="flex items-center gap-4 mb-10 md:mb-14">
        <Award size={16} className="text-accent" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Certifications & Programs
        </span>
        <div className="flex-1 h-px bg-border" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          (04)
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="bg-background p-6 md:p-8 group hover:bg-secondary transition-colors cursor-default"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-accent mb-2">
                  {c.issuer}
                </div>
                <h4 className="font-display font-semibold text-lg md:text-xl leading-tight">
                  {c.title}
                </h4>
              </div>
              <span className="font-mono text-xs text-muted-foreground shrink-0 ml-4">
                {c.year}
              </span>
            </div>

            <div className="flex items-baseline gap-3 mb-3">
              <span className={`font-display font-bold text-4xl md:text-5xl leading-none tracking-tight bg-gradient-to-br ${c.hue} bg-clip-text text-transparent`}>
                {c.achievement}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {c.achievementLabel}
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {c.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
