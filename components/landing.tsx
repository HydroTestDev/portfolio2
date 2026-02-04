"use client";

import { useState } from "react";
import Hero from "@/components/sections/hero";
import Capabilities from "@/components/sections/capabilities";
import Philosophy from "@/components/sections/philosophy";
import Process from "@/components/sections/process";
import StackSection from "@/components/sections/stack";
import Assurance from "@/components/sections/assurance";
import Contact from "@/components/sections/contact";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";
import dynamic from "next/dynamic";
import BackgroundLayers from "@/components/background-layers";
import { SoundProvider } from "@/components/sound";

const CapabilitiesOverlay = dynamic(
  () => import("@/components/capabilities-overlay"),
  { ssr: false }
);

export default function Landing() {
  const [overlayOpen, setOverlayOpen] = useState(false);

  return (
    <SoundProvider>
      <BackgroundLayers />
      <main id="main" className="relative z-20">
        <Hero onExplore={() => setOverlayOpen(true)} />
        <Capabilities />
        <Philosophy />
        <Process />
        <StackSection />
        <Assurance />
        <Contact />
        <CTA />
        <Footer />
      </main>
      <CapabilitiesOverlay
        open={overlayOpen}
        onClose={() => setOverlayOpen(false)}
      />
    </SoundProvider>
  );
}
