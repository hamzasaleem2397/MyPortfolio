"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import { greeting, socialMediaLinks } from "@/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-cyan-500/15 bg-slate-950/80 backdrop-blur-xl py-12">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-xl font-bold font-mono text-white flex items-center gap-2">
            <span className="text-cyan-400">&lt;</span>
            {greeting.logo_name}
            <span className="text-purple-400">/&gt;</span>
          </span>
          <p className="text-xs text-slate-400 mt-1 max-w-sm">
            Building next-generation mobile applications & interactive digital experiences.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socialMediaLinks.github && (
            <a
              href={socialMediaLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900/80 border border-cyan-500/20 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-slate-800 transition-all cursor-pointer"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {socialMediaLinks.linkedin && (
            <a
              href={socialMediaLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900/80 border border-cyan-500/20 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-slate-800 transition-all cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {socialMediaLinks.gmail && (
            <a
              href={`mailto:${socialMediaLinks.gmail}`}
              className="w-10 h-10 rounded-full bg-slate-900/80 border border-cyan-500/20 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-slate-800 transition-all cursor-pointer"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Copyright & Scroll To Top */}
        <div className="flex items-center gap-4">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 animate-pulse" /> by{" "}
            <span className="text-slate-200 font-medium">{greeting.full_name}</span>
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:scale-110 transition-all cursor-pointer"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
