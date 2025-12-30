"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  className?: string;
  videoClassName?: string;
  aspectRatio?: string;
  caption?: string;
  objectPosition?: string;
  captionPosition?: "bottom" | "left" | "right";
}

export function VideoPlayer({
  src,
  className,
  videoClassName,
  aspectRatio = "aspect-9/16 md:aspect-video",
  caption,
  objectPosition = "object-cover",
  captionPosition = "bottom",
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

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When video goes out of view (isIntersecting is false)
          if (!entry.isIntersecting) {
            setIsMuted((prevIsMuted) => {
              // Only trigger update if currently unmuted
              if (!prevIsMuted) {
                if (videoRef.current) videoRef.current.muted = true;
                return true;
              }
              return prevIsMuted;
            });
          }
        });
      },
      {
        threshold: 0.2, // Trigger when less than 20% of the video is visible
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

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

  const isSideCaption =
    captionPosition === "left" || captionPosition === "right";

  return (
    <div
      className={cn(
        "relative py-8",
        isSideCaption &&
          "flex flex-col md:flex-row items-center gap-6 md:gap-10",
        captionPosition === "left" && "md:flex-row-reverse",
        className
      )}
    >
      <div
        className={cn(
          "group relative",
          isSideCaption && "shrink-0",
          videoClassName
        )}
      >
        <div className="absolute -inset-1 bg-linear-to-r from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
        <div
          className={cn(
            "relative overflow-hidden rounded-lg shadow-2xl bg-black",
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
            className={cn(
              "w-full h-full opacity-90 transition-opacity duration-500",
              objectPosition
            )}
          />

          {/* Grain Overlay */}
          <div
            className="absolute inset-0 opacity-[0.1] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Initial overlay prompt */}
          {showOverlay && (
            <button
              onClick={handleOverlayClick}
              className={cn(
                "absolute inset-0 flex items-center justify-center",
                "bg-black/40 backdrop-blur-[2px]",
                "transition-opacity duration-300",
                "cursor-pointer z-10"
              )}
            >
              <div className="flex flex-col items-center gap-3 text-white">
                <div className="p-3 bg-white/10 rounded-full border border-white/20 backdrop-blur-md">
                  <SoundOffIcon className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest opacity-80">
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
                "absolute bottom-4 right-4",
                "w-10 h-10",
                "flex items-center justify-center",
                "bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/10",
                "rounded-full",
                "text-white",
                "transition-all duration-200",
                "cursor-pointer z-20"
              )}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <SoundOffIcon className="w-4 h-4" />
              ) : (
                <SoundOnIcon className="w-4 h-4" />
              )}
            </button>
          )}
        </div>
      </div>

      {caption && !isSideCaption && (
        <div className="mt-4 flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
            {"// Video_Log"}
          </span>
          <p className="text-center text-sm text-foreground/80 font-medium">
            {caption}
          </p>
        </div>
      )}

      {caption && isSideCaption && (
        <div
          className={cn(
            "flex flex-col gap-3 max-w-sm",
            captionPosition === "right" && "md:text-left",
            captionPosition === "left" && "md:text-right"
          )}
        >
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            {"// Video_Log"}
          </span>
          <p className="text-base md:text-lg text-foreground/90 font-medium leading-relaxed">
            {caption}
          </p>
        </div>
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
      strokeWidth={1.5}
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
      strokeWidth={1.5}
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
