"use client";

import React, { useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme, transition, mounted } = useTheme();

  // Before hydration, default to dark to match server render
  const isDark = !mounted || theme === "dark";
  const isBusy = !!transition?.active;

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isBusy) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = Math.round(rect.left + rect.width / 2);
      const y = Math.round(rect.top + rect.height / 2);
      toggleTheme(x, y);
    },
    [isBusy, toggleTheme]
  );

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      disabled={isBusy}
      whileHover={isBusy ? {} : { scale: 1.08 }}
      whileTap={isBusy ? {} : { scale: 0.92 }}
      className={`relative p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center ${
        isBusy ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
      } ${
        isDark
          ? "bg-slate-900/80 border-cyan-500/30 text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_14px_rgba(6,182,212,0.35)] hover:bg-slate-800"
          : "bg-white/90 border-slate-300 text-amber-500 hover:border-amber-400 hover:shadow-[0_0_14px_rgba(245,158,11,0.3)] hover:bg-amber-50/60"
      } ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <Sun className="w-4 h-4 text-amber-400 fill-amber-400/20" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <Moon className="w-4 h-4 text-cyan-600 fill-cyan-600/20" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
