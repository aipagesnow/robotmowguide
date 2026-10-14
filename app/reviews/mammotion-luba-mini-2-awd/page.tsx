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
import { getFamily, modelFacts, navigationLabel } from "@/lib/products";
import { publishedSlope, slopeWithRise, specText } from "@/lib/speak";
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
      whatChanged="October 13, 2026: first published, after the amazon.com title for the 1500H was read."
      disclosure
      status="On sale in the US as of Oct 10, 2026."
    >
      <p className="measure">
        If your lawn is about a third of an acre, the bank is steep, and you keep the grass tall, the 1500H
        is the one we'd buy. It's rated {formatAcres(high.acres)} and {publishedSlope(high.slope, high.degrees)},
        and the cut on the confirmed listing is {specText(high.specs.cuttingHeight)}.
      </p>
      <p className="measure">
        We'd skip it for a lawn near half an acre, and we'd skip the standard 1500 if you needed the tall
        cut. That model has no confirmed amazon.com listing. Mammotion doesn't publish a US height for it.
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
      <YardPhoto id="card-luba-mini2" />
      <h2>Key numbers for your yard</h2>
      <KeyNumbers
        rows={[
          {
            label: "Rated area",
            value: formatAcres(high.acres),
            detail: (
              <>
                <ComfortableFor rated={high.acres} /> Mammotion's US product page notes 1,500 m², which is the area behind that rating.
              </>
            ),
          },
          {
            label: "Max slope",
            value: slopeWithRise(high.slope, high.degrees),
          },
          {
            label: "Cut",
            value: specText(high.specs.cuttingHeight),
            detail: "High-cut 1500H, from the amazon.com title read on Oct 13, 2026.",
          },
          {
            label: "Navigation",
            value: navigationLabel(family.navigation),
            detail: specText(high.specs.positioning),
          },
          {
            label: "After the free data",
            value: "A subscription, price not stated",
            detail: "The US page includes a 4G module with 3 years of data, then a subscription.",
          },
        ]}
      />
      <VariantTable
        family={family}
        pageType="review"
        differences={{
          "LUBA mini 2 AWD 1500H (high-cut)":
            "The one we'd start with. Confirmed listing. Cut 2.2–4.0 in. LiDAR and vision, no antenna.",
          "LUBA mini 2 AWD 1500 (standard)":
            "No confirmed amazon.com listing. A European citation lists a shorter cut, and that band isn't the US height.",
        }}
      />
      <h2>Specs we checked</h2>
      <SpecTable
        caption="LUBA mini 2 AWD 1500H figures. The listing title was read on Oct 13, 2026. The other figures were checked Oct 10, 2026."
        rows={[
          {
            label: "Rated area",
            value: formatAcres(high.acres),
            sources: ["mammotion-mini2", "amz-mini2-1500h"],
            checked: "2026-10-13",
            href: "/guides/how-big-a-robot-mower-do-i-need",
            note: "Mammotion's US product page notes 1,500 m², which is the area behind that rating.",
          },
          {
            label: "Max slope",
            value: publishedSlope(high.slope, high.degrees),
            sources: ["mammotion-mini2"],
            checked: SPEC_CHECKED,
            href: "/best/robot-mower-for-hills",
            note: "Degrees are the published 38.6°, not a figure we worked out ourselves.",
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
            note: "1500H only. The standard 1500 isn't given a US height.",
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
        {formatAcres(high.acres)} is the rating we'd match to your lawn. <ComfortableFor rated={high.acres} />{" "}
        A flat quarter acre is a comfortable fit. A half acre isn't. {high.slope}% is the bank, a rise of{" "}
        {risePer10Ft(high.slope)}. <Link href="/best/robot-mower-small-yard">Small-yard picks</Link> and{" "}
        <Link href="/best/robot-mower-for-hills">the hills page</Link>.{" "}
        <SourceLine ids={["mammotion-mini2", "amz-mini2-1500h"]} checked="2026-10-13" />
      </p>
      <SlopeMarginNote />
      <h2>Tall grass and the two versions</h2>
      <p className="measure">
        The 1500H cuts {specText(high.specs.cuttingHeight)}, which is the band to read if you keep the grass
        tall. That's the one for St. Augustine or summer fescue kept long. The standard 1500
        {standard?.specs?.cuttingHeight
          ? " has a shorter band in a European citation"
          : " doesn't have a published US height"}
        . We won't treat that European band as the US height until a US page is the source.{" "}
        <SourceLine ids={["amz-mini2-1500h", "mammotion-mini2"]} checked="2026-10-13" />
      </p>
      <h2>Trees, without an antenna</h2>
      <p className="measure">
        If trees cover the path, you don't mount an antenna. Positioning is {specText(high.specs.positioning)}.
        There's no RTK antenna to mount. LiDAR is why we'd compare it with a network-RTK mower when canopy
        covers your path. <Link href="/best/robot-mower-under-trees">Mowing under trees</Link>.{" "}
        <SourceLine ids={["mammotion-mini2"]} checked={SPEC_CHECKED} />
      </p>
      <h2>What owners report</h2>
      <OwnerReports
        intro="In the 2 owner threads we read in October 2026:"
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
        <li>If you need the side-passage width in writing, it isn't published.</li>
      </ul>
      <SupportOutlook brand="Mammotion" />
      <p className="measure">
        {family.connectivityCost ? String(family.connectivityCost.value) : "A fee after the free period isn't published."}{" "}
        <SourceLine ids={["mammotion-mini2"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Two neighbors on the ladder</h2>
      <p className="measure">
        If your yard is smaller and gentler, the <Link href="/reviews/segway-navimow-i-series">Navimow i210 AWD</Link>{" "}
        is rated {formatAcres(i210.acres)} and {i210.slope}%. If the lawn outgrows a third of an acre, the{" "}
        <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD 3000</Link> is rated {formatAcres(luba.acres, false)}.
      </p>
      <Faq
        items={[
          {
            q: "Is the mini 2 the same mower as the LUBA 3?",
            a: "No. The mini 2 1500H is rated 0.37 acre. The LUBA 3 AWD 3000 is rated 0.75 acre and adds network RTK on that model.",
          },
          {
            q: "Which version cuts tall grass?",
            a: "The 1500H. Its listing says 2.2–4.0 in. The standard 1500 doesn't have a confirmed listing or a published US height.",
          },
          {
            q: "Does it need an antenna?",
            a: "No. The Mammotion US page describes 360° LiDAR and dual-camera vision, with no wire and no antenna.",
          },
        ]}
      />
      <ResearchedBox
        sources={sources.map((id) => ({ id }))}
        manuals="No owner's manual was in the sources. Height for the 1500H is the listing title."
        threads="We read two Mammotion owner threads in October 2026."
        questions="No manufacturer has answered questions yet."
        specsLine="Listing title read on Oct 13, 2026. Other specs checked Oct 10, 2026."
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
