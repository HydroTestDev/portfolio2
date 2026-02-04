"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState
} from "react";
import type React from "react";

type SoundContextValue = {
  enabled: boolean;
  toggle: () => void;
  play: (variant?: "tick" | "soft") => void;
};

const SoundContext = createContext<SoundContextValue>({
  enabled: false,
  toggle: () => {},
  play: () => {}
});

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const audioRef = useRef<AudioContext | null>(null);

  const toggle = useCallback(() => {
    setEnabled((prev) => !prev);
  }, []);

  const play = useCallback(
    async (variant: "tick" | "soft" = "tick") => {
      if (!enabled) return;
      const context = audioRef.current ?? new AudioContext();
      audioRef.current = context;
      if (context.state === "suspended") {
        await context.resume();
      }
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = variant === "tick" ? 880 : 520;

      const now = context.currentTime;
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.05, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(now);
      oscillator.stop(now + 0.3);
    },
    [enabled]
  );

  const value = useMemo(
    () => ({
      enabled,
      toggle,
      play
    }),
    [enabled, toggle, play]
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

export function useSound() {
  return useContext(SoundContext);
}

export function SoundToggle() {
  const { enabled, toggle, play } = useSound();

  return (
    <button
      type="button"
      onClick={() => {
        toggle();
        play("soft");
      }}
      className="glass-panel glow-edge flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em] text-muted transition hover:text-text"
      aria-pressed={enabled}
    >
      <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(255,45,67,0.7)]" />
      {enabled ? "Sound On" : "Sound Off"}
    </button>
  );
}
