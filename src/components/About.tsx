"use client";

import React, { useState } from "react";
import { Cpu, Compass, Zap, Code2, CheckCircle2 } from "lucide-react";

export default function About() {
  const [terminalTab, setTerminalTab] = useState<"profile" | "spec" | "trajectory">("profile");

  const terminalData = {
    profile: `{
  "engineer": "Vaibhav Menariya",
  "program": "B.Tech in ECE (1st Year)",
  "specialization": "Semiconductor & VLSI (TrueChip Partnered)",
  "hometown": "Udaipur, Rajasthan, India",
  "base": "Jaipur, Rajasthan, India",
  "orientation": "Hardware Architecture + Python Automation"
}`,
    spec: `{
  "core_competencies": [
    "Digital Logic Design & Boolean Circuits",
    "Semiconductor Physics & PN Junction Dynamics",
    "Python Automation & Hardware Signal Logging",
    "C Programming & Procedural Hardware Control",
    "EDA & Simulation Tools (Multisim, SPICE primers)"
  ],
  "verification_partner": "TrueChip Solutions"
}`,
    trajectory: `{
  "milestones": [
    "2026: Matriculated at JECRC University ECE (VLSI Specialization)",
    "2026-2027: Digital Electronics, Verilog fundamentals & Circuit theory",
    "2027-2028: ASIC Design Flow, SystemVerilog & UVM testbench modeling",
    "2030: Graduating with industry-ready Semiconductor Engineering degree"
  ]
}`
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Section Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>{"// 01. ARCHITECTURAL PROFILE"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineering The Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
              Silicon & Intelligence
            </span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-3xl text-sm sm:text-base leading-relaxed">
            From physical board design to algorithmic orchestration, I craft digital logic and computational automation
            grounded in rigorous hardware principles.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Student Profile Summary & Trajectory */}
          <div className="lg:col-span-6 space-y-6">
            {/* Student Profile Card */}
            <div className="cyber-card p-6 sm:p-8 rounded-2xl border border-cyan-500/25 relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-cyan-400">
                <span className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-cyan-400" /> STUDENT BIOGRAPHY
                </span>
                {/* Location Badge */}
                <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[11px]">
                  Udaipur ➔ Jaipur (Rajasthan)
                </span>
              </div>

              <div className="pt-6 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a first-year Electronics & Communication Engineering undergraduate at{" "}
                  <strong className="text-white font-semibold">JECRC University, Jaipur</strong>, enrolled in
                  the prestigious <strong className="text-cyan-300 font-semibold">Semiconductor & VLSI Specialization</strong> in
                  collaboration with <strong className="text-amber-300 font-semibold">TrueChip</strong>.
                </p>
                <p className="text-slate-400 text-sm">
                  Originally from Udaipur, Rajasthan, my journey began in high school at Mahaveer Academy (RBSE), where
                  studying mathematics, physics, and analytical logic sparked my obsession with semiconductors—how billions of
                  nanometer-scale transistors work together to compute humanity&apos;s greatest ideas.
                </p>
                <p className="text-slate-400 text-sm">
                  My long-term vision is to contribute to India&apos;s burgeoning semiconductor ecosystem, working on ASIC design,
                  SoC verification, and high-speed embedded logic.
                </p>
              </div>

              {/* Trajectory Highlights */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 rounded-lg bg-[#06080E]/60 border border-slate-800">
                  <div className="text-slate-500 text-[10px]">CURRENT FOCUS</div>
                  <div className="text-cyan-300 font-semibold mt-1">Digital Logic & Physics</div>
                </div>
                <div className="p-3 rounded-lg bg-[#06080E]/60 border border-slate-800">
                  <div className="text-slate-500 text-[10px]">ENGINEERING GOAL</div>
                  <div className="text-amber-400 font-semibold mt-1">VLSI / ASIC Design</div>
                </div>
              </div>
            </div>

            {/* Interactive Terminal Card */}
            <div className="cyber-card rounded-2xl border border-slate-800 bg-[#06080E]/90 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-[#0B0F17] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400">
                    terminal // vaibhav@die-core
                  </span>
                </div>
                {/* Tabs */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setTerminalTab("profile")}
                    className={`px-2 py-1 rounded text-[10px] font-mono transition-colors ${
                      terminalTab === "profile"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    bio.json
                  </button>
                  <button
                    onClick={() => setTerminalTab("spec")}
                    className={`px-2 py-1 rounded text-[10px] font-mono transition-colors ${
                      terminalTab === "spec"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    specs.json
                  </button>
                  <button
                    onClick={() => setTerminalTab("trajectory")}
                    className={`px-2 py-1 rounded text-[10px] font-mono transition-colors ${
                      terminalTab === "trajectory"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    roadmap.json
                  </button>
                </div>
              </div>

              <div className="p-4 font-mono text-xs text-cyan-300/90 overflow-x-auto bg-[#06080E]">
                <pre className="text-slate-300">{terminalData[terminalTab]}</pre>
              </div>
            </div>
          </div>

          {/* Right Column: Feature Cards */}
          <div className="lg:col-span-6 space-y-6">
            {/* Feature Card 1: Silicon & VLSI Specialization */}
            <div className="cyber-card p-6 sm:p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 group relative">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all">
                <Cpu className="w-6 h-6" />
              </div>

              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>PILLAR 01 // HARDWARE & SILICON</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Silicon & VLSI Specialization
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Structured in direct partnership with <strong className="text-amber-300 font-semibold">TrueChip</strong>, one of India’s foremost verification IP providers. 
                The specialization emphasizes end-to-end semiconductor lifecycle comprehension:
              </p>

              <div className="space-y-2.5 text-xs font-mono text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Semiconductor physics, energy bands, and CMOS transistor fundamentals.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Combinational & sequential digital circuits, Karnaugh mapping, and boolean reduction.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Introduction to ASIC/SoC design flow, RTL synthesis, and verification principles.</span>
                </div>
              </div>
            </div>

            {/* Feature Card 2: Systems & Automation */}
            <div className="cyber-card p-6 sm:p-8 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 group relative">
              <div className="w-12 h-12 rounded-xl bg-amber-950/40 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all">
                <Code2 className="w-6 h-6" />
              </div>

              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-amber-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>PILLAR 02 // SOFTWARE & ORCHESTRATION</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Systems, Python & Automation
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Modern semiconductor workflows require robust software automation. I develop Python scripts, shell pipelines,
                and procedural tools to eliminate manual bottlenecks:
              </p>

              <div className="space-y-2.5 text-xs font-mono text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Automated test execution, telemetry parsing, and log evaluation scripts in Python.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Algorithm optimization, data structure fundamentals, and procedural C programming.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Linux command-line efficiency, Git version control, and modular system architectures.</span>
                </div>
              </div>
            </div>

            {/* Feature Card 3: The Synergy */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-cyan-950/40 via-[#0B0F17] to-amber-950/30 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-cyan-400 mb-1">THE SYNTHESIS</div>
                <div className="text-sm font-semibold text-white">Hardware Precision meets Software Speed</div>
              </div>
              <Zap className="w-6 h-6 text-amber-400 shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
