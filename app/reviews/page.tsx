import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { CtaCluster, Related } from "@/components/Blocks";
import { ProductLink } from "@/components/ProductLink";
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
        Ten family reviews are up. Each one says who the mower suits, prints the checked specs, and links the
        owner threads we read. We have not tested these mowers.
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
        The X430 is rated {formatAcres(x430.acres)} and {publishedSlope(x430.slope, x430.degrees)}. It fits
        an open acre with steep banks, if the side passages are wide enough for a 24 in body and the lawn has
        Wi-Fi or cell service.
      </p>
      <h2>
        <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD</Link>
      </h2>
      <p className="measure">
        The 3000 is rated {formatAcres(luba.acres)} and {publishedSlope(luba.slope, luba.degrees)}. It is the
        pick for a yard under trees, with LiDAR as well as network RTK. The standard cut tops out at {specText(luba.specs.cuttingHeight)}.
      </p>
      <h2>
        <Link href="/reviews/worx-landroid-vision-cloud">Worx Landroid Vision Cloud</Link>
      </h2>
      <p className="measure">
        The WR340 is rated {formatAcres(worx.acres)} and {publishedSlope(worx.slope, worx.degrees)}. It is
        the open-acre pick when the banks stay inside that slope. The WR344 is the 4WD row on the same page.
      </p>
      <h2>
        <Link href="/reviews/dreame-a3-awd-pro">Dreame A3 AWD Pro</Link>
      </h2>
      <p className="measure">
        The 2500 is rated {formatAcres(dreame.acres)} and {publishedSlope(dreame.slope, dreame.degrees)}.
        LiDAR and vision, no RTK. The 3500 and 5000 have no published slope on this site.
      </p>
      <h2>
        <Link href="/reviews/segway-navimow-i-series">Navimow i series</Link>
      </h2>
      <p className="measure">
        The i210 AWD is rated {formatAcres(i210.acres)} and {publishedSlope(i210.slope, i210.degrees)}. The
        i105N and i110N stay on that page as the previous generation, each with its own status line.
      </p>
      <h2>
        <Link href="/reviews/mammotion-luba-mini-2-awd">LUBA mini 2 AWD</Link>
      </h2>
      <p className="measure">
        The 1500H is rated {formatAcres(mini.acres)} and {publishedSlope(mini.slope, mini.degrees)}. The cut
        on the listing is {specText(mini.specs.cuttingHeight)}. The standard 1500 has no confirmed listing on
        this page.
      </p>
      <h2>
        <Link href="/reviews/mova-lidax-ultra">MOVA LiDAX Ultra</Link>
      </h2>
      <p className="measure">
        The Ultra 2000 is rated {formatAcres(mova.acres)} and {publishedSlope(mova.slope, mova.degrees)}. Few
        owner reports exist yet. The 3000 AWD is the row rated {formatAcres(mova3000.acres)} and{" "}
        {publishedSlope(mova3000.slope, mova3000.degrees)}.
      </p>
      <h2>
        <Link href="/reviews/roborock-rockneo-q110h">RockNeo Q110H</Link>
      </h2>
      <p className="measure">
        The Q110H is rated {formatAcres(q110.acres)} and {publishedSlope(q110.slope, q110.degrees)}. The
        English technical data gives a cut of {specText(q110.specs.cuttingHeight)}. Few Q110H owner reports
        exist yet.
      </p>
      <h2>
        <Link href="/reviews/worx-landroid-m-wr147">Worx Landroid M WR147</Link>
      </h2>
      <p className="measure">
        The WR147 is rated {formatAcres(wr147.acres)} and {publishedSlope(wr147.slope, wr147.degrees)}. It is
        the boundary-wire quarter acre. Obstacle detection is a bump sensor. The amazon.com listing showed
        unavailable on Oct 13, 2026, and the title still named the WR147.
      </p>
      <h2>
        <Link href="/reviews/husqvarna-automower-iq">Husqvarna Automower iQ</Link>
      </h2>
      <p className="measure">
        The 420 iQ is rated {formatAcres(iq.acres)} for systematic mowing, with 0.5 acre named for an
        irregular lawn, and {publishedSlope(iq.slope, iq.degrees)} with 15% at the boundary. The iQ rows have
        no Amazon button. The 435X AWD does.
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
