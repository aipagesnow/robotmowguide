import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { Related } from "@/components/Blocks";
import { pageMeta } from "@/lib/metadata";
import { formatAcres } from "@/lib/format";
import { modelFacts } from "@/lib/products";
import { publishedSlope } from "@/lib/speak";
import { RECHECKED } from "@/lib/site";

const title = "Robot mower head-to-head comparisons";
const description =
  "Side-by-side comparisons: the Navimow X430 against the LUBA 3 AWD 3000, and the Dreame 2500 against the LUBA 3000.";

export const metadata: Metadata = pageMeta({ title, description, path: "/vs" });

export default function VsIndex() {
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");
  const dreame = modelFacts("dreame-a3-awd-pro", "A3 AWD Pro 2500");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/vs"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Head-to-head", path: "/vs" },
      ]}
      updated={RECHECKED}
      whatChanged="October 13, 2026: added the Dreame A3 AWD Pro 2500 against the LUBA 3 AWD 3000."
    >
      <p className="measure">
        Two comparisons are up. Each one puts two current models on the same yard questions. We have not
        tested these mowers.
      </p>
      <h2>
        <Link href="/vs/navimow-x430-vs-luba-3-awd-3000">Navimow X430 vs LUBA 3 AWD 3000</Link>
      </h2>
      <p className="measure">
        The X430 is rated {formatAcres(x430.acres)} and {publishedSlope(x430.slope, x430.degrees)}. The LUBA
        3 AWD 3000 is rated {formatAcres(luba.acres)} and {publishedSlope(luba.slope, luba.degrees)}. One is
        the open acre. The other adds LiDAR for a smaller lawn under trees.
      </p>
      <h2>
        <Link href="/vs/dreame-a3-awd-pro-vs-luba-3-awd">Dreame A3 AWD Pro 2500 vs LUBA 3 AWD 3000</Link>
      </h2>
      <p className="measure">
        The Dreame 2500 is rated {formatAcres(dreame.acres)} and {publishedSlope(dreame.slope, dreame.degrees)}.
        The LUBA 3000 is rated {formatAcres(luba.acres)} and {publishedSlope(luba.slope, luba.degrees)}. Both
        use LiDAR. The LUBA also uses network RTK. The Dreame does not.
      </p>
      <Related
        links={[
          { href: "/best", label: "Best robot lawn mowers for US yards" },
          { href: "/reviews", label: "Robot mower reviews" },
          { href: "/tools/mower-finder", label: "Which mower fits my yard?" },
        ]}
      />
    </ArticleFrame>
  );
}
