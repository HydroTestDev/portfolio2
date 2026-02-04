"use client";

import { useEffect } from "react";
import { useMotionValueEvent, useScroll, useVelocity } from "framer-motion";

export default function SiteEffects() {
  const { scrollY, scrollYProgress } = useScroll();
  const velocity = useVelocity(scrollY);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const blur = 18 + latest * 12;
    document.documentElement.style.setProperty("--glass-blur", `${blur.toFixed(1)}px`);
  });

  useMotionValueEvent(velocity, "change", (latest) => {
    const normalized = Math.min(Math.abs(latest) / 2000, 1);
    document.documentElement.style.setProperty("--scroll-velocity", normalized.toFixed(3));
  });

  useEffect(() => {
    console.log(
      "%cNocturne Systems :: built with precision. If you love clean systems, say hello.",
      "color: #ff2d43; font-weight: 600; font-size: 12px;"
    );
  }, []);

  return null;
}
