import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import MotionProvider from "@/components/motion-provider";
import NoiseOverlay from "@/components/noise-overlay";
import CursorGlow from "@/components/cursor-glow";
import SiteEffects from "@/components/site-effects";
import type React from "react";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body"
});

const space = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "Nocturne Systems — Precision Web Engineering",
  description:
    "Luxury web development studio specializing in performance-first digital systems, refined UI engineering, and scalable architectures.",
  metadataBase: new URL("https://nocturnesystems.dev"),
  alternates: {
    canonical: "/"
  },
  keywords: [
    "web development studio",
    "luxury web design",
    "frontend engineering",
    "backend systems",
    "full-stack development",
    "performance optimization",
    "UI design systems",
    "Next.js agency"
  ],
  openGraph: {
    title: "Nocturne Systems — Precision Web Engineering",
    description:
      "Luxury web development studio specializing in performance-first digital systems, refined UI engineering, and scalable architectures.",
    type: "website",
    siteName: "Nocturne Systems",
    url: "/"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nocturne Systems — Precision Web Engineering",
    description:
      "Luxury web development studio specializing in performance-first digital systems, refined UI engineering, and scalable architectures."
  }
};

export const viewport = {
  themeColor: "#06060A",
  colorScheme: "dark light"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${space.variable}`}>
      <body>
        <MotionProvider>
          <div className="relative min-h-screen overflow-hidden bg-ink text-text">
            <a className="skip-link" href="#main">
              Skip to content
            </a>
            <CursorGlow />
            <NoiseOverlay />
            <SiteEffects />
            {children}
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
