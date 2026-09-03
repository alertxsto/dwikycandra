"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", num: "01", label: "Index" },
  { id: "about", num: "02", label: "About" },
  { id: "work", num: "03", label: "Work" },
  { id: "skills", num: "04", label: "Skills" },
  { id: "activity", num: "05", label: "Activity" },
  { id: "contact", num: "06", label: "Contact" },
];

export default function SideRail() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.aside
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-5"
      aria-label="Section navigation"
    >
      {/* Top tick */}
      <div className="w-px h-8 bg-border" />

      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group relative flex items-center justify-end gap-3 h-6"
            aria-label={`Go to ${s.label}`}
            data-cursor="hover"
          >
            {/* Label that appears on hover */}
            <span
              className={`font-mono text-[10px] uppercase tracking-widest transition-all duration-300 ${
                isActive
                  ? "text-accent opacity-100 translate-x-0"
                  : "text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              }`}
            >
              {s.label}
            </span>

            {/* Number + dot */}
            <span className="relative flex items-center justify-end w-8">
              <span
                className={`font-mono text-[10px] tabular-nums transition-colors ${
                  isActive
                    ? "text-accent"
                    : "text-muted-foreground group-hover:text-foreground"
                }`}
              >
                {s.num}
              </span>
              <motion.span
                className="absolute -right-3 w-2 h-2 rounded-full bg-accent"
                animate={{
                  scale: isActive ? 1 : 0,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 380, damping: 25 }}
              />
            </span>
          </a>
        );
      })}

      {/* Bottom tick */}
      <div className="w-px h-8 bg-border" />

      {/* Vertical text */}
      <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground [writing-mode:vertical-rl] rotate-180 mt-2">
        DWIKY.DEV / 2026
      </div>
    </motion.aside>
  );
}
