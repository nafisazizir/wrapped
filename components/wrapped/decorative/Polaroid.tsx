"use client";

import { cn } from "@/lib/utils";
import { OptimizedImage } from "../media/OptimizedImage";

interface PolaroidProps {
  src: string;
  alt: string;
  caption?: string;
  rotation?: number;
  className?: string;
  priority?: boolean;
}

export function Polaroid({
  src,
  alt,
  caption,
  rotation = 0,
  className,
  priority = false,
}: PolaroidProps) {
  return (
    <div
      className={cn(
        "bg-wrapped-cream p-2 pb-10 shadow-lg rounded-sm",
        "transition-transform duration-300 hover:scale-105",
        className
      )}
      style={{
        transform: `rotate(${rotation}deg)`,
        boxShadow:
          "0 4px 6px -1px oklch(0 0 0 / 10%), 0 10px 20px -5px oklch(0 0 0 / 8%)",
      }}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <OptimizedImage
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 300px"
        />
      </div>
      {caption && (
        <p className="absolute bottom-2.5 md:bottom-2 left-0 right-0 text-center text-sm md:text-base text-muted-foreground/80 px-2 font-caveat">
          {caption}
        </p>
      )}
    </div>
  );
}
