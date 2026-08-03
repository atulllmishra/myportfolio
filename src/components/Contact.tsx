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
    <section id="contact" className="py-24 relative bg-[#0a0e17] border-t border-[#1e293b]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block font-semibold">
            06 / Direct Inquiry & Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get in <span className="gradient-text-codehelp">Touch</span>
          </h2>
          <p className="text-slate-400 text-base">
            Reach out directly for Software Development, Web Engineering, Generative AI projects, or career opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email */}
            <div className="codehelp-card p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase block font-semibold">Email</span>
                  <a
                    href="mailto:atulllmishra1@gmail.com"
                    className="text-sm font-bold text-white hover:text-blue-400 transition-colors font-mono"
                  >
                    atulllmishra1@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard("atulllmishra1@gmail.com", "email")}
                className="p-2 rounded-lg bg-[#0a0e17] border border-[#1e293b] text-slate-400 hover:text-white hover:border-blue-500/40 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-blue-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone */}
            <div className="codehelp-card p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase block font-semibold">Phone / WhatsApp</span>
                  <a
                    href="tel:+917458844711"
                    className="text-sm font-bold text-white hover:text-purple-400 transition-colors font-mono"
                  >
                    (+91) 74588 44711
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard("(+91) 74588 44711", "phone")}
                className="p-2 rounded-lg bg-[#0a0e17] border border-[#1e293b] text-slate-400 hover:text-white hover:border-purple-500/40 transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-blue-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Resume Card */}
            <div className="codehelp-card p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase block font-semibold">Official Resume</span>
                  <span className="text-xs text-white font-mono">Download PDF Version</span>
                </div>
              </div>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-blue-600 text-white font-bold text-xs hover:bg-blue-500 transition-colors"
              >
                Download
              </a>
            </div>

            {/* Location */}
            <div className="codehelp-card p-5 flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase block font-semibold">Campus Location</span>
                <p className="text-sm font-bold text-white">
                  MCAET, ANDUAT Campus
                </p>
                <p className="text-xs text-slate-400 font-mono">
                  Ambedkar Nagar / Ayodhya, Uttar Pradesh, India
                </p>
              </div>
            </div>

            {/* Social Profiles Grid */}
            <div className="codehelp-card p-5 space-y-3">
              <span className="text-[11px] font-mono text-slate-400 uppercase block font-semibold">
                Social Profiles & Networks
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
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#0a0e17] border border-[#1e293b] text-xs font-mono text-slate-300 hover:text-white hover:border-blue-500/40 transition-colors"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 codehelp-card p-8 border border-[#1e293b]">
            <h3 className="text-lg font-bold text-white mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out your details below and I will get back to you promptly.
            </p>

            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-slate-300 text-xs max-w-sm mx-auto">
                  Thank you for reaching out. I have received your message and will reply via email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-lg bg-[#0a0e17] border border-[#1e293b] text-xs font-mono text-blue-400 hover:bg-[#131c2e]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-[#0a0e17] border border-[#1e293b] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full bg-[#0a0e17] border border-[#1e293b] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Subject / Inquiry</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="SDE Role / Web Project / AI Integration"
                    className="w-full bg-[#0a0e17] border border-[#1e293b] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your message or opportunity..."
                    className="w-full bg-[#0a0e17] border border-[#1e293b] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg font-bold text-xs text-white bg-blue-600 hover:bg-blue-500 flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/20"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
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
