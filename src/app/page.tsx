"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingScreen from "@/components/ReactBits/LoadingScreen";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  return (
    <main className="relative min-h-screen text-primary selection:bg-accent selection:text-white transition-colors duration-200 bg-[radial-gradient(var(--border-card)_1.5px,transparent_1.5px)] [background-size:20px_20px] overflow-x-hidden">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <ScrollToTop />
    </main>
  );
}
