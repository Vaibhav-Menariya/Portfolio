"use client";

import React from "react";
import { Calendar, MapPin, Building, CheckCircle, ShieldCheck } from "lucide-react";

export default function Education() {
  const educationItems = [
    {
      degree: "B.Tech in Electronics & Communication Engineering (ECE)",
      specialization: "Semiconductor & VLSI Specialization (in partnership with TrueChip)",
      institution: "JECRC University",
      location: "Jaipur, Rajasthan, India",
      timeline: "2026 — 2030",
      statusBadge: "Current // 1st Year Core",
      statusColor: "cyan",
      highlights: [
        "Industry-aligned curriculum designed in collaboration with TrueChip Solutions.",
        "Deep foundation in Semiconductor Physics, Carrier Transport, and Band Theory.",
        "Digital System Design: Boolean algebra, logic gates, combinational and sequential synthesis.",
        "Hands-on lab work in Basic Electronic Engineering, circuit analysis, and instrumentation.",
        "Active member and contributor in campus robotics and electronics engineering clubs.",
      ],
      tags: ["Semiconductor Physics", "Digital Logic", "TrueChip VLSI", "C Programming", "Circuit Theory"],
    },
    {
      degree: "Senior Secondary Education (Class 12th — RBSE)",
      specialization: "Science Stream (Physics, Chemistry, Mathematics)",
      institution: "Mahaveer Academy",
      location: "Udaipur, Rajasthan, India",
      timeline: "Completed",
      statusBadge: "RBSE Board Verified",
      statusColor: "amber",
      highlights: [
        "Rigorous training in Advanced Mathematics: Differential Calculus, Integral Calculus, Vectors, and Matrices.",
        "Comprehensive Physics: Electromagnetism, Semiconductor diodes, Modern Physics, and Optics.",
        "Chemistry: Physical Chemistry, Thermodynamics, Electrochemistry, and Atomic Structure.",
        "Built disciplined analytical reasoning and problem-solving fundamentals for core engineering.",
      ],
      tags: ["Physics (Electromagnetics)", "Calculus & Algebra", "Analytical Logic", "RBSE Board"],
    },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#06080E]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>{"// 02. ACADEMIC PIPELINE"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Formal Education &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300">
              Credentials
            </span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-3xl text-sm sm:text-base leading-relaxed">
            The foundational lineage: from rigorous secondary mathematics and physics in Udaipur to specialized
            semiconductor and VLSI engineering in Jaipur.
          </p>
        </div>

        {/* Timeline Pipeline Layout */}
        <div className="relative border-l-2 border-cyan-500/20 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {educationItems.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Junction Node */}
              <div
                className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-[#06080E] border-2 flex items-center justify-center transition-all ${
                  item.statusColor === "cyan"
                    ? "border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                    : "border-amber-400 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    item.statusColor === "cyan" ? "bg-cyan-400" : "bg-amber-400"
                  }`}
                />
              </div>

              {/* Education Card */}
              <div className="cyber-card p-6 md:p-8 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 relative">
                {/* Header row with badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono font-semibold flex items-center gap-1.5 ${
                        item.statusColor === "cyan"
                          ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                          : "bg-amber-500/10 text-amber-300 border border-amber-500/30"
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {item.statusBadge}
                    </span>

                    <span className="flex items-center gap-1 text-xs font-mono text-slate-400 bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {item.timeline}
                    </span>
                  </div>

                  <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {item.location}
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {item.degree}
                </h3>

                {/* Subheading / Specialization */}
                <div className="text-sm sm:text-base font-semibold text-cyan-300 mb-2 font-mono flex items-center gap-2">
                  <Building className="w-4 h-4 text-cyan-400" />
                  <span>{item.institution}</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-amber-300">{item.specialization}</span>
                </div>

                {/* Highlights List */}
                <div className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-300">
                  {item.highlights.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#0B0F17] text-slate-400 border border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
