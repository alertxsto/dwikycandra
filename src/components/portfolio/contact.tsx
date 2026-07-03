'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

const socials = [
  { label: 'Email', value: 'halo@rangga.dev', href: 'mailto:halo@rangga.dev' },
  { label: 'GitHub', value: '@ranggadev', href: '#' },
  { label: 'Dribbble', value: '@ranggadev', href: '#' },
  { label: 'LinkedIn', value: '/in/ranggadev', href: '#' },
  { label: 'Twitter / X', value: '@ranggadev', href: '#' },
  { label: 'Instagram', value: '@rangga.codes', href: '#' },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('halo@rangga.dev')
      setCopied(true)
      toast.success('Email copied to clipboard')
      setTimeout(() => setCopied(false), 1800)
    } catch {
      toast.error('Could not copy')
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 md:py-40 px-6 md:px-10 border-t border-border overflow-hidden"
    >
      <div
        className="absolute -bottom-40 -left-20 w-[600px] h-[600px] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent), transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center gap-4 mb-12 md:mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">[05]</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Contact
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Got a project? Let&apos;s talk.
          </div>

          <h2 className="font-display font-bold leading-[0.85] tracking-[-0.04em] text-[clamp(3rem,12vw,12rem)]">
            <span className="block">LET&apos;S</span>
            <span className="block text-accent">BUILD.</span>
          </h2>

          <button
            onClick={copyEmail}
            data-cursor="hover"
            className="group mt-12 inline-flex items-center gap-4 font-display font-semibold text-2xl md:text-4xl border-b-2 border-foreground pb-2 hover:text-accent hover:border-accent transition-colors"
          >
            <Mail size={32} className="group-hover:rotate-12 transition-transform" />
            {copied ? 'Copied!' : 'halo@rangga.dev'}
            <ArrowUpRight size={32} className="group-hover:rotate-45 transition-transform" />
          </button>

          <div className="mt-6 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <MapPin size={14} className="text-accent" />
            Jakarta, Indonesia — UTC+7
          </div>
        </motion.div>

        {/* Socials grid */}
        <div className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-3 gap-px bg-border border border-border">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="bg-background p-6 md:p-8 group hover:bg-accent hover:text-accent-foreground transition-colors flex items-baseline justify-between"
              data-cursor="hover"
            >
              <div>
                <div className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground group-hover:text-accent-foreground/70 mb-2">
                  {s.label}
                </div>
                <div className="font-display font-semibold text-lg md:text-2xl">{s.value}</div>
              </div>
              <ArrowUpRight
                size={20}
                className="text-muted-foreground group-hover:text-accent-foreground group-hover:rotate-45 transition-all"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
