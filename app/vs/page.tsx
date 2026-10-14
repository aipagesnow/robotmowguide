import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { CtaCluster, Related } from "@/components/Blocks";
import { ProductLink } from "@/components/ProductLink";
import { SlopeMarginNote } from "@/components/VoiceBits";
import { pageMeta } from "@/lib/metadata";
import { formatAcres } from "@/lib/format";
import { modelFacts } from "@/lib/products";
import { publishedSlope } from "@/lib/speak";
import { RECHECKED } from "@/lib/site";

const title = "Robot mower head-to-head comparisons";
const description =
  "Side-by-side comparisons: X430 against LUBA 3000, Dreame 2500 against LUBA 3000, and WR340 against X430.";

export const metadata: Metadata = pageMeta({ title, description, path: "/vs" });

export default function VsIndex() {
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");
  const dreame = modelFacts("dreame-a3-awd-pro", "A3 AWD Pro 2500");
  const worx = modelFacts("worx-landroid-vision-cloud", "Landroid Vision Cloud WR340 (1 acre, 2WD)");

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
      whatChanged="October 13, 2026: added the Worx Vision Cloud WR340 against the Navimow X430."
      disclosure
    >
      <p className="measure">
        Three comparisons are up. Each one puts two current models on the same yard questions.
      </p>
      <CtaCluster>
        <ProductLink
          asin={x430.variant.asin}
          model="Navimow X430"
          productSlug={x430.family.slug}
          placement="inline"
          pageType="vs"
        />
      </CtaCluster>
      <YardPhoto id="photo-vs" />
      <h2>
        <Link href="/vs/navimow-x430-vs-luba-3-awd-3000">Navimow X430 vs LUBA 3 AWD 3000</Link>
      </h2>
      <p className="measure">
        The X430 is rated {formatAcres(x430.acres)} and {publishedSlope(x430.slope, x430.degrees)}. The LUBA
        3 AWD 3000 is rated {formatAcres(luba.acres, false)} and {luba.slope}%. One is the open acre. The
        other adds LiDAR for a smaller lawn under trees.
      </p>
      <SlopeMarginNote />
      <h2>
        <Link href="/vs/dreame-a3-awd-pro-vs-luba-3-awd">Dreame A3 AWD Pro 2500 vs LUBA 3 AWD 3000</Link>
      </h2>
      <p className="measure">
        The Dreame 2500 is rated {formatAcres(dreame.acres, false)} and {dreame.slope}%. The LUBA 3000 is
        rated {formatAcres(luba.acres, false)} and {luba.slope}%. Both use LiDAR. The LUBA also uses network
        RTK. The Dreame does not.
      </p>
      <h2>
        <Link href="/vs/worx-vision-cloud-wr340-vs-navimow-x430">Worx Vision Cloud WR340 vs Navimow X430</Link>
      </h2>
      <p className="measure">
        Both are rated {formatAcres(worx.acres, false)}. The WR340 publishes {worx.slope}%. The X430 publishes{" "}
        {x430.slope}%.
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
