import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { Related } from "@/components/Blocks";
import { pageMeta } from "@/lib/metadata";
import { RECHECKED } from "@/lib/site";

const title = "Robot mower guides";
const description =
  "US guides on mower size, navigation, and the 2026 FCC rule for robot mowers already on sale.";

export const metadata: Metadata = pageMeta({ title, description, path: "/guides" });

export default function GuidesIndex() {
  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/guides"
      updated={RECHECKED}
      whatChanged="October 13, 2026: added the FCC rule tracker."
    >
      <p className="measure">
        These guides answer a yard question before they name a mower. Specs they cite were checked on Oct 10,
        2026.
      </p>
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
