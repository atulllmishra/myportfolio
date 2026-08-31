"use client";
import { useState, useEffect, useRef } from 'react';
import { Download } from 'lucide-react';
import { audioHaptics } from "@/lib/audioHaptics";

const HackerBtn = ({ label, onClick, icon: Icon = Download }: { label: string, onClick?: () => void, icon?: any }) => {
  const [displayText, setDisplayText] = useState(label);
  const charset = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?";
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const LCG = (seed: number) => {
    return function() {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    }
  };

  const startScrambling = () => {
    audioHaptics.playClick(300, 0.05, "sawtooth");
    if (intervalRef.current) clearInterval(intervalRef.current);

    let iteration = 0;
    const maxIterations = label.length;
    const prng = LCG(Date.now());

    intervalRef.current = setInterval(() => {
      setDisplayText(prev => {
        return prev.split("").map((char, index) => {
          if (index < iteration) {
            return label[index];
          }
          return charset[Math.floor(prng() * charset.length)];
        }).join("");
      });

      if (iteration >= maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / 3; 
    }, 30);
  };

  useEffect(() => {
    setDisplayText(label);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  }, [label]);

  const handleClick = (e: React.MouseEvent) => {
    audioHaptics.playClick(600, 0.1, "sine");
    if (onClick) onClick();
  };

  return (
    <button 
      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-mono font-bold tracking-tight rounded-xl bg-primary text-main shadow-lg hover:-translate-y-0.5 transition-all w-fit cursor-pointer active:scale-98"
      onMouseEnter={startScrambling}
      onClick={handleClick}
    >   
      <Icon className="w-4 h-4 shrink-0" />
      <span className="min-w-[120px] text-center">{displayText}</span>
    </button>
  );
};

export default HackerBtn;
