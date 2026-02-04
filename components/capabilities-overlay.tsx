"use client";

import { AnimatePresence, m } from "framer-motion";

const services = [
  "Frontend engineering",
  "Backend systems",
  "Full-stack web apps",
  "Performance optimization",
  "UI/UX systems",
  "API development"
];

export default function CapabilitiesOverlay({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <m.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <m.div
            layoutId="shared-cta"
            className="glass-panel glow-edge relative w-full max-w-2xl rounded-[32px] p-10"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Capabilities overview"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-muted">
              Capabilities overview
            </p>
            <h3 className="mt-4 font-display text-2xl">
              A precision stack designed for elite digital systems.
            </h3>
            <p className="mt-4 text-sm text-muted">
              We build end-to-end platforms that balance aesthetic perfection with
              resilient engineering. Every capability is delivered with clarity,
              momentum, and long-term maintainability.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-muted md:grid-cols-2">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                  {service}
                </div>
              ))}
            </div>
            <button
              className="mt-8 rounded-full border border-white/15 px-6 py-2 text-xs uppercase tracking-[0.3em] text-muted transition hover:border-accent/60 hover:text-text"
              onClick={onClose}
              type="button"
            >
              Close
            </button>
          </m.div>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
