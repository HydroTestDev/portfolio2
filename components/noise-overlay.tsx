"use client";

export default function NoiseOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 opacity-20 mix-blend-soft-light noise-layer"
      aria-hidden="true"
    />
  );
}
