import type { Metadata } from "next";
import Link from "next/link";
import { Disclosure, MetaRow, QuickPick } from "@/components/Blocks";
import { FinderEmbed } from "@/components/FinderEmbed";
import { Ladder } from "@/components/Ladder";
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
    <article>
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
      <div className="hero-band">
        <div className="wrap py-8">
          <h1>{title}</h1>
          <MetaRow
            updated={PUBLISHED}
            whatChanged="October 13, 2026: linked the new family reviews, the winter guide, and the front-and-back guide."
          />
          <p className="measure">
            Start with the lawn, not the brand. These rankings use the area each current model is rated for,
            then the steepest slope the maker publishes. Specs were checked on Oct 10, 2026. The reviews are
            research-based. We have not tested these mowers.
          </p>
          <Disclosure />
          <QuickPick
            pageType="home"
            items={[
              {
                yard: `Up to ${formatAcres(i210.acres, false)}, banks to ${publishedSlope(i210.slope, i210.degrees)}`,
                model: "Navimow i210 AWD",
                href: "/best#navimow-i210",
                asin: i210.variant.asin,
                productSlug: i210.family.slug,
              },
              {
                yard: `About ${formatAcres(dreame.acres, false)}, trees and steep banks`,
                model: "Dreame A3 AWD Pro 2500",
                href: "/reviews/dreame-a3-awd-pro",
                asin: dreame.variant.asin,
                productSlug: dreame.family.slug,
              },
              {
                yard: `About ${formatAcres(luba.acres, false)} under trees`,
                model: "LUBA 3 AWD 3000",
                href: "/reviews/mammotion-luba-3-awd",
                asin: luba.variant.asin,
                productSlug: luba.family.slug,
              },
              {
                yard: `An open acre, banks to ${publishedSlope(worx.slope, worx.degrees)}`,
                model: "Worx Landroid Vision Cloud WR340",
                href: "/reviews/worx-landroid-vision-cloud",
                asin: worx.variant.asin,
                productSlug: worx.family.slug,
              },
              {
                yard: `An open acre, banks to ${publishedSlope(x430.slope, x430.degrees)}`,
                model: "Navimow X430",
                href: "/reviews/segway-navimow-x4",
                asin: x430.variant.asin,
                productSlug: x430.family.slug,
              },
            ]}
          />
        </div>
      </div>
      <div className="wrap pb-10">
        <FinderEmbed />
        <Ladder />
        <section>
          <h2>Six yard sizes</h2>
          <p className="measure">
            One acre is 43,560 sq ft. Links go to a live guide, a review, or a pick on the best-mowers page.
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
            A lot 132 ft by 165 ft is {formatAcres(0.5)}. A 3 ft side opening is 36 in. The Dreame A3 AWD Pro
            2500 is rated {formatAcres(dreame.acres)} and {publishedSlope(dreame.slope, dreame.degrees)}. A
            published body width was not on the sheet we checked, so a 36 in opening is not cleared for that
            mower here.{" "}
            <Link href="/reviews/dreame-a3-awd-pro">Read the Dreame A3 AWD Pro review</Link>.
          </p>
          <h3>An open acre</h3>
          <YardAcre />
          <p className="measure">
            A lot 180 ft by 242 ft is {formatAcres(1)}. The Navimow X430 is rated {formatAcres(x430.acres)}{" "}
            and {publishedSlope(x430.slope, x430.degrees)}.{" "}
            <Link href="/reviews/segway-navimow-x4">Read the Navimow X4 review</Link>.{" "}
            <Link href="/best/robot-mower-1-acre">Which robot mower for about 1 acre?</Link>
          </p>
          <h3>A wooded lawn</h3>
          <YardWooded />
          <p className="measure">
            When trees cover about a third of the lawn, canopy is where a satellite fix often weakens. The
            LUBA 3 AWD 3000 is rated {formatAcres(luba.acres)} and adds LiDAR to network
            RTK. <Link href="/reviews/mammotion-luba-3-awd">Read the LUBA 3 AWD review</Link>.{" "}
            <Link href="/guides/rtk-vs-lidar-vs-vision">RTK, LiDAR, or vision</Link>.
          </p>
          <h3>A hillside bank</h3>
          <YardHillside />
          <p className="measure">
            A bank that rises 4 ft over 10 ft is 40%, or {formatDegrees(bank)}, computed from the percent. It
            is not a product rating. Published slopes for the picks: Worx Landroid Vision Cloud
            WR340 {publishedSlope(worx.slope, worx.degrees)}, Dreame A3 AWD Pro 2500{" "}
            {publishedSlope(dreame.slope, dreame.degrees)}, LUBA 3 AWD 3000{" "}
            {publishedSlope(luba.slope, luba.degrees)}, Navimow X430 {publishedSlope(x430.slope, x430.degrees)}.{" "}
            <Link href="/best/robot-mower-for-hills">Convert a slope and compare current models</Link>.
          </p>
          <h3>A Florida yard</h3>
          <YardFlorida />
          <p className="measure">
            A Florida yard often has a screened pool cage, palms, and a St. Augustine lawn. St. Augustine is often
            kept tall, so cutting height matters. The Navimow X430 listing gives{" "}
            {specText(x430.specs.cuttingHeight)}. The LUBA 3 AWD 3000 listing gives{" "}
            {specText(luba.specs.cuttingHeight)}, and the high-cut variants are a separate row in the{" "}
            <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD review</Link>.
          </p>
          <AcreSquares />
          <p className="measure">
            Sizes run from 0.125 acre to 1 acre. In the worked example, a quarter-acre lot
            of 10,890 sq ft minus a 1,200 sq ft house, a 600 sq ft drive, and 400 sq ft of beds leaves about
            8,690 sq ft of lawn.{" "}
            <Link href="/guides/how-big-a-robot-mower-do-i-need">The size guide walks through that math.</Link>
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
            <li>
              <Link href="/guides/fcc-robot-mower-ban">Are robot mowers banned in the US? The 2026 FCC rule, tracked</Link>
            </li>
            <li>
              <Link href="/guides/robot-mower-winter-storage">How do I store a robot mower for winter?</Link>
            </li>
            <li>
              <Link href="/guides/robot-mower-front-and-back-yard">Can one robot mower do the front yard and the back yard?</Link>
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
            <li>
              <Link href="/reviews/worx-landroid-vision-cloud">Worx Landroid Vision Cloud review: an open acre on vision</Link>
            </li>
            <li>
              <Link href="/reviews/dreame-a3-awd-pro">Dreame A3 AWD Pro review: LiDAR on a steep half acre</Link>
            </li>
            <li>
              <Link href="/reviews/segway-navimow-i-series">Navimow i series review: a quarter acre, with the i1 models as the previous generation</Link>
            </li>
            <li>
              <Link href="/reviews/mammotion-luba-mini-2-awd">LUBA mini 2 AWD review: a small yard and a high cut</Link>
            </li>
            <li>
              <Link href="/reviews/mova-lidax-ultra">MOVA LiDAX Ultra review: LiDAR from a quarter acre to three-quarters</Link>
            </li>
            <li>
              <Link href="/reviews/roborock-rockneo-q110h">RockNeo Q110H review: a quarter acre on RTK</Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
