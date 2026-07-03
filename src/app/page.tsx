'use client'

import Cursor from '@/components/portfolio/cursor'
import ScrollProgress from '@/components/portfolio/scroll-progress'
import Navbar from '@/components/portfolio/navbar'
import SideRail from '@/components/portfolio/side-rail'
import Hero from '@/components/portfolio/hero'
import About from '@/components/portfolio/about'
import Projects from '@/components/portfolio/projects'
import Skills from '@/components/portfolio/skills'
import Contact from '@/components/portfolio/contact'
import Footer from '@/components/portfolio/footer'
import { Toaster as SonnerToaster } from '@/components/ui/sonner'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <SideRail />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <SonnerToaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'var(--background)',
            border: '1px solid var(--border)',
            color: 'var(--foreground)',
            fontFamily: 'var(--font-mono)',
          },
        }}
      />
    </div>
  )
}
