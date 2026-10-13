import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
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
import { getFamily, modelFacts, navigationLabel } from "@/lib/products";
import { interiorOrBoundary, publishedSlope, realisticLine, slopeWithRise, specText } from "@/lib/speak";
import { RECHECKED, SPEC_CHECKED } from "@/lib/site";

const title = "LUBA mini 2 AWD review: a small yard with a steep bank";
const description =
  "The LUBA mini 2 AWD 1500H is rated for 0.37 acre and 80% (38.6°), with a high cut of 2.2–4.0 in and LiDAR plus vision.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/reviews/mammotion-luba-mini-2-awd",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Reviews", path: "/reviews" },
  { name: "LUBA mini 2 AWD", path: "/reviews/mammotion-luba-mini-2-awd" },
];

const sources = ["mammotion-mini2", "amz-mini2-1500h"];

export default function MiniReview() {
  const high = modelFacts("mammotion-luba-mini-2-awd", "LUBA mini 2 AWD 1500H (high-cut)");
  const family = high.family;
  const standard = family.variants.find((item) => item.model.startsWith("LUBA mini 2 AWD 1500 ("));
  const i210 = modelFacts("segway-navimow-i2-awd", "Navimow i210 AWD");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/reviews/mammotion-luba-mini-2-awd"
      crumbs={crumbs}
      updated={RECHECKED}
      whatChanged="October 13, 2026: first published, after the amazon.com title for the 1500H was rechecked."
      disclosure
    >
      <StatusLine>
        <p>On sale in the US as of {formatDate(family.statusDate)}.</p>
        <p>
          The listing rechecked on Oct 13, 2026 still names the LUBA mini 2 1500H, 0.37 acre, cutting height
          2.2–4.0 in.
        </p>
        <p>
          <NoConditionalApproval brand="Mammotion" />
        </p>
      </StatusLine>
      <p className="measure">
        Buy the 1500H when the lawn is about a third of an acre, the bank is steep, and the grass is kept
        tall. It is rated {formatAcres(high.acres)} and {publishedSlope(high.slope, high.degrees)}, and the
        cut on the confirmed listing is {specText(high.specs.cuttingHeight)}.
      </p>
      <p className="measure">
        Skip it for a lawn near half an acre, and skip the standard 1500 if you needed the tall cut. That
        row has no confirmed amazon.com listing, and this page does not print a US height for it.
      </p>
      <CtaCluster>
        <ProductLink
          asin={high.variant.asin}
          model="LUBA mini 2 AWD 1500H"
          productSlug={family.slug}
          placement="verdict"
          pageType="review"
        />
      </CtaCluster>
      <h2>Key numbers for your yard</h2>
      <KeyNumbers
        rows={[
          {
            label: "Rated area",
            value: formatAcres(high.acres),
            detail: `${realisticLine(high.acres)} The sheet notes 1,500 m².`,
          },
          {
            label: "Max slope",
            value: slopeWithRise(high.slope, high.degrees),
            detail: interiorOrBoundary(),
          },
          {
            label: "Cut",
            value: specText(high.specs.cuttingHeight),
            detail: "High-cut 1500H, from the amazon.com title rechecked Oct 13, 2026.",
          },
          {
            label: "Navigation",
            value: navigationLabel(family.navigation),
            detail: specText(high.specs.positioning),
          },
          {
            label: "After the free data",
            value: "A subscription, price not stated",
            detail: "The US page includes a 4G module with 3 years of data.",
          },
        ]}
      />
      <VariantTable
        family={family}
        pageType="review"
        differences={{
          "LUBA mini 2 AWD 1500H (high-cut)":
            "The model this review follows. Confirmed listing. Cut 2.2–4.0 in. LiDAR and vision, no antenna.",
          "LUBA mini 2 AWD 1500 (standard)":
            "No confirmed amazon.com listing. A European citation lists a shorter cut. This page does not use that band as the US height.",
        }}
      />
      <h2>Specs we checked</h2>
      <SpecTable
        caption="LUBA mini 2 AWD 1500H figures. The listing title was rechecked Oct 13, 2026. Other rows were checked Oct 10, 2026."
        rows={[
          {
            label: "Rated area",
            value: formatAcres(high.acres),
            sources: ["mammotion-mini2", "amz-mini2-1500h"],
            checked: "2026-10-13",
            href: "/guides/how-big-a-robot-mower-do-i-need",
            note: "1,500 m² on the sheet.",
          },
          {
            label: "Max slope",
            value: publishedSlope(high.slope, high.degrees),
            sources: ["mammotion-mini2"],
            checked: SPEC_CHECKED,
            href: "/best/robot-mower-for-hills",
            note: `${interiorOrBoundary()} Degrees are the published 38.6°.`,
          },
          {
            label: "Navigation",
            value: specText(high.specs.positioning),
            sources: ["mammotion-mini2"],
            checked: SPEC_CHECKED,
            href: "/guides/rtk-vs-lidar-vs-vision",
          },
          {
            label: "Cutting height",
            value: specText(high.specs.cuttingHeight),
            sources: ["amz-mini2-1500h"],
            checked: "2026-10-13",
            note: "1500H only. The standard 1500 row is not given a US height on this page.",
          },
          {
            label: "Cutting width",
            value: specText(high.specs.cuttingWidth),
            sources: ["mammotion-mini2"],
            checked: SPEC_CHECKED,
            note: "Main disc about 200 mm, plus a fixed edge disc.",
          },
          {
            label: "Edges",
            value: specText(high.specs.edgeCutting),
            sources: ["mammotion-mini2"],
            checked: SPEC_CHECKED,
          },
          {
            label: "Zones",
            value: specText(high.specs.zones),
            sources: ["mammotion-mini2", "amz-mini2-1500h"],
            checked: SPEC_CHECKED,
          },
          {
            label: "Battery",
            value: specText(high.specs.battery),
            sources: ["mammotion-mini2"],
            checked: SPEC_CHECKED,
          },
          {
            label: "Drive",
            value: specText(high.specs.drive),
            sources: ["mammotion-mini2"],
            checked: SPEC_CHECKED,
          },
        ]}
      />
      <h2>A third of an acre, and the bank</h2>
      <p className="measure">
        {formatAcres(high.acres)} is the rating. {realisticLine(high.acres)} A flat quarter acre is a
        comfortable fit. A half acre is not. {slopeWithRise(high.slope, high.degrees)}.{" "}
        {interiorOrBoundary()} <Link href="/best/robot-mower-small-yard">Small-yard picks</Link> and{" "}
        <Link href="/best/robot-mower-for-hills">the hills page</Link>.{" "}
        <SourceLine ids={["mammotion-mini2", "amz-mini2-1500h"]} checked="2026-10-13" />
      </p>
      <h2>Tall grass and the two versions</h2>
      <p className="measure">
        The 1500H cuts {specText(high.specs.cuttingHeight)}. That is the band to read for St. Augustine or
        summer fescue kept long. The standard 1500
        {standard?.specs?.cuttingHeight
          ? " has a shorter band in a European citation"
          : " does not have a height on this sheet"}
        . This page leaves that band off the US spec table until the US page is the source.{" "}
        <SourceLine ids={["amz-mini2-1500h", "mammotion-mini2"]} checked="2026-10-13" />
      </p>
      <h2>Trees, without an antenna</h2>
      <p className="measure">
        Positioning is {specText(high.specs.positioning)}. There is no RTK antenna to mount. LiDAR is the
        reason to compare it with a network-RTK mower when canopy covers the path.{" "}
        <Link href="/best/robot-mower-under-trees">Mowing under trees</Link>.{" "}
        <SourceLine ids={["mammotion-mini2"]} checked={SPEC_CHECKED} />
      </p>
      <h2>What owners report</h2>
      <OwnerReports
        intro="Two threads were open for this check, read in 2026. That is a short record for a new model."
        items={[
          {
            text: "A new owner on sandy Bahia grass in Florida says the tank-style turns tore thin shaded edges, and they remapped to keep the mower off those strips.",
            href: "https://www.reddit.com/r/MammotionTechnology/comments/1sxiz3u/",
            linkLabel: "LUBA mini 2 turn thread",
          },
          {
            text: "In another thread, owners ask where a promised firmware update is.",
            href: "https://www.reddit.com/r/MammotionTechnology/comments/1w23n3o/",
            linkLabel: "Firmware thread",
          },
        ]}
      />
      <h2>Honest limits</h2>
      <ul className="grid gap-2 pl-5">
        {getFamily("mammotion-luba-mini-2-awd").notFor?.map((item) => (
          <li key={item}>{item}</li>
        ))}
        <li>A side-passage width is not published, so this page does not guess one.</li>
      </ul>
      <h2>Data and support</h2>
      <p className="measure">
        {family.connectivityCost ? String(family.connectivityCost.value) : "A fee after the free period is not published."}{" "}
        <FccWaiver /> <SourceLine ids={["mammotion-mini2"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Two neighbors on the ladder</h2>
      <p className="measure">
        The <Link href="/reviews/segway-navimow-i-series">Navimow i210 AWD</Link> is rated{" "}
        {formatAcres(i210.acres)} and {publishedSlope(i210.slope, i210.degrees)}. It is the smaller, gentler
        yard. The <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD 3000</Link> is rated{" "}
        {formatAcres(luba.acres)} when the lawn outgrows a third of an acre.
      </p>
      <Faq
        items={[
          {
            q: "Is the mini 2 the same mower as the LUBA 3?",
            a: "No. The mini 2 1500H is rated 0.37 acre. The LUBA 3 AWD 3000 is rated 0.75 acre and adds network RTK on that row.",
          },
          {
            q: "Which version cuts tall grass?",
            a: "The 1500H listing says 2.2–4.0 in. The standard 1500 does not have a confirmed listing, and this page does not assign it a US height.",
          },
          {
            q: "Does it need an antenna?",
            a: "The Mammotion US page describes 360° LiDAR and dual-camera vision, with no wire and no antenna.",
          },
        ]}
      />
      <ResearchedBox
        sources={sources.map((id) => ({ id }))}
        manuals="No owner's manual was in the source list. Height for the 1500H is the listing title."
        threads="Two Mammotion owner threads, read for the October 13, 2026 check."
        questions="No manufacturer questions have been answered yet."
        specsLine="Listing title rechecked Oct 13, 2026. Other specs checked Oct 10, 2026."
      />
      <EndLinks
        pageType="review"
        links={[
          { asin: high.variant.asin, model: "LUBA mini 2 AWD 1500H", productSlug: family.slug },
          { asin: i210.variant.asin, model: "Navimow i210 AWD", productSlug: i210.family.slug },
          { asin: luba.variant.asin, model: "LUBA 3 AWD 3000", productSlug: luba.family.slug },
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
          { href: "/best/robot-mower-small-yard", label: "Which robot mower for a small yard?" },
          { href: "/best/robot-mower-for-hills", label: "What robot mower can climb my yard?" },
          { href: "/reviews/mammotion-luba-3-awd", label: "LUBA 3 AWD review" },
        ]}
      />
    </ArticleFrame>
  );
}
