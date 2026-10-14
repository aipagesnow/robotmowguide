import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Disclosure, MetaRow, QuickPick } from "@/components/Blocks";
import { FinderEmbed } from "@/components/FinderEmbed";
import { getSlot, slotVisible } from "@/lib/images";
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
import { formatAcres, formatDate } from "@/lib/format";
import { modelFacts } from "@/lib/products";
import { publishedSlope, specText } from "@/lib/speak";
import { PUBLISHED } from "@/lib/site";

const title = "Robot mowers ranked by lawn size and slope";
const description =
  "A US guide to robot lawn mowers, ranked by the lawn size and slope each model is rated for.";

export const metadata: Metadata = pageMeta({ title, description, path: "/", type: "website" });

function HomeHeroPhoto() {
  if (!slotVisible("hero-home")) return null;
  const slot = getSlot("hero-home");
  if (!slot?.alt) return null;
  return (
    <div className="home-hero-media">
      <Image
        src="/images/hero-home-2400.webp"
        alt={slot.alt}
        fill
        priority
        sizes="100vw"
      />
    </div>
  );
}

export default function HomePage() {
  const i210 = modelFacts("segway-navimow-i2-awd", "Navimow i210 AWD");
  const dreame = modelFacts("dreame-a3-awd-pro", "A3 AWD Pro 2500");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");
  const worx = modelFacts("worx-landroid-vision-cloud", "Landroid Vision Cloud WR340 (1 acre, 2WD)");
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");

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
      <section className="home-hero">
        <HomeHeroPhoto />
        <div className="home-hero-scrim" aria-hidden="true" />
        <div className="home-hero-fade" aria-hidden="true" />
        <div className="wrap">
          <div className="home-hero-copy">
            <h1>{title}</h1>
            <p className="home-meta-short">
              By the RobotMowGuide editors · Updated {formatDate(PUBLISHED)} ·{" "}
              <Link href="/how-picks-are-chosen">How picks are chosen</Link>
            </p>
            <MetaRow updated={PUBLISHED} />
            <p className="measure">
              Forget the brand for a minute and think about your lawn. We've lined these mowers up by how much
              grass they're rated for, then by how steep a slope they can climb. Find your yard, and you've found
              your shortlist.
            </p>
          </div>
        </div>
      </section>
      <div className="wrap pb-10">
        <Disclosure />
        <QuickPick
          pageType="home"
          items={[
              {
                yard: `Your lawn up to ${formatAcres(i210.acres, false)}, banks to ${publishedSlope(i210.slope, i210.degrees)}`,
                model: "Navimow i210 AWD",
                href: "/best#navimow-i210",
                asin: i210.variant.asin,
                productSlug: i210.family.slug,
              },
              {
                yard: `About ${formatAcres(dreame.acres, false)}, if you've got trees and steep banks`,
                model: "Dreame A3 AWD Pro 2500",
                href: "/reviews/dreame-a3-awd-pro",
                asin: dreame.variant.asin,
                productSlug: dreame.family.slug,
              },
              {
                yard: `About ${formatAcres(luba.acres, false)}, if you mow under trees`,
                model: "LUBA 3 AWD 3000",
                href: "/reviews/mammotion-luba-3-awd",
                asin: luba.variant.asin,
                productSlug: luba.family.slug,
              },
              {
                yard: `Your open acre, banks to ${publishedSlope(worx.slope, worx.degrees)}`,
                model: "Worx Landroid Vision Cloud WR340",
                href: "/reviews/worx-landroid-vision-cloud",
                asin: worx.variant.asin,
                productSlug: worx.family.slug,
              },
              {
                yard: `Your open acre, banks to ${publishedSlope(x430.slope, x430.degrees)}`,
                model: "Navimow X430",
                href: "/reviews/segway-navimow-x4",
                asin: x430.variant.asin,
                productSlug: x430.family.slug,
              },
          ]}
        />
        <div className="home-meta-mobile">
          <MetaRow updated={PUBLISHED} />
        </div>
        <FinderEmbed />
        <Ladder />
        <section>
          <h2>Six yard sizes</h2>
          <p className="measure">
            Six common yards, so you can find the one closest to yours. One acre is 43,560 sq ft. Each sketch
            links to a guide, a review, or the matching pick.
          </p>
          <h3>A flat quarter acre</h3>
          <YardQuarter />
          <p className="measure">
            If your lot is about 90 ft by 121 ft, that's {formatAcres(0.25, false)}. We'd look at the Navimow i210 AWD, rated{" "}
            {formatAcres(i210.acres, false)} and {publishedSlope(i210.slope, i210.degrees)}.{" "}
            <Link href="/best#navimow-i210">See that pick</Link>.{" "}
            <Link href="/guides/how-big-a-robot-mower-do-i-need">How big a robot mower do I need?</Link>
          </p>
          <h3>A half acre with a side passage</h3>
          <YardHalf />
          <p className="measure">
            If your lot is about 132 ft by 165 ft, that's {formatAcres(0.5, false)}. We'd look at the Dreame A3 AWD Pro 2500, rated{" "}
            {formatAcres(dreame.acres, false)} and {dreame.slope}%. Here's the thing: Dreame doesn't publish a body width for
            the A3 AWD Pro, so measure your side gate against the mower before you buy.{" "}
            <Link href="/reviews/dreame-a3-awd-pro">Read the Dreame A3 AWD Pro review</Link>.
          </p>
          <h3>An open acre</h3>
          <YardAcre />
          <p className="measure">
            If your lot is about 180 ft by 242 ft, that's {formatAcres(1, false)}. We'd look at the Navimow X430, rated{" "}
            {formatAcres(x430.acres, false)} and {x430.slope}%.{" "}
            <Link href="/reviews/segway-navimow-x4">Read the Navimow X4 review</Link>.{" "}
            <Link href="/best/robot-mower-1-acre">Which robot mower for about 1 acre?</Link>
          </p>
          <h3>A wooded lawn</h3>
          <YardWooded />
          <p className="measure">
            If trees cover about a third of your lawn, that's where a satellite fix often weakens. The
            LUBA 3 AWD 3000 is rated {formatAcres(luba.acres, false)} and adds LiDAR to network
            RTK. <Link href="/reviews/mammotion-luba-3-awd">Read the LUBA 3 AWD review</Link>.{" "}
            <Link href="/guides/rtk-vs-lidar-vs-vision">RTK, LiDAR, or vision</Link>.
          </p>
          <h3>A hillside bank</h3>
          <YardHillside />
          <p className="measure">
            If your bank rises 4 ft over 10 ft, that's a 40% slope (about 22°). We'd compare that with each mower's
            published maximum, and leave a little extra if the steep part is at the edge of your lawn.{" "}
            <Link href="/best/robot-mower-for-hills">Convert a slope and compare current models</Link>.
          </p>
          <h3>A Florida yard</h3>
          <YardFlorida />
          <p className="measure">
            If your lawn is St. Augustine, it's often kept tall, so cutting height matters. The Navimow X430 published range is{" "}
            {specText(x430.specs.cuttingHeight)}. The LUBA 3 AWD 3000 published range is{" "}
            {specText(luba.specs.cuttingHeight)}. If you keep it tall, the high-cut versions are covered in the{" "}
            <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD review</Link>.
          </p>
          <p className="measure">
            <Link href="/best/robot-mower-st-augustine">Which robot mower for St. Augustine grass?</Link>
            {" · "}
            <Link href="/best/robot-mower-bermuda">Which robot mower for Bermuda grass?</Link>
          </p>
          <AcreSquares />
          <p className="measure">
            Your lawn is smaller than your lot. On a quarter-acre lot, the house, the drive, and the beds can take up
            about 2,200 sq ft, which leaves roughly 8,700 sq ft of grass. We'd use the size guide to work yours
            out.{" "}
            <Link href="/guides/how-big-a-robot-mower-do-i-need">How big a robot mower do I need?</Link>
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
            <li>
              <Link href="/guides/robot-mower-cost-to-own">What does a robot mower cost to own?</Link>
            </li>
            <li>
              <Link href="/guides/are-robot-mowers-worth-it">Are robot mowers worth it?</Link>
            </li>
            <li>
              <Link href="/guides/robot-mower-theft-protection">How do I keep a robot mower from being stolen?</Link>
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
              <Link href="/reviews/segway-navimow-i-series">Navimow i series review: for a quarter acre</Link>
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
            <li>
              <Link href="/reviews/worx-landroid-m-wr147">Worx Landroid M WR147 review: a quarter acre on boundary wire</Link>
            </li>
            <li>
              <Link href="/reviews/husqvarna-automower-iq">Husqvarna Automower iQ review: EPOS on an open acre</Link>
            </li>
          </ul>
          <p className="measure">
            <Link href="/vs/worx-vision-cloud-wr340-vs-navimow-x430">Worx WR340 vs Navimow X430</Link>
          </p>
        </section>
      </div>
    </article>
  );
}
