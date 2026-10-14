"use client";

import React, { useState } from "react";
import { Cpu, Zap, Activity, Check } from "lucide-react";

type GateType = "AND" | "OR" | "XOR" | "NAND" | "NOR" | "XNOR" | "NOT";

export default function LogicGateSimulator() {
  const [gate, setGate] = useState<GateType>("AND");
  const [inputA, setInputA] = useState<boolean>(true);
  const [inputB, setInputB] = useState<boolean>(false);

  // Compute output
  const computeOutput = (g: GateType, a: boolean, b: boolean): boolean => {
    switch (g) {
      case "AND":
        return a && b;
      case "OR":
        return a || b;
      case "XOR":
        return a !== b;
      case "NAND":
        return !(a && b);
      case "NOR":
        return !(a || b);
      case "XNOR":
        return a === b;
      case "NOT":
        return !a;
      default:
        return false;
    }
  };

  const output = computeOutput(gate, inputA, inputB);

  // Truth table generator
  const getTruthTable = () => {
    if (gate === "NOT") {
      return [
        { a: false, b: null, y: true },
        { a: true, b: null, y: false },
      ];
    }
    return [
      { a: false, b: false, y: computeOutput(gate, false, false) },
      { a: false, b: true, y: computeOutput(gate, false, true) },
      { a: true, b: false, y: computeOutput(gate, true, false) },
      { a: true, b: true, y: computeOutput(gate, true, true) },
    ];
  };

  const getEquation = () => {
    switch (gate) {
      case "AND":
        return "Y = A • B";
      case "OR":
        return "Y = A + B";
      case "XOR":
        return "Y = A ⊕ B";
      case "NAND":
        return "Y = (A • B)'";
      case "NOR":
        return "Y = (A + B)'";
      case "XNOR":
        return "Y = (A ⊕ B)'";
      case "NOT":
        return "Y = A'";
    }
  };

  return (
    <div className="bg-[#0B0F17]/95 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(6,182,212,0.15)] relative overflow-hidden">
      {/* Silicon Accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-400 to-amber-400" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>INTERACTIVE HARDWARE LAB // GATE_SIM_v1.0</span>
          </div>
          <h3 className="text-xl font-bold text-white mt-1">
            Digital Logic Analyzer & Gate Playground
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
            EQUATION: {getEquation()}
          </span>
        </div>
      </div>

      {/* Gate Selectors */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs font-mono text-slate-400 mr-2">SELECT GATE:</span>
        {(["AND", "OR", "XOR", "NAND", "NOR", "XNOR", "NOT"] as GateType[]).map((g) => (
          <button
            key={g}
            onClick={() => setGate(g)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              gate === g
                ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.5)] scale-105"
                : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Main Interactive Circuit Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#06080E] p-6 rounded-xl border border-slate-800/80 mb-6">
        {/* Inputs Column */}
        <div className="lg:col-span-3 space-y-4">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
            DIGITAL INPUT BUS
          </div>

          {/* Toggle A */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-[#0D131F] border border-cyan-500/20">
            <span className="font-mono text-xs font-semibold text-white">INPUT A</span>
            <button
              onClick={() => setInputA(!inputA)}
              className={`px-3 py-1 rounded font-mono text-xs font-bold transition-all ${
                inputA
                  ? "bg-cyan-400 text-black shadow-[0_0_12px_rgba(6,182,212,0.6)]"
                  : "bg-slate-800 text-slate-400"
              }`}
            >
              {inputA ? "HIGH (1)" : "LOW (0)"}
            </button>
          </div>

          {/* Toggle B (Disabled if NOT gate) */}
          {gate !== "NOT" && (
            <div className="flex items-center justify-between p-3 rounded-lg bg-[#0D131F] border border-cyan-500/20">
              <span className="font-mono text-xs font-semibold text-white">INPUT B</span>
              <button
                onClick={() => setInputB(!inputB)}
                className={`px-3 py-1 rounded font-mono text-xs font-bold transition-all ${
                  inputB
                    ? "bg-cyan-400 text-black shadow-[0_0_12px_rgba(6,182,212,0.6)]"
                    : "bg-slate-800 text-slate-400"
                }`}
              >
                {inputB ? "HIGH (1)" : "LOW (0)"}
              </button>
            </div>
          )}
        </div>

        {/* Schematic Gate Visualization */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center py-4">
          <div className="relative flex items-center justify-center w-full max-w-sm">
            {/* Input wire traces */}
            <div className="flex flex-col justify-around h-24 mr-2">
              <div
                className={`w-12 h-1 transition-colors duration-200 ${
                  inputA ? "bg-cyan-400 shadow-[0_0_8px_#38bdf8]" : "bg-slate-800"
                }`}
              />
              {gate !== "NOT" && (
                <div
                  className={`w-12 h-1 transition-colors duration-200 ${
                    inputB ? "bg-cyan-400 shadow-[0_0_8px_#38bdf8]" : "bg-slate-800"
                  }`}
                />
              )}
            </div>

            {/* Central Logic Gate Die Symbol */}
            <div className="w-28 h-24 rounded-xl bg-gradient-to-br from-cyan-950 via-[#0B0F17] to-slate-900 border-2 border-cyan-500/50 flex flex-col items-center justify-center p-2 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <Cpu className="w-7 h-7 text-cyan-300 mb-1 animate-pulse" />
              <span className="font-mono text-sm font-extrabold text-white tracking-widest">
                {gate}
              </span>
              <span className="font-mono text-[9px] text-cyan-400">CMOS // 5nm</span>
            </div>

            {/* Output wire trace */}
            <div className="ml-2">
              <div
                className={`w-14 h-1 transition-colors duration-200 ${
                  output ? "bg-amber-400 shadow-[0_0_10px_#f59e0b]" : "bg-slate-800"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Output LED & Meter */}
        <div className="lg:col-span-3 space-y-3">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
            OUTPUT VOLTAGE / LOGIC
          </div>

          <div
            className={`p-4 rounded-xl border flex flex-col items-center justify-center transition-all ${
              output
                ? "bg-amber-500/10 border-amber-500/50 shadow-[0_0_25px_rgba(245,158,11,0.25)]"
                : "bg-slate-900/40 border-slate-800"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all ${
                output
                  ? "bg-amber-400 text-black shadow-[0_0_25px_#f59e0b] scale-110"
                  : "bg-slate-800 text-slate-600"
              }`}
            >
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <div
              className={`font-mono text-lg font-bold ${
                output ? "text-amber-400" : "text-slate-500"
              }`}
            >
              {output ? "LOGIC 1 (3.3V)" : "LOGIC 0 (0.0V)"}
            </div>
            <span className="text-[10px] font-mono text-slate-400 mt-1">
              STATUS: {output ? "HIGH IMPEDANCE" : "GROUND SINK"}
            </span>
          </div>
        </div>
      </div>

      {/* Truth Table Live Highlighter */}
      <div className="bg-[#06080E]/70 p-4 rounded-xl border border-slate-800">
        <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
          <span>DYNAMIC TRUTH TABLE (CURRENT STATE HIGHLIGHTED)</span>
          <span className="text-cyan-400">GATE: {gate}</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-center font-mono text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-500">
                <th className="py-2">INPUT A</th>
                {gate !== "NOT" && <th className="py-2">INPUT B</th>}
                <th className="py-2 text-cyan-400">OUTPUT (Y)</th>
                <th className="py-2">STATE</th>
              </tr>
            </thead>
            <tbody>
              {getTruthTable().map((row, idx) => {
                const isActiveRow =
                  gate === "NOT"
                    ? row.a === inputA
                    : row.a === inputA && row.b === inputB;

                return (
                  <tr
                    key={idx}
                    className={`border-b border-slate-900/60 transition-colors ${
                      isActiveRow
                        ? "bg-cyan-500/20 text-cyan-200 font-bold"
                        : "text-slate-400 hover:bg-slate-900/40"
                    }`}
                  >
                    <td className="py-2">{row.a ? "1" : "0"}</td>
                    {gate !== "NOT" && <td className="py-2">{row.b ? "1" : "0"}</td>}
                    <td
                      className={`py-2 font-bold ${
                        row.y ? "text-amber-400" : "text-slate-500"
                      }`}
                    >
                      {row.y ? "1" : "0"}
                    </td>
                    <td className="py-2">
                      {isActiveRow ? (
                        <span className="inline-flex items-center gap-1 text-[10px] text-cyan-300">
                          <Check className="w-3 h-3" /> ACTIVE
                        </span>
                      ) : (
                        <span className="text-slate-600 text-[10px]">IDLE</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
