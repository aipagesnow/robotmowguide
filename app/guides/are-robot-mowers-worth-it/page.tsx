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
        A robot mower is worth considering when the lawn sits inside a current model’s rated area and slope,
        the published cut reaches the height you keep, and you still plan to trim the edges. It is a poor buy
        for the yards in the list below. Lawn-service prices vary too much by area to give a payback date.
        Compare a year of your own service bills with the mower's cost-to-own figure.
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
        Take an open acre with banks inside {publishedSlope(x430.slope, x430.degrees)}. The Navimow X430 is
        rated {formatAcres(x430.acres)} and cuts {specText(x430.specs.cuttingHeight)}.{" "}
        <ComfortableFor rated={x430.acres} /> The longer write-up is the{" "}
        <Link href="/reviews/segway-navimow-x4">Navimow X4 review</Link>.
      </p>
      <SlopeMarginNote />
      <p className="measure">
        Take a smaller lawn under trees. The LUBA 3 AWD 3000 is rated {formatAcres(luba.acres, false)} and adds
        LiDAR to network RTK. The standard cut is {specText(luba.specs.cuttingHeight)}, which is short of a
        4 inch St. Augustine lawn. <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD review</Link>.{" "}
        <Link href="/best/robot-mower-under-trees">Which robot mower under trees?</Link>
      </p>
      <h2>Who should not buy one yet</h2>
      <ul className="grid gap-3 pl-5">
        <li>Sandy soil, or a lawn that stays wet. Heavy machines rut soft ground and get stuck.</li>
        <li>
          Heavy canopy over most of the lawn, unless the model is LiDAR or vision-led and you accept some
          hand mowing. <Link href="/best/robot-mower-under-trees">The under-trees page</Link> is the comparison.
        </li>
        <li>
          Steep banks past every model’s boundary figure. A rise of 4 ft over 10 ft is 40%.{" "}
          <Link href="/best/robot-mower-for-hills">Convert your bank</Link> before you treat a headline slope
          as the edge.
        </li>
        <li>
          An unfenced front yard on a busy street, if theft is a real worry.{" "}
          <Link href="/guides/robot-mower-theft-protection">What the listings actually say about theft</Link>.
        </li>
        <li>
          A lawn kept taller or shorter than the model’s published cut. Standard St. Augustine is often kept
          at 3.5–4 inches. A Texas Bermuda home lawn is often kept near 1–2 inches.{" "}
          <Link href="/best/robot-mower-st-augustine">St. Augustine heights</Link> and{" "}
          <Link href="/best/robot-mower-bermuda">Bermuda heights</Link>.
        </li>
        <li>Anyone who expects zero string trimming. Edges, beds, and fence lines still need a trimmer.</li>
      </ul>
      <h2>What we can and can't tell you</h2>
      <p className="measure">
        Owner threads mention hours saved. That is not a dollar payback, and it is not a count of all owners.
        Subscription fees that are published live on the{" "}
        <Link href="/guides/robot-mower-cost-to-own">cost-to-own guide</Link>. Where a maker does not state a
        price, that guide says Not published.
      </p>
      <p className="measure">
        The <Link href="/tools/mower-finder">finder</Link> leaves a model off the list when the rated area or
        the slope does not clear the yard. A missing row there is a reason to wait, not a reason to stretch
        a rating.
      </p>
      <Faq
        items={[
          {
            q: "Will it replace a lawn service?",
            a: "Lawn-service prices vary too much by area to give a payback date. Compare a year of your own service bills with the mower's cost-to-own figure.",
          },
          {
            q: "Do I still trim by hand?",
            a: "Yes. None of these pages treats a robot mower as a replacement for string trimming along edges and beds.",
          },
          {
            q: "What if the lawn is split by the house?",
            a: (
              <>
                For two zones, follow <Link href="/guides/how-big-a-robot-mower-do-i-need">how we size</Link>,
                then check the side passage. The front-and-back guide is the walkthrough.
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
