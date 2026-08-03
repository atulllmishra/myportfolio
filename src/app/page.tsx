import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import AIChatbotWidget from "@/components/AIChatbotWidget";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <AIChatbotWidget />
      <Contact />
      <Footer />
    </main>
  );
}
