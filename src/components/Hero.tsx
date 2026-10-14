"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Download,
  ArrowRight,
  Mail,
  Cpu,
  CircuitBoard,
  Layers,
  ShieldCheck,
  Terminal,
  Sparkles,
  MapPin,
  Camera,
  RotateCcw,
  Check,
} from "lucide-react";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [profilePhoto, setProfilePhoto] = useState<string>("/default-avatar.svg");
  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(false);
  const [uploadToast, setUploadToast] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load custom photo from localStorage if previously uploaded
  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem("vaibhav_profile_photo");
      if (savedPhoto) {
        requestAnimationFrame(() => {
          setProfilePhoto(savedPhoto);
          setIsCustomPhoto(true);
        });
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file (PNG, JPG, WEBP, etc.)");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setProfilePhoto(result);
      setIsCustomPhoto(true);
      try {
        localStorage.setItem("vaibhav_profile_photo", result);
        setUploadToast("Profile photo uploaded & saved locally!");
      } catch {
        setUploadToast("Photo active for current session!");
      }
      setTimeout(() => setUploadToast(null), 3500);
    };
    reader.readAsDataURL(file);
  };

  const handleResetPhoto = () => {
    setProfilePhoto("/default-avatar.svg");
    setIsCustomPhoto(false);
    try {
      localStorage.removeItem("vaibhav_profile_photo");
    } catch {
      // Ignore
    }
    setUploadToast("Reverted to default cyber avatar.");
    setTimeout(() => setUploadToast(null), 3000);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Decorative ambient radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Upload Notification Toast */}
      {uploadToast && (
        <div className="fixed top-20 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0B0F17] border border-cyan-500/50 text-cyan-300 font-mono text-xs shadow-[0_0_25px_rgba(6,182,212,0.4)] animate-in slide-in-from-top-2 duration-300">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{uploadToast}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="tracking-wide font-medium">
                TRUECHIP PARTNERED ECE SPECIALIZATION | 1ST YEAR CORE
              </span>
            </div>

            {/* Massive Bold Headline */}
            <div className="space-y-1 mb-4">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>HARDWARE_ARCHITECT // SYSTEM_BUILDER</span>
              </span>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white uppercase font-sans">
                VAIBHAV <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300">MENARIYA</span>
              </h1>
            </div>

            {/* Subhead */}
            <h2 className="text-lg sm:text-xl font-medium text-slate-300 mb-6 leading-relaxed max-w-2xl">
              B.Tech ECE Student{" "}
              <span className="text-cyan-400">|</span> Semiconductor & VLSI Enthusiast{" "}
              <span className="text-cyan-400">|</span> Building in Embedded Systems, Python & Automation
            </h2>

            {/* Bio Description */}
            <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-2xl leading-relaxed">
              Passionate about silicon architecture, physical layer design, and digital logic gates. 
              Bridging the gap between raw transistor logic and software intelligence through Python automation, 
              simulation-driven verification, and embedded hardware engineering.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Amber Download Button */}
              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg font-mono text-xs sm:text-sm font-bold tracking-wider uppercase text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </button>

              {/* Cyan Outlined Button */}
              <a
                href="#projects"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase text-cyan-300 bg-cyan-950/30 border border-cyan-500/40 hover:bg-cyan-900/40 hover:border-cyan-300 hover:text-white shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all duration-200 group"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Glass Slate Button */}
              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-300 bg-slate-900/60 border border-slate-800 hover:bg-slate-800 hover:text-white hover:border-slate-700 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>CONTACT ME</span>
              </a>
            </div>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-slate-800/80 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Udaipur / Jaipur, Rajasthan, India
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400/90 flex items-center gap-1.5">
                <CircuitBoard className="w-3.5 h-3.5" /> TrueChip Partnered Track
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Open to Research & Internships
              </span>
            </div>
          </div>

          {/* Right Column: Cyber Silicon Avatar & Profile Photo with Uploader */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
              {/* Outer Pulsing Circuit Trace Ring */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin [animation-duration:35s]" />
              <div className="absolute -inset-4 rounded-full border border-dashed border-cyan-500/15 animate-spin [animation-duration:50s] [animation-direction:reverse]" />
              
              {/* Silicon Die Substrate Base Card */}
              <div className="relative w-72 h-84 sm:w-80 sm:h-92 rounded-2xl bg-[#0B0F17] border-2 border-cyan-500/40 p-4 shadow-[0_0_60px_rgba(6,182,212,0.25)] flex flex-col justify-between overflow-hidden group">
                {/* Silicon Circuit Header */}
                <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 text-[10px] font-mono text-cyan-400">
                  <span className="flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5" /> DIE_ID: VM-2026-X
                  </span>
                  <span className="text-amber-400">FAB // TRUECHIP_NODE</span>
                </div>

                {/* Profile Photo Display Frame */}
                <div className="relative my-auto flex flex-col items-center justify-center pt-2">
                  <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-xl overflow-hidden border-2 border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.3)] bg-[#06080E] group/photo">
                    {/* The Profile Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={profilePhoto}
                      alt="Vaibhav Menariya Profile"
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/photo:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06080E]/80 via-transparent to-transparent opacity-60 pointer-events-none" />

                    {/* Quick Hover Overlay Upload Trigger */}
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover/photo:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-cyan-300 font-mono text-xs backdrop-blur-xs cursor-pointer"
                      title="Upload your photo"
                    >
                      <Camera className="w-6 h-6 text-cyan-400" />
                      <span>{isCustomPhoto ? "CHANGE PHOTO" : "UPLOAD PHOTO"}</span>
                    </button>
                  </div>

                  {/* Corner Die Pins */}
                  <div className="absolute -top-1 -left-2 flex gap-1">
                    <span className="w-1.5 h-3 bg-cyan-400/60 rounded-xs" />
                    <span className="w-1.5 h-3 bg-cyan-400/60 rounded-xs" />
                  </div>
                  <div className="absolute -bottom-1 -right-2 flex gap-1">
                    <span className="w-1.5 h-3 bg-amber-400/60 rounded-xs" />
                    <span className="w-1.5 h-3 bg-amber-400/60 rounded-xs" />
                  </div>

                  {/* Photo Actions Row */}
                  <div className="mt-3 flex items-center gap-2">
                    {/* Explicit Upload Button */}
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 hover:bg-cyan-900/60 hover:border-cyan-400 hover:text-white transition-all shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                    >
                      <Camera className="w-3 h-3 text-cyan-400" />
                      <span>{isCustomPhoto ? "Change Photo" : "Upload Photo"}</span>
                    </button>

                    {/* Reset Button (only if custom photo uploaded) */}
                    {isCustomPhoto && (
                      <button
                        onClick={handleResetPhoto}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-mono text-slate-400 hover:text-rose-300 bg-slate-900/60 border border-slate-800 hover:border-rose-500/40 transition-all"
                        title="Reset to default cyber avatar"
                      >
                        <RotateCcw className="w-2.5 h-2.5" />
                        <span>Reset</span>
                      </button>
                    )}
                  </div>

                  {/* Hidden File Input */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                    aria-label="Upload profile photo"
                  />
                </div>

                {/* Footer Die Stats */}
                <div className="flex items-center justify-between border-t border-cyan-500/20 pt-2 text-[10px] font-mono text-slate-400">
                  <span>LOGIC: CMOS</span>
                  <span className="text-emerald-400">CLOCK: 100MHz</span>
                  <span>STATUS: SYNC</span>
                </div>
              </div>

              {/* Floating Tag: CORE // ECE */}
              <div className="absolute -bottom-2 -left-3 px-3.5 py-1.5 rounded-lg bg-[#06080E]/90 border border-cyan-500/50 text-cyan-300 font-mono text-xs font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)] backdrop-blur-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                CORE // ECE
              </div>

              {/* Floating Badge: TRUECHIP ECE */}
              <div className="absolute -top-2 -right-3 px-3.5 py-1.5 rounded-lg bg-[#06080E]/90 border border-amber-500/50 text-amber-300 font-mono text-xs font-bold shadow-[0_0_15px_rgba(245,158,11,0.3)] backdrop-blur-md flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                VLSI_TRACK
              </div>
            </div>
          </div>
        </div>

        {/* Key Metric / Stat Cards (4-Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: CORE TRACK */}
          <div className="cyber-card p-5 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors" />
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-2">
              <span className="text-[10px] uppercase tracking-wider text-slate-400">01 // SPECIALIZATION</span>
              <Cpu className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-lg font-bold text-white mb-1 tracking-tight font-mono">
              Semiconductor & VLSI
            </div>
            <p className="text-xs text-slate-400">
              TrueChip Solutions industry partnership syllabus & ASIC design paradigms.
            </p>
          </div>

          {/* Card 2: INSTITUTION */}
          <div className="cyber-card p-5 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors" />
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-2">
              <span className="text-[10px] uppercase tracking-wider text-slate-400">02 // ACADEMIC HUB</span>
              <Layers className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-lg font-bold text-white mb-1 tracking-tight font-mono">
              JECRC University
            </div>
            <p className="text-xs text-slate-400">
              Jaipur, Rajasthan — 4-Year B.Tech in Electronics & Communication.
            </p>
          </div>

          {/* Card 3: STREAM FOCUS */}
          <div className="cyber-card p-5 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-amber-500/40 group-hover:bg-amber-400 transition-colors" />
            <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-2">
              <span className="text-[10px] uppercase tracking-wider text-slate-400">03 // ENGINEERING DOMAIN</span>
              <CircuitBoard className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-lg font-bold text-white mb-1 tracking-tight font-mono text-amber-300">
              Digital & Embedded Logic
            </div>
            <p className="text-xs text-slate-400">
              Boolean reduction, logic gate modeling, signal routing & microcontrollers.
            </p>
          </div>

          {/* Card 4: CURRENT STATUS */}
          <div className="cyber-card p-5 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-emerald-500/40 group-hover:bg-emerald-400 transition-colors" />
            <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-2">
              <span className="text-[10px] uppercase tracking-wider text-slate-400">04 // SYSTEM STATUS</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="text-lg font-bold text-white mb-1 tracking-tight font-mono text-emerald-300">
              Active Builder & Student
            </div>
            <p className="text-xs text-slate-400">
              1st Year Core — Building algorithms, electronic prototypes & scripts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
