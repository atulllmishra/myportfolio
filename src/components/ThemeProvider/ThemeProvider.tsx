"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isDaytime: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  const applyTheme = () => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const body = document.body;

    root.classList.remove("dark");
    root.classList.add("light");
    if (body) {
      body.classList.remove("dark");
      body.classList.add("light");
    }
    root.setAttribute("data-theme", "light");
  };

  useEffect(() => {
    applyTheme();
    localStorage.setItem("hugo-academic-theme", "light");
    setMounted(true);
  }, []);

  const setTheme = () => {
    applyTheme();
  };

  const toggleTheme = () => {
    applyTheme();
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: "light",
        toggleTheme,
        setTheme,
        isDaytime: true,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
