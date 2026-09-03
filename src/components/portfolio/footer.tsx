"use client";

import { useLocalClock } from "@/hooks/use-local-clock";

export default function Footer() {
  const time = useLocalClock();

  return (
    <footer className="relative mt-auto border-t border-border bg-background">
      {/* Quote */}
      <div className="px-6 md:px-10 pt-16 md:pt-24 max-w-5xl mx-auto text-center">
        <p className="font-display italic text-2xl md:text-4xl text-muted-foreground leading-tight">
          &ldquo;Make the complex useful.&rdquo;
        </p>
      </div>

      {/* Giant footer text */}
      <div className="overflow-hidden px-6 md:px-10 pt-16 md:pt-24">
        <div className="font-display font-bold tracking-[-0.04em] leading-none text-[clamp(4rem,18vw,16rem)] text-outline">
          DWIKY
        </div>
      </div>

      {/* Meta row */}
      <div className="px-6 md:px-10 py-8 border-t border-border flex flex-col md:flex-row justify-between gap-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <div className="flex flex-wrap gap-6">
          <span>© 2026 Dwiky Candra</span>
          <span className="hidden md:inline">·</span>
          <span>Built across systems and products</span>
        </div>
        <div className="flex flex-wrap gap-6">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {time}
          </span>
          <a
            href="#hero"
            className="hover:text-foreground transition-colors"
            data-cursor="hover"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
