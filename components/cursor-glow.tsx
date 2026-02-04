"use client";

import {
  m,
  useMotionValue,
  useReducedMotion,
  useSpring
} from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.2 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.2 });

  useEffect(() => {
    if (reduceMotion) return undefined;
    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [reduceMotion, x, y]);

  if (reduceMotion) return null;

  return (
    <m.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,45,67,0.25)_0%,rgba(255,45,67,0)_70%)] blur-2xl"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
