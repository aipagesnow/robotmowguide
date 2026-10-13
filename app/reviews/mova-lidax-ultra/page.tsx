import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
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
import { FccWaiver, NoConditionalApproval } from "@/components/FccNote";
import { ProductLink } from "@/components/ProductLink";
import { SpecTable } from "@/components/SpecTable";
import { VariantTable } from "@/components/VariantTable";
import { pageMeta } from "@/lib/metadata";
import { formatAcres, formatDate } from "@/lib/format";
import { modelFacts, navigationLabel } from "@/lib/products";
import { interiorOrBoundary, publishedSlope, realisticLine, slopeWithRise, specText } from "@/lib/speak";
import { RECHECKED, SPEC_CHECKED } from "@/lib/site";

const title = "MOVA LiDAX Ultra review: quarter acre to three quarters";
const description =
  "The LiDAX Ultra 2000 is rated for 0.5 acre and 45%. The 1000 is smaller. Only the 3000 AWD is rated for 80%.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/reviews/mova-lidax-ultra",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Reviews", path: "/reviews" },
  { name: "MOVA LiDAX Ultra", path: "/reviews/mova-lidax-ultra" },
];

const sources = ["mova-1000", "mova-2000", "mova-3000", "amz-mova-1000", "amz-mova-2000", "amz-mova-3000"];

