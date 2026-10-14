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
import { SupportOutlook } from "@/components/FccNote";
import { ComfortableFor, SlopeMarginNote } from "@/components/VoiceBits";
import { ProductLink } from "@/components/ProductLink";
import { SpecTable } from "@/components/SpecTable";
import { VariantTable } from "@/components/VariantTable";
import { pageMeta } from "@/lib/metadata";
import { formatAcres, risePer10Ft } from "@/lib/format";
import { getFamily, modelFacts, navigationLabel } from "@/lib/products";
import { publishedSlope, slopeWithRise, specText } from "@/lib/speak";
import { RECHECKED, SPEC_CHECKED } from "@/lib/site";

const title = "Worx Landroid Vision Cloud review: an open acre on vision";
const description =
  "The WR340 is rated for 1 acre and 30% (17°). The WR344 is the 4WD sibling at 84%. What the listings do and do not settle.";

const FACT =
  "Edited and fact-checked by the RobotMowGuide editors at Aivora Digital. Specs checked against manufacturer pages on Oct 10, 2026. The WR310, WR340, and WR344 listings were opened again on Oct 13, 2026.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/reviews/worx-landroid-vision-cloud",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Reviews", path: "/reviews" },
  { name: "Worx Landroid Vision Cloud", path: "/reviews/worx-landroid-vision-cloud" },
];

const sources = ["worx-vision-cloud", "amz-wr340", "amz-wr344", "amz-wr310", "worx-wr310-us", "wirecutter", "worx-wr344-support"];

