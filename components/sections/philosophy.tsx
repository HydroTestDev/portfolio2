"use client";

import { m } from "framer-motion";
import dynamic from "next/dynamic";

const Schematic = dynamic(() => import("@/components/schematic"), {
  ssr: false,
  loading: () => (
    <div className="glass-panel glow-edge h-64 rounded-3xl" aria-hidden="true" />
  )
});

export default function Philosophy() {
  return (
    <section id="approach" className="relative px-6 py-24 md:px-12 lg:px-20">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-muted">
            Philosophy
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            Systems built for longevity, clarity, and scale.
          </h2>
          <div className="mt-6 space-y-4 text-base text-muted md:text-lg">
            <p>
              We approach every build as infrastructure: composable, resilient,
              and aligned to your long-term roadmap.
            </p>
            <p>
              Our process balances strategic architecture with obsessive
              craftsmanship, ensuring performance, elegance, and maintainability
              from day one.
            </p>
            <p>
              Every decision favors scalability, clarity, and a premium
              experience that feels effortless to end users.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-xs uppercase tracking-[0.3em] text-muted">
            <span>Scalable Architecture</span>
            <span className="h-1 w-1 rounded-full bg-accent/60" />
            <span>Design Systems</span>
            <span className="h-1 w-1 rounded-full bg-accent/60" />
            <span>Operational Excellence</span>
          </div>
        </m.div>
        <m.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
        >
          <Schematic />
        </m.div>
      </div>
    </section>
  );
}
