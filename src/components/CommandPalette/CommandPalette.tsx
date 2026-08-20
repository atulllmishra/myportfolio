"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { 
  Terminal, 
  X, 
  ChevronRight, 
  Hash, 
  Command as CmdIcon, 
  Cpu, 
  HomeIcon, 
  User, 
  Briefcase, 
  FolderGit2, 
  LightbulbIcon, 
  Trophy, 
  Mail, 
  Sun, 
  Moon, 
  Volume2, 
  VolumeX, 
  Download, 
  ExternalLink, 
  Code2, 
  Layers, 
  FileText, 
  Phone, 
  Sparkles, 
  Globe, 
  ArrowRight,
  Share2
} from "lucide-react";

import { audioHaptics } from "@/lib/audioHaptics";
import { useTheme } from "@/components/ThemeProvider";

export interface PaletteCommand {
  id: string;
  name: string;
  category: "Navigation" | "Projects" | "Skills" | "Links & Social" | "Preferences";
  description: string;
  keywords: string[];
  icon: any;
  action: () => void;
  badge?: string;
  shortcut?: string;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  // Keyboard shortcut listener for Cmd+K / Ctrl+K and custom events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle palette on Cmd+K or Ctrl+K or Ctrl+`
      if ((e.metaKey && e.key === "k") || (e.ctrlKey && (e.key === "k" || e.key === "`"))) {
        e.preventDefault();
        setIsOpen((prev) => {
          const next = !prev;
          audioHaptics.playPop(next);
          return next;
        });
      }
      
      // Close on Escape
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

  const isLight = theme === "light";
  const accentColor = isLight ? "#C4563A" : "#E07A5F";

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

