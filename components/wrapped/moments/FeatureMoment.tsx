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
      <Section className={cn("relative w-full", className)}>
        <div className="relative w-full aspect-[16/10] md:aspect-[21/9] overflow-hidden">
          <OptimizedImage
            src={src}
            alt={alt}
            fill
            priority={priority}
            className={cn("object-cover", objectPositionClass)}
            sizes="100vw"
          />
        </div>
        {(headline || description) && (
          <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
            {headline && (
              <TextReveal
                as="h2"
                className="text-2xl md:text-4xl font-light tracking-tight mb-4"
              >
                {headline}
              </TextReveal>
            )}
            {description && (
              <FadeIn delay={0.3}>
                <p className="text-muted-foreground text-lg">{description}</p>
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
      className={cn(
        "max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-20",
        className
      )}
    >
      <div
        className={cn(
          "grid gap-8 md:gap-12 lg:gap-16 items-center",
          "grid-cols-1 md:grid-cols-2",
          imagePosition === "right" && "md:[&>*:first-child]:order-2"
        )}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] md:aspect-[3/4] overflow-hidden rounded-sm">
          <OptimizedImage
            src={src}
            alt={alt}
            fill
            priority={priority}
            className={cn("object-cover", objectPositionClass)}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Text content */}
        <div className="flex flex-col justify-center">
          {headline && (
            <TextReveal
              as="h2"
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-none mb-6"
            >
              {headline}
            </TextReveal>
          )}
          {description && (
            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {description}
              </p>
            </FadeIn>
          )}
        </div>
      </div>
    </Section>
  );
}
