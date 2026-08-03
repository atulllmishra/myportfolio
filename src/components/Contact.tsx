"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Copy, Check, ArrowUpRight, Download } from "lucide-react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#0b0f17] border-t border-[#1e2638]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 space-y-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-sm">
            Reach out directly for Web Development, AI projects, or career opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Email */}
            <div className="academic-card p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-[#0b0f17] border border-[#1e2638] text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">Email</span>
                  <a
                    href="mailto:atulllmishra1@gmail.com"
                    className="text-xs font-bold text-white hover:text-slate-300 transition-colors font-mono"
                  >
                    atulllmishra1@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard("atulllmishra1@gmail.com", "email")}
                className="p-1.5 rounded bg-[#0b0f17] border border-[#1e2638] text-slate-400 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone */}
            <div className="academic-card p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-[#0b0f17] border border-[#1e2638] text-slate-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">Phone / WhatsApp</span>
                  <a
                    href="tel:+917458844711"
                    className="text-xs font-bold text-white hover:text-slate-300 transition-colors font-mono"
                  >
                    (+91) 74588 44711
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard("(+91) 74588 44711", "phone")}
                className="p-1.5 rounded bg-[#0b0f17] border border-[#1e2638] text-slate-400 hover:text-white transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Resume Card */}
            <div className="academic-card p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-[#0b0f17] border border-[#1e2638] text-slate-400">
                  <Download className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">Resume</span>
                  <span className="text-xs text-white font-mono">Download PDF</span>
                </div>
              </div>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded bg-blue-600 text-white font-medium text-xs hover:bg-blue-500 transition-colors"
              >
                Download
              </a>
            </div>

            {/* Location */}
            <div className="academic-card p-4 flex items-center gap-3">
              <div className="p-2 rounded bg-[#0b0f17] border border-[#1e2638] text-slate-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">Campus</span>
                <p className="text-xs font-bold text-white">
                  MCAET, ANDUAT University Campus
                </p>
                <p className="text-[11px] text-slate-400 font-mono">
                  Ayodhya / Uttar Pradesh, India
                </p>
              </div>
            </div>

            {/* Social Profiles Grid */}
            <div className="academic-card p-4 space-y-2.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">
                Social Profiles
              </span>
              <div className="grid grid-cols-2 gap-1.5">
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
                    className="flex items-center justify-between p-2 rounded bg-[#0b0f17] border border-[#1e2638] text-xs font-mono text-slate-300 hover:text-white transition-colors"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Simple Form */}
          <div className="lg:col-span-7 academic-card p-6 border border-[#1e2638]">
            <h3 className="text-base font-bold text-white mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Fill out your details below and I will reply via email.
            </p>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#1e2638] text-white flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-slate-300 text-xs max-w-sm mx-auto">
                  Thank you for reaching out. I will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-3 py-1.5 rounded bg-[#0b0f17] border border-[#1e2638] text-xs font-mono text-slate-300 hover:text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-[#0b0f17] border border-[#1e2638] rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full bg-[#0b0f17] border border-[#1e2638] rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Subject / Inquiry"
                    className="w-full bg-[#0b0f17] border border-[#1e2638] rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message..."
                    className="w-full bg-[#0b0f17] border border-[#1e2638] rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded font-medium text-xs text-white bg-blue-600 hover:bg-blue-500 flex items-center justify-center gap-2 transition-all"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
