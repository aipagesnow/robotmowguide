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
import { modelFacts, navigationLabel } from "@/lib/products";
import { publishedSlope, slopeWithRise, specText } from "@/lib/speak";
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
      whatChanged="October 13, 2026: first published. The three amazon.com titles were read the same day."
      disclosure
      status="On sale in the US as of Oct 10, 2026."
    >
      <p className="measure">
        If you've got an open half acre and banks up to {publishedSlope(m2000.slope, m2000.degrees)}, start
        with the 2000. It's LiDAR and vision, with no RTK antenna. Move to the 3000 AWD when the bank is why
        you're shopping: that model is {m3000.slope}% and {formatAcres(m3000.acres)}.
      </p>
      <p className="measure">
        Few owner reports exist yet, so we'd treat it as a newer name. Two independent threads are linked
        below. Other posts say MOVA provided the mower, so they aren't ordinary owner reports.
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
      <YardPhoto id="card-mova-lidax" />
      <h2>Key numbers for your yard</h2>
      <KeyNumbers
        rows={[
          {
            label: "Rated area",
            value: formatAcres(m2000.acres),
            detail: (
              <>
                <ComfortableFor rated={m2000.acres} /> The 1000 is {formatAcres(m1000.acres, false)}. The 3000
                AWD is {formatAcres(m3000.acres, false)}.
              </>
            ),
          },
          {
            label: "Max slope",
            value: slopeWithRise(m2000.slope, m2000.degrees),
            detail: `The 3000 AWD publishes ${m3000.slope}%.`,
          },
          {
            label: "Paths",
            value: specText(m2000.specs.passage),
            detail: "The 2000 listing says it handles paths of that width. It isn't a measured body width, so measure the opening yourself.",
          },
          {
            label: "Navigation",
            value: navigationLabel(family.navigation),
            detail: specText(m2000.specs.positioning),
          },
          {
            label: "After year one",
            value: "A yearly GPS fee, amount not repeated here",
            detail: "Wirecutter reports a fee after the first year. 4G on the 3000 AWD is free for 3 years.",
          },
        ]}
      />
      <VariantTable
        family={family}
        pageType="review"
        differences={{
          "LiDAX Ultra 1000": `The smaller yard. Rated ${formatAcres(m1000.acres)}. Slope ${publishedSlope(m1000.slope, m1000.degrees)}. Cut ${specText(m1000.specs.cuttingHeight)}.`,
          "LiDAX Ultra 2000": `The one we'd start with. Rated ${formatAcres(m2000.acres)}. The listing's path figure is ${specText(m2000.specs.passage)}.`,
          "LiDAX Ultra 3000 AWD": `The steep one. Rated ${formatAcres(m3000.acres)}. AWD. Slope ${publishedSlope(m3000.slope, m3000.degrees)}. Cut width ${specText(m3000.specs.cuttingWidth)}.`,
        }}
      />
      <h2>Specs we checked</h2>
      <SpecTable
        caption="LiDAX Ultra 2000, unless a line names another size. Listing titles read on Oct 13, 2026."
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
          },
          {
            label: "3000 AWD slope",
            value: publishedSlope(m3000.slope, m3000.degrees),
            sources: ["mova-3000"],
            checked: SPEC_CHECKED,
            note: "Don't put this percent on the 1000 or the 2000.",
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
            note: "That's a listing bullet, not a body-width measurement.",
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
        Match the mower to the lawn you actually have. A quarter acre lines up with the 1000, rated{" "}
        {formatAcres(m1000.acres)}. A half acre lines up with the 2000, rated {formatAcres(m2000.acres, false)}.{" "}
        <ComfortableFor rated={m2000.acres} /> The 3000 AWD is rated {formatAcres(m3000.acres, false)}, and
        MOVA's US product page notes a dual map of that area times two.{" "}
        <Link href="/best/robot-mower-half-acre">Half-acre picks</Link>.{" "}
        <SourceLine ids={["mova-2000", "mova-3000"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Slope is not shared across the three</h2>
      <p className="measure">
        Slope isn't shared across the three. The 1000 and the 2000 publish {m2000.slope}%. The 3000 AWD
        publishes {m3000.slope}%, a rise of {risePer10Ft(m3000.slope)}. A steep bank is a reason to leave the
        2000, not a reason to assume it climbs like the AWD.{" "}
        <SourceLine ids={["mova-2000", "mova-3000"]} checked={SPEC_CHECKED} />
      </p>
      <SlopeMarginNote />
      <h2>LiDAR, and a path the listing names</h2>
      <p className="measure">
        The 2000 finds its way with LiDAR, and the listing names a path width. It describes 360° 3D LiDAR and
        AI vision, with no wire and no RTK. The same listing says it handles {specText(m2000.specs.passage)}{" "}
        paths. Use that figure in the <Link href="/guides/robot-mower-front-and-back-yard">passage gauge</Link>,
        and measure the opening yourself. <SourceLine ids={["amz-mova-2000"]} checked="2026-10-13" />
      </p>
      <OwnerReports
        intro="In the 2 owner threads we read in October 2026:"
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
      <SupportOutlook brand="MOVA" />
      <p className="measure">
        After year one, Wirecutter reports a yearly GPS fee for the 2000, and the amount stays on that review.
        The 3000 AWD page says 4G is free for 3 years.{" "}
        <SourceLine ids={["wirecutter", "mova-3000"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Two neighbors on the ladder</h2>
      <p className="measure">
        If you want a steeper LiDAR mower, the{" "}
        <Link href="/reviews/dreame-a3-awd-pro">Dreame A3 AWD Pro 2500</Link> is rated {formatAcres(dreame.acres)}{" "}
        and {dreame.slope}%, with a steeper published slope than the Ultra 2000. The{" "}
        <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD 3000</Link> adds network RTK at{" "}
        {formatAcres(luba.acres, false)}.
      </p>
      <Faq
        items={[
          {
            q: "Which LiDAX Ultra is the half-acre mower?",
            a: "The 2000 is rated 0.5 acre. With heavy trees or two zones, that rating is no longer a comfortable fit for a full half acre. The size guide shows how we size.",
          },
          {
            q: "Do I need the 3000 AWD for a hill?",
            a: "If the hill is steep, yes. The 1000 and 2000 publish 45%. The 3000 AWD publishes 80% (38.6°). The hills page labels whether a maker says interior or boundary.",
          },
          {
            q: "Are there many owner reports?",
            a: "Few owner reports exist yet. We link two independent threads and leave out posts that say MOVA provided the mower.",
          },
        ]}
      />
      <ResearchedBox
        sources={sources.map((id) => ({ id }))}
        manuals="No MOVA owner's manual was in the sources we used."
        threads="Two independent owner threads, June 2026 and April 2026. Posts that say MOVA provided the mower stay out of that count."
        questions="No manufacturer has answered questions yet."
        specsLine="Listing titles read on Oct 13, 2026. Brand pages checked Oct 10, 2026."
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
