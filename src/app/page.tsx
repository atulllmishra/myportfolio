"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import LoadingScreen from "@/components/ReactBits/LoadingScreen";
import GhostCursor from "@/components/ReactBits/GhostCursor";
import ScrollExpand from "@/components/ReactBits/ScrollExpand";
import CelestialCanvas from "@/components/CelestialScene/CelestialCanvas";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Timeline from "@/sections/Timeline";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Certifications from "@/sections/Certifications";
import AIChatbotWidget from "@/sections/AIChatbotWidget";
import Contact from "@/sections/Contact";

export default function Home() {
  useEffect(() => {
    // If opening page without a specific section hash, scroll to top
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  return (
    <main className="relative min-h-screen text-slate-100 selection:bg-blue-500 selection:text-white transition-colors duration-200">
      {/* Theme-aware 3D celestial background (Galaxy + Sun/Earth/Moon meshes) */}
      <CelestialCanvas />

      <LoadingScreen />
      <GhostCursor />
      <Navbar />
      <Hero />
      <ScrollExpand
        title="Engineering Philosophy"
        tagline="Precision & Intuition"
        quote="I believe great software is born at the intersection of engineering precision and design intuition. Every pixel, every interaction, every line of code is an opportunity to create something that moves people."
      />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Certifications />
      <AIChatbotWidget />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
