"use client";

import React, { createContext, useContext, useEffect, useState, useRef } from "react";

export type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  targetTheme: Theme | null;
  isTransitioning: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  targetTheme: null,
  isTransitioning: false,
  setTheme: () => {},
  toggleTheme: () => {},
  mounted: false,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Dark theme is the default
  const [theme, setThemeState] = useState<Theme>("dark");
  const [targetTheme, setTargetTheme] = useState<Theme | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);

  const switchTimerRef = useRef<NodeJS.Timeout | null>(null);
  const finishTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const storedTheme = localStorage.getItem("portfolio-theme") as Theme | null;
      if (storedTheme === "light" || storedTheme === "dark") {
        setThemeState(storedTheme);
        applyTheme(storedTheme);
      } else {
        // Dark theme is the default
        setThemeState("dark");
        applyTheme("dark");
      }
    } catch {
      setThemeState("dark");
      applyTheme("dark");
    }

    return () => {
      if (switchTimerRef.current) clearTimeout(switchTimerRef.current);
      if (finishTimerRef.current) clearTimeout(finishTimerRef.current);
    };
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    if (newTheme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
      root.style.colorScheme = "light";
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
      root.style.colorScheme = "dark";
    }
  };

  const setTheme = (newTheme: Theme) => {
    if (newTheme === theme || isTransitioning) return;

    setIsTransitioning(true);
    setTargetTheme(newTheme);

    // Midpoint: when curtains close (380ms), swap the theme underneath
    switchTimerRef.current = setTimeout(() => {
      setThemeState(newTheme);
      applyTheme(newTheme);
      try {
        localStorage.setItem("portfolio-theme", newTheme);
      } catch (e) {
        console.error("Failed to persist theme", e);
      }
    }, 380);

    // End: when curtains fully open (820ms), clear transitioning state
    finishTimerRef.current = setTimeout(() => {
      setIsTransitioning(false);
      setTargetTheme(null);
    }, 820);
  };

  const toggleTheme = () => {
    if (isTransitioning) return;
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider
      value={{ theme, targetTheme, isTransitioning, setTheme, toggleTheme, mounted }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