  // Comprehensive command navigation library
  const allCommands: PaletteCommand[] = useMemo(() => [
    // -------------------------------------------------------------
    // SECTIONS & PAGES NAVIGATION
    // -------------------------------------------------------------
    {
      id: "nav-home",
      name: "Navigate to Home",
      category: "Navigation",
      description: "Return to the top hero section & overview",
      keywords: ["home", "hero", "start", "top", "intro", "welcome", "main"],
      icon: HomeIcon,
      action: () => scrollToSection("hero"),
      shortcut: "G H",
    },
    {
      id: "nav-about",
      name: "Navigate to About Me",
      category: "Navigation",
      description: "Read bio, engineering philosophy, and background",
      keywords: ["about", "bio", "profile", "background", "whoami", "me", "story", "education"],
      icon: User,
      action: () => scrollToSection("about"),
      shortcut: "G A",
    },
    {
      id: "nav-timeline",
      name: "Navigate to Journey & Timeline",
      category: "Navigation",
      description: "Career milestones, education, and technical experience",
      keywords: ["journey", "timeline", "experience", "education", "history", "career", "milestones"],
      icon: Briefcase,
      action: () => scrollToSection("timeline"),
      shortcut: "G J",
    },
    {
      id: "nav-projects",
      name: "Navigate to Projects",
      category: "Navigation",
      description: "Explore deployed apps, SaaS products, and AI solutions",
      keywords: ["projects", "work", "portfolio", "apps", "showcase", "builds", "software"],
      icon: FolderGit2,
      action: () => scrollToSection("projects"),
      shortcut: "G P",
    },
    {
      id: "nav-skills",
      name: "Navigate to Technical Skills",
      category: "Navigation",
      description: "Fullstack capabilities, architecture, and languages",
      keywords: ["skills", "tech", "stack", "languages", "toolkit", "expertise", "frameworks", "tools"],
      icon: LightbulbIcon,
      action: () => scrollToSection("skills"),
      shortcut: "G S",
    },
    {
      id: "nav-certifications",
      name: "Navigate to Certifications & Awards",
      category: "Navigation",
      description: "Hackathon wins, badges, and academic credentials",
      keywords: ["certifications", "certs", "achievements", "awards", "credentials", "badges", "honors"],
      icon: Trophy,
      action: () => scrollToSection("certifications"),
      shortcut: "G C",
    },
    {
      id: "nav-contact",
      name: "Navigate to Contact",
      category: "Navigation",
      description: "Send direct message, reach out, or schedule a chat",
      keywords: ["contact", "email", "message", "hire", "touch", "reach", "inquiry", "collaborate"],
      icon: Mail,
      action: () => scrollToSection("contact"),
      shortcut: "G M",
    },

    // -------------------------------------------------------------
    // FEATURED PROJECTS DEEP-LINKS
    // -------------------------------------------------------------
    {
      id: "proj-heybuddy",
      name: "Project: heyBuddy (AI EdTech)",
      category: "Projects",
      description: "AI Multilingual Video & Voice Learning Platform",
      keywords: ["heybuddy", "ai", "video", "edtech", "multilingual", "tts", "canvas", "learning"],
      icon: Sparkles,
      badge: "Active",
      action: () => {
        scrollToSection("projects");
      },
    },
    {
      id: "proj-procurehub",
      name: "Project: ProcureHub (Enterprise SaaS)",
      category: "Projects",
      description: "B2B IT Procurement & Sealed Bid Verification",
      keywords: ["procurehub", "saas", "b2b", "procurement", "crypto", "bidding", "contracts"],
      icon: Layers,
      badge: "Production",
      action: () => {
        scrollToSection("projects");
      },
    },
    {
      id: "proj-smartagri",
      name: "Project: Smart Agri (Precision Agritech)",
      category: "Projects",
      description: "PWA Crop Weather Intelligence & Mandi Analytics",
      keywords: ["smart agri", "agritech", "farming", "pwa", "weather", "iit finalist", "offline"],
      icon: Globe,
      badge: "IIT Finalist",
      action: () => {
        scrollToSection("projects");
      },
    },
    {
      id: "proj-mcaet",
      name: "Project: MCAET College AI Chatbot",
      category: "Projects",
      description: "RAG Generative Knowledge Index for University Admissions",
      keywords: ["mcaet", "college", "chatbot", "rag", "vector", "admissions", "campus"],
      icon: Code2,
      badge: "Live",
      action: () => {
        scrollToSection("projects");
      },
    },

    // -------------------------------------------------------------
    // SKILLS & CAPABILITIES SEARCH
    // -------------------------------------------------------------
    {
      id: "skill-react",
      name: "Skill: React & Next.js Architecture",
      category: "Skills",
      description: "React 19, Server Actions, App Router, Performance Tuning",
      keywords: ["react", "nextjs", "next.js", "frontend", "hooks", "turbopack", "ssr", "components"],
      icon: Code2,
      action: () => scrollToSection("skills"),
    },
    {
      id: "skill-typescript",
      name: "Skill: TypeScript & Tooling",
      category: "Skills",
      description: "Strict Typing, Generics, Zod Validation, Tailwind v4",
      keywords: ["typescript", "ts", "types", "zod", "strict", "tailwind", "tooling"],
      icon: Code2,
      action: () => scrollToSection("skills"),
    },
    {
      id: "skill-cpp",
      name: "Skill: C++ & Core Algorithms",
      category: "Skills",
      description: "Data Structures, STL, Dynamic Programming, Problem Solving",
      keywords: ["cpp", "c++", "dsa", "algorithms", "data structures", "stl", "leetcode", "pointers"],
      icon: Cpu,
      action: () => scrollToSection("skills"),
    },
    {
      id: "skill-node",
      name: "Skill: Node.js & API Design",
      category: "Skills",
      description: "Express, REST APIs, Microservices, Edge Functions",
      keywords: ["node", "nodejs", "backend", "api", "express", "rest", "server", "databases"],
      icon: Layers,
      action: () => scrollToSection("skills"),
    },

    // -------------------------------------------------------------
    // LINKS, SOCIAL & DIRECT RESUME
    // -------------------------------------------------------------
    {
      id: "link-resume",
      name: "Download Resume / Curriculum Vitae",
      category: "Links & Social",
      description: "Open and download official PDF resume",
      keywords: ["resume", "cv", "curriculum vitae", "pdf", "download resume", "bio pdf"],
      icon: Download,
      badge: "PDF",
      action: () => openUrl("/resume.pdf"),
    },
    {
      id: "link-github",
      name: "GitHub Profile (@atulllmishra)",
      category: "Links & Social",
      description: "Explore open-source repositories and code contributions",
      keywords: ["github", "git", "repos", "repositories", "code", "open source", "commits"],
      icon: Code2,
      action: () => openUrl("https://github.com/atulllmishra/"),
    },
    {
      id: "link-linkedin",
      name: "LinkedIn Profile",
      category: "Links & Social",
      description: "Connect on LinkedIn for professional networking",
      keywords: ["linkedin", "network", "connect", "jobs", "career", "professional"],
      icon: Briefcase,
      action: () => openUrl("https://www.linkedin.com/in/atul-kumar-mishra-3b3939363"),
    },
    {
      id: "link-instagram",
      name: "Instagram Profile",
      category: "Links & Social",
      description: "Follow on Instagram (@atulllmishra)",
      keywords: ["instagram", "insta", "social", "photos", "follow"],
      icon: Share2,
      action: () => openUrl("https://www.instagram.com/atulllmishra/"),
    },

    {
      id: "link-email",
      name: "Send Direct Email (atulllmishra1@gmail.com)",
      category: "Links & Social",
      description: "Open mail client to send an email inquiry",
      keywords: ["email", "mail", "gmail", "send email", "inbox", "write"],
      icon: Mail,
      action: () => openUrl("mailto:atulllmishra1@gmail.com"),
    },
    {
      id: "link-phone",
      name: "Phone / WhatsApp (+91 74588 44711)",
      category: "Links & Social",
      description: "Initiate direct phone call or message",
      keywords: ["phone", "whatsapp", "call", "mobile", "number", "tel"],
      icon: Phone,
      action: () => openUrl("tel:+917458844711"),
    },
  ], [isLight, toggleTheme]);

