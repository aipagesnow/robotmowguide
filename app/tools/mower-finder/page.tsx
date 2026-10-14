import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { DecisionTable } from "@/components/DecisionTable";
import { CtaCluster, Faq, Related } from "@/components/Blocks";
import { SlopeMarginNote } from "@/components/VoiceBits";
import { MowerFinder } from "@/components/MowerFinder";
import { ProductLink } from "@/components/ProductLink";
import { currentCandidates } from "@/lib/candidates";
import { modelFacts } from "@/lib/products";
import { pageMeta } from "@/lib/metadata";
import { RECHECKED } from "@/lib/site";

const title = "Which mower fits my yard?";
const description =
  "Match a current robot mower to your lawn area, slope, trees, zones, and whether you will lay wire.";

export const metadata: Metadata = pageMeta({ title, description, path: "/tools/mower-finder" });

export default function FinderPage() {
  const candidates = currentCandidates();
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/tools/mower-finder"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Find my mower", path: "/tools/mower-finder" },
      ]}
      updated={RECHECKED}
      whatChanged="October 13, 2026: the form can include the WR147 and the Automower iQ models. The printed table stays wire-free."
      disclosure
    >
      <p className="measure">
        The short list uses current models only. A superseded model never appears. If nothing clears the
        area and the slope, the result says so, including yards over about 2 acres. The form includes
        boundary-wire models, including the Worx Landroid M WR147, when you allow a boundary wire. The
        printed table below is wire-free and one zone only.
      </p>
      <CtaCluster>
        <ProductLink
          asin={x430.variant.asin}
          model="Navimow X430"
          productSlug={x430.family.slug}
          placement="inline"
          pageType="tool"
        />
      </CtaCluster>
      <YardPhoto id="hero-finder" />
      <div id="results">
        <MowerFinder candidates={candidates} />
      </div>
      <h2>The decision table</h2>
      <p className="measure">
        This table is the same filter, printed for one zone and a wire-free mower. It does not create a
        separate address for each yard. The form above keeps its choices on the page.
      </p>
      <DecisionTable />
      <h2>How a row is chosen</h2>
      <p className="measure">
        Area: the rated acres must be at least your lawn for an open, single zone. Heavy trees or more than
        one zone need a rating of lawn times 1.25.{" "}
        <Link href="/guides/how-big-a-robot-mower-do-i-need">how we size</Link>.
      </p>
      <p className="measure">
        Slope: the published maximum must be at least the steepest slope you enter. If you mark that slope
        as an edge, and the model prints a lower boundary figure, the row stays and the note says the
        boundary is lower. Trees: heavy cover prefers LiDAR or vision. An RTK-only model can still appear,
        with a note about satellite fix under canopy. Passage: a published body width or minimum gap has to
        be no wider than the passage. If the width is missing, the note says to check the manual.
      </p>
      <SlopeMarginNote />
      <Faq
        items={[
          {
            q: "Why is a model missing?",
            a: "Superseded and discontinued models are left out. A current model with no published slope is left out too, because the filter will not guess a slope.",
          },
          {
            q: "Does this page change when I pick a yard?",
            a: "No. The address stays /tools/mower-finder. The table lists the size, slope, and tree bands. It is the same filter as the form.",
          },
          {
            q: "What if nothing fits?",
            a: "The result says nothing fits and why. A lawn past every rated area points to two mowers or a commercial unit.",
          },
        ]}
      />
      <Related
        links={[
          { href: "/best", label: "Best robot lawn mowers for US yards" },
          { href: "/best/robot-mower-for-hills", label: "Robot mowers for hills, with the slope converter" },
          { href: "/best/robot-mower-1-acre", label: "Robot mowers for about 1 acre" },
          { href: "/guides/how-big-a-robot-mower-do-i-need", label: "How big a robot mower do I need?" },
        ]}
      />
    </ArticleFrame>
  );
}
