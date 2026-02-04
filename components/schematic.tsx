"use client";

import { m } from "framer-motion";

export default function Schematic() {
  return (
    <div className="glass-panel glow-edge relative overflow-hidden rounded-3xl p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,45,67,0.18),transparent_60%)]" />
      <m.svg
        viewBox="0 0 420 260"
        className="relative h-64 w-full"
        fill="none"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="1.2"
      >
        <m.path
          d="M40 130h120l40-40h110"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, repeat: Infinity, repeatType: "mirror" }}
        />
        <m.path
          d="M40 180h80l50-60h150"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.8, repeat: Infinity, repeatType: "mirror" }}
        />
        <m.path
          d="M40 80h90l40 50h140"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, repeat: Infinity, repeatType: "mirror" }}
        />
        {[60, 120, 200, 280, 340].map((x, idx) => (
          <m.circle
            key={x}
            cx={x}
            cy={90 + idx * 20}
            r={5}
            fill="rgba(255,45,67,0.6)"
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: idx * 0.2
            }}
          />
        ))}
        <m.circle
          cx="340"
          cy="90"
          r="12"
          stroke="rgba(255,45,67,0.6)"
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3.2, repeat: Infinity }}
        />
        <m.circle
          cx="340"
          cy="150"
          r="8"
          stroke="rgba(255,45,67,0.6)"
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2.6, repeat: Infinity }}
        />
      </m.svg>
    </div>
  );
}