  // Default earlier commands shown initially before searching
  const defaultEarlierCommands = useMemo<PaletteCommand[]>(() => [

    {
      id: "pref-theme",
      name: "Toggle Theme",
      category: "Preferences",
      description: `Switch to ${isLight ? "Dark Theme" : "Light Peach Theme"}`,
      keywords: ["theme", "dark", "light", "mode", "toggle theme"],
      icon: isLight ? Moon : Sun,
      action: () => {
        toggleTheme();
        audioHaptics.playSwitch();
        setIsOpen(false);
      },
    },
    {
      id: "pref-gravity",
      name: "Zero-G Physics Mode",
      category: "Preferences",
      description: "Interactive zero-gravity floating animation",
      keywords: ["gravity", "zero-g", "physics"],
      icon: Cpu,
      action: () => {
        window.dispatchEvent(new CustomEvent("toggle-zero-g"));
        setIsOpen(false);
      },
    },
    {
      id: "nav-projects-default",
      name: "Go to Projects",
      category: "Navigation",
      description: "Jump to featured projects and live demos",
      keywords: ["projects", "work", "portfolio"],
      icon: Hash,
      action: () => scrollToSection("projects"),
      shortcut: "G P",
    },
  ], [isLight, toggleTheme]);

  // Fuzzy filter commands: Show default earlier items when query is empty, or search all sections/projects/skills
  const filteredCommands = useMemo(() => {
    if (!query.trim()) {
      return defaultEarlierCommands;
    }
    const cleanQuery = query.toLowerCase().trim();

    return allCommands.filter((cmd) => {
      const nameMatch = cmd.name.toLowerCase().includes(cleanQuery);
      const descMatch = cmd.description.toLowerCase().includes(cleanQuery);
      const categoryMatch = cmd.category.toLowerCase().includes(cleanQuery);
      const keywordMatch = cmd.keywords.some((k) => k.toLowerCase().includes(cleanQuery));

      return nameMatch || descMatch || categoryMatch || keywordMatch;
    });
  }, [allCommands, defaultEarlierCommands, query]);


  // Handle arrow key navigation & Enter trigger
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

