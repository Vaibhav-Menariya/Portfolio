"use client";

import React from "react";
import { Cpu, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-cyan-500/20 bg-[#06080E] py-12 overflow-hidden text-xs font-mono">
      {/* Background Circuit Grid Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#0B0F17] border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white tracking-wider text-sm">
                VAIBHAV<span className="text-cyan-400">.</span>MENARIYA
              </div>
              <div className="text-[10px] text-cyan-400/80">
                ECE // SEMICONDUCTOR & VLSI SPECIALIZATION
              </div>
            </div>
          </div>

          {/* System Status Indicator */}
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0B0F17] border border-emerald-500/30 text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-bold tracking-wider text-[11px]">
              SYSTEM: ONLINE // ALL CIRCUITS OPERATIONAL
            </span>
          </div>

          {/* Quick Jump-to-Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0B0F17] border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 transition-all"
            aria-label="Scroll to top"
          >
            <span>RETURN_TO_APEX</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Bottom Metadata & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; 2026 Vaibhav Menariya. All rights reserved. Built with Next.js, Tailwind CSS & Framer Motion.
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <span>DIE_REV: 1.0.4</span>
            <span>•</span>
            <span className="text-cyan-400/90">TRUECHIP PARTNERED ECE</span>
            <span>•</span>
            <span>JECRC UNIVERSITY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
