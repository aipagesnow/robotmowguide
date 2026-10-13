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
import { FccWaiver } from "@/components/FccNote";
import { ProductLink } from "@/components/ProductLink";
import { NavFour, SpecPlate } from "@/components/Diagrams";
import { SpecTable } from "@/components/SpecTable";
import { VariantTable } from "@/components/VariantTable";
import { pageMeta } from "@/lib/metadata";
import { formatAcres } from "@/lib/format";
import { getFamily, modelFacts, navigationLabel } from "@/lib/products";
import { interiorOrBoundary, publishedSlope, realisticLine, slopeWithRise, specText } from "@/lib/speak";
import { SPEC_CHECKED } from "@/lib/site";

const title = "Navimow X4 series review: an open acre with steep slopes";
const description =
  "The Navimow X430 is rated for 1 acre and 84% (40°). What that means for passages, trees, and the yearly fee.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/reviews/segway-navimow-x4",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Reviews", path: "/reviews" },
  { name: "Navimow X4", path: "/reviews/segway-navimow-x4" },
];

const sources = ["navimow-x4", "homedepot-x430", "amz-x430"];

export default function X4Review() {
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");
  const family = x430.family;
  const worx = modelFacts("worx-landroid-vision-cloud", "Landroid Vision Cloud WR340 (1 acre, 2WD)");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");
  const x450 = getFamily("segway-navimow-x4").variants.find((item) => item.model === "Navimow X450");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/reviews/segway-navimow-x4"
      crumbs={crumbs}
      whatChanged="October 13, 2026: the slope row points at the hills page, and the Worx review is linked."
      disclosure
    >
      <StatusLine>
        <p>On sale in the US as of Oct 10, 2026.</p>
        <p>Sold out on navimow.com at that check. The amazon.com listing was live.</p>
        <p>
          A secondary article quotes Segway as saying US Navimow models already hold FCC authorization. We
          did not find that statement on a Segway page, so this review does not treat the X430 as authorized
          on that basis.
        </p>
        <p>
          <FccWaiver />
        </p>
      </StatusLine>
      <p className="measure">
        The X430 is the acre mower in this series for an open lawn with steep banks: {formatAcres(x430.acres)}{" "}
        and {publishedSlope(x430.slope, x430.degrees)}.
      </p>
      <p className="measure">
        It is a poor fit if the side passage is under about 2 ft, if the lawn has no Wi-Fi or cell service, or
        if you do not want a yearly fee after the free period.
      </p>
      <CtaCluster>
        <ProductLink
          asin={x430.variant.asin}
          model="Navimow X430"
          productSlug={family.slug}
          placement="verdict"
          pageType="review"
        />
      </CtaCluster>
      <YardPhoto id="card-x4" />
      <h2>Key numbers for your yard</h2>
      <KeyNumbers
        rows={[
          {
            label: "Rated area",
            value: formatAcres(x430.acres),
            detail: realisticLine(x430.acres),
          },
          {
            label: "Max slope",
            value: slopeWithRise(x430.slope, x430.degrees),
            detail: interiorOrBoundary(),
          },
          {
            label: "Passage",
            value: `Body width ${specText(x430.specs.bodyWidth)}`,
            detail: "A side passage narrower than the body will not pass the mower.",
          },
          {
            label: "Navigation",
            value: navigationLabel(family.navigation),
            detail: "Network RTK needs Wi-Fi or 4G. An antenna is included and described as optional.",
          },
          {
            label: "After the free period",
            value: "A yearly fee for Connect+",
            detail: "The X4 page says one free year on the X430. Network RTK is described as free for life, and that depends on Segway’s cloud. The fee amount is not printed here.",
          },
        ]}
      />
      <VariantTable
        family={family}
        pageType="review"
        differences={{
          "Navimow X430":
            "Primary model on this page. Antenna included but optional. Home Depot listing: 120 zones, and one year of free 4G.",
          "Navimow X450": `Rated ${x450 ? formatAcres(Number(x450.ladder?.ratedAreaAcres?.value)) : "Not published"}. The X4 page lists a map maximum of 1.8 acres for the X450 only. Same ${x450 && typeof x450.ladder?.maxSlopePercent?.value === "number" ? publishedSlope(Number(x450.ladder.maxSlopePercent.value), typeof x450.ladder.maxSlopeDegrees?.value === "number" ? Number(x450.ladder.maxSlopeDegrees.value) : undefined) : "Not published"} slope. Connect+ is free for 2 years, then a yearly fee. Other specs were not on the sheet we checked.`,
        }}
      />
      <h2>Specs we checked</h2>
      <SpecPlate familyId="segway-navimow-x4" slotId="plate-x4" modelName="Navimow X430" />
      <SpecTable
        caption="Navimow X430 figures checked Oct 10, 2026. Amazon sources are named in text and are not linked."
        rows={[
          {
            label: "Rated area",
            value: formatAcres(x430.acres),
            sources: ["navimow-x4"],
            checked: SPEC_CHECKED,
            href: "/guides/how-big-a-robot-mower-do-i-need",
          },
          {
            label: "Max slope",
            value: publishedSlope(x430.slope, x430.degrees),
            sources: ["navimow-x4"],
            checked: SPEC_CHECKED,
            href: "/best/robot-mower-for-hills",
            note: interiorOrBoundary(),
          },
          {
            label: "Navigation",
            value: specText(x430.specs.positioning),
            sources: ["homedepot-x430"],
            checked: SPEC_CHECKED,
            href: "/guides/rtk-vs-lidar-vs-vision",
          },
          {
            label: "Cutting width",
            value: specText(x430.specs.cuttingWidth),
            sources: ["navimow-x4", "amz-x430"],
            checked: SPEC_CHECKED,
          },
          {
            label: "Cutting height",
            value: specText(x430.specs.cuttingHeight),
            sources: ["amz-x430"],
            checked: SPEC_CHECKED,
            note: "A retailer copy gives 0.8–4 in. This row uses 0.75–4 in from the amazon.com listing.",
          },
          {
            label: "Body width",
            value: specText(x430.specs.bodyWidth),
            sources: ["navimow-x4"],
            checked: SPEC_CHECKED,
          },
          {
            label: "Obstacle clearance",
            value: specText(x430.specs.obstacleClearance),
            sources: ["navimow-x4"],
            checked: SPEC_CHECKED,
            note: "The Navimow X4 page also says up to 5.9 in on gentle slopes.",
          },
          {
            label: "Battery",
            value: specText(x430.specs.battery),
            sources: ["homedepot-x430"],
            checked: SPEC_CHECKED,
          },
          {
            label: "Zones",
            value: specText(x430.specs.zones),
            sources: ["homedepot-x430"],
            checked: SPEC_CHECKED,
          },
        ]}
      />
      <h2 id="slope">Slope and size</h2>
      <p className="measure">
        The published slope is {slopeWithRise(x430.slope, x430.degrees)}. {interiorOrBoundary()} The rated
        area is {formatAcres(x430.acres)}. {realisticLine(x430.acres)}{" "}
        <SourceLine ids={["navimow-x4"]} checked={SPEC_CHECKED} />
      </p>
      <p className="measure">
        The X450 is the larger sibling, rated{" "}
        {x450 ? formatAcres(Number(x450.ladder?.ratedAreaAcres?.value)) : "Not published"}, with a map
        maximum of 1.8 acres stated for that model. We could not confirm a current amazon.com listing for the
        X450, so the variant table has no button for it.
      </p>
      <h2>Trees and network RTK</h2>
      <NavFour highlight={["network"]} />
      <p className="measure">
        The X430 uses network RTK. Vision and a time-of-flight sensor are also on the spec. Network RTK
        needs Wi-Fi or 4G at the lawn. Canopy over the path can still drop the fix, which is why a wooded
        acre is a reason to read the <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD review</Link>{" "}
        before this one. The antenna ships in the box and the listing calls it optional.{" "}
        <SourceLine ids={["homedepot-x430"]} checked={SPEC_CHECKED} />
      </p>
      <h2>A 24 in body, and the zone count</h2>
      <p className="measure">
        The body is {specText(x430.specs.bodyWidth)}. A gate or a side yard under about 2 ft is a stop, not a
        setting. The Home Depot listing gives {specText(x430.specs.zones)} and a battery of{" "}
        {specText(x430.specs.battery)}. The cut is {specText(x430.specs.cuttingWidth)} wide.{" "}
        <SourceLine ids={["navimow-x4", "homedepot-x430"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Grass height</h2>
      <p className="measure">
        Cutting height is {specText(x430.specs.cuttingHeight)} on the amazon.com listing. A retailer copy
        gives 0.8–4 in. Use 0.75–4 in unless the box sheet in front of you says otherwise. That range can
        reach a short cut and a 4 in cut. This page does not match it to a university mowing height.{" "}
        <SourceLine ids={["amz-x430"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Edges</h2>
      <p className="measure">
        A distance-from-the-edge figure is not published on the pages we checked. Owner threads, below, still
        describe trimming and missed strips. Obstacle clearance is {specText(x430.specs.obstacleClearance)},
        and the X4 page says up to 5.9 in on gentle slopes.{" "}
        <SourceLine ids={["navimow-x4"]} checked={SPEC_CHECKED} />
      </p>
      <OwnerReports
        intro="In the owner threads we read for the October 10, 2026 check. Four threads, not a survey."
        items={[
          {
            text: "Writers say it maintains St. Augustine and Bermuda when it runs often.",
            href: "https://www.reddit.com/r/SegwayNavimow/comments/1vi3zmr/",
            linkLabel: "Navimow thread on warm-season grass",
            extra: [
              {
                href: "https://www.reddit.com/r/roboticLawnmowers/comments/1uoocsz/",
                linkLabel: "Second thread on the same grasses",
              },
            ],
          },
          {
            text: "Writers still trim edges, and some describe missed strips.",
            href: "https://www.reddit.com/r/roboticLawnmowers/comments/1uy0323/",
            linkLabel: "Thread on edges and missed strips",
          },
          {
            text: "Locate My Mower stops once the mower powers off after a lift.",
            href: "https://www.reddit.com/r/SegwayNavimow/comments/1ub6fc5/",
            linkLabel: "Thread on Locate My Mower after a lift",
          },
        ]}
      />
      <h2>Honest limits</h2>
      <ul className="grid gap-2 pl-5">
        <li>Side passages narrower than about 2 ft, because the body is 24 in.</li>
        <li>A lawn with no reliable Wi-Fi or cell coverage, because network RTK needs one of those.</li>
        <li>A buyer who does not want a yearly connectivity fee after the free period.</li>
        <li>Heavy canopy over the mowing path. Network RTK does not replace a map the mower can see.</li>
      </ul>
      <h2>Connectivity and support</h2>
      <p className="measure">
        The Navimow X4 page says Connect+ is free for 1 year on the X430, or 2 years on the X450, and then a
        yearly fee. It also says network RTK is free for life, and that this depends on Segway’s cloud. The
        Home Depot X430 listing says one year of free 4G and free lifetime network RTK. Those two pages do
        not use the same words. The fee amount is omitted here on purpose.{" "}
        <SourceLine ids={["navimow-x4", "homedepot-x430"]} checked={SPEC_CHECKED} />
      </p>
      <p className="measure">
        <FccWaiver /> We are not stating that this unit’s FCC ID is on file.
      </p>
      <h2>Two other yards</h2>
      <p className="measure">
        The LUBA 3 AWD 3000 is the comparison when trees cover the lawn. It is rated {formatAcres(luba.acres)},
        not a full acre, and it adds LiDAR.{" "}
        <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD review</Link>.
      </p>
      <p className="measure">
        The Worx Landroid Vision Cloud WR340 is the comparison for an open acre whose banks stay within{" "}
        {publishedSlope(worx.slope, worx.degrees)}.{" "}
        <Link href="/reviews/worx-landroid-vision-cloud">Worx Landroid Vision Cloud review</Link>.
      </p>
      <Faq
        items={[
          {
            q: "Will the X430 mow an acre under trees?",
            a: "The rating is 1 acre. Network RTK still needs a fix along the path. If canopy covers a large share of the grass, compare the LUBA 3 AWD 3000, which adds LiDAR and is rated for 0.75 acre.",
          },
          {
            q: "Do I have to install the antenna?",
            a: "The Home Depot listing says the antenna is included and optional. Network RTK still needs Wi-Fi or 4G.",
          },
          {
            q: "What happens after the free year?",
            a: "The X4 page says a yearly fee for Connect+ after one year on the X430, or two years on the X450. Network RTK is described as free for life, depending on Segway’s cloud. This site does not print the fee.",
          },
        ]}
      />
      <ResearchedBox
        sources={sources.map((id) => ({ id }))}
        manuals="No owner's manual was in the source list for this page."
        threads="Four owner threads, read for the October 10, 2026 check."
        questions="No manufacturer questions have been answered yet."
      />
      <h2>See these models</h2>
      <p className="measure">The X430 button is at the top of this page. The two comparisons:</p>
      <EndLinks
        pageType="review"
        links={[
          { asin: luba.variant.asin, model: "LUBA 3 AWD 3000", productSlug: luba.family.slug },
          { asin: worx.variant.asin, model: "Landroid Vision Cloud WR340", productSlug: worx.family.slug },
        ]}
      />
      <h2>Sources</h2>
      <ul className="grid gap-2 pl-5">
        {sources.map((id) => (
          <li key={id}>
            <SourceLine ids={[id]} checked={SPEC_CHECKED} />
          </li>
        ))}
      </ul>
      <Related
        links={[
          { href: "/best#navimow-x430", label: "Navimow X430 on the best-mowers page" },
          { href: "/best/robot-mower-1-acre", label: "Which robot mower for about 1 acre?" },
          { href: "/best/robot-mower-for-hills", label: "What robot mower can climb my yard?" },
          { href: "/reviews/mammotion-luba-3-awd", label: "LUBA 3 AWD review" },
          { href: "/vs/navimow-x430-vs-luba-3-awd-3000", label: "Navimow X430 vs LUBA 3 AWD 3000" },
          { href: "/guides/rtk-vs-lidar-vs-vision", label: "RTK, LiDAR, or vision" },
          { href: "/guides/how-big-a-robot-mower-do-i-need", label: "How big a robot mower do I need?" },
        ]}
      />
    </ArticleFrame>
  );
}
