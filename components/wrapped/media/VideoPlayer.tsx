"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  className?: string;
  aspectRatio?: string;
  caption?: string;
  objectPosition?: string;
}

export function VideoPlayer({
  src,
  className,
  aspectRatio = "aspect-9/16 md:aspect-video",
  caption,
  objectPosition = "object-cover",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Hide overlay after 5 seconds if user hasn't interacted
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowOverlay(false);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      setHasInteracted(true);
      setShowOverlay(false);
    }
  };

  const handleOverlayClick = () => {
    toggleMute();
  };

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-sm",
          aspectRatio
        )}
      >
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className={cn("w-full h-full", objectPosition)}
        />

        {/* Initial overlay prompt */}
        {showOverlay && (
          <button
            onClick={handleOverlayClick}
            className={cn(
              "absolute inset-0 flex items-center justify-center",
              "bg-black/30 backdrop-blur-[2px]",
              "transition-opacity duration-300",
              "cursor-pointer"
            )}
          >
            <div className="flex flex-col items-center gap-2 text-white">
              <SoundOffIcon className="w-8 h-8 md:w-10 md:h-10" />
              <span className="text-sm md:text-base font-medium">
                Tap to unmute
              </span>
            </div>
          </button>
        )}

        {/* Persistent mute/unmute button */}
        {!showOverlay && (
          <button
            onClick={toggleMute}
            className={cn(
              "absolute bottom-3 right-3 md:bottom-4 md:right-4",
              "w-10 h-10 md:w-11 md:h-11",
              "flex items-center justify-center",
              "bg-black/50 hover:bg-black/70 backdrop-blur-sm",
              "rounded-full",
              "text-white",
              "transition-all duration-200",
              "cursor-pointer"
            )}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <SoundOffIcon className="w-5 h-5" />
            ) : (
              <SoundOnIcon className="w-5 h-5" />
            )}
          </button>
        )}
      </div>

      {caption && (
        <p className="text-center text-sm text-muted-foreground mt-4">
          {caption}
        </p>
      )}
    </div>
  );
}

function SoundOffIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <line x1="22" x2="16" y1="9" y2="15" />
      <line x1="16" x2="22" y1="9" y2="15" />
    </svg>
  );
}

function SoundOnIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}
