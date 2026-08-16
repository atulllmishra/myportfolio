import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import CommandPalette from "@/components/CommandPalette";
import PhysicsPlayground from "@/components/PhysicsPlayground/PhysicsPlayground";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Atul Kumar Mishra | Software Engineer",
  description:
    "I build interfaces people actually want to touch. React, Next.js, and WebGL.",
  keywords: [
    "Atul Kumar Mishra",
    "Software Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "WebGL",
    "Creative Developer",
    "India",
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
    <html lang="en" className={`${poppins.variable} scroll-smooth light`}>
      <body className="antialiased font-sans flex flex-col min-h-screen transition-colors duration-200">
        <ThemeProvider>
          {/* Global Interactive Overlays */}
          <CommandPalette />
          <PhysicsPlayground />
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
