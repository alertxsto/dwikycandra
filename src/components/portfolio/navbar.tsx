"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useLocalClock } from "@/hooks/use-local-clock";

const links = [
  { label: "Index", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Log", href: "#activity", id: "activity" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const time = useLocalClock();
  const navRef = useRef<HTMLElement>(null);
  const activeHlRef = useRef<HTMLSpanElement>(null);
  const hoverHlRef = useRef<HTMLSpanElement>(null);
  const isScrollingRef = useRef(false);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrollingRef.current) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // Move active highlight pill when `active` changes
  useEffect(() => {
    const nav = navRef.current;
    const hl = activeHlRef.current;
    if (!nav || !hl) return;
    const activeEl = nav.querySelector<HTMLAnchorElement>(
      'a[data-active="true"]',
    );
    if (!activeEl) {
      hl.style.opacity = "0";
      return;
    }
    const navRect = nav.getBoundingClientRect();
    const r = activeEl.getBoundingClientRect();
    const left = r.left - navRect.left + nav.scrollLeft;
    hl.style.left = `${left}px`;
    hl.style.width = `${r.width}px`;
    hl.style.opacity = "1";
  }, [active]);

  // Hover pill follow (vanilla DOM mutation; no React re-render)
  useEffect(() => {
    const nav = navRef.current;
    const hoverHl = hoverHlRef.current;
    if (!nav || !hoverHl) return;

    const onLinkEnter = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const navRect = nav.getBoundingClientRect();
      const r = target.getBoundingClientRect();
      const left = r.left - navRect.left + nav.scrollLeft;
      hoverHl.style.left = `${left}px`;
      hoverHl.style.width = `${r.width}px`;
      hoverHl.style.opacity = "1";
      if (leaveTimerRef.current) {
        clearTimeout(leaveTimerRef.current);
        leaveTimerRef.current = null;
      }
    };
    const onNavLeave = () => {
      leaveTimerRef.current = setTimeout(() => {
        hoverHl.style.opacity = "0";
      }, 150);
    };

    const anchors = nav.querySelectorAll("a");
    anchors.forEach((a) => a.addEventListener("mouseenter", onLinkEnter));
    nav.addEventListener("mouseleave", onNavLeave);
    return () => {
      anchors.forEach((a) => a.removeEventListener("mouseenter", onLinkEnter));
      nav.removeEventListener("mouseleave", onNavLeave);
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    };
  }, []);

  // Smooth scroll on click with active lock
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const href = e.currentTarget.getAttribute("href");
      if (!href) return;
      e.preventDefault();
      const targetId = href.substring(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      isScrollingRef.current = true;
      setActive(targetId);

      const navbarHeight = 80;
      const targetRect = target.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = targetRect.top + scrollTop - navbarHeight - 20;

      window.scrollTo({ top: targetPosition, behavior: "smooth" });
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
      window.history.replaceState(null, "", href);
    },
    [],
  );

  return (
    <header className="site-nav">
      <div className="nav-inner">
        {/* Brand: glitch "Dwiky" + floating accent ".Dev" */}
        <a
          href="#hero"
          className="brand"
          aria-label="Dwiky Candra home"
          data-cursor="hover"
        >
          <div className="brand-inner">
            <div className="brand-bg" aria-hidden />
            <div className="brand-text">
              <span className="glitch-text" data-text="Dwiky">
                Dwiky
              </span>
            </div>
            <div className="brand-accent" aria-hidden>
              <span className="float-text">.dev</span>
              <span className="glow" />
            </div>
          </div>
        </a>

        {/* Nav links with morphing active + hover pills */}
        <nav ref={navRef} aria-label="Main navigation">
          <span
            className="nav-highlight-active"
            ref={activeHlRef}
            aria-hidden
          />
          <span className="nav-highlight-hover" ref={hoverHlRef} aria-hidden />
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={handleNavClick}
              data-active={active === l.id}
              data-cursor="hover"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Live clock: hidden on small */}
        <div className="nav-clock" aria-hidden>
          <span className="nav-clock-dot" />
          {time}
        </div>
      </div>
    </header>
  );
}
