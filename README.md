# Vaibhav Menariya — Engineering Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-16.4-cyan?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-f59e0b?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

A production-grade, highly responsive, high-performance personal portfolio website for **Vaibhav Menariya**, B.Tech 1st Year ECE student specializing in Semiconductor & VLSI in partnership with **TrueChip** at **JECRC University, Jaipur**.

---

## ⚡ Visual Theme & Aesthetic Direction
- **Cyber-Silicon Hardware Aesthetic**: Inspired by advanced semiconductor verification workstations, EDA dashboards, and CMOS layout architectures.
- **Palette**: Deep void slate (`#06080E`, `#0B0F17`), Electric Cyan (`#06B6D4`, `#38BDF8`), Amber Gold (`#F59E0B`), and Silicon Green (`#10B981`).
- **Interactive Circuit Canvas**: Real-time canvas rendering interconnected grid traces, traveling signal pulses, and proximity cursor attraction.
- **Interactive CMOS Logic Gate Simulator**: In-page hardware lab letting visitors toggle digital inputs (A, B), select logic gates (AND, OR, XOR, NAND, NOR, XNOR, NOT), and observe dynamic truth table row highlighting and schematic wire states.

---

## 📁 Project Architecture & Components

```text
├── public/
│   ├── resume.pdf           # Downloadable vector PDF resume payload
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css      # Cyber theme tokens, circuit-grid, and glow classes
│   │   ├── layout.tsx       # Root layout with Geist & JetBrains Mono fonts and SEO metadata
│   │   └── page.tsx         # Main single-page application assembler
│   ├── components/
│   │   ├── CircuitBackground.tsx   # Canvas circuit traces & traveling signal pulses
│   │   ├── Navbar.tsx              # Sticky header with status pill and mobile drawer
│   │   ├── Hero.tsx                # Status pill, avatar die badge, CTA group, 4-grid metrics
│   │   ├── About.tsx               # Architectural profile, trajectory, and interactive terminal
│   │   ├── Education.tsx           # Academic pipeline timeline (JECRC University & Mahaveer Academy)
│   │   ├── Skills.tsx              # Categorized skills matrix with filter tabs and efficiency bars
│   │   ├── Projects.tsx            # Featured projects, code viewer, and lab mode toggle
│   │   ├── LogicGateSimulator.tsx  # Hands-on interactive digital logic gate simulator
│   │   ├── Interests.tsx           # Esports latency mechanics, robotics, and client modding
│   │   ├── Contact.tsx             # Direct channels, clipboard copy, and transmission form
│   │   ├── Footer.tsx              # Monospace status indicator and jump-to-top button
│   │   ├── Icons.tsx               # Lightweight SVG brand icons (GitHub, LinkedIn)
│   │   └── ResumeModal.tsx         # Fallback preview modal with direct download options
│   └── lib/
│       └── utils.ts                # Class merging utility
```

---

## 🚀 Quickstart Guide

### 1. Installation
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm start
```

### 4. Zero-Config Vercel Deployment
Deploy directly to Vercel with zero configuration:
```bash
npx vercel
```
or connect the GitHub repository on [vercel.com](https://vercel.com) — framework detection is automatic.

---

## 👨‍💻 Candidate Details
- **Name**: Vaibhav Menariya
- **Role**: B.Tech 1st Year ECE (Semiconductor & VLSI Specialization in partnership with TrueChip)
- **University**: JECRC University, Jaipur, Rajasthan, India
- **School**: Mahaveer Academy (RBSE), Udaipur, Rajasthan, India
- **Phone**: +91 7742451445
- **Email**: vaibhavmenariafnr@gmail.com
- **LinkedIn**: [linkedin.com/in/vaibhav-menariya-72b710433](https://www.linkedin.com/in/vaibhav-menariya-72b710433)
