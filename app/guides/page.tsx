import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { Related } from "@/components/Blocks";
import { pageMeta } from "@/lib/metadata";

const title = "Robot mower guides";
const description =
  "Two US guides: how big a robot mower to buy, and how RTK, LiDAR, and vision behave in a real yard.";

export const metadata: Metadata = pageMeta({ title, description, path: "/guides" });

export default function GuidesIndex() {
  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/guides"
      whatChanged="October 2026: first published."
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
