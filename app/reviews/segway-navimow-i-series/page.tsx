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
  StatusLine,
} from "@/components/Blocks";
import { FccWaiver, NoConditionalApproval } from "@/components/FccNote";
import { ProductLink } from "@/components/ProductLink";
import { SpecTable } from "@/components/SpecTable";
import { VariantTable } from "@/components/VariantTable";
import { pageMeta } from "@/lib/metadata";
import { formatAcres, formatDate } from "@/lib/format";
import { modelFacts, navigationLabel } from "@/lib/products";
import { interiorOrBoundary, publishedSlope, realisticLine, slopeWithRise, specText } from "@/lib/speak";
import { RECHECKED, SPEC_CHECKED } from "@/lib/site";

const title = "Navimow i series review: i2 AWD now, i1 still sold";
const description =
  "The Navimow i210 AWD is rated for 0.25 acre and 45% (24°). The i105N and i110N are the previous generation and stay on this page with their own status.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/reviews/segway-navimow-i-series",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Reviews", path: "/reviews" },
  { name: "Navimow i series", path: "/reviews/segway-navimow-i-series" },
];

const sources = ["amz-i210", "navimow-ces26", "navimow-i-series", "amz-i105n", "navimow-i110", "homedepot-i110n"];

export default function ISeriesReview() {
  const i210 = modelFacts("segway-navimow-i2-awd", "Navimow i210 AWD");
  const i206 = modelFacts("segway-navimow-i2-awd", "Navimow i206 AWD");
  const i105 = modelFacts("segway-navimow-i2-awd", "Navimow i105N (previous generation)");
  const i110 = modelFacts("segway-navimow-i2-awd", "Navimow i110N (previous generation)");
  const family = i210.family;
  const q = modelFacts("roborock-rockneo-q110h", "RockNeo Q110H");
  const mini = modelFacts("mammotion-luba-mini-2-awd", "LUBA mini 2 AWD 1500H (high-cut)");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/reviews/segway-navimow-i-series"
      crumbs={crumbs}
      updated={RECHECKED}
      whatChanged="October 13, 2026: first published. The i210 AWD and i105N listings were rechecked, and the i1 rows keep the superseded status."
      disclosure
    >
      <StatusLine>
        <p>The i210 AWD is on sale in the US as of {formatDate(family.statusDate)}.</p>
        <p>The i105N and i110N are the previous generation. They are still sold, and they are not the lead.</p>
        <p>
          <NoConditionalApproval brand="Segway Navimow" />
        </p>
      </StatusLine>
      <p className="measure">
        Read the i210 AWD for a quarter acre and banks inside {publishedSlope(i210.slope, i210.degrees)}. It
        is three-wheel all-wheel drive, with network RTK and vision, and no antenna to mount. The i206 AWD
        is the smaller current sibling, rated {formatAcres(i206.acres)}.
      </p>
      <p className="measure">
        The i105N and the i110N are the previous generation. Each row has its own status line. The i110N has
        no confirmed amazon.com listing, so that row is the plain no-link line.
      </p>
      <CtaCluster>
        <ProductLink
          asin={i210.variant.asin}
          model="Navimow i210 AWD"
          productSlug={family.slug}
          placement="verdict"
          pageType="review"
        />
      </CtaCluster>
      <YardPhoto id="card-navimow-i" />
      <h2>Key numbers for your yard</h2>
      <KeyNumbers
        rows={[
          {
            label: "Rated area",
            value: formatAcres(i210.acres),
            detail: realisticLine(i210.acres),
          },
          {
            label: "Max slope",
            value: slopeWithRise(i210.slope, i210.degrees),
            detail: interiorOrBoundary(),
          },
          {
            label: "Passage",
            value: "Not published",
            detail: "No body width for the i210 was on the sheets we checked.",
          },
          {
            label: "Navigation",
            value: navigationLabel(family.navigation),
            detail: "Network RTK and vision. The i1 models use an antenna kit.",
          },
          {
            label: "Cut",
            value: specText(i210.specs.cuttingHeight),
            detail: `${specText(i210.specs.zones)}. Battery ${specText(i210.specs.battery)}.`,
          },
        ]}
      />
      <VariantTable
        family={family}
        pageType="review"
        differences={{
          "Navimow i210 AWD": `Current lead. Rated ${formatAcres(i210.acres)}. Network RTK, no antenna. Cut ${specText(i210.specs.cuttingHeight)}.`,
          "Navimow i206 AWD": `Current, smaller. Rated ${formatAcres(i206.acres)}. No bare listing confirmed, so this row has no button.`,
          "Navimow i105N (previous generation)": `Previous generation. Rated ${formatAcres(i105.acres)}. Slope note: 10% at the boundary. Its own listing.`,
          "Navimow i110N (previous generation)": `Previous generation. Rated ${formatAcres(i110.acres)}. Front-wheel drive and an antenna kit. No confirmed listing.`,
        }}
      />
      <h2>Specs we checked</h2>
      <SpecTable
        caption="Navimow i210 AWD, except rows that name an i1 model. The i210 and i105N titles were rechecked Oct 13, 2026."
        rows={[
          {
            label: "i210 rated area",
            value: formatAcres(i210.acres),
            sources: ["amz-i210", "navimow-ces26"],
            checked: "2026-10-13",
            href: "/best/robot-mower-small-yard",
          },
          {
            label: "i210 max slope",
            value: publishedSlope(i210.slope, i210.degrees),
            sources: ["navimow-ces26", "amz-i210"],
            checked: "2026-10-13",
            href: "/best/robot-mower-for-hills",
            note: interiorOrBoundary(),
          },
          {
            label: "i210 navigation",
            value: specText(i210.specs.positioning),
            sources: ["navimow-ces26"],
            checked: SPEC_CHECKED,
            href: "/guides/rtk-vs-lidar-vs-vision",
          },
          {
            label: "i210 cutting height",
            value: specText(i210.specs.cuttingHeight),
            sources: ["amz-i210"],
            checked: "2026-10-13",
            note: "From the listing title.",
          },
          {
            label: "i210 drive",
            value: specText(i210.specs.drive),
            sources: ["navimow-ces26"],
            checked: SPEC_CHECKED,
          },
          {
            label: "i110N slope",
            value: publishedSlope(i110.slope, i110.degrees),
            sources: ["navimow-i110"],
            checked: SPEC_CHECKED,
            note: "The sheet also says 10% (6°) at the boundary. That boundary figure is not the interior.",
          },
          {
            label: "i110N cut",
            value: `${specText(i110.specs.cuttingWidth)} wide, ${specText(i110.specs.cuttingHeight)} high`,
            sources: ["navimow-i110"],
            checked: SPEC_CHECKED,
            note: "Previous generation. Manual height adjustment.",
          },
        ]}
      />
      <h2>Current i2, previous i1</h2>
      <p className="measure">
        The i210 is the quarter-acre AWD. The i206 is rated {formatAcres(i206.acres)} at the same {i206.slope}%
        slope, and its bare ASIN is empty, so the variant table does not borrow the i210 button. The i105N is
        rated {formatAcres(i105.acres)}. The i110N is rated {formatAcres(i110.acres)} and is front-wheel drive
        with an antenna kit. Amazon’s i105N listing is still that model. The family note says Amazon points
        at the i206 AWD as a newer version. <SourceLine ids={["amz-i210", "amz-i105n", "navimow-i110"]} checked="2026-10-13" />
      </p>
      <h2>Slope, including the boundary note on the i1</h2>
      <p className="measure">
        {slopeWithRise(i210.slope, i210.degrees)}. {interiorOrBoundary()} The i110N publishes{" "}
        {publishedSlope(i110.slope, i110.degrees)}, and the same sheet says 10% at the boundary. Do not treat
        30% as the edge figure. <Link href="/best/robot-mower-for-hills">Hills converter</Link>.{" "}
        <SourceLine ids={["navimow-ces26", "navimow-i110"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Trees and the antenna the i2 dropped</h2>
      <p className="measure">
        The i210 does not use an antenna. Network RTK still needs cell service, and canopy over the path
        weakens a satellite fix. The i110N positioning line is an EFLS antenna kit plus a camera. Heavy tree
        cover is on the skip list for this family. <Link href="/best/robot-mower-under-trees">Under trees</Link>.{" "}
        <SourceLine ids={["navimow-ces26", "navimow-i110"]} checked={SPEC_CHECKED} />
      </p>
      <OwnerReports
        intro="One owner thread was in the set we re-opened. It is a short record, and it is not a survey of the i210."
        items={[
          {
            text: "In the thread we read, the writer praises the Navimow app and describes support as responsive.",
            href: "https://www.reddit.com/r/SegwayNavimow/comments/1vgvkkq/",
            linkLabel: "Navimow owner thread",
          },
        ]}
      />
      <h2>Honest limits</h2>
      <ul className="grid gap-2 pl-5">
        {family.notFor?.map((item) => (
          <li key={item}>{item}</li>
        ))}
        <li>The i1 rows are previous generation. Do not buy one by using the i210 button.</li>
      </ul>
      <h2>Support</h2>
      <p className="measure">
        A fee after a free data period is not published for the i210. The i110N sheet says a 4G anti-theft
        module is an optional add-on. <FccWaiver /> <SourceLine ids={["homedepot-i110n"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Two neighbors on the ladder</h2>
      <p className="measure">
        The <Link href="/reviews/roborock-rockneo-q110h">RockNeo Q110H</Link> is the other quarter-acre RTK
        mower, rated {formatAcres(q.acres)}, with a shorter US cut. The{" "}
        <Link href="/reviews/mammotion-luba-mini-2-awd">LUBA mini 2 AWD 1500H</Link> is the step up in area
        and slope, rated {formatAcres(mini.acres)} and {publishedSlope(mini.slope, mini.degrees)}.
      </p>
      <Faq
        items={[
          {
            q: "Is the i105N the mower to buy?",
            a: "It is the previous generation. The variant table says so, and it keeps its own button. The current lead is the i210 AWD.",
          },
          {
            q: "Why does the i110N have no button?",
            a: "No amazon.com title we checked named the i110N exactly. The row uses the plain no-link line instead of the i210 listing.",
          },
          {
            q: "Does the i210 need an antenna?",
            a: "The CES note and the listing describe network RTK and vision, with no antenna. The i110N is the row that includes an antenna kit.",
          },
        ]}
      />
      <ResearchedBox
        sources={sources.map((id) => ({ id }))}
        manuals="No i210 owner's manual was in the source list. i110N figures are from the Navimow US page."
        threads="One Navimow owner thread, re-opened for this page."
        questions="No manufacturer questions have been answered yet."
        specsLine="i210 and i105N titles rechecked Oct 13, 2026. Other specs checked Oct 10, 2026."
      />
      <EndLinks
        pageType="review"
        links={[
          { asin: i210.variant.asin, model: "Navimow i210 AWD", productSlug: family.slug },
          {
            asin: i105.variant.asin,
            model: "Navimow i105N",
            productSlug: family.slug,
            status: i105.variant.status,
          },
          { asin: q.variant.asin, model: "RockNeo Q110H", productSlug: q.family.slug },
        ]}
      />
      <h2>Sources</h2>
      <ul className="grid gap-2 pl-5">
        {sources.map((id) => (
          <li key={id}>
            <SourceLine ids={[id]} checked={id.startsWith("amz") ? "2026-10-13" : SPEC_CHECKED} />
          </li>
        ))}
      </ul>
      <Related
        links={[
          { href: "/best", label: "Best robot lawn mowers for US yards" },
          { href: "/best/robot-mower-small-yard", label: "Which robot mower for a small yard?" },
          { href: "/reviews/segway-navimow-x4", label: "Navimow X4 review" },
        ]}
      />
    </ArticleFrame>
  );
}
