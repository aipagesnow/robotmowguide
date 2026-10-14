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
import { formatAcres } from "@/lib/format";
import { getFamily, modelFacts, navigationLabel } from "@/lib/products";
import { publishedSlope, slopeWithRise, specText } from "@/lib/speak";
import { RECHECKED, SPEC_CHECKED } from "@/lib/site";

const title = "Worx Landroid M WR147 review: a quarter acre on boundary wire";
const description =
  "The WR147 is rated for 0.25 acre and 35% (20°). It follows a boundary wire and detects obstacles with a bump sensor.";

const FACT =
  "Edited and fact-checked by the RobotMowGuide editors at Aivora Digital. Specs checked against manufacturer pages on Oct 10, 2026. The WR147 amazon.com listing was opened again on Oct 13, 2026.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/reviews/worx-landroid-m-wr147",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Reviews", path: "/reviews" },
  { name: "Worx Landroid M WR147", path: "/reviews/worx-landroid-m-wr147" },
];

const sources = ["worx-landroid-models", "worx-wr147-manual", "amz-wr147"];

export default function Wr147Review() {
  const wr = modelFacts("worx-landroid-m-wr147", "Landroid M WR147");
  const family = getFamily("worx-landroid-m-wr147");
  const i210 = modelFacts("segway-navimow-i2-awd", "Navimow i210 AWD");
  const q = modelFacts("roborock-rockneo-q110h", "RockNeo Q110H");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/reviews/worx-landroid-m-wr147"
      crumbs={crumbs}
      updated={RECHECKED}
      whatChanged="October 13, 2026: first published. The amazon.com listing still named the WR147 and showed unavailable."
      factCheck={FACT}
      disclosure
      status="On sale in the US as of Oct 10, 2026."
    >
      <p className="measure">
        Read the WR147 for a quarter-acre lawn when you will lay and maintain a boundary wire. It is rated{" "}
        {formatAcres(wr.acres)} and {publishedSlope(wr.slope, wr.degrees)}. The wire in the box is{" "}
        {specText(wr.specs.boundaryWireIncluded)}.
      </p>
      <p className="measure">
        Look elsewhere if you will not lay wire, or if the yard is busy with toys and pets. Obstacle detection
        is a bump sensor. This page is the WR147, the 1/4-acre model. It is not the WR140 and not the WR155.
      </p>
      <CtaCluster>
        <ProductLink
          asin={wr.variant.asin}
          model="Landroid M WR147"
          productSlug={family.slug}
          placement="verdict"
          pageType="review"
        />
      </CtaCluster>
      <YardPhoto id="card-wr147" />
      <h2>Key numbers for your yard</h2>
      <KeyNumbers
        rows={[
          {
            label: "Rated area",
            value: formatAcres(wr.acres),
            detail: <ComfortableFor rated={wr.acres} />,
          },
          {
            label: "Max slope",
            value: slopeWithRise(wr.slope, wr.degrees),
          },
          {
            label: "Passage",
            value: "Not published",
            detail: `Cutting width ${specText(wr.specs.cuttingWidth)}.`,
          },
          {
            label: "Navigation",
            value: navigationLabel(family.navigation),
            detail: `Included wire ${specText(wr.specs.boundaryWireIncluded)}.`,
          },
          {
            label: "Cut",
            value: specText(wr.specs.cuttingHeight),
            detail: `${specText(wr.specs.battery)}. Obstacle detection: ${specText(wr.specs.obstacleDetection)}.`,
          },
        ]}
      />
      <VariantTable
        family={family}
        pageType="review"
        differences={{
          "Landroid M WR147":
            "The only model on this page. Boundary wire, bump sensor, six cut positions from 1.5 to 3.5 in.",
        }}
      />
      <h2>Specs we checked</h2>
      <SpecTable
        caption="WR147 figures checked Oct 10, 2026. The listing title was checked again Oct 13, 2026."
        rows={[
          {
            label: "Rated area",
            value: formatAcres(wr.acres),
            sources: ["worx-landroid-models", "amz-wr147"],
            checked: SPEC_CHECKED,
            href: "/guides/how-big-a-robot-mower-do-i-need",
            note: "The listing and the models page both use 1/4 acre and 10,890 sq ft.",
          },
          {
            label: "Max slope",
            value: publishedSlope(wr.slope, wr.degrees),
            sources: ["worx-wr147-manual"],
            checked: SPEC_CHECKED,
            href: "/best/robot-mower-for-hills",
          },
          {
            label: "Cutting width",
            value: specText(wr.specs.cuttingWidth),
            sources: ["worx-landroid-models", "worx-wr147-manual"],
            checked: SPEC_CHECKED,
          },
          {
            label: "Cutting height",
            value: specText(wr.specs.cuttingHeight),
            sources: ["worx-landroid-models", "worx-wr147-manual"],
            checked: SPEC_CHECKED,
            href: "/best/robot-mower-bermuda",
            note: "Six positions.",
          },
          {
            label: "Battery",
            value: specText(wr.specs.battery),
            sources: ["worx-landroid-models"],
            checked: SPEC_CHECKED,
          },
          {
            label: "Boundary wire included",
            value: specText(wr.specs.boundaryWireIncluded),
            sources: ["worx-wr147-manual"],
            checked: SPEC_CHECKED,
            href: "/guides/rtk-vs-lidar-vs-vision",
          },
          {
            label: "Obstacle detection",
            value: specText(wr.specs.obstacleDetection),
            sources: ["worx-landroid-models"],
            checked: SPEC_CHECKED,
          },
          {
            label: "Connectivity",
            value: specText(wr.specs.connectivity),
            sources: ["worx-wr147-manual"],
            checked: SPEC_CHECKED,
            note: "A theft feature is Not published.",
          },
        ]}
      />
      <SlopeMarginNote />
      <h2>What the wire changes</h2>
      <p className="measure">
        The WR147 does not need a sky view to know the edge. It fails when the wire is cut, or when a bed
        moves and the wire stays put. The included length is {specText(wr.specs.boundaryWireIncluded)}.{" "}
        <SourceLine ids={["worx-wr147-manual"]} checked={SPEC_CHECKED} />
      </p>
      <p className="measure">
        A bump sensor stops the mower after it touches something. Toys, pets, and hoses are in the way before
        the mower knows they are there. That is the reason this model is a poor fit for a busy yard.{" "}
        <SourceLine ids={["worx-landroid-models"]} checked={SPEC_CHECKED} />
      </p>
      <h2>What owners report</h2>
      <p className="measure">Few owner reports for the WR147 were in the sources for this page.</p>
      <h2>Running costs</h2>
      <p className="measure">
        A subscription price for the WR147 is Not published. The{" "}
        <Link href="/guides/robot-mower-cost-to-own">cost-to-own guide</Link> leaves it out of the yearly sum
        for that reason. Blade prices are Not published.
      </p>
      <h2>Honest limits</h2>
      <ul className="grid gap-2 pl-5">
        <li>Anyone who does not want to lay and maintain a boundary wire.</li>
        <li>A yard with toys and pets, because obstacle detection is a bump sensor.</li>
        <li>Banks steeper than {wr.slope}%.</li>
        <li>A lawn with heavy trees or two zones, unless you size it from the size guide rather than the full rating.</li>
        <li>A side passage whose width you need in writing. Body width not published.</li>
      </ul>
      <SupportOutlook brand="Worx" />
      <p className="measure">
        The amazon.com listing showed unavailable on Oct 13, 2026. The title still named the WR147.
      </p>
      <h2>Two other yards</h2>
      <p className="measure">
        The Navimow i210 AWD is the wire-free quarter acre, rated {formatAcres(i210.acres)} and {i210.slope}%.{" "}
        <Link href="/reviews/segway-navimow-i-series">Navimow i series review</Link>.
      </p>
      <p className="measure">
        The RockNeo Q110H is the other quarter-acre comparison, rated {formatAcres(q.acres)} and {q.slope}%.{" "}
        <Link href="/reviews/roborock-rockneo-q110h">RockNeo Q110H review</Link>.
      </p>
      <Faq
        items={[
          {
            q: "Is the WR147 discontinued because the listing showed unavailable?",
            a: "No. On Oct 13, 2026 the amazon.com title still named the WR147 and the listing showed unavailable. Stock can change. The button stays.",
          },
          {
            q: "Does it mow without a boundary wire?",
            a: "No. Navigation is the boundary wire. The manual lists 590.5 ft of wire included.",
          },
          {
            q: "Will it see a pet before it bumps it?",
            a: "The models page lists a bump sensor. Obstacle detection is that bump sensor, not a camera or radar.",
          },
        ]}
      />
      <ResearchedBox
        sources={sources.map((id) => ({ id }))}
        manuals="The WR165, WR147, and WR155 owner's manual was the source for slope, wire length, and connectivity."
        threads="Few owner reports for the WR147 were in the sources for this page."
        questions="No manufacturer questions have been answered yet."
        specsLine="Specs checked Oct 10, 2026. The amazon.com listing title was checked again Oct 13, 2026."
      />
      <h2>See these models</h2>
      <EndLinks
        pageType="review"
        links={[
          { asin: wr.variant.asin, model: "Landroid M WR147", productSlug: family.slug },
          { asin: i210.variant.asin, model: "Navimow i210 AWD", productSlug: i210.family.slug },
          { asin: q.variant.asin, model: "RockNeo Q110H", productSlug: q.family.slug },
        ]}
      />
      <h2>Sources</h2>
      <ul className="grid gap-2 pl-5">
        {sources.map((id) => (
          <li key={id}>
            <SourceLine ids={[id]} checked={id === "amz-wr147" ? RECHECKED : SPEC_CHECKED} />
          </li>
        ))}
      </ul>
      <Related
        links={[
          { href: "/best/robot-mower-small-yard", label: "Which robot mower for a small yard?" },
          { href: "/guides/rtk-vs-lidar-vs-vision", label: "RTK, LiDAR, or vision" },
          { href: "/reviews/worx-landroid-vision-cloud", label: "Worx Landroid Vision Cloud review" },
          { href: "/reviews/segway-navimow-i-series", label: "Navimow i series review" },
          { href: "/tools/mower-finder", label: "Which mower fits my yard?" },
        ]}
      />
    </ArticleFrame>
  );
}
