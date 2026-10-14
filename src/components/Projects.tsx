"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Activity,
  CheckCircle,
  Play,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import LogicGateSimulator from "./LogicGateSimulator";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  accent: "cyan" | "amber" | "emerald";
  description: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  hasInteractiveLab?: boolean;
  codeSnippet?: string;
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"cards" | "simulator">("cards");

  const projects: ProjectItem[] = [
    {
      id: "circuit-sim",
      title: "Digital Circuit Simulator & Logic Analyzer",
      subtitle: "Interactive Boolean Engine & Waveform Visualizer",
      tag: "CORE ECE // SIMULATION",
      accent: "cyan",
      hasInteractiveLab: true,
      description:
        "A full-fledged web-based boolean logic simulator designed to demonstrate digital system behaviors. Models fundamental CMOS gate logic (AND, OR, XOR, NAND, NOR, XNOR, NOT), calculates real-time truth table mappings, and replicates circuit voltage propagation.",
      features: [
        "Interactive state manipulation for dual-input logic networks.",
        "Dynamic truth table generator with active-state row highlighting.",
        "Schematic representation showing electric current paths and impedance states.",
        "Modular architecture ready for multi-gate cascading and combinational circuits.",
      ],
      techStack: ["Next.js", "React 19", "Tailwind CSS", "CMOS Logic Models", "SVG Circuit Rendering"],
      githubUrl: "https://github.com",
    },
    {
      id: "hardware-logger",
      title: "Automated Task & Hardware Signal Logger",
      subtitle: "Python-driven Telemetry Benchmarking & IO Capture",
      tag: "PYTHON // AUTOMATION",
      accent: "amber",
      description:
        "A modular Python automation pipeline for capturing, timestamping, and parsing continuous hardware signal streams and automated test benches. Incorporates error-detection heuristics, statistical jitter metrics, and CSV/JSON reporting.",
      features: [
        "Continuous signal telemetry sampling with microsecond timestamp fidelity.",
        "Automated outlier detection and voltage swing anomaly flagging.",
        "Clean terminal CLI with curses-inspired real-time telemetry displays.",
        "Export utilities for analysis in scientific computing stacks (NumPy / Matplotlib).",
      ],
      techStack: ["Python 3.x", "Asyncio", "Serial IO", "Telemetry Parsing", "Shell Automation"],
      githubUrl: "https://github.com",
      codeSnippet: `import time
import random

class SignalLogger:
    def __init__(self, port="COM3", baud=115200):
        self.port = port
        self.baud = baud
        self.samples = []
        print(f"[INIT] Signal bus mapped to {self.port} @ {self.baud} bps")

    def capture_frame(self, channel="CH1"):
        voltage = round(3.3 * random.uniform(0.95, 1.05), 3)
        timestamp = time.time_ns()
        telemetry = {"ts": timestamp, "chan": channel, "v": voltage, "status": "LOCKED"}
        self.samples.append(telemetry)
        return telemetry

logger = SignalLogger()
for _ in range(3):
    print(logger.capture_frame())`,
    },
    {
      id: "verification-study",
      title: "Semiconductor Verification Primer & ASIC Flow",
      subtitle: "Research Study & TrueChip Methodology Documentation",
      tag: "VLSI // RESEARCH",
      accent: "emerald",
      description:
        "Comprehensive research notes and architectural synthesis on modern semiconductor verification flows, compiled in alignment with the TrueChip ECE curriculum. Details the journey from Verilog RTL to SystemVerilog/UVM constrained-random testbenches and physical tapeout.",
      features: [
        "Detailed comparison of Formal Verification vs. Simulation-based verification.",
        "Deep-dive into Universal Verification Methodology (UVM) testbench hierarchy.",
        "ASIC Flow breakdown: RTL Synthesis, Static Timing Analysis (STA), DRC/LVS physical sign-off.",
        "Analysis of modern semiconductor challenges: Leakage power, clock jitter, and nanoscale interconnect delays.",
      ],
      techStack: ["SystemVerilog Primer", "UVM Concepts", "ASIC Design Flow", "STA Analysis", "TrueChip IP"],
      githubUrl: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#06080E]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>{"// 04. PROJECTS & SYSTEMS"}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Engineered Systems &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300">
                  Prototypes
                </span>
              </h2>
              <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
                Hands-on implementations in boolean circuit modeling, Python hardware telemetry, and ASIC design
                verification pipelines.
              </p>
            </div>

            {/* Quick Switcher Button */}
            <div className="flex items-center p-1 rounded-lg bg-[#0B0F17] border border-slate-800 self-start md:self-auto">
              <button
                onClick={() => setActiveTab("cards")}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                  activeTab === "cards"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                PROJECT CARDS
              </button>
              <button
                onClick={() => setActiveTab("simulator")}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeTab === "simulator"
                    ? "bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                LIVE LAB DEMO
              </button>
            </div>
          </div>
        </div>

        {/* View 1: Interactive Lab Mode */}
        {activeTab === "simulator" && (
          <div className="mb-14">
            <LogicGateSimulator />
          </div>
        )}

        {/* View 2: Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="cyber-card rounded-2xl border border-slate-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between group relative transition-all duration-300"
            >
              {/* Top Accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${
                  proj.accent === "cyan"
                    ? "bg-cyan-500"
                    : proj.accent === "amber"
                    ? "bg-amber-500"
                    : "bg-emerald-500"
                }`}
              />

              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-4 text-xs font-mono">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                      proj.accent === "cyan"
                        ? "bg-cyan-950/60 text-cyan-400 border-cyan-500/30"
                        : proj.accent === "amber"
                        ? "bg-amber-950/60 text-amber-400 border-amber-500/30"
                        : "bg-emerald-950/60 text-emerald-400 border-emerald-500/30"
                    }`}
                  >
                    {proj.tag}
                  </span>

                  {proj.hasInteractiveLab && (
                    <span className="flex items-center gap-1 text-[10px] text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                      <Sparkles className="w-3 h-3 text-cyan-400" /> LIVE DEMO
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>
                <div className="text-xs font-mono text-slate-400 mb-4">
                  {proj.subtitle}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                  {proj.description}
                </p>

                {/* Features Bullet List */}
                <div className="space-y-2 mb-6 text-xs text-slate-300">
                  {proj.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-6">
                  {proj.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#06080E] text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  {proj.hasInteractiveLab ? (
                    <button
                      onClick={() => setActiveTab("simulator")}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-mono font-bold uppercase text-black bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      TEST LIVE LAB
                    </button>
                  ) : (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-mono font-semibold uppercase text-cyan-300 bg-cyan-950/30 border border-cyan-500/30 hover:bg-cyan-900/40 hover:border-cyan-400 transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>REPOSITORY</span>
                    </a>
                  )}

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                    title="View Source on GitHub"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Lab Preview Promo (If in card mode) */}
        {activeTab === "cards" && (
          <div className="mt-12 p-6 rounded-2xl bg-[#0B0F17] border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-950 flex items-center justify-center text-cyan-400 border border-cyan-500/30 shrink-0">
                <Activity className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="text-xs font-mono text-cyan-400">
                  REAL-TIME HARDWARE SIMULATION READY
                </div>
                <div className="text-sm font-semibold text-white">
                  Want to simulate CMOS gates and inspect dynamic truth tables?
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveTab("simulator")}
              className="px-4 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] shrink-0 transition-all"
            >
              LAUNCH GATE SIMULATOR
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
