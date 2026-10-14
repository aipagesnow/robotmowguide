import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { CtaCluster, Faq, Related } from "@/components/Blocks";
import { ProductLink } from "@/components/ProductLink";
import { ComfortableFor, SlopeMarginNote } from "@/components/VoiceBits";
import { pageMeta } from "@/lib/metadata";
import { formatAcres } from "@/lib/format";
import { modelFacts } from "@/lib/products";
import { publishedSlope, specText } from "@/lib/speak";
import { RECHECKED } from "@/lib/site";

const title = "Are robot mowers worth it?";
const description =
  "When a current robot mower fits a US lawn, and who should wait. No payback math without a sourced local price.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/guides/are-robot-mowers-worth-it",
});

export default function WorthItPage() {
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/guides/are-robot-mowers-worth-it"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
        { name: "Are they worth it?", path: "/guides/are-robot-mowers-worth-it" },
      ]}
      updated={RECHECKED}
      whatChanged="October 13, 2026: first published, including who should not buy one yet."
      disclosure
    >
      <p className="measure">
        Yes, if your lawn sits inside a current model's rated area and slope,
        the published cut reaches the height you keep, and you'll still trim the edges. It's a poor buy
        for the yards in the list below. Lawn-service prices vary too much by town to name a payback date.
        We'd compare a year of your own service bills with the mower's cost-to-own figure.
      </p>
      <CtaCluster>
        <ProductLink
          asin={x430.variant.asin}
          model="Navimow X430"
          productSlug={x430.family.slug}
          placement="inline"
          pageType="guide"
        />
      </CtaCluster>
      <YardPhoto id="photo-worth-it" />
      <h2>A yard that can use one</h2>
      <p className="measure">
        If you've got an open acre and the banks go up to {publishedSlope(x430.slope, x430.degrees)}, we'd start with the Navimow X430. It's
        rated {formatAcres(x430.acres)} and the cut is {specText(x430.specs.cuttingHeight)}.{" "}
        <ComfortableFor rated={x430.acres} /> The longer write-up is the{" "}
        <Link href="/reviews/segway-navimow-x4">Navimow X4 review</Link>.
      </p>
      <SlopeMarginNote />
      <p className="measure">
        If your lawn is smaller and sits under trees, we'd look at the LUBA 3 AWD 3000. It's rated {formatAcres(luba.acres, false)} and it adds
        LiDAR on top of network RTK. The standard cut is {specText(luba.specs.cuttingHeight)}, which is short of a
        4 inch St. Augustine lawn, so if you keep it that tall, this cut won't reach it. <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD review</Link>.{" "}
        <Link href="/best/robot-mower-under-trees">Which robot mower under trees?</Link>
      </p>
      <h2>Who should not buy one yet</h2>
      <ul className="grid gap-3 pl-5">
        <li>Sandy soil, or a lawn that stays wet. Heavy machines rut soft ground and get stuck, so we'd wait.</li>
        <li>
          Heavy canopy over most of your lawn, unless the model is LiDAR or vision-led and you're fine with some
          hand mowing. <Link href="/best/robot-mower-under-trees">The under-trees page</Link> is the comparison.
        </li>
        <li>
          Steep banks past every model's boundary figure. A rise of 4 ft over 10 ft is 40%.{" "}
          <Link href="/best/robot-mower-for-hills">Convert your bank</Link> before you treat a headline slope
          as the edge of your lawn.
        </li>
        <li>
          An unfenced front yard on a busy street, if theft is a real worry for you.{" "}
          <Link href="/guides/robot-mower-theft-protection">What the listings actually say about theft</Link>.
        </li>
        <li>
          A lawn you keep taller or shorter than the model's published cut. Standard St. Augustine is often kept
          at 3.5–4 inches. A Texas Bermuda home lawn is often kept near 1–2 inches.{" "}
          <Link href="/best/robot-mower-st-augustine">St. Augustine heights</Link> and{" "}
          <Link href="/best/robot-mower-bermuda">Bermuda heights</Link>.
        </li>
        <li>Honestly, if you expect zero string trimming, we'd say not yet. Edges, beds, and fence lines still need a trimmer.</li>
      </ul>
      <h2>What we can and can't tell you</h2>
      <p className="measure">
        We can say whether the specs fit your yard, and we can't name a dollar payback. Owner threads mention hours saved, but that's not a dollar figure, and it's not a count of every owner.
        Published subscription fees live on the{" "}
        <Link href="/guides/robot-mower-cost-to-own">cost-to-own guide</Link>. Where a maker doesn't state a
        price, that guide says Not published.
      </p>
      <p className="measure">
        The <Link href="/tools/mower-finder">finder</Link> skips a model when the rated area or
        the slope doesn't clear your yard. If a model isn't listed, that's a reason to wait, not a reason to stretch
        a rating.
      </p>
      <Faq
        items={[
          {
            q: "Will it replace a lawn service?",
            a: "We can't name a payback date, because lawn-service prices vary too much by town. We'd compare a year of your own bills with the mower's cost-to-own figure.",
          },
          {
            q: "Do I still trim by hand?",
            a: "Yes. You'd still trim by hand along the edges and the beds. A robot mower doesn't replace a string trimmer.",
          },
          {
            q: "What if the lawn is split by the house?",
            a: (
              <>
                If the house splits your lawn, follow <Link href="/guides/how-big-a-robot-mower-do-i-need">how we size</Link>,
                then measure the side passage. The front-and-back guide walks you through it.
              </>
            ),
          },
        ]}
      />
      <Related
        links={[
          { href: "/guides/how-big-a-robot-mower-do-i-need", label: "How big a robot mower do I need?" },
          { href: "/guides/robot-mower-cost-to-own", label: "What does a robot mower cost to own?" },
          { href: "/guides/robot-mower-front-and-back-yard", label: "Front yard and back yard" },
          { href: "/best", label: "Best robot lawn mowers for US yards" },
          { href: "/reviews/segway-navimow-x4", label: "Navimow X4 review" },
        ]}
      />
    </ArticleFrame>
  );
}
