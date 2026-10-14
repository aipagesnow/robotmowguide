import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { Faq, QuickPick, Related, ResearchedBox, SourceLine } from "@/components/Blocks";
import { GrassChart } from "@/components/GrassChart";
import { pageMeta } from "@/lib/metadata";
import { findVariant, modelFacts } from "@/lib/products";
import { specText } from "@/lib/speak";
import { RECHECKED, SPEC_CHECKED } from "@/lib/site";

const title = "Which robot mower for Bermuda grass?";
const description =
  "Bermuda is kept short. Compare published low cuts with NC State and Texas A&M home-lawn bands.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/best/robot-mower-bermuda",
});

const researched = ["navimow-x4", "mammotion-luba3", "dreame-a3", "husq-420iq", "husq-435x"];

export default function BermudaPage() {
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");
  const dreame = modelFacts("dreame-a3-awd-pro", "A3 AWD Pro 2500");
  const iq = modelFacts("husqvarna-automower-iq", "Automower 420 iQ");
  const wire = modelFacts("husqvarna-automower-iq", "Automower 435X AWD (boundary wire)");
  const high = findVariant("mammotion-luba-3-awd", "LUBA 3 AWD 3000H / 5000H (high-cut)");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/best/robot-mower-bermuda"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Best", path: "/best" },
        { name: "Bermuda", path: "/best/robot-mower-bermuda" },
      ]}
      updated={RECHECKED}
      whatChanged="October 13, 2026: first published, with extension-service mowing heights."
      disclosure
    >
      <p className="measure">
        For a Bermuda home lawn kept near 1 inch, start with a published low cut at or under 1.5 inches. The
        Navimow X430 goes to {specText(x430.specs.cuttingHeight)}. The standard LUBA 3 AWD 3000 goes to{" "}
        {specText(luba.specs.cuttingHeight)}. The Automower 420 iQ goes to {specText(iq.specs.cuttingHeight)}.
        High-cut models that start at 2.2 inches stay above the short Bermuda band.
      </p>
      <QuickPick
        pageType="best_for"
        items={[
          {
            yard: "Open acre, low cut 0.75 in",
            model: "Navimow X430",
            href: "/reviews/segway-navimow-x4",
            asin: x430.variant.asin,
            productSlug: x430.family.slug,
          },
          {
            yard: "About 0.75 acre, low cut 1.0 in",
            model: "LUBA 3 AWD 3000",
            href: "/reviews/mammotion-luba-3-awd",
            asin: luba.variant.asin,
            productSlug: luba.family.slug,
          },
          {
            yard: "About 0.62 acre, low cut 1.2 in",
            model: "Dreame A3 AWD Pro 2500",
            href: "/reviews/dreame-a3-awd-pro",
            asin: dreame.variant.asin,
            productSlug: dreame.family.slug,
          },
          {
            yard: "Steep wire install, low cut 1.2 in",
            model: "Automower 435X AWD",
            href: "/reviews/husqvarna-automower-iq",
            asin: wire.variant.asin,
            productSlug: wire.family.slug,
          },
        ]}
      />
      <p className="measure">
        <Link href="/tools/mower-finder">Not sure? Answer five questions</Link>. The 420 iQ also publishes a
        1 inch low cut, and that model has no Amazon button on its review.
      </p>
      <YardPhoto id="photo-bermuda" />
      <h2>What the extension services print</h2>
      <p className="measure">
        NC State’s Bermuda calendar gives a wide band of 5/8 to 2.5 inches, says heights below 1 inch need a
        reel mower and level ground, and says most lawns are kept between 1 and 2.5 inches. The same calendar
        also says Bermuda performs best at 3/4 to 1 inch with a reel mower, and that it should be kept
        shorter than 2.25 inches. Those lines sit together. They are not collapsed into one number.{" "}
        <a href="https://content.ces.ncsu.edu/bermudagrass-lawn-maintenance-calendar">
          Bermudagrass Lawn Maintenance Calendar, NC State
        </a>
        , checked Oct 13, 2026. NC State’s shorter mowing table lists bermudagrass at 0.75–2 inches.{" "}
        <a href="https://content.ces.ncsu.edu/caring-for-your-lawn-and-the-environment">
          Caring for Your Lawn and the Environment
        </a>
        .
      </p>
      <p className="measure">
        Texas A&M AgriLife’s home-lawn calendar says the recommended height for bermudagrass home lawns is 1
        to 2 inches with a rotary mower, and that hybrid golf and sports turf can go under 1 inch with a reel
        mower.{" "}
        <a href="https://agrilifeextension.tamu.edu/library/landscaping/bermudagrass-home-lawn-management-calendar/">
          Bermudagrass Home Lawn Management Calendar
        </a>
        . A second AgriLife table, ESC-052, lists common bermudagrass lawns at 1.5 to 3 inches and hybrid
        bermudagrass lawns at 1 to 2.5 inches.{" "}
        <a href="https://agrilifeextension.tamu.edu/wp-content/uploads/2025/06/Turf-Cutting-height.pdf">
          Mowing Recommendations for Warm-Season Turfgrasses, ESC-052
        </a>
        . The 1–2 inch calendar and the 1.5–3 inch table disagree. Both are printed here.
      </p>
      <GrassChart focus="bermuda" />
      <h2>High-cut rows are the mismatch</h2>
      <p className="measure">
        The LUBA 3 high-cut row is {specText(high.specs?.cuttingHeight)}. The LUBA mini 2 1500H is the same
        2.2–4.0 inch band. A lawn kept at 1 inch never enters that range. The Navimow i210 AWD starts at 2.0
        inches, which is only the top of the Texas A&M 1–2 inch home-lawn line. The 435X AWD low cut is{" "}
        {specText(wire.specs.cuttingHeight)}, so it can reach a short Bermuda lawn, and it needs boundary
        wire.
      </p>
      <Faq
        items={[
          {
            q: "Is a minimum cut height a problem for Bermuda?",
            a: "Yes, when the mower cannot go low enough. A 2.2 inch minimum misses a lawn kept at 1 to 1.5 inches. A 0.75 or 1.0 inch minimum can reach it.",
          },
          {
            q: "Can I use a St. Augustine height on Bermuda?",
            a: "The extension pages treat them as different grasses. Standard St. Augustine is the tall band. Bermuda home lawns are the short band. One mower can cover both only if its published range includes both.",
          },
          {
            q: "Which Texas A&M number should I use?",
            a: "Use the range that matches your lawn. The home-lawn calendar says 1 to 2 inches. ESC-052 says 1.5 to 3 inches for common Bermuda lawns.",
          },
        ]}
      />
      <ResearchedBox
        scope="group"
        sources={researched.map((id) => ({ id }))}
        manuals="Cutting heights are the figures already on each review."
        threads="No new owner threads were opened for this page."
        questions="No manufacturer questions have been answered yet."
        specsLine="Grass pages checked Oct 13, 2026. Mower cuts checked Oct 10, 2026."
      />
      <h2>Sources</h2>
      <ul className="grid gap-2 pl-5">
        {researched.map((id) => (
          <li key={id}>
            <SourceLine ids={[id]} checked={SPEC_CHECKED} />
          </li>
        ))}
      </ul>
      <Related
        links={[
          { href: "/best/robot-mower-st-augustine", label: "Which robot mower for St. Augustine grass?" },
          { href: "/reviews/segway-navimow-x4", label: "Navimow X4 review" },
          { href: "/reviews/mammotion-luba-3-awd", label: "LUBA 3 AWD review" },
          { href: "/best", label: "Best robot lawn mowers for US yards" },
        ]}
      />
    </ArticleFrame>
  );
}
