import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import {
  CtaCluster,
  Faq,
  KeyNumbers,
  OwnerReports,
  QuickPick,
  Related,
  ResearchedBox,
  SourceLine,
  StatusLine,
} from "@/components/Blocks";
import { NoConditionalApproval } from "@/components/FccNote";
import { FinderEmbed } from "@/components/FinderEmbed";
import { Ladder } from "@/components/Ladder";
import { ProductLink } from "@/components/ProductLink";
import { pageMeta } from "@/lib/metadata";
import { formatAcres } from "@/lib/format";
import { getFamily, modelFacts, navigationLabel } from "@/lib/products";
import { interiorOrBoundary, publishedSlope, realisticLine, slopeWithRise, specText } from "@/lib/speak";
import { RECHECKED, SPEC_CHECKED } from "@/lib/site";

const title = "Best robot lawn mowers for US yards";
const description =
  "Five robot mowers for US yards from a quarter acre to an acre, ranked by rated area and then by slope.";

export const metadata: Metadata = pageMeta({ title, description, path: "/best" });

const researched = [
  "navimow-ces26",
  "amz-i210",
  "dreame-a3",
  "mammotion-luba3",
  "mammotion-luba3-sku",
  "mammotion-luba3-global",
  "amz-luba3-3000",
  "worx-vision-cloud",
  "worx-wr344-support",
  "amz-wr344",
  "wirecutter",
  "navimow-x4",
  "homedepot-x430",
  "amz-x430",
  "husq-420iq",
  "husq-410iq",
];

