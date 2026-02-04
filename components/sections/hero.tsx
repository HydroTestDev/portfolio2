"use client";

import { useEffect, useRef, useState } from "react";
import {
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform
} from "framer-motion";
import { MagneticButton } from "@/components/magnetic";
import { SoundToggle } from "@/components/sound";
import type React from "react";

const easing = [0.22, 1, 0.36, 1];
const THEME_STORAGE_KEY = "nocturne-theme";
type ThemeMode = "dark" | "light";

export default function Hero({ onExplore }: { onExplore: () => void }) {
  const reduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothX = useSpring(rotateX, { stiffness: 120, damping: 18 });
  const smoothY = useSpring(rotateY, { stiffness: 120, damping: 18 });

  const translateY = useTransform(smoothX, (value) => value * 1.2);

  const handleMove = (event: React.PointerEvent) => {
    if (reduceMotion) return;
    if (!panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const relX = (x / rect.width - 0.5) * 2;
    const relY = (y / rect.height - 0.5) * 2;

    rotateX.set(relY * -6);
    rotateY.set(relX * 8);
    panelRef.current.style.setProperty("--mx", `${x}px`);
    panelRef.current.style.setProperty("--my", `${y}px`);
  };

  const handleLeave = () => {
    if (reduceMotion) return;
    rotateX.set(0);
    rotateY.set(0);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)").matches;
    const nextTheme: ThemeMode =
      stored === "light" || stored === "dark"
        ? stored
        : prefersLight
          ? "light"
          : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  const handleThemeChange = (nextTheme: ThemeMode) => {
    setTheme(nextTheme);
    if (typeof window === "undefined") return;
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  };

  const themeButtonBase =
    "rounded-full px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] transition";
  const themeButtonActive =
    "bg-accent/15 text-text shadow-[0_0_0_1px_rgba(255,45,67,0.35)]";
  const themeButtonInactive = "text-muted hover:text-text";

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden px-6 pb-24 pt-8 md:px-12 lg:px-20">
      <nav
        className="relative z-20 flex flex-wrap items-center justify-between gap-6"
        aria-label="Primary"
      >
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(255,45,67,0.8)]" />
          <span className="text-sm font-semibold tracking-[0.4em] text-text">
            NOCTURNE SYSTEMS
          </span>
        </div>
        <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.3em] text-muted md:flex">
          <a href="#capabilities" className="transition hover:text-text">
            Capabilities
          </a>
          <a href="#approach" className="transition hover:text-text">
            Approach
          </a>
          <a href="#stack" className="transition hover:text-text">
            Stack
          </a>
          <a href="#inquiry" className="transition hover:text-text">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-3">
          <div className="glass-panel glow-edge flex items-center gap-1 rounded-full p-1 text-xs uppercase tracking-[0.3em] text-muted">
            <button
              type="button"
              onClick={() => handleThemeChange("dark")}
              aria-pressed={theme === "dark"}
              className={`${themeButtonBase} ${
                theme === "dark" ? themeButtonActive : themeButtonInactive
              }`}
            >
              Dark
            </button>
            <button
              type="button"
              onClick={() => handleThemeChange("light")}
              aria-pressed={theme === "light"}
              className={`${themeButtonBase} ${
                theme === "light" ? themeButtonActive : themeButtonInactive
              }`}
            >
              Light
            </button>
          </div>
          <SoundToggle />
        </div>
      </nav>

      <div className="relative z-10 mt-16 flex flex-1 items-center justify-center">
        <m.div
          ref={panelRef}
          onPointerMove={handleMove}
          onPointerLeave={handleLeave}
          style={{
            rotateX: reduceMotion ? 0 : smoothX,
            rotateY: reduceMotion ? 0 : smoothY,
            y: reduceMotion ? 0 : translateY
          }}
          className="glass-panel glow-edge relative mx-auto w-full max-w-4xl rounded-[32px] p-10 text-center md:p-16"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),rgba(255,45,67,0.28),transparent_55%)] opacity-70" />
          <div className="pointer-events-none absolute -left-20 top-8 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,45,67,0.4),transparent_70%)] blur-2xl velocity-shift" />
          <div className="pointer-events-none absolute -right-10 bottom-6 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,45,67,0.35),transparent_70%)] blur-2xl velocity-shift" />

          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: easing }}
            className="text-xs uppercase tracking-[0.4em] text-muted"
          >
            Precision Web Engineering
          </m.p>
          <m.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: easing }}
            className="mt-6 font-display text-4xl font-semibold tracking-tight text-text md:text-6xl"
          >
            We build luxury digital systems for brands that care deeply about performance.
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: easing }}
            className="mx-auto mt-6 max-w-2xl text-base text-muted md:text-lg"
          >
            We design and build web platforms that are fast, considered, and built to last — combining strong engineering with thoughtful design and clean, scalable systems.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: easing }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton
              className="glass-panel glow-edge rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-text transition hover:shadow-glow"
              onClick={() =>
                document.getElementById("inquiry")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                })
              }
            >
              Get in touch
            </MagneticButton>
            <MagneticButton
              className="rounded-full border border-text/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-muted transition hover:border-accent/60 hover:text-text"
              onClick={onExplore}
              layoutId="shared-cta"
            >
              Explore what we do
            </MagneticButton>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.3em] text-muted"
          >
            <span>Systems Architecture</span>
            <span className="h-1 w-1 rounded-full bg-accent/60" />
            <span>Thoughtful interfaces</span>
            <span className="h-1 w-1 rounded-full bg-accent/60" />
            <span>Reliable performance</span>
          </m.div>
        </m.div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-[5%] top-[20%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,45,67,0.35),transparent_65%)] blur-3xl velocity-shift" />
        <div className="absolute bottom-[10%] right-[10%] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,45,67,0.28),transparent_70%)] blur-3xl velocity-shift" />
      </div>
    </section>
  );
}