export default function WorxReview() {
  const worx = modelFacts("worx-landroid-vision-cloud", "Landroid Vision Cloud WR340 (1 acre, 2WD)");
  const wr344 = modelFacts("worx-landroid-vision-cloud", "Landroid Vision Cloud 4WD WR344 (1 acre)");
  const wr310 = modelFacts("worx-landroid-vision-cloud", "Landroid Vision Cloud WR310 (1/4 acre)");
  const family = getFamily("worx-landroid-vision-cloud");
  const wr320 = family.variants.find((item) => item.model.startsWith("Landroid Vision Cloud WR320"));
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/reviews/worx-landroid-vision-cloud"
      crumbs={crumbs}
      updated={RECHECKED}
      whatChanged="October 13, 2026: first published."
      factCheck={FACT}
      disclosure
      status="On sale in the US as of Oct 10, 2026."
    >
      <p className="measure">
        Read the WR340 when the lawn is an open acre and the banks stay within{" "}
        {publishedSlope(worx.slope, worx.degrees)}. Cloud RTK needs no antenna. Stereo vision is part of the
        same setup, and Worx says V-SLAM takes over in shade.
      </p>
      <p className="measure">
        Look elsewhere if the bank is steeper than 30% and you are set on two-wheel drive, if the grass is
        patchy or weedy, or if the acre is broken into many rooms of lawn. The WR344 is the steep-bank model
        in this family, not a second copy of the WR340.
      </p>
      <CtaCluster>
        <ProductLink
          asin={worx.variant.asin}
          model="Landroid Vision Cloud WR340"
          productSlug={family.slug}
          placement="verdict"
          pageType="review"
        />
      </CtaCluster>
      <YardPhoto id="card-worx-vision-cloud" />
      <h2>Key numbers for your yard</h2>
      <KeyNumbers
        rows={[
          {
            label: "Rated area",
            value: formatAcres(worx.acres),
            detail: (
              <>
                <ComfortableFor rated={worx.acres} /> Wirecutter’s complex-lawn note is a separate caution.
              </>
            ),
          },
          {
            label: "Max slope",
            value: slopeWithRise(worx.slope, worx.degrees),
          },
          {
            label: "Passage",
            value: "Not published",
            detail: `Cutting width ${specText(worx.specs.cuttingWidth)}. Weight ${specText(worx.specs.weight)}.`,
          },
          {
            label: "Navigation",
            value: navigationLabel(family.navigation),
            detail: specText(worx.specs.connectivity),
          },
          {
            label: "Cut",
            value: specText(worx.specs.cuttingHeight),
            detail: specText(worx.specs.battery),
          },
        ]}
      />
      <VariantTable
        family={family}
        pageType="review"
        differences={{
          "Landroid Vision Cloud WR310 (1/4 acre)": `Rated ${formatAcres(wr310.acres)} and ${publishedSlope(wr310.slope, wr310.degrees)}. The WR340 listing’s comparison chart marks Find My Landroid and Cut-to-Zero as not included on the WR310 row. Other WR310 specs are not published.`,
          "Landroid Vision Cloud WR320 (1/2 acre)": `Rated ${wr320 ? formatAcres(Number(wr320.ladder?.ratedAreaAcres?.value)) : "Not published"}. Slope 30%, degrees not published. No confirmed amazon.com listing.`,
          "Landroid Vision Cloud WR340 (1 acre, 2WD)":
            "The model this review follows. Two-wheel drive. 30% (17°). Cloud RTK and vision.",
          "Landroid Vision Cloud 4WD WR344 (1 acre)": `Same ${formatAcres(wr344.acres)} rating, four-wheel drive, ${publishedSlope(wr344.slope, wr344.degrees)}. The listing describes a Cut-to-Zero offset blade. Cutting width and height below are from that listing.`,
        }}
      />
      <h2>Specs we checked</h2>
      <SpecTable
        caption="WR340 figures checked Oct 10, 2026, unless a row says the WR344 listing was rechecked Oct 13, 2026."
        rows={[
          {
            label: "Rated area",
            value: formatAcres(worx.acres),
            sources: ["worx-vision-cloud", "amz-wr340"],
            checked: SPEC_CHECKED,
            href: "/guides/how-big-a-robot-mower-do-i-need",
            note: "Wirecutter suggests a complex lawn closer to a quarter acre. That note is not our 1.25× rule.",
          },
          {
            label: "Max slope",
            value: publishedSlope(worx.slope, worx.degrees),
            sources: ["worx-vision-cloud"],
            checked: SPEC_CHECKED,
            href: "/best/robot-mower-for-hills",
            note: "The WR344 slope is a different row.",
          },
          {
            label: "Navigation",
            value: specText(worx.specs.positioning),
            sources: ["worx-vision-cloud"],
            checked: SPEC_CHECKED,
            href: "/guides/rtk-vs-lidar-vs-vision",
          },
          {
            label: "Cutting width",
            value: specText(worx.specs.cuttingWidth),
            sources: ["worx-vision-cloud"],
            checked: SPEC_CHECKED,
            note: "WR340 series page. The WR344 listing’s own table, rechecked Oct 13, 2026, prints the same 8.7 in.",
          },
          {
            label: "Cutting height",
            value: specText(worx.specs.cuttingHeight),
            sources: ["worx-vision-cloud"],
            checked: SPEC_CHECKED,
            note: "WR340 series page. See the WR344 section for the listing recheck.",
          },
          {
            label: "Battery",
            value: specText(worx.specs.battery),
            sources: ["worx-vision-cloud"],
            checked: SPEC_CHECKED,
          },
          {
            label: "Weight",
            value: specText(worx.specs.weight),
            sources: ["worx-vision-cloud"],
            checked: SPEC_CHECKED,
          },
          {
            label: "Connectivity",
            value: specText(worx.specs.connectivity),
            sources: ["worx-vision-cloud"],
            checked: SPEC_CHECKED,
          },
        ]}
      />
      <h2 id="slope">Two-wheel drive stops at 30%</h2>
      <p className="measure">
        The WR340 slope is {worx.slope}%, a rise of {risePer10Ft(worx.slope)}. The WR344 is rated{" "}
        {formatAcres(wr344.acres)} and {wr344.slope}%. The degree on the WR344 listing is written as about 40°.
        Drive is four-wheel, with front-wheel steering, and the listing describes a Cut-to-Zero offset blade.{" "}
        <SourceLine ids={["amz-wr344", "worx-vision-cloud"]} checked={RECHECKED} />
      </p>
      <SlopeMarginNote />
      <p className="measure">
        Wirecutter says Cut-to-Zero is not recommended above 15°. That note is Wirecutter’s. The comparison
        chart on the WR340 listing marks Cut-to-Zero as included for the WR340 and not included for the
        WR310. The Worx series page used for the WR340 width does not describe Cut-to-Zero as this model’s
        edge method, and Worx does not publish a distance-from-the-edge figure for the WR340.{" "}
        <SourceLine ids={["wirecutter", "amz-wr340"]} checked={RECHECKED} />
      </p>
      <h2>The acre rating and a complex lawn</h2>
      <p className="measure">
        The published area is {formatAcres(worx.acres)}. <ComfortableFor rated={worx.acres} /> Wirecutter, updated Aug
        3, 2026, suggests a complex lawn closer to a quarter acre than that rating. Use the Wirecutter note
        as a caution about a broken-up lawn. Trees or two zones are sized on the size guide.{" "}
        <SourceLine ids={["wirecutter", "worx-vision-cloud"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Vision, and a 2023 leaf report</h2>
      <p className="measure">
        The navigation line is {specText(worx.specs.positioning)}. A thread about a 2023 Landroid Vision says
        the mower stopped at leaves, weeds, and bald patches. That report is about the 2023 Vision. It is not
        evidence that Vision Cloud does the same.{" "}
        <SourceLine ids={["worx-vision-cloud"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Cutting height on the US listing</h2>
      <p className="measure">
        The WR344 amazon.com product information, checked Oct 13, 2026, lists a cutting width of{" "}
        {specText(wr344.specs.cuttingWidth)} and a cutting height of {specText(wr344.specs.cuttingHeight)},
        in 7 positions. Those are the figures this page uses. A European Worx page for the WR344E lists a
        cutting height of 20 mm to 70 mm, about 0.8–2.8 in if you convert the millimeters. That European page
        disagrees with the US listing on height. The height on this page is the US listing. The support page
        for the WR344 was not the source of the width and height.{" "}
        <SourceLine ids={["amz-wr344"]} checked={RECHECKED} />
      </p>
      <h2>Find My Landroid is not settled</h2>
      <p className="measure">
        The amazon.com comparison chart for the WR340 listing marks Find My Landroid as included. Wirecutter’s
        Aug 3, 2026 review treats a GPS module as an extra. The two sources disagree. Neither states a price
        or says the module works with the battery out. The same chart marks Find My Landroid as
        not included on the WR310 row. <SourceLine ids={["amz-wr340", "wirecutter"]} checked={RECHECKED} />
      </p>
      <OwnerReports
        intro="In the 3 owner threads we read in October 2026:"
        items={[
          {
            text: "A 2023 Landroid Vision stopped at leaves, weeds, and bald patches. That report is not evidence that Vision Cloud does the same.",
            href: "https://www.reddit.com/r/worxlandroid/comments/15puvcg/",
            linkLabel: "2023 Vision thread on leaves and bare spots",
          },
          {
            text: "Cut-to-Edge still leaves a strip of tall grass, in a thread and in an independent review.",
            href: "https://www.reddit.com/r/worxlandroid/comments/14xj3au/",
            linkLabel: "Thread on the leftover strip",
            extra: [
              {
                href: "https://www.bttr.reviews/worx-landroid-vision-review/",
                linkLabel: "bttr.reviews on the same strip",
              },
            ],
          },
          {
            text: "A later thread says the mower improved after a firmware update.",
            href: "https://www.reddit.com/r/worxlandroid/comments/1k1c94q/",
            linkLabel: "Thread on a later firmware update",
          },
        ]}
      />
      <h2>Honest limits</h2>
      <ul className="grid gap-2 pl-5">
        <li>Banks steeper than 30% if you buy the two-wheel-drive WR340. The WR344 is the 84% model.</li>
        <li>Patchy or weedy lawns that vision may read as not grass.</li>
        <li>A very broken-up acre. The 1 acre rating is generous for that shape.</li>
        <li>A side passage whose width you need in writing. Body width and minimum gap are not published.</li>
      </ul>
      <SupportOutlook brand="Worx" />
      <p className="measure">
        Worx says lifetime RTK Cloud service at no extra cost. That depends on Worx’s cloud.{" "}
        <SourceLine ids={["worx-vision-cloud"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Two other yards</h2>
      <p className="measure">
        The Navimow X430 is the open acre when the banks are steeper than 30%: {formatAcres(x430.acres)} and{" "}
        {x430.slope}%. <Link href="/reviews/segway-navimow-x4">Navimow X4 review</Link>.
      </p>
      <p className="measure">
        The LUBA 3 AWD 3000 is the comparison when trees cover the lawn. It is rated {formatAcres(luba.acres)},
        not a full acre, and it adds LiDAR.{" "}
        <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD review</Link>.
      </p>
      <Faq
        items={[
          {
            q: "Does the WR340 mow a full acre?",
            a: "The rating is 1 acre. Wirecutter’s Aug 3, 2026 note suggests a complex lawn closer to a quarter acre. Our 1.25× rule is a separate planning figure for heavy trees or two zones.",
          },
          {
            q: "Which Worx model climbs a steep bank?",
            a: "The WR340 publishes 30%. The WR344 publishes 84%. Do not put the WR344 slope on the two-wheel-drive models.",
          },
          {
            q: "Is Find My Landroid in the WR340 box?",
            a: "The amazon.com comparison chart marks it included. Wirecutter treats a GPS module as an extra. The two sources disagree, and neither states a price.",
          },
        ]}
      />
      <ResearchedBox
        sources={sources.map((id) => ({ id }))}
        manuals="The support-na.worx.com WR344 page was not the source of the cutting width or height on this page."
        threads="Three owner threads and one independent review, read in October 2026."
        questions="No manufacturer questions have been answered yet."
        specsLine="Specs checked Oct 10, 2026. WR310, WR340, and WR344 listings rechecked Oct 13, 2026."
      />
      <h2>See these models</h2>
      <p className="measure">The WR340 button is at the top of this page. The WR344 button is in the variant table. The two comparisons:</p>
      <EndLinks
        pageType="review"
        links={[
          { asin: x430.variant.asin, model: "Navimow X430", productSlug: x430.family.slug },
          { asin: luba.variant.asin, model: "LUBA 3 AWD 3000", productSlug: luba.family.slug },
        ]}
      />
      <h2>Sources</h2>
      <ul className="grid gap-2 pl-5">
        {sources.map((id) => (
          <li key={id}>
            <SourceLine ids={[id]} checked={id.startsWith("amz-wr") ? RECHECKED : SPEC_CHECKED} />
          </li>
        ))}
      </ul>
      <Related
        links={[
          { href: "/best#worx-wr340", label: "Worx WR340 on the best-mowers page" },
          { href: "/best/robot-mower-1-acre", label: "Which robot mower for about 1 acre?" },
          { href: "/best/robot-mower-for-hills", label: "What robot mower can climb my yard?" },
          { href: "/reviews/segway-navimow-x4", label: "Navimow X4 review" },
          { href: "/guides/rtk-vs-lidar-vs-vision", label: "RTK, LiDAR, or vision" },
        ]}
      />
    </ArticleFrame>
  );
}
