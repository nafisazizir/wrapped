import posthog from "posthog-js";

// ============================================================================
// SCROLL DEPTH TRACKING
// ============================================================================

const scrollMilestones = [25, 50, 75, 100];
const trackedMilestones = new Set<number>();

export function initScrollDepthTracking() {
  if (typeof window === "undefined") return;

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const percentScrolled = Math.round((scrolled / scrollHeight) * 100);

    for (const milestone of scrollMilestones) {
      if (percentScrolled >= milestone && !trackedMilestones.has(milestone)) {
        trackedMilestones.add(milestone);
        posthog.capture("scroll_depth_reached", {
          depth_percent: milestone,
          scroll_position: scrolled,
          page_height: scrollHeight,
        });
      }
    }
  };

  // Throttle scroll handler
  let ticking = false;
  const throttledHandler = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener("scroll", throttledHandler, { passive: true });

  // Track final scroll depth on page leave
  const handleBeforeUnload = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const finalPercent = Math.round((scrolled / scrollHeight) * 100);

    posthog.capture("page_exit", {
      final_scroll_depth: finalPercent,
      milestones_reached: Array.from(trackedMilestones),
    });
  };

  window.addEventListener("beforeunload", handleBeforeUnload);

  return () => {
    window.removeEventListener("scroll", throttledHandler);
    window.removeEventListener("beforeunload", handleBeforeUnload);
  };
}

// ============================================================================
// SECTION VISIBILITY TRACKING
// ============================================================================

const sectionViewTimes = new Map<string, number>();
const sectionStartTimes = new Map<string, number>();

export function trackSectionEnter(sectionId: string) {
  if (!sectionStartTimes.has(sectionId)) {
    sectionStartTimes.set(sectionId, Date.now());
    posthog.capture("section_viewed", {
      section: sectionId,
      timestamp: new Date().toISOString(),
    });
  }
}

export function trackSectionExit(sectionId: string) {
  const startTime = sectionStartTimes.get(sectionId);
  if (startTime) {
    const duration = Date.now() - startTime;
    const previousTime = sectionViewTimes.get(sectionId) || 0;
    sectionViewTimes.set(sectionId, previousTime + duration);

    posthog.capture("section_time_spent", {
      section: sectionId,
      duration_ms: duration,
      total_time_ms: previousTime + duration,
    });

    sectionStartTimes.delete(sectionId);
  }
}

// ============================================================================
// VIDEO ENGAGEMENT TRACKING
// ============================================================================

export function trackVideoPlay(videoId: string, videoSrc: string) {
  posthog.capture("video_play", {
    video_id: videoId,
    video_src: videoSrc,
  });
}

export function trackVideoPause(
  videoId: string,
  videoSrc: string,
  currentTime: number,
  duration: number
) {
  posthog.capture("video_pause", {
    video_id: videoId,
    video_src: videoSrc,
    current_time: currentTime,
    duration: duration,
    percent_watched: Math.round((currentTime / duration) * 100),
  });
}

export function trackVideoComplete(videoId: string, videoSrc: string, duration: number) {
  posthog.capture("video_complete", {
    video_id: videoId,
    video_src: videoSrc,
    duration: duration,
  });
}

// ============================================================================
// BLOG LINK TRACKING
// ============================================================================

export function trackBlogLinkClick(blogKey: string, linkText: string) {
  posthog.capture("blog_link_click", {
    blog_key: blogKey,
    link_text: linkText,
  });
}

// ============================================================================
// PERFORMANCE TRACKING
// ============================================================================

export function trackPerformanceMetrics() {
  if (typeof window === "undefined" || !("performance" in window)) return;

  // Wait for the page to fully load
  window.addEventListener("load", () => {
    // Use requestIdleCallback or setTimeout for non-critical metrics
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType(
        "navigation"
      )[0] as PerformanceNavigationTiming;

      if (navigation) {
        posthog.capture("page_performance", {
          // Time to first byte
          ttfb: navigation.responseStart - navigation.requestStart,
          // DOM content loaded
          dom_content_loaded:
            navigation.domContentLoadedEventEnd - navigation.startTime,
          // Full page load
          page_load: navigation.loadEventEnd - navigation.startTime,
          // DNS lookup time
          dns_lookup: navigation.domainLookupEnd - navigation.domainLookupStart,
          // Connection time
          connection: navigation.connectEnd - navigation.connectStart,
        });
      }

      // Track Largest Contentful Paint
      const lcpEntries = performance.getEntriesByType("largest-contentful-paint");
      if (lcpEntries.length > 0) {
        const lcp = lcpEntries[lcpEntries.length - 1] as PerformanceEntry & { element?: Element };
        posthog.capture("web_vital_lcp", {
          value: lcp.startTime,
          element: lcp.element?.tagName || "unknown",
        });
      }

      // Track First Input Delay via PerformanceObserver if available
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === "first-input") {
              const fidEntry = entry as PerformanceEventTiming;
              posthog.capture("web_vital_fid", {
                value: fidEntry.processingStart - fidEntry.startTime,
              });
              observer.disconnect();
            }
          }
        });
        observer.observe({ type: "first-input", buffered: true });
      } catch {
        // PerformanceObserver not supported
      }
    };

    if ("requestIdleCallback" in window) {
      (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(measurePerformance);
    } else {
      setTimeout(measurePerformance, 0);
    }
  });
}

// ============================================================================
// IMAGE LOAD TRACKING
// ============================================================================

export function trackImageLoad(imageSrc: string, loadTime: number) {
  posthog.capture("image_loaded", {
    image_src: imageSrc,
    load_time_ms: loadTime,
  });
}

