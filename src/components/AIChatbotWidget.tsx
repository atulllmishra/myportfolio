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
  text: "Hello! I am Atul's AI Portfolio Assistant. Ask me anything about Atul's CSE degree at MCAET ANDUAT, his IIT Guwahati ImpactHack 2025 Finalist project (Smart Agri), MCAET AI Chatbot, ProcureHub, or social links!",
  timestamp: "System",
};

const suggestedPrompts = [
  "Tell me about the IIT Guwahati ImpactHack project",
  "What is Smart Agri?",
  "What are Atul's social media links?",
  "What is Atul's education background?",
];

export default function AIChatbotWidget() {
  const [messages, setMessages] = useState<ChatMessage[]>([initialBotMessage]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
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

      if (lower.includes("smart agri") || lower.includes("hackathon") || lower.includes("iit") || lower.includes("guwahati") || lower.includes("impacthack")) {
        botResponse = "Atul & his teammates were Finalists at IIT Guwahati's ImpactHack Hackathon 2025! They built Smart Agri (smart-agri.vercel.app) — a precision agritech platform helping farmers predict live city temperatures and crop market prices accurately.";
      } else if (lower.includes("project") || lower.includes("procurehub") || lower.includes("e-commerce")) {
        botResponse = "Atul's key deployed projects:\n1. Smart Agri (smart-agri.vercel.app) - IIT Guwahati ImpactHack '25 Finalist\n2. MCAET AI Chatbot (mcaetchatbot-2.onrender.com) - Live AI college chatbot integrated on mcaet.vercel.app\n3. ProcureHub (procurehub.vercel.app) - B2B Procurement SaaS\n4. E-Commerce Store (ecommerce-store-ivory-sigma.vercel.app) - Storefront with Helpcenter.";
      } else if (lower.includes("social") || lower.includes("link") || lower.includes("linkedin") || lower.includes("github") || lower.includes("instagram")) {
        botResponse = "Connect with Atul:\n- LinkedIn: linkedin.com/in/atul-kumar-mishra-3b3939363\n- GitHub: github.com/atulllmishra/\n- Instagram: instagram.com/atulllmishra/\n- Email: atulllmishra1@gmail.com";
      } else if (lower.includes("mcaet") || lower.includes("college") || lower.includes("education") || lower.includes("cse")) {
        botResponse = "Atul is a B.Tech Computer Science & Engineering (CSE) student at Mahamaya College of Agricultural Engineering and Technology (MCAET), ANDUAT. Core skills: Data Structures & Algorithms (C++), Web Development (React / Next.js / TS), and Generative AI.";
      } else {
        botResponse = "Atul is a CSE student at MCAET ANDUAT, IIT Guwahati ImpactHack 2025 Finalist, and Web/AI Developer. Visit GitHub (github.com/atulllmishra/) or email atulllmishra1@gmail.com!";
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <section id="ai-assistant" className="py-24 relative bg-[#0a0e17] border-t border-[#1e293b]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-10 space-y-3">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block font-semibold">
            05 / Interactive AI Assistant
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Talk with <span className="gradient-text-codehelp">Atul&apos;s AI Agent</span>
          </h2>
          <p className="text-slate-400 text-sm">
            An embedded conversational agent trained on Atul&apos;s IIT Guwahati ImpactHack milestone, CSE degree, and projects.
          </p>
        </div>

        {/* Chat Window */}
        <div className="codehelp-card overflow-hidden flex flex-col h-[520px]">
          
          {/* Header Bar */}
          <div className="px-6 py-4 bg-[#0a0e17] border-b border-[#1e293b] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-mono font-bold text-white flex items-center gap-2">
                  atul_ai_agent
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                </h3>
                <span className="text-[11px] font-mono text-slate-400">CSE & AI Portfolio Twin</span>
              </div>
            </div>

            <button
              onClick={() => setMessages([initialBotMessage])}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0a0e17] hover:bg-[#1e293b] text-xs font-mono text-slate-300 hover:text-white transition-colors border border-[#1e293b]"
              title="Reset Chat"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-[#0a0e17]/80">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <span className="text-[10px] font-mono text-slate-500 mb-1">
                  {msg.sender === "user" ? "You" : "AI Agent"} • {msg.timestamp}
                </span>

                <div
                  className={`max-w-[85%] rounded-xl px-4 py-3 text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/20"
                      : "bg-[#131c2e] border border-[#1e293b] text-slate-200 whitespace-pre-line"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex flex-col items-start space-y-1">
                <span className="text-[10px] font-mono text-slate-500">AI Agent</span>
                <div className="px-4 py-3 rounded-xl bg-[#131c2e] border border-[#1e293b] text-blue-400 text-xs font-mono">
                  Thinking...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chips */}
          <div className="px-4 py-2.5 bg-[#0a0e17] border-t border-[#1e293b] overflow-x-auto flex items-center gap-2">
            <span className="text-[11px] font-mono text-slate-500 shrink-0">Prompts:</span>
            {suggestedPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="shrink-0 text-xs font-mono px-3 py-1 rounded-lg bg-[#131c2e] hover:bg-[#1e293b] text-slate-300 hover:text-white border border-[#1e293b] transition-colors flex items-center gap-1"
              >
                <span>{prompt}</span>
                <ChevronRight className="w-3 h-3 text-blue-400" />
              </button>
            ))}
          </div>

          {/* Form Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-4 bg-[#0a0e17] border-t border-[#1e293b] flex items-center gap-3"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a question about Smart Agri, IIT Guwahati hackathon, or projects..."
              className="flex-1 bg-[#131c2e] border border-[#1e293b] rounded-lg px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 transition-colors"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-bold text-xs flex items-center gap-2 transition-all"
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
