"use client";

import { cn } from "@/lib/utils";
import { OptimizedImage } from "../media/OptimizedImage";
import { Section } from "../layout/Section";
import { TextReveal, FadeIn } from "../typography/TextReveal";

interface FeatureMomentProps {
  src: string;
  alt: string;
  headline?: string;
  description?: string;
  priority?: boolean;
  className?: string;
  imagePosition?: "left" | "right";
  layout?: "split" | "full" | "editorial";
  objectPosition?: "top" | "center" | "bottom" | "left" | "right";
}

export function FeatureMoment({
  src,
  alt,
  headline,
  description,
  priority = false,
  className,
  imagePosition = "left",
  layout = "editorial",
  objectPosition = "center",
}: FeatureMomentProps) {
  const objectPositionClass = {
    top: "object-top",
    center: "object-center",
    bottom: "object-bottom",
    left: "object-left",
    right: "object-right",
  }[objectPosition];

  if (layout === "full") {
    return (
      <Section className={cn("relative w-full py-12 md:py-24", className)}>
        <div className="max-w-full mx-auto relative">
          <div className="relative w-full aspect-16/10 md:aspect-21/9 overflow-hidden">
            <OptimizedImage
              src={src}
              alt={alt}
              fill
              priority={priority}
              className={cn(
                "object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700",
                objectPositionClass
              )}
              sizes="95vw"
            />
          </div>
        </div>

        {(headline || description) && (
          <div className="max-w-4xl mx-auto px-6 py-8 md:py-16 text-center">
            {headline && (
              <TextReveal
                as="h2"
                className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 mt-20"
              >
                {headline}
              </TextReveal>
            )}
            {description && (
              <FadeIn delay={0.3}>
                <p className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl mx-auto">
                  {description}
                </p>
              </FadeIn>
            )}
          </div>
        )}
      </Section>
    );
  }

  // Editorial layout - image and text side by side
  return (
    <Section
      className={cn("max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-32", className)}
    >
      <div
        className={cn(
          "grid gap-8 md:gap-16 lg:gap-24 items-center",
          "grid-cols-1 md:grid-cols-2",
          imagePosition === "right" && "md:[&>*:first-child]:order-2"
        )}
      >
        {/* Image */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-linear-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
          <div className="relative aspect-4/5 md:aspect-3/4 overflow-hidden rounded-md bg-muted">
            <OptimizedImage
              src={src}
              alt={alt}
              fill
              priority={priority}
              className={cn(
                "object-cover transition-transform duration-700 group-hover:scale-105",
                objectPositionClass
              )}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col justify-center">
          <FadeIn>
            <span className="inline-block text-xs font-mono text-muted-foreground mb-6 uppercase tracking-widest">
              {"// Memory_Log"}
            </span>
          </FadeIn>

          {headline && (
            <TextReveal
              as="h2"
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.99] mb-8"
            >
              {headline}
            </TextReveal>
          )}
          {description && (
            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                {description}
              </p>
            </FadeIn>
          )}
        </div>
      </div>
    </Section>
  );
}
