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
  Sparkles,
  ArrowUp,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FramerWrapper from "@/components/animation/FramerWrapper";
import MagneticButton from "@/components/ReactBits/MagneticButton";
import { useTheme } from "@/components/ThemeProvider";
import { audioHaptics } from "@/lib/audioHaptics";

const TOPIC_OPTIONS = [
  { id: "web-dev", label: "Web Development" },
  { id: "ai", label: "AI Solutions" },
  { id: "career", label: "Job Opportunity" },
  { id: "collab", label: "Collaboration" },
  { id: "general", label: "General Chat" },
];

const SOCIAL_LINKS = [
  { name: "GitHub", href: "https://github.com/atulllmishra/", handle: "github.com/atulllmishra" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/atul-kumar-mishra-3b3939363", handle: "linkedin.com/in/atul-kumar-mishra" },
  { name: "Instagram", href: "https://www.instagram.com/atulllmishra/", handle: "@atulllmishra" },
  { name: "LeetCode", href: "https://leetcode.com/u/atulllmishra/", handle: "leetcode.com/atulllmishra" },
];

export default function Contact() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const accentColor = isLight ? "#C4563A" : "#E07A5F";

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Web Development",
    message: "",
  });

  const [selectedTopic, setSelectedTopic] = useState<string>("Web Development");
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

  const handleTopicClick = (topicLabel: string) => {
    setSelectedTopic(topicLabel);
    setFormData((prev) => ({ ...prev, subject: topicLabel }));
    audioHaptics.playClick(350, 0.04, "square");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      });
      setSelectedTopic("Web Development");
    } catch (err: unknown) {
      const errorObj = err as Error;
      setError(errorObj?.message || "An unexpected error occurred. Please try again.");
      audioHaptics.playPop(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    audioHaptics.playClick(400, 0.05, "sine");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-24 relative border-t border-card scroll-mt-24 font-serif">
      <div className="max-w-6xl mx-auto px-6 font-serif">
        
        {/* Section Header */}
        <FramerWrapper y={20} className="mb-14 space-y-3 font-serif">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-main border border-card text-xs font-serif font-bold uppercase tracking-wider"
            style={{ color: accentColor }}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-serif">
            START A <span style={{ color: accentColor }}>CONVERSATION</span>
          </h2>
          <p className="text-secondary text-sm md:text-base font-normal max-w-xl leading-relaxed font-serif">
            Have a project in mind, an exciting opportunity, or want to discuss AI systems and web engineering? Let&apos;s connect!
          </p>
        </FramerWrapper>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Availability */}
          <FramerWrapper y={20} delay={0.1} className="lg:col-span-5 space-y-4">
            
            {/* Status Card */}
            <div className="p-5 rounded-2xl bg-card border border-card shadow-sm hover:border-accent/40 transition-all duration-300">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                  Available for new opportunities
                </span>
              </div>
              <p className="text-xs text-secondary font-medium mt-2 leading-relaxed">
                Currently open for Full-Stack &amp; AI Engineering roles, freelance projects, and research collaborations.
              </p>
            </div>

            {/* Email Card */}
            <div
              className="p-4 rounded-2xl bg-card border border-card shadow-sm hover:border-accent/50 transition-all duration-300 flex items-center justify-between gap-3 group"
              onMouseEnter={() => audioHaptics.playClick(600, 0.02, "sine")}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div
                  className="p-3 rounded-xl bg-main border border-card transition-colors"
                  style={{ color: accentColor }}
                >
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-secondary uppercase font-bold tracking-wider block">
                    Direct Email
                  </span>
                  <a
                    href="mailto:atulllmishra1@gmail.com"
                    className="text-xs sm:text-sm font-bold text-primary hover:text-accent font-mono block truncate transition-colors"
                  >
                    atulllmishra1@gmail.com
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard("atulllmishra1@gmail.com", "email")}
                className="p-2.5 rounded-xl bg-main border border-card text-secondary hover:text-primary hover:border-accent transition-all shrink-0 cursor-pointer active:scale-95"
                title="Copy Email"
                aria-label="Copy Email Address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div
              className="p-4 rounded-2xl bg-card border border-card shadow-sm hover:border-accent/50 transition-all duration-300 flex items-center justify-between gap-3 group"
              onMouseEnter={() => audioHaptics.playClick(600, 0.02, "sine")}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div
                  className="p-3 rounded-xl bg-main border border-card transition-colors"
                  style={{ color: accentColor }}
                >
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-secondary uppercase font-bold tracking-wider block">
                    Phone / WhatsApp
                  </span>
                  <a
                    href="tel:+917458844711"
                    className="text-xs sm:text-sm font-bold text-primary hover:text-accent font-mono block truncate transition-colors"
                  >
                    (+91) 74588 44711
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard("+917458844711", "phone")}
                className="p-2.5 rounded-xl bg-main border border-card text-secondary hover:text-primary hover:border-accent transition-all shrink-0 cursor-pointer active:scale-95"
                title="Copy Phone"
                aria-label="Copy Phone Number"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location & Affiliation */}
            <div className="p-4 rounded-2xl bg-card border border-card shadow-sm flex items-center gap-3.5">
              <div
                className="p-3 rounded-xl bg-main border border-card shrink-0"
                style={{ color: accentColor }}
              >
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-secondary uppercase font-bold tracking-wider block">
                  Location &amp; Campus
                </span>
                <p className="text-xs sm:text-sm font-bold text-primary truncate">
                  MCAET, ANDUAT University
                </p>
                <p className="text-xs text-secondary font-mono truncate">
                  Ayodhya / Uttar Pradesh, India
                </p>
              </div>
            </div>

            {/* Resume & Social Links Grid */}
            <div className="p-5 rounded-2xl bg-card border border-card shadow-sm space-y-3.5">
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

              <div className="grid grid-cols-2 gap-2.5">
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

          {/* Right Column: Direct Message Form Card */}
          <FramerWrapper y={20} delay={0.2} className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-card shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4" style={{ color: accentColor }} />
                <h3 className="text-xl font-bold tracking-tight text-primary">
                  Send a Direct Message
                </h3>
              </div>
              <p className="text-xs text-secondary font-medium mb-6">
                Drop your details and message below. I will receive it directly and reply promptly.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div
                    className="w-14 h-14 rounded-2xl bg-main border border-card flex items-center justify-center mx-auto"
                    style={{ color: accentColor }}
                  >
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-primary">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-secondary text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out! Your message has been safely delivered and I will get back to you shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-main border border-card text-xs font-mono font-bold text-secondary hover:text-primary hover:border-accent transition-all cursor-pointer shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
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

                  {/* Name & Email Row */}
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

                  {/* Phone (Optional) */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <label className="font-bold text-secondary">
                        Phone / WhatsApp
                      </label>
                      <span className="text-[10px] text-secondary font-mono uppercase">
                        Optional
                      </span>
                    </div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210 (Optional)"
                      className="w-full bg-main border border-card rounded-xl px-3.5 py-2.5 text-sm text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-all font-medium font-mono"
                    />
                  </div>

                  {/* Topic Selector Pills */}
                  <div className="space-y-2 pt-1">
                    <label className="text-xs font-mono font-bold text-secondary block">
                      Topic / Subject
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {TOPIC_OPTIONS.map((topic) => {
                        const isSelected = selectedTopic === topic.label;
                        return (
                          <button
                            key={topic.id}
                            type="button"
                            onClick={() => handleTopicClick(topic.label)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border cursor-pointer ${
                              isSelected
                                ? "text-white shadow-sm"
                                : "bg-main border-card text-secondary hover:text-primary hover:border-accent"
                            }`}
                            style={isSelected ? { backgroundColor: accentColor, borderColor: accentColor } : {}}
                          >
                            {topic.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message Field */}
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
                      placeholder="Write your message or project requirements here..."
                      className="w-full bg-main border border-card rounded-xl px-3.5 py-2.5 text-sm text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-all font-medium resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-start">
                    <MagneticButton>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-mono text-xs sm:text-sm font-bold tracking-wider text-white shadow-md hover:opacity-90 active:scale-95 transition-all cursor-pointer"
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

        {/* Clean, Decent, and Normal Site Conclusion */}
        <FramerWrapper y={15} delay={0.3} className="mt-20 pt-8 border-t border-card flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-secondary">
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
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </FramerWrapper>

      </div>
    </section>
  );
}
