"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#121824]/90 backdrop-blur-md border border-[#1e2638] text-blue-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 shadow-xl transition-all duration-300 group cursor-pointer"
      aria-label="Scroll to top"
      title="Back to top"
    >
      <div className="relative flex items-center justify-center">
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </button>
  );
}
