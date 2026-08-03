"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download, Sun, Moon, GraduationCap } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#timeline" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#certifications" },
  { name: "AI Assistant", href: "#ai-assistant" },
  { name: "Contact", href: "#contact" },
];

const profilePicUrl =
  "https://media.licdn.com/dms/image/v2/D4D03AQEZbzxHR0Z45Q/profile-displayphoto-crop_800_800/B4DZh7FG4QHwAI-/0/1754411595531?e=1787184000&v=beta&t=nSeMFlyp1Tf3p3940JcRZyBd7cJG_Bfp97VrVGZnz-o";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "py-3 bg-[#0b0f19]/90 backdrop-blur-md border-b border-[#1e293b] shadow-lg shadow-black/20"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Academic Brand Logo with Profile Avatar */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src={profilePicUrl}
              alt="Atul Mishra Avatar"
              className="w-9 h-9 rounded-full object-cover border border-blue-500/80 shadow-md group-hover:scale-105 transition-transform"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-[#0b0f19]" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base text-white tracking-tight group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
              Atul Kumar Mishra
              <GraduationCap className="w-4 h-4 text-blue-400" />
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              B.Tech CSE • MCAET ANDUAT
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls: Theme Switcher & CV Button */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-300 hover:text-white bg-[#131c2e] border border-[#1e293b] hover:border-blue-500/40 transition-all flex items-center gap-1.5 text-xs font-mono"
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-blue-500" />
            )}
            <span className="hidden sm:inline capitalize">{theme}</span>
          </button>

          {/* Resume PDF Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/20 transition-all active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV / Resume</span>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-300 hover:text-white bg-[#131c2e] border border-[#1e293b]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-blue-500" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white bg-[#131c2e] border border-[#1e293b]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b0f19] border-b border-[#1e293b] px-6 py-6 space-y-4 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-300 hover:text-blue-400 py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-[#1e293b] flex flex-col gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 rounded-lg text-xs font-semibold bg-blue-600 text-white"
            >
              Download CV / Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
