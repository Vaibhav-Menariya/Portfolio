"use client";

import React, { useState } from "react";
import CircuitBackground from "@/components/CircuitBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#06080E] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Interactive Circuit Canvas Background */}
      <CircuitBackground />

      {/* Main Top Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Structured Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Interests />
        <Contact />
      </main>

      {/* Terminal Footer */}
      <Footer />

      {/* Interactive Resume Dispatch Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
