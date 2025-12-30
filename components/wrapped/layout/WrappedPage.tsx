"use client";

import { cn } from "@/lib/utils";
import { Section } from "./Section";
import { TextReveal, FadeIn } from "../typography/TextReveal";

interface WrappedPageProps {
  children: React.ReactNode;
  className?: string;
}

export function WrappedPage({ children, className }: WrappedPageProps) {
  return (
    <main
      className={cn(
        "min-h-screen bg-background text-foreground",
        "selection:bg-primary selection:text-primary-foreground",
        className
      )}
    >
      {children}
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
        "min-h-screen flex flex-col items-center justify-center px-6",
        className
      )}
      animate={false}
    >
      <div className="text-center">
        <FadeIn>
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mb-4">
            The Year
          </p>
        </FadeIn>
        <TextReveal
          as="h1"
          className="text-8xl md:text-[12rem] font-semibold tracking-tighter leading-none mb-4"
          wordDelay={0.15}
        >
          2025
        </TextReveal>
        <FadeIn delay={0.3}>
          <p className="text-xl md:text-2xl font-medium tracking-tight mb-8">
            Life Wrapped
          </p>
        </FadeIn>
        <FadeIn delay={0.5}>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
            A collection of moments, places, and people that defined my year.
            From Brisbane to the world.
          </p>
        </FadeIn>
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
      <p className="mt-10 text-base font-medium text-center text-muted-foreground font-mono">
        ON TO THE NEXT ONE.
      </p>

      <span className="flex flex-row w-full  justify-center font-mono text-[80px] sm:text-[120px] md:text-[200px] lg:text-[280px] xl:text-[350px] leading-none mb-0 p-0">
        &gt;2026
        <span className="text-muted-foreground font-light cursor-blink leading-none">
          |
        </span>
      </span>
    </footer>
  );
}
