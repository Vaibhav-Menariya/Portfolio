"use client";

import React, { useState } from "react";
import { X, Download, ExternalLink, Check, FileText, Cpu, ShieldCheck, Eye } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState<"summary" | "preview">("summary");

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + "/resume.pdf");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPdf = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDownloading(true);
    try {
      // Cache-busting fetch guarantees fresh non-empty payload
      const response = await fetch(`/resume.pdf?t=${Date.now()}`);
      if (!response.ok) throw new Error("Network error fetching resume");
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const tempLink = document.createElement("a");
      tempLink.href = blobUrl;
      tempLink.download = "Vaibhav_Menariya_Resume.pdf";
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      window.open("/resume.pdf", "_blank");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#0B0F17] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.25)] p-6 md:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-amber-500 to-emerald-500" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                  SYSTEM // DOCUMENT DISPATCH
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> VERIFIED 2026
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Vaibhav Menariya — Curriculum Vitae
              </h3>
            </div>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center p-1 rounded-lg bg-[#06080E] border border-slate-800">
            <button
              onClick={() => setActiveTab("summary")}
              className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                activeTab === "summary"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Summary
            </button>
            <button
              onClick={() => setActiveTab("preview")}
              className={`px-3 py-1 rounded text-xs font-mono transition-all flex items-center gap-1 ${
                activeTab === "preview"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Eye className="w-3 h-3" />
              Full Preview
            </button>
          </div>
        </div>

        {activeTab === "summary" ? (
          <>
            {/* Summary Card */}
            <div className="bg-[#06080E]/90 border border-slate-800 rounded-xl p-5 mb-6 space-y-3 font-mono text-xs text-slate-300">
              <div className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-500">CANDIDATE</span>
                <span className="text-cyan-300 font-semibold">Vaibhav Menariya</span>
              </div>
              <div className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-500">PROGRAM</span>
                <span className="text-white text-right">B.Tech ECE (TrueChip VLSI Specialization)</span>
              </div>
              <div className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-500">INSTITUTION</span>
                <span className="text-slate-300">JECRC University, Jaipur (2026 — 2030)</span>
              </div>
              <div className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-500">PREVIOUS EDUCATION</span>
                <span className="text-slate-300">Mahaveer Academy, Udaipur (12th RBSE Science)</span>
              </div>
              <div className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-500">SPECIALIZATION</span>
                <span className="text-amber-400">Semiconductor & VLSI System Design</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">FILE STATUS</span>
                <span className="text-emerald-400 font-semibold">Ready // Verified PDF Payload (4.8 KB)</span>
              </div>
            </div>

            {/* Verification Notice */}
            <div className="p-3 bg-cyan-950/30 border border-cyan-500/20 rounded-lg text-xs text-cyan-300/90 mb-6 flex items-start gap-2.5">
              <Cpu className="w-4 h-4 mt-0.5 shrink-0 text-cyan-400" />
              <p>
                The PDF resume includes comprehensive documentation of coursework, TrueChip industry alignment, 
                hardware skills matrix, and engineered system prototypes.
              </p>
            </div>
          </>
        ) : (
          /* Full In-Browser Text Preview */
          <div className="bg-[#06080E] border border-slate-800 rounded-xl p-5 mb-6 max-h-[380px] overflow-y-auto font-mono text-xs text-slate-300 space-y-4">
            <div className="border-b border-cyan-500/30 pb-3">
              <h4 className="text-sm font-bold text-white">VAIBHAV MENARIYA</h4>
              <p className="text-cyan-400 text-[11px]">B.Tech ECE (Semiconductor & VLSI) | JECRC University & TrueChip</p>
              <p className="text-slate-400 text-[10px]">Email: vaibhavmenariafnr@gmail.com | Phone: +91 7742451445 | Udaipur / Jaipur</p>
            </div>

            <div>
              <div className="text-cyan-300 font-bold mb-1">{"// 1. ACADEMIC PIPELINE"}</div>
              <p className="text-white font-semibold">• B.Tech ECE (Semiconductor & VLSI) — JECRC University (2026 — 2030)</p>
              <p className="text-slate-400 text-[11px] ml-3">Industry-aligned syllabus with TrueChip Solutions; Semiconductor Physics, Digital Systems, CMOS design.</p>
              <p className="text-white font-semibold mt-2">• Senior Secondary (Class XII) — Mahaveer Academy, Udaipur (RBSE)</p>
              <p className="text-slate-400 text-[11px] ml-3">Science Stream (Physics, Chemistry, Mathematics); Foundations in Calculus and Electromagnetism.</p>
            </div>

            <div>
              <div className="text-cyan-300 font-bold mb-1">{"// 2. TECHNICAL ARSENAL"}</div>
              <p className="text-slate-300">• <strong className="text-white">Hardware:</strong> Semiconductor Physics, Digital Logic Gates, Circuit Analysis, ASIC Design Flow</p>
              <p className="text-slate-300">• <strong className="text-white">Programming:</strong> Python (Automation & Hardware Signal Telemetry), C Programming, Bash/Shell</p>
              <p className="text-slate-300">• <strong className="text-white">Tools:</strong> Multisim, SPICE primers, VS Code, Git, GitHub, Linux</p>
            </div>

            <div>
              <div className="text-cyan-300 font-bold mb-1">{"// 3. PROJECTS & PROTOTYPES"}</div>
              <p className="text-white font-semibold">• Digital Circuit Simulator & Logic Analyzer</p>
              <p className="text-slate-400 text-[11px] ml-3">Web-based CMOS gate simulation with real-time truth tables and circuit wire lighting.</p>
              <p className="text-white font-semibold mt-1">• Automated Task & Hardware Signal Logger</p>
              <p className="text-slate-400 text-[11px] ml-3">Python automation script for data signal sampling, voltage anomaly tracking, and telemetry logging.</p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleDownloadPdf}
            disabled={isDownloading}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all cursor-pointer disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            <span>{isDownloading ? "DOWNLOADING PAYLOAD..." : "DOWNLOAD RESUME (PDF)"}</span>
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-mono text-xs uppercase tracking-wider font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-900/40 hover:border-cyan-400 transition-all"
          >
            <ExternalLink className="w-4 h-4" /> Open Direct PDF
          </a>

          <button
            onClick={handleCopyLink}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" /> Copied Link
              </>
            ) : (
              "Copy Direct Link"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
