"use client";

import { cn } from "@/lib/utils";
import { Section } from "./Section";
import { TextReveal, FadeIn } from "../typography/TextReveal";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

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

// Floating preview images data
const previewImages = [
  {
    src: "/2025/2025-07-01-12-15-03.jpg",
    rotation: -12,
    position: "top-[12%] left-[5%] md:left-[8%]",
    size: "w-20 md:w-28",
    delay: 0.8,
  },
  {
    src: "/2025/2025-08-08-13-53-52.jpg",
    rotation: 8,
    position: "top-[18%] right-[4%] md:right-[10%]",
    size: "w-16 md:w-24",
    delay: 1.0,
  },
  {
    src: "/2025/2025-06-22-17-20-58.jpg",
    rotation: -6,
    position: "bottom-[22%] left-[3%] md:left-[12%]",
    size: "w-18 md:w-26",
    delay: 1.2,
  },
  {
    src: "/2025/2025-07-17-17-36-00.JPG",
    rotation: 15,
    position: "bottom-[28%] right-[2%] md:right-[8%]",
    size: "w-22 md:w-30",
    delay: 1.4,
  },
];

export function Hero({ className }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    // Trigger loaded state after mount via requestAnimationFrame to avoid sync setState
    const frame = requestAnimationFrame(() => setIsLoaded(true));

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Section
      className={cn(
        "min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden",
        className
      )}
      animate={false}
    >
      {/* Floating preview polaroids */}
      {previewImages.map((img, index) => (
        <div
          key={index}
          className={cn(
            "absolute transition-all duration-1000 ease-out opacity-0 scale-75 pointer-events-none hidden md:block",
            img.position,
            img.size,
            isLoaded && "opacity-40 scale-100 hover:opacity-60"
          )}
          style={{
            transitionDelay: `${img.delay}s`,
            transform: `rotate(${img.rotation}deg) translateY(${
              scrollY * 0.1 * (index % 2 === 0 ? 1 : -1)
            }px)`,
          }}
        >
          <div className="bg-white p-1.5 shadow-lg rounded-sm">
            <div className="relative w-full aspect-square">
              <Image
                src={img.src}
                alt=""
                fill
                className="object-cover"
                sizes="120px"
                priority
              />
            </div>
          </div>
        </div>
      ))}

      {/* Main content */}
      <div className="text-center relative z-10">
        <FadeIn>
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-muted-foreground mb-6 md:mb-8">
            A Year in Review
          </p>
        </FadeIn>

        <div className="flex flex-row w-full  justify-center font-mono text-[80px] sm:text-[120px] md:text-[200px] lg:text-[280px] xl:text-[350px] leading-none mb-0 p-0">
          <TextReveal
            as="h1"
            className="font-mono text-[80px] sm:text-[120px] md:text-[200px] lg:text-[280px] xl:text-[350px] leading-none mb-0 p-0"
            wordDelay={0.15}
          >
            &gt;2025
          </TextReveal>{" "}
          <span className="text-muted-foreground font-light cursor-blink leading-none">
            |
          </span>
        </div>

        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl lg:text-2xl font-medium tracking-tight text-foreground/80 mb-10 md:mb-12">
            Life Wrapped
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="max-w-md md:max-w-lg mx-auto space-y-0">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A collection of moments, places, and people that defined my year.
              From Brisbane to the world.
            </p>
          </div>
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
