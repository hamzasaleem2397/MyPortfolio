"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Eye, Smartphone, Layers } from "lucide-react";
import { projects, projectsHeader } from "@/portfolio";
import { Project } from "@/types/portfolio";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Mobile Apps", "Full Stack", "AI & Cloud"];

  const filteredProjects = projects.data.filter((proj) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Mobile Apps") return true; // All 8 are React Native mobile apps
    if (activeFilter === "AI & Cloud") {
      return proj.languages.some((l) =>
        ["Supabase", "Firebase", "OpenAI API", "Nest.js", "MongoDB"].includes(l.name)
      );
    }
    if (activeFilter === "Full Stack") {
      return proj.languages.some((l) =>
        ["Supabase", "Nest.js", "MongoDB", "WooCommerce API"].includes(l.name)
      );
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Production <span className="text-gradient-purple">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4">
            {projectsHeader.description}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 shadow-md shadow-cyan-500/20 font-bold"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-cyan-500/20 hover:bg-slate-800"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Top Image Preview Banner */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative h-48 sm:h-52 bg-slate-950 overflow-hidden cursor-pointer flex items-center justify-center p-4 border-b border-cyan-500/10 group"
                >
                  <img
                    src={`/images/${project.images[0] || "studiogrow1.webp"}`}
                    alt={project.name}
                    className="max-h-full max-w-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/studiogrow1.webp";
                    }}
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs shadow-lg">
                      <Eye className="w-4 h-4" />
                      <span>View Gallery</span>
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  {/* Title & Logo */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 border border-cyan-500/20 p-1.5 flex items-center justify-center shrink-0">
                      <img
                        src={`/images/${project.logo}`}
                        alt={project.name}
                        className="w-full h-full object-contain rounded"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Language Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.languages.map((lang, lIdx) => (
                      <span
                        key={lIdx}
                        className="px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-medium text-slate-300"
                      >
                        {lang.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-6 pb-6 pt-0 flex items-center gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-2 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-400 font-semibold text-xs hover:bg-cyan-500/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Screenshots</span>
                </button>

                {project.playstore && (
                  <a
                    href={project.playstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors cursor-pointer"
                    title="Google Play Store"
                  >
                    <Smartphone className="w-4 h-4" />
                  </a>
                )}
                {project.appstore && (
                  <a
                    href={project.appstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 hover:bg-purple-500/20 transition-colors cursor-pointer"
                    title="Apple App Store"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
