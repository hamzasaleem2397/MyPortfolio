"use client";

import React, { createContext, useContext, useEffect, useState, useRef } from "react";

export type Theme = "dark" | "light";

export interface TransitionState {
  active: boolean;
  x: number;
  y: number;
  fromTheme: Theme;
}

interface ThemeContextType {
  theme: Theme;
  mounted: boolean;
  transition: TransitionState | null;
  toggleTheme: (originX?: number, originY?: number) => void;
  endTransition: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  mounted: false,
  transition: null,
  toggleTheme: () => {},
  endTransition: () => {},
});

function applyTheme(t: Theme) {
  const root = document.documentElement;
  if (t === "light") {
    root.classList.remove("dark");
    root.classList.add("light");
    root.style.colorScheme = "light";
  } else {
    root.classList.add("dark");
    root.classList.remove("light");
    root.style.colorScheme = "dark";
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);
  const [transition, setTransition] = useState<TransitionState | null>(null);
  const lockRef = useRef(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("portfolio-theme") as Theme | null;
      const resolved: Theme = stored === "light" ? "light" : "dark";
      setTheme(resolved);
      applyTheme(resolved);
    } catch {
      applyTheme("dark");
    }
  }, []);

  const toggleTheme = (
    originX?: number,
    originY?: number
  ) => {
    if (lockRef.current) return;
    lockRef.current = true;

    const newTheme: Theme = theme === "dark" ? "light" : "dark";

    // Record from-theme for overlay color, then flip immediately underneath
    const fromTheme: Theme = theme;
    const x = originX ?? window.innerWidth / 2;
    const y = originY ?? window.innerHeight / 2;

    // Apply new theme to DOM right away (overlay hides it temporarily)
    setTheme(newTheme);
    applyTheme(newTheme);
    try {
      localStorage.setItem("portfolio-theme", newTheme);
    } catch {}

    // Kick off overlay animation
    setTransition({ active: true, x, y, fromTheme });
  };

  const endTransition = () => {
    setTransition(null);
    lockRef.current = false;
  };

  return (
    <ThemeContext.Provider value={{ theme, mounted, transition, toggleTheme, endTransition }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
