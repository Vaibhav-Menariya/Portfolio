import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateRichResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 dimensions
  const { width, height } = page.getSize();

  // Load fonts
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Palette
  const darkNavy = rgb(0.04, 0.07, 0.12); // #0a111f
  const accentCyan = rgb(0.02, 0.65, 0.82); // #06B6D4
  const accentAmber = rgb(0.92, 0.60, 0.08); // #F59E0B
  const textDark = rgb(0.12, 0.16, 0.22);
  const textMuted = rgb(0.35, 0.40, 0.48);
  const borderLight = rgb(0.85, 0.88, 0.92);

  // Top header accent banner
  page.drawRectangle({
    x: 0,
    y: height - 100,
    width: width,
    height: 100,
    color: darkNavy,
  });

  // Cyan accent line below header
  page.drawRectangle({
    x: 0,
    y: height - 104,
    width: width,
    height: 4,
    color: accentCyan,
  });

  // Candidate Name
  page.drawText("VAIBHAV MENARIYA", {
    x: 40,
    y: height - 42,
    size: 22,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  // Role subtitle
  page.drawText("B.Tech in Electronics & Communication Engineering (ECE) — Semiconductor & VLSI Specialization", {
    x: 40,
    y: height - 60,
    size: 10.5,
    font: fontRegular,
    color: rgb(0.22, 0.74, 0.97),
  });

  // Partnership & Institution
  page.drawText("JECRC University, Jaipur | In Industry Partnership with TrueChip Solutions", {
    x: 40,
    y: height - 76,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.85, 0.90, 0.95),
  });

  // Contact Row below banner
  let currentY = height - 126;

  const contactText = "Email: vaibhavmenariafnr@gmail.com  |  Phone: +91 7742451445  |  Location: Udaipur / Jaipur, Rajasthan, India";
  page.drawText(contactText, {
    x: 40,
    y: currentY,
    size: 8.5,
    font: fontRegular,
    color: textMuted,
  });

  const linksText = "LinkedIn: linkedin.com/in/vaibhav-menariya-72b710433  |  GitHub: github.com";
  currentY -= 14;
  page.drawText(linksText, {
    x: 40,
    y: currentY,
    size: 8.5,
    font: fontRegular,
    color: textMuted,
  });

  // Divider
  currentY -= 12;
  page.drawLine({
    start: { x: 40, y: currentY },
    end: { x: width - 40, y: currentY },
    thickness: 1,
    color: borderLight,
  });

  // Helper function to draw section headings
  function drawSectionHeading(title) {
    currentY -= 22;
    page.drawText(title.toUpperCase(), {
      x: 40,
      y: currentY,
      size: 11,
      font: fontBold,
      color: darkNavy,
    });

    // underline accent
    page.drawLine({
      start: { x: 40, y: currentY - 4 },
      end: { x: width - 40, y: currentY - 4 },
      thickness: 1.2,
      color: accentCyan,
    });
    currentY -= 14;
  }

  // 1. EXECUTIVE / ACADEMIC PROFILE
  drawSectionHeading("1. Architectural Profile & Objective");
  const summaryLines = [
    "Motivated first-year Electronics & Communication Engineering undergraduate at JECRC University, pursuing a specialized",
    "industry-partnered curriculum in Semiconductor & VLSI System Design with TrueChip Solutions. Solid foundations in digital logic",
    "gate modeling, PN junction physics, and procedural programming. Actively developing Python automated hardware telemetry tools",
    "and simulation prototypes to bridge the gap between physical silicon design and modern software orchestration."
  ];
  for (const line of summaryLines) {
    page.drawText(line, {
      x: 40,
      y: currentY,
      size: 9,
      font: fontRegular,
      color: textDark,
    });
    currentY -= 13;
  }

  // 2. EDUCATION & ACADEMIC PIPELINE
  drawSectionHeading("2. Formal Education & Pipeline");

  // Degree 1: JECRC
  page.drawText("Bachelor of Technology (B.Tech) — Electronics & Communication Engineering", {
    x: 40,
    y: currentY,
    size: 10,
    font: fontBold,
    color: darkNavy,
  });
  page.drawText("2026 — 2030 (Current // 1st Year)", {
    x: width - 180,
    y: currentY,
    size: 9,
    font: fontBold,
    color: accentCyan,
  });
  currentY -= 13;

  page.drawText("JECRC University, Jaipur  —  Semiconductor & VLSI Specialization (in partnership with TrueChip)", {
    x: 40,
    y: currentY,
    size: 9,
    font: fontOblique,
    color: textMuted,
  });
  currentY -= 13;

  const jecrcBullets = [
    "• Industry-aligned curriculum designed in collaboration with TrueChip Solutions (EDA workflows & verification paradigms).",
    "• Core Coursework: Semiconductor Physics, Digital System Design, Boolean Logic Synthesis, Circuit Analysis, and C Programming.",
    "• Active hands-on lab experimentation with circuit instrumentation, breadboard prototyping, and logic ICs.",
    "• Active participant in university technical clubs, hardware hackathons, and electronics design groups."
  ];
  for (const b of jecrcBullets) {
    page.drawText(b, { x: 48, y: currentY, size: 8.5, font: fontRegular, color: textDark });
    currentY -= 12;
  }

  currentY -= 4;
  // Degree 2: 12th RBSE
  page.drawText("Senior Secondary Education (Class XII — RBSE Board)", {
    x: 40,
    y: currentY,
    size: 10,
    font: fontBold,
    color: darkNavy,
  });
  page.drawText("Completed", {
    x: width - 90,
    y: currentY,
    size: 9,
    font: fontBold,
    color: accentAmber,
  });
  currentY -= 13;

  page.drawText("Mahaveer Academy, Udaipur, Rajasthan  —  Science Stream (Physics, Chemistry, Mathematics)", {
    x: 40,
    y: currentY,
    size: 9,
    font: fontOblique,
    color: textMuted,
  });
  currentY -= 13;

  const schoolBullets = [
    "• Built strong fundamentals in differential & integral calculus, electromagnetic wave theory, semiconductor diodes, and vector algebra.",
    "• Developed disciplined analytical reasoning and mathematical logic foundational to engineering computation."
  ];
  for (const b of schoolBullets) {
    page.drawText(b, { x: 48, y: currentY, size: 8.5, font: fontRegular, color: textDark });
    currentY -= 12;
  }

  // 3. TECHNICAL ARSENAL
  drawSectionHeading("3. Technical Arsenal & Skills Matrix");
  const skillsMatrix = [
    { cat: "Hardware & VLSI Core:", items: "Semiconductor Physics, Digital Logic Gates, Boolean Minimization, CMOS Basics, ASIC Design Flow Primer" },
    { cat: "Programming & Scripts:", items: "Python (Hardware Telemetry, Automation, Async IO), C (Procedural, Bitwise Operations), Shell/Bash" },
    { cat: "EDA & Simulation Tools:", items: "Multisim, Circuit Simulation, SPICE primers, Logic Analyzer Workbench" },
    { cat: "Developer Toolchain:", items: "Visual Studio Code, Git, GitHub, Linux / Terminal Environments, Markdown Documentation" },
    { cat: "Core Engineering:", items: "Algorithmic Logic, Problem Solving, Hardware-Software Integration, Schematic Interpretation" }
  ];

  for (const skill of skillsMatrix) {
    page.drawText(skill.cat, { x: 40, y: currentY, size: 8.5, font: fontBold, color: darkNavy });
    page.drawText(skill.items, { x: 165, y: currentY, size: 8.5, font: fontRegular, color: textDark });
    currentY -= 13;
  }

  // 4. PROJECTS & SYSTEMS
  drawSectionHeading("4. Key Engineering Projects & Systems");

  // Project 1
  page.drawText("Digital Circuit Simulator & Logic Analyzer (Web-based Engine)", {
    x: 40,
    y: currentY,
    size: 9.5,
    font: fontBold,
    color: darkNavy,
  });
  page.drawText("Next.js | React | CMOS Logic Models", {
    x: width - 200,
    y: currentY,
    size: 8.5,
    font: fontRegular,
    color: textMuted,
  });
  currentY -= 12;
  const p1Bullets = [
    "• Engineered an interactive web-based logic gate simulator modeling standard CMOS gates (AND, OR, XOR, NAND, NOR, XNOR, NOT).",
    "• Features real-time dual-input state manipulation, dynamic truth table row highlighting, and visual voltage state feedback."
  ];
  for (const b of p1Bullets) {
    page.drawText(b, { x: 48, y: currentY, size: 8.5, font: fontRegular, color: textDark });
    currentY -= 11.5;
  }

  currentY -= 3;
  // Project 2
  page.drawText("Automated Task & Hardware Signal Logger", {
    x: 40,
    y: currentY,
    size: 9.5,
    font: fontBold,
    color: darkNavy,
  });
  page.drawText("Python 3.x | Asyncio | Telemetry Parsing", {
    x: width - 210,
    y: currentY,
    size: 8.5,
    font: fontRegular,
    color: textMuted,
  });
  currentY -= 12;
  const p2Bullets = [
    "• Developed automated Python scripts for capturing, timestamping, and parsing continuous data signal benchmarks.",
    "• Implemented anomaly detection algorithms to identify voltage swing deviations and log telemetry records to structured formats."
  ];
  for (const b of p2Bullets) {
    page.drawText(b, { x: 48, y: currentY, size: 8.5, font: fontRegular, color: textDark });
    currentY -= 11.5;
  }

  currentY -= 3;
  // Project 3
  page.drawText("Semiconductor Verification Case Study & ASIC Flow Primer", {
    x: 40,
    y: currentY,
    size: 9.5,
    font: fontBold,
    color: darkNavy,
  });
  page.drawText("SystemVerilog | UVM Concepts | ASIC Lifecycle", {
    x: width - 235,
    y: currentY,
    size: 8.5,
    font: fontRegular,
    color: textMuted,
  });
  currentY -= 12;
  const p3Bullets = [
    "• Conducted technical research into modern ASIC flows: RTL Synthesis, Static Timing Analysis (STA), and DRC/LVS physical sign-off.",
    "• Authored primer notes detailing TrueChip's verification methodology and SystemVerilog/UVM constrained-random testing concepts."
  ];
  for (const b of p3Bullets) {
    page.drawText(b, { x: 48, y: currentY, size: 8.5, font: fontRegular, color: textDark });
    currentY -= 11.5;
  }

  // 5. INTERESTS & EXTRA-CURRICULAR
  drawSectionHeading("5. Technical Interests & Activities");
  const interests = [
    "• Low-Latency System Mechanics: Deep exploration into frame pacing, 1% low frame optimization, and high-frequency input polling.",
    "• Robotics & Microcontrollers: Hands-on prototyping with ESP32 and Arduino boards, exploring PWM motor control and I2C/UART sensors.",
    "• Semiconductor Community: Active participant in student technical chapters, electronics workshops, and industry speaker sessions."
  ];
  for (const item of interests) {
    page.drawText(item, { x: 40, y: currentY, size: 8.5, font: fontRegular, color: textDark });
    currentY -= 12;
  }

  // Footer bar
  page.drawRectangle({
    x: 0,
    y: 0,
    width: width,
    height: 24,
    color: darkNavy,
  });

  page.drawText("Vaibhav Menariya  —  Curriculum Vitae  |  JECRC University & TrueChip Partnered ECE Program  |  Udaipur / Jaipur, India", {
    x: 40,
    y: 8,
    size: 7.5,
    font: fontRegular,
    color: rgb(0.7, 0.8, 0.9),
  });

  const pdfBytes = await pdfDoc.save();
  const publicDir = path.join(__dirname, "..", "public");
  fs.writeFileSync(path.join(publicDir, "resume.pdf"), pdfBytes);
  console.log(`Generated rich valid PDF at ${path.join(publicDir, "resume.pdf")} (${pdfBytes.length} bytes)`);
}

generateRichResume().catch(console.error);
