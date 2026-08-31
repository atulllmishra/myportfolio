"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  Download,
  CheckCircle2,
  Eye,
  EyeOff,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FramerWrapper from "@/components/animation/FramerWrapper";
import MagneticButton from "@/components/ReactBits/MagneticButton";
import { useTheme } from "@/components/ThemeProvider";
import { audioHaptics } from "@/lib/audioHaptics";

const EMAIL_USER = "atulllmishra1";
const EMAIL_DOMAIN = "gmail.com";
const FULL_EMAIL = `${EMAIL_USER}@${EMAIL_DOMAIN}`;
const MASKED_EMAIL = `${EMAIL_USER.slice(0, 4)}••••••@${EMAIL_DOMAIN}`;

const PHONE_COUNTRY = "+91";
const PHONE_PREFIX = "74588";
const PHONE_SUFFIX = "44711";
const FULL_PHONE = `${PHONE_COUNTRY}${PHONE_PREFIX}${PHONE_SUFFIX}`;
const DISPLAY_PHONE = `(${PHONE_COUNTRY}) ${PHONE_PREFIX} ${PHONE_SUFFIX}`;
const MASKED_PHONE = `(${PHONE_COUNTRY}) ${PHONE_PREFIX} •••••`;

const SOCIAL_LINKS = [
  { name: "GitHub", href: "https://github.com/atulllmishra/", handle: "github.com/atulllmishra" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/atul-kumar-mishra-3b3939363", handle: "linkedin.com/in/atul-kumar-mishra" },
  { name: "Instagram", href: "https://www.instagram.com/atulllmishra/", handle: "@atulllmishra" },
  { name: "LeetCode", href: "https://leetcode.com/u/atulllmishra/", handle: "leetcode.com/atulllmishra" },
];

export default function Contact() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const accentColor = isLight ? "rgb(196, 86, 58)" : "rgb(224, 122, 95)";

  const [revealedEmail, setRevealedEmail] = useState(false);
  const [revealedPhone, setRevealedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Web Development",
    message: "",
    honeypot: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    audioHaptics.playPop(true);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) {
      setSubmitted(true);
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all required fields (Name, Email, and Message).");
      audioHaptics.playPop(false);
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
      audioHaptics.playPop(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Web Development",
        message: "",
        honeypot: "",
      });
    } catch (err: unknown) {
      const errorObj = err as Error;
      setError(errorObj?.message || "An unexpected error occurred. Please try again.");
      audioHaptics.playPop(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 relative border-t border-card scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <FramerWrapper y={20} className="mb-10 sm:mb-14 space-y-3">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-main border border-card text-xs font-bold uppercase tracking-wider"
            style={{ color: accentColor }}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
            LET&apos;S <span style={{ color: accentColor }}>CONNECT !</span>
          </h2>
        </FramerWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          <FramerWrapper y={20} delay={0.1} className="lg:col-span-5 space-y-4">
            
            <div className="p-4 sm:p-5 rounded-2xl bg-card border border-card shadow-sm hover:border-accent/40 transition-all duration-300">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Open to work!
                </span>
              </div>
            </div>

            <div
              className="p-4 rounded-2xl bg-card border border-card shadow-sm hover:border-accent/50 transition-all duration-300 flex items-center justify-between gap-3 group"
              onMouseEnter={() => audioHaptics.playClick(600, 0.02, "sine")}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="p-2.5 sm:p-3 rounded-xl bg-main border border-card transition-colors shrink-0"
                  style={{ color: accentColor }}
                >
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[10px] font-mono text-secondary uppercase font-bold tracking-wider">
                      Direct Email
                    </span>
                  </div>
                  <AnimatePresence mode="wait">
                    {!revealedEmail ? (
                      <motion.p
                        key="masked"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-xs sm:text-sm font-bold text-secondary/70 font-mono tracking-wider truncate select-none"
                      >
                        {MASKED_EMAIL}
                      </motion.p>
                    ) : (
                      <motion.a
                        key="revealed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={`mailto:${FULL_EMAIL}`}
                        className="text-xs sm:text-sm font-bold text-primary hover:text-accent font-mono block truncate transition-colors"
                      >
                        {FULL_EMAIL}
                      </motion.a>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                {!revealedEmail ? (
                  <button
                    type="button"
                    onClick={() => {
                      setRevealedEmail(true);
                      audioHaptics.playClick(500, 0.03, "sine");
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-main border border-card text-xs font-mono font-bold text-primary hover:text-accent hover:border-accent transition-all cursor-pointer active:scale-95 shadow-sm"
                    title="Click to reveal email"
                  >
                    <Eye className="w-3.5 h-3.5" style={{ color: accentColor }} />
                    <span className="text-[11px]">Reveal</span>
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(FULL_EMAIL, "email")}
                      className="p-2.5 rounded-xl bg-main border border-card text-secondary hover:text-primary hover:border-accent transition-all cursor-pointer active:scale-95 shadow-sm"
                      title="Copy Email"
                      aria-label="Copy Email Address"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setRevealedEmail(false);
                        audioHaptics.playClick(400, 0.02, "sine");
                      }}
                      className="p-2.5 rounded-xl bg-main border border-card text-secondary hover:text-primary hover:border-accent transition-all cursor-pointer active:scale-95 shadow-sm"
                      title="Hide Email"
                      aria-label="Hide Email Address"
                    >
                      <EyeOff className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            </div>

            <div
              className="p-4 rounded-2xl bg-card border border-card shadow-sm hover:border-accent/50 transition-all duration-300 flex items-center justify-between gap-3 group"
              onMouseEnter={() => audioHaptics.playClick(600, 0.02, "sine")}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="p-2.5 sm:p-3 rounded-xl bg-main border border-card transition-colors shrink-0"
                  style={{ color: accentColor }}
                >
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[10px] font-mono text-secondary uppercase font-bold tracking-wider">
                      Phone / WhatsApp
                    </span>
                  </div>
                  <AnimatePresence mode="wait">
                    {!revealedPhone ? (
                      <motion.p
                        key="masked"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-xs sm:text-sm font-bold text-secondary/70 font-mono tracking-wider truncate select-none"
                      >
                        {MASKED_PHONE}
                      </motion.p>
                    ) : (
                      <motion.a
                        key="revealed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={`tel:${FULL_PHONE}`}
                        className="text-xs sm:text-sm font-bold text-primary hover:text-accent font-mono block truncate transition-colors"
                      >
                        {DISPLAY_PHONE}
                      </motion.a>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                {!revealedPhone ? (
                  <button
                    type="button"
                    onClick={() => {
                      setRevealedPhone(true);
                      audioHaptics.playClick(500, 0.03, "sine");
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-main border border-card text-xs font-mono font-bold text-primary hover:text-accent hover:border-accent transition-all cursor-pointer active:scale-95 shadow-sm"
                    title="Click to reveal phone number"
                  >
                    <Eye className="w-3.5 h-3.5" style={{ color: accentColor }} />
                    <span className="text-[11px]">Reveal</span>
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(FULL_PHONE, "phone")}
                      className="p-2.5 rounded-xl bg-main border border-card text-secondary hover:text-primary hover:border-accent transition-all cursor-pointer active:scale-95 shadow-sm"
                      title="Copy Phone"
                      aria-label="Copy Phone Number"
                    >
                      {copiedPhone ? (
                        <Check className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setRevealedPhone(false);
                        audioHaptics.playClick(400, 0.02, "sine");
                      }}
                      className="p-2.5 rounded-xl bg-main border border-card text-secondary hover:text-primary hover:border-accent transition-all cursor-pointer active:scale-95 shadow-sm"
                      title="Hide Phone"
                      aria-label="Hide Phone Number"
                    >
                      <EyeOff className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-card border border-card shadow-sm flex items-center gap-3.5">
              <div
                className="p-2.5 sm:p-3 rounded-xl bg-main border border-card shrink-0"
                style={{ color: accentColor }}
              >
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-secondary uppercase font-bold tracking-wider block">
                  Location 
                </span>
                <p className="text-xs sm:text-sm font-bold text-primary truncate">
                  Jamshedpur Jharkhand
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-card border border-card shadow-sm space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-secondary uppercase font-bold tracking-wider">
                  Social &amp; Profiles
                </span>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary hover:text-accent transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Resume PDF</span>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => audioHaptics.playClick(600, 0.02, "sine")}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-main border border-card text-xs font-mono font-medium text-secondary hover:text-primary hover:border-accent transition-all group cursor-pointer"
                  >
                    <span className="truncate">{item.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-secondary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1" />
                  </a>
                ))}
              </div>
            </div>

          </FramerWrapper>

          <FramerWrapper y={20} delay={0.2} className="lg:col-span-7 w-full">
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-card border border-card shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-primary">
                  Get In Touch
                </h3>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 sm:py-12 text-center space-y-4"
                >
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-main border border-card flex items-center justify-center mx-auto"
                    style={{ color: accentColor }}
                  >
                    <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-primary">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-secondary text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. I will get back to you shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-main border border-card text-xs font-mono font-bold text-secondary hover:text-primary hover:border-accent transition-all cursor-pointer shadow-sm"
                    >
                      Continue
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="website_hp"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {error && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs flex items-center justify-between gap-2 font-medium">
                      <span>{error}</span>
                      <button
                        type="button"
                        onClick={() => setError(null)}
                        className="text-rose-500 hover:text-rose-400 font-bold p-1 cursor-pointer"
                      >
                        ×
                      </button>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-secondary flex items-center gap-1">
                        <span>Name</span>
                        <span style={{ color: accentColor }}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full bg-main border border-card rounded-xl px-3.5 py-2.5 text-sm text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-all font-medium"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-secondary flex items-center gap-1">
                        <span>Email</span>
                        <span style={{ color: accentColor }}>*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="w-full bg-main border border-card rounded-xl px-3.5 py-2.5 text-sm text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <label className="font-bold text-secondary">
                        Phone / WhatsApp
                      </label>
                    </div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 1234567890 (Optional)"
                      className="w-full bg-main border border-card rounded-xl px-3.5 py-2.5 text-sm text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-all font-medium font-mono"
                    />
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <label className="text-xs font-mono font-bold text-secondary flex items-center gap-1">
                      <span>Message</span>
                      <span style={{ color: accentColor }}>*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here.."
                      className="w-full bg-main border border-card rounded-xl px-3.5 py-2.5 text-sm text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-all font-medium resize-none leading-relaxed"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-start">
                    <MagneticButton>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-xl font-mono text-xs sm:text-sm font-bold tracking-wider text-white shadow-md hover:opacity-90 active:scale-95 transition-all cursor-pointer"
                        style={{ backgroundColor: accentColor }}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin shrink-0" />
                            <span>SENDING...</span>
                          </>
                        ) : (
                          <>
                            <span>SEND MESSAGE</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </MagneticButton>
                  </div>

                </form>
              )}
            </div>
          </FramerWrapper>

        </div>

        <FramerWrapper y={15} delay={0.3} className="mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-card flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-secondary">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Atul Kumar Mishra.</span>
            <span className="hidden sm:inline text-secondary/40">•</span>
            <span className="text-secondary/70">All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/atulllmishra/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/atul-kumar-mishra-3b3939363"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:atulllmishra1@gmail.com"
              className="hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </FramerWrapper>

      </div>
    </section>
  );
}
