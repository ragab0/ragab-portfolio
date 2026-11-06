"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { EXPERIENCE_ITEMS, EDUCATION_ITEMS } from "@/assets/data/journey-data";
import { cn } from "@/lib/utils";

type TimelineType = "work" | "edu";

interface TimelineItemProps {
  type: TimelineType;
  title: string;
  company: string;
  period: string;
  description: string;
  index: number;
}

function TimelineItem({
  type,
  title,
  company,
  period,
  description,
  index,
}: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={cn(
        "relative grid grid-cols-[36px_1fr] gap-x-7 pb-16 z-[2] last:pb-0",
      )}
    >
      <div className="flex justify-center pt-[7px]">
        <div
          className={cn(
            "w-[14px] h-[14px] rounded-full shrink-0 relative z-[3]",
            type === "work"
              ? "bg-primary shadow-[0_0_0_3px_var(--secondary-bg),0_0_0_5px_rgba(128,128,128,0.2)]"
              : "bg-textMuted shadow-[0_0_0_3px_var(--secondary-bg),0_0_0_5px_rgba(128,128,128,0.1)]",
          )}
        />
      </div>
      <div className="flex flex-col gap-[11px] pt-[2px]">
        <div className="flex items-center gap-[14px] flex-wrap">
          <span
            className={cn(
              "font-mono text-[10px] font-bold tracking-[2px] px-4 py-1.5 rounded-full uppercase border",
              type === "work"
                ? "bg-primary/10 text-primary border-primary/20"
                : "bg-textMuted/10 text-textMuted border-textMuted/20",
            )}
          >
            {type === "work" ? "WORK" : "EDUCATION"}
          </span>
          <span className="font-main text-xl sm:text-2xl font-bold tracking-wider text-textMuted">
            {period}
          </span>
        </div>
        <h3 className="font-main text-2xl sm:text-4xl font-bold tracking-tight text-textPrimary capitalize leading-[1.1]">
          {title}
        </h3>
        <span className="font-mono text-sm font-bold tracking-[3px] text-textMuted capitalize">
          {company}
        </span>
        <p className="font-mono text-xs sm:text-[13px] font-medium text-textSecondary leading-relaxed max-w-[560px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function TimelineSection({
  title,
  items,
  type,
  index,
}: {
  title: string;
  items: any[];
  type: TimelineType;
  index: number;
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="flex flex-col md:flex-row md:items-start lg:justify-between w-full">
      {/* Left Sidebar - Plain div, no animation */}
      <div className="self-start xl:px-0 pr-8 md:w-[200px] w-full shrink-0 mb-8 md:mb-0">
        <h4 className="font-mono text-xs uppercase tracking-widest opacity-70 mb-4 font-light text-textSecondary">
          <div className="font-mono inline-block whitespace-pre-wrap tracking-tight">
            <span className="inline" style={{ color: "inherit" }}>
              {`{ ${index + 1} }`}
            </span>
            <span
              className="ml-1 inline-block animate-blink"
              style={{ opacity: 0.8 }}
            >
              _
            </span>
          </div>
        </h4>
        <div>
          <h5 className="font-medium text-2xl mb-4 xl:leading-5 text-textPrimary">
            <span className="inline-block word">{title}</span>
          </h5>
          <p className="text-sm text-textSecondary/60 leading-relaxed max-w-[180px]">
            {type === "work"
              ? "Professional journey and work history."
              : "Academic background and qualifications."}
          </p>
        </div>
      </div>

      {/* Right Content - Timeline with Scroll Progress */}
      <div
        ref={containerRef}
        className="relative flex-1 max-w-[800px] md:ml-12 pl-0"
      >
        {/* Rail */}
        <div className="absolute top-0 bottom-0 left-[18px] w-[2px] -translate-x-1/2 rounded-[2px] pointer-events-none z-0 bg-border/30" />
        {/* Animated Live Line */}
        <motion.div
          className="absolute top-0 bottom-0 left-[18px] w-[2px] -translate-x-1/2 rounded-[2px] pointer-events-none z-[1] origin-top bg-primary shadow-[0_0_16px_rgba(100,255,218,0.4),0_0_4px_rgba(100,255,218,0.8)]"
          style={{ scaleY }}
        />

        <div className="space-y-0">
          {items.map((item, idx) => (
            <TimelineItem
              key={`${type}-${idx}`}
              {...item}
              type={type}
              index={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Journey() {
  return (
    <section
      id="experience"
      className="py-32 relative overflow-hidden bg-mainBg"
    >
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-24 text-center">
          <h2 className="text-textPrimary text-4xl md:text-5xl font-bold mb-6 mx-auto text-center">
            {/* Experience & Education */}
            My Journey
          </h2>
          <p className="max-w-2xl text-lg text-textSecondary leading-relaxed mx-auto text-center">
            A look at my professional experience and academic background.
          </p>
        </div>

        {/* Section content */}
        <div className="space-y-32">
          <TimelineSection
            title="Experience"
            items={EXPERIENCE_ITEMS}
            type="work"
            index={0}
          />

          <TimelineSection
            title="Education"
            items={EDUCATION_ITEMS}
            type="edu"
            index={1}
          />
        </div>
      </div>
    </section>
  );
}
