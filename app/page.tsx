import type { Metadata } from "next";
import Link from "next/link";
import { Ladder } from "@/components/Ladder";
import { MetaRow } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import {
  AcreSquares,
  YardAcre,
  YardFlorida,
  YardHalf,
  YardHillside,
  YardQuarter,
  YardWooded,
} from "@/components/Diagrams";
import { articleSchema, homeSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/metadata";
import { degreesFromPercent, formatAcres, formatDegrees } from "@/lib/format";
import { modelFacts } from "@/lib/products";
import { publishedSlope, specText } from "@/lib/speak";
import { PUBLISHED } from "@/lib/site";

const title = "Robot mowers ranked by lawn size and slope";
const description =
  "A US guide to robot lawn mowers, ranked by the lawn size and slope each model is rated for.";

export const metadata: Metadata = pageMeta({ title, description, path: "/", type: "website" });

export default function HomePage() {
  const i210 = modelFacts("segway-navimow-i2-awd", "Navimow i210 AWD");
  const dreame = modelFacts("dreame-a3-awd-pro", "A3 AWD Pro 2500");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");
  const worx = modelFacts("worx-landroid-vision-cloud", "Landroid Vision Cloud WR340 (1 acre, 2WD)");
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");
  const bank = degreesFromPercent(40);

  return (
    <article className="wrap py-8">
      <JsonLd data={homeSchema()} />
      <JsonLd
        data={articleSchema({
          title,
          description,
          path: "/",
          published: PUBLISHED,
          modified: PUBLISHED,
        })}
      />
      <h1>{title}</h1>
      <MetaRow updated={PUBLISHED} whatChanged="October 2026: first published." />
      <p className="measure">
        Start with the lawn, not the brand. These rankings use the area each current model is rated for, then
        the steepest slope the maker publishes. Specs were checked on Oct 10, 2026. The reviews are
        research-based. We have not tested these mowers.
      </p>
      <section className="blueprint mt-6 px-4 py-6" aria-label="How the ranking is drawn">
        <p className="m-0 text-white">
          Each model sits on a scale from 0 to 2 acres. The number beside it is the published maximum slope. A
          numbered tag marks one of the five picks.
        </p>
      </section>
      <Ladder />
      <section>
        <h2>Six example yards</h2>
        <p className="measure">
          These plans are examples, not surveys. The acre math is exact: one acre is 43,560 sq ft. Links go to
          a live guide, a review, or a pick on the best-mowers page.
        </p>
        <h3>A flat quarter acre</h3>
        <YardQuarter />
        <p className="measure">
          A lot 90 ft by 121 ft is {formatAcres(0.25)}. The Navimow i210 AWD is rated{" "}
          {formatAcres(i210.acres)} and {publishedSlope(i210.slope, i210.degrees)}.{" "}
          <Link href="/best#navimow-i210">See that pick</Link>.{" "}
          <Link href="/guides/how-big-a-robot-mower-do-i-need">How big a robot mower do I need?</Link>
        </p>
        <h3>A half acre with a side passage</h3>
        <YardHalf />
        <p className="measure">
          A lot 132 ft by 165 ft is {formatAcres(0.5)}. The example passage is 3 ft, which is 36 in. The Dreame
          A3 AWD Pro 2500 is rated {formatAcres(dreame.acres)} and{" "}
          {publishedSlope(dreame.slope, dreame.degrees)}. A published body width was not on the sheet we
          checked, so this page does not claim the mower fits that gap.{" "}
          <Link href="/best#dreame-a3-2500">See that pick</Link>.
        </p>
        <h3>An open acre</h3>
        <YardAcre />
        <p className="measure">
          A lot 180 ft by 242 ft is {formatAcres(1)}. The Navimow X430 is rated {formatAcres(x430.acres)} and{" "}
          {publishedSlope(x430.slope, x430.degrees)}.{" "}
          <Link href="/reviews/segway-navimow-x4">Read the Navimow X4 review</Link>.
        </p>
        <h3>A wooded lawn</h3>
        <YardWooded />
        <p className="measure">
          The shaded circles cover about one third of the example lawn. Canopy is where a satellite fix often
          weakens. The LUBA 3 AWD 3000 is rated {formatAcres(luba.acres)} and adds LiDAR to network RTK.{" "}
          <Link href="/reviews/mammotion-luba-3-awd">Read the LUBA 3 AWD review</Link>.{" "}
          <Link href="/guides/rtk-vs-lidar-vs-vision">RTK, LiDAR, or vision</Link>.
        </p>
        <h3>A hillside bank</h3>
        <YardHillside />
        <p className="measure">
          The example bank rises 4 ft over 10 ft. That is 40%, or {formatDegrees(bank)}, computed from the
          percent. It is not a product rating. Published slopes for the picks: Worx Landroid Vision Cloud
          WR340 {publishedSlope(worx.slope, worx.degrees)}, Dreame A3 AWD Pro 2500{" "}
          {publishedSlope(dreame.slope, dreame.degrees)}, LUBA 3 AWD 3000{" "}
          {publishedSlope(luba.slope, luba.degrees)}, Navimow X430 {publishedSlope(x430.slope, x430.degrees)}.
        </p>
        <h3>A Florida yard</h3>
        <YardFlorida />
        <p className="measure">
          The plan shows a screened pool cage, two palms, and a St. Augustine lawn. St. Augustine is often
          kept tall, so cutting height matters. The Navimow X430 listing gives {specText(x430.specs.cuttingHeight)}. The LUBA 3 AWD 3000 listing
          gives {specText(luba.specs.cuttingHeight)}, and the high-cut variants are a separate row in the{" "}
          <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD review</Link>.
        </p>
        <AcreSquares />
        <p className="measure">
          The squares compare 0.125, 0.25, 0.5, 0.75, and 1 acre. In the worked example, a quarter-acre lot of
          10,890 sq ft minus a 1,200 sq ft house, a 600 sq ft drive, and 400 sq ft of beds leaves about 8,690
          sq ft of lawn. <Link href="/guides/how-big-a-robot-mower-do-i-need">The size guide walks through that math.</Link>
        </p>
      </section>
      <section>
        <h2>Guides</h2>
        <ul className="grid gap-3 pl-5">
          <li>
            <Link href="/guides/how-big-a-robot-mower-do-i-need">How big a robot mower do I need?</Link>
          </li>
          <li>
            <Link href="/guides/rtk-vs-lidar-vs-vision">RTK, LiDAR, or vision: which navigation fits your yard</Link>
          </li>
        </ul>
      </section>
      <section>
        <h2>Reviews</h2>
        <ul className="grid gap-3 pl-5">
          <li>
            <Link href="/reviews/segway-navimow-x4">Navimow X4 series review: an open acre with steep slopes</Link>
          </li>
          <li>
            <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD review: three-quarters of an acre under trees</Link>
          </li>
        </ul>
        <p className="measure">
          The other three picks are on <Link href="/best">the best-mowers page</Link> until a family review is
          published.
        </p>
      </section>
    </article>
  );
}
