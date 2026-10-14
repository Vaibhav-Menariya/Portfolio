const fs = require('fs');
const path = require('path');

// Minimal valid single-page PDF generator
function createResumePdf() {
  const content = [
    "%PDF-1.4",
    "1 0 obj",
    "<< /Type /Catalog /Pages 2 0 R >>",
    "endobj",
    "2 0 obj",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "endobj",
    "3 0 obj",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
    "endobj",
    "4 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    "endobj",
    "5 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "endobj",
    "6 0 obj"
  ];

  const streamText = `BT
/F1 24 Tf
50 730 Td
(VAIBHAV MENARIYA) Tj
0 -20 Td
/F2 11 Tf
(Electronics & Communication Engineering (ECE) | Semiconductor & VLSI Specialization) Tj
0 -15 Td
(JECRC University, Jaipur | TrueChip Partnership Program) Tj
0 -15 Td
(Email: vaibhavmenariafnr@gmail.com | Phone: +91 7742451445 | Udaipur, Rajasthan, India) Tj
0 -30 Td
/F1 14 Tf
(ACADEMIC PROFILE) Tj
0 -15 Td
/F2 10 Tf
(B.Tech in ECE (Semiconductor & VLSI) - JECRC University, Jaipur [2026 - 2030]) Tj
0 -12 Td
(- Curriculum Partner: TrueChip Solutions (ASIC/SoC Verification & EDA workflows)) Tj
0 -12 Td
(- Core focus: Digital System Design, Semiconductor Physics, Circuit Analysis) Tj
0 -15 Td
(Senior Secondary Education (Class 12th) - Mahaveer Academy, Udaipur [RBSE]) Tj
0 -12 Td
(- Stream: Science-Maths (Physics, Chemistry, Mathematics)) Tj
0 -30 Td
/F1 14 Tf
(TECHNICAL SKILLS & COMPETENCIES) Tj
0 -15 Td
/F2 10 Tf
(Hardware & EDA: Semiconductor Fundamentals, Digital Logic Gates, Boolean Algebra, Multisim) Tj
0 -12 Td
(Programming & Scripting: C Programming, Python, Shell/Bash, Automation Scripts) Tj
0 -12 Td
(Tools: Visual Studio Code, Git, GitHub, Linux Environments) Tj
0 -30 Td
/F1 14 Tf
(FEATURED PROJECTS & RESEARCH) Tj
0 -15 Td
/F2 10 Tf
(1. Digital Circuit Simulator & Logic Analyzer - Interactive web-based gate simulation engine) Tj
0 -12 Td
(2. Automated Task & Signal Logger - Python-driven data signal logger and telemetry benchmark) Tj
0 -12 Td
(3. Semiconductor Verification Case Study - Primer on TrueChip verification methodology & ASIC flows) Tj
0 -30 Td
/F1 14 Tf
(AREAS OF INTEREST) Tj
0 -15 Td
/F2 10 Tf
(Digital Electronics, VLSI Design, Hardware-Software Integration, Robotics & Automation) Tj
ET`;

  const streamLength = Buffer.byteLength(streamText, 'utf-8');
  content.push(`<< /Length ${streamLength} >>`);
  content.push("stream");
  content.push(streamText);
  content.push("endstream");
  content.push("endobj");

  const pdfOutput = content.join("\n") + "\n%%EOF\n";
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.writeFileSync(path.join(publicDir, 'resume.pdf'), pdfOutput, 'utf-8');
  console.log("Generated valid public/resume.pdf successfully!");
}

createResumePdf();
