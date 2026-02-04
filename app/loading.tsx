"use client";

import { m } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink text-text">
      <m.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel glow-edge flex flex-col items-center gap-6 rounded-3xl px-12 py-10"
      >
        <m.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"
        />
        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg font-semibold tracking-[0.35em] text-text"
        >
          NOCTURNE
        </m.div>
        <m.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="text-xs uppercase tracking-[0.4em] text-muted"
        >
          Initializing
        </m.div>
      </m.div>
    </div>
  );
}
