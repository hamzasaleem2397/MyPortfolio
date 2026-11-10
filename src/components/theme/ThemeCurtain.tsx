"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Sparkles } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeCurtain() {
  const { isTransitioning, targetTheme } = useTheme();

  // If transitioning to light mode, show the Sun and luminous curtain styling
  const isTargetLight = targetTheme === "light";

  return (
    <AnimatePresence>
      {isTransitioning && (
        <div
          className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden"
          aria-hidden="true"
        >
          {/* Left Curtain Panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{
              x: ["-100%", "0%", "0%", "-100%"],
            }}
            transition={{
              duration: 0.8,
              times: [0, 0.44, 0.56, 1],
              ease: [0.32, 0.72, 0, 1],
            }}
            className={`absolute top-0 bottom-0 left-0 w-1/2 border-r-2 shadow-2xl overflow-hidden ${
              isTargetLight
                ? "bg-gradient-to-r from-slate-200 via-slate-100 to-white border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                : "bg-gradient-to-r from-slate-950 via-[#070b14] to-[#0f172a] border-cyan-500 shadow-[0_0_35px_rgba(6,182,212,0.5)]"
            }`}
            style={{
              backgroundImage: isTargetLight
                ? "repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, transparent 40px, rgba(255,255,255,0.6) 80px, rgba(0,0,0,0.04) 120px)"
                : "repeating-linear-gradient(90deg, rgba(0,0,0,0.4) 0px, transparent 40px, rgba(255,255,255,0.03) 80px, rgba(0,0,0,0.5) 120px)",
            }}
          >
            {/* Ambient edge glow */}
            <div
              className={`absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l pointer-events-none ${
                isTargetLight
                  ? "from-cyan-400/25 to-transparent"
                  : "from-cyan-400/30 to-transparent"
              }`}
            />
          </motion.div>

          {/* Right Curtain Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: ["100%", "0%", "0%", "100%"],
            }}
            transition={{
              duration: 0.8,
              times: [0, 0.44, 0.56, 1],
              ease: [0.32, 0.72, 0, 1],
            }}
            className={`absolute top-0 bottom-0 right-0 w-1/2 border-l-2 shadow-2xl overflow-hidden ${
              isTargetLight
                ? "bg-gradient-to-l from-slate-200 via-slate-100 to-white border-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                : "bg-gradient-to-l from-slate-950 via-[#070b14] to-[#0f172a] border-purple-500 shadow-[0_0_35px_rgba(168,85,247,0.5)]"
            }`}
            style={{
              backgroundImage: isTargetLight
                ? "repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, transparent 40px, rgba(255,255,255,0.6) 80px, rgba(0,0,0,0.04) 120px)"
                : "repeating-linear-gradient(90deg, rgba(0,0,0,0.4) 0px, transparent 40px, rgba(255,255,255,0.03) 80px, rgba(0,0,0,0.5) 120px)",
            }}
          >
            {/* Ambient edge glow */}
            <div
              className={`absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r pointer-events-none ${
                isTargetLight
                  ? "from-purple-400/25 to-transparent"
                  : "from-purple-400/30 to-transparent"
              }`}
            />
          </motion.div>

          {/* Center Badge when Curtains Meet */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.15, 1, 0],
                opacity: [0, 1, 1, 0],
                rotate: [isTargetLight ? -90 : 90, 0, 0, isTargetLight ? 45 : -45],
              }}
              transition={{
                duration: 0.8,
                times: [0, 0.38, 0.62, 1],
                ease: "easeInOut",
              }}
              className={`flex flex-col items-center justify-center gap-2 p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl ${
                isTargetLight
                  ? "bg-white/95 border-amber-400/60 shadow-[0_0_50px_rgba(245,158,11,0.35)] text-slate-900"
                  : "bg-slate-950/95 border-cyan-400/60 shadow-[0_0_50px_rgba(6,182,212,0.45)] text-white"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-inner ${
                  isTargetLight
                    ? "bg-amber-500/10 border-amber-500/30 text-amber-500"
                    : "bg-cyan-500/15 border-cyan-500/30 text-cyan-400"
                }`}
              >
                {isTargetLight ? (
                  <Sun className="w-8 h-8 animate-spin-slow" />
                ) : (
                  <Moon className="w-8 h-8" />
                )}
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>{isTargetLight ? "Light Mode" : "Dark Mode"}</span>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
