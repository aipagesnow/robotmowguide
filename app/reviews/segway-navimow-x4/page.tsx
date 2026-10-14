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
} from "@/components/Blocks";
import { ComfortableFor, SlopeMarginNote } from "@/components/VoiceBits";
import { ProductLink } from "@/components/ProductLink";
import { NavFour, SpecPlate } from "@/components/Diagrams";
import { SpecTable } from "@/components/SpecTable";
import { VariantTable } from "@/components/VariantTable";
import { pageMeta } from "@/lib/metadata";
import { formatAcres, risePer10Ft } from "@/lib/format";
import { getFamily, modelFacts, navigationLabel } from "@/lib/products";
import { publishedSlope, slopeWithRise, specText } from "@/lib/speak";
import { FCC_COVERED_LIST, FCC_DA_26_789, SPEC_CHECKED } from "@/lib/site";

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
      status="On sale in the US as of Oct 10, 2026."
    >
      <p className="measure">
        If you've got an open acre with steep banks, the X430 is the one in this series we'd look at. It's
        rated {formatAcres(x430.acres)} and {publishedSlope(x430.slope, x430.degrees)}.
      </p>
      <p className="measure">
        If your side passage is under about 2 ft, if the lawn has no Wi-Fi or cell service, or if you don't
        want a yearly fee after the free period, we'd skip it.
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
            detail: <ComfortableFor rated={x430.acres} />,
          },
          {
            label: "Max slope",
            value: slopeWithRise(x430.slope, x430.degrees),
          },
          {
            label: "Passage",
            value: `Body width ${specText(x430.specs.bodyWidth)}`,
            detail: "If your side passage is narrower than the body, it won't get through.",
          },
          {
            label: "Navigation",
            value: navigationLabel(family.navigation),
            detail: "Network RTK needs Wi-Fi or 4G at your lawn. An antenna is included, and Segway calls it optional.",
          },
          {
            label: "After the free period",
            value: "A yearly fee for Connect+",
            detail: "The good news: on the X4, Connect+ is free for your first year on the X430. After that there's a yearly fee, and Segway doesn't say how much, which we'd like to know too. Network RTK is free for life, as long as Segway keeps its cloud running.",
          },
        ]}
      />
      <VariantTable
        family={family}
        pageType="review"
        differences={{
          "Navimow X430":
            "The one we'd start with. Antenna included but optional. Home Depot listing: 120 zones, and one year of free 4G.",
          "Navimow X450": `Rated ${x450 ? formatAcres(Number(x450.ladder?.ratedAreaAcres?.value)) : "Not published"}. We'd use the X4 page's map maximum of 1.8 acres for the X450 only. Same ${x450 && typeof x450.ladder?.maxSlopePercent?.value === "number" ? publishedSlope(Number(x450.ladder.maxSlopePercent.value), typeof x450.ladder.maxSlopeDegrees?.value === "number" ? Number(x450.ladder.maxSlopeDegrees.value) : undefined) : "Not published"} slope. Connect+ is free for 2 years, then a yearly fee. Other specs aren't published.`,
        }}
      />
      <h2>Specs we checked</h2>
      <SpecPlate familyId="segway-navimow-x4" slotId="plate-x4" modelName="Navimow X430" />
      <SpecTable
        caption="Navimow X430 figures, checked Oct 10, 2026. Amazon sources are named in the text and aren't linked."
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
            note: "A retailer copy gives 0.8–4 in. We'd use 0.75–4 in from the amazon.com listing.",
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
        The slope we'd plan on is {x430.slope}%, a rise of {risePer10Ft(x430.slope)}. The rated area is{" "}
        {formatAcres(x430.acres, false)}. <ComfortableFor rated={x430.acres} />{" "}
        <SourceLine ids={["navimow-x4"]} checked={SPEC_CHECKED} />
      </p>
      <SlopeMarginNote />
      <p className="measure">
        The X450 is the larger sibling, rated{" "}
        {x450 ? formatAcres(Number(x450.ladder?.ratedAreaAcres?.value)) : "Not published"}, with a map
        maximum of 1.8 acres stated for that model. We couldn't confirm a current amazon.com listing for the
        X450, so there's no button for it.
      </p>
      <h2>Trees and network RTK</h2>
      <NavFour highlight={["network"]} />
      <p className="measure">
        If your acre is open, the X430's network RTK is what we'd count on. Vision and a time-of-flight
        sensor are also on the spec. Network RTK needs Wi-Fi or 4G at the lawn. If canopy covers the path,
        that can still drop the fix, which is why a wooded acre is a reason to read the{" "}
        <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD review</Link> before this one. The antenna
        ships in the box and the listing calls it optional.{" "}
        <SourceLine ids={["homedepot-x430"]} checked={SPEC_CHECKED} />
      </p>
      <h2>A 24 in body, and the zone count</h2>
      <p className="measure">
        The body is 24 in wide, so it won't fit through your gate or side passage if yours is narrower than
        that. The Home Depot listing gives {specText(x430.specs.zones)} and a battery of{" "}
        {specText(x430.specs.battery)}. The cut is {specText(x430.specs.cuttingWidth)} wide.{" "}
        <SourceLine ids={["navimow-x4", "homedepot-x430"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Grass height</h2>
      <p className="measure">
        Cutting height is {specText(x430.specs.cuttingHeight)} on the amazon.com listing, and that's the
        range we'd use. A retailer copy gives 0.8–4 in, so those two don't match. The listing range covers
        both a short Bermuda cut and a tall St. Augustine cut.{" "}
        <SourceLine ids={["amz-x430"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Edges</h2>
      <p className="measure">
        Segway doesn't publish a distance-from-the-edge figure. Owner threads still describe trimming and
        missed strips, so we'd keep a string trimmer for the beds. Obstacle clearance is{" "}
        {specText(x430.specs.obstacleClearance)}, and the X4 page says up to 5.9 in on gentle slopes.{" "}
        <SourceLine ids={["navimow-x4"]} checked={SPEC_CHECKED} />
      </p>
      <OwnerReports
        intro="In the 4 owner threads we read in October 2026:"
        items={[
          {
            text: "Owners say it keeps up St. Augustine and Bermuda when you run it often.",
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
            text: "Owners still trim the edges, and some describe missed strips.",
            href: "https://www.reddit.com/r/roboticLawnmowers/comments/1uy0323/",
            linkLabel: "Thread on edges and missed strips",
          },
          {
            text: "If the mower is lifted and powers off, Locate My Mower stops.",
            href: "https://www.reddit.com/r/SegwayNavimow/comments/1ub6fc5/",
            linkLabel: "Thread on Locate My Mower after a lift",
          },
        ]}
      />
      <h2>Honest limits</h2>
      <ul className="grid gap-2 pl-5">
        <li>If your side passage is narrower than about 2 ft, the 24 in body won't get through.</li>
        <li>If your lawn has no reliable Wi-Fi or cell coverage, network RTK doesn't have a signal.</li>
        <li>If you don't want a yearly connectivity fee after the free period, we'd look elsewhere.</li>
        <li>If heavy canopy covers the mowing path, network RTK doesn't replace a map the mower can see.</li>
      </ul>
      <h2>Connectivity and support</h2>
      <p className="measure">
        Connect+ on the Navimow X4 is free for 1 year on the X430, or 2 years on the X450, and then there's a
        yearly fee. Network RTK is free for life, as long as Segway keeps its cloud running. The Home Depot
        X430 listing says one year of free 4G and free lifetime network RTK. Those two pages don't use the
        same words, and neither one says what the fee costs.{" "}
        <SourceLine ids={["navimow-x4", "homedepot-x430"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Support outlook</h2>
      <p className="measure">
        Segway has no <a href={FCC_COVERED_LIST}>FCC Conditional Approval</a> for new models, but models
        already authorized can keep receiving updates until at least <a href={FCC_DA_26_789}>Jan 1, 2029</a>.
        A secondary article says Segway's US models are already authorized. We couldn't find that on a Segway
        page, so we wouldn't count on it.
      </p>
      <p className="measure">
        Segway's own site was sold out on Oct 10, 2026. The amazon.com listing was live, so that's where we'd
        look.
      </p>
      <h2>Two other yards</h2>
      <p className="measure">
        If trees cover your lawn, the LUBA 3 AWD 3000 is the comparison. It's rated{" "}
        {formatAcres(luba.acres, false)}, not a full acre, and it adds LiDAR.{" "}
        <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD review</Link>.
      </p>
      <p className="measure">
        If your banks go up to {worx.slope}%, the Worx Landroid Vision Cloud WR340 is the open-acre
        comparison. <Link href="/reviews/worx-landroid-vision-cloud">Worx Landroid Vision Cloud review</Link>.
      </p>
      <Faq
        items={[
          {
            q: "Will the X430 mow an acre under trees?",
            a: "The rating is 1 acre, but only if the path can hold a network RTK fix. If canopy covers a large share of your grass, we'd compare the LUBA 3 AWD 3000, which adds LiDAR and is rated for 0.75 acre.",
          },
          {
            q: "Do I have to install the antenna?",
            a: "No, you don't have to. The Home Depot listing says the antenna is included and optional. Network RTK still needs Wi-Fi or 4G.",
          },
          {
            q: "What happens after the free year?",
            a: "The X4 page says a yearly fee for Connect+ after one year on the X430, or two years on the X450. Network RTK is free for life, as long as Segway keeps its cloud running. Segway doesn't say what the fee is on the X4 page.",
          },
        ]}
      />
      <ResearchedBox
        sources={sources.map((id) => ({ id }))}
        manuals="No owner's manual was in the sources we used."
        threads="We read four owner threads in October 2026."
        questions="No manufacturer has answered questions yet."
      />
      <h2>See these models</h2>
      <p className="measure">The X430 button is up top. The two comparisons:</p>
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
