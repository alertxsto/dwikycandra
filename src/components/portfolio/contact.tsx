'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

const socials = [
  { label: 'Email', value: 'dwikycandra005@gmail.com', href: 'mailto:dwikycandra005@gmail.com' },
  { label: 'LinkedIn', value: '/in/dwiky-candra', href: 'https://linkedin.com/in/dwiky-candra' },
  { label: 'GitHub', value: '@alertxsto', href: 'https://github.com/alertxsto' },
  { label: 'Portfolio', value: 'dwikycandra.vercel.app', href: 'https://dwikycandra.vercel.app' },
  { label: 'Instagram', value: '@dky_cdr', href: 'https://instagram.com/dky_cdr' },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('dwikycandra005@gmail.com')
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
            className="group mt-12 inline-flex items-center gap-4 font-display font-semibold text-xl md:text-3xl border-b-2 border-foreground pb-2 hover:text-accent hover:border-accent transition-colors max-w-full break-all"
          >
            <Mail size={28} className="group-hover:rotate-12 transition-transform shrink-0" />
            {copied ? 'Copied!' : 'dwikycandra005@gmail.com'}
            <ArrowUpRight size={28} className="group-hover:rotate-45 transition-transform shrink-0" />
          </button>
        </motion.div>

        {/* Socials grid: 5 cards now, no Location card */}
        <div className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-3 gap-px bg-border border border-border">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
                <div className="font-display font-semibold text-base md:text-xl break-all">
                  {s.value}
                </div>
              </div>
              <ArrowUpRight
                size={20}
                className="text-muted-foreground group-hover:text-accent-foreground group-hover:rotate-45 transition-all shrink-0"
              />
            </motion.a>
          ))}

          {/* Location card: non-link, distinct visual treatment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: socials.length * 0.05, duration: 0.4 }}
            className="bg-secondary p-6 md:p-8 flex items-baseline justify-between border-t border-border md:border-t-0 md:[&:nth-child(3n+1):not(:first-child)]:border-l"
          >
            <div>
              <div className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-accent mb-2 flex items-center gap-1.5">
                <MapPin size={11} />
                Location
              </div>
              <div className="font-display font-semibold text-base md:text-xl">
                Indonesia
              </div>
              <div className="font-mono text-[10px] text-muted-foreground mt-1">
                UTC+7 · Remote-friendly
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
