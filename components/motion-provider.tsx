"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import type React from "react";

export default function MotionProvider({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig
        reducedMotion="user"
        transition={{ ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
