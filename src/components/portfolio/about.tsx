"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Certifications from "./certifications";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const duration = 1600;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setN(to);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 1247,
    suffix: "+",
    label: "Active learners",
    note: "ZeroCode platform",
  },
  {
    value: 16,
    suffix: "+",
    label: "Projects shipped",
    note: "production · real users",
  },
  {
    value: 505,
    suffix: "+",
    label: "Automated tests",
    note: "83% coverage · Luminary Memory",
  },
  {
    value: 4,
    suffix: "",
    label: "Pro certifications",
    note: "IBM × IDCamp × DBS × AWS",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-40 px-6 md:px-10 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            [02]
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            About
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Big intro text */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-medium tracking-[-0.03em] leading-[1.05] text-[clamp(2rem,6vw,5.5rem)] max-w-6xl"
        >
          I build{" "}
          <span className="text-accent">
            systems that make complex work clearer
          </span>
          : products, interfaces, and infrastructure that help people
          understand, decide, and ship.
        </motion.h2>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-20 md:mt-32 border border-border">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-background p-6 md:p-10 group hover:bg-accent hover:text-accent-foreground transition-colors duration-300 cursor-default"
            >
              <div className="font-display font-bold text-[clamp(2.5rem,7vw,5rem)] leading-none tracking-tight">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-4 font-display font-semibold text-base md:text-xl">
                {s.label}
              </div>
              <div className="mt-1 font-mono text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground group-hover:text-accent-foreground/70">
                {s.note}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-20 mt-20 md:mt-32">
          <div className="md:col-span-1">
            <div className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
              [Bio]
            </div>
            <div className="font-display text-2xl md:text-3xl font-medium leading-tight">
              Systems → products → useful work.
            </div>
          </div>
          <div className="md:col-span-2 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              I&apos;m Dwiky, a systems-minded builder working across product
              interfaces, data, automation, and infrastructure. I care about the
              seams: how a model becomes a workflow, how a dataset becomes a
              decision, and how a tool behaves when the conditions are not
              ideal.
            </p>
            <p>
              My work moves between operational tools, knowledge systems, and
              interfaces for real people. I like software that stays legible
              under pressure: clear states, honest data, useful defaults, and an
              escape hatch when the happy path breaks.
            </p>
            <p>
              I build and maintain products such as{" "}
              <span className="text-foreground font-medium">
                Luminary Memory
              </span>
              , <span className="text-foreground font-medium">ZeroCode</span>,{" "}
              <span className="text-foreground font-medium">KyDev</span>, and{" "}
              <span className="text-foreground font-medium">Kasir Pintar</span>.
              I also lead{" "}
              <span className="text-foreground font-medium">JWIS</span>, a civic
              operations system that turns fleet, forecast, and field signals
              into a clearer decision loop.
            </p>
          </div>
        </div>

        {/* Certifications & programs */}
        <Certifications />
      </div>
    </section>
  );
}
