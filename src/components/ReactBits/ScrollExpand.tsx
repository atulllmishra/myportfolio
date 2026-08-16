"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollExpandProps {
  title?: string;
  tagline?: string;
  quote?: string;
  bgImageUrl?: string;
}

export default function ScrollExpand({
  title = "STANCE",
  tagline = "Time & Patience",
  quote = "The Lucknow–Howrah Express takes 28 hours. You learn patience on platform 4 at midnight. You learn to build things that last.",
  bgImageUrl = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop",
}: ScrollExpandProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.45], [0.82, 1]);
  const borderRadius = useTransform(scrollYProgress, [0.1, 0.45], ["32px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.35], [0.4, 1]);
  const textY = useTransform(scrollYProgress, [0.25, 0.5], [40, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);

  return (
    <section ref={containerRef} className="relative min-h-[140vh] py-16 bg-main overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            scale,
            borderRadius,
            opacity,
          }}
          className="relative w-full max-w-6xl h-[82vh] overflow-hidden shadow-2xl border border-card"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bgImageUrl}
            alt="Philosophy Background"
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.4] contrast-125 sepia-[0.3]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-main via-main/70 to-transparent" />
          <div className="absolute inset-0 bg-radial from-transparent via-main/50 to-main" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-12 max-w-4xl mx-auto">
            <motion.div style={{ y: textY, opacity: textOpacity }} className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-main border border-card backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                <span className="text-xs font-mono uppercase tracking-[0.3em] font-semibold text-accent">
                  {tagline}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-relaxed md:leading-snug tracking-tight">
                “{quote}”
              </h2>

              <div className="pt-4 flex items-center justify-center gap-3">
                <div className="w-12 h-[1px] bg-accent opacity-50" />
                <span className="text-xs font-mono tracking-[0.25em] text-secondary uppercase">
                  {title}
                </span>
                <div className="w-12 h-[1px] bg-accent opacity-50" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
