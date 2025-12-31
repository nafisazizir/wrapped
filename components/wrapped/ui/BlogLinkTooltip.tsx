"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { OptimizedImage } from "../media/OptimizedImage";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface BlogPreview {
  href: string;
  title: string;
  description: string;
  image: string;
  date?: string;
}

const blogPreviews: Record<string, BlogPreview> = {
  "debrief-episode-1-crossing-impossible-distances": {
    href: "https://www.nafisazizi.com/blog/debrief-episode-1-crossing-impossible-distances",
    title: "Crossing Impossible Distances",
    description:
      "A month-long journey through SF tech culture, American wilderness, and unexpected lessons about kindness.",
    image: "/2025/blog-preview-us.webp",
  },
  "debrief-episode-2-finding-the-adventurer-within": {
    href: "https://www.nafisazizi.com/blog/debrief-episode-2-finding-the-adventurer-within",
    title: "Finding the Adventurer Within",
    description:
      "From immigration interrogation to alpine confidence. How my first solo trip to New Zealand transformed me.",
    image: "/2025/blog-preview-nz-adventure.webp",
  },
  "debrief-episode-3-hostel-chronicles": {
    href: "https://www.nafisazizi.com/blog/debrief-episode-3-hostel-chronicles",
    title: "Hostel Chronicles",
    description:
      "The unexpected conversations in hostel dining tables that challenged everything I thought I knew.",
    image: "/2025/blog-preview-nz-hostel.webp",
  },
};

interface BlogLinkTooltipProps {
  blogKey: keyof typeof blogPreviews;
  children: React.ReactNode;
  className?: string;
}

export function BlogLinkTooltip({
  blogKey,
  children,
  className,
}: BlogLinkTooltipProps) {
  const preview = blogPreviews[blogKey];

  if (!preview) {
    return <>{children}</>;
  }

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <a
            href={preview.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("cursor-pointer", className)}
          />
        }
      >
        {children}
      </TooltipTrigger>
      <TooltipContent
        side="top"
        sideOffset={12}
        showArrow={false}
        className="p-0 border-none bg-transparent shadow-none"
      >
        <div className="w-80 overflow-hidden rounded-xl border border-white/10 bg-card shadow-2xl dark:shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]">
          {/* Image Section */}
          <div className="relative aspect-video w-full overflow-hidden bg-muted">
            <OptimizedImage
              src={preview.image}
              alt={preview.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Subtle Gradient for depth */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          {/* Content Section */}
          <div className="relative bg-card p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono uppercase text-[11px] font-normal text-primary/80">
                Debrief Series
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground/50" />
            </div>

            <h4 className="mb-2 text-lg font-medium leading-tight tracking-tight text-foreground">
              {preview.title}
            </h4>

            <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
              {preview.description}
            </p>
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
