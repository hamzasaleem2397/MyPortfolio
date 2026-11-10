"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme, isTransitioning, mounted } = useTheme();

  // Before mounting, default to dark mode display to match server rendering
  const isDark = !mounted || theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      disabled={isTransitioning}
      whileHover={isTransitioning ? {} : { scale: 1.05 }}
      whileTap={isTransitioning ? {} : { scale: 0.95 }}
      className={`relative p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer ${
        isTransitioning ? "opacity-75 cursor-not-allowed scale-95" : ""
      } ${
        isDark
          ? "bg-slate-900/80 border-cyan-500/30 text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:bg-slate-800"
          : "bg-white/90 border-slate-300 text-amber-500 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.25)] hover:bg-amber-50/50"
      } ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun-icon"
            initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <Sun className="w-4 h-4 text-amber-400 fill-amber-400/20" />
          </motion.div>
        ) : (
          <motion.div
            key="moon-icon"
            initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <Moon className="w-4 h-4 text-cyan-600 fill-cyan-600/20" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
