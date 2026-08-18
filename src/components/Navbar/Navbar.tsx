"use client";

import { useState, useEffect } from "react";
import { 
  HomeIcon, 
  User, 
  Briefcase, 
  FolderGit2, 
  LightbulbIcon, 
  Mail,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Download
} from "lucide-react";
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/animation/DockAnimation';
import { useTheme } from "@/components/ThemeProvider";
import { audioHaptics } from "@/lib/audioHaptics";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#hero", id: "hero", icon: HomeIcon },
  { name: "About", href: "#about", id: "about", icon: User },
  { name: "Journey", href: "#timeline", id: "timeline", icon: Briefcase },
  { name: "Projects", href: "#projects", id: "projects", icon: FolderGit2 },
  { name: "Skills", href: "#skills", id: "skills", icon: LightbulbIcon },
  { name: "Contact", href: "#contact", id: "contact", icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const { theme, toggleTheme } = useTheme();

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
    
    // Hide initially until mouse moves to bottom
    timeout = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    const handleMouseMove = (e: MouseEvent) => {
      const inBottom = window.innerHeight - e.clientY < 150;
      
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
    }
  };

  const handleToggleTheme = () => {
    toggleTheme();
    audioHaptics.playSwitch();
  };

  const handleToggleMute = () => {
    const muted = audioHaptics.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      setTimeout(() => audioHaptics.playClick(600, 0.1, "sine"), 50);
    }
  };

  const isLight = theme === "light";
  const accentColor = isLight ? "#C4563A" : "#E07A5F";

  return (
    <div className={cn(
      "fixed bottom-6 right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[99] transition-transform duration-300 ease-in-out",
      !isVisible && "translate-y-[200%]"
    )}>
      <Dock className='items-end pb-3'>
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
        
        {/* Separator */}
        <div className="w-[1px] h-8 bg-card/60 mx-1.5 hidden sm:block" />

        {/* Controls */}
        <DockItem onClick={handleToggleMute} className="aspect-square rounded-full bg-main/50 hover:bg-main/80 border border-card/60 backdrop-blur-md">
          <DockLabel>{isMuted ? "Unmute" : "Mute"}</DockLabel>
          <DockIcon className="text-secondary">
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </DockIcon>
        </DockItem>

        <DockItem onClick={handleToggleTheme} className="aspect-square rounded-full bg-main/50 hover:bg-main/80 border border-card/60 backdrop-blur-md">
          <DockLabel>{isLight ? "Dark Mode" : "Light Mode"}</DockLabel>
          <DockIcon className="text-secondary">
            {isLight ? <Moon className="w-5 h-5 text-cyan-500" /> : <Sun className="w-5 h-5 text-amber-500" />}
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
  );
}

