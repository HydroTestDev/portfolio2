"use client";

import { m } from "framer-motion";

const commitments = [
  {
    title: "Performance Budgets",
    detail:
      "Every build defines measurable performance targets and a plan to sustain them."
  },
  {
    title: "Scalable Foundations",
    detail:
      "Composable systems and clean architecture to prevent costly rebuilds later."
  },
  {
    title: "Design System Rigor",
    detail:
      "Token-driven UI that keeps brand precision intact across every release."
  },
  {
    title: "Security-First Delivery",
    detail:
      "Proactive hardening, least-privilege access, and resilient infrastructure choices."
  }
];

const standards = [
  "WCAG-aligned contrast",
  "Motion-reduced support",
  "Edge-ready asset strategy",
  "Observability planning",
  "CI/CD readiness",
  "Documentation-first handoff"
];

export default function Assurance() {
  return (
    <section id="assurance" className="relative px-6 py-24 md:px-12 lg:px-20">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-muted">
            Systems Guarantee
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            Engineering standards that protect your brand for years.
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">
            Our assurance model is built on measurable outcomes, resilient
            architecture, and quality gates that keep your platform secure and
            future-proof.
          </p>
          <div className="mt-8 grid gap-4 text-sm text-muted md:grid-cols-2">
            {standards.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
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
          className="glass-panel glow-edge relative overflow-hidden rounded-3xl p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,45,67,0.2),transparent_60%)]" />
          <div className="relative space-y-6">
            {commitments.map((item) => (
              <div key={item.title}>
                <h3 className="text-base font-semibold text-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
