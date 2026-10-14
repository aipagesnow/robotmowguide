import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { CtaCluster, Disclosure, Faq, Related, ResearchedBox, SourceLine } from "@/components/Blocks";
import { SeasonsDiagram } from "@/components/Diagrams";
import { ProductLink } from "@/components/ProductLink";
import { pageMeta } from "@/lib/metadata";
import { modelFacts } from "@/lib/products";
import { specText } from "@/lib/speak";
import { RECHECKED, SPEC_CHECKED } from "@/lib/site";

const title = "How do I store a robot mower for winter?";
const description =
  "The only storage temperature in our spec set is the RockNeo Q110H manual. Other US pages we used do not include a winter checklist.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/guides/robot-mower-winter-storage",
});

const sources = ["q110h-manual", "mammotion-luba3", "mova-2000", "mova-3000", "navimow-x4", "navimow-i-series", "dreame-a3"];

export default function WinterGuide() {
  const q110 = modelFacts("roborock-rockneo-q110h", "RockNeo Q110H");
  const storage = specText(q110.specs.storageTemperature);

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/guides/robot-mower-winter-storage"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
        { name: "Winter storage", path: "/guides/robot-mower-winter-storage" },
      ]}
      updated={RECHECKED}
      whatChanged="October 13, 2026: added the RockNeo Q110H, the mower whose manual prints a storage temperature."
    >
      <p className="measure">
        We'd use the storage temperature in that model's manual. The only one in our spec set is the RockNeo
        Q110H: {storage}. The same manual gives that band for the battery. No charge percent is published on
        the pages we read.{" "}
        <SourceLine ids={["q110h-manual"]} checked={RECHECKED} />
      </p>
      <Disclosure />
      <CtaCluster>
        <ProductLink
          asin={q110.variant.asin}
          model="RockNeo Q110H"
          productSlug={q110.family.slug}
          placement="quick_pick"
          pageType="guide"
        />
      </CtaCluster>
      <YardPhoto id="photo-winter" />
      <SeasonsDiagram />
      <h2>What the Q110H manual actually prints</h2>
      <p className="measure">
        Storage is {storage}. That's −20–55°C, with 10–35°C recommended, written here in Fahrenheit as the
        manual's English technical data gives it. The{" "}
        <Link href="/reviews/roborock-rockneo-q110h">Q110H review</Link> keeps a separate cutting-height
        mismatch. This storage figure comes only from the technical data that names the Q110H.{" "}
        <SourceLine ids={["q110h-manual"]} checked={RECHECKED} />
      </p>
      <h2>The other US pages do not include a checklist</h2>
      <p className="measure">
        As of Oct 13, 2026, the Mammotion LUBA 3, MOVA LiDAX, Navimow, and Dreame US pages we read for
        specs don't include a winter storage checklist. Honestly, if you own one of them, use that
        model's manual.{" "}
        <SourceLine ids={["mammotion-luba3", "mova-2000", "mova-3000", "navimow-x4", "navimow-i-series", "dreame-a3"]} checked={SPEC_CHECKED} />
      </p>
      <h2>A garage is not a positioning claim</h2>
      <p className="measure">
        No. We'd store your mower where the manual's temperature fits. A garage only answers the temperature question.
        A satellite fix is a different question. Sky along the mowing path is covered in{" "}
        <Link href="/guides/rtk-vs-lidar-vs-vision">RTK, LiDAR, or vision</Link>. An antenna still needs open
        sky, and the mower still needs a fix along the grass.
      </p>
      <Faq
        items={[
          {
            q: "Can I leave the mower out all winter?",
            a: "The pages we read for this guide don't answer that. The Q110H manual prints a storage temperature of −4°F to 131°F, with 50–95°F recommended. We'd follow the manual for the model you own.",
          },
          {
            q: "What charge should the battery sit at?",
            a: "Not published on the pages we read.",
          },
          {
            q: "Does the dock stay outside?",
            a: "The US pages in the source list don't say whether the dock stays outside. We'd follow the manual for the model you own.",
          },
        ]}
      />
      <ResearchedBox
        scope="group"
        sources={sources.map((id) => ({ id }))}
        manuals="The Q110H English technical data, read Oct 13, 2026, is the only storage-temperature source."
        threads="No winter owner threads are included. Owner reports stay on the reviews."
        questions="No manufacturer questions have been answered yet."
        specsLine="Q110H storage temperature checked Oct 13, 2026. The other brand pages were checked Oct 10, 2026, and they don't include a winter checklist."
      />
      <h2>Sources</h2>
      <ul className="grid gap-2 pl-5">
        {sources.map((id) => (
          <li key={id}>
            <SourceLine ids={[id]} checked={id === "q110h-manual" ? RECHECKED : SPEC_CHECKED} />
          </li>
        ))}
      </ul>
      <Related
        links={[
          { href: "/reviews/roborock-rockneo-q110h", label: "RockNeo Q110H review" },
          { href: "/guides/rtk-vs-lidar-vs-vision", label: "RTK, LiDAR, or vision" },
          { href: "/guides/robot-mower-front-and-back-yard", label: "Front yard and back yard" },
          { href: "/reviews", label: "Robot mower reviews" },
        ]}
      />
    </ArticleFrame>
  );
}
