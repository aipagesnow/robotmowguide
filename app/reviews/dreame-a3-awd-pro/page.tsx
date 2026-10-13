import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import {
  CtaCluster,
  EndLinks,
  Faq,
  KeyNumbers,
  OwnerReports,
  Related,
  ResearchedBox,
  SourceLine,
  StatusLine,
} from "@/components/Blocks";
import { NoConditionalApproval } from "@/components/FccNote";
import { ProductLink } from "@/components/ProductLink";
import { SpecTable } from "@/components/SpecTable";
import { VariantTable } from "@/components/VariantTable";
import { pageMeta } from "@/lib/metadata";
import { formatAcres } from "@/lib/format";
import { getFamily, modelFacts, navigationLabel } from "@/lib/products";
import { interiorOrBoundary, publishedSlope, realisticLine, slopeWithRise, specText } from "@/lib/speak";
import { RECHECKED, SPEC_CHECKED } from "@/lib/site";

const title = "Dreame A3 AWD Pro review: LiDAR on a steep half acre";
const description =
  "The A3 AWD Pro 2500 is rated for 0.62 acre and 80% (38.7°), with LiDAR and no RTK. The 3500 and 5000 have no published slope.";

const FACT =
  "Edited and fact-checked by the RobotMowGuide editors at Aivora Digital. Specs checked against manufacturer pages on Oct 10, 2026. The 2500 listing was opened again on Oct 13, 2026.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/reviews/dreame-a3-awd-pro",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Reviews", path: "/reviews" },
  { name: "Dreame A3 AWD Pro", path: "/reviews/dreame-a3-awd-pro" },
];

const sources = ["dreame-a3", "amz-dreame-a3-2500"];

