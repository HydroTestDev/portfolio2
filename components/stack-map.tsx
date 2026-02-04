"use client";

import { m } from "framer-motion";

const nodes = [
  { label: "Next.js", x: 70, y: 60 },
  { label: "React", x: 200, y: 40 },
  { label: "TypeScript", x: 330, y: 70 },
  { label: "Tailwind", x: 110, y: 160 },
  { label: "Framer", x: 240, y: 160 },
  { label: "WebGL", x: 360, y: 150 },
  { label: "Edge", x: 220, y: 230 }
];

export default function StackMap() {
  return (
    <div className="glass-panel glow-edge relative overflow-hidden rounded-3xl p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,45,67,0.2),transparent_60%)]" />
      <m.svg
        viewBox="0 0 420 260"
        className="relative h-64 w-full"
        fill="none"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1"
      >
        <m.path
          d="M70 60L200 40L330 70L240 160L110 160L220 230Z"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.6, repeat: Infinity, repeatType: "mirror" }}
        />
        <m.path
          d="M200 40L240 160L220 230"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, repeat: Infinity, repeatType: "mirror" }}
        />
        {nodes.map((node, index) => (
          <g key={node.label}>
            <m.circle
              cx={node.x}
              cy={node.y}
              r={10}
              fill="rgba(255,45,67,0.5)"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.2 }}
            />
            <text
              x={node.x + 14}
              y={node.y + 4}
              fill="rgba(255,255,255,0.75)"
              fontSize="10"
              fontFamily="var(--font-body)"
            >
              {node.label}
            </text>
          </g>
        ))}
      </m.svg>
    </div>
  );
}
