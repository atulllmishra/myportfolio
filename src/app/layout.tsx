import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
  title: "Atul Kumar Mishra | CSE Student, Web Developer & AI Engineer",
  description:
    "Portfolio of Atul Kumar Mishra - B.Tech Computer Science & Engineering (CSE) student at MCAET ANDUAT. Full-Stack Web Developer & Generative AI Specialist. IIT Guwahati ImpactHack 2025 Finalist. Creator of ProcureHub, Smart Agri, E-Commerce Store, and MCAET Custom AI College Chatbot.",
  keywords: [
    "Atul Kumar Mishra",
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
    title: "Atul Kumar Mishra - CSE Student, Web Developer & AI Engineer",
    description:
      "Explore projects (ProcureHub, Smart Agri, E-Commerce Store, MCAET AI Chatbot) and interactive AI assistant of Atul Kumar Mishra.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-[#080a0f] text-slate-100 antialiased font-sans flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
