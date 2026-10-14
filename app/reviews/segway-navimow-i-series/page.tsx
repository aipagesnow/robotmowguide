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
import { SupportOutlook } from "@/components/FccNote";
import { ComfortableFor, SlopeMarginNote } from "@/components/VoiceBits";
import { ProductLink } from "@/components/ProductLink";
import { SpecTable } from "@/components/SpecTable";
import { VariantTable } from "@/components/VariantTable";
import { pageMeta } from "@/lib/metadata";
import { formatAcres, risePer10Ft } from "@/lib/format";
import { modelFacts, navigationLabel } from "@/lib/products";
import { publishedSlope, slopeWithRise, specText } from "@/lib/speak";
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
      whatChanged="October 13, 2026: added the replacement note for the i105N and i110N. The i210 AWD stays the current model."
      disclosure
      status="On sale in the US as of Oct 10, 2026."
    >
      <p className="measure">
        If you're looking at the i series now, the Navimow i210 AWD replaced the i105N and i110N in October
        2026. The i210 AWD is all-wheel drive and rated {publishedSlope(i210.slope, i210.degrees)}. The i105N
        is rated {formatAcres(i105.acres)} at {i105.slope}%, and the i110N is rated{" "}
        {formatAcres(i110.acres, false)} at {i110.slope}%.
      </p>
      <p className="measure">
        If you've got a quarter acre and banks inside {i210.slope}%, the i210 AWD is the one we'd read. It's
        three-wheel all-wheel drive, with network RTK and vision, and no antenna to mount. The i206 AWD is
        the smaller current sibling, rated {formatAcres(i206.acres)}.
      </p>
      <p className="measure">
        The i105N and the i110N are the previous generation. The i110N has no confirmed amazon.com listing,
        so we wouldn't order that one by mistake.
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
            detail: <ComfortableFor rated={i210.acres} />,
          },
          {
            label: "Max slope",
            value: slopeWithRise(i210.slope, i210.degrees),
          },
          {
            label: "Passage",
            value: "Not published",
            detail: "Body width for the i210 isn't published, so we can't tell you a gate width.",
          },
          {
            label: "Navigation",
            value: navigationLabel(family.navigation),
            detail: "Network RTK and vision. The i1 models use an antenna kit. The current model doesn't.",
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
          "Navimow i210 AWD": `The current model we'd look at. Rated ${formatAcres(i210.acres)}. Network RTK, no antenna. Cut ${specText(i210.specs.cuttingHeight)}.`,
          "Navimow i206 AWD": `Current and smaller. Rated ${formatAcres(i206.acres)}. No bare listing confirmed, so there's no button.`,
          "Navimow i105N (previous generation)": `Previous generation. Rated ${formatAcres(i105.acres)}. Slope note: 10% at the boundary. It has its own listing.`,
          "Navimow i110N (previous generation)": `Previous generation. Rated ${formatAcres(i110.acres)}. Front-wheel drive and an antenna kit. No confirmed listing yet.`,
        }}
      />
      <h2>Specs we checked</h2>
      <SpecTable
        caption="Navimow i210 AWD, except where a line names an i1 model. The i210 and i105N titles were also read on Oct 13, 2026."
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
            note: "That's from the listing title.",
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
            note: "The Navimow page also says 10% (6°) at the boundary. That boundary figure isn't the interior slope.",
          },
          {
            label: "i110N cut",
            value: `${specText(i110.specs.cuttingWidth)} wide, ${specText(i110.specs.cuttingHeight)} high`,
            sources: ["navimow-i110"],
            checked: SPEC_CHECKED,
            note: "Previous generation, and you adjust the height by hand.",
          },
        ]}
      />
      <h2>Current i2, previous i1</h2>
      <p className="measure">
        The current model is the one we'd buy, and the older pair is the previous generation. The i210 is the
        quarter-acre AWD. The i206 is rated {formatAcres(i206.acres)} at the same {i206.slope}% slope, and its
        bare ASIN is empty, so it doesn't borrow the i210 button. The i105N is rated{" "}
        {formatAcres(i105.acres, false)}. The i110N is rated {formatAcres(i110.acres, false)} and is front-wheel
        drive with an antenna kit. Amazon's i105N listing is still that model. The family note says Amazon
        points at the i206 AWD as a newer version.{" "}
        <SourceLine ids={["amz-i210", "amz-i105n", "navimow-i110"]} checked="2026-10-13" />
      </p>
      <h2>Slope, including the boundary note on the i1</h2>
      <p className="measure">
        The slope we'd plan on is {i210.slope}%, a rise of {risePer10Ft(i210.slope)}. The i110N
        publishes {i110.slope}%, and the Navimow page says 10% at the boundary. Don't treat 30% as the edge
        figure. <Link href="/best/robot-mower-for-hills">Hills converter</Link>.{" "}
        <SourceLine ids={["navimow-ces26", "navimow-i110"]} checked={SPEC_CHECKED} />
      </p>
      <SlopeMarginNote />
      <h2>Trees and the antenna the i2 dropped</h2>
      <p className="measure">
        The i210 doesn't use an antenna, which is the change if you were looking at the older models.
        Network RTK still needs cell service, and canopy over the path weakens a satellite fix. The i110N
        positioning line is an EFLS antenna kit plus a camera. Heavy tree cover is a reason we'd skip this
        family. <Link href="/best/robot-mower-under-trees">Under trees</Link>.{" "}
        <SourceLine ids={["navimow-ces26", "navimow-i110"]} checked={SPEC_CHECKED} />
      </p>
      <OwnerReports
        intro="In the 1 owner thread we read in October 2026:"
        items={[
          {
            text: "Owners praise the Navimow app and describe support as responsive.",
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
        <li>The i1 models are the previous generation. Don't buy one by using the i210 button.</li>
      </ul>
      <SupportOutlook brand="Segway Navimow" />
      <p className="measure">
        The i105N and i110N are the previous generation. They're still sold, and they aren't the one we'd
        start with.
      </p>
      <p className="measure">
        A fee after a free data period isn't published for the i210. The i110N page says a 4G anti-theft
        module is an optional add-on. <SourceLine ids={["homedepot-i110n"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Two neighbors on the ladder</h2>
      <p className="measure">
        If you want the other quarter-acre RTK mower, the{" "}
        <Link href="/reviews/roborock-rockneo-q110h">RockNeo Q110H</Link> is rated {formatAcres(q.acres)}, with
        a shorter US cut. The <Link href="/reviews/mammotion-luba-mini-2-awd">LUBA mini 2 AWD 1500H</Link> is
        the step up in area and slope, rated {formatAcres(mini.acres, false)} and {mini.slope}%.
      </p>
      <Faq
        items={[
          {
            q: "Is the i105N the mower to buy?",
            a: "No. It's the previous generation, and it keeps its own button. The current lead is the i210 AWD.",
          },
          {
            q: "Why does the i110N have no button?",
            a: "No amazon.com title named the i110N exactly. That model uses the plain no-link line instead of the i210 listing.",
          },
          {
            q: "Does the i210 need an antenna?",
            a: "No. The CES note and the listing describe network RTK and vision, with no antenna. The i110N is the model that includes an antenna kit.",
          },
        ]}
      />
      <ResearchedBox
        sources={sources.map((id) => ({ id }))}
        manuals="No i210 owner's manual was in the sources. i110N figures are from the Navimow US page."
        threads="One Navimow owner thread, from the sources we read."
        questions="No manufacturer has answered questions yet."
        specsLine="i210 and i105N titles read on Oct 13, 2026. Other specs checked Oct 10, 2026."
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
