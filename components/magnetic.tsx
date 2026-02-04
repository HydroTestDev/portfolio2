"use client";

import {
  m,
  useMotionValue,
  useSpring,
  type MotionStyle,
  type MotionProps
} from "framer-motion";
import type React from "react";
import { useRef } from "react";
import { useSound } from "./sound";

function useMagnetic(intensity = 0.25) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.2 });
  const smoothY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.2 });
  const ref = useRef<HTMLDivElement | HTMLButtonElement | null>(null);

  const handleMove = (event: React.PointerEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const relX = offsetX - rect.width / 2;
    const relY = offsetY - rect.height / 2;
    x.set(relX * intensity);
    y.set(relY * intensity);
    ref.current.style.setProperty("--mx", `${offsetX}px`);
    ref.current.style.setProperty("--my", `${offsetY}px`);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    if (ref.current) {
      ref.current.style.setProperty("--mx", "50%");
      ref.current.style.setProperty("--my", "50%");
    }
  };

  const style: MotionStyle = {
    x: smoothX,
    y: smoothY
  };

  return { ref, style, handleMove, handleLeave };
}

type MagneticButtonProps = React.ComponentPropsWithoutRef<"button"> &
  MotionProps & {
  intensity?: number;
};

export function MagneticButton({
  intensity,
  className,
  children,
  ...props
}: MagneticButtonProps) {
  const { play } = useSound();
  const { ref, style, handleMove, handleLeave } = useMagnetic(intensity);

  return (
    <m.button
      ref={ref as React.Ref<HTMLButtonElement>}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      onPointerEnter={() => play("tick")}
      style={style}
      className={className}
      {...props}
    >
      {children}
    </m.button>
  );
}

type MagneticCardProps = React.ComponentPropsWithoutRef<"div"> &
  MotionProps & {
  intensity?: number;
};

export function MagneticCard({
  intensity,
  className,
  children,
  ...props
}: MagneticCardProps) {
  const { play } = useSound();
  const { ref, style, handleMove, handleLeave } = useMagnetic(intensity);

  return (
    <m.div
      ref={ref as React.Ref<HTMLDivElement>}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      onPointerEnter={() => play("soft")}
      style={style}
      className={className}
      {...props}
    >
      {children}
    </m.div>
  );
}
