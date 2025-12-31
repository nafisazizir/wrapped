"use client";

import { cn } from "@/lib/utils";
import { Polaroid } from "../decorative/Polaroid";
import { Section } from "../layout/Section";
import type { MediaItem } from "../data/types";

interface PolaroidClusterProps {
  items: MediaItem[];
  className?: string;
}

const rotations = [-4, 3, -5, 4, -2];
const yOffsets = [0, 24, -12, 32, -8];

export function PolaroidCluster({ items, className }: PolaroidClusterProps) {
  return (
    <Section
      className={cn(
        "relative py-12 md:py-20",
        className
      )}
    >
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center md:items-start gap-8 md:gap-4 px-4">
        {items.slice(0, 5).map((item, index) => (
          <div
            key={item.path}
            className={cn(
              "w-64 md:w-56 lg:w-64 transition-all duration-500 ease-out",
              // Mobile: Stack vertically with slight overlap? No, just list them.
              // Desktop: Horizontal row with negative margins that open up on hover
              "md:-ml-12 first:md:ml-0 hover:!ml-4 hover:!mr-4 hover:z-20 hover:-translate-y-4"
            )}
            style={{
              // Add some randomness to the vertical rhythm
              marginTop: `${yOffsets[index % yOffsets.length]}px`
            }}
          >
            <Polaroid
              src={item.path}
              alt={item.hint || `Memory ${index + 1}`}
              caption={item.label || undefined}
              rotation={rotations[index % rotations.length]}
              priority={index < 2}
              className="shadow-md hover:shadow-2xl"
              imageClassName={item.className}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
