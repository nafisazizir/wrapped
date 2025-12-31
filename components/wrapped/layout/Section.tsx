"use client";

import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { trackSectionEnter, trackSectionExit } from "@/lib/analytics";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
  /** Optional ID for analytics tracking - if provided, section visibility is tracked */
  trackingId?: string;
}

export function Section({
  children,
  className,
  animate = true,
  delay = 0,
  trackingId,
}: SectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
    rootMargin: "50px",
  });

  const wasVisible = useRef(false);

  useEffect(() => {
    if (!trackingId) return;

    if (isVisible && !wasVisible.current) {
      trackSectionEnter(trackingId);
      wasVisible.current = true;
    } else if (!isVisible && wasVisible.current) {
      trackSectionExit(trackingId);
      wasVisible.current = false;
    }
  }, [isVisible, trackingId]);

  // Track exit when component unmounts
  useEffect(() => {
    return () => {
      if (trackingId && wasVisible.current) {
        trackSectionExit(trackingId);
      }
    };
  }, [trackingId]);

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
