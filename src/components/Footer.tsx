"use client";

import { ArrowUp, MapPin, Mail, Download, GraduationCap } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b0f19] border-t border-[#1e293b] pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1e293b]">
          
          {/* Academic Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-md">
                AM
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base text-white tracking-tight flex items-center gap-1.5">
                  Atul Kumar Mishra
                  <GraduationCap className="w-4 h-4 text-blue-400" />
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  B.Tech CSE • MCAET ANDUAT
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Computer Science & Engineering (CSE) student at Mahamaya College of Agricultural Engineering and Technology (MCAET, ANDUAT). IIT Guwahati ImpactHack 2025 Finalist. Developer of Smart Agri, ProcureHub, E-Commerce Store, and MCAET AI Chatbot.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-300 pt-1">
              <a href="mailto:atulllmishra1@gmail.com" className="hover:text-blue-400 flex items-center gap-1.5 transition-colors">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>atulllmishra1@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social & Academic Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
              Academic Profiles & CV
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="https://github.com/atulllmishra/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  GitHub Profile
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/atul-kumar-mishra-3b3939363" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/atulllmishra/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  Instagram Profile
                </a>
              </li>
              <li>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center gap-1 font-mono pt-1">
                  <Download className="w-3 h-3" />
                  <span>Download CV / Resume PDF</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Campus Map */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Campus Affiliation</span>
            </h4>
            <p className="text-xs text-slate-400">
              Mahamaya College of Agricultural Engineering and Technology (MCAET, ANDUAT), UP, India
            </p>

            <div className="w-full h-32 rounded-xl border border-[#1e293b] overflow-hidden bg-[#131c2e]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.8933414157373!2d82.49057987615164!3d26.459166779433033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399093cbf6ffffff%3A0xe886e928b8f0a1e7!2sMahamaya%20College%20of%20Agricultural%20Engineering%20And%20Technology!5e0!3m2!1sen!2sin!4v1739541546497!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MCAET Location Map"
              />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Atul Kumar Mishra • Hugo Blox Academic Theme</p>
          <div className="flex items-center gap-4">
            <span>Built with Next.js & Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#131c2e] border border-[#1e293b] text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
