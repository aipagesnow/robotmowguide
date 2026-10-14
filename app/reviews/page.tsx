import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { CtaCluster, Related } from "@/components/Blocks";
import { ProductLink } from "@/components/ProductLink";
import { SlopeMarginNote } from "@/components/VoiceBits";
import { pageMeta } from "@/lib/metadata";
import { discontinuedMentions, modelFacts } from "@/lib/products";
import { formatAcres } from "@/lib/format";
import { publishedSlope, specText } from "@/lib/speak";
import { RECHECKED } from "@/lib/site";

const title = "Robot mower reviews";
const description =
  "Research-based reviews of robot lawn mowers for US yards, including Worx, Husqvarna Automower iQ, Navimow, LUBA, MOVA, Dreame, and the RockNeo Q110H.";

export const metadata: Metadata = pageMeta({ title, description, path: "/reviews" });

export default function ReviewsIndex() {
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");
  const worx = modelFacts("worx-landroid-vision-cloud", "Landroid Vision Cloud WR340 (1 acre, 2WD)");
  const dreame = modelFacts("dreame-a3-awd-pro", "A3 AWD Pro 2500");
  const i210 = modelFacts("segway-navimow-i2-awd", "Navimow i210 AWD");
  const mini = modelFacts("mammotion-luba-mini-2-awd", "LUBA mini 2 AWD 1500H (high-cut)");
  const mova = modelFacts("mova-lidax-ultra", "LiDAX Ultra 2000");
  const mova3000 = modelFacts("mova-lidax-ultra", "LiDAX Ultra 3000 AWD");
  const q110 = modelFacts("roborock-rockneo-q110h", "RockNeo Q110H");
  const wr147 = modelFacts("worx-landroid-m-wr147", "Landroid M WR147");
  const iq = modelFacts("husqvarna-automower-iq", "Automower 420 iQ");
  const previous = discontinuedMentions();

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/reviews"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Reviews", path: "/reviews" },
      ]}
      updated={RECHECKED}
      whatChanged="October 13, 2026: added the Worx Landroid M WR147 and Husqvarna Automower iQ reviews."
      disclosure
    >
      <p className="measure">
        Each review below answers whether that mower would work in your yard. We've got ten of them, with
        the specs that matter and the owner threads we read.
      </p>
      <CtaCluster>
        <ProductLink
          asin={x430.variant.asin}
          model="Navimow X430"
          productSlug={x430.family.slug}
          placement="inline"
          pageType="review"
        />
      </CtaCluster>
      <YardPhoto id="photo-reviews" />
      <h2>
        <Link href="/reviews/segway-navimow-x4">Navimow X4 series</Link>
      </h2>
      <p className="measure">
        If you've got an open acre and steep banks, the X430 is the one we'd look at. It's rated{" "}
        {formatAcres(x430.acres)} and {publishedSlope(x430.slope, x430.degrees)}. You'll want a side passage
        wide enough for a 24 in body, and Wi-Fi or cell service at the lawn.
      </p>
      <SlopeMarginNote />
      <h2>
        <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD</Link>
      </h2>
      <p className="measure">
        If your yard sits under trees, the 3000 is the one we'd read first. It's rated{" "}
        {formatAcres(luba.acres, false)} and {luba.slope}%, with LiDAR as well as network RTK. The standard
        cut tops out at {specText(luba.specs.cuttingHeight)}.
      </p>
      <h2>
        <Link href="/reviews/worx-landroid-vision-cloud">Worx Landroid Vision Cloud</Link>
      </h2>
      <p className="measure">
        If you've got an open acre and the banks stay inside that slope, the WR340 is a sensible pick. It's
        rated {formatAcres(worx.acres, false)} and {worx.slope}%. If your bank is steeper, the WR344 is the
        4WD model to look at.
      </p>
      <h2>
        <Link href="/reviews/dreame-a3-awd-pro">Dreame A3 AWD Pro</Link>
      </h2>
      <p className="measure">
        If you want LiDAR and vision, and no RTK antenna, the 2500 is the Dreame we'd start with. It's rated{" "}
        {formatAcres(dreame.acres, false)} and {dreame.slope}%. Dreame doesn't publish a slope figure for the
        3500 or the 5000, so we wouldn't assume those climb the same bank.
      </p>
      <h2>
        <Link href="/reviews/segway-navimow-i-series">Navimow i series</Link>
      </h2>
      <p className="measure">
        If you've got about a quarter acre, the i210 AWD is the current model we'd look at. It's rated{" "}
        {formatAcres(i210.acres, false)} and {i210.slope}%. The i105N and i110N are the previous generation,
        and that review still covers them.
      </p>
      <h2>
        <Link href="/reviews/mammotion-luba-mini-2-awd">LUBA mini 2 AWD</Link>
      </h2>
      <p className="measure">
        If your yard is small, the bank is steep, and you keep the grass tall, the 1500H is the one we'd
        look at. It's rated {formatAcres(mini.acres, false)} and {mini.slope}%. The cut on the listing is{" "}
        {specText(mini.specs.cuttingHeight)}. The standard 1500 doesn't have a confirmed amazon.com listing.
      </p>
      <h2>
        <Link href="/reviews/mova-lidax-ultra">MOVA LiDAX Ultra</Link>
      </h2>
      <p className="measure">
        If you've got an open half acre, we'd start with the Ultra 2000. It's rated{" "}
        {formatAcres(mova.acres, false)} and {mova.slope}%. Few owner reports exist yet. The 3000 AWD is the
        one rated {formatAcres(mova3000.acres, false)} and {mova3000.slope}% when the bank is why you're
        shopping.
      </p>
      <h2>
        <Link href="/reviews/roborock-rockneo-q110h">RockNeo Q110H</Link>
      </h2>
      <p className="measure">
        If you've got an open quarter acre, the Q110H is a possible fit. It's rated{" "}
        {formatAcres(q110.acres, false)} and {q110.slope}%. The English technical data gives a cut of{" "}
        {specText(q110.specs.cuttingHeight)}. Few Q110H owner reports exist yet.
      </p>
      <h2>
        <Link href="/reviews/worx-landroid-m-wr147">Worx Landroid M WR147</Link>
      </h2>
      <p className="measure">
        If you've got a quarter-acre lawn and you don't mind laying a boundary wire, the WR147 is a sensible
        pick. It's rated {formatAcres(wr147.acres, false)} and {wr147.slope}%. Obstacle detection is a bump
        sensor, so a busy yard is a poor fit. The amazon.com listing showed unavailable on Oct 13, 2026, and
        the title still named the WR147.
      </p>
      <h2>
        <Link href="/reviews/husqvarna-automower-iq">Husqvarna Automower iQ</Link>
      </h2>
      <p className="measure">
        If you've got an open acre you mow in systematic passes, the 420 iQ is the Husqvarna we'd read. It's
        rated {formatAcres(iq.acres, false)} for systematic mowing, with 0.5 acre named for an irregular lawn,
        and {iq.slope}% with 15% at the boundary. The iQ models don't have an Amazon button. The 435X AWD
        does.
      </p>
      {previous.length ? (
        <section>
          <h2>Previous models</h2>
          <ul className="grid gap-2 pl-5">
            {previous.map((row) => (
              <li key={row.name}>
                {row.href ? <Link href={row.href}>{row.name}</Link> : row.name}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <Related
        links={[
          { href: "/best", label: "Best robot lawn mowers for US yards" },
          { href: "/guides", label: "Guides" },
          { href: "/how-picks-are-chosen", label: "How picks are chosen" },
        ]}
      />
    </ArticleFrame>
  );
}
