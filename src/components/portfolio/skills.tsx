"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import Marquee from "./marquee";
import {
        SiDocker,
        SiExpo,
        SiFastapi,
        SiFirebase,
        SiFramer,
        SiGithub,
        SiMaplibre,
        SiNextdotjs,
        SiNodedotjs,
        SiOnnx,
        SiPostgresql,
        SiPrisma,
        SiPython,
        SiPytorch,
        SiReact,
        SiRust,
        SiSqlite,
        SiTailwindcss,
        SiTauri,
        SiTypescript,
        SiVite,
} from "@icons-pack/react-simple-icons";

interface SkillGroup {
        title: string;
        items: string[];
        accent: string; // tailwind text color class for category title
        pillAccent: string; // tailwind classes for pill hover state
}

const skillGroups: SkillGroup[] = [
        {
                title: "Intelligent Systems",
                items: [
                        "Memory Systems",
                        "Retrieval & RRF",
                        "FastEmbed / ONNX",
                        "LangGraph",
                        "Knowledge Graphs",
                        "Data Pipelines",
                        "Model Evaluation",
                        "RAG Systems",
                ],
                accent: "text-lime-300",
                pillAccent: "hover:bg-lime-300 hover:text-lime-950 hover:border-lime-300",
        },
        {
                title: "Infrastructure",
                items: [
                        "Linux",
                        "Rust",
                        "Tauri",
                        "Python",
                        "Bash",
                        "Systemd",
                        "SQLite",
                        "Btrfs",
                ],
                accent: "text-cyan-300",
                pillAccent: "hover:bg-cyan-300 hover:text-cyan-950 hover:border-cyan-300",
        },
        {
                title: "Product Interfaces",
                items: [
                        "TypeScript",
                        "React 19",
                        "Next.js 16",
                        "Tailwind CSS",
                        "Vite",
                        "Motion design",
                ],
                accent: "text-foreground",
                pillAccent: "hover:bg-foreground hover:text-background hover:border-foreground",
        },
        {
                title: "Data & Backend",
                items: [
                        "Python",
                        "Node.js",
                        "PostgreSQL / pgvector",
                        "SQLite / FTS5",
                        "FastAPI",
                        "Prisma",
                ],
                accent: "text-orange-300",
                pillAccent: "hover:bg-orange-300 hover:text-orange-950 hover:border-orange-300",
        },
];

const marqueeItems = [
        "SYSTEMS THAT HOLD",
        "PRODUCTS THAT SHIP",
        "COMPLEXITY → CLARITY",
        "LUMINARY MEMORY",
        "BUILD IN PUBLIC",
        "DATA → DECISIONS",
        "OPEN SOURCE",
];

