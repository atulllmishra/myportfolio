import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import AIChatbotWidget from "@/components/AIChatbotWidget";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-blue-500 selection:text-white transition-colors duration-200">
      <Navbar />
      <Hero />
      <Timeline />
      <Projects />
      <Skills />
      <Certifications />
      <AIChatbotWidget />
      <Contact />
      <Footer />
    </main>
  );
}
