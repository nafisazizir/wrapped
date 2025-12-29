import { WrappedPage, Hero, Footer } from "@/components/wrapped/layout/WrappedPage";
import { TextInterlude } from "@/components/wrapped/moments/TextInterlude";
import { PolaroidCluster } from "@/components/wrapped/moments/PolaroidCluster";
import { FeatureMoment } from "@/components/wrapped/moments/FeatureMoment";
import { Section } from "@/components/wrapped/layout/Section";
import { Polaroid } from "@/components/wrapped/decorative/Polaroid";
import type { MediaItem } from "@/components/wrapped/data/types";

// January content from 2025.json
const januaryContent: MediaItem[] = [
  {
    timestamp: "2025-01-01T22:12:16",
    path: "2025/2025-01-01-22-12-16.jpg",
    label: "",
    type: "image",
    hint: "(late) new year dinner. supposed ot be on the NY eve, but instead we did it on the 1st Jan",
  },
  {
    timestamp: "2025-01-04T13:20:47",
    path: "2025/2025-01-04-13-20-47.jpg",
    label: "",
    type: "image",
    hint: "beach day with mates. atp, Burleigh is my second home",
  },
  {
    timestamp: "2025-01-11T13:22:24",
    path: "2025/2025-01-11-13-22-24.jpg",
    label: "",
    type: "image",
    hint: "I got the apartment to all myself, then I kind of made this space as my 'basecamp' with some pillows, and high chairs as tables",
  },
  {
    timestamp: "2025-01-16T16:31:29",
    path: "2025/2025-01-16-16-31-29.jpg",
    label: "",
    type: "image",
    hint: "I always forgot to bring my apartment access card when I leave the apartment. Hence, I couldn't get in and have to pay penalty fee (for so many times...)",
  },
  {
    timestamp: "2025-01-16T17:08:00",
    path: "2025/2025-01-16-17-08-00.jpg",
    label: "",
    type: "image",
    hint: "same as above image, but it shows where I left my card",
  },
  {
    timestamp: "2025-01-27T13:37:14",
    path: "2025/2025-01-27-13-37-14.jpg",
    label: "",
    type: "image",
    hint: "again, I was just bored and move my monitor to to my bed area so that I can watch movies while in the bed",
  },
];

export default function Page() {
  return (
    <WrappedPage>
      {/* Hero */}
      <Hero title="2025" subtitle="What a year." />

      {/* Opening */}
      <TextInterlude size="xl">
        <p className="text-muted-foreground">
          The year started quietly.
          <br />
          The apartment was mine for a while.
        </p>
      </TextInterlude>

      {/* NYE + Beach cluster */}
      <PolaroidCluster items={januaryContent.slice(0, 2)} />

      <TextInterlude timeContext="Early January">
        <p>
          We did the New Year&apos;s dinner a day late. Classic.
        </p>
        <p className="mt-4 text-muted-foreground">
          And at this point, Burleigh is basically a second home.
        </p>
      </TextInterlude>

      {/* Basecamp feature */}
      <Section className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <div className="flex justify-center">
          <div className="w-[280px] md:w-[340px]">
            <Polaroid
              src={januaryContent[2].path}
              alt="Basecamp setup"
              caption="The basecamp"
              rotation={-2}
            />
          </div>
        </div>
      </Section>

      <TextInterlude>
        <p>
          When you have the whole place to yourself, you build a basecamp.
          Pillows on the floor, high chairs as tables. It worked.
        </p>
      </TextInterlude>

      {/* Access card story */}
      <Section className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <div className="w-[200px] md:w-[260px]">
            <Polaroid
              src={januaryContent[3].path}
              alt="Locked out"
              rotation={3}
            />
          </div>
          <div className="w-[200px] md:w-[260px] mt-8">
            <Polaroid
              src={januaryContent[4].path}
              alt="Where I left it"
              caption="Every. Single. Time."
              rotation={-2}
            />
          </div>
        </div>
      </Section>

      <TextInterlude>
        <p>
          The apartment charged me a penalty fee more times than I&apos;d like to admit.
          Every single time, I&apos;d find the card right where I left it.
        </p>
      </TextInterlude>

      {/* Monitor setup - Editorial layout */}
      <FeatureMoment
        src={januaryContent[5].path}
        alt="Monitor to bed setup"
        headline="Peak comfort engineering"
        description="Bored. Moved the monitor to bed. Movies hit different lying down."
        imagePosition="right"
      />

      {/* Closing for January preview */}
      <TextInterlude size="lg" className="py-20 md:py-32">
        <p className="text-center text-muted-foreground">
          January was simple. Quiet beginnings before everything changed.
        </p>
      </TextInterlude>

      <Footer />
    </WrappedPage>
  );
}
