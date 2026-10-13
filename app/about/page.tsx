import type { Metadata } from "next";
import { ArticleFrame } from "@/components/ArticleFrame";
import { Related } from "@/components/Blocks";
import { pageMeta } from "@/lib/metadata";
import { CONTACT_EMAIL, PUBLISHER } from "@/lib/site";

const title = "About RobotMowGuide";
const description =
  "RobotMowGuide is a research-based US guide to robot lawn mowers, published by Aivora Digital.";

export const metadata: Metadata = pageMeta({ title, description, path: "/about" });

export default function AboutPage() {
  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/about"
      whatChanged="October 2026: first published."
    >
      <p className="measure">
        RobotMowGuide helps a US homeowner match a robot lawn mower to a real yard: the area the maker rates,
        the slope the maker publishes, and the navigation that yard can support. {PUBLISHER} publishes the
        site.
      </p>
      <p className="measure">
        Reviews are research-based. We have not tested these mowers. There is no hands-on testing. Figures
        come from manufacturer pages, listing text, and owner threads, each with a checked date.
      </p>
      <p className="measure">
        “RobotMowGuide editors” means the people at {PUBLISHER} who research a page and check every figure
        against the linked source before it is published or updated. The byline is not a pen name for one
        person.
      </p>
      <p className="measure">
        The first pages went up in October 2026. Write to{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> about a correction, a missing source, or a
        model we should re-check.
      </p>
      <Related
        links={[
          { href: "/how-picks-are-chosen", label: "How picks are chosen" },
          { href: "/affiliate-disclosure", label: "Affiliate disclosure" },
          { href: "/privacy", label: "Privacy" },
          { href: "/best", label: "Best robot lawn mowers for US yards" },
        ]}
      />
    </ArticleFrame>
  );
}
