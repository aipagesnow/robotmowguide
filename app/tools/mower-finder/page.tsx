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
        The short list is current models only. If a model has been replaced, it won't appear. If nothing clears the
        area and the slope, the result says so, including yards over about 2 acres. The form can include
        boundary-wire models, including the Worx Landroid M WR147, if you're willing to lay a boundary wire. The
        table below is wire-free, and it's one zone only.
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
        It's the same filter as the form, for one zone and a wire-free mower. It doesn't make a
        separate address for each yard. What you choose in the form stays put.
      </p>
      <DecisionTable />
      <h2>How a row is chosen</h2>
      <p className="measure">
        For area, the rated acres have to cover your lawn if it's open and one zone. Heavy trees or more than
        one zone need a rating of your lawn times 1.25.{" "}
        <Link href="/guides/how-big-a-robot-mower-do-i-need">how we size</Link>.
      </p>
      <p className="measure">
        For slope, the published maximum has to be at least the steepest slope you enter. If you mark that slope
        as an edge, and the model prints a lower boundary figure, it still shows, and the note says the
        boundary is lower. For trees, heavy cover favors LiDAR or vision. An RTK-only model can still appear,
        with a note that the satellite fix can slip under the canopy. For a passage, a published body width or minimum gap has to
        be no wider than your opening. If that width isn't published, the note says to look in the manual.
      </p>
      <SlopeMarginNote />
      <Faq
        items={[
          {
            q: "Why is a model missing?",
            a: "Models that have been replaced or discontinued aren't included. A current model with no published slope isn't included either, because we won't guess a slope.",
          },
          {
            q: "Does this page change when I pick a yard?",
            a: "No. The address stays /tools/mower-finder. The table lists the size, slope, and tree bands. It's the same filter as the form.",
          },
          {
            q: "What if nothing fits?",
            a: "The result says nothing fits, and why. If your lawn is past every rated area, we'd look at two mowers or a commercial unit.",
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
