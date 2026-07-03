'use client'

import Cursor from '@/components/portfolio/cursor'
import Navbar from '@/components/portfolio/navbar'
import SideRail from '@/components/portfolio/side-rail'
import Hero from '@/components/portfolio/hero'
import About from '@/components/portfolio/about'
import Projects from '@/components/portfolio/projects'
import Testimonials from '@/components/portfolio/testimonials'
import Skills from '@/components/portfolio/skills'
import Contact from '@/components/portfolio/contact'
import Footer from '@/components/portfolio/footer'
import ChatBot from '@/components/portfolio/chatbot'
import { Toaster as SonnerToaster } from '@/components/ui/sonner'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Cursor />
      <Navbar />
      <SideRail />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
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
