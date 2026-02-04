"use client";

import { m } from "framer-motion";
import dynamic from "next/dynamic";

const StackMap = dynamic(() => import("@/components/stack-map"), {
  ssr: false,
  loading: () => (
    <div className="glass-panel glow-edge h-64 rounded-3xl" aria-hidden="true" />
  )
});

const stackItems = [
  "Next.js App Router",
  "React + TypeScript",
  "Tailwind CSS design tokens",
  "Framer Motion",
  "Edge-ready delivery",
  "Three.js / WebGL optional"
];

const engineering = [
  "Lighthouse-optimized performance",
  "Code-split motion systems",
  "Accessibility-first contrast",
  "CI/CD readiness",
  "ESLint + Prettier",
  "Edge-optimized assets"
];

export default function StackSection() {
  return (
    <section id="stack" className="relative px-6 py-24 md:px-12 lg:px-20">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-muted">
            Technology Stack
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            A modern system map optimized for speed and longevity.
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">
            We assemble modular, future-proof stacks that balance design freedom
            with technical discipline.
          </p>
          <div className="mt-8 grid gap-3 text-sm text-muted md:grid-cols-2">
            {stackItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                {item}
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-3 text-sm text-muted md:grid-cols-2">
            {engineering.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                {item}
              </div>
            ))}
          </div>
        </m.div>
        <m.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
        >
          <StackMap />
        </m.div>
      </div>
    </section>
  );
}
