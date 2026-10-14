"use client";

import React, { useState } from "react";
import { Filter, CircuitBoard } from "lucide-react";

interface SkillItem {
  name: string;
  level: number; // percentage (e.g. 85)
  category: "hardware" | "programming" | "tools" | "core";
  description: string;
  badge: string;
}

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<"all" | "hardware" | "programming" | "tools" | "core">("all");

  const skillsData: SkillItem[] = [
    // Hardware & Core ECE
    {
      name: "Semiconductor Fundamentals",
      level: 90,
      category: "hardware",
      description: "Carrier concentration, PN junction kinetics, bandgap physics, and MOSFET operation.",
      badge: "CORE // SILICON",
    },
    {
      name: "Digital Logic & Boolean Algebra",
      level: 92,
      category: "hardware",
      description: "Logic gate minimization, Karnaugh maps, De Morgan's theorems, combinational synthesis.",
      badge: "LOGIC // GATES",
    },
    {
      name: "Circuit Analysis & Theory",
      level: 86,
      category: "hardware",
      description: "Kirchhoff laws, Thevenin/Norton equivalents, RLC transients, and AC/DC network analysis.",
      badge: "CIRCUIT // NODES",
    },
    {
      name: "VLSI & ASIC Concepts",
      level: 82,
      category: "hardware",
      description: "ASIC design flow, RTL synthesis, standard cell libraries, TrueChip verification primer.",
      badge: "VLSI // ARCH",
    },

    // Programming & Scripting
    {
      name: "Python Automation",
      level: 88,
      category: "programming",
      description: "Automated hardware signal parsing, telemetry processing, system scripts, data visualization.",
      badge: "PY // AUTOMATION",
    },
    {
      name: "C Programming",
      level: 85,
      category: "programming",
      description: "Pointers, dynamic memory, low-level bitwise operations, memory mapped I/O basics.",
      badge: "C // PROCEDURAL",
    },
    {
      name: "Automation & Shell Scripting",
      level: 80,
      category: "programming",
      description: "Bash/PowerShell workflows, pipeline chaining, automated test runners, and build tasks.",
      badge: "SHELL // PIPELINE",
    },

    // Tools & Environments
    {
      name: "Multisim & Circuit Simulation",
      level: 84,
      category: "tools",
      description: "Schematic capture, transient analysis, frequency response, virtual instrumentation.",
      badge: "EDA // SIMULATION",
    },
    {
      name: "Git & Version Control",
      level: 88,
      category: "tools",
      description: "Branching strategies, commit hygiene, merge resolution, GitHub collaborative workflows.",
      badge: "GIT // VCS",
    },
    {
      name: "Linux / Terminal Environment",
      level: 82,
      category: "tools",
      description: "POSIX commands, process management, file permissions, headless development setups.",
      badge: "LINUX // POSIX",
    },
    {
      name: "Visual Studio Code & Tooling",
      level: 92,
      category: "tools",
      description: "Advanced debugging, extensions, remote development, linting, and compiler integration.",
      badge: "IDE // TOOLING",
    },

    // Core Engineering
    {
      name: "Hardware-Software Integration",
      level: 85,
      category: "core",
      description: "Bridging physical transistor behavior with software abstraction layers and protocols.",
      badge: "INTEGRATION // HW-SW",
    },
    {
      name: "Problem-Solving & Algorithmic Logic",
      level: 90,
      category: "core",
      description: "Structured decomposition of complex state machines, mathematical proofs, logic reduction.",
      badge: "ALGO // LOGIC",
    },
    {
      name: "Technical Documentation & Synthesis",
      level: 86,
      category: "core",
      description: "Clear verification notes, schematic annotations, architecture diagrams, and test logs.",
      badge: "DOCS // ARCH",
    },
  ];

  const filteredSkills =
    activeFilter === "all"
      ? skillsData
      : skillsData.filter((item) => item.category === activeFilter);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>{"// 03. TECHNICAL ARSENAL"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Skills Matrix &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300">
              Silicon Stack
            </span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-3xl text-sm sm:text-base leading-relaxed">
            A comprehensive matrix spanning fundamental semiconductor physics, digital gate synthesis,
            low-level C, and automated Python telemetry.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-800">
          <span className="text-xs font-mono text-slate-500 mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" /> FILTER:
          </span>

          {[
            { id: "all", label: "ALL DOMAINS", count: skillsData.length },
            {
              id: "hardware",
              label: "HARDWARE & ECE",
              count: skillsData.filter((s) => s.category === "hardware").length,
            },
            {
              id: "programming",
              label: "PROGRAMMING & SCRIPTS",
              count: skillsData.filter((s) => s.category === "programming").length,
            },
            {
              id: "tools",
              label: "TOOLS & SIMULATION",
              count: skillsData.filter((s) => s.category === "tools").length,
            },
            {
              id: "core",
              label: "CORE ENGINEERING",
              count: skillsData.filter((s) => s.category === "core").length,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 flex items-center gap-2 ${
                activeFilter === tab.id
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.3)] font-semibold"
                  : "bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              <span>{tab.label}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => {
            const isHardware = skill.category === "hardware";
            const isProg = skill.category === "programming";
            const isTool = skill.category === "tools";

            const accentColor = isHardware
              ? "cyan"
              : isProg
              ? "amber"
              : isTool
              ? "emerald"
              : "sky";

            return (
              <div
                key={index}
                className="cyber-card p-5 rounded-xl border border-slate-800 hover:border-cyan-500/30 group relative transition-all duration-300"
              >
                {/* Silicon Pin accent header */}
                <div className="flex items-center justify-between mb-3 text-[10px] font-mono">
                  <span
                    className={`px-2 py-0.5 rounded border ${
                      accentColor === "cyan"
                        ? "bg-cyan-950/60 text-cyan-400 border-cyan-500/30"
                        : accentColor === "amber"
                        ? "bg-amber-950/60 text-amber-400 border-amber-500/30"
                        : accentColor === "emerald"
                        ? "bg-emerald-950/60 text-emerald-400 border-emerald-500/30"
                        : "bg-sky-950/60 text-sky-400 border-sky-500/30"
                    }`}
                  >
                    {skill.badge}
                  </span>
                  <span className="text-slate-400 font-bold">
                    {skill.level}% EFFICIENCY
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 mb-4 leading-relaxed line-clamp-2">
                  {skill.description}
                </p>

                {/* Micro-level Indicator Bar */}
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800 relative">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      accentColor === "cyan"
                        ? "bg-gradient-to-r from-cyan-500 to-sky-400"
                        : accentColor === "amber"
                        ? "bg-gradient-to-r from-amber-500 to-yellow-400"
                        : accentColor === "emerald"
                        ? "bg-gradient-to-r from-emerald-500 to-teal-400"
                        : "bg-gradient-to-r from-sky-500 to-blue-400"
                    }`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Silicon Die Visualizer Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0B0F17] border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <CircuitBoard className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                CURRICULUM SYNERGY // TRUECHIP
              </div>
              <div className="text-sm font-semibold text-white mt-0.5">
                Industry-Guided Verification Methodologies & Digital Gate Foundations
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs text-slate-400 shrink-0">
            <span className="px-3 py-1.5 rounded-lg bg-[#06080E] border border-slate-800">
              EDA: Multisim / SPICE
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#06080E] border border-slate-800">
              RTL: Verilog Primer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
