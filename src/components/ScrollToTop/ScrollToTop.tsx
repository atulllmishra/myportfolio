"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { audioHaptics } from "@/lib/audioHaptics";
import { useTheme } from "@/components/ThemeProvider";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === "light";
  const accentColor = isLight ? "#C4563A" : "#E07A5F";

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    audioHaptics.playClick(400, 0.05, "sine");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => audioHaptics.playClick(600, 0.02, "sine")}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-card/90 backdrop-blur-md border border-card text-secondary hover:text-white hover:bg-accent hover:border-accent shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer active:scale-95"
      aria-label="Scroll to top"
      title="Back to top"
    >
      <div className="relative flex items-center justify-center">
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </button>
  );
}
