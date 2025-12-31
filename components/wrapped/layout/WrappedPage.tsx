"use client";

import { cn } from "@/lib/utils";
import { Section } from "./Section";
import { FadeIn } from "../typography/TextReveal";
import { useEffect } from "react";
import {
  initScrollDepthTracking,
  trackPerformanceMetrics,
} from "@/lib/analytics";

interface WrappedPageProps {
  children: React.ReactNode;
  className?: string;
}

export function WrappedPage({ children, className }: WrappedPageProps) {
  // Initialize scroll depth and performance tracking
  useEffect(() => {
    const cleanupScroll = initScrollDepthTracking();
    trackPerformanceMetrics();

    return () => {
      cleanupScroll?.();
    };
  }, []);

  return (
    <main
      className={cn(
        "min-h-screen bg-background text-foreground relative selection:bg-primary selection:text-primary-foreground",
        className
      )}
    >
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#333_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
      <div className="relative z-10">{children}</div>
    </main>
  );
}

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <Section
      className={cn(
        "min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden",
        className
      )}
      animate={false}
    >
      {/* Decorative blurred spots */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl opacity-30" />

      <div className="text-center relative z-10 max-w-5xl mx-auto w-full">
        {/* Simple Date/Time Badge */}
        <FadeIn>
          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="text-sm font-mono text-muted-foreground/60 tracking-widest uppercase">
              <span className="mr-3">LOG.2025</span>
              <span className="w-2 h-2 inline-block rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>
        </FadeIn>

        <div className="relative py-8 md:py-16">
          {/* Glitchy/Tech Title */}
          <h1 className="font-mono text-[22vw] md:text-[15vw] leading-none tracking-tighter font-bold select-none text-center">
            <span className="inline-block hover:text-muted-foreground/50 transition-colors duration-300 transform hover:scale-105 cursor-default">
              2
            </span>
            <span className="inline-block hover:text-muted-foreground/50 transition-colors duration-300 delay-75 transform hover:scale-105 cursor-default">
              0
            </span>
            <span className="inline-block hover:text-muted-foreground/50 transition-colors duration-300 delay-100 transform hover:scale-105 cursor-default">
              2
            </span>
            <span className="inline-block hover:text-muted-foreground/50 transition-colors duration-300 delay-150 transform hover:scale-105 cursor-default">
              5
            </span>
            <span className="text-primary animate-[pulse_1s_ease-in-out_infinite] ml-2 md:ml-4">
              _
            </span>
          </h1>
        </div>

        <FadeIn delay={1.5}>
          <div className="mt-12 md:mt-16 max-w-xl mx-auto space-y-6 px-4">
            <p className="text-xl md:text-2xl font-medium text-foreground/90 tracking-tight">
              The year I crossed oceans and climbed mountains.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </Section>
  );
}

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn("text-center mt-24 overflow-hidden mb-0 pb-0", className)}
    >
      <div className="border-t border-border/40 w-full max-w-xl mx-auto mb-12" />

      <p className="mt-10 text-lg md:text-xl font-medium text-center text-muted-foreground font-mono tracking-tight">
        ON TO THE NEXT ONE.
      </p>

      <div className="flex flex-row w-full justify-center font-mono text-[20vw] md:text-[12vw] leading-none mb-0 p-0 pt-12 pb-5 md:pt-20 select-none opacity-80 hover:opacity-100 transition-opacity duration-500">
        &gt;2026
        <span className="text-muted-foreground font-light cursor-blink leading-none ml-2 md:ml-4">
          |
        </span>
      </div>
    </footer>
  );
}
