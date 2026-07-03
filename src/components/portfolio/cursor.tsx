'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let rafId = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
    }

    const onDown = () => {
      ring.style.width = '32px'
      ring.style.height = '32px'
    }
    const onUp = () => {
      ring.style.width = ''
      ring.style.height = ''
    }

    const onEnterInteractive = () => document.body.classList.add('cursor-hovering')
    const onLeaveInteractive = () => document.body.classList.remove('cursor-hovering')

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      rafId = requestAnimationFrame(animate)
    }
    animate()

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    const attachHover = () => {
      const els = document.querySelectorAll('a, button, [data-cursor="hover"], .project-row')
      els.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive)
        el.removeEventListener('mouseleave', onLeaveInteractive)
        el.addEventListener('mouseenter', onEnterInteractive)
        el.addEventListener('mouseleave', onLeaveInteractive)
      })
    }
    attachHover()
    const interval = setInterval(attachHover, 2000)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(rafId)
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring hidden md:block" aria-hidden />
      <div ref={dotRef} className="cursor-dot hidden md:block" aria-hidden />
    </>
  )
}
