import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { CtaCluster, Related } from "@/components/Blocks";
import { ProductLink } from "@/components/ProductLink";
import { modelFacts } from "@/lib/products";
import { pageMeta } from "@/lib/metadata";
import { RECHECKED } from "@/lib/site";

const title = "Robot mower guides";
const description =
  "US guides on mower size, navigation, cost, theft, winter storage, front and back yards, and the 2026 FCC rule.";

export const metadata: Metadata = pageMeta({ title, description, path: "/guides" });

export default function GuidesIndex() {
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/guides"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
      ]}
      updated={RECHECKED}
      whatChanged="October 13, 2026: added cost to own, whether a robot mower is worth it, and theft protection."
      disclosure
    >
      <p className="measure">
        These guides answer a yard question before they name a mower. Specs they cite were checked on Oct 10,
        2026, except where a page names a later check.
      </p>
      <CtaCluster>
        <ProductLink
          asin={x430.variant.asin}
          model="Navimow X430"
          productSlug={x430.family.slug}
          placement="inline"
          pageType="guide"
        />
      </CtaCluster>
      <YardPhoto id="photo-guides" />
      <ul className="grid gap-4 pl-5">
        <li>
          <Link href="/guides/how-big-a-robot-mower-do-i-need">How big a robot mower do I need?</Link>
          <p className="m-0">
            Rated acres, square feet, and our 1.25× rule for heavy trees and two zones.
          </p>
        </li>
        <li>
          <Link href="/guides/rtk-vs-lidar-vs-vision">RTK, LiDAR, or vision: which navigation fits your yard</Link>
          <p className="m-0">
            Boundary wire, an antenna, network RTK, and LiDAR or a camera, and what makes each one fail.
          </p>
        </li>
        <li>
          <Link href="/guides/fcc-robot-mower-ban">Are robot mowers banned in the US? The 2026 FCC rule, tracked</Link>
          <p className="m-0">
            What the July 28, 2026 Covered List change does, and does not do, for mowers already on sale.
          </p>
        </li>
        <li>
          <Link href="/guides/robot-mower-winter-storage">How do I store a robot mower for winter?</Link>
          <p className="m-0">
            The Q110H storage temperature, and the US pages that do not include a winter checklist.
          </p>
        </li>
        <li>
          <Link href="/guides/robot-mower-front-and-back-yard">Can one robot mower do the front yard and the back yard?</Link>
          <p className="m-0">
            A zones map and a passage-width gauge that compares your opening with published figures.
          </p>
        </li>
        <li>
          <Link href="/guides/robot-mower-cost-to-own">What does a robot mower cost to own?</Link>
          <p className="m-0">
            Published subscription lines. Missing prices stay Not published. No Amazon prices.
          </p>
        </li>
        <li>
          <Link href="/guides/are-robot-mowers-worth-it">Are robot mowers worth it?</Link>
          <p className="m-0">Who a current model can suit, and who should not buy one yet.</p>
        </li>
        <li>
          <Link href="/guides/robot-mower-theft-protection">How do I keep a robot mower from being stolen?</Link>
          <p className="m-0">PIN, alarm, and tracking lines that are published, and the models that leave theft blank.</p>
        </li>
      </ul>
      <Related
        links={[
          { href: "/best", label: "Best robot lawn mowers for US yards" },
          { href: "/reviews", label: "Robot mower reviews" },
        ]}
      />
    </ArticleFrame>
  );
}
