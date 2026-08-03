import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atul Kumar Mishra | Academic CV & Portfolio",
  description:
    "Academic Portfolio & CV of Atul Kumar Mishra - B.Tech Computer Science & Engineering (CSE) student at MCAET ANDUAT. Full-Stack Web Developer & Generative AI Specialist. IIT Guwahati ImpactHack 2025 Finalist.",
  keywords: [
    "Atul Kumar Mishra",
    "Academic CV",
    "Hugo Blox Theme",
    "Computer Science Student",
    "CSE MCAET",
    "MCAET ANDUAT",
    "IIT Guwahati ImpactHack Finalist",
    "Web Developer",
    "Generative AI Engineer",
    "Software Development Engineer",
    "ProcureHub",
    "Smart Agri",
    "MCAET Chatbot",
    "E-Commerce Store",
    "React",
    "Next.js",
    "C++",
  ],
  authors: [{ name: "Atul Kumar Mishra" }],
  openGraph: {
    title: "Atul Kumar Mishra - Academic CV & Portfolio",
    description:
      "Explore academic background, research interests, projects (Smart Agri, MCAET AI Chatbot, ProcureHub), and interactive AI assistant of Atul Kumar Mishra.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}>
      <body className="bg-[#0b0f19] text-slate-100 antialiased font-sans flex flex-col min-h-screen transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
