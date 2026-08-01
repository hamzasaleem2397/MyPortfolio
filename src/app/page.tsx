"use client";

import React from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import GreetingSection from "@/components/greeting/GreetingSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import EducationSection from "@/components/education/EducationSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen relative z-10 selection:bg-cyan-500 selection:text-slate-950">
      <Header />
      <GreetingSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
