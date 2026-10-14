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

const title = "Which robot mower for St. Augustine grass?";
const description =
  "St. Augustine is kept tall. Compare published cutting heights with UF/IFAS, NC State, and Texas A&M bands.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/best/robot-mower-st-augustine",
});

const researched = ["navimow-x4", "amz-x430", "dreame-a3", "husq-420iq", "mammotion-luba3", "worx-vision-cloud"];

export default function StAugustinePage() {
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");
  const dreame = modelFacts("dreame-a3-awd-pro", "A3 AWD Pro 2500");
  const iq = modelFacts("husqvarna-automower-iq", "Automower 420 iQ");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");
  const high = findVariant("mammotion-luba-3-awd", "LUBA 3 AWD 3000H / 5000H (high-cut)");
  const wr = modelFacts("worx-landroid-vision-cloud", "Landroid Vision Cloud WR340 (1 acre, 2WD)");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/best/robot-mower-st-augustine"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Best", path: "/best" },
        { name: "St. Augustine", path: "/best/robot-mower-st-augustine" },
      ]}
      updated={RECHECKED}
      whatChanged="October 13, 2026: first published, with extension-service mowing heights."
      disclosure
    >
      <p className="measure">
        For standard St. Augustine, start with a mower whose published cut reaches 3.5 inches, and prefer one
        that reaches 4 inches. On this site that is the Navimow X430 at {specText(x430.specs.cuttingHeight)} and
        the Automower 420 iQ at {specText(iq.specs.cuttingHeight)}. The Dreame A3 AWD Pro 2500 reaches{" "}
        {specText(dreame.specs.cuttingHeight)}. The standard LUBA 3 AWD 3000 stops at{" "}
        {specText(luba.specs.cuttingHeight)}.
      </p>
      <QuickPick
        pageType="best_for"
        items={[
          {
            yard: "Open acre, cut up to 4 in",
            model: "Navimow X430",
            href: "/reviews/segway-navimow-x4",
            asin: x430.variant.asin,
            productSlug: x430.family.slug,
          },
          {
            yard: "About 0.62 acre, cut up to 3.9 in",
            model: "Dreame A3 AWD Pro 2500",
            href: "/reviews/dreame-a3-awd-pro",
            asin: dreame.variant.asin,
            productSlug: dreame.family.slug,
          },
          {
            yard: "Up to 1 acre systematic, cut 1–4 in",
            model: "Automower 420 iQ",
            href: "/reviews/husqvarna-automower-iq",
            asin: iq.variant.asin,
            productSlug: iq.family.slug,
          },
          {
            yard: "Open acre, cut up to 3.54 in",
            model: "Worx Landroid Vision Cloud WR340",
            href: "/reviews/worx-landroid-vision-cloud",
            asin: wr.variant.asin,
            productSlug: wr.family.slug,
          },
        ]}
      />
      <p className="measure">
        <Link href="/tools/mower-finder">Not sure? Answer five questions</Link>.
      </p>
      <YardPhoto id="photo-st-augustine" />
      <h2>What the extension services print</h2>
      <p className="measure">
        UF/IFAS says standard cultivars, including BitterBlue, Classic, and Floratam, should be mowed at 3.5–4
        inches with a rotary mower. The same publication says dwarf cultivars should be mowed at 2.5 inches,
        and later says dwarf varieties should be mowed at 2–2.5 inches. Both sentences are on the page. It
        also says University of Florida research kept Floratam at 2.4 inches year-round with a robotic mower
        and saw no negative effects. That research note does not replace the 3.5–4 inch line for a standard
        lawn.{" "}
        <a href="https://edis.ifas.ufl.edu/publication/LH010">St. Augustinegrass for Florida Lawns, UF/IFAS LH010</a>
        , checked Oct 13, 2026.
      </p>
      <p className="measure">
        NC State says to maintain St. Augustine between 2.5 and 4 inches, with the higher cut more tolerant
        of shade and drought.{" "}
        <a href="https://content.ces.ncsu.edu/st-augustinegrass-lawn-maintenance-calendar">
          St. Augustinegrass Lawn Maintenance Calendar
        </a>
        . The same 2.5–4 inch band is in NC State’s mowing table.{" "}
        <a href="https://content.ces.ncsu.edu/caring-for-your-lawn-and-the-environment">
          Caring for Your Lawn and the Environment
        </a>
        . Texas A&M AgriLife’s warm-season table lists St. Augustinegrass lawns at 2.5 to 4 inches.{" "}
        <a href="https://agrilifeextension.tamu.edu/wp-content/uploads/2025/06/Turf-Cutting-height.pdf">
          Mowing Recommendations for Warm-Season Turfgrasses, ESC-052
        </a>
        . The three services are not averaged here.
      </p>
      <GrassChart focus="st-augustine" />
      <h2>Models that stop short</h2>
      <p className="measure">
        The standard LUBA 3 AWD 3000 is published at {specText(luba.specs.cuttingHeight)}. That top is under
        3.5 inches. The high-cut row is {specText(high.specs?.cuttingHeight)}, and that row has no confirmed
        amazon.com listing on the LUBA page. The Automower 435 iQ AWD and the 435X AWD are published at
        1.2–2.8 inches. The RockNeo Q110H English technical data tops out at 3.15 inches. eufy’s robot-mower
        support page tells buyers to avoid dense zoysia and St. Augustine, and to keep grass under 3.5
        inches.{" "}
        <a href="https://service.eufy.com/article-description/What-should-customers-confirm-before-purchasing-to-ensure-optimal-performance">
          eufy support, before you buy
        </a>
        , checked Oct 13, 2026. eufy is not a pick on this site.
      </p>
      <Faq
        items={[
          {
            q: "Can a robot cut thick St. Augustine at 3.5 to 4 inches?",
            a: "Only if the model’s published maximum reaches that height. The X430 and the 410 iQ and 420 iQ publish a 4 inch top. Several other current models stop between 2.7 and 3.5 inches.",
          },
          {
            q: "Do dwarf St. Augustine lawns need the same height?",
            a: "UF/IFAS prints 2.5 inches for dwarf cultivars in one sentence and 2–2.5 inches in another. A mower that cannot go below 2.2 inches is a poor match for the low end of that dwarf band.",
          },
          {
            q: "Does the Florida robotic-mower note mean 2.4 inches is the new standard?",
            a: "No. UF/IFAS still prints 3.5–4 inches for standard cultivars. The 2.4 inch line is a research result for Floratam under constant robotic mowing.",
          },
        ]}
      />
      <ResearchedBox
        scope="group"
        sources={researched.map((id) => ({ id }))}
        manuals="Cutting heights are the figures already on each review. No new manual was opened for this chart."
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
          { href: "/best/robot-mower-bermuda", label: "Which robot mower for Bermuda grass?" },
          { href: "/reviews/segway-navimow-x4", label: "Navimow X4 review" },
          { href: "/reviews/husqvarna-automower-iq", label: "Automower iQ review" },
          { href: "/best", label: "Best robot lawn mowers for US yards" },
        ]}
      />
    </ArticleFrame>
  );
}
