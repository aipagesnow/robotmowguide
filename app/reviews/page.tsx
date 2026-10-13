import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { Related } from "@/components/Blocks";
import { pageMeta } from "@/lib/metadata";
import { modelFacts } from "@/lib/products";
import { formatAcres } from "@/lib/format";
import { publishedSlope, specText } from "@/lib/speak";

const title = "Robot mower reviews";
const description =
  "Research-based reviews of robot lawn mowers for US yards, starting with the Navimow X4 and the LUBA 3 AWD.";

export const metadata: Metadata = pageMeta({ title, description, path: "/reviews" });

export default function ReviewsIndex() {
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/reviews"
      whatChanged="October 2026: first published."
    >
      <p className="measure">
        Two family reviews are up. Each one says who the mower suits, prints the checked specs, and links the
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
      <p className="measure">
        The Navimow i210 AWD, the Dreame A3 AWD Pro 2500, and the Worx Landroid Vision Cloud WR340 are picks
        on <Link href="/best">the best-mowers page</Link>. They do not have a family review yet.
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
