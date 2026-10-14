"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Terminal,
  Activity,
  ShieldCheck,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate cyber packet transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#06080E]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>{"// 06. TRANSMISSION"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Initialize{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300">
              Communication
            </span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Interested in collaborating on semiconductor research, digital logic simulation, or automation
            tooling? Transmit a packet below or connect directly.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Quick Contact Cards & Socials */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Channel: Email Card */}
            <div className="cyber-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 relative group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">
                      ELECTRONIC MAIL // PRIMARY
                    </div>
                    <div className="text-sm font-semibold text-white font-mono break-all mt-0.5">
                      vaibhavmenariafnr@gmail.com
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy("vaibhavmenariafnr@gmail.com", "email")}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Direct Channel: Phone Card */}
            <div className="cyber-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 relative group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-950/80 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">
                      VOICE & WHATSAPP BUS
                    </div>
                    <div className="text-sm font-semibold text-white font-mono mt-0.5">
                      +91 7742451445
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy("+917742451445", "phone")}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-slate-400 hover:text-amber-300 transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="cyber-card p-6 rounded-2xl border border-slate-800 relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">
                    PHYSICAL GEO-COORDINATES
                  </div>
                  <div className="text-sm font-semibold text-white font-mono mt-0.5">
                    Udaipur / Jaipur, Rajasthan, India
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Social Links */}
            <div className="p-6 rounded-2xl bg-[#0B0F17] border border-cyan-500/20 space-y-3">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" /> DIRECT SOCIAL NODES
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://www.linkedin.com/in/vaibhav-menariya-72b710433"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-[#06080E] border border-slate-800 hover:border-cyan-500/50 hover:bg-cyan-950/30 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-all group"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>LINKEDIN</span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-[#06080E] border border-slate-800 hover:border-cyan-500/50 hover:bg-cyan-950/30 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-all group"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>GITHUB</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="cyber-card p-6 sm:p-8 rounded-2xl border border-cyan-500/30 bg-[#0B0F17]/95 relative">
              {/* Form header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Activity className="w-4 h-4" />
                  <span>TRANSMISSION_PROTOCOL // SECURE_PORT_443</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> ENCRYPTED
                </span>
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-mono">
                    TRANSMISSION DISPATCHED SUCCESSFULLY
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md font-mono leading-relaxed">
                    Packet acknowledged by Vaibhav Menariya. Thank you for connecting. I will review and
                    respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                  >
                    SEND ANOTHER PACKET
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                        SENDER IDENTIFIER / NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Dr. K. Sharma / John Doe"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#06080E] border border-slate-800 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/50 text-white text-xs font-mono outline-none transition-all placeholder:text-slate-600"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                        RETURN ADDRESS / EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. colleague@semiconductor.org"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#06080E] border border-slate-800 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/50 text-white text-xs font-mono outline-none transition-all placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                      SIGNAL SUBJECT / PURPOSE *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. Collaboration on Semiconductor Verification / Internship"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#06080E] border border-slate-800 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/50 text-white text-xs font-mono outline-none transition-all placeholder:text-slate-600"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                      TRANSMISSION PAYLOAD / MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Enter detailed message, query, project proposal or feedback..."
                      className="w-full px-4 py-3 rounded-lg bg-[#06080E] border border-slate-800 focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/50 text-white text-xs font-mono outline-none transition-all placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg font-mono text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300 hover:from-cyan-300 hover:to-amber-200 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Activity className="w-4 h-4 animate-spin text-black" />
                        <span>ENCRYPTING & DISPATCHING PACKET...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>TRANSMIT PACKET NOW</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
