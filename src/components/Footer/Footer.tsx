"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowUp, MapPin, Mail, Download, Clock, Calendar, Heart, Users } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState<Date | null>(null);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    const timeout = setTimeout(() => {
      setTime(new Date());
    }, 0);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formattedDay = time ? time.toLocaleDateString("en-US", { weekday: "long" }) : "";
  const formattedDate = time ? time.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "";
  const formattedTime = time ? time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }) : "";

  return (
    <footer className="bg-[#0b0f17] border-t border-[#1e2638] pt-14 pb-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Top Sweet Gesture & Live Time (Left Accent Bar Visual) */}
        <div className="mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#1e2638]">
          
          {/* Sweet Gesture Message with Left Accent Line */}
          <div className="pl-4 border-l-2 border-blue-500/80 space-y-1 max-w-xl">
            <h4 className="text-xs font-bold text-white flex items-center gap-1.5 font-mono">
              <span>Thank you for visiting!</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Wishing you a productive and wonderful day ahead. Feel free to reach out for collaborations or a quick chat anytime!
            </p>
          </div>

          {/* Live Date, Day & Time Data */}
          <div className="flex items-center gap-3 font-mono text-xs text-slate-300 shrink-0">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              <span className="font-bold text-white font-mono tracking-wide">{formattedTime || "--:--:--"}</span>
            </div>
            <span className="text-slate-700">/</span>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>{formattedDay ? `${formattedDay}, ${formattedDate}` : "Loading..."}</span>
            </div>
          </div>

        </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#1e2638]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-slate-800 text-white font-mono font-bold text-xs flex items-center justify-center border border-slate-700">
                AM
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-white tracking-tight">
                  Atul Kumar Mishra
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  B.Tech CSE • MCAET ANDUAT
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Computer Science & Engineering (CSE) student at Mahamaya College of Agricultural Engineering and Technology (MCAET, ANDUAT)
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-300 pt-0.5">
              <a href="mailto:atulllmishra1@gmail.com" className="hover:text-white flex items-center gap-1.5 transition-colors">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>atulllmishra1@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
              Links
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a href="https://github.com/atulllmishra/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  GitHub Profile
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/atul-kumar-mishra-3b3939363" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/atulllmishra/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram Profile
                </a>
              </li>
              <li>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white flex items-center gap-1 font-mono pt-1">
                  <Download className="w-3 h-3" />
                  <span>Download Resume</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Map */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Campus Affiliation</span>
            </h4>
            <p className="text-xs text-slate-400">
              Mahamaya College of Agricultural Engineering and Technology (MCAET, ANDUAT), UP, India
            </p>

            <div className="w-full h-28 rounded-lg border border-[#1e2638] overflow-hidden bg-[#121824]">
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

        {/* Bottom Bar: All Rights Reserved & Visitor Count & Developed By */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <p>© {new Date().getFullYear()}. All Rights Reserved.</p>
  {/* Removed visitor count display */}
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Designed & Developed with <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" /> by <span className="text-white font-bold">Atul Kumar Mishra</span>
            </span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-[#121824] border border-[#1e2638] text-slate-400 hover:text-white transition-colors"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

