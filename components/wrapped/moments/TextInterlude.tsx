"use client";

import { cn } from "@/lib/utils";
import { Section } from "../layout/Section";
import { FadeIn } from "../typography/TextReveal";

interface TextInterludeProps {
  children: React.ReactNode;
  timeContext?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "light";
}

export function TextInterlude({
  children,
  timeContext,
  className,
  size = "md",
  variant = "default",
}: TextInterludeProps) {
  const sizeClasses = {
    sm: {
      default: "text-lg md:text-xl",
      light: "text-lg md:text-xl",
    },
    md: {
      default: "text-xl md:text-2xl",
      light: "text-xl md:text-2xl",
    },
    lg: {
      default: "text-3xl md:text-4xl font-medium tracking-tight",
      light: "text-2xl md:text-3xl",
    },
    xl: {
      default: "text-4xl md:text-6xl font-bold tracking-tighter",
      light: "text-3xl md:text-5xl font-light tracking-tight",
    },
  };

  return (
    <Section
      className={cn("max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24", className)}
    >
      <FadeIn>
        {timeContext && (
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-primary/60 uppercase tracking-widest">
              &gt; {timeContext}
            </span>
            <div className="h-px flex-1 bg-border/50" />
          </div>
        )}
        <div className={cn("leading-relaxed", sizeClasses[size][variant])}>
          {children}
        </div>
      </FadeIn>
    </Section>
  );
}
