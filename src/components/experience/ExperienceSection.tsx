"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronRight } from "lucide-react";
import { experience } from "@/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work & <span className="text-gradient-cyan">Experience</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4">
            {experience.description}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500 transform sm:-translate-x-1/2 opacity-30" />

          {/* Timeline Items */}
          {experience.sections[0]?.experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            const bullets = exp.description
              .split("\n")
              .map((line) => line.replace(/^•\s*/, "").trim())
              .filter(Boolean);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start mb-12 ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot Node */}
                <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 z-20 shadow-lg shadow-cyan-500/50 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                {/* Content Box */}
                <div className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${isEven ? "sm:pr-8" : "sm:pl-8"}`}>
                  <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 relative">
                    
                    {/* Header: Title & Company */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.title}
                        </h3>
                        <a
                          href={exp.company_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 hover:underline mt-0.5"
                        >
                          <span>{exp.company}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Company Logo / Badge */}
                      <div className="w-11 h-11 rounded-xl bg-slate-900 border border-cyan-500/20 p-1.5 flex items-center justify-center shrink-0">
                        <img
                          src={`/images/${exp.logo_path}`}
                          alt={exp.company}
                          className="w-full h-full object-contain rounded-md"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                      </div>
                    </div>

                    {/* Metadata: Duration & Location */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4 pb-4 border-b border-slate-800">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Bullet Achievements */}
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 leading-relaxed">
                          <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-1" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
