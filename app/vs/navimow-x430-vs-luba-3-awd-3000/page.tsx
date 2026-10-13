import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { EndLinks, Faq, Related, ResearchedBox, SourceLine } from "@/components/Blocks";
import { ProductLink } from "@/components/ProductLink";
import { pageMeta } from "@/lib/metadata";
import { formatAcres } from "@/lib/format";
import { modelFacts, navigationLabel } from "@/lib/products";
import { interiorOrBoundary, publishedSlope, slopeWithRise, specText } from "@/lib/speak";
import { RECHECKED, SPEC_CHECKED } from "@/lib/site";

const title = "Navimow X430 vs LUBA 3 AWD 3000";
const description =
  "An open acre with network RTK, or three-quarters of an acre with LiDAR. The differences that change the yard.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/vs/navimow-x430-vs-luba-3-awd-3000",
});

const sources = ["navimow-x4", "homedepot-x430", "amz-x430", "mammotion-luba3", "mammotion-luba3-sku", "amz-luba3-3000"];

export default function VsPage() {
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");

  const rows = [
    {
      topic: "Rated area",
      x: formatAcres(x430.acres),
      l: formatAcres(luba.acres),
      better: "An open acre: X430. About 0.75 acre: either, and the LUBA is the one rated for that size under trees.",
    },
    {
      topic: "Slope",
      x: `${slopeWithRise(x430.slope, x430.degrees)}. ${interiorOrBoundary()}`,
      l: `${slopeWithRise(luba.slope, luba.degrees)}. ${interiorOrBoundary()} The degree is the published 38.6°.`,
      better: "A bank between 80% and 84%: X430. At 80% or under, both publish a maximum that covers it.",
    },
    {
      topic: "Trees",
      x: navigationLabel(x430.family.navigation),
      l: navigationLabel(luba.family.navigation),
      better: "Canopy over the path: LUBA, because LiDAR is on this model. Open sky: X430.",
    },
    {
      topic: "Side passage",
      x: `Body width ${specText(x430.specs.bodyWidth)}.`,
      l: `Narrowest gap ${specText(luba.specs.narrowestGap)}.`,
      better: "A gap between 24 in and 27.6 in: X430. Under 24 in: neither published figure clears it.",
    },
    {
      topic: "After the free period",
      x: "Connect+ is free for 1 year on the X430, then a yearly fee. Network RTK is described as free for life, depending on Segway’s cloud.",
      l: "Built-in 4G includes 3 years of data, then a subscription. The price is not stated. NetRTK is described as free for life, depending on Mammotion’s cloud.",
      better: "A buyer who wants the longer included data window in these two write-ups: LUBA. A buyer who accepts a fee after one year: X430.",
    },
  ];

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/vs/navimow-x430-vs-luba-3-awd-3000"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Head-to-head", path: "/vs" },
        { name: "X430 vs LUBA 3000", path: "/vs/navimow-x430-vs-luba-3-awd-3000" },
      ]}
      updated={RECHECKED}
      whatChanged="October 13, 2026: first published."
      disclosure
    >
      <p className="measure">
        Buy the X430 for an open acre and banks up to {publishedSlope(x430.slope, x430.degrees)}. Buy the
        LUBA 3 AWD 3000 when trees cover a lawn rated around {formatAcres(luba.acres, false)} and you want
        LiDAR with network RTK. Neither sentence is a score. We have not tested these mowers.
      </p>
      <h2>Where they differ</h2>
      <div className="table-scroll" data-cta-cluster="true">
        <p className="scroll-cue">Swipe sideways to read every column.</p>
        <table className="data">
          <caption>Five differences between the Navimow X430 and the LUBA 3 AWD 3000. Specs checked Oct 10, 2026.</caption>
          <thead>
            <tr>
              <th scope="col">Difference</th>
              <th scope="col">Navimow X430</th>
              <th scope="col">LUBA 3 AWD 3000</th>
              <th scope="col">Better for</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.topic}>
                <th scope="row">{row.topic}</th>
                <td>{row.x}</td>
                <td>{row.l}</td>
                <td>{row.better}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-wrap gap-3 px-3 py-3">
          <p className="paid m-0 w-full">
            Paid links: <Link href="/affiliate-disclosure">see disclosure</Link>
          </p>
          <ProductLink
            asin={x430.variant.asin}
            model="Navimow X430"
            productSlug={x430.family.slug}
            placement="vs_top"
            pageType="vs"
          />
          <ProductLink
            asin={luba.variant.asin}
            model="LUBA 3 AWD 3000"
            productSlug={luba.family.slug}
            placement="vs_top"
            pageType="vs"
          />
        </div>
      </div>
      <h2>An open acre against a wooded three-quarter acre</h2>
      <p className="measure">
        The X430 rating is {formatAcres(x430.acres)}. The LUBA 3000 rating is {formatAcres(luba.acres)}. A
        full acre is outside the LUBA 3000 rating. A wooded path is the reason the LUBA page adds LiDAR to
        network RTK, and the reason the X430 page still warns that canopy can drop a satellite fix.{" "}
        <SourceLine ids={["navimow-x4", "mammotion-luba3"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Slope, labelled only as far as the makers go</h2>
      <p className="measure">
        X430: {slopeWithRise(x430.slope, x430.degrees)}. LUBA 3000: {slopeWithRise(luba.slope, luba.degrees)}.
        {interiorOrBoundary()} The 38.6° figure belongs to the LUBA 3000. It is not the computed degree for
        80%, and it is not copied onto the LUBA 1500 or 5000.{" "}
        <Link href="/best/robot-mower-for-hills">The hills page converts a measured bank.</Link>
      </p>
      <h2>What each review holds back</h2>
      <p className="measure">
        The X430 body is {specText(x430.specs.bodyWidth)} and the cut is {specText(x430.specs.cuttingHeight)}.
        Connect+ is a yearly fee after the free year. The longer write-up is the{" "}
        <Link href="/reviews/segway-navimow-x4">Navimow X4 review</Link>.
      </p>
      <p className="measure">
        The LUBA standard cut is {specText(luba.specs.cuttingHeight)}. The high-cut row is separate and has
        no confirmed listing. Zone counts and the battery line disagree across Mammotion pages. Those
        conflicts stay in the <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD review</Link>.
      </p>
      <Faq
        items={[
          {
            q: "Which one for a flat open acre?",
            a: "The X430. It is rated 1 acre. The LUBA 3000 is rated 0.75 acre.",
          },
          {
            q: "Which one under trees?",
            a: "The LUBA 3000, if the grass is inside 0.75 acre. It adds LiDAR. The X430 is network RTK, vision, and a time-of-flight sensor, and canopy can still drop the fix.",
          },
          {
            q: "Do both climb 80%?",
            a: "Both publish a maximum of at least 80%. The X430 publishes 84% (40°). The LUBA 3000 publishes 80% (38.6°). Neither maker says whether that maximum is the interior or only the boundary.",
          },
        ]}
      />
      <ResearchedBox
        scope="group"
        sources={sources.map((id) => ({ id }))}
        manuals="No owner's manual was in the source list for this page."
        threads="Owner threads are on the two reviews, read for the October 10, 2026 check."
        questions="No manufacturer questions have been answered yet."
      />
      <h2>See both models</h2>
      <EndLinks
        pageType="vs"
        links={[
          { asin: x430.variant.asin, model: "Navimow X430", productSlug: x430.family.slug },
          { asin: luba.variant.asin, model: "LUBA 3 AWD 3000", productSlug: luba.family.slug },
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
          { href: "/reviews/segway-navimow-x4", label: "Navimow X4 review" },
          { href: "/reviews/mammotion-luba-3-awd", label: "LUBA 3 AWD review" },
          { href: "/best", label: "Best robot lawn mowers for US yards" },
          { href: "/best/robot-mower-1-acre", label: "Which robot mower for about 1 acre?" },
          { href: "/guides/rtk-vs-lidar-vs-vision", label: "RTK, LiDAR, or vision" },
        ]}
      />
    </ArticleFrame>
  );
}