export default function DreameReview() {
  const dreame = modelFacts("dreame-a3-awd-pro", "A3 AWD Pro 2500");
  const family = dreame.family;
  const d3500 = getFamily("dreame-a3-awd-pro").variants.find((item) => item.model === "A3 AWD Pro 3500");
  const d5000 = getFamily("dreame-a3-awd-pro").variants.find((item) => item.model === "A3 AWD Pro 5000");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/reviews/dreame-a3-awd-pro"
      crumbs={crumbs}
      updated={RECHECKED}
      whatChanged="October 13, 2026: first published. Linked the comparison with the LUBA 3 AWD 3000."
      factCheck={FACT}
      disclosure
    >
      <StatusLine>
        <p>On sale in the US as of Oct 10, 2026.</p>
        <p>The amazon.com listing checked on Oct 13, 2026 is the A3 AWD Pro 2500: LiDAR, 0.62 acre, 80%.</p>
        <p>
          <NoConditionalApproval brand="Dreame" />
        </p>
      </StatusLine>
      <p className="measure">
        The 2500 is the Dreame to read when the lawn is about {formatAcres(dreame.acres)}, the banks are
        steep, and you want LiDAR instead of an RTK antenna. There is no RTK and no perimeter wire.
      </p>
      <p className="measure">
        Skip it for a full acre, for a midday run in full Southern sun if the heat pauses in the owner
        threads match your summer, and for a tall cut if you leave the edge mode on.
      </p>
      <CtaCluster>
        <ProductLink
          asin={dreame.variant.asin}
          model="Dreame A3 AWD Pro 2500"
          productSlug={family.slug}
          placement="verdict"
          pageType="review"
        />
      </CtaCluster>
      <YardPhoto id="card-dreame-a3-pro" />
      <h2>Key numbers for your yard</h2>
      <KeyNumbers
        rows={[
          {
            label: "Rated area",
            value: formatAcres(dreame.acres),
            detail: `${realisticLine(dreame.acres)} The sheet note is 2,500 m².`,
          },
          {
            label: "Max slope",
            value: slopeWithRise(dreame.slope, dreame.degrees),
            detail: interiorOrBoundary(),
          },
          {
            label: "Passage",
            value: "Not published",
            detail: `Cutting width is ${specText(dreame.specs.cuttingWidth)}. That is the deck, not a minimum gap.`,
          },
          {
            label: "Navigation",
            value: navigationLabel(family.navigation),
            detail: "No RTK. Setup can use Bluetooth without Wi-Fi.",
          },
          {
            label: "After 3 years",
            value: "4G Link becomes paid",
            detail: "The price is not stated. This page does not print one.",
          },
        ]}
      />
      <VariantTable
        family={family}
        pageType="review"
        differences={{
          "A3 AWD Pro 2500": "The model this review follows. LiDAR and vision. Slope is published on this row only.",
          "A3 AWD Pro 3500": `Rated ${d3500 ? formatAcres(Number(d3500.ladder?.ratedAreaAcres?.value)) : "Not published"}. Battery ${d3500 ? specText(d3500.specs?.battery) : "Not published"}. Slope is not published. This page does not copy the 2500’s ${publishedSlope(dreame.slope, dreame.degrees)}.`,
          "A3 AWD Pro 5000": `Rated ${d5000 ? formatAcres(Number(d5000.ladder?.ratedAreaAcres?.value)) : "Not published"}. Battery ${d5000 ? specText(d5000.specs?.battery) : "Not published"}. Slope is not published on this row either.`,
        }}
      />
      <h2>Specs we checked</h2>
      <SpecTable
        caption="A3 AWD Pro 2500 figures checked Oct 10, 2026. The listing was opened again on Oct 13, 2026 and still matched this model."
        rows={[
          {
            label: "Rated area",
            value: formatAcres(dreame.acres),
            sources: ["dreame-a3", "amz-dreame-a3-2500"],
            checked: SPEC_CHECKED,
            href: "/guides/how-big-a-robot-mower-do-i-need",
            note: "2,500 m².",
          },
          {
            label: "Max slope",
            value: publishedSlope(dreame.slope, dreame.degrees),
            sources: ["dreame-a3"],
            checked: SPEC_CHECKED,
            href: "/best/robot-mower-for-hills",
            note: `${interiorOrBoundary()} 38.7° is published for the 2500. It is not copied onto the 3500 or the 5000.`,
          },
          {
            label: "Navigation",
            value: specText(dreame.specs.positioning),
            sources: ["dreame-a3"],
            checked: SPEC_CHECKED,
            href: "/guides/rtk-vs-lidar-vs-vision",
          },
          {
            label: "Cutting width",
            value: specText(dreame.specs.cuttingWidth),
            sources: ["dreame-a3"],
            checked: SPEC_CHECKED,
            note: "Dual disc.",
          },
          {
            label: "Cutting height",
            value: specText(dreame.specs.cuttingHeight),
            sources: ["dreame-a3"],
            checked: SPEC_CHECKED,
          },
          {
            label: "Edge",
            value: specText(dreame.specs.edgeCutting),
            sources: ["dreame-a3"],
            checked: SPEC_CHECKED,
          },
          {
            label: "Obstacle clearance",
            value: specText(dreame.specs.obstacleClearance),
            sources: ["dreame-a3"],
            checked: SPEC_CHECKED,
          },
          {
            label: "Battery",
            value: specText(dreame.specs.battery),
            sources: ["dreame-a3"],
            checked: SPEC_CHECKED,
          },
          {
            label: "Maps",
            value: specText(dreame.specs.maps),
            sources: ["dreame-a3"],
            checked: SPEC_CHECKED,
          },
          {
            label: "Noise and water",
            value: `${specText(dreame.specs.noise)}. ${specText(dreame.specs.waterproofing)}.`,
            sources: ["dreame-a3"],
            checked: SPEC_CHECKED,
          },
          {
            label: "Weight",
            value: specText(dreame.specs.weight),
            sources: ["dreame-a3"],
            checked: SPEC_CHECKED,
          },
        ]}
      />
      <h2>Slope stays on the 2500 row</h2>
      <p className="measure">
        The published slope is {slopeWithRise(dreame.slope, dreame.degrees)}. {interiorOrBoundary()} The
        3500 is rated {d3500 ? formatAcres(Number(d3500.ladder?.ratedAreaAcres?.value)) : "Not published"}{" "}
        and the 5000 is rated {d5000 ? formatAcres(Number(d5000.ladder?.ratedAreaAcres?.value)) : "Not published"}.
        Neither row publishes a slope, so neither inherits 80% or 38.7°.{" "}
        <SourceLine ids={["dreame-a3"]} checked={SPEC_CHECKED} />
      </p>
      <h2>The edge mode and a tall cut</h2>
      <p className="measure">
        Dreame’s figure is {specText(dreame.specs.edgeCutting)}. Owner threads describe a border cut near 1.2
        in that can scalp a lawn kept taller, and writers switch that mode off. Cutting height on the 2500
        is {specText(dreame.specs.cuttingHeight)}. <SourceLine ids={["dreame-a3"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Heat, ruts, and canopy</h2>
      <p className="measure">
        Drive is {specText(dreame.specs.drive)}. The threads below describe LiDAR heat pauses in direct sun
        and in Florida heat, and they describe the wheels rutting wet turf and digging into sand. The same
        set of reading includes a praise of mapping under tree canopy. That praise is one independent
        review, not a count of owners. <SourceLine ids={["dreame-a3"]} checked={SPEC_CHECKED} />
      </p>
      <OwnerReports
        intro="In the owner threads and the independent review we read for the October 10, 2026 check."
        items={[
          {
            text: "LiDAR overheats in direct sun and Florida heat, and the mower docks to cool.",
            href: "https://www.reddit.com/r/roboticLawnmowers/comments/1uoiicf/",
            linkLabel: "Thread on LiDAR heat",
          },
          {
            text: "EdgeMaster cuts the border near 1.2 in and can scalp a tall lawn. Writers switch that mode off.",
            href: "https://www.reddit.com/r/Dreame_Tech/comments/1sivqul/",
            linkLabel: "Dreame thread on EdgeMaster",
            extra: [
              {
                href: "https://smartlawnbots.com/reviews/dreame-a3-awd-pro-3500-review/",
                linkLabel: "Smart Lawn Bots on the same edge behavior",
              },
            ],
          },
          {
            text: "The all-wheel drive can rut wet turf and dig into sand.",
            href: "https://www.reddit.com/r/roboticLawnmowers/comments/1uoiicf/",
            linkLabel: "Thread on ruts and sand",
          },
          {
            text: "The Smart Lawn Bots piece praises mapping under tree canopy.",
            href: "https://smartlawnbots.com/reviews/dreame-a3-awd-pro-3500-review/",
            linkLabel: "Smart Lawn Bots review",
          },
        ]}
      />
      <h2>Honest limits</h2>
      <ul className="grid gap-2 pl-5">
        <li>A lawn at or above 1 acre. The 2500 is rated 0.62 acre. The 5000’s larger rating has no published slope.</li>
        <li>Hot, full-sun yards where a midday run matters, if the heat pauses in the threads match your site.</li>
        <li>Tall-cut lawns if the edge mode stays on.</li>
        <li>Sandy soil or turf that stays wet.</li>
        <li>Two separate areas if you do not want a second dock. Each map needs its own charging station.</li>
      </ul>
      <h2>Support outlook</h2>
      <p className="measure">
        4G Link is included for 3 years, then paid. The price is not stated. Bluetooth setup does not need
        Wi-Fi. <SourceLine ids={["dreame-a3"]} checked={SPEC_CHECKED} />
      </p>
      <p className="measure">
        <NoConditionalApproval brand="Dreame" />
      </p>
      <h2>Two other yards</h2>
      <p className="measure">
        The LUBA 3 AWD 3000 also uses LiDAR, and it adds network RTK. It is rated {formatAcres(luba.acres)}{" "}
        and {publishedSlope(luba.slope, luba.degrees)}. The published degree on that row is 38.6°, not the
        Dreame 38.7°. <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD review</Link>.{" "}
        <Link href="/vs/navimow-x430-vs-luba-3-awd-3000">The X430 and the LUBA 3000, side by side</Link>.
      </p>
      <p className="measure">
        The Navimow X430 is the open acre with network RTK and no LiDAR: {formatAcres(x430.acres)} and{" "}
        {publishedSlope(x430.slope, x430.degrees)}. <Link href="/reviews/segway-navimow-x4">Navimow X4 review</Link>.
      </p>
      <Faq
        items={[
          {
            q: "Will the 2500 mow an acre?",
            a: "No. It is rated 0.62 acre, which is 2,500 m². The 5000 is rated 1.2 acre and does not publish a slope, so this page does not treat it as the steep-acre model.",
          },
          {
            q: "Does it need an RTK antenna?",
            a: "No. The Dreame page says 360° 3D LiDAR and binocular vision, with no RTK and no perimeter wire.",
          },
          {
            q: "What is the slope in degrees?",
            a: "The 2500 page prints 80% and 38.7°. Rise is 8 ft over 10 ft. The 3500 and the 5000 have no published degrees, and this page does not calculate stand-in degrees for them.",
          },
        ]}
      />
      <ResearchedBox
        sources={sources.map((id) => ({ id }))}
        manuals="No owner's manual was in the source list for this page."
        threads="Two owner threads and one independent review, read for the October 10, 2026 check."
        questions="No manufacturer questions have been answered yet."
        specsLine="Specs checked Oct 10, 2026. The 2500 listing was opened again on Oct 13, 2026."
      />
      <h2>See these models</h2>
      <p className="measure">The 2500 button is at the top of this page. The two comparisons:</p>
      <EndLinks
        pageType="review"
        links={[
          { asin: luba.variant.asin, model: "LUBA 3 AWD 3000", productSlug: luba.family.slug },
          { asin: x430.variant.asin, model: "Navimow X430", productSlug: x430.family.slug },
        ]}
      />
      <h2>Sources</h2>
      <ul className="grid gap-2 pl-5">
        {sources.map((id) => (
          <li key={id}>
            <SourceLine ids={[id]} checked={id.startsWith("amz-") ? RECHECKED : SPEC_CHECKED} />
          </li>
        ))}
      </ul>
      <Related
        links={[
          { href: "/best#dreame-a3-2500", label: "Dreame A3 AWD Pro 2500 on the best-mowers page" },
          { href: "/best/robot-mower-for-hills", label: "What robot mower can climb my yard?" },
          { href: "/reviews/mammotion-luba-3-awd", label: "LUBA 3 AWD review" },
          { href: "/vs/dreame-a3-awd-pro-vs-luba-3-awd", label: "Dreame A3 AWD Pro 2500 vs LUBA 3 AWD 3000" },
          { href: "/guides/rtk-vs-lidar-vs-vision", label: "RTK, LiDAR, or vision" },
          { href: "/tools/mower-finder", label: "Which mower fits my yard?" },
        ]}
      />
    </ArticleFrame>
  );
}
