"use client";

import { useState, useRef, useEffect } from "react";
import { Send, RefreshCw, ChevronRight, Bot } from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

const initialBotMessage: ChatMessage = {
  id: "welcome-1",
  sender: "bot",
  text: "Hello! I am Atul's AI Assistant. Feel free to ask me anything about Atul's background in Computer Science, featured projects (like heyBuddy, ProcureHub, or Smart Agri), core technical skills, or how to get in touch!",
  timestamp: "System",
};

const suggestedPrompts = [
  "What projects has Atul built?",
  "Tell me about heyBuddy (AI EdTech)",
  "Tell me about ProcureHub B2B SaaS",
  "What is Atul's tech stack & DSA skills?",
  "How can I contact Atul?",
];


export default function AIChatbotWidget() {
  const [messages, setMessages] = useState<ChatMessage[]>([initialBotMessage]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (messages.length > 1 || isTyping) {
      scrollToBottom();
    }
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "";
      const lower = text.toLowerCase();

      // heyBuddy queries
      if (lower.includes("heybuddy") || lower.includes("hey buddy") || lower.includes("edtech") || lower.includes("lecture") || lower.includes("video solution")) {
        botResponse = `heyBuddy (Ongoing Project • August 2026 — Present) is an online AI EdTech video platform created by Atul.

Key Features & Capabilities:
• Multilingual AI Video Solutions: Automatically generates video & voice answers to user questions in multiple languages.
• Lecture Difficulty Transformation: Converts lecture content dynamically into beginner, intermediate, or advanced levels tailored to learner needs.
• Adaptive Learning Engine: Powered by Generative AI, Next.js, and LLMs for personalized education.`;
      }
      // ProcureHub queries
      else if (lower.includes("procurehub") || lower.includes("b2b") || lower.includes("bribery") || lower.includes("bid") || lower.includes("procurement")) {
        botResponse = `ProcureHub (procurehub.vercel.app | Timeline: Oct 1, 2024 — Sept 24, 2025) is a transparent, bribeless B2B IT Procurement & Bid Management SaaS platform created by Atul.

Key Features & Insights:
• Eliminates corruption & bribery in IT maintenance contracts in India.
• Equal Opportunity Bidding: Enables small contractors to compete fairly with enterprises based on technical merit.
• Smart Contracts: Blockchain-backed execution for audit trails & compliance.
• Real-time Analytics: Insights into bids, contract status, and contractor ratings.
• Verified Contractors Protocol: Automated vetting of contractor credentials & quality ratings.
• 3-Step Workflow: Post Requirement → Open Bidding → Fair Selection.`;
      }
      // Smart Agri queries
      else if (lower.includes("smart agri") || lower.includes("hackathon") || lower.includes("iit") || lower.includes("guwahati") || lower.includes("impacthack") || lower.includes("farmer") || lower.includes("crop")) {
        botResponse = `Smart Agri (smart-agri.vercel.app | Timeline: March 2025) was named Finalist at IIT Guwahati ImpactHack Hackathon 2025!

What it does:
• Intelligent precision farming platform for agricultural decision support.
• Real-time city temperature & weather condition forecasting for farmers.
• Predictive analytics engine for live crop market prices & yield insights.
• Built with React, JavaScript, and Agritech UI algorithms.`;
      }
      // MCAET Chatbot queries
      else if (lower.includes("mcaet") || lower.includes("college bot") || lower.includes("render") || lower.includes("portal")) {
        botResponse = `MCAET Generative AI Chatbot (mcaetchatbot-2.onrender.com | Timeline: July 2026 — Present) is a custom conversational AI bot engineered by Atul for Mahamaya College of Agricultural Engineering and Technology (MCAET, ANDUAT).

Highlights:
• Deployed live on Render & integrated directly into official college web portal (mcaet.vercel.app).
• Automated query handling for admissions, student services, and campus info.
• Built with Node.js, LLMs, REST APIs, and contextual prompt engineering.`;
      }
      // E-Commerce queries
      else if (lower.includes("ecommerce") || lower.includes("e-commerce") || lower.includes("store") || lower.includes("shop")) {
        botResponse = `E-Commerce Storefront (ecommerce-store-ivory-sigma.vercel.app | Timeline: August 2026 — Present) is a full-stack web application featuring:
• Responsive product catalog navigation & category filtering.
• Integrated AI Helpcenter chatbot for customer query resolution.
• Cart state management & checkout workflow built with React, TypeScript & Tailwind CSS.`;
      }
      // All Projects Overview
      else if (lower.includes("project") || lower.includes("work") || lower.includes("portfolio") || lower.includes("built")) {
        botResponse = `Here are Atul's 5 major projects with timelines:

1. heyBuddy (August 2026 — Present, Ongoing) - AI Multilingual EdTech Video & Lecture Platform.
2. E-Commerce Store (August 2026 — Present) - Storefront with AI Helpcenter (ecommerce-store-ivory-sigma.vercel.app).
3. MCAET AI Chatbot (July 2026 — Present) - Live AI college bot on mcaet.vercel.app (mcaetchatbot-2.onrender.com).
4. Smart Agri (March 2025) - IIT Guwahati ImpactHack 2025 Finalist Agritech Platform (smart-agri.vercel.app).
5. ProcureHub (Oct 1, 2024 — Sept 24, 2025) - B2B Transparent Procurement & Bribeless Bid SaaS (procurehub.vercel.app).`;
      }
      // Education & Degree
      else if (lower.includes("education") || lower.includes("college") || lower.includes("degree") || lower.includes("university") || lower.includes("anduat") || lower.includes("cse")) {
        botResponse = `Atul's Academic Profile:
• Degree: B.Tech in Computer Science & Engineering (CSE) (2024 — Present).
• Institution: Mahamaya College of Agricultural Engineering and Technology (MCAET), ANDUAT University, Ayodhya / UP, India.
• Coursework: Data Structures & Algorithms, C++ OOP, DBMS & SQL, Operating Systems, Web Technologies.`;
      }
      // Technical Skills & DSA
      else if (lower.includes("skill") || lower.includes("c++") || lower.includes("dsa") || lower.includes("stack") || lower.includes("react") || lower.includes("next")) {
        botResponse = `Atul's Core Technical Skills:
• Languages: C++ (OOP, STL, Memory Management), JavaScript (ES6+), TypeScript, HTML5/CSS3.
• Web Frameworks: React.js, Next.js (App Router), Tailwind CSS, Node.js, Express.
• AI & LLMs: Gemini API, Multilingual Video Synthesis, Prompt Engineering, RAG Systems, Conversational Bot Architecture.
• CSE Fundamentals: Data Structures & Algorithms, DBMS, Operating Systems, REST APIs.`;
      }
      // Contact & Links
      else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("social") || lower.includes("linkedin") || lower.includes("github") || lower.includes("resume")) {
        botResponse = `Connect with Atul:
• Email: atulllmishra1@gmail.com
• Phone: (+91) 74588 44711
• GitHub: github.com/atulllmishra/
• LinkedIn: linkedin.com/in/atul-kumar-mishra-3b3939363
• Instagram: instagram.com/atulllmishra/
• Resume: Download PDF directly from the top navigation bar!`;
      }
      // Default Response
      else {
        botResponse = `Atul Kumar Mishra is a B.Tech CSE student (2024 — Present) at MCAET ANDUAT, developer of heyBuddy (AI EdTech Platform), IIT Guwahati ImpactHack 2025 Finalist, and Full-Stack / AI Engineer.`;
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <section id="ai-assistant" className="py-20 relative bg-[#0b0f17] border-t border-[#1e2638] scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-8 space-y-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
            AI Assistant
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Talk with Atul&apos;s Portfolio Agent
          </h2>
          <p className="text-slate-400 text-sm">
            Trained on ProcureHub, Smart Agri, MCAET AI Chatbot, education, and technical background.
          </p>
        </div>

        {/* Chat Window */}
        <div className="academic-card overflow-hidden flex flex-col h-[500px] border border-[#1e2638]">

          {/* Header Bar */}
          <div className="px-5 py-3.5 bg-[#0b0f17] border-b border-[#1e2638] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded bg-[#121824] border border-[#1e2638] text-slate-300">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                  atul_ai_agent
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </h3>
                <span className="text-[10px] font-mono text-slate-400">CSE & AI Portfolio Twin</span>
              </div>
            </div>

            <button
              onClick={() => setMessages([initialBotMessage])}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#121824] hover:bg-[#1e2638] text-xs font-mono text-slate-300 hover:text-white transition-colors border border-[#1e2638]"
              title="Reset Chat"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          {/* Messages Container */}
          <div ref={chatContainerRef} className="flex-1 p-5 overflow-y-auto space-y-3.5 bg-[#0b0f17]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"
                  }`}
              >
                <span className="text-[10px] font-mono text-slate-500 mb-1">
                  {msg.sender === "user" ? "You" : "AI Agent"} • {msg.timestamp}
                </span>

                <div
                  className={`max-w-[88%] rounded-lg px-3.5 py-2.5 text-xs leading-relaxed ${msg.sender === "user"
                      ? "bg-blue-600 text-white font-medium"
                      : "bg-[#121824] border border-[#1e2638] text-slate-200 whitespace-pre-line"
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex flex-col items-start space-y-1">
                <span className="text-[10px] font-mono text-slate-500">AI Agent</span>
                <div className="px-3.5 py-2 rounded-lg bg-[#121824] border border-[#1e2638] text-slate-400 text-xs font-mono">
                  Searching knowledge base...
                </div>
              </div>
            )}
          </div>

          {/* Suggested Prompt Chips */}
          <div className="px-3.5 py-2 bg-[#0b0f17] border-t border-[#1e2638] overflow-x-auto flex items-center gap-1.5">
            <span className="text-[10px] font-mono text-slate-500 shrink-0">Suggestions:</span>
            {suggestedPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="shrink-0 text-[11px] font-mono px-2.5 py-1 rounded bg-[#121824] hover:bg-[#1e2638] text-slate-300 hover:text-white border border-[#1e2638] transition-colors flex items-center gap-1"
              >
                <span>{prompt}</span>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </button>
            ))}
          </div>

          {/* Form Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#0b0f17] border-t border-[#1e2638] flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about ProcureHub, Smart Agri, MCAET AI Chatbot, CSE degree..."
              className="flex-1 bg-[#121824] border border-[#1e2638] rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-colors"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="px-3.5 py-2 rounded bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-medium text-xs flex items-center gap-1.5 transition-all"
            >
              <span>Send</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
