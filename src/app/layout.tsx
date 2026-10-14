import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaibhav Menariya | Semiconductor & VLSI Portfolio | B.Tech ECE (TrueChip)",
  description:
    "Personal engineering portfolio of Vaibhav Menariya, B.Tech 1st Year ECE student specializing in Semiconductor & VLSI with TrueChip at JECRC University, Jaipur. Exploring digital logic, embedded systems, and Python automation.",
  keywords: [
    "Vaibhav Menariya",
    "Semiconductor",
    "VLSI",
    "TrueChip",
    "JECRC University",
    "ECE",
    "Electronics & Communication Engineering",
    "Digital Logic",
    "Hardware Engineering",
    "Python Automation",
    "ASIC Design",
  ],
  authors: [{ name: "Vaibhav Menariya" }],
  creator: "Vaibhav Menariya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vaibhav-menariya.vercel.app",
    title: "Vaibhav Menariya | Semiconductor & VLSI Portfolio",
    description:
      "B.Tech 1st Year ECE student specializing in Semiconductor & VLSI with TrueChip at JECRC University. Building in embedded systems, digital logic, and Python automation.",
    siteName: "Vaibhav Menariya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Menariya | Semiconductor & VLSI Portfolio",
    description:
      "B.Tech 1st Year ECE student specializing in Semiconductor & VLSI with TrueChip at JECRC University.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#06080E] text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
