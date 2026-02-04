"use client";

import { m } from "framer-motion";
import { MagneticCard } from "@/components/magnetic";

const steps = [
  {
    step: "01",
    title: "Signal & Strategy",
    description:
      "We align on vision, constraints, and the technical realities that define long-term success."
  },
  {
    step: "02",
    title: "Systems Architecture",
    description:
      "Information design, service layers, and infrastructure are mapped with clarity and precision."
  },
  {
    step: "03",
    title: "Craft & Build",
    description:
      "We engineer interfaces and systems in parallel, weaving performance into every layer."
  },
  {
    step: "04",
    title: "Launch & Optimize",
    description:
      "We ship with confidence, then iterate to keep performance and UX ahead of the curve."
  }
];

export default function Process() {
  return (
    <section id="process" className="relative px-6 py-24 md:px-12 lg:px-20">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-muted">Process</p>
        <h2 className="mt-4 font-display text-3xl md:text-4xl">
          A disciplined path from vision to launch.
        </h2>
        <p className="mt-4 text-base text-muted md:text-lg">
          Our delivery model blends strategic architecture with cinematic craft,
          keeping every stage aligned to scale, performance, and brand fidelity.
        </p>
      </m.div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((item) => (
          <MagneticCard
            key={item.step}
            intensity={0.16}
            className="glass-panel glow-edge group relative overflow-hidden rounded-3xl p-6"
          >
            <div className="cursor-glow absolute inset-0" aria-hidden="true" />
            <div className="relative flex h-full flex-col">
              <p className="text-xs uppercase tracking-[0.4em] text-accent">
                {item.step}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-text">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-muted">{item.description}</p>
              <div className="mt-6 text-xs uppercase tracking-[0.3em] text-muted">
                Precision phase
              </div>
            </div>
          </MagneticCard>
        ))}
      </div>
    </section>
  );
}
