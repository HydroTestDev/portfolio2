"use client";

import { m } from "framer-motion";
import { MagneticButton } from "@/components/magnetic";

export default function CTA() {
  return (
    <section id="cta" className="relative px-6 py-24 md:px-12 lg:px-20">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="glass-panel glass-panel--strong glow-edge mx-auto max-w-4xl rounded-[32px] p-12 text-center"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-muted">
          Begin the build
        </p>
        <h2 className="mt-4 font-display text-3xl md:text-4xl">
          A premium digital system is one conversation away.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted md:text-lg">
          Tell us where you want to go. We will design the architecture,
          performance, and polish to take you there.
        </p>
        <div className="mt-8 flex justify-center">
          <MagneticButton
            className="glass-panel glow-edge rounded-full px-10 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-text transition hover:shadow-glow"
            onClick={() => (window.location.href = "mailto:hello@nocturnesystems.dev")}
          >
            Start the conversation
          </MagneticButton>
        </div>
      </m.div>
    </section>
  );
}
