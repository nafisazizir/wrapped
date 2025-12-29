"use client";

import { cn } from "@/lib/utils";
import { Polaroid } from "../decorative/Polaroid";
import { Section } from "../layout/Section";
import type { MediaItem } from "../data/types";

interface PolaroidClusterProps {
  items: MediaItem[];
  className?: string;
}

const rotations = [-3, 2, -1, 3, -2];

export function PolaroidCluster({ items, className }: PolaroidClusterProps) {
  return (
    <Section
      className={cn(
        "flex flex-wrap justify-center items-start gap-4 md:gap-6 px-4 md:px-8",
        className
      )}
    >
      {items.slice(0, 5).map((item, index) => (
        <div
          key={item.path}
          className="w-[140px] md:w-[180px] lg:w-[220px]"
          style={{
            transform: `translateY(${index % 2 === 0 ? 0 : 12}px)`,
          }}
        >
          <Polaroid
            src={item.path}
            alt={item.hint || `Memory ${index + 1}`}
            caption={item.hint?.slice(0, 30)}
            rotation={rotations[index % rotations.length]}
            priority={index < 2}
          />
        </div>
      ))}
    </Section>
  );
}
