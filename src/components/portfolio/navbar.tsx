'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Index', href: '#hero', num: '01' },
  { label: 'About', href: '#about', num: '02' },
  { label: 'Work', href: '#work', num: '03' },
  { label: 'Skills', href: '#skills', num: '04' },
  { label: 'Contact', href: '#contact', num: '05' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [time, setTime] = useState('')
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const update = () => {
      const d = new Date()
      const opts: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Jakarta',
      }
      setTime(new Intl.DateTimeFormat('en-GB', opts).format(d) + ' WIB')
    }
    update()
    const i = setInterval(update, 1000)
    return () => clearInterval(i)
  }, [])

  // Active section detection
  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    sections.forEach((s) => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Floating pill nav — desktop + mobile */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl"
      >
        <nav
          className={`flex items-center justify-between gap-2 md:gap-4 px-3 md:px-4 py-2.5 md:py-3 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-background/80 backdrop-blur-xl border-border shadow-2xl shadow-black/40'
              : 'bg-background/40 backdrop-blur-md border-border/50'
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 shrink-0 pl-1"
            aria-label="Dwiky Candra home"
          >
            <div className="w-7 h-7 md:w-8 md:h-8 bg-accent text-accent-foreground flex items-center justify-center font-display font-bold text-base md:text-lg rounded-full">
              D
            </div>
            <span className="font-display font-semibold text-xs md:text-sm tracking-tight hidden sm:inline">
              DWIKY<span className="text-accent">.</span>DEV
            </span>
          </a>

          {/* Center links — desktop only */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const isActive = active === l.href.slice(1)
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`relative px-3 lg:px-4 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all ${
                      isActive
                        ? 'text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-accent rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-baseline gap-1.5">
                      <span className="text-[9px] opacity-60">{l.num}</span>
                      {l.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Right side: clock + mobile menu button */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="hidden md:flex items-center gap-2 font-mono text-[10px] text-muted-foreground pr-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {time}
            </div>
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-border text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </motion.div>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-xl flex flex-col p-6 md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                — Menu
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
              >
                <X size={20} />
              </button>
            </div>
            <ul className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 py-3 border-b border-border"
                  >
                    <span className="font-mono text-xs text-accent">{l.num}</span>
                    <span className="font-display font-bold text-5xl tracking-tight group-hover:text-accent transition-colors">
                      {l.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto pt-8 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {time}
              </span>
              <span>Indonesia · UTC+7</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