const techStackIcons = [
        { label: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
        { label: "React", Icon: SiReact, color: "#61dafb" },
        { label: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
        { label: "Vite", Icon: SiVite, color: "#646cff" },
        { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8" },
        { label: "Python", Icon: SiPython, color: "#3776ab" },
        { label: "PyTorch", Icon: SiPytorch, color: "#ee4c2c" },
        { label: "ONNX", Icon: SiOnnx, color: "#005ced" },
        { label: "Rust", Icon: SiRust, color: "#dea584" },
        { label: "Tauri", Icon: SiTauri, color: "#ffc131" },
        { label: "FastAPI", Icon: SiFastapi, color: "#009688" },
        { label: "Node.js", Icon: SiNodedotjs, color: "#5fa04e" },
        { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169e1" },
        { label: "SQLite", Icon: SiSqlite, color: "#003b57" },
        { label: "Prisma", Icon: SiPrisma, color: "#5a67d8" },
        { label: "Docker", Icon: SiDocker, color: "#2496ed" },
        { label: "Firebase", Icon: SiFirebase, color: "#ffca28" },
        { label: "MapLibre", Icon: SiMaplibre, color: "#396cb2" },
        { label: "Expo", Icon: SiExpo, color: "#ffffff" },
        { label: "Framer Motion", Icon: SiFramer, color: "#0055ff" },
        { label: "GitHub", Icon: SiGithub, color: "#ffffff" },
];

function TechStackCarousel({ reverse = false }: { reverse?: boolean }) {
        return (
                <div
                        className={`tech-icon-band ${reverse ? "tech-icon-band-dark" : "tech-icon-band-accent"}`}
                        aria-hidden="true"
                >
                        <div
                                className={`tech-icon-track ${reverse ? "is-reverse" : ""}`}
                        >
                                {[0, 1].map((copy) => (
                                        <div
                                                className="tech-icon-set"
                                                key={copy}
                                        >
                                                {techStackIcons.map(
                                                        ({
                                                                label,
                                                                Icon,
                                                                color,
                                                        }) => (
                                                                <span
                                                                        className="tech-icon-tile"
                                                                        key={`${label}-${copy}`}
                                                                        title={
                                                                                label
                                                                        }
                                                                        style={
                                                                                {
                                                                                        "--tech-icon-color":
                                                                                                color,
                                                                                } as CSSProperties
                                                                        }
                                                                >
                                                                        <Icon
                                                                                size={
                                                                                        28
                                                                                }
                                                                                color="currentColor"
                                                                                aria-hidden="true"
                                                                        />
                                                                </span>
                                                        ),
                                                )}
                                        </div>
                                ))}
                        </div>
                </div>
        );
}

export default function Skills() {
        return (
                <section
                        id="skills"
                        className="relative overflow-hidden border-t border-border"
                >
                        <div className="py-8 md:py-12 border-b border-border bg-accent text-accent-foreground marquee-tilt">
                                <Marquee items={marqueeItems} fast />
                        </div>

                        <div className="py-24 md:py-40 px-6 md:px-10">
                                <div className="max-w-7xl mx-auto">
                                        <div className="flex items-center gap-4 mb-12 md:mb-20">
                                                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                                                        [04]
                                                </span>
                                                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                                                        Capabilities
                                                </span>
                                                <div className="flex-1 h-px bg-border" />
                                        </div>

                                        <motion.h2
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{
                                                        opacity: 1,
                                                        y: 0,
                                                }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.7 }}
                                                className="font-display font-medium text-[clamp(2rem,5vw,4.5rem)] leading-tight tracking-tight max-w-4xl mb-16 md:mb-24"
                                        >
                                                The tools change. The systems
                                                thinking stays.
                                        </motion.h2>

                                        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
                                                {skillGroups.map((g, gi) => (
                                                        <motion.div
                                                                key={g.title}
                                                                initial={{
                                                                        opacity: 0,
                                                                        y: 30,
                                                                }}
                                                                whileInView={{
                                                                        opacity: 1,
                                                                        y: 0,
                                                                }}
                                                                viewport={{
                                                                        once: true,
                                                                }}
                                                                transition={{
                                                                        delay:
                                                                                gi *
                                                                                0.08,
                                                                        duration: 0.5,
                                                                }}
                                                                className="bg-background p-8 md:p-12 group hover:bg-secondary transition-colors"
                                                        >
                                                                <div className="flex items-baseline justify-between mb-8">
                                                                        <h3
                                                                                className={`font-display font-bold text-3xl md:text-5xl tracking-tight ${g.accent}`}
                                                                        >
                                                                                {
                                                                                        g.title
                                                                                }
                                                                        </h3>
                                                                        <span className="font-mono text-xs text-muted-foreground">
                                                                                (
                                                                                {String(
                                                                                        gi +
                                                                                                1,
                                                                                ).padStart(
                                                                                        2,
                                                                                        "0",
                                                                                )}
                                                                                )
                                                                        </span>
                                                                </div>
                                                                <ul className="flex flex-wrap gap-2 md:gap-3">
                                                                        {g.items.map(
                                                                                (
                                                                                        it,
                                                                                ) => (
                                                                                        <li
                                                                                                key={
                                                                                                        it
                                                                                                }
                                                                                                data-cursor="hover"
                                                                                                className={`font-mono text-sm md:text-base px-3 md:px-4 py-1.5 md:py-2 border border-border rounded-full transition-all cursor-default ${g.pillAccent}`}
                                                                                        >
                                                                                                {
                                                                                                        it
                                                                                                }
                                                                                        </li>
                                                                                ),
                                                                        )}
                                                                </ul>
                                                        </motion.div>
                                                ))}
                                        </div>
                                </div>
                        </div>

                        <TechStackCarousel reverse />
                </section>
        );
}
