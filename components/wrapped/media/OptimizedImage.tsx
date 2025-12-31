"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  containerClassName?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  aspectRatio?: "square" | "video" | "photo" | "auto";
}

export function OptimizedImage({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px",
  className,
  containerClassName,
  fill = false,
  width,
  height,
  aspectRatio = "auto",
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectRatioClass = {
    square: "aspect-square",
    video: "aspect-video",
    photo: "aspect-[4/3]",
    auto: "",
  }[aspectRatio];

  // When fill is true and no container class needed, render Image directly
  if (fill && !containerClassName && aspectRatio === "auto") {
    return (
      <Image
        src={src.startsWith("/") ? src : `/${src}`}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={85}
        className={cn(
          "object-cover transition-all duration-500",
          isLoaded ? "blur-0 scale-100" : "blur-sm scale-105",
          className
        )}
        onLoad={() => setIsLoaded(true)}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-muted",
        fill && "absolute inset-0",
        aspectRatioClass,
        containerClassName
      )}
    >
      <Image
        src={src.startsWith("/") ? src : `/${src}`}
        alt={alt}
        fill={fill || (!width && !height)}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes}
        priority={priority}
        quality={85}
        className={cn(
          "object-cover transition-all duration-500",
          isLoaded ? "blur-0 scale-100" : "blur-sm scale-105",
          className
        )}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
