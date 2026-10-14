import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import {
  CtaCluster,
  EndLinks,
  Faq,
  KeyNumbers,
  Related,
  ResearchedBox,
  SourceLine,
} from "@/components/Blocks";
import { SupportOutlook } from "@/components/FccNote";
import { ComfortableFor, SlopeMarginNote } from "@/components/VoiceBits";
import { ProductLink } from "@/components/ProductLink";
import { SpecTable } from "@/components/SpecTable";
import { VariantTable } from "@/components/VariantTable";
import { pageMeta } from "@/lib/metadata";
import { formatAcres, risePer10Ft } from "@/lib/format";
import { modelFacts, navigationLabel } from "@/lib/products";
import { publishedSlope, slopeWithRise, specText } from "@/lib/speak";
import { RECHECKED, SPEC_CHECKED } from "@/lib/site";

const title = "Roborock RockNeo Q110H review: a quarter acre on RTK";
const description =
  "The RockNeo Q110H is rated for 0.25 acre and 45%. The US manual line cuts 1.57–3.15 in. A CE manual for the Q110 lists a shorter band.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/reviews/roborock-rockneo-q110h",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Reviews", path: "/reviews" },
  { name: "RockNeo Q110H", path: "/reviews/roborock-rockneo-q110h" },
];

const sources = ["q110h-manual", "q110h-manual-ce", "amz-q110h", "verge"];

