"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, motion } from "framer-motion";

const defaultSpring = {
  type: "spring" as const,
  stiffness: 280,
  damping: 24,
};

interface MetricItem {
  target: number;
  suffix: string;
  prefix?: string;
  label: string;
  subtext: string;
  highlightColor?: string;
}

const metrics: MetricItem[] = [
  {
    target: 9,
    suffix: "+ Years",
    label: "Industry Experience",
    subtext: "Distributed backends & AI systems",
    highlightColor: "#FF9A62",
  },
  {
    target: 98,
    suffix: "M+ Records",
    label: "Active DB Scale",
    subtext: "High-throughput real-time indexing",
    highlightColor: "#9C92FF",
  },
  {
    target: 400,
    suffix: "M+ Records",
    label: "Migrated Scale",
    subtext: "Zero-downtime enterprise data streams",
    highlightColor: "#FF9A62",
  },
  {
    target: 2,
    suffix: "M+ Users",
    label: "Impacted Globally",
    subtext: "Sub-millisecond latency systems",
    highlightColor: "#9C92FF",
  },
];

function CountUpMetric({ metric, index }: { metric: MetricItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(shouldReduceMotion ? metric.target : 0);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      if (shouldReduceMotion) setCount(metric.target);
      return;
    }

    let start = 0;
    const end = metric.target;
    const duration = 1600; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth ease-out quad
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easedProgress * end);
      
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, metric.target, shouldReduceMotion]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ ...defaultSpring, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: defaultSpring }}
      className="tactile-card p-6 flex flex-col justify-between relative overflow-hidden group"
    >
      {/* Subtle organic corner accent */}
      <div
        className="absolute -top-12 -right-12 w-24 h-24 rounded-full opacity-10 blur-xl pointer-events-none group-hover:opacity-20 transition-opacity"
        style={{ backgroundColor: metric.highlightColor }}
      />

      <div className="space-y-1">
        <div className="flex items-baseline gap-1 font-mono tracking-tight font-black">
          <span className="text-3xl sm:text-4xl lg:text-5xl text-[#F3F4F6]">
            {metric.prefix}
            {count}
          </span>
          <span
            className="text-lg sm:text-xl font-bold tracking-tight"
            style={{ color: metric.highlightColor }}
          >
            {metric.suffix.replace(/^\d+/, "")}
          </span>
        </div>

        <h4 className="text-sm font-semibold text-[#F3F4F6] tracking-tight pt-1">
          {metric.label}
        </h4>
      </div>

      <p className="text-xs text-[#9CA3AF] mt-3 leading-relaxed border-t border-[#23232C] pt-3">
        {metric.subtext}
      </p>
    </motion.div>
  );
}

export default function ImpactMetrics() {
  return (
    <section className="w-full py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((metric, idx) => (
            <CountUpMetric key={metric.label} metric={metric} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
