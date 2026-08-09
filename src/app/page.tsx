"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

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
    <main className="min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-blue-500 selection:text-white transition-colors duration-200">
      <Navbar />
      <Hero />
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
