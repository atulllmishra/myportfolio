"use client";

import { useState, useEffect, useRef } from "react";
import { Terminal, X, ChevronRight, Hash, Command as CmdIcon, Cpu } from "lucide-react";
import { audioHaptics } from "@/lib/audioHaptics";
import { useTheme } from "@/components/ThemeProvider";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle palette on Cmd+K or Ctrl+~
      if ((e.metaKey && e.key === "k") || (e.ctrlKey && e.key === "`")) {
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
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const isLight = theme === "light";
  const accentColor = isLight ? "#C4563A" : "#E07A5F";

  const executeCommand = (cmd: string) => {
    audioHaptics.playClick(800, 0.05, "square");
    
    switch (cmd.toLowerCase()) {
      case "theme":
        toggleTheme();
        setIsOpen(false);
        break;
      case "gravity":
        window.dispatchEvent(new CustomEvent("toggle-zero-g"));
        setIsOpen(false);
        break;
      case "projects":
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
        break;
      case "clear":
        setQuery("");
        break;
      default:
        // Flash red for error?
        break;
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (e.target.value.length > query.length) {
      audioHaptics.playKey();
    }
  };

  const commands = [
    { name: "Toggle Theme", cmd: "theme", icon: <SunIcon /> },
    { name: "Zero-G Physics Mode", cmd: "gravity", icon: <Cpu className="w-4 h-4" /> },
    { name: "Go to Projects", cmd: "projects", icon: <Hash className="w-4 h-4" /> },
  ];

  const filtered = query 
    ? commands.filter(c => c.name.toLowerCase().includes(query.toLowerCase()) || c.cmd.includes(query.toLowerCase()))
    : commands;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 sm:px-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={() => { setIsOpen(false); audioHaptics.playPop(false); }}
      />
      
      {/* Palette Body */}
      <div className="relative w-full max-w-xl bg-card border border-card rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Input area */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-card bg-main/50">
          <Terminal className="w-5 h-5 text-secondary" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInput}
            onKeyDown={(e) => {
              if (e.key === "Enter" && filtered.length > 0) {
                executeCommand(filtered[0].cmd);
              }
            }}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent border-none outline-none text-primary font-mono text-sm placeholder:text-secondary/50"
            spellCheck={false}
          />
          <div className="flex items-center gap-1 text-[10px] font-mono text-secondary bg-card px-2 py-1 rounded border border-card">
            <CmdIcon className="w-3 h-3" />
            <span>K</span>
          </div>
        </div>

        {/* Results */}
        <div className="p-2 max-h-80 overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm font-mono text-secondary">
              No commands found for "<span className="text-primary">{query}</span>"
            </div>
          ) : (
            <div className="space-y-1">
              <div className="px-3 py-2 text-[10px] font-mono font-bold tracking-wider text-secondary uppercase">
                Available Commands
              </div>
              {filtered.map((item, i) => (
                <button
                  key={i}
                  onClick={() => executeCommand(item.cmd)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-main group transition-colors text-left"
                >
                  <div className="flex items-center gap-3 text-secondary group-hover:text-primary transition-colors">
                    <span style={{ color: accentColor }}>{item.icon}</span>
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-mono text-secondary">run</span>
                    <ChevronRight className="w-4 h-4 text-accent" style={{ color: accentColor }} />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

function SunIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}
