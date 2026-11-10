"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Sparkles } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeTransition() {
  const { isTransitioning, targetTheme } = useTheme();

  const isTargetLight = targetTheme === "light";

  return (
    <AnimatePresence>
      {isTransitioning && (
        <div
          className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden"
          aria-hidden="true"
        >
          {/* Main Diagonal Sweep Sheet: Moving from Right-Top to Bottom-Left */}
          <motion.div
            initial={{ x: "130%", y: "-130%" }}
            animate={{
              x: ["130%", "0%", "-130%"],
              y: ["-130%", "0%", "130%"],
            }}
            transition={{
              duration: 0.65,
              times: [0, 0.48, 1],
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`absolute -top-[75vh] -left-[75vw] w-[250vw] h-[250vh] -rotate-45 transform-gpu shadow-2xl flex items-center justify-center ${
              isTargetLight
                ? "bg-gradient-to-br from-white via-slate-100 to-sky-50 shadow-[0_0_60px_rgba(6,182,212,0.35)]"
                : "bg-gradient-to-br from-slate-950 via-[#070b14] to-[#0f172a] shadow-[0_0_60px_rgba(6,182,212,0.45)]"
            }`}
            style={{ willChange: "transform" }}
          >
            {/* Luminous Neon Edge Beam on the Leading Diagonal Edge */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-500 shadow-[0_0_20px_rgba(6,182,212,0.9)]" />

            {/* Subtle Trailing Glow Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/40 via-cyan-400/30 to-emerald-400/40" />

            {/* Counter-rotated Center Badge that stays upright and smooth */}
            <div className="rotate-45 flex flex-col items-center justify-center gap-2 p-5 rounded-3xl border shadow-2xl backdrop-blur-xl scale-95 sm:scale-105">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-inner ${
                  isTargetLight
                    ? "bg-amber-500/15 border-amber-500/30 text-amber-500 shadow-amber-500/20"
                    : "bg-cyan-500/15 border-cyan-500/30 text-cyan-400 shadow-cyan-500/20"
                }`}
              >
                {isTargetLight ? (
                  <Sun className="w-8 h-8 animate-spin-slow" />
                ) : (
                  <Moon className="w-8 h-8" />
                )}
              </div>

              <div
                className={`flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full border ${
                  isTargetLight
                    ? "bg-white/80 border-slate-200 text-slate-800"
                    : "bg-slate-900/80 border-cyan-500/20 text-cyan-300"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>{isTargetLight ? "Light Mode" : "Dark Mode"}</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