export default function BestPage() {
  const i210 = modelFacts("segway-navimow-i2-awd", "Navimow i210 AWD");
  const dreame = modelFacts("dreame-a3-awd-pro", "A3 AWD Pro 2500");
  const dreameFamily = getFamily("dreame-a3-awd-pro");
  const d3500 = dreameFamily.variants.find((item) => item.model === "A3 AWD Pro 3500");
  const d5000 = dreameFamily.variants.find((item) => item.model === "A3 AWD Pro 5000");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");
  const worx = modelFacts("worx-landroid-vision-cloud", "Landroid Vision Cloud WR340 (1 acre, 2WD)");
  const wr344 = modelFacts("worx-landroid-vision-cloud", "Landroid Vision Cloud 4WD WR344 (1 acre)");
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");
  const x450 = getFamily("segway-navimow-x4").variants.find((item) => item.model === "Navimow X450");
  const iq420 = modelFacts("husqvarna-automower-iq", "Automower 420 iQ");

  const columns = [
    {
      name: "Navimow i210 AWD",
      href: "#navimow-i210",
      bestFor: "A flat quarter acre",
      area: formatAcres(i210.acres),
      slope: `${publishedSlope(i210.slope, i210.degrees)}. ${interiorOrBoundary()}`,
      nav: navigationLabel(i210.family.navigation),
      height: specText(i210.specs.cuttingHeight),
      edge: "Not published",
      asin: i210.variant.asin,
      slug: i210.family.slug,
      model: "Navimow i210 AWD",
    },
    {
      name: "Dreame A3 AWD Pro 2500",
      href: "#dreame-a3-2500",
      bestFor: "About 0.62 acre, trees, steep banks",
      area: formatAcres(dreame.acres),
      slope: `${publishedSlope(dreame.slope, dreame.degrees)}. ${interiorOrBoundary()}`,
      nav: navigationLabel(dreame.family.navigation),
      height: specText(dreame.specs.cuttingHeight),
      edge: specText(dreame.specs.edgeCutting),
      asin: dreame.variant.asin,
      slug: dreame.family.slug,
      model: "Dreame A3 AWD Pro 2500",
    },
    {
      name: "LUBA 3 AWD 3000",
      href: "#luba-3-3000",
      bestFor: "About 0.75 acre under trees",
      area: formatAcres(luba.acres),
      slope: `${publishedSlope(luba.slope, luba.degrees)}. ${interiorOrBoundary()}`,
      nav: navigationLabel(luba.family.navigation),
      height: specText(luba.specs.cuttingHeight),
      edge: "Not published",
      asin: luba.variant.asin,
      slug: luba.family.slug,
      model: "LUBA 3 AWD 3000",
    },
    {
      name: "Worx WR340",
      href: "#worx-wr340",
      bestFor: "An open acre, gentler slopes",
      area: formatAcres(worx.acres),
      slope: `${publishedSlope(worx.slope, worx.degrees)}. ${interiorOrBoundary()}`,
      nav: navigationLabel(worx.family.navigation),
      height: specText(worx.specs.cuttingHeight),
      edge: "Not published",
      asin: worx.variant.asin,
      slug: worx.family.slug,
      model: "Landroid Vision Cloud WR340",
    },
    {
      name: "Navimow X430",
      href: "#navimow-x430",
      bestFor: "An open acre with steep banks",
      area: formatAcres(x430.acres),
      slope: `${publishedSlope(x430.slope, x430.degrees)}. ${interiorOrBoundary()}`,
      nav: navigationLabel(x430.family.navigation),
      height: specText(x430.specs.cuttingHeight),
      edge: "Not published",
      asin: x430.variant.asin,
      slug: x430.family.slug,
      model: "Navimow X430",
    },
  ];

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/best"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Best", path: "/best" },
      ]}
      whatChanged="October 13, 2026: linked the WR147 and Automower iQ reviews, the grass pages, and the new guides."
      disclosure
    >
      <p className="measure">
        For a US yard between a quarter acre and an acre, start with rated area, then slope. The five picks
        are the Navimow i210 AWD, the Dreame A3 AWD Pro 2500, the LUBA 3 AWD 3000, the Worx Landroid Vision
        Cloud WR340, and the Navimow X430. Figures below were checked on Oct 10, 2026. We have not tested
        these mowers.
      </p>
      <QuickPick
        pageType="best"
        items={[
          {
            yard: `Up to ${formatAcres(i210.acres, false)}, banks to ${publishedSlope(i210.slope, i210.degrees)}`,
            model: "Navimow i210 AWD",
            href: "/best#navimow-i210",
            asin: i210.variant.asin,
            productSlug: i210.family.slug,
          },
          {
            yard: `About ${formatAcres(dreame.acres, false)}, trees and steep banks`,
            model: "Dreame A3 AWD Pro 2500",
            href: "/best#dreame-a3-2500",
            asin: dreame.variant.asin,
            productSlug: dreame.family.slug,
          },
          {
            yard: `About ${formatAcres(luba.acres, false)} under trees`,
            model: "LUBA 3 AWD 3000",
            href: "/best#luba-3-3000",
            asin: luba.variant.asin,
            productSlug: luba.family.slug,
          },
          {
            yard: `An open acre, banks to ${publishedSlope(worx.slope, worx.degrees)}`,
            model: "Worx Landroid Vision Cloud WR340",
            href: "/best#worx-wr340",
            asin: worx.variant.asin,
            productSlug: worx.family.slug,
          },
          {
            yard: `An open acre, banks to ${publishedSlope(x430.slope, x430.degrees)}`,
            model: "Navimow X430",
            href: "/best#navimow-x430",
            asin: x430.variant.asin,
            productSlug: x430.family.slug,
          },
        ]}
      />
      <YardPhoto id="hero-best" />
      <div className="mt-6">
        <FinderEmbed />
      </div>
      <details className="mt-6">
        <summary>On this page</summary>
        <ul className="grid gap-2 pl-5">
          <li><a href="#ladder">Ladder</a></li>
          <li><a href="#compare">Comparison table</a></li>
          <li><a href="#navimow-i210">Navimow i210 AWD</a></li>
          <li><a href="#dreame-a3-2500">Dreame A3 AWD Pro 2500</a></li>
          <li><a href="#luba-3-3000">LUBA 3 AWD 3000</a></li>
          <li><a href="#worx-wr340">Worx WR340</a></li>
          <li><a href="#navimow-x430">Navimow X430</a></li>
          <li><a href="#how-to-choose">How to choose</a></li>
          <li><a href="#questions">Questions</a></li>
        </ul>
      </details>
      <div id="ladder">
        <Ladder />
      </div>
      <p className="measure">
        Husqvarna rates the Automower 420 iQ at {formatAcres(iq420.acres)} and{" "}
        {publishedSlope(iq420.slope, iq420.degrees)}, and 15% at the boundary. The same page says 0.5 acre
        for an irregular lawn and 1 acre for systematic mowing. The 410 iQ area note is ±20%. Neither iQ
        model had a confirmed amazon.com listing at the check, so this page does not put an Amazon button on
        them. The write-up is the <Link href="/reviews/husqvarna-automower-iq">Automower iQ review</Link>.{" "}
        <SourceLine ids={["husq-420iq", "husq-410iq"]} checked={SPEC_CHECKED} />
      </p>
      <h2 id="compare">Comparison</h2>
      <CtaCluster>
        <div className="table-scroll">
          <p className="scroll-cue">Swipe sideways to read every column.</p>
          <table className="data">
            <caption>
              Five picks compared by the yard they suit. Area, slope, and cutting height checked Oct 10, 2026.
            </caption>
            <thead>
              <tr>
                <th scope="col">Figure</th>
                {columns.map((col) => (
                  <th scope="col" key={col.name}>
                    <a href={col.href}>{col.name}</a>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Best for</th>
                {columns.map((col) => (
                  <td key={col.name}>{col.bestFor}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Rated area</th>
                {columns.map((col) => (
                  <td key={col.name} className="dim">{col.area}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Max slope</th>
                {columns.map((col) => (
                  <td key={col.name}>{col.slope}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Navigation</th>
                {columns.map((col) => (
                  <td key={col.name}>{col.nav}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Cutting height</th>
                {columns.map((col) => (
                  <td key={col.name} className="dim">{col.height}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Edge</th>
                {columns.map((col) => (
                  <td key={col.name}>{col.edge}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Amazon</th>
                {columns.map((col) => (
                  <td key={col.name}>
                    <ProductLink
                      asin={col.asin}
                      model={col.model}
                      productSlug={col.slug}
                      placement="table"
                      pageType="best"
                      compact
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </CtaCluster>
      <section id="navimow-i210">
        <h2>1. Navimow i210 AWD</h2>
        <p className="measure">
          The quarter-acre pick when the banks stay within {publishedSlope(i210.slope, i210.degrees)} and you
          do not want an antenna in the yard. It is three-wheel all-wheel drive, with network RTK and vision.{" "}
          <SourceLine ids={["navimow-ces26"]} checked={SPEC_CHECKED} />
        </p>
        <KeyNumbers
          rows={[
            { label: "Rated area", value: formatAcres(i210.acres), detail: realisticLine(i210.acres) },
            {
              label: "Max slope",
              value: slopeWithRise(i210.slope, i210.degrees),
              detail: interiorOrBoundary(),
            },
            { label: "Passage", value: "Not published", detail: "No body width was on the sheets we checked." },
            {
              label: "Navigation",
              value: "Network RTK and vision, no antenna",
              detail: "A connectivity fee after a free period is not published for the i210.",
            },
            {
              label: "Cut and zones",
              value: `${specText(i210.specs.cuttingHeight)}, ${specText(i210.specs.zones)}, battery ${specText(i210.specs.battery)}`,
              detail: "Cutting height, zones, and battery are from the amazon.com listing text, including the listing title for the height. Checked Oct 10, 2026.",
            },
          ]}
        />
        <p className="measure">
          The i105N and i110N are the previous generation. The i105N listing points to the i206 AWD as a
          newer version. This page does not add Amazon buttons for those older models. The family write-up
          is the <Link href="/reviews/segway-navimow-i-series">Navimow i series review</Link>. The i210 is
          the one rated {formatAcres(i210.acres)} at {publishedSlope(i210.slope, i210.degrees)}.
        </p>
        <h3>Who it is not for</h3>
        <ul className="grid gap-2 pl-5">
          <li>A yard over a quarter acre.</li>
          <li>Heavy tree cover.</li>
          <li>Banks steeper than 45% (24°).</li>
        </ul>
        <OwnerReports
          intro="Few owner reports were available for the October 10, 2026 check."
          items={[
            {
              text: "In the thread we read, the writer praises the Navimow app and describes support as responsive.",
              href: "https://www.reddit.com/r/SegwayNavimow/comments/1vgvkkq/",
              linkLabel: "Navimow owner thread",
            },
          ]}
        />
        <StatusLine>
          On sale in the US as of Oct 10, 2026. <NoConditionalApproval brand="Segway Navimow" />
        </StatusLine>
        <CtaCluster>
          <ProductLink
            asin={i210.variant.asin}
            model="Navimow i210 AWD"
            productSlug={i210.family.slug}
            placement="pick_block"
            pageType="best"
          />
        </CtaCluster>
      </section>
      <section id="dreame-a3-2500">
        <h2>2. Dreame A3 AWD Pro 2500</h2>
        <p className="measure">
          The pick when the lawn is about {formatAcres(dreame.acres)}, the banks are steep, and you would
          rather have LiDAR than an RTK antenna. There is no RTK and no perimeter wire. Drive is all-wheel,
          with hub motors. The family write-up is the{" "}
          <Link href="/reviews/dreame-a3-awd-pro">Dreame A3 AWD Pro review</Link>.{" "}
          <SourceLine ids={["dreame-a3"]} checked={SPEC_CHECKED} />
        </p>
        <KeyNumbers
          rows={[
            { label: "Rated area", value: formatAcres(dreame.acres), detail: `${realisticLine(dreame.acres)} The sheet note is 2,500 m².` },
            {
              label: "Max slope",
              value: slopeWithRise(dreame.slope, dreame.degrees),
              detail: interiorOrBoundary(),
            },
            {
              label: "Passage",
              value: "Not published",
              detail: `Cutting width is ${specText(dreame.specs.cuttingWidth)}. That is the deck, not a minimum gap.`,
            },
            {
              label: "Navigation",
              value: "LiDAR and vision. No RTK.",
              detail: specText(dreame.specs.connectivity),
            },
            {
              label: "Cut",
              value: `${specText(dreame.specs.cuttingHeight)}. Edge: ${specText(dreame.specs.edgeCutting)}.`,
              detail: `Obstacle clearance ${specText(dreame.specs.obstacleClearance)}. Noise ${specText(dreame.specs.noise)}. ${specText(dreame.specs.waterproofing)}. Weight ${specText(dreame.specs.weight)}.`,
            },
          ]}
        />
        <p className="measure">
          Two maps are supported, and each map needs its own charging station. Setup can use Bluetooth
          without Wi-Fi. The 3500 is rated{" "}
          {d3500 ? formatAcres(Number(d3500.ladder?.ratedAreaAcres?.value)) : "Not published"} with a{" "}
          {d3500 ? specText(d3500.specs?.battery) : "Not published"} battery. The 5000 is rated{" "}
          {d5000 ? formatAcres(Number(d5000.ladder?.ratedAreaAcres?.value)) : "Not published"} with a{" "}
          {d5000 ? specText(d5000.specs?.battery) : "Not published"} battery. Slope is not published on those
          two rows, so this page does not copy the 2500’s {publishedSlope(dreame.slope, dreame.degrees)} onto
          them.
        </p>
        <h3>Who it is not for</h3>
        <ul className="grid gap-2 pl-5">
          <li>Hot, full-sun Southern yards where a midday run matters. Owner threads describe LiDAR heat pauses.</li>
          <li>Tall-cut lawns if the edge mode stays on.</li>
          <li>Sandy soil or turf that stays wet. Threads describe ruts.</li>
        </ul>
        <OwnerReports
          intro="In the owner threads and the independent review we read for the October 10, 2026 check."
          items={[
            {
              text: "LiDAR overheats in direct sun and Florida heat, and the mower docks to cool.",
              href: "https://www.reddit.com/r/roboticLawnmowers/comments/1uoiicf/",
              linkLabel: "Thread on LiDAR heat",
            },
            {
              text: "EdgeMaster cuts the border near 1.2 in and can scalp a tall lawn. Writers switch that mode off.",
              href: "https://www.reddit.com/r/Dreame_Tech/comments/1sivqul/",
              linkLabel: "Dreame thread on EdgeMaster",
              extra: [
                {
                  href: "https://smartlawnbots.com/reviews/dreame-a3-awd-pro-3500-review/",
                  linkLabel: "Smart Lawn Bots on the same edge behavior",
                },
              ],
            },
            {
              text: "The all-wheel drive can rut wet turf and dig into sand.",
              href: "https://www.reddit.com/r/roboticLawnmowers/comments/1uoiicf/",
              linkLabel: "Thread on ruts and sand",
            },
            {
              text: "The Smart Lawn Bots piece praises mapping under tree canopy.",
              href: "https://smartlawnbots.com/reviews/dreame-a3-awd-pro-3500-review/",
              linkLabel: "Smart Lawn Bots review",
            },
          ]}
        />
        <StatusLine>
          On sale in the US as of Oct 10, 2026. <NoConditionalApproval brand="Dreame" />
        </StatusLine>
        <CtaCluster>
          <ProductLink
            asin={dreame.variant.asin}
            model="Dreame A3 AWD Pro 2500"
            productSlug={dreame.family.slug}
            placement="pick_block"
            pageType="best"
          />
          <ProductLink
            asin={d3500?.asin ?? null}
            model="A3 AWD Pro 3500"
            productSlug={dreame.family.slug}
            placement="pick_block"
            pageType="best"
          />
          <ProductLink
            asin={d5000?.asin ?? null}
            model="A3 AWD Pro 5000"
            productSlug={dreame.family.slug}
            placement="pick_block"
            pageType="best"
          />
        </CtaCluster>
      </section>
      <section id="luba-3-3000">
        <h2>3. LUBA 3 AWD 3000</h2>
        <p className="measure">
          The pick for about {formatAcres(luba.acres)} when trees cover the lawn. LiDAR, network RTK, and
          vision are all on the 3000. The standard cut is {specText(luba.specs.cuttingHeight)}. The full
          variant table, the zone conflict, and the battery conflict are in the{" "}
          <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD review</Link>.
        </p>
        <KeyNumbers
          rows={[
            { label: "Rated area", value: formatAcres(luba.acres), detail: realisticLine(luba.acres) },
            {
              label: "Max slope",
              value: slopeWithRise(luba.slope, luba.degrees),
              detail: interiorOrBoundary(),
            },
            {
              label: "Narrowest gap",
              value: specText(luba.specs.narrowestGap),
              detail: "70 cm on the Mammotion US page.",
            },
            {
              label: "Navigation",
              value: navigationLabel(luba.family.navigation),
              detail: "The 1500 variant is LiDAR and vision only.",
            },
            {
              label: "After 3 years of data",
              value: "A subscription, price not stated",
              detail: "NetRTK is described as free for life, and that depends on Mammotion’s cloud.",
            },
          ]}
        />
        <h3>Who it is not for</h3>
        <ul className="grid gap-2 pl-5">
          <li>Tall-cut lawns on the standard version, which stops at 2.7 in. The high-cut range is 2.2–4.0 in.</li>
          <li>A side passage under 27.6 in.</li>
          <li>Anyone counting on features the Mammotion page marks as not available yet.</li>
        </ul>
        <OwnerReports
          intro="In the owner threads we read for the October 10, 2026 check. Both are problems. Praise of LiDAR in general is left off this pick because the piece we found was not about the LUBA 3."
          items={[
            {
              text: "Owners linked firmware 2.3.30.26 to blade cut-outs and restarts. A later note said a fix was being tried.",
              href: "https://www.reddit.com/r/MammotionTechnology/comments/1vtyyfi/",
              linkLabel: "Firmware thread",
              extra: [
                {
                  href: "https://www.reddit.com/r/MammotionTechnology/comments/1vw377h/",
                  linkLabel: "Follow-up thread",
                },
              ],
            },
            {
              text: "The threads linked here describe slow warranty handling.",
              href: "https://www.reddit.com/r/mammotion/comments/1vhuxpl/",
              linkLabel: "Warranty thread",
              extra: [
                {
                  href: "https://www.reddit.com/r/MammotionTechnology/comments/1vyribv/",
                  linkLabel: "Second warranty thread",
                },
              ],
            },
          ]}
        />
        <StatusLine>
          <p>On sale in the US as of Oct 10, 2026.</p>
          <p>Sold out on the Mammotion US store at that check. The amazon.com listing was live.</p>
          <p>
            <NoConditionalApproval brand="Mammotion" />
          </p>
        </StatusLine>
        <CtaCluster>
          <ProductLink
            asin={luba.variant.asin}
            model="LUBA 3 AWD 3000"
            productSlug={luba.family.slug}
            placement="pick_block"
            pageType="best"
          />
        </CtaCluster>
      </section>
      <section id="worx-wr340">
        <h2>4. Worx Landroid Vision Cloud WR340</h2>
        <p className="measure">
          The open-acre pick when the banks stay within {publishedSlope(worx.slope, worx.degrees)}. Cloud RTK
          needs no antenna. Stereo vision is part of the same setup, and Worx says V-SLAM takes over in
          shade. Wirecutter, updated Aug 3, 2026, suggests a complex lawn closer to a quarter acre than the 1
          acre rating. The family write-up is the{" "}
          <Link href="/reviews/worx-landroid-vision-cloud">Worx Landroid Vision Cloud review</Link>.{" "}
          <SourceLine ids={["worx-vision-cloud", "wirecutter"]} checked={SPEC_CHECKED} />
        </p>
        <KeyNumbers
          rows={[
            {
              label: "Rated area",
              value: formatAcres(worx.acres),
              detail: `${realisticLine(worx.acres)} Wirecutter’s complex-lawn note is a separate caution, not our 1.25× rule.`,
            },
            {
              label: "Max slope",
              value: slopeWithRise(worx.slope, worx.degrees),
              detail: `${interiorOrBoundary()} Wirecutter says Cut-to-Zero is not recommended above 15°. That note is Wirecutter’s, and the WR340 page we checked does not list Cut-to-Zero as this model’s edge method.`,
            },
            {
              label: "Passage",
              value: "Not published",
              detail: `Cutting width ${specText(worx.specs.cuttingWidth)}. Weight ${specText(worx.specs.weight)}.`,
            },
            {
              label: "Navigation",
              value: specText(worx.specs.positioning),
              detail: specText(worx.specs.connectivity),
            },
            {
              label: "Cut and battery",
              value: `${specText(worx.specs.cuttingHeight)}. ${specText(worx.specs.battery)}.`,
              detail: "The amazon.com comparison chart marks Find My Landroid as included. Wirecutter treats a GPS module as an extra. This page does not settle that, and it does not print a price.",
            },
          ]}
        />
        <p className="measure">
          The WR344 is the 4WD sibling, also rated {formatAcres(wr344.acres)}, at{" "}
          {publishedSlope(wr344.slope, wr344.degrees)}. Its listing describes a Cut-to-Zero offset blade.
          Width {specText(wr344.specs.cuttingWidth)} and height {specText(wr344.specs.cuttingHeight)} are on
          the amazon.com product information for that listing, checked Oct 13, 2026. A European WR344E sheet
          lists 20 mm to 70 mm and is not used here.{" "}
          <SourceLine ids={["amz-wr344"]} checked={RECHECKED} />
        </p>
        <h3>Who it is not for</h3>
        <ul className="grid gap-2 pl-5">
          <li>Steep yards on the two-wheel-drive WR340. The 30% rating is the limit. The WR344 is the 84% model.</li>
          <li>Patchy or weedy lawns that vision may read as not grass.</li>
          <li>A very broken-up acre. The 1 acre rating is generous for that shape, which is the point of the Wirecutter note.</li>
        </ul>
        <OwnerReports
          intro="In the threads we read for the October 10, 2026 check. The leaf report is about the 2023 Vision, and it is not proof about Vision Cloud."
          items={[
            {
              text: "A 2023 Landroid Vision stopped at leaves, weeds, and bald patches. That report is not evidence that Vision Cloud does the same.",
              href: "https://www.reddit.com/r/worxlandroid/comments/15puvcg/",
              linkLabel: "2023 Vision thread on leaves and bare spots",
            },
            {
              text: "Cut-to-Edge still leaves a strip of tall grass, in a thread and in an independent review.",
              href: "https://www.reddit.com/r/worxlandroid/comments/14xj3au/",
              linkLabel: "Thread on the leftover strip",
              extra: [
                {
                  href: "https://www.bttr.reviews/worx-landroid-vision-review/",
                  linkLabel: "bttr.reviews on the same strip",
                },
              ],
            },
            {
              text: "A later thread says the mower improved after a firmware update.",
              href: "https://www.reddit.com/r/worxlandroid/comments/1k1c94q/",
              linkLabel: "Thread on a later firmware update",
            },
          ]}
        />
        <StatusLine>
          On sale in the US as of Oct 10, 2026. <NoConditionalApproval brand="Worx" />
        </StatusLine>
        <CtaCluster>
          <ProductLink
            asin={worx.variant.asin}
            model="Landroid Vision Cloud WR340"
            productSlug={worx.family.slug}
            placement="pick_block"
            pageType="best"
          />
          <ProductLink
            asin={wr344.variant.asin}
            model="Landroid Vision Cloud WR344"
            productSlug={worx.family.slug}
            placement="pick_block"
            pageType="best"
          />
        </CtaCluster>
      </section>
      <section id="navimow-x430">
        <h2>5. Navimow X430</h2>
        <p className="measure">
          The open-acre pick when the banks are steep: {formatAcres(x430.acres)} and{" "}
          {publishedSlope(x430.slope, x430.degrees)}. The body is {specText(x430.specs.bodyWidth)}. Network
          RTK needs Wi-Fi or 4G. The antenna is included and described as optional. The longer write-up is
          the <Link href="/reviews/segway-navimow-x4">Navimow X4 review</Link>.
        </p>
        <KeyNumbers
          rows={[
            { label: "Rated area", value: formatAcres(x430.acres), detail: realisticLine(x430.acres) },
            {
              label: "Max slope",
              value: slopeWithRise(x430.slope, x430.degrees),
              detail: interiorOrBoundary(),
            },
            {
              label: "Passage",
              value: specText(x430.specs.bodyWidth),
              detail: "About 2 ft is the practical gate width for that body.",
            },
            {
              label: "Navigation",
              value: navigationLabel(x430.family.navigation),
              detail: "Connect+ is free for one year on the X430, then a yearly fee. Network RTK is described as free for life, depending on Segway’s cloud.",
            },
            {
              label: "Cut",
              value: `${specText(x430.specs.cuttingWidth)} wide, ${specText(x430.specs.cuttingHeight)} high.`,
              detail: "A retailer copy gives 0.8–4 in. The listing figure is 0.75–4 in.",
            },
          ]}
        />
        <p className="measure">
          The X450 is rated {x450 ? formatAcres(Number(x450.ladder?.ratedAreaAcres?.value)) : "Not published"},
          with a map maximum of 1.8 acres for that model only, at the same slope. Other X450 specs were not
          on the sheet we checked.
        </p>
        <h3>Who it is not for</h3>
        <ul className="grid gap-2 pl-5">
          <li>Side passages narrower than about 2 ft.</li>
          <li>A lawn with no reliable Wi-Fi or cell coverage.</li>
          <li>A buyer who does not want a yearly fee after the free period.</li>
        </ul>
        <OwnerReports
          intro="In the owner threads we read for the October 10, 2026 check."
          items={[
            {
              text: "Writers say it maintains St. Augustine and Bermuda when it runs often.",
              href: "https://www.reddit.com/r/SegwayNavimow/comments/1vi3zmr/",
              linkLabel: "Thread on warm-season grass",
              extra: [
                {
                  href: "https://www.reddit.com/r/roboticLawnmowers/comments/1uoocsz/",
                  linkLabel: "Second thread on those grasses",
                },
              ],
            },
            {
              text: "Writers still trim edges, and some describe missed strips.",
              href: "https://www.reddit.com/r/roboticLawnmowers/comments/1uy0323/",
              linkLabel: "Thread on edges",
            },
            {
              text: "Locate My Mower stops once the mower powers off after a lift.",
              href: "https://www.reddit.com/r/SegwayNavimow/comments/1ub6fc5/",
              linkLabel: "Thread on Locate My Mower",
            },
          ]}
        />
        <StatusLine>
          <p>On sale in the US as of Oct 10, 2026.</p>
          <p>Sold out on navimow.com at that check. The amazon.com listing was live.</p>
          <p>The review explains why this page does not call the X430 FCC-authorized.</p>
          <p>
            <NoConditionalApproval brand="Segway Navimow" />
          </p>
        </StatusLine>
        <CtaCluster>
          <ProductLink
            asin={x430.variant.asin}
            model="Navimow X430"
            productSlug={x430.family.slug}
            placement="pick_block"
            pageType="best"
          />
          <ProductLink
            asin={x450?.asin ?? null}
            model="Navimow X450"
            productSlug={x430.family.slug}
            placement="pick_block"
            pageType="best"
          />
        </CtaCluster>
      </section>
      <section id="how-to-choose">
        <h2>How to choose</h2>
        <ol className="grid gap-3 pl-5">
          <li>
            Measure the grass in acres and square feet, and take out the house, the drive, and the beds.{" "}
            <Link href="/guides/how-big-a-robot-mower-do-i-need">How big a robot mower do I need?</Link>
          </li>
          <li>
            Measure the steepest bank as rise over 10 ft, then compare it with the slope column above. The
            maker may not say whether the number is the interior or only the boundary.{" "}
            <Link href="/best/robot-mower-for-hills">The hills page converts percent, degrees, and rise.</Link>
          </li>
          <li>
            If trees cover the path, read{" "}
            <Link href="/guides/rtk-vs-lidar-vs-vision">RTK, LiDAR, or vision</Link> and the{" "}
            <Link href="/best/robot-mower-under-trees">under-trees page</Link> before you pick a network-RTK
            mower.
          </li>
          <li>
            Measure the narrowest passage. The X430 body is 24 in. The LUBA 3 gap is 27.6 in. The other three
            picks have no passage width on the sheets we checked. The{" "}
            <Link href="/guides/robot-mower-front-and-back-yard">front-and-back guide</Link> compares a gap
            you measure with the figures that are published.
          </li>
          <li>
            Read the owner threads on the two reviews, and the status line, before you use a button.
          </li>
        </ol>
      </section>
      <YardPhoto id="photo-best-choose" />
      <div id="questions">
        <Faq
          items={[
            {
              q: "How big a mower do I need for a half acre?",
              a: (
                <>
                  Add the front and back grass first. A half acre is 21,780 sq ft. The{" "}
                  <Link href="/best/robot-mower-half-acre">half-acre page</Link> compares the ratings. If the
                  yard is wooded and split into two zones, our 1.25× rule plans on less than the rated acre.
                  The size guide shows the arithmetic.
                </>
              ),
            },
            {
              q: "What if the yard is steep?",
              a: "Compare the bank with the published percent. The WR340 stops at 30% (17°). The i210 stops at 45% (24°). The Dreame 2500 and the LUBA 3000 publish 80%. The X430 publishes 84% (40°). Ask whether the figure is the interior or the boundary. Several of these makers do not say.",
            },
            {
              q: "Do I still need a boundary wire?",
              a: "Not for these five picks. They are wire-free. A wire model is still on the ladder if you want one that does not depend on sky. The dashed marks are those models.",
            },
            {
              q: "Why is there no score?",
              a: "A score would pretend we mowed with them. The pages are research-based. We have not tested these mowers. The ladder is rated area, then slope.",
            },
          ]}
        />
      </div>
      <YardPhoto id="photo-best-faq" />
      <ResearchedBox
        scope="group"
        sources={researched.map((id) => ({ id }))}
        manuals="No owner's manual was in the source list for this page."
        threads="Owner threads linked in each pick, read for the October 10, 2026 check."
        questions="No manufacturer questions have been answered yet."
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
          { href: "/tools/mower-finder", label: "Which mower fits my yard?" },
          { href: "/reviews/segway-navimow-x4", label: "Navimow X4 review" },
          { href: "/reviews/mammotion-luba-3-awd", label: "LUBA 3 AWD review" },
          { href: "/reviews/worx-landroid-vision-cloud", label: "Worx Landroid Vision Cloud review" },
          { href: "/reviews/dreame-a3-awd-pro", label: "Dreame A3 AWD Pro review" },
          { href: "/reviews/segway-navimow-i-series", label: "Navimow i series review" },
          { href: "/reviews/mammotion-luba-mini-2-awd", label: "LUBA mini 2 AWD review" },
          { href: "/reviews/mova-lidax-ultra", label: "MOVA LiDAX Ultra review" },
          { href: "/reviews/roborock-rockneo-q110h", label: "RockNeo Q110H review" },
          { href: "/reviews/worx-landroid-m-wr147", label: "Worx Landroid M WR147 review" },
          { href: "/reviews/husqvarna-automower-iq", label: "Automower iQ review" },
          { href: "/best/robot-mower-st-augustine", label: "Which robot mower for St. Augustine grass?" },
          { href: "/best/robot-mower-bermuda", label: "Which robot mower for Bermuda grass?" },
          { href: "/vs/worx-vision-cloud-wr340-vs-navimow-x430", label: "Worx WR340 vs Navimow X430" },
          { href: "/guides/robot-mower-cost-to-own", label: "What does a robot mower cost to own?" },
          { href: "/guides/are-robot-mowers-worth-it", label: "Are robot mowers worth it?" },
          { href: "/guides/robot-mower-theft-protection", label: "Robot mower theft protection" },
          { href: "/best/robot-mower-1-acre", label: "Which robot mower for about 1 acre?" },
          { href: "/best/robot-mower-half-acre", label: "Which robot mower for a half acre?" },
          { href: "/best/robot-mower-small-yard", label: "Which robot mower for a small yard?" },
          { href: "/best/robot-mower-under-trees", label: "Which robot mower under trees?" },
          { href: "/best/robot-mower-for-hills", label: "What robot mower can climb my yard?" },
          { href: "/vs/navimow-x430-vs-luba-3-awd-3000", label: "Navimow X430 vs LUBA 3 AWD 3000" },
          { href: "/vs/dreame-a3-awd-pro-vs-luba-3-awd", label: "Dreame A3 AWD Pro 2500 vs LUBA 3 AWD 3000" },
          { href: "/guides/how-big-a-robot-mower-do-i-need", label: "How big a robot mower do I need?" },
          { href: "/guides/rtk-vs-lidar-vs-vision", label: "RTK, LiDAR, or vision" },
          { href: "/guides/robot-mower-winter-storage", label: "How do I store a robot mower for winter?" },
          { href: "/guides/robot-mower-front-and-back-yard", label: "Front yard and back yard" },
          { href: "/how-picks-are-chosen", label: "How picks are chosen" },
        ]}
      />
    </ArticleFrame>
  );
}
