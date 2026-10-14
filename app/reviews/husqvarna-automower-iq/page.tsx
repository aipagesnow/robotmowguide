import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import {
  CtaCluster,
  EndLinks,
  Faq,
  KeyNumbers,
  OwnerReports,
  Related,
  ResearchedBox,
  SourceLine,
} from "@/components/Blocks";
import { ComfortableFor, SlopeMarginNote } from "@/components/VoiceBits";
import { ProductLink } from "@/components/ProductLink";
import { SpecTable } from "@/components/SpecTable";
import { VariantTable } from "@/components/VariantTable";
import { pageMeta } from "@/lib/metadata";
import { formatAcres } from "@/lib/format";
import { getFamily, modelFacts, navigationLabel } from "@/lib/products";
import { interiorOrBoundary, publishedSlope, slopeWithRise, specText } from "@/lib/speak";
import { FCC_COVERED_LIST, FCC_DA_26_789, RECHECKED, SPEC_CHECKED } from "@/lib/site";

const title = "Husqvarna Automower iQ review: EPOS on an open acre";
const description =
  "The 420 iQ is rated for 1 acre systematic mowing and 45% slope, with 15% at the boundary. The 435X AWD is the wire model with a listing.";

const FACT =
  "Edited and fact-checked by the RobotMowGuide editors at Aivora Digital. Specs checked against Husqvarna US pages on Oct 10, 2026. The 435X AWD listing title was confirmed that day and was not opened again on Oct 13, 2026.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/reviews/husqvarna-automower-iq",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Reviews", path: "/reviews" },
  { name: "Automower iQ", path: "/reviews/husqvarna-automower-iq" },
];

const sources = ["husq-410iq", "husq-420iq", "husq-440iq", "husq-435iq", "husq-435x", "amz-435x"];

