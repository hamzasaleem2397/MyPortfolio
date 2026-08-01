"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, CheckCircle2, Code, Smartphone, Server, Database, Layers } from "lucide-react";
import { skills } from "@/portfolio";

const techIconsMap: Record<string, { icon: string; color: string }> = {
  HTML5: { icon: "🌐", color: "from-orange-500/20 to-red-500/20 text-orange-400" },
  CSS3: { icon: "🎨", color: "from-blue-500/20 to-cyan-500/20 text-blue-400" },
  JavaScript: { icon: "⚡", color: "from-yellow-500/20 to-amber-500/20 text-yellow-400" },
  TypeScript: { icon: "📘", color: "from-blue-600/20 to-sky-500/20 text-sky-400" },
  "ReactJS / Native": { icon: "⚛️", color: "from-cyan-500/20 to-blue-500/20 text-cyan-400" },
  "Next.js": { icon: "▲", color: "from-slate-700/40 to-slate-900/40 text-white" },
  NodeJS: { icon: "🟢", color: "from-emerald-500/20 to-green-500/20 text-emerald-400" },
  Supabase: { icon: "⚡", color: "from-emerald-600/20 to-teal-500/20 text-emerald-300" },
  Firebase: { icon: "🔥", color: "from-amber-500/20 to-orange-600/20 text-amber-400" },
  MongoDB: { icon: "🍃", color: "from-green-600/20 to-emerald-500/20 text-green-400" },
  Git: { icon: "🐙", color: "from-red-500/20 to-orange-500/20 text-red-400" },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What I Bring To The <span className="text-gradient-cyan">Table</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4">
            Architecting modern mobile apps & full-stack Web solutions using production-tested frameworks.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Key Bullet Points */}
          {skills.data.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skillText, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {skillText.replace(/^⚡\s*/, "")}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Software Skills Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Technologies</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.data[0]?.softwareSkills.map((tech, tIdx) => {
                const config = techIconsMap[tech.skillName] || {
                  icon: "💻",
                  color: "from-slate-800 to-slate-900 text-slate-300",
                };
                return (
                  <motion.div
                    key={tIdx}
                    whileHover={{ scale: 1.05, translateY: -2 }}
                    className={`flex flex-col items-center justify-center p-3.5 rounded-xl bg-gradient-to-b ${config.color} border border-white/10 backdrop-blur-md shadow-md text-center group cursor-pointer`}
                  >
                    <span className="text-2xl mb-1.5 group-hover:scale-110 transition-transform">
                      {config.icon}
                    </span>
                    <span className="text-xs font-semibold text-slate-200">
                      {tech.skillName}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