export default function MovaReview() {
  const m1000 = modelFacts("mova-lidax-ultra", "LiDAX Ultra 1000");
  const m2000 = modelFacts("mova-lidax-ultra", "LiDAX Ultra 2000");
  const m3000 = modelFacts("mova-lidax-ultra", "LiDAX Ultra 3000 AWD");
  const family = m2000.family;
  const dreame = modelFacts("dreame-a3-awd-pro", "A3 AWD Pro 2500");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/reviews/mova-lidax-ultra"
      crumbs={crumbs}
      updated={RECHECKED}
      whatChanged="October 13, 2026: first published. The three amazon.com titles were rechecked the same day."
      disclosure
    >
      <StatusLine>
        <p>On sale in the US as of {formatDate(family.statusDate)}.</p>
        <p>The 1000, 2000, and 3000 AWD listings were still those models on Oct 13, 2026.</p>
        <p>
          <NoConditionalApproval brand="MOVA" />
        </p>
      </StatusLine>
      <p className="measure">
        Start with the 2000 for an open half acre and banks inside {publishedSlope(m2000.slope, m2000.degrees)}.
        It is LiDAR and vision, with no RTK antenna. Move to the 3000 AWD when the bank is the reason you are
        shopping: that row is {publishedSlope(m3000.slope, m3000.degrees)} and {formatAcres(m3000.acres)}.
      </p>
      <p className="measure">
        Few owner reports exist yet. Two independent threads are linked below. Several other posts say MOVA
        provided the mower, and this page does not treat those as ordinary owners.
      </p>
      <CtaCluster>
        <ProductLink
          asin={m2000.variant.asin}
          model="LiDAX Ultra 2000"
          productSlug={family.slug}
          placement="verdict"
          pageType="review"
        />
      </CtaCluster>
      <h2>Key numbers for your yard</h2>
      <KeyNumbers
        rows={[
          {
            label: "Rated area",
            value: formatAcres(m2000.acres),
            detail: `${realisticLine(m2000.acres)} The 1000 is ${formatAcres(m1000.acres, false)}. The 3000 AWD is ${formatAcres(m3000.acres, false)}.`,
          },
          {
            label: "Max slope",
            value: slopeWithRise(m2000.slope, m2000.degrees),
            detail: `${interiorOrBoundary()} The 3000 AWD publishes ${publishedSlope(m3000.slope, m3000.degrees)}.`,
          },
          {
            label: "Paths",
            value: specText(m2000.specs.passage),
            detail: "The 2000 listing says it handles paths of that width. It is not a measured body width.",
          },
          {
            label: "Navigation",
            value: navigationLabel(family.navigation),
            detail: specText(m2000.specs.positioning),
          },
          {
            label: "After year one",
            value: "A yearly GPS fee, amount not repeated here",
            detail: "Wirecutter reports a fee after the first year. 4G on the 3000 AWD is described as free for 3 years.",
          },
        ]}
      />
      <VariantTable
        family={family}
        pageType="review"
        differences={{
          "LiDAX Ultra 1000": `Rated ${formatAcres(m1000.acres)}. Slope ${publishedSlope(m1000.slope, m1000.degrees)}. Cut ${specText(m1000.specs.cuttingHeight)}.`,
          "LiDAX Ultra 2000": `The model this review follows. Rated ${formatAcres(m2000.acres)}. Listing path figure ${specText(m2000.specs.passage)}.`,
          "LiDAX Ultra 3000 AWD": `Rated ${formatAcres(m3000.acres)}. AWD. Slope ${publishedSlope(m3000.slope, m3000.degrees)}. Cut width ${specText(m3000.specs.cuttingWidth)}.`,
        }}
      />
      <h2>Specs we checked</h2>
      <SpecTable
        caption="LiDAX Ultra 2000, unless a row names another size. Listing titles rechecked Oct 13, 2026."
        rows={[
          {
            label: "Rated area",
            value: formatAcres(m2000.acres),
            sources: ["mova-2000", "amz-mova-2000"],
            checked: "2026-10-13",
            href: "/best/robot-mower-half-acre",
          },
          {
            label: "Max slope",
            value: publishedSlope(m2000.slope, m2000.degrees),
            sources: ["mova-2000", "amz-mova-2000"],
            checked: SPEC_CHECKED,
            href: "/best/robot-mower-for-hills",
            note: interiorOrBoundary(),
          },
          {
            label: "3000 AWD slope",
            value: publishedSlope(m3000.slope, m3000.degrees),
            sources: ["mova-3000"],
            checked: SPEC_CHECKED,
            note: "Do not copy this percent onto the 1000 or the 2000.",
          },
          {
            label: "Navigation",
            value: specText(m2000.specs.positioning),
            sources: ["amz-mova-2000"],
            checked: "2026-10-13",
            href: "/best/robot-mower-under-trees",
          },
          {
            label: "Cutting height",
            value: specText(m2000.specs.cuttingHeight),
            sources: ["amz-mova-2000"],
            checked: "2026-10-13",
          },
          {
            label: "Paths",
            value: specText(m2000.specs.passage),
            sources: ["amz-mova-2000"],
            checked: "2026-10-13",
            href: "/guides/robot-mower-front-and-back-yard",
            note: "Listing bullet. Not a body-width measurement.",
          },
          {
            label: "3000 AWD cut width",
            value: specText(m3000.specs.cuttingWidth),
            sources: ["mova-3000"],
            checked: SPEC_CHECKED,
          },
          {
            label: "3000 AWD weight",
            value: specText(m3000.specs.weight),
            sources: ["mova-3000"],
            checked: SPEC_CHECKED,
          },
        ]}
      />
      <h2>Which size matches the lawn</h2>
      <p className="measure">
        A quarter acre lines up with the 1000, rated {formatAcres(m1000.acres)}. A half acre lines up with
        the 2000, rated {formatAcres(m2000.acres)}. {realisticLine(m2000.acres)} The 3000 AWD is rated{" "}
        {formatAcres(m3000.acres)}, and the sheet notes a dual map of that area times two.{" "}
        <Link href="/best/robot-mower-half-acre">Half-acre picks</Link>.{" "}
        <SourceLine ids={["mova-2000", "mova-3000"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Slope is not shared across the three</h2>
      <p className="measure">
        The 1000 and the 2000 publish {m2000.slope}%. {interiorOrBoundary()} The 3000 AWD publishes{" "}
        {slopeWithRise(m3000.slope, m3000.degrees)}. A steep bank is a reason to leave the 2000, not a reason
        to assume it climbs like the AWD. <SourceLine ids={["mova-2000", "mova-3000"]} checked={SPEC_CHECKED} />
      </p>
      <h2>LiDAR, and a path the listing names</h2>
      <p className="measure">
        The 2000 listing describes 360° 3D LiDAR and AI vision, with no wire and no RTK. The same listing
        says it handles {specText(m2000.specs.passage)} paths. Use that figure in the{" "}
        <Link href="/guides/robot-mower-front-and-back-yard">passage gauge</Link>, and measure the opening
        yourself. <SourceLine ids={["amz-mova-2000"]} checked="2026-10-13" />
      </p>
      <OwnerReports
        intro="Few owner reports exist yet. The two threads below are buyers writing about their own mowers. Other posts in the same month disclose that MOVA provided the unit, and they are left out."
        items={[
          {
            text: "A buyer who paid for a 2000, one month in, skipped the AWD because the yard has little slope, and plans a second map for steeper side yards.",
            href: "https://www.reddit.com/r/MOVASmartGardenHub/comments/1ujt6ch/",
            linkLabel: "One-month 2000 thread",
          },
          {
            text: "A 1000 owner, about two weeks in, describes auto-mapping on a yard with slopes, beds, and trees.",
            href: "https://www.reddit.com/r/roboticLawnmowers/comments/1sg5idw/",
            linkLabel: "1000 owner thread",
          },
        ]}
      />
      <h2>Honest limits</h2>
      <ul className="grid gap-2 pl-5">
        {family.notFor?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>Data and support</h2>
      <p className="measure">
        The 2000 sheet cites Wirecutter for a yearly GPS fee after year one. The amount stays on that review.
        The 3000 AWD page says 4G is free for 3 years. <FccWaiver />{" "}
        <SourceLine ids={["wirecutter", "mova-3000"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Two neighbors on the ladder</h2>
      <p className="measure">
        The <Link href="/reviews/dreame-a3-awd-pro">Dreame A3 AWD Pro 2500</Link> is rated{" "}
        {formatAcres(dreame.acres)} and {publishedSlope(dreame.slope, dreame.degrees)}, also on LiDAR, with a
        steeper published slope than the Ultra 2000. The{" "}
        <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD 3000</Link> adds network RTK at{" "}
        {formatAcres(luba.acres)}.
      </p>
      <Faq
        items={[
          {
            q: "Which LiDAX Ultra is the half-acre mower?",
            a: "The 2000 is rated 0.5 acre. Heavy trees or two zones use our 1.25× rule, so that rating no longer covers a full half acre in that case.",
          },
          {
            q: "Do I need the 3000 AWD for a hill?",
            a: "The 1000 and 2000 publish 45%. The 3000 AWD publishes 80% (38.6°). The hills page labels whether a maker says interior or boundary.",
          },
          {
            q: "Are there many owner reports?",
            a: "Few owner reports exist yet. This page links two independent threads and leaves out posts that say MOVA provided the mower.",
          },
        ]}
      />
      <ResearchedBox
        sources={sources.map((id) => ({ id }))}
        manuals="No MOVA owner's manual was in the source list."
        threads="Two independent owner threads, June 2026 and April 2026. Provided-unit posts were not counted."
        questions="No manufacturer questions have been answered yet."
        specsLine="Listing titles rechecked Oct 13, 2026. Brand pages checked Oct 10, 2026."
      />
      <EndLinks
        pageType="review"
        links={[
          { asin: m2000.variant.asin, model: "LiDAX Ultra 2000", productSlug: family.slug },
          { asin: m1000.variant.asin, model: "LiDAX Ultra 1000", productSlug: family.slug },
          { asin: m3000.variant.asin, model: "LiDAX Ultra 3000 AWD", productSlug: family.slug },
        ]}
      />
      <h2>Sources</h2>
      <ul className="grid gap-2 pl-5">
        {sources.map((id) => (
          <li key={id}>
            <SourceLine ids={[id]} checked={id.startsWith("amz") ? "2026-10-13" : SPEC_CHECKED} />
          </li>
        ))}
      </ul>
      <Related
        links={[
          { href: "/best/robot-mower-half-acre", label: "Which robot mower for a half acre?" },
          { href: "/vs/dreame-a3-awd-pro-vs-luba-3-awd", label: "Dreame A3 AWD Pro vs LUBA 3 AWD" },
          { href: "/guides/robot-mower-front-and-back-yard", label: "Front yard and back yard" },
        ]}
      />
    </ArticleFrame>
  );
}
