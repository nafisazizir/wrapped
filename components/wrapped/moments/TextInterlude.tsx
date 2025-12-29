"use client";

import { cn } from "@/lib/utils";
import { Section } from "../layout/Section";

interface TextInterludeProps {
  children: React.ReactNode;
  timeContext?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function TextInterlude({
  children,
  timeContext,
  className,
  size = "md",
}: TextInterludeProps) {
  const sizeClasses = {
    sm: "text-base md:text-lg",
    md: "text-lg md:text-xl",
    lg: "text-xl md:text-2xl",
    xl: "text-2xl md:text-4xl lg:text-5xl font-light tracking-tight",
  };

  return (
    <Section
      className={cn(
        "max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-20",
        className
      )}
    >
      {timeContext && (
        <p className="text-sm text-muted-foreground italic mb-4">
          {timeContext}
        </p>
      )}
      <div className={cn("leading-relaxed", sizeClasses[size])}>{children}</div>
    </Section>
  );
}
