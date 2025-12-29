"use client";

import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
}

export function Section({
  children,
  className,
  animate = true,
  delay = 0,
}: SectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
    rootMargin: "50px",
  });

  return (
    <section
      ref={ref}
      className={cn(
        "relative",
        animate && "transition-all duration-700 ease-out",
        animate && !isVisible && "opacity-0 translate-y-8",
        animate && isVisible && "opacity-100 translate-y-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}
