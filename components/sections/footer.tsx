"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12 md:px-12 lg:px-20">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_rgba(255,45,67,0.8)]" />
            <span className="text-sm font-semibold tracking-[0.4em] text-text">
              NOCTURNE SYSTEMS
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted">
            Precision engineering for premium digital experiences. Crafted with
            performance, scalability, and cinematic detail.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.3em] text-muted">
          <a className="transition hover:text-text" href="mailto:hello@nocturnesystems.dev">
            hello@nocturnesystems.dev
          </a>
          <a className="transition hover:text-text" href="#capabilities">
            Capabilities
          </a>
          <a className="transition hover:text-text" href="#stack">
            Stack
          </a>
          <a className="transition hover:text-text" href="#inquiry">
            Contact
          </a>
          <a
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-text/10 text-muted transition hover:border-accent/50 hover:text-text"
            href="https://www.facebook.com/share/17ACDEtUvb/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M13.5 8.5V7.2c0-.7.5-1.2 1.2-1.2h1.3V4h-1.8c-2 0-3.2 1.3-3.2 3.2v1.3H9v2.2h1.3V20h2.2v-9.3h2.1l.3-2.2h-2.4z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-3 text-xs text-muted md:flex-row md:items-center md:justify-between">
        <span>© 2026 Nocturne Systems. All rights reserved.</span>
        <span className="flex flex-wrap gap-4">
          <a className="transition hover:text-text" href="/privacy">
            Privacy
          </a>
          <a className="transition hover:text-text" href="/terms">
            Terms
          </a>
          <span>Security</span>
        </span>
      </div>
    </footer>
  );
}
