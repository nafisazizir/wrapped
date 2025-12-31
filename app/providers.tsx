"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host:
          process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
        person_profiles: "identified_only",
        // Capture pageviews automatically
        capture_pageview: true,
        // Capture pageleave events (time on page)
        capture_pageleave: true,
        // Enable session recordings
        disable_session_recording: false,
        // Enable autocapture for clicks
        autocapture: true,
        // Enable scroll depth tracking
        enable_recording_console_log: false,
        // Respect Do Not Track
        respect_dnt: true,
        // Use local storage instead of cookies
        persistence: "localStorage+cookie",
      });
    }
  }, []);

  // Don't wrap if PostHog key is not set (dev without env)
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    return <>{children}</>;
  }

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
