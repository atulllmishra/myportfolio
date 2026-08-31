"use client";

import { useState, useRef, useEffect } from "react";
import { Send, RefreshCw, ChevronRight, Zap, Sparkles } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { audioHaptics } from "@/lib/audioHaptics";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

const initialBotMessage: ChatMessage = {
  id: "welcome-1",
  sender: "bot",
  text: "Hello. I'm Atul's virtual clone. Ask me about his projects, background, or tech stack. I'm faster than email.",
  timestamp: "Live",
};

const suggestedPrompts = [
  "What projects has Atul built?",
  "Tell me about heyBuddy (AI EdTech)",
  "Tell me about ProcureHub B2B SaaS",
  "What is Atul's tech stack?",
  "How can I contact Atul?",
];

export default function AIChatbotWidget() {
  const [messages, setMessages] = useState<ChatMessage[]>([initialBotMessage]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const isLight = theme === "light";
  const accentColor = isLight ? "rgb(196, 86, 58)" : "rgb(224, 122, 95)";

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

    audioHaptics.playClick(600, 0.05, "sine");

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

      if (lower.includes("heybuddy") || lower.includes("edtech")) {
        botResponse = `heyBuddy (Ongoing) is an AI EdTech video platform.\n\nMechanics:\nBuilt a custom pipeline wrapping open-weight TTS models and LLMs to generate structured JSON lecture nodes, stitched into a synchronized video timeline via client-side Canvas APIs.`;
      }
      else if (lower.includes("procurehub") || lower.includes("b2b")) {
        botResponse = `ProcureHub is a transparent B2B IT Procurement platform.\n\nMechanics:\nImplemented a cryptographic bid-sealing mechanism using subtle crypto API and smart contracts, ensuring bid amounts remain completely hidden until the designated opening window.`;
      }
      else if (lower.includes("smart agri") || lower.includes("hackathon")) {
        botResponse = `Smart Agri (March 2025) - IIT Guwahati ImpactHack Finalist.\n\nMechanics:\nEngineered a low-bandwidth progressive web app (PWA) architecture with aggressive local caching for rural farmers on intermittent 3G networks.`;
      }
      else if (lower.includes("mcaet") || lower.includes("chatbot")) {
        botResponse = `MCAET Chatbot (Live) is the official generative AI assistant for MCAET college.\n\nMechanics:\nConstructed a highly specific RAG vector index using the college's entire administrative handbook and syllabus to prevent hallucination.`;
      }
      else if (lower.includes("project") || lower.includes("portfolio")) {
        botResponse = `1. heyBuddy - AI EdTech Video\n2. ProcureHub - B2B Procurement\n3. Smart Agri - IIT Hackathon Finalist\n4. MCAET Chatbot - Campus AI`;
      }
      else if (lower.includes("contact") || lower.includes("email")) {
        botResponse = `Email: atulllmishra1@gmail.com\nGitHub: github.com/atulllmishra/\nLinkedIn: linkedin.com/in/atul-kumar-mishra-3b3939363`;
      }
      else {
        botResponse = `I process text. Try asking about ProcureHub, heyBuddy, or Smart Agri.`;
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
      audioHaptics.playClick(400, 0.05, "sine");
    }, 600);
  };

  return (
    <section id="ai-assistant" className="py-20 sm:py-24 relative border-t border-card scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        <div className="max-w-2xl mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-main border border-card text-xs font-mono font-bold uppercase" style={{ color: accentColor }}>
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Chatroom</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
            VIRTUAL <span style={{ color: accentColor }}>CLONE</span>
          </h2>
          <p className="text-secondary text-xs sm:text-sm font-medium">
            Ask anything about the stack, the projects, or the background.
          </p>
        </div>

        <div className="overflow-hidden flex flex-col h-[460px] sm:h-[520px] bg-card border border-card shadow-2xl rounded-2xl sm:rounded-3xl">

          <div className="px-4 sm:px-5 py-3.5 bg-main border-b border-card flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-card border border-card" style={{ color: accentColor }}>
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-mono font-bold flex items-center gap-1.5 text-primary">
                  atul_virtual_clone
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                </h3>
                <span className="text-[10px] font-mono text-secondary">RAG Knowledge Base</span>
              </div>
            </div>

            <button
              onClick={() => {
                setMessages([initialBotMessage]);
                audioHaptics.playSwitch();
              }}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-card hover:bg-main text-xs font-mono text-secondary hover:text-primary transition-colors border border-card cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          <div ref={chatContainerRef} className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-3.5 bg-card">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <span className="text-[10px] font-mono text-secondary mb-1">
                  {msg.sender === "user" ? "You" : "Virtual Clone"} • {msg.timestamp}
                </span>

                <div
                  className={`max-w-[92%] sm:max-w-[88%] rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs leading-relaxed font-medium ${
                    msg.sender === "user"
                      ? "text-white shadow-md"
                      : "bg-main border border-card text-primary whitespace-pre-line shadow-sm"
                  }`}
                  style={msg.sender === "user" ? { backgroundColor: accentColor } : {}}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex flex-col items-start space-y-1">
                <span className="text-[10px] font-mono text-secondary">Virtual Clone</span>
                <div className="px-3.5 py-2 rounded-xl bg-main border border-card text-secondary text-xs font-mono">
                  Synthesizing response...
                </div>
              </div>
            )}
          </div>

          <div className="px-3 sm:px-3.5 py-2 sm:py-2.5 bg-main border-t border-card overflow-x-auto flex items-center gap-2">
            <span className="text-[10px] font-mono text-secondary shrink-0 font-bold">Prompts:</span>
            {suggestedPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="shrink-0 text-[10px] sm:text-[11px] font-mono px-2.5 sm:px-3 py-1 rounded-full bg-card hover:bg-main border border-card text-secondary hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>{prompt}</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-main border-t border-card flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                if (e.target.value.length > inputValue.length) audioHaptics.playKey();
              }}
              placeholder="Ask anything..."
              className="flex-1 bg-card border border-card rounded-xl px-3.5 sm:px-4 py-2.5 text-xs text-primary placeholder:text-secondary focus:outline-none focus:border-accent transition-colors font-mono"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="px-3.5 sm:px-4 py-2.5 rounded-xl disabled:opacity-40 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer hover:-translate-y-0.5 shrink-0"
              style={{ backgroundColor: accentColor }}
            >
              <span>SEND</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
