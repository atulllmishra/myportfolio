"use client";

import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  Download,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/ReactBits/MagneticButton";



const COUNTRY_CODES = [

  { code: "+91", label: "🇮🇳 +91 (India)" },
  { code: "+1", label: "🇺🇸 +1 (USA/Canada)" },
  { code: "+44", label: "🇬🇧 +44 (UK)" },
  { code: "+61", label: "🇦🇺 +61 (Australia)" },
  { code: "+971", label: "🇦🇪 +971 (UAE)" },
  { code: "+49", label: "🇩🇪 +49 (Germany)" },
  { code: "+33", label: "🇫🇷 +33 (France)" },
  { code: "+81", label: "🇯🇵 +81 (Japan)" },
  { code: "+86", label: "🇨🇳 +86 (China)" },
  { code: "+65", label: "🇸🇬 +65 (Singapore)" },
  { code: "+966", label: "🇸🇦 +966 (Saudi Arabia)" },
  { code: "+7", label: "🇷🇺 +7 (Russia)" },
  { code: "+55", label: "🇧🇷 +55 (Brazil)" },
];

const SUBJECT_OPTIONS = [
  { id: "web-dev", label: "Web Development" },
  { id: "ai-sol", label: "AI Integration & Solutions" },
  { id: "career", label: "Job / Career Opportunity" },
  { id: "collab", label: "Partnership & Collaboration" },
  { id: "inquiry", label: "General Inquiry" },
  { id: "custom", label: "Other / Custom Topic" },
];

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    subject: "",
    message: "",
  });

  const [selectedSubjectId, setSelectedSubjectId] = useState<string>("");
  const [isCustomSubject, setIsCustomSubject] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDropdownOpen]);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSelectSubject = (option: typeof SUBJECT_OPTIONS[number]) => {
    setSelectedSubjectId(option.id);
    if (option.id === "custom") {
      setIsCustomSubject(true);
      setFormData((prev) => ({ ...prev, subject: "" }));
    } else {
      setIsCustomSubject(false);
      setFormData((prev) => ({ ...prev, subject: option.label }));
    }
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to send message.");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", countryCode: "+91", phone: "", subject: "", message: "" });
      setSelectedSubjectId("");
      setIsCustomSubject(false);
    } catch (err: unknown) {
      const errorObj = err as Error;
      setError(errorObj?.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative bg-[#0b0f17] border-t border-[#1e2638] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 space-y-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Reach out directly for Web Development, AI projects, or career opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-3.5">
            
            {/* Email */}
            <div className="academic-card p-3.5 sm:p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-lg bg-[#0b0f17] border border-[#1e2638] text-slate-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">Email</span>
                  <a
                    href="mailto:atulllmishra1@gmail.com"
                    className="text-xs sm:text-xs font-bold text-white hover:text-blue-400 transition-colors font-mono block truncate"
                  >
                    atulllmishra1@gmail.com
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard("atulllmishra1@gmail.com", "email")}
                className="p-2 rounded-lg bg-[#0b0f17] border border-[#1e2638] text-slate-400 hover:text-white transition-colors shrink-0 active:scale-95"
                title="Copy Email"
                aria-label="Copy Email Address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone */}
            <div className="academic-card p-3.5 sm:p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-lg bg-[#0b0f17] border border-[#1e2638] text-slate-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">Phone / WhatsApp</span>
                  <a
                    href="tel:+917458844711"
                    className="text-xs sm:text-xs font-bold text-white hover:text-blue-400 transition-colors font-mono block truncate"
                  >
                    (+91) 74588 44711
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard("(+91) 74588 44711", "phone")}
                className="p-2 rounded-lg bg-[#0b0f17] border border-[#1e2638] text-slate-400 hover:text-white transition-colors shrink-0 active:scale-95"
                title="Copy Phone"
                aria-label="Copy Phone Number"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Resume Card */}
            <div className="academic-card p-3.5 sm:p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-lg bg-[#0b0f17] border border-[#1e2638] text-slate-400 shrink-0">
                  <Download className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">Resume</span>
                  <span className="text-xs text-white font-mono block truncate">Download Curriculum Vitae</span>
                </div>
              </div>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-blue-600 text-white font-medium text-xs hover:bg-blue-500 transition-colors shrink-0 flex items-center gap-1.5"
              >
                <span>Download</span>
              </a>
            </div>

            {/* Location */}
            <div className="academic-card p-3.5 sm:p-4 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#0b0f17] border border-[#1e2638] text-slate-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">Campus</span>
                <p className="text-xs font-bold text-white truncate">
                  MCAET, ANDUAT University Campus
                </p>
                <p className="text-[11px] text-slate-400 font-mono truncate">
                  Ayodhya / Uttar Pradesh, India
                </p>
              </div>
            </div>

            {/* Social Profiles Grid */}
            <div className="academic-card p-3.5 sm:p-4 space-y-2.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">
                Social Profiles
              </span>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: "GitHub", href: "https://github.com/atulllmishra/" },
                  { name: "LinkedIn", href: "https://www.linkedin.com/in/atul-kumar-mishra-3b3939363" },
                  { name: "Instagram", href: "https://www.instagram.com/atulllmishra/" },
                  { name: "LeetCode", href: "https://leetcode.com" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#0b0f17] border border-[#1e2638] text-xs font-mono text-slate-300 hover:text-white hover:border-blue-500/50 transition-colors"
                  >
                    <span className="truncate">{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500 shrink-0" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Mobile-Compatible Contact Form */}
          <div className="lg:col-span-7 academic-card p-4 sm:p-6 border border-[#1e2638]">
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Fill out your details below and I will reply via email promptly.
            </p>

            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-slate-300 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Your message has been delivered and I will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-lg bg-[#0b0f17] border border-[#1e2638] text-xs font-mono text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-lg bg-red-950/50 border border-red-800/80 text-red-300 text-xs flex items-center justify-between gap-2">
                    <span>{error}</span>
                    <button
                      type="button"
                      onClick={() => setError(null)}
                      className="text-red-400 hover:text-white font-bold p-1"
                    >
                      ×
                    </button>
                  </div>
                )}

                {/* Name & Email inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 flex items-center justify-between">
                      <span>Name <span className="text-blue-400">*</span></span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-[#0b0f17] border border-[#1e2638] rounded-lg px-3 py-2.5 text-base sm:text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 flex items-center justify-between">
                      <span>Email <span className="text-blue-400">*</span></span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full bg-[#0b0f17] border border-[#1e2638] rounded-lg px-3 py-2.5 text-base sm:text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Phone Number with Country Code - OPTIONAL */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <label className="text-slate-300 font-medium">
                      Mobile / Phone Number
                    </label>
                    <span className="text-[11px] text-slate-500 font-normal lowercase bg-slate-800/40 px-2 py-0.5 rounded border border-slate-700/50">
                      optional
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="bg-[#0b0f17] border border-[#1e2638] rounded-lg px-3 py-2.5 text-base sm:text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors font-mono cursor-pointer sm:w-44 shrink-0"
                    >
                      {COUNTRY_CODES.map((item) => (
                        <option key={item.code} value={item.code} className="bg-[#0b0f17] text-white">
                          {item.label}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 98765 43210 (Optional)"
                      className="flex-1 bg-[#0b0f17] border border-[#1e2638] rounded-lg px-3 py-2.5 text-base sm:text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors font-mono"
                    />
                  </div>
                </div>

                {/* Clean Subject Field with Attached Inline Dropdown */}
                <div className="space-y-1.5 relative" ref={dropdownRef}>
                  <label className="text-xs font-mono text-slate-300 block">Subject</label>

                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      className="w-full bg-[#0b0f17] border border-[#1e2638] rounded-lg px-3 py-2.5 text-left text-base sm:text-xs flex items-center justify-between hover:border-slate-500 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                    >
                      <span className={formData.subject ? "text-white font-medium truncate" : "text-slate-500 truncate"}>
                        {formData.subject || "Select subject..."}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 ml-2 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-blue-400" : ""}`} />
                    </button>

                    {/* Attached Inline Dropdown Menu */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -4, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -4, scale: 0.98 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 right-0 mt-1 z-30 bg-[#121824] border border-[#1e2638] rounded-lg shadow-xl p-1 space-y-0.5"
                        >
                          {SUBJECT_OPTIONS.map((opt) => {
                            const isSelected = selectedSubjectId === opt.id || (opt.id !== "custom" && formData.subject === opt.label);

                            return (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => handleSelectSubject(opt)}
                                className={`w-full text-left px-3 py-2 rounded-md text-xs transition-colors flex items-center justify-between cursor-pointer ${
                                  isSelected
                                    ? "bg-blue-600/20 text-blue-400 font-medium"
                                    : "text-slate-300 hover:bg-[#0b0f17] hover:text-white"
                                }`}
                              >
                                <span className="truncate">{opt.label}</span>
                                {isSelected && <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 ml-2" />}
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Custom Subject text input if "custom" is selected */}
                  {isCustomSubject && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="pt-1.5"
                    >
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Type custom subject here..."
                        className="w-full bg-[#0b0f17] border border-blue-500/50 rounded-lg px-3 py-2 text-base sm:text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                        autoFocus
                      />
                    </motion.div>
                  )}
                </div>

                {/* Message input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 flex items-center justify-between">
                    <span>Message <span className="text-blue-400">*</span></span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message..."
                    className="w-full bg-[#0b0f17] border border-[#1e2638] rounded-lg px-3 py-2.5 text-base sm:text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Submit button */}
                <MagneticButton className="w-full">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 sm:py-3 rounded-full font-medium text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.99] flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message →</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </MagneticButton>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}



