import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { EndLinks, Faq, Related, ResearchedBox, SourceLine } from "@/components/Blocks";
import { ProductLink } from "@/components/ProductLink";
import { SlopeMarginNote } from "@/components/VoiceBits";
import { pageMeta } from "@/lib/metadata";
import { formatAcres } from "@/lib/format";
import { modelFacts, navigationLabel } from "@/lib/products";
import { publishedSlope, slopeWithRise, specText } from "@/lib/speak";
import { RECHECKED, SPEC_CHECKED } from "@/lib/site";

const title = "Dreame A3 AWD Pro 2500 vs LUBA 3 AWD 3000";
const description =
  "LiDAR on 0.62 acre with no RTK, or LiDAR plus network RTK on 0.75 acre. The differences that change the yard.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/vs/dreame-a3-awd-pro-vs-luba-3-awd",
});

const sources = ["dreame-a3", "amz-dreame-a3-2500", "mammotion-luba3", "mammotion-luba3-sku", "amz-luba3-3000"];

export default function VsPage() {
  const dreame = modelFacts("dreame-a3-awd-pro", "A3 AWD Pro 2500");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");

  const rows = [
    {
      topic: "Rated area",
      d: formatAcres(dreame.acres),
      l: formatAcres(luba.acres),
      better: "LUBA 3. It covers a lawn between 0.62 and 0.75 acre, and at or under 0.62 acre either rating covers the grass.",
    },
    {
      topic: "Slope",
      d: `${slopeWithRise(dreame.slope, dreame.degrees)}. The degree is the published 38.7°.`,
      l: `${slopeWithRise(luba.slope, luba.degrees)}. The degree is the published 38.6°.`,
      better: "Either model. Both publish an 80% maximum.",
    },
    {
      topic: "Trees",
      d: navigationLabel(dreame.family.navigation),
      l: navigationLabel(luba.family.navigation),
      better: "LUBA 3. Both use LiDAR, and only the LUBA adds network RTK. Choose the Dreame if you want no RTK.",
    },
    {
      topic: "Cutting height",
      d: specText(dreame.specs.cuttingHeight),
      l: `${specText(luba.specs.cuttingHeight)} on the standard 3000. The high-cut row is separate and has no confirmed listing.`,
      better: "Dreame. On the rows with a listing, it is the one for grass kept above 2.7 in, and the LUBA standard cut is shorter.",
    },
    {
      topic: "Two yards",
      d: specText(dreame.specs.maps) + " No narrowest gap is published here.",
      l: `Narrowest gap ${specText(luba.specs.narrowestGap)}.`,
      better: "Dreame. It states a dock for each of two maps. A side passage under 27.6 in is not cleared by the LUBA figure, and Dreame does not publish a gap.",
    },
  ];

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/vs/dreame-a3-awd-pro-vs-luba-3-awd"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Head-to-head", path: "/vs" },
        { name: "Dreame 2500 vs LUBA 3000", path: "/vs/dreame-a3-awd-pro-vs-luba-3-awd" },
      ]}
      updated={RECHECKED}
      whatChanged="October 13, 2026: first published."
      disclosure
    >
      <p className="measure">
        Buy the Dreame A3 AWD Pro 2500 for about {formatAcres(dreame.acres, false)} of grass, LiDAR, and no
        RTK. Buy the LUBA 3 AWD 3000 when the lawn is closer to {formatAcres(luba.acres, false)} and you want
        LiDAR with network RTK.
      </p>
      <div data-cta-cluster="true" className="grid gap-2">
        <p className="paid m-0">
          Paid links: <Link href="/affiliate-disclosure">see disclosure</Link>
        </p>
        <div className="flex flex-wrap gap-3">
          <ProductLink
            asin={dreame.variant.asin}
            model="Dreame A3 AWD Pro 2500"
            productSlug={dreame.family.slug}
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
      <YardPhoto id="photo-vs-dreame-luba" />
      <h2>Where they differ</h2>
      <div className="table-scroll">
        <p className="scroll-cue">Swipe sideways to read every column.</p>
        <table className="data">
          <caption>
            Five differences between the Dreame A3 AWD Pro 2500 and the LUBA 3 AWD 3000. Specs checked Oct
            10, 2026.
          </caption>
          <thead>
            <tr>
              <th scope="col">Difference</th>
              <th scope="col">Dreame A3 AWD Pro 2500</th>
              <th scope="col">LUBA 3 AWD 3000</th>
              <th scope="col">Better for</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.topic}>
                <th scope="row">{row.topic}</th>
                <td>{row.d}</td>
                <td>{row.l}</td>
                <td>{row.better}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SlopeMarginNote />
      <h2>Choose the Dreame 2500 if the lawn stays inside its rating</h2>
      <p className="measure">
        The 2500 is rated {formatAcres(dreame.acres)} and {publishedSlope(dreame.slope, dreame.degrees)}.
        Navigation is LiDAR and vision, with no RTK and no perimeter wire. The cut is{" "}
        {specText(dreame.specs.cuttingHeight)}. Two maps each need a charging station. The longer write-up
        is the <Link href="/reviews/dreame-a3-awd-pro">Dreame A3 AWD Pro review</Link>.{" "}
        <SourceLine ids={["dreame-a3"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Choose the LUBA 3000 if you want network RTK with the LiDAR</h2>
      <p className="measure">
        The 3000 is rated {formatAcres(luba.acres, false)} and {luba.slope}%. It adds
        network RTK to LiDAR and vision. The standard cut is {specText(luba.specs.cuttingHeight)}. The
        narrowest published gap is {specText(luba.specs.narrowestGap)}. Zone counts disagree across
        Mammotion pages, and that conflict stays in the{" "}
        <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD review</Link>.{" "}
        <SourceLine ids={["mammotion-luba3"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Slope, labelled only as far as the makers go</h2>
      <p className="measure">
        Dreame: {dreame.slope}%. LUBA 3000: {luba.slope}%. The 38.7° belongs to the Dreame 2500. The 38.6°
        belongs to the LUBA 3000. Neither number is copied onto the other sizes in the
        family. <Link href="/best/robot-mower-for-hills">The hills page converts a measured bank.</Link>
      </p>
      <Faq
        items={[
          {
            q: "Which one for a half acre under trees?",
            a: (
              <>
                Both use LiDAR. The Dreame 2500 is rated 0.62 acre. The LUBA 3000 is rated 0.75 acre. A half
                acre with trees or two zones needs a rating of at least 0.625 acre. That sits just over the
                Dreame rating and under the LUBA rating.{" "}
                <Link href="/guides/how-big-a-robot-mower-do-i-need">how we size</Link>.
              </>
            ),
          },
          {
            q: "Which one climbs more?",
            a: "Both publish 80%. The Dreame degree is 38.7°. The LUBA degree is 38.6°.",
          },
          {
            q: "Which one cuts taller grass?",
            a: "On the rows with a confirmed listing, the Dreame cut is 1.2–3.9 in and the LUBA standard cut is 1.0–2.7 in. The LUBA high-cut row is separate and has no confirmed listing.",
          },
        ]}
      />
      <ResearchedBox
        scope="group"
        sources={sources.map((id) => ({ id }))}
        manuals="No owner's manual was in the source list for this page."
        threads="Owner threads are on the two reviews, read in October 2026."
        questions="No manufacturer questions have been answered yet."
      />
      <h2>See both models</h2>
      <EndLinks
        pageType="vs"
        links={[
          { asin: dreame.variant.asin, model: "Dreame A3 AWD Pro 2500", productSlug: dreame.family.slug },
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
          { href: "/reviews/dreame-a3-awd-pro", label: "Dreame A3 AWD Pro review" },
          { href: "/reviews/mammotion-luba-3-awd", label: "LUBA 3 AWD review" },
          { href: "/best/robot-mower-half-acre", label: "Which robot mower for a half acre?" },
          { href: "/best/robot-mower-under-trees", label: "Which robot mower under trees?" },
          { href: "/vs/navimow-x430-vs-luba-3-awd-3000", label: "Navimow X430 vs LUBA 3 AWD 3000" },
          { href: "/guides/robot-mower-front-and-back-yard", label: "Front yard and back yard" },
        ]}
      />
    </ArticleFrame>
  );
}
