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
  title?: string;
  subtitle?: string;
  className?: string;
}

export function Hero({ title = "2025", subtitle, className }: HeroProps) {
  return (
    <Section
      className={cn(
        "min-h-[60vh] flex flex-col items-center justify-center px-6",
        className
      )}
      animate={false}
    >
      <TextReveal
        as="h1"
        className="text-7xl md:text-9xl font-light tracking-tighter mb-4"
        wordDelay={0.15}
      >
        {title}
      </TextReveal>
      {subtitle && (
        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md text-center">
            {subtitle}
          </p>
        </FadeIn>
      )}
    </Section>
  );
}

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "py-20 md:py-32 text-center px-6",
        "border-t border-border",
        className
      )}
    >
      <p className="text-muted-foreground text-sm">
        Made with memories from 2025
      </p>
    </footer>
  );
}
