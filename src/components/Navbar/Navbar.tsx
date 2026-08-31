"use client";

import { useState, useEffect } from "react";
import { 
  HomeIcon, 
  User, 
  FolderGit2, 
  LightbulbIcon, 
  Mail,
  Volume2,
  VolumeX,
  Download,
  Menu,
  X,
  ChevronRight,
  Terminal,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/animation/DockAnimation';
import { useTheme } from "@/components/ThemeProvider";
import { audioHaptics } from "@/lib/audioHaptics";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#hero", id: "hero", icon: HomeIcon, desc: "Intro & Overview" },
  { name: "About", href: "#about", id: "about", icon: User, desc: "Background & Bio" },
  { name: "Projects", href: "#projects", id: "projects", icon: FolderGit2, desc: "Featured Work & Demos" },
  { name: "Skills", href: "#skills", id: "skills", icon: LightbulbIcon, desc: "Tech Stack & Proficiencies" },
  { name: "Contact", href: "#contact", id: "contact", icon: Mail, desc: "Direct Messaging & Links" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsMuted(audioHaptics.getMuted());
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    timeout = setTimeout(() => {
      setIsVisible(false);
    }, 1200);

    const handleMouseMove = (e: MouseEvent) => {
      const inBottom = window.innerHeight - e.clientY < 160;
      
      if (inBottom) {
        setIsVisible(true);
        clearTimeout(timeout);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  const handleNavClick = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(targetId);
      setIsMobileMenuOpen(false);
      audioHaptics.playClick(500, 0.04, "sine");
    }
  };

  const handleToggleMute = () => {
    const muted = audioHaptics.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      setTimeout(() => audioHaptics.playClick(600, 0.1, "sine"), 50);
    }
  };

  const accentColor = "rgb(196, 86, 58)";

  return (
    <>
      <div className={cn(
        "hidden sm:block fixed bottom-6 right-0 left-0 px-5 m-auto w-fit bg-transparent z-[99] transition-transform duration-300 ease-in-out",
        !isVisible && "translate-y-[200%]"
      )}>
        <Dock className="items-end pb-3">
          {navLinks.map((item) => (
            <a
              href={item.href}
              key={item.name}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              <DockItem
                className={cn(
                  "aspect-square rounded-full bg-main/50 hover:bg-main/80 border border-card/60 backdrop-blur-md transition-all shadow-sm",
                  activeSection === item.id && "bg-card/75 border-accent/60 shadow-inner"
                )}
              >
                <DockLabel>{item.name}</DockLabel>
                <DockIcon className={cn(
                  "text-secondary transition-colors", 
                  activeSection === item.id && "text-primary"
                )}>
                  <item.icon className="w-5 h-5" style={activeSection === item.id ? { color: accentColor } : {}} />
                </DockIcon>
              </DockItem>
            </a>
          ))}
          
          <div className="w-[1px] h-8 bg-card/60 mx-1.5 hidden sm:block" />

          <DockItem onClick={handleToggleMute} className="aspect-square rounded-full bg-main/50 hover:bg-main/80 border border-card/60 backdrop-blur-md">
            <DockLabel>{isMuted ? "Unmute" : "Mute"}</DockLabel>
            <DockIcon className="text-secondary">
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </DockIcon>
          </DockItem>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <DockItem className="aspect-square rounded-full bg-main/50 hover:bg-main/80 border border-card/60 backdrop-blur-md">
              <DockLabel>Download CV</DockLabel>
              <DockIcon className="text-secondary">
                <Download className="w-5 h-5" />
              </DockIcon>
            </DockItem>
          </a>
        </Dock>
      </div>

      <div className="block sm:hidden fixed bottom-4 inset-x-3 z-[99] max-w-md mx-auto pointer-events-auto">
        <div className="flex items-center justify-between p-1.5 rounded-2xl bg-card/85 border border-card/90 backdrop-blur-2xl shadow-2xl shadow-black/20">
          <button
            type="button"
            onClick={() => handleNavClick("#hero")}
            className={cn(
              "flex items-center justify-center p-2.5 rounded-xl transition-all cursor-pointer",
              activeSection === "hero" ? "bg-main/90 text-accent border border-card" : "text-secondary hover:text-primary"
            )}
            aria-label="Navigate Home"
          >
            <HomeIcon className="w-5 h-5" style={activeSection === "hero" ? { color: accentColor } : {}} />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("#projects")}
            className={cn(
              "flex items-center justify-center p-2.5 rounded-xl transition-all cursor-pointer",
              activeSection === "projects" ? "bg-main/90 text-accent border border-card" : "text-secondary hover:text-primary"
            )}
            aria-label="Navigate Projects"
          >
            <FolderGit2 className="w-5 h-5" style={activeSection === "projects" ? { color: accentColor } : {}} />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("#contact")}
            className={cn(
              "flex items-center justify-center p-2.5 rounded-xl transition-all cursor-pointer",
              activeSection === "contact" ? "bg-main/90 text-accent border border-card" : "text-secondary hover:text-primary"
            )}
            aria-label="Navigate Contact"
          >
            <Mail className="w-5 h-5" style={activeSection === "contact" ? { color: accentColor } : {}} />
          </button>

          <button
            type="button"
            onClick={handleToggleMute}
            className="flex items-center justify-center p-2.5 rounded-xl text-secondary hover:text-primary transition-all cursor-pointer"
            aria-label="Toggle Mute"
          >
            {isMuted ? <VolumeX className="w-5 h-5 text-rose-500" /> : <Volume2 className="w-5 h-5 text-emerald-600" />}
          </button>

          <button
            type="button"
            onClick={() => {
              setIsMobileMenuOpen((prev) => !prev);
              audioHaptics.playClick(700, 0.05, "triangle");
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-mono text-xs font-bold text-white bg-gradient-to-r from-accent to-accent/90 shadow-md shadow-accent/20 active:scale-95 transition-all cursor-pointer"
            style={{ backgroundColor: accentColor }}
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            <span>MENU</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm sm:hidden"
            />

            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed bottom-0 inset-x-0 z-[101] max-h-[88vh] overflow-y-auto rounded-t-3xl bg-card/95 border-t border-card backdrop-blur-2xl p-5 pb-8 shadow-2xl shadow-black sm:hidden"
            >
              <div className="w-12 h-1.5 bg-secondary/30 rounded-full mx-auto mb-4" />

              <div className="flex items-center justify-between mb-5 pb-3 border-b border-card">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" style={{ color: accentColor }} />
                  <span className="font-mono text-xs font-bold tracking-wider uppercase text-primary">
                    Navigation & Controls
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg bg-main/60 border border-card text-secondary hover:text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2.5 mb-5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  const Icon = link.icon;

                  return (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => handleNavClick(link.href)}
                      className={cn(
                        "flex flex-col items-start p-3.5 rounded-2xl border text-left transition-all cursor-pointer active:scale-98",
                        isActive
                          ? "bg-main/90 border-accent/60 shadow-md"
                          : "bg-main/40 border-card hover:bg-main/70 hover:border-card/80"
                      )}
                    >
                      <div className="flex items-center justify-between w-full mb-2">
                        <div
                          className={cn(
                            "p-2 rounded-xl border",
                            isActive ? "bg-accent/15 border-accent/40" : "bg-card/60 border-card"
                          )}
                        >
                          <Icon className="w-4 h-4" style={isActive ? { color: accentColor } : {}} />
                        </div>
                        {isActive && (
                          <span
                            className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-md uppercase"
                            style={{ backgroundColor: "rgba(196, 86, 58, 0.12)", color: accentColor }}
                          >
                            Active
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-bold text-primary font-mono">{link.name}</span>
                      <span className="text-[10px] text-secondary truncate w-full mt-0.5">{link.desc}</span>
                    </button>
                  );
                })}
              </div>

              <div className="space-y-2 pt-2 border-t border-card">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleToggleMute}
                    className="flex items-center justify-between p-3 rounded-xl bg-main/40 border border-card text-xs font-mono font-semibold text-secondary hover:text-primary transition-all"
                  >
                    <span className="flex items-center gap-2">
                      {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                      <span>{isMuted ? "Sound: Off" : "Sound: On"}</span>
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.dispatchEvent(new CustomEvent('toggle-command-palette'));
                    }}
                    className="flex items-center justify-between p-3 rounded-xl bg-main/40 border border-card text-xs font-mono font-semibold text-secondary hover:text-primary transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <Terminal className="w-4 h-4" style={{ color: accentColor }} />
                      <span>Terminal</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-secondary/60" />
                  </button>
                </div>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-mono text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-98 transition-all shadow-md shadow-blue-600/30"
                >
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD CURRICULUM VITAE</span>
                </a>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
