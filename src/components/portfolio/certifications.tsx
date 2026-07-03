'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, Award, ArrowUpRight } from 'lucide-react'

interface Cert {
  num: string
  title: string
  issuer: string
  year: string
  metric: string
  metricLabel: string
  detail: string
  takeaways: string[]
  href?: string
}

const certs: Cert[] = [
  {
    num: '01',
    title: 'Generative AI Engineering',
    issuer: 'IDCamp 2025 · Indosat Ooredoo',
    year: '2025',
    metric: '+60%',
    metricLabel: 'search accuracy',
    detail: 'Intensive bootcamp on LLM architecture, prompt engineering, fine-tuning, and AI integration in web applications. Capstone: deployed semantic search feature serving 500+ active students.',
    takeaways: [
      'LLM architecture & tokenization internals',
      'Production prompt engineering patterns',
      'RAG pipeline design with vector stores',
      'AI feature deployment for 500+ users',
    ],
    href: 'https://idcamp.ioh.co.id',
  },
  {
    num: '02',
    title: 'AI Fundamentals',
    issuer: 'Pijak × IBM SkillsBuild',
    year: '2025',
    metric: '-40%',
    metricLabel: 'chatbot latency',
    detail: 'Comprehensive AI fundamentals in collaboration with IBM SkillsBuild. Built AI chatbot prototype using Watson services, optimizing model selection and prompts to cut response time by 40%.',
    takeaways: [
      'IBM Watson AI services overview',
      'ML algorithm fundamentals',
      'Practical AI app patterns',
      'Shipped chatbot prototype with measurable speedup',
    ],
  },
  {
    num: '03',
    title: 'Cloud Backend Development',
    issuer: 'AWS Backend Academy',
    year: '2025',
    metric: '10K+',
    metricLabel: 'daily API requests',
    detail: 'AWS-focused backend program covering cloud architecture, serverless computing, and scalable systems. Capstone: serverless API with 99.5% uptime handling 10K+ daily requests at 200ms avg response.',
    takeaways: [
      'EC2, S3, Lambda core services',
      'Serverless architecture patterns',
      'API Gateway + microservices design',
      'RDS & DynamoDB selection criteria',
    ],
  },
  {
    num: '04',
    title: 'Full Stack Web Development',
    issuer: 'Coding Camp 2026 · DBS Foundation',
    year: '2026',
    metric: 'Top 10%',
    metricLabel: 'of cohort',
    detail: 'Comprehensive full-stack bootcamp covering modern JS frameworks, backend, and database management. Graduated top 10% of cohort with 3 production-ready apps deployed to 200+ users.',
    takeaways: [
      'React 19 + modern frontend patterns',
      'Node.js / Express backend architecture',
      'RESTful API design & SQL/NoSQL modeling',
      '3 deployed apps, 200+ real users',
    ],
  },
]

function CertRow({ c, index, isOpen, onToggle }: { c: Cert; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="relative"
    >
      <button
        onClick={onToggle}
        className="project-row group block w-full text-left border-t border-border py-6 md:py-8 px-2 md:px-4 relative"
        data-cursor="hover"
        aria-expanded={isOpen}
      >
        <div className="relative z-[2] flex items-baseline justify-between gap-4 md:gap-8 flex-wrap">
          <div className="flex items-baseline gap-3 md:gap-6 flex-1 min-w-0">
            <span className="font-mono text-xs md:text-sm text-muted-foreground group-hover:text-accent-foreground shrink-0">
              ({c.num})
            </span>
            <div className="min-w-0 flex-1">
              <div className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-accent mb-1.5">
                {c.issuer}
              </div>
              <h4 className="font-display font-semibold text-xl md:text-3xl tracking-tight leading-tight group-hover:translate-x-1 transition-transform duration-300">
                {c.title}
              </h4>
            </div>
          </div>

          <div className="flex items-baseline gap-4 md:gap-6 shrink-0">
            <div className="text-right">
              <div className="font-display font-bold text-2xl md:text-4xl leading-none tracking-tight text-accent">
                {c.metric}
              </div>
              <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                {c.metricLabel}
              </div>
            </div>
            <span className="font-mono text-xs text-muted-foreground hidden md:inline">{c.year}</span>
            <ChevronDown
              size={20}
              className={`text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
        </div>

        {/* Mobile year */}
        <div className="md:hidden mt-2 pl-8 font-mono text-xs text-muted-foreground">
          {c.year}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="grid md:grid-cols-12 gap-6 md:gap-10 py-6 md:py-10 pl-2 md:pl-4">
              {/* Detail */}
              <div className="md:col-span-6">
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">
                  [Overview]
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                  {c.detail}
                </p>
                {c.href && (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground hover:text-accent transition-colors group/link"
                    data-cursor="hover"
                  >
                    Visit program
                    <ArrowUpRight
                      size={14}
                      className="group-hover/link:rotate-45 transition-transform"
                    />
                  </a>
                )}
              </div>

              {/* Key takeaways */}
              <div className="md:col-span-6">
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">
                  [Key Takeaways]
                </div>
                <ul className="space-y-2">
                  {c.takeaways.map((t, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-foreground/85 leading-snug"
                    >
                      <span className="font-mono text-[10px] text-accent shrink-0 mt-1 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {index < certs.length - 1 && <div className="border-b border-border" />}
    </motion.div>
  )
}

export default function Certifications() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="mt-20 md:mt-32">
      <div className="flex items-center gap-4 mb-10 md:mb-14">
        <Award size={16} className="text-accent" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Certifications & Programs
        </span>
        <div className="flex-1 h-px bg-border" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          (04 · Click to expand)
        </span>
      </div>

      <div>
        {certs.map((c, i) => (
          <CertRow
            key={c.num}
            c={c}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </div>
  )
}
