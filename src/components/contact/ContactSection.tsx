"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, Send, Sparkles, MessageSquare, Github, Linkedin } from "lucide-react";
import confetti from "canvas-confetti";
import { contactPageData, socialMediaLinks, greeting } from "@/portfolio";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialMediaLinks.gmail || "hamzasaleem2397@gmail.com");
    setCopied(true);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger mailto link
    const mailtoUrl = `mailto:${socialMediaLinks.gmail}?subject=Portfolio Reachout from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`;
    window.location.href = mailtoUrl;

    setSent(true);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.7 } });
    setTimeout(() => {
      setSent(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="text-gradient-cyan">Amazing</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4">
            {contactPageData.contactSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              {/* Profile Image & Name */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-cyan-400/40 p-0.5 bg-slate-900 shadow-lg shadow-cyan-500/20">
                  <img
                    src={`/images/${contactPageData.contactSection.profile_image_path}`}
                    alt={greeting.full_name}
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/logo.svg";
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{greeting.full_name}</h3>
                  <p className="text-xs font-mono text-cyan-400">{greeting.nickname}</p>
                </div>
              </div>

              {/* Direct Mail Box */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 mb-6">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-2">
                  Direct Email:
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-slate-200 truncate">
                    {socialMediaLinks.gmail}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 transition-colors shrink-0 cursor-pointer"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <span className="text-[11px] text-emerald-400 font-medium block mt-1">
                    ✓ Email address copied to clipboard!
                  </span>
                )}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-slate-800">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-3">
                Social Profiles:
              </span>
              <div className="flex items-center gap-3">
                {socialMediaLinks.github && (
                  <a
                    href={socialMediaLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-slate-900 border border-cyan-500/20 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 flex items-center justify-center gap-2 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}
                {socialMediaLinks.linkedin && (
                  <a
                    href={socialMediaLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-slate-900 border border-cyan-500/20 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 flex items-center justify-center gap-2 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">Send Me a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hello Hamza, I'd like to discuss a mobile app project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{sent ? "Message Launched!" : "Send Message"}</span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
