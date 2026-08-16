"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import LoadingScreen from "@/components/ReactBits/LoadingScreen";
import GhostCursor from "@/components/ReactBits/GhostCursor";
import ScrollExpand from "@/components/ReactBits/ScrollExpand";
import CelestialCanvas from "@/components/CelestialScene";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Timeline from "@/sections/Timeline";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Certifications from "@/sections/Certifications";
import AIChatbotWidget from "@/sections/AIChatbotWidget";
import Contact from "@/sections/Contact";
import Playground from "@/sections/Playground";

export default function Home() {
  useEffect(() => {
    // If opening page without a specific section hash, scroll to top
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  return (
    <main className="relative min-h-screen text-primary selection:bg-accent selection:text-white transition-colors duration-200 bg-[radial-gradient(var(--border-card)_1.5px,transparent_1.5px)] [background-size:20px_20px]">
      {/* Theme-aware 3D celestial background (Galaxy + Sun/Earth/Moon meshes) */}
      <CelestialCanvas />

      <LoadingScreen />
      <GhostCursor />
      <Navbar />
      <Hero />
      <ScrollExpand />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Certifications />
      <AIChatbotWidget />
      <Playground />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