export default function IqReview() {
  const iq = modelFacts("husqvarna-automower-iq", "Automower 420 iQ");
  const small = modelFacts("husqvarna-automower-iq", "Automower 410 iQ");
  const big = modelFacts("husqvarna-automower-iq", "Automower 440 iQ");
  const awd = modelFacts("husqvarna-automower-iq", "Automower 435 iQ AWD");
  const wire = modelFacts("husqvarna-automower-iq", "Automower 435X AWD (boundary wire)");
  const family = getFamily("husqvarna-automower-iq");
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");
  const boundary = iq.variant.ladder?.maxSlopePercent?.note;

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/reviews/husqvarna-automower-iq"
      crumbs={crumbs}
      updated={RECHECKED}
      whatChanged="October 13, 2026: first published. iQ models stay on the plain no-link line. The 435X AWD keeps its button."
      factCheck={FACT}
      disclosure
      status="Current in the US as of Oct 10, 2026."
    >
      <p className="measure">
        Read the 420 iQ for an open acre mowed in systematic passes. Husqvarna rates it{" "}
        {formatAcres(iq.acres)} for systematic mowing and 0.5 acre for an irregular lawn, at{" "}
        {publishedSlope(iq.slope, iq.degrees)}. {interiorOrBoundary(boundary)} The cut is{" "}
        {specText(iq.specs.cuttingHeight)}.
      </p>
      <p className="measure">
        Look elsewhere for a steep bank at the edge, for heavy woods unless you add the wire the maker
        allows, or if you need an amazon.com listing for an iQ model. The 435X AWD is the boundary-wire model
        on this page, and it is the one with a button.
      </p>
      <CtaCluster>
        <ProductLink
          asin={iq.variant.asin}
          model="Automower 420 iQ"
          productSlug={family.slug}
          placement="verdict"
          pageType="review"
        />
        <ProductLink
          asin={wire.variant.asin}
          model="Automower 435X AWD"
          productSlug={family.slug}
          placement="verdict"
          pageType="review"
        />
      </CtaCluster>
      <YardPhoto id="card-husqvarna-iq" />
      <h2>Key numbers for your yard</h2>
      <KeyNumbers
        rows={[
          {
            label: "Rated area",
            value: formatAcres(iq.acres),
            detail: (
              <>
                The same page says 0.5 acre irregular and 1 acre systematic. The 410 iQ area note is ±20%.{" "}
                <ComfortableFor rated={iq.acres} />
              </>
            ),
          },
          {
            label: "Max slope",
            value: slopeWithRise(iq.slope, iq.degrees),
            detail: interiorOrBoundary(boundary),
          },
          {
            label: "Passage",
            value: "Not published",
            detail: "Body width not published.",
          },
          {
            label: "Navigation",
            value: navigationLabel(family.navigation),
            detail: "EPOS can run without a boundary wire. The wire remains an option.",
          },
          {
            label: "Cut",
            value: specText(iq.specs.cuttingHeight),
            detail: `Warranty ${specText(iq.specs.warranty)}.`,
          },
        ]}
      />
      <VariantTable
        family={family}
        pageType="review"
        differences={{
          "Automower 410 iQ": `Rated ${formatAcres(small.acres)} with a ±20% note, ${publishedSlope(small.slope, small.degrees)}, ${interiorOrBoundary(small.variant.ladder?.maxSlopePercent?.note)} Cut ${specText(small.specs.cuttingHeight)}. No confirmed amazon.com listing.`,
          "Automower 420 iQ":
            "The model this review follows. 0.5 acre irregular or 1 acre systematic. 45% with 15% at the boundary. Cut 1–4 in. Warranty 4 years. No confirmed amazon.com listing.",
          "Automower 440 iQ": `Rated ${formatAcres(big.acres)} and ${publishedSlope(big.slope, big.degrees)}. ${interiorOrBoundary(big.variant.ladder?.maxSlopePercent?.note)} Cut height is Not published on this row. No confirmed amazon.com listing.`,
          "Automower 435 iQ AWD": `Rated ${formatAcres(awd.acres)} and ${publishedSlope(awd.slope, awd.degrees)}. ${interiorOrBoundary(awd.variant.ladder?.maxSlopePercent?.note)} Cut ${specText(awd.specs.cuttingHeight)}. No confirmed amazon.com listing.`,
          "Automower 435X AWD (boundary wire)": `The wire model. Rated ${formatAcres(wire.acres)} and ${publishedSlope(wire.slope, wire.degrees)}. ${interiorOrBoundary(wire.variant.ladder?.maxSlopePercent?.note)} Cut ${specText(wire.specs.cuttingHeight)}. This row has the Amazon button.`,
        }}
      />
      <h2>Specs we checked</h2>
      <SpecTable
        caption="420 iQ figures checked Oct 10, 2026, unless a row names another model."
        rows={[
          {
            label: "Rated area",
            value: formatAcres(iq.acres),
            sources: ["husq-420iq"],
            checked: SPEC_CHECKED,
            href: "/guides/how-big-a-robot-mower-do-i-need",
            note: "0.5 acre irregular / 1 acre systematic. That split is Husqvarna’s. It is not our 1.25× rule.",
          },
          {
            label: "Max slope",
            value: publishedSlope(iq.slope, iq.degrees),
            sources: ["husq-420iq"],
            checked: SPEC_CHECKED,
            href: "/best/robot-mower-for-hills",
            note: interiorOrBoundary(boundary),
          },
          {
            label: "Navigation",
            value: navigationLabel(family.navigation),
            sources: ["husq-420iq"],
            checked: SPEC_CHECKED,
            href: "/guides/rtk-vs-lidar-vs-vision",
          },
          {
            label: "Cutting height",
            value: specText(iq.specs.cuttingHeight),
            sources: ["husq-420iq"],
            checked: SPEC_CHECKED,
            href: "/best/robot-mower-st-augustine",
            note: "The 435 iQ AWD and the 435X AWD publish 1.2–2.8 in, which is a shorter top.",
          },
          {
            label: "Warranty",
            value: specText(iq.specs.warranty),
            sources: ["husq-420iq"],
            checked: SPEC_CHECKED,
          },
          {
            label: "435X AWD area",
            value: formatAcres(wire.acres),
            sources: ["husq-435x"],
            checked: SPEC_CHECKED,
            note: `Slope ${publishedSlope(wire.slope, wire.degrees)}. ${interiorOrBoundary(wire.variant.ladder?.maxSlopePercent?.note)}`,
          },
        ]}
      />
      <h2>The acre is two numbers</h2>
      <p className="measure">
        Systematic mowing is the {formatAcres(iq.acres, false)} figure. An irregular lawn is the 0.5 acre
        figure on the same page. The 410 iQ is rated {formatAcres(small.acres, false)} and prints ±20% on that
        area. Heavy trees or two zones are a separate case on the size guide.{" "}
        <SourceLine ids={["husq-420iq", "husq-410iq"]} checked={SPEC_CHECKED} />
      </p>
      <h2>15% at the boundary</h2>
      <p className="measure">
        The 410 iQ, 420 iQ, and 440 iQ publish {iq.slope}% and limit the boundary to 15%. A bank that is steep
        only at the edge can miss the mower even when the middle of the lawn is gentler. The 435 iQ AWD and
        the 435X AWD publish {awd.slope}% and 50% at the boundary. Degrees are not published on these rows.{" "}
        <SourceLine ids={["husq-420iq", "husq-435iq", "husq-435x"]} checked={SPEC_CHECKED} />
      </p>
      <SlopeMarginNote />
      <h2>Trees and the wire option</h2>
      <p className="measure">
        EPOS is RTK. Owners report pauses under trees. The boundary wire is the option Husqvarna leaves on
        these models when the sky is not enough. Radar and ultrasonic are not a substitute for a clear sky.{" "}
        <SourceLine ids={["husq-420iq"]} checked={SPEC_CHECKED} />
      </p>
      <OwnerReports
        intro="In the 4 owner threads we read in October 2026:"
        items={[
          {
            text: "EPOS pauses and searches under trees, then stops.",
            href: "https://www.reddit.com/r/automower/comments/1srq9ov/",
            linkLabel: "Thread on EPOS pauses under trees",
          },
          {
            text: "EPOS lock and setup frustrations, in two threads. One of those also says US phone support fixed a setup problem in about 20 minutes.",
            href: "https://www.reddit.com/r/automower/comments/1tnd090/",
            linkLabel: "Thread on EPOS lock",
            extra: [
              {
                href: "https://www.reddit.com/r/automower/comments/1k2umk1/",
                linkLabel: "Thread on setup and phone support",
              },
            ],
          },
          {
            text: "Reliable on open yards. A 2WD mower sticks in mud and mulch.",
            href: "https://www.reddit.com/r/automower/comments/1rnyfu6/",
            linkLabel: "Thread on open yards and mud",
          },
        ]}
      />
      <h2>Running costs</h2>
      <p className="measure">
        An official cellular price is Not published on the Husqvarna US pages used here. The Verge reported
        Automower Connect as free for life. Blade prices are Not published. The{" "}
        <Link href="/guides/robot-mower-cost-to-own">cost-to-own guide</Link> keeps those lines out of the
        yearly sum. A theft feature is Not published.
      </p>
      <h2>Honest limits</h2>
      <ul className="grid gap-2 pl-5">
        <li>A steep edge. The 420 iQ boundary limit is 15%.</li>
        <li>Heavy woods, unless you add the wire assist the maker describes.</li>
        <li>An irregular lawn if you only read the 1 acre systematic figure.</li>
        <li>A buyer who needs an amazon.com listing for an iQ model. Those four rows stay on the plain no-link line.</li>
        <li>A St. Augustine lawn that needs a 4 inch cut on the 435 iQ AWD or the 435X AWD. Those two top out at 2.8 in.</li>
      </ul>
      <h2>Support outlook</h2>
      <p className="measure">
        Husqvarna is the only robot-mower brand with{" "}
        <a href="https://www.husqvarnagroup.com/en/press/husqvarna-group-first-receive-fcc-conditional-approval-foreign-manufactured-advanced-robotic">
          FCC Conditional Approval
        </a>
        , granted Sep 9, 2026 (DA 26-957,{" "}
        <a href={FCC_COVERED_LIST}>FCC Covered List and Conditional Approvals table</a>
        ). Models already authorized can keep receiving updates until at least Jan 1, 2029 (
        <a href={FCC_DA_26_789}>FCC DA 26-789</a>
        ).
      </p>
      <p className="measure">
        The 410 iQ, 420 iQ, 440 iQ, and 435 iQ AWD had no confirmed amazon.com listing on Oct 10, 2026. The
        435X AWD listing title was confirmed that day. It was not opened again on Oct 13, 2026.
      </p>
      <h2>Another open acre</h2>
      <p className="measure">
        The Navimow X430 is rated {formatAcres(x430.acres)} and {x430.slope}%, with a confirmed listing. It
        doesn't publish a separate 15% boundary figure.{" "}
        <Link href="/reviews/segway-navimow-x4">Navimow X4 review</Link>.{" "}
        <Link href="/vs/worx-vision-cloud-wr340-vs-navimow-x430">WR340 vs X430</Link> is the vision comparison
        on the same acre.
      </p>
      <Faq
        items={[
          {
            q: "Why is there no Amazon button on the 420 iQ?",
            a: "There was no confirmed amazon.com listing for that exact model at the Oct 10, 2026 check. The 435X AWD is the row with a button.",
          },
          {
            q: "Is 1 acre the irregular-lawn rating?",
            a: "No. The 420 iQ page says 0.5 acre for an irregular lawn and 1 acre for systematic mowing. The 410 iQ prints ±20% on its 0.5 acre rating.",
          },
          {
            q: "Can it climb 45% at the property line?",
            a: "The 420 iQ publishes 45% and 15% at the boundary. The 435 iQ AWD and the 435X AWD publish 70% and 50% at the boundary.",
          },
        ]}
      />
      <ResearchedBox
        sources={sources.map((id) => ({ id }))}
        manuals="Specs on this page come from Husqvarna US model pages, not from a third-party manual site."
        threads="Four owner threads, read in October 2026."
        questions="No manufacturer questions have been answered yet."
        specsLine="Specs checked Oct 10, 2026. The 435X AWD listing was not opened again on Oct 13, 2026."
      />
      <h2>See these models</h2>
      <p className="measure">
        The 420 iQ stays on the plain no-link line. The 435X AWD button is the listing we could confirm.
      </p>
      <EndLinks
        pageType="review"
        links={[
          { asin: iq.variant.asin, model: "Automower 420 iQ", productSlug: family.slug },
          { asin: wire.variant.asin, model: "Automower 435X AWD", productSlug: family.slug },
          { asin: x430.variant.asin, model: "Navimow X430", productSlug: x430.family.slug },
        ]}
      />
      <h2>Sources</h2>
      <ul className="grid gap-2 pl-5">
        {sources.map((id) => (
          <li key={id}>
            <SourceLine ids={[id]} checked={SPEC_CHECKED} />
          </li>
        ))}
      </ul>
      <Related
        links={[
          { href: "/best/robot-mower-1-acre", label: "Which robot mower for about 1 acre?" },
          { href: "/best/robot-mower-st-augustine", label: "Which robot mower for St. Augustine grass?" },
          { href: "/best/robot-mower-for-hills", label: "What robot mower can climb my yard?" },
          { href: "/reviews/segway-navimow-x4", label: "Navimow X4 review" },
          { href: "/guides/fcc-robot-mower-ban", label: "The 2026 FCC rule" },
        ]}
      />
    </ArticleFrame>
  );
}
