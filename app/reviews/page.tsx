import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { Related } from "@/components/Blocks";
import { pageMeta } from "@/lib/metadata";
import { modelFacts } from "@/lib/products";
import { formatAcres } from "@/lib/format";
import { publishedSlope, specText } from "@/lib/speak";
import { RECHECKED } from "@/lib/site";

const title = "Robot mower reviews";
const description =
  "Research-based reviews of robot lawn mowers for US yards, including the Navimow X4 and i series, both LUBA families, MOVA, the RockNeo Q110H, Worx, and Dreame.";

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

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/reviews"
      updated={RECHECKED}
      whatChanged="October 13, 2026: added the LUBA mini 2, MOVA LiDAX Ultra, RockNeo Q110H, and Navimow i series reviews."
    >
      <p className="measure">
        Eight family reviews are up. Each one says who the mower suits, prints the checked specs, and links
        the owner threads we read. We have not tested these mowers.
      </p>
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
