"use client";

import React from "react";
import { Gamepad2, Bot, Wrench, Terminal } from "lucide-react";

export default function Interests() {
  const interestsList = [
    {
      title: "Competitive Gaming Mechanics",
      tag: "PERFORMANCE // LATENCY",
      icon: Gamepad2,
      accent: "cyan",
      description:
        "Deep analytical curiosity in competitive esports engine architectures, frame pacing, 1% low frame optimization, input-polling rates, and network latency jitter compensation.",
      metrics: ["Sub-millisecond Polling", "Tickrate Analysis", "Tactical Execution"],
    },
    {
      title: "Robotics & Microcontroller Prototyping",
      tag: "HARDWARE // EMBEDDED",
      icon: Bot,
      accent: "emerald",
      description:
        "Building sensor-driven hardware loops using microcontrollers (Arduino/ESP32/Raspberry Pi). Exploring motor drivers, PWM modulation, and ADC sensor calibration.",
      metrics: ["I2C / SPI Buses", "PWM Drivers", "UART Telemetry"],
    },
    {
      title: "Custom Client Architecture & Modding",
      tag: "SYSTEMS // REVERSE ENG",
      icon: Wrench,
      accent: "amber",
      description:
        "Investigating runtime memory models, client asset pipelines, and building productivity mods or performance patches to squeeze maximum throughput out of constrained hardware.",
      metrics: ["Memory Profiling", "Asset Pipelines", "Performance Patches"],
    },
    {
      title: "Workflow Automation & CLI Tooling",
      tag: "ORCHESTRATION // PYTHON",
      icon: Terminal,
      accent: "sky",
      description:
        "Automating repetitive computing tasks with lightweight Python daemon scripts, keyboard macros, regex parsers, and custom terminal dashboards.",
      metrics: ["Daemon Scripts", "Automated Pipelines", "Rapid Prototyping"],
    },
  ];

  return (
    <section id="interests" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>{"// 05. EXTRA-CURRICULAR & INTERESTS"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Systems Beyond The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300">
              Classroom
            </span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Exploring low-latency gaming mechanics, physical robotics prototypes, and custom script automation
            that sharpen engineering instincts.
          </p>
        </div>

        {/* Interests 4-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interestsList.map((item, idx) => {
            const Icon = item.icon;
            const isCyan = item.accent === "cyan";
            const isEmerald = item.accent === "emerald";
            const isAmber = item.accent === "amber";

            return (
              <div
                key={idx}
                className="cyber-card p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/40 relative group transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${
                      isCyan
                        ? "bg-cyan-950/80 text-cyan-400 border-cyan-500/30 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                        : isEmerald
                        ? "bg-emerald-950/80 text-emerald-400 border-emerald-500/30 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                        : isAmber
                        ? "bg-amber-950/80 text-amber-400 border-amber-500/30 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                        : "bg-sky-950/80 text-sky-400 border-sky-500/30 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span
                    className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold border ${
                      isCyan
                        ? "bg-cyan-950/40 text-cyan-400 border-cyan-500/30"
                        : isEmerald
                        ? "bg-emerald-950/40 text-emerald-400 border-emerald-500/30"
                        : isAmber
                        ? "bg-amber-950/40 text-amber-400 border-amber-500/30"
                        : "bg-sky-950/40 text-sky-400 border-sky-500/30"
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Metrics Chips */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {item.metrics.map((metric, mIdx) => (
                    <span
                      key={mIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#06080E] text-slate-300 border border-slate-800"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
