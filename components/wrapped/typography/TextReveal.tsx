"use client";

import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  wordDelay?: number;
  baseDelay?: number;
}

export function TextReveal({
  children,
  className,
  as: Component = "p",
  wordDelay = 0.08,
  baseDelay = 0,
}: TextRevealProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.2,
  });

  const words = children.split(" ");

  return (
    <Component
      ref={ref as React.RefObject<HTMLHeadingElement & HTMLParagraphElement>}
      className={cn("overflow-hidden", className)}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <span
            className={cn(
              "inline-block transition-all duration-500 ease-out",
              index !== words.length - 1 ? 'mr-2.5' : '',
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-full"
            )}
            style={{
              transitionDelay: `${baseDelay + index * wordDelay}s`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
}

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
