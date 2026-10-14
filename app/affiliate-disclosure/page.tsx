import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { AffiliateDiagram } from "@/components/Diagrams";
import { Related } from "@/components/Blocks";
import { pageMeta } from "@/lib/metadata";
import { DISCLOSURE_SENTENCE } from "@/lib/site";

const title = "Affiliate disclosure";
const description = "How RobotMowGuide earns from Amazon links, and what those links do not change.";

export const metadata: Metadata = pageMeta({ title, description, path: "/affiliate-disclosure" });

export default function AffiliatePage() {
  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/affiliate-disclosure"
      whatChanged="October 2026: first published."
      disclosure
    >
      <p className="measure">{DISCLOSURE_SENTENCE}</p>
      <YardPhoto id="photo-affiliate" />
      <p className="measure">
        Some pages link to a model on amazon.com. The link goes straight to that product page. The associate
        tag is added when the site is built, from the site configuration. There is no in-between redirect on
        this site. If a tag is not configured, the page shows no Amazon button.
      </p>
      <AffiliateDiagram />
      <p className="measure">
        You click a “See on Amazon” link, which opens amazon.com. A qualifying purchase may earn this site a
        commission. The price you pay is the same price Amazon shows you. Amazon prices are not shown here,
        because they change and a stale number would be wrong.
      </p>
      <p className="measure">
        Rankings are not paid placements. A model is on the ladder because of the area and slope its maker
        publishes. A missing Amazon listing means no button, not a lower rank. RobotMowGuide does not use
        other shopping affiliate programs.
      </p>
      <p className="measure">
        The disclosure sentence appears before the first Amazon link on a page. Beside each group of buttons,
        the page repeats <Link href="/affiliate-disclosure">Paid links: see disclosure</Link>.
      </p>
      <Related
        links={[
          { href: "/how-picks-are-chosen", label: "How picks are chosen" },
          { href: "/privacy", label: "Privacy" },
          { href: "/about", label: "About RobotMowGuide" },
        ]}
      />
    </ArticleFrame>
  );
}
