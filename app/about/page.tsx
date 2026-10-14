import type { Metadata } from "next";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
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
        RobotMowGuide helps you match a robot mower to your US yard: how much grass the maker rates,
        how steep a slope the maker publishes, and whether that navigation fits where you mow. {PUBLISHER} publishes the
        site.
      </p>
      <YardPhoto id="photo-about" />
      <p className="measure">
        The reviews are research. We haven't mowed with these ourselves. Figures
        come from manufacturer pages, amazon.com product pages, and owner threads, and each one is dated.
      </p>
      <p className="measure">
        "RobotMowGuide editors" means the people at {PUBLISHER} who read the sources and
        match every figure to them before we publish or update. The byline isn't a pen name for one
        person.
      </p>
      <p className="measure">
        The first pages went up in October 2026. Write to{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> if you've got a correction, a missing source, or a
        model you think we should look at again.
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