export default function Q110Review() {
  const q = modelFacts("roborock-rockneo-q110h", "RockNeo Q110H");
  const family = q.family;
  const i210 = modelFacts("segway-navimow-i2-awd", "Navimow i210 AWD");
  const mini = modelFacts("mammotion-luba-mini-2-awd", "LUBA mini 2 AWD 1500H (high-cut)");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/reviews/roborock-rockneo-q110h"
      crumbs={crumbs}
      updated={RECHECKED}
      whatChanged="October 13, 2026: first published. Cutting height follows the Q110H line in the English technical data, and the CE band is kept beside it."
      disclosure
      status="On sale in the US as of Oct 10, 2026."
    >
      <p className="measure">
        The Q110H fits an open quarter acre with banks inside {publishedSlope(q.slope, q.degrees)}. It uses
        full-band RTK plus VSLAM and vision, so heavy canopy is a reason to look at a LiDAR mower instead.
      </p>
      <p className="measure">
        The cut to use is {specText(q.specs.cuttingHeight)}. That is 40–80 mm on the English technical data
        that names the Q110H. A CE manual for the Q105 and Q110 lists 20–60 mm, about 0.8–2.4 in. Those are
        different models, so use the band for the model you are buying.
      </p>
      <CtaCluster>
        <ProductLink
          asin={q.variant.asin}
          model="RockNeo Q110H"
          productSlug={family.slug}
          placement="verdict"
          pageType="review"
        />
      </CtaCluster>
      <YardPhoto id="card-q110h" />
      <h2>Key numbers for your yard</h2>
      <KeyNumbers
        rows={[
          {
            label: "Rated area",
            value: formatAcres(q.acres),
            detail: <ComfortableFor rated={q.acres} />,
          },
          {
            label: "Max slope",
            value: slopeWithRise(q.slope, q.degrees),
            detail: "The degree was calculated from 45%.",
          },
          {
            label: "Body width",
            value: specText(q.specs.bodyWidth),
            detail: "From the manual’s L×W×H. It is the body, not a minimum gap.",
          },
          {
            label: "Navigation",
            value: navigationLabel(family.navigation),
            detail: specText(q.specs.positioning),
          },
          {
            label: "Cut",
            value: specText(q.specs.cuttingHeight),
            detail: "Q110H line. The CE Q110 band is 20–60 mm and is not the US figure.",
          },
        ]}
      />
      <VariantTable
        family={family}
        pageType="review"
        differences={{
          "RockNeo Q110H":
            "The only row. Rear-wheel drive. Cut 1.57–3.15 in on the Q110H manual line. 4G tracking is a separate module.",
        }}
      />
      <h2>Specs we checked</h2>
      <SpecTable
        caption="RockNeo Q110H. Height, width, and storage temperature are from the English technical data checked Oct 13, 2026."
        rows={[
          {
            label: "Rated area",
            value: formatAcres(q.acres),
            sources: ["amz-q110h", "q110h-manual"],
            checked: "2026-10-13",
            href: "/best/robot-mower-small-yard",
            note: "The manual’s Q110H line says 1/4 acre.",
          },
          {
            label: "Max slope",
            value: publishedSlope(q.slope, q.degrees),
            sources: ["amz-q110h"],
            checked: "2026-10-13",
            href: "/best/robot-mower-for-hills",
            note: "24.2° was calculated from 45%, not a second published degree.",
          },
          {
            label: "Cutting height",
            value: specText(q.specs.cuttingHeight),
            sources: ["q110h-manual"],
            checked: "2026-10-13",
            note: "40–80 mm. The CE Q105/Q110 manual lists 20–60 mm. The Verge’s 0.8–2.4 in matches that CE band.",
          },
          {
            label: "Cutting width",
            value: specText(q.specs.cuttingWidth),
            sources: ["q110h-manual"],
            checked: "2026-10-13",
            note: "22 cm. Secondary pages round this to 8.7 in.",
          },
          {
            label: "Body width",
            value: specText(q.specs.bodyWidth),
            sources: ["q110h-manual"],
            checked: "2026-10-13",
            href: "/guides/robot-mower-front-and-back-yard",
            note: "420 mm in the L×W×H line. Not a minimum passage.",
          },
          {
            label: "Navigation",
            value: specText(q.specs.positioning),
            sources: ["amz-q110h"],
            checked: "2026-10-13",
            href: "/guides/rtk-vs-lidar-vs-vision",
          },
          {
            label: "Connectivity",
            value: specText(q.specs.connectivity),
            sources: ["verge"],
            checked: SPEC_CHECKED,
          },
          {
            label: "Storage temperature",
            value: specText(q.specs.storageTemperature),
            sources: ["q110h-manual"],
            checked: "2026-10-13",
            href: "/guides/robot-mower-winter-storage",
          },
        ]}
      />
      <SlopeMarginNote />
      <h2>The two cutting-height bands</h2>
      <p className="measure">
        The English technical data names the Q110H, model RRTR1BUT, rated 1/4 acre, and lists cutting height
        as 40–80 mm (1.57–3.15 in). The CE manual’s technical data names the Q105 and the Q110 and lists
        20–60 mm. The Verge published 0.8–2.4 in, which matches the CE band. Grass kept taller than 3.15 in
        is outside the Q110H line. A lawn someone hoped to cut at 0.8 in is inside the CE band and outside
        the Q110H line. <SourceLine ids={["q110h-manual", "q110h-manual-ce", "verge"]} checked="2026-10-13" />
      </p>
      <h2>Quarter acre, open sky</h2>
      <p className="measure">
        {formatAcres(q.acres)}. <ComfortableFor rated={q.acres} /> {q.slope}%, a rise of {risePer10Ft(q.slope)}.
        RTK plus VSLAM still wants sky along the path.{" "}
        <Link href="/best/robot-mower-under-trees">Under trees</Link> is a different pick.{" "}
        <SourceLine ids={["amz-q110h", "q110h-manual"]} checked="2026-10-13" />
      </p>
      <h2>What owners report</h2>
      <p className="measure">
        Few owner reports for the US Q110H exist yet. Threads that turned up on Oct 13, 2026 name the Q110 or
        the Q105, the European models in the CE manual, and they are not Q110H reports.
      </p>
      <h2>Honest limits</h2>
      <ul className="grid gap-2 pl-5">
        {family.notFor?.map((item) => (
          <li key={item}>{item}</li>
        ))}
        <li>A minimum passage is not published. The 16.54 in figure is body width.</li>
      </ul>
      <SupportOutlook brand="Roborock" />
      <p className="measure">
        Wi-Fi and Bluetooth are on the mower. The Verge describes a 4G tracking module sold separately.{" "}
        <SourceLine ids={["verge"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Two neighbors on the ladder</h2>
      <p className="measure">
        The <Link href="/reviews/segway-navimow-i-series">Navimow i210 AWD</Link> is the same quarter-acre
        class, rated {formatAcres(i210.acres)}, with network RTK and no antenna. The{" "}
        <Link href="/reviews/mammotion-luba-mini-2-awd">LUBA mini 2 AWD 1500H</Link> is rated{" "}
        {formatAcres(mini.acres, false)} and climbs to {mini.slope}%, with a taller cut.
      </p>
      <Faq
        items={[
          {
            q: "Why are there two cutting-height ranges?",
            a: "The English technical data for the Q110H says 40–80 mm (1.57–3.15 in). The CE manual for the Q105 and Q110 says 20–60 mm. They are not averaged.",
          },
          {
            q: "Will it mow under trees?",
            a: "It is an RTK-led mower. Canopy over the path is a reason to compare a LiDAR model. The under-trees page makes that split.",
          },
          {
            q: "How wide a gate does it need?",
            a: "The manual’s width is 16.54 in for the body. A minimum gap is not published, so the passage gauge will not invent one.",
          },
        ]}
      />
      <ResearchedBox
        sources={sources.map((id) => ({ id }))}
        manuals="Q1 series English technical data naming the Q110H, and the CE manual for the Q105 and Q110, both read Oct 13, 2026."
        threads="r/Roborock and r/roboticLawnmowers were checked. No thread named the US Q110H."
        questions="No manufacturer questions have been answered yet."
        specsLine="Manual and listing rechecked Oct 13, 2026."
      />
      <EndLinks
        pageType="review"
        links={[
          { asin: q.variant.asin, model: "RockNeo Q110H", productSlug: family.slug },
          { asin: i210.variant.asin, model: "Navimow i210 AWD", productSlug: i210.family.slug },
          { asin: mini.variant.asin, model: "LUBA mini 2 AWD 1500H", productSlug: mini.family.slug },
        ]}
      />
      <h2>Sources</h2>
      <ul className="grid gap-2 pl-5">
        {sources.map((id) => (
          <li key={id}>
            <SourceLine ids={[id]} checked={id === "verge" ? SPEC_CHECKED : "2026-10-13"} />
          </li>
        ))}
      </ul>
      <Related
        links={[
          { href: "/best/robot-mower-small-yard", label: "Which robot mower for a small yard?" },
          { href: "/guides/robot-mower-winter-storage", label: "Winter storage" },
          { href: "/guides/rtk-vs-lidar-vs-vision", label: "RTK, LiDAR, or vision" },
        ]}
      />
    </ArticleFrame>
  );
}
