"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isDaytime: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDaytime, setIsDaytime] = useState<boolean>(true);
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  const applyTheme = (targetTheme: Theme) => {
    const root = document.documentElement;
    const body = document.body;

    if (targetTheme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
      if (body) {
        body.classList.remove("dark");
        body.classList.add("light");
      }
      root.setAttribute("data-theme", "light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
      if (body) {
        body.classList.remove("light");
        body.classList.add("dark");
      }
      root.setAttribute("data-theme", "dark");
    }
  };

  useEffect(() => {
    // Determine daytime (6:00 AM to 6:00 PM local time)
    const currentHour = new Date().getHours();
    const daytime = currentHour >= 6 && currentHour < 18;
    setIsDaytime(daytime);

    // Check saved user preference, fallback to timing-based theme
    const savedTheme = localStorage.getItem("hugo-academic-theme") as Theme | null;
    const initialTheme: Theme =
      savedTheme && (savedTheme === "dark" || savedTheme === "light")
        ? savedTheme
        : daytime
        ? "light"
        : "dark";

    setThemeState(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      applyTheme(theme);
    }
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("hugo-academic-theme", newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: mounted ? theme : "dark",
        toggleTheme,
        setTheme,
        isDaytime,
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
