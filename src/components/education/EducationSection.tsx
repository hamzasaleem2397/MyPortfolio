"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink, Calendar, CheckCircle2 } from "lucide-react";
import { degrees, certifications } from "@/portfolio";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-cyan">Credentials</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Degree Card */}
          {degrees.degrees.map((degree, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-500/20 p-2 flex items-center justify-center shrink-0">
                      <img
                        src={`/images/${degree.logo_path}`}
                        alt={degree.title}
                        className="w-full h-full object-contain rounded-md"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{degree.title}</h3>
                      <p className="text-sm font-semibold text-cyan-400">{degree.subtitle}</p>
                    </div>
                  </div>
                  
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 shrink-0">
                    <Calendar className="w-3 h-3 text-purple-400" />
                    <span>{degree.duration}</span>
                  </span>
                </div>

                <div className="space-y-3 mt-6">
                  {degree.descriptions.map((desc, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {desc.replace(/^⚡\s*/, "")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <a
                  href={degree.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Visit University Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}

          {/* Certifications Card */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-400" />
              <span>Certifications</span>
            </h3>

            {certifications.certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-panel glass-panel-hover rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-purple-500/20 p-2 flex items-center justify-center shrink-0">
                    <img
                      src={`/images/${cert.logo_path}`}
                      alt={cert.title}
                      className="w-full h-full object-contain rounded-md"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">{cert.title}</h4>
                    <p className="text-xs text-slate-300 mb-3">{cert.subtitle}</p>

                    <a
                      href={cert.certificate_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold hover:bg-purple-500/20 transition-colors cursor-pointer"
                    >
                      <span>Verify Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