  // Scroll active item into view
  useEffect(() => {
    if (resultsContainerRef.current) {
      const activeEl = resultsContainerRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-3 sm:px-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={() => { setIsOpen(false); audioHaptics.playPop(false); }}
      />
      
      {/* Terminal Palette Body */}
      <div className="relative w-full max-w-2xl bg-card/95 border border-card/80 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Input Header */}
        <div className="flex items-center gap-3 px-4 sm:px-5 py-4 border-b border-card bg-main/60">
          <Terminal className="w-5 h-5 shrink-0" style={{ color: accentColor }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder="Type a section, project, skill, or command (e.g. 'projects', 'heybuddy', 'react', 'github', 'cv')..."
            className="flex-1 bg-transparent border-none outline-none text-primary font-mono text-xs sm:text-sm placeholder:text-secondary/50 min-w-0"
            spellCheck={false}
          />
          {query ? (
            <button
              type="button"
              onClick={() => { setQuery(""); inputRef.current?.focus(); }}
              className="p-1 rounded text-secondary hover:text-primary transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-secondary bg-card/80 px-2 py-1 rounded border border-card">
              <CmdIcon className="w-3 h-3" />
              <span>K</span>
            </div>
          )}
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-4 py-2 border-b border-card/50 bg-main/30 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono text-secondary scrollbar-none">
          <span className="text-[10px] uppercase font-bold text-secondary/70 shrink-0 mr-1">Quick:</span>
          {["Projects", "Skills", "heyBuddy", "About", "Contact", "Resume", "Theme"].map((pill) => (
            <button
              key={pill}
              type="button"
              onClick={() => { setQuery(pill); inputRef.current?.focus(); }}
              className="px-2.5 py-0.5 rounded-full bg-card/70 hover:bg-card border border-card/60 hover:border-accent/40 text-secondary hover:text-primary whitespace-nowrap transition-all cursor-pointer"
            >
              {pill}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div ref={resultsContainerRef} className="p-2 sm:p-3 max-h-96 overflow-y-auto space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="px-4 py-12 text-center space-y-2">
              <p className="text-sm font-mono text-secondary">
                No commands matching "<span className="text-primary font-bold">{query}</span>"
              </p>
              <p className="text-xs text-secondary/70">
                Try searching for <span className="underline cursor-pointer" onClick={() => setQuery("projects")}>projects</span>, <span className="underline cursor-pointer" onClick={() => setQuery("skills")}>skills</span>, or <span className="underline cursor-pointer" onClick={() => setQuery("contact")}>contact</span>.
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
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer text-left group ${
                    isSelected
                      ? "bg-main/90 border border-card shadow-sm"
                      : "hover:bg-main/50 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0 pr-2">
                    <div
                      className={`p-2 rounded-xl border shrink-0 transition-colors ${
                        isSelected
                          ? "bg-accent/15 border-accent/40 text-accent"
                          : "bg-card/70 border-card text-secondary group-hover:text-primary"
                      }`}
                    >
                      <Icon className="w-4 h-4" style={isSelected ? { color: accentColor } : {}} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-xs sm:text-sm font-bold font-mono truncate ${
                          isSelected ? "text-primary" : "text-primary/90"
                        }`}>
                          {cmd.name}
                        </span>
                        {cmd.badge && (
                          <span
                            className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded uppercase shrink-0"
                            style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
                          >
                            {cmd.badge}
                          </span>
                        )}
                        <span className="text-[10px] font-mono text-secondary/60 uppercase hidden md:inline-block">
                          [{cmd.category}]
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-secondary truncate mt-0.5">
                        {cmd.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {cmd.shortcut && (
                      <span className="text-[10px] font-mono text-secondary/60 bg-card px-1.5 py-0.5 rounded border border-card hidden sm:inline-block">
                        {cmd.shortcut}
                      </span>
                    )}
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
        <div className="px-4 py-2.5 border-t border-card bg-main/70 flex items-center justify-between text-[11px] font-mono text-secondary">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-card border border-card text-[9px]">↑↓</kbd>
              <span>navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-card border border-card text-[9px]">↵</kbd>
              <span>select</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-card border border-card text-[9px]">esc</kbd>
              <span>close</span>
            </span>
          </div>
          <div className="text-secondary/70">
            {filteredCommands.length} {filteredCommands.length === 1 ? "match" : "matches"}
          </div>
        </div>

      </div>
    </div>
  );
}
