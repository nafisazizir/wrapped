**Role & Expertise:**
You are an expert **frontend engineer, UI/UX designer, and creative design engineer**. You have excellent taste, a keen eye for design, and are highly creative.

---

### **Goal:**

Create a **2025 life wrapped website** showcasing a timeline/history of my 2025 life. It should be a **single-page, scrollable experience** that is engaging, visually appealing, and tells a story.

---

### **Content:**

- The content is provided in `/content/2025.json`. It is an **array of objects**, each representing a media item in the `public` directory.
- Each object includes a **hint** describing the media. Use this as the primary context, but feel free to **expand creatively** with copywriting.
- You do **not need to use all media**; pick the most meaningful ones. Group related media (e.g., graduation photos, dinners, trips) if it enhances storytelling. But also feel free to include all of them.
- Make sure you are not skipping important moments.
- You may insert **copywriting, quotes, or contextual text** between moments.
- The start of the recap does **not have to be the first image**; you can add a creative **hook** at the beginning.
- You may ask me for clarifications or additional context if a media item needs explanation.
- It should feel personal and customised, specially crafter for each moments, not templated. both in design and copywriting.
- Copywriting should sounds masculine but not taken away the personality stuff. Some moments can get emotional but general tone should be secured masculine. general tone is fine.

**Questions to consider:**

- Should timestamps be shown explicitly for each moment? No, only important moments
- Should we also grouped and/or explicitly shown the month in the year? I dont like the idea of grouped by month or separated by monthly chapter. So maybe no?
- How should we handle month groupings and timestamps? → I can think maybe more minimal. we can insert the timestamp like (in March, early January, late July) in the copywriting maybe? Exact dates are also fine for some important moments. Maybe we can try a mix? I think date/timestamp cues are also important for user to get the flow "where and when are we in the story"
- Who is "Penghunies" that appears multiple times? Is this a friend group name I should reference in copy? → Yes, use it

---

### **Design:**

- **Freedom to explore** the design: simple & elegant. **modern startup vibes** or **visual storytelling approaches**. No “cheesy” and cheap design. Think of like Vercel, V0 style.
- Media can have **decorations** like maps, planes, breadcrumbs, stamps, postcards, polaroid or analog/film effects.
- Focus on **fluidity and readability**; long scroll is acceptable.
- It should feel personal and customised, specially crafter for each moments, not templated. both in design and copywriting.

---

### **Performance & Optimization:**

- Images, links, and videos must be **optimized** to ensure **fast initial page load**.
- Lazy load or progressively render media (e.g., blurred previews → sharp images) for smooth scrolling.
- Consider techniques similar to **Gatsby fluid images**, but for **Next.js**.
- Ensure **high performance UX**, especially on media-heavy pages.

---

### **Implementation:**

- Base UI on **shadcn/ui** components. You may **customize or extend** them for the wrapped experience.
- Start with **January only** to establish the design system and technical foundation. Once approved, continue with the rest of the year.

---

### **Deliverables:**

1. **Design concept:** layout, colors, typography, media styles, and decorations.
2. **Prototype implementation:** a Next.js page using shadcn/ui, lazy-loaded optimized media, scrollable timeline.
3. **Content integration:** media from `/content/2025.json`, with hints converted into creative copy.
4. **Performance:** optimized for fast initial load with progressive media rendering.

---

### **Optional Creativity:**

- Play with **layout styles** (polaroids, stamp layouts, analog photography vibes).
- Insert **contextual copy, quotes, or small narratives** to enhance storytelling.
- Use **animations or scroll effects** sparingly to highlight moments without slowing the page.
