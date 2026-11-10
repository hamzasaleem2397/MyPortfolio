"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

// Background colors that match globals.css / tailwind body bg
const BG: Record<string, string> = {
  dark: "#070b14",
  light: "#f8fafc",
};

export default function ThemeTransition() {
  const { transition, endTransition } = useTheme();
  const overlayRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!transition?.active) return;

    const el = overlayRef.current;
    if (!el) return;

    const { x, y, fromTheme } = transition;

    // Radius large enough to cover the entire viewport from the origin point
    const maxR = Math.ceil(
      Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      )
    ) + 10;

    // Set the old-theme background color for the overlay
    el.style.backgroundColor = BG[fromTheme];

    // Start state: circle fully covers the screen
    el.style.transition = "none";
    el.style.clipPath = `circle(${maxR}px at ${x}px ${y}px)`;

    // Force a synchronous layout flush so the browser paints the start state
    // before we start the CSS transition
    el.getBoundingClientRect();

    // Next frame: begin animating the circle in to 0 — revealing the new theme underneath
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition =
          "clip-path 0.65s cubic-bezier(0.76, 0, 0.24, 1)";
        el.style.clipPath = `circle(0px at ${x}px ${y}px)`;
      });
    });

    // After animation finishes, tear down
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      endTransition();
    }, 700);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transition?.active]);

  // Keep the overlay in the DOM always but invisible when inactive
  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9998] pointer-events-none"
      style={{ clipPath: "circle(0px at 50% 50%)" }}
      aria-hidden="true"
    />
  );
}
