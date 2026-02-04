"use client";

import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function BackgroundLayers() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, 220]);

  if (reduceMotion) {
    return (
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[8%] top-[35%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,45,67,0.14),transparent_70%)] blur-3xl" />
        <div className="absolute right-[12%] top-[20%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,45,67,0.12),transparent_70%)] blur-3xl" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <m.div
        style={{ y: orbY, filter: "blur(calc(30px + var(--scroll-velocity) * 20px))" }}
        className="absolute left-[8%] top-[35%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,45,67,0.18),transparent_70%)]"
      />
      <m.div
        style={{ y: orbY2, filter: "blur(calc(40px + var(--scroll-velocity) * 18px))" }}
        className="absolute right-[12%] top-[20%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,45,67,0.16),transparent_70%)]"
      />
    </div>
  );
}
