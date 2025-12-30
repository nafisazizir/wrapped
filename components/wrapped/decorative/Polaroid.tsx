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
        "group relative bg-white dark:bg-zinc-100 p-3 pb-12 shadow-md hover:shadow-xl transition-all duration-500 ease-out",
        "hover:z-10 hover:scale-105 hover:rotate-0",
        className
      )}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div className="relative aspect-square overflow-hidden bg-neutral-100 filter sepia-[0.1] contrast-[1.05]">
        <OptimizedImage
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 300px"
        />
        {/* Grain Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
      
      {caption && (
        <div className="absolute bottom-3 left-0 right-0 text-center px-2">
          <p className="text-sm md:text-base text-gray-600 font-caveat leading-tight transform -rotate-1">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}
