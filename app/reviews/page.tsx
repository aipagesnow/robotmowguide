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
  "Research-based reviews of robot lawn mowers for US yards, including the Navimow X4, the LUBA 3 AWD, Worx Vision Cloud, and the Dreame A3.";

export const metadata: Metadata = pageMeta({ title, description, path: "/reviews" });

export default function ReviewsIndex() {
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");
  const worx = modelFacts("worx-landroid-vision-cloud", "Landroid Vision Cloud WR340 (1 acre, 2WD)");
  const dreame = modelFacts("dreame-a3-awd-pro", "A3 AWD Pro 2500");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/reviews"
      updated={RECHECKED}
      whatChanged="October 13, 2026: added the Worx Landroid Vision Cloud and Dreame A3 AWD Pro reviews."
    >
      <p className="measure">
        Four family reviews are up. Each one says who the mower suits, prints the checked specs, and links the
        owner threads we read. We have not tested these mowers.
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
      <p className="measure">
        The Navimow i210 AWD does not have a family review yet. It is a pick on{" "}
        <Link href="/best">the best-mowers page</Link>.
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
