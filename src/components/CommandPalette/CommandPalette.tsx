"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { 
  Terminal, 
  X, 
  ChevronRight, 
  Cpu, 
  HomeIcon, 
  User, 
  Briefcase, 
  FolderGit2, 
  LightbulbIcon, 
  Mail, 
  Volume2, 
  VolumeX, 
  Download, 
  Code2, 
  Layers, 
  Phone, 
  Sparkles, 
  Globe, 
  Share2
} from "lucide-react";

import { audioHaptics } from "@/lib/audioHaptics";
import { useTheme } from "@/components/ThemeProvider";

export interface PaletteCommand {
  id: string;
  name: string;
  description: string;
  keywords: string[];
  icon: any;
  action: () => void;
  badge?: string;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const accentColor = "rgb(196, 86, 58)";

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMuted(audioHaptics.getMuted());
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey && e.key === "k") || (e.ctrlKey && (e.key === "k" || e.key === "`"))) {
        e.preventDefault();
        setIsOpen((prev) => {
          const next = !prev;
          audioHaptics.playPop(next);
          return next;
        });
      }
      
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        audioHaptics.playPop(false);
      }
    };

    const handleCustomToggle = () => {
      setIsOpen(true);
      audioHaptics.playPop(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("toggle-command-palette", handleCustomToggle);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("toggle-command-palette", handleCustomToggle);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 80);
      setSelectedIndex(0);
    } else {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const openUrl = (url: string) => {
    setIsOpen(false);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const toggleSound = () => {
    const muted = audioHaptics.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      audioHaptics.playClick(500, 0.05);
    }
  };

  const allCommands: PaletteCommand[] = useMemo(() => [
    {
      id: "nav-home",
      name: "Navigate to Home",
      description: "Return to top hero overview & introduction",
      keywords: ["home", "hero", "start", "top", "intro", "welcome", "main"],
      icon: HomeIcon,
      action: () => scrollToSection("hero"),
    },
    {
      id: "nav-about",
      name: "Navigate to About Me",
      description: "Read bio, engineering philosophy, and background",
      keywords: ["about", "bio", "profile", "background", "whoami", "me", "story", "education"],
      icon: User,
      action: () => scrollToSection("about"),
    },
    {
      id: "nav-projects",
      name: "Navigate to Projects",
      description: "Explore deployed apps, SaaS products, and AI solutions",
      keywords: ["projects", "work", "portfolio", "apps", "showcase", "builds", "software"],
      icon: FolderGit2,
      action: () => scrollToSection("projects"),
    },
    {
      id: "nav-skills",
      name: "Navigate to Technical Skills",
      description: "Fullstack capabilities, architecture, and languages",
      keywords: ["skills", "tech", "stack", "languages", "toolkit", "expertise", "frameworks", "tools"],
      icon: LightbulbIcon,
      action: () => scrollToSection("skills"),
    },
    {
      id: "nav-contact",
      name: "Navigate to Contact",
      description: "Send direct message, reach out, or schedule a chat",
      keywords: ["contact", "email", "message", "hire", "touch", "reach", "inquiry", "collaborate"],
      icon: Mail,
      action: () => scrollToSection("contact"),
    },
    {
      id: "proj-heybuddy",
      name: "Project: heyBuddy (AI EdTech)",
      description: "AI Multilingual Video & Voice Learning Platform",
      keywords: ["heybuddy", "ai", "video", "edtech", "multilingual", "tts", "canvas", "learning"],
      icon: Sparkles,
      badge: "Active",
      action: () => scrollToSection("projects"),
    },
    {
      id: "proj-procurehub",
      name: "Project: ProcureHub (Enterprise SaaS)",
      description: "B2B IT Procurement & Sealed Bid Verification",
      keywords: ["procurehub", "saas", "b2b", "procurement", "crypto", "bidding", "contracts"],
      icon: Layers,
      badge: "Enterprise",
      action: () => scrollToSection("projects"),
    },
    {
      id: "proj-smartagri",
      name: "Project: Smart Agri (Precision Agritech)",
      description: "PWA Crop Weather Intelligence & Mandi Analytics",
      keywords: ["smart agri", "agritech", "farming", "pwa", "weather", "iit finalist", "offline"],
      icon: Globe,
      badge: "IIT Finalist",
      action: () => scrollToSection("projects"),
    },
    {
      id: "proj-mcaet",
      name: "Project: MCAET College AI Chatbot",
      description: "RAG Generative Knowledge Index for University Admissions",
      keywords: ["mcaet", "college", "chatbot", "rag", "vector", "admissions", "campus"],
      icon: Code2,
      badge: "Live",
      action: () => scrollToSection("projects"),
    },
    {
      id: "skill-react",
      name: "Skill: React & Next.js Architecture",
      description: "React 19, Server Actions, App Router, Performance Tuning",
      keywords: ["react", "nextjs", "next.js", "frontend", "hooks", "turbopack", "ssr", "components"],
      icon: Code2,
      action: () => scrollToSection("skills"),
    },
    {
      id: "skill-typescript",
      name: "Skill: TypeScript & Tooling",
      description: "Strict Typing, Generics, Zod Validation, Tailwind v4",
      keywords: ["typescript", "ts", "types", "zod", "strict", "tailwind", "tooling"],
      icon: Code2,
      action: () => scrollToSection("skills"),
    },
    {
      id: "skill-cpp",
      name: "Skill: C++ & Core Algorithms",
      description: "Data Structures, STL, Dynamic Programming, Problem Solving",
      keywords: ["cpp", "c++", "dsa", "algorithms", "data structures", "stl", "leetcode", "pointers"],
      icon: Cpu,
      action: () => scrollToSection("skills"),
    },
    {
      id: "skill-node",
      name: "Skill: Node.js & API Design",
      description: "Express, REST APIs, Microservices, Edge Functions",
      keywords: ["node", "nodejs", "backend", "api", "express", "rest", "server", "databases"],
      icon: Layers,
      action: () => scrollToSection("skills"),
    },
    {
      id: "link-resume",
      name: "Download Resume / Curriculum Vitae",
      description: "Open and download official PDF resume",
      keywords: ["resume", "cv", "curriculum vitae", "pdf", "download resume", "bio pdf"],
      icon: Download,
      badge: "PDF",
      action: () => openUrl("/resume.pdf"),
    },
    {
      id: "link-github",
      name: "GitHub Profile (@atulllmishra)",
      description: "Explore open-source repositories and code contributions",
      keywords: ["github", "git", "repos", "repositories", "code", "open source", "commits"],
      icon: Code2,
      action: () => openUrl("https://github.com/atulllmishra/"),
    },
    {
      id: "link-linkedin",
      name: "LinkedIn Profile",
      description: "Connect on LinkedIn for professional networking",
      keywords: ["linkedin", "network", "connect", "jobs", "career", "professional"],
      icon: Briefcase,
      action: () => openUrl("https://www.linkedin.com/in/atul-kumar-mishra-3b3939363"),
    },
    {
      id: "link-instagram",
      name: "Instagram Profile (@atulllmishra)",
      description: "Follow on Instagram for creative updates",
      keywords: ["instagram", "insta", "social", "photos", "follow"],
      icon: Share2,
      action: () => openUrl("https://www.instagram.com/atulllmishra/"),
    },
    {
      id: "link-email",
      name: "Send Direct Email (atulllmishra1@gmail.com)",
      description: "Open mail client to send an email inquiry",
      keywords: ["email", "mail", "gmail", "send email", "inbox", "write"],
      icon: Mail,
      action: () => openUrl("mailto:atulllmishra1@gmail.com"),
    },
    {
      id: "link-phone",
      name: "Phone / WhatsApp (+91 74588 44711)",
      description: "Initiate direct phone call or message",
      keywords: ["phone", "whatsapp", "call", "mobile", "number", "tel"],
      icon: Phone,
      action: () => openUrl("tel:+917458844711"),
    },
    {
      id: "pref-theme",
      name: "Portfolio Theme: Academic Peach",
      description: "Handcrafted terracotta, cream canvas, & deep espresso typography",
      keywords: ["theme", "light", "peach", "academic", "color", "style", "mode", "appearance"],
      icon: Sparkles,
      badge: "Active",
      action: () => {
        audioHaptics.playClick(600, 0.05);
      },
    },
    {
      id: "pref-gravity",
      name: "Zero-G Physics Mode",
      description: "Interactive zero-gravity floating animation",
      keywords: ["gravity", "zero-g", "physics", "fun", "easter egg"],
      icon: Cpu,
      badge: "Interactive",
      action: () => {
        window.dispatchEvent(new CustomEvent("toggle-zero-g"));
        setIsOpen(false);
      },
    },
  ], []);

  const defaultEarlierCommands = useMemo<PaletteCommand[]>(() => [
    allCommands[0], 
    allCommands[2], 
    allCommands[3], 
    allCommands[14], 
    allCommands[allCommands.length - 2], 
    allCommands[allCommands.length - 1], 
  ], [allCommands]);

  const filteredCommands = useMemo(() => {
    if (!query.trim()) {
      return defaultEarlierCommands;
    }
    const cleanQuery = query.toLowerCase().trim();

    return allCommands.filter((cmd) => {
      const nameMatch = cmd.name.toLowerCase().includes(cleanQuery);
      const descMatch = cmd.description.toLowerCase().includes(cleanQuery);
      const keywordMatch = cmd.keywords.some((k) => k.toLowerCase().includes(cleanQuery));

      return nameMatch || descMatch || keywordMatch;
    });
  }, [allCommands, defaultEarlierCommands, query]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
      audioHaptics.playKey();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length));
      audioHaptics.playKey();
    } else if (e.key === "Enter" && filteredCommands.length > 0) {
      e.preventDefault();
      const target = filteredCommands[selectedIndex] || filteredCommands[0];
      if (target) {
        audioHaptics.playClick(800, 0.05, "square");
        target.action();
      }
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSelectedIndex(0);
    if (e.target.value.length > query.length) {
      audioHaptics.playKey();
    }
  };

  useEffect(() => {
    if (resultsContainerRef.current) {
      const activeEl = resultsContainerRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-10 sm:pt-20 px-3 sm:px-6">
      
      {/* Dimmed Clean Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={() => {
          setIsOpen(false);
          audioHaptics.playPop(false);
        }}
      />
      
      {/* Terminal Palette Body */}
      <div 
        className="relative w-full max-w-2xl bg-white border border-[#f3e2d5] rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 z-10 terminal-palette-card"
        style={{
          backgroundColor: '#ffffff',
          borderColor: 'rgb(243, 226, 213)',
          boxShadow: '0 25px 60px -15px rgba(46, 34, 29, 0.22), 0 0 0 1px rgba(243, 226, 213, 0.8)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Terminal Titlebar */}
        <div 
          className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-[#f3e2d5] bg-[#fff9f5]"
          style={{ backgroundColor: 'rgb(255, 249, 245)', borderColor: 'rgb(243, 226, 213)' }}
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => { setIsOpen(false); audioHaptics.playPop(false); }}
                title="Close (Esc)"
                className="w-3 h-3 rounded-full bg-rose-500 hover:brightness-90 transition-all cursor-pointer shadow-xs"
              />
              <span className="w-3 h-3 rounded-full bg-amber-400 shadow-xs" />
              <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-xs" />
            </div>

            <div className="ml-2 flex items-center gap-1.5 text-[11px] font-mono text-[#705b50]">
              <Terminal className="w-3.5 h-3.5" style={{ color: accentColor }} />
              <span className="font-bold text-[#2e221d] tracking-wide">Terminal Command Palette</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleSound}
              title={isMuted ? "Unmute Audio Feedback" : "Mute Audio Feedback"}
              className="p-1 rounded-md text-[#705b50] hover:text-[#2e221d] hover:bg-[#fdeee6] transition-colors cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-500" /> : <Volume2 className="w-3.5 h-3.5" style={{ color: accentColor }} />}
            </button>
          </div>
        </div>

        {/* Input Bar */}
        <div 
          className="flex items-center gap-3 px-4 sm:px-5 py-3.5 border-b border-[#f3e2d5] bg-white"
          style={{ backgroundColor: '#ffffff', borderColor: 'rgb(243, 226, 213)' }}
        >
          <span className="text-sm font-bold font-mono select-none" style={{ color: accentColor }}>❯</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder="Search projects, skills, commands, resume ...."
            className="palette-input flex-1 bg-transparent p-0 border-none outline-none text-[#2e221d] font-mono text-xs sm:text-sm placeholder:text-[#a28c83] min-w-0"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
              color: 'rgb(46, 34, 29)'
            }}
            spellCheck={false}
          />
          {query ? (
            <button
              type="button"
              onClick={() => { setQuery(""); inputRef.current?.focus(); }}
              className="p-1 rounded-md text-[#705b50] hover:text-[#2e221d] hover:bg-[#fff9f5] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-[#705b50] bg-[#fff9f5] px-2 py-0.5 rounded border border-[#f3e2d5]">
              <span>ESC</span>
            </div>
          )}
        </div>
        {/* Results List */}
        <div ref={resultsContainerRef} className="p-2 sm:p-3 max-h-[60vh] sm:max-h-96 overflow-y-auto space-y-1 bg-white">
          {filteredCommands.length === 0 ? (
            <div className="px-4 py-12 text-center space-y-2">
              <p className="text-sm font-mono text-[#705b50]">
                No commands matching &quot;<span className="text-[#2e221d] font-bold">{query}</span>&quot;
              </p>
              <p className="text-xs text-[#a28c83]">
                Try searching for <span className="underline cursor-pointer" style={{ color: accentColor }} onClick={() => setQuery("projects")}>projects</span>, <span className="underline cursor-pointer" style={{ color: accentColor }} onClick={() => setQuery("skills")}>skills</span>, or <span className="underline cursor-pointer" style={{ color: accentColor }} onClick={() => setQuery("contact")}>contact</span>.
              </p>
            </div>
          ) : (
            filteredCommands.map((cmd, i) => {
              const isSelected = i === selectedIndex;
              const Icon = cmd.icon;

              return (
                <button
                  key={cmd.id}
                  data-index={i}
                  onClick={() => {
                    audioHaptics.playClick(800, 0.05, "square");
                    cmd.action();
                  }}
                  onMouseEnter={() => setSelectedIndex(i)}
                  className={`w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl sm:rounded-2xl transition-all duration-150 cursor-pointer text-left group ${
                    isSelected
                      ? "bg-[#fff9f5] border border-[#f3e2d5] shadow-xs"
                      : "hover:bg-[#fff9f5]/60 border border-transparent"
                  }`}
                  style={isSelected ? { backgroundColor: 'rgb(255, 249, 245)', borderColor: 'rgb(243, 226, 213)' } : {}}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div
                      className={`p-2 rounded-xl border shrink-0 transition-colors ${
                        isSelected
                          ? "bg-[#fdeee6] border-[#f7d5c5]"
                          : "bg-[#fff9f5] border-[#f3e2d5] text-[#705b50] group-hover:text-[#2e221d]"
                      }`}
                      style={isSelected ? { backgroundColor: '#fdeee6', borderColor: '#f7d5c5', color: accentColor } : { color: '#705b50' }}
                    >
                      <Icon className="w-4 h-4" style={{ color: isSelected ? accentColor : '#705b50' }} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs sm:text-sm font-semibold font-mono truncate text-[#2e221d]">
                          {cmd.name}
                        </span>
                        {cmd.badge && (
                          <span
                            className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-md uppercase shrink-0"
                            style={{ 
                              backgroundColor: "rgba(196, 86, 58, 0.1)", 
                              color: accentColor,
                              border: "1px solid rgba(196, 86, 58, 0.25)"
                            }}
                          >
                            {cmd.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] sm:text-xs text-[#705b50] truncate mt-0.5">
                        {cmd.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <div className={`p-1 rounded-lg transition-transform ${
                      isSelected ? "translate-x-0.5 opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}>
                      <ChevronRight className="w-4 h-4" style={{ color: accentColor }} />
                    </div>
                  </div>
                </button>
              );
            })
          )}
        </div>
         
        {/* Terminal Footer Info */}
        <div 
          className="px-4 py-2.5 border-t border-[#f3e2d5] bg-[#fff9f5] flex items-center justify-between text-[11px] font-mono text-[#705b50]"
          style={{ backgroundColor: 'rgb(255, 249, 245)', borderColor: 'rgb(243, 226, 213)' }}
        >
          <div>
            {filteredCommands.length} {filteredCommands.length === 1 ? "command" : "commands"}
          </div>
        </div>

      </div>
    </div>
  );
}
