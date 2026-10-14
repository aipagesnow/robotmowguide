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
import { publishedSlope, slopeWithRise, specText } from "@/lib/speak";
import { ComfortableFor, SlopeMarginNote } from "@/components/VoiceBits";
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
      bestFor: "Flat quarter acre",
      area: formatAcres(i210.acres),
      slope: publishedSlope(i210.slope, i210.degrees),
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
      slope: publishedSlope(dreame.slope, dreame.degrees),
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
      slope: publishedSlope(luba.slope, luba.degrees),
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
      bestFor: "Open acre, gentler slopes",
      area: formatAcres(worx.acres),
      slope: publishedSlope(worx.slope, worx.degrees),
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
      bestFor: "Open acre, steep banks",
      area: formatAcres(x430.acres),
      slope: publishedSlope(x430.slope, x430.degrees),
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
        If your yard's somewhere between a quarter acre and an acre, here's how we'd pick: start with how much grass you've got, then think about your steepest slope. With that in mind, our five picks
        are the Navimow i210 AWD, the Dreame A3 AWD Pro 2500, the LUBA 3 AWD 3000, the Worx Landroid Vision
        Cloud WR340 and the Navimow X430.
      </p>
      <QuickPick
        pageType="best"
        items={[
          {
            yard: `Up to ${formatAcres(i210.acres, false)} if your banks go up to ${publishedSlope(i210.slope, i210.degrees)}`,
            model: "Navimow i210 AWD",
            href: "/best#navimow-i210",
            asin: i210.variant.asin,
            productSlug: i210.family.slug,
          },
          {
            yard: `About ${formatAcres(dreame.acres, false)} if you've got trees and steep banks`,
            model: "Dreame A3 AWD Pro 2500",
            href: "/best#dreame-a3-2500",
            asin: dreame.variant.asin,
            productSlug: dreame.family.slug,
          },
          {
            yard: `About ${formatAcres(luba.acres, false)} under your trees`,
            model: "LUBA 3 AWD 3000",
            href: "/best#luba-3-3000",
            asin: luba.variant.asin,
            productSlug: luba.family.slug,
          },
          {
            yard: `An open acre if your banks go up to ${publishedSlope(worx.slope, worx.degrees)}`,
            model: "Worx Landroid Vision Cloud WR340",
            href: "/best#worx-wr340",
            asin: worx.variant.asin,
            productSlug: worx.family.slug,
          },
          {
            yard: `An open acre if your banks go up to ${publishedSlope(x430.slope, x430.degrees)}`,
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
        <summary>Jump to a section</summary>
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
        <Ladder picks="below" />
      </div>
      <p className="measure">
        Husqvarna rates the Automower 420 iQ at {formatAcres(iq420.acres)} and{" "}
        {publishedSlope(iq420.slope, iq420.degrees)}, and 15% at the boundary. Husqvarna also says 0.5 acre
        for an irregular lawn and 1 acre for systematic mowing. The 410 iQ area note is ±20%. Neither iQ
        model has a confirmed amazon.com listing, so you won't see an Amazon button for them. The write-up is the{" "}
        <Link href="/reviews/husqvarna-automower-iq">Automower iQ review</Link>.{" "}
        <SourceLine ids={["husq-420iq", "husq-410iq"]} checked={SPEC_CHECKED} />
      </p>
      <h2 id="compare">Comparison</h2>
      <CtaCluster>
        <div className="table-scroll">
          <p className="scroll-cue">Swipe sideways to read every column.</p>
          <table className="data">
            <caption>
              How these five picks compare for your yard. Area, slope, and cutting height as of Oct 10, 2026.
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
      <SlopeMarginNote />
      <section id="navimow-i210">
        <h2>1. Navimow i210 AWD</h2>
        <p className="measure">
          If your banks go up to {i210.slope}% and you don't
          want an antenna in the yard, we'd start here for a quarter acre. It's three-wheel all-wheel drive, with network RTK and vision.{" "}
          <SourceLine ids={["navimow-ces26"]} checked={SPEC_CHECKED} />
        </p>
        <KeyNumbers
          rows={[
            { label: "Rated area", value: formatAcres(i210.acres), detail: <ComfortableFor rated={i210.acres} /> },
            {
              label: "Max slope",
              value: slopeWithRise(i210.slope, i210.degrees),
            },
            { label: "Passage", value: "Not published", detail: "Segway doesn't publish the body width, so measure your side gate before you count on a fit." },
            {
              label: "Navigation",
              value: "Network RTK and vision, no antenna",
              detail: "Segway doesn't say if there's a connectivity fee after a free period for the i210.",
            },
            {
              label: "Cut and zones",
              value: `${specText(i210.specs.cuttingHeight)}, ${specText(i210.specs.zones)}, battery ${specText(i210.specs.battery)}`,
              detail: "Cutting height, zones, and battery come from the amazon.com listing, including the listing title for the height, as of Oct 10, 2026.",
            },
          ]}
        />
        <p className="measure">
          If you're looking at an older Navimow, the i105N and i110N are the previous generation. The i105N listing points you to the i206 AWD as a
          newer version. You'll find the family write-up in the{" "}
          <Link href="/reviews/segway-navimow-i-series">Navimow i series review</Link>. The i210 is the one
          rated {formatAcres(i210.acres, false)} at {i210.slope}%.
        </p>
        <h3>Who it is not for</h3>
        <p className="measure">
          If your lawn is over a quarter acre, if you've got heavy tree cover, or if your banks run
          steeper than 45%, we'd look at something else.
        </p>
        <OwnerReports
          intro="In the 1 owner thread we read in October 2026:"
          items={[
            {
              text: "The owner praises the Navimow app and describes support as responsive.",
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
          If your lawn is about {formatAcres(dreame.acres, false)}, your banks are steep, and you'd
          rather have LiDAR than an RTK antenna, this is the one we'd pick. There's no RTK and no perimeter wire. Drive is all-wheel,
          with hub motors. The family write-up is the{" "}
          <Link href="/reviews/dreame-a3-awd-pro">Dreame A3 AWD Pro review</Link>.{" "}
          <SourceLine ids={["dreame-a3"]} checked={SPEC_CHECKED} />
        </p>
        <KeyNumbers
          rows={[
            {
              label: "Rated area",
              value: formatAcres(dreame.acres),
              detail: (
                <>
                  <ComfortableFor rated={dreame.acres} /> Dreame's US product page puts the same lawn at 2,500 m².
                </>
              ),
            },
            {
              label: "Max slope",
              value: slopeWithRise(dreame.slope, dreame.degrees),
            },
            {
              label: "Passage",
              value: "Not published",
              detail: `Cutting width is ${specText(dreame.specs.cuttingWidth)}. That's the deck, not the gap your side gate needs.`,
            },
            {
              label: "Navigation",
              value: "LiDAR and vision. No RTK.",
              detail: specText(dreame.specs.connectivity),
            },
            {
              label: "Cut",
              value: `${specText(dreame.specs.cuttingHeight)}. Edge: ${specText(dreame.specs.edgeCutting)}.`,
              detail:
                "It cuts from 1.2 to 3.9 in and can climb over a bump up to 2.2 in. It weighs about 53 lb, which matters if your ground is soft or sandy. It's rated IPX6 and up to 65 dB.",
            },
          ]}
        />
        <p className="measure">
          You can keep two maps, and each map needs its own charging station. Setup can use Bluetooth
          without Wi-Fi. The 3500 is rated{" "}
          {d3500 ? formatAcres(Number(d3500.ladder?.ratedAreaAcres?.value), false) : "Not published"} with a{" "}
          {d3500 ? specText(d3500.specs?.battery) : "Not published"} battery. The 5000 is rated{" "}
          {d5000 ? formatAcres(Number(d5000.ladder?.ratedAreaAcres?.value), false) : "Not published"} with a{" "}
          {d5000 ? specText(d5000.specs?.battery) : "Not published"} battery. Dreame doesn't publish a slope
          figure for the 3500 or the 5000.
        </p>
        <h3>Who it is not for</h3>
        <p className="measure">
          If your yard is hot, full sun, and you need a midday run, if you want a tall cut with
          the edge mode left on, or if the soil is sandy and the turf stays wet, we'd skip it.
        </p>
        <OwnerReports
          intro="In the 2 owner threads we read in October 2026, and one independent review, a few snags came up:"
          items={[
            {
              text: "Owners say the LiDAR overheats in direct sun and Florida heat, and the mower docks to cool.",
              href: "https://www.reddit.com/r/roboticLawnmowers/comments/1uoiicf/",
              linkLabel: "Thread on LiDAR heat",
            },
            {
              text: "If you leave EdgeMaster on, it cuts the border near 1.2 in and can scalp a tall lawn. Owners switch that mode off.",
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
              text: "The all-wheel drive can rut wet turf and dig into sand, so we'd be careful if your lawn stays soft.",
              href: "https://www.reddit.com/r/roboticLawnmowers/comments/1uoiicf/",
              linkLabel: "Thread on ruts and sand",
            },
            {
              text: "The good news is the Smart Lawn Bots piece praises mapping under tree canopy.",
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
          If trees cover your lawn and you've got about {formatAcres(luba.acres, false)}, we'd start here. LiDAR, network RTK, and
          vision are all on the 3000. The standard cut is {specText(luba.specs.cuttingHeight)}. The zones, the battery question, and the other versions are in the{" "}
          <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD review</Link>.
        </p>
        <KeyNumbers
          rows={[
            { label: "Rated area", value: formatAcres(luba.acres), detail: <ComfortableFor rated={luba.acres} /> },
            {
              label: "Max slope",
              value: slopeWithRise(luba.slope, luba.degrees),
            },
            {
              label: "Narrowest gap",
              value: specText(luba.specs.narrowestGap),
              detail: "Mammotion's US page puts that gap at 70 cm, so measure your side gate.",
            },
            {
              label: "Navigation",
              value: navigationLabel(luba.family.navigation),
              detail: "The 1500 skips network RTK. It's LiDAR and vision only.",
            },
            {
              label: "After 3 years of data",
              value: "A subscription, price not stated",
              detail: "NetRTK is described as free for life, as long as Mammotion's cloud stays up.",
            },
          ]}
        />
        <h3>Who it is not for</h3>
        <p className="measure">
          If you need a cut taller than 2.7 in on the standard version (the high-cut range is 2.2–4.0
          in), if your side gate is under 27.6 in, or if you're counting on features Mammotion marks as not
          available yet, we'd leave it.
        </p>
        <OwnerReports
          intro="We read 4 owner threads in October 2026, and to be fair to you, the two things that came up were both problems. A general LiDAR write-up wasn't about the LUBA 3."
          items={[
            {
              text: "Owners linked firmware 2.3.30.26 to the blades cutting out and the mower restarting. A later note said a fix was being tried.",
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
              text: "Owners in the threads linked here describe slow warranty handling.",
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
          <p>It was sold out on the Mammotion US store on Oct 10, 2026. The amazon.com listing was still live.</p>
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
          If your banks go up to {worx.slope}%, we'd look at this for an open acre. Cloud RTK
          needs no antenna in your yard. Stereo vision is part of the same setup, and Worx says V-SLAM takes over in
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
              detail: (
                <>
                  <ComfortableFor rated={worx.acres} /> Wirecutter's complex-lawn note is a separate caution
                  if your lawn is broken up.
                </>
              ),
            },
            {
              label: "Max slope",
              value: slopeWithRise(worx.slope, worx.degrees),
              detail:
                "Wirecutter says Cut-to-Zero isn't recommended above 15°. That's Wirecutter's note. Worx's US product page doesn't list Cut-to-Zero as this model's edge method.",
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
              detail: "We'd plan on Find My Landroid being included, because the amazon.com comparison chart marks it that way. Wirecutter treats a GPS module as an extra, and neither source states a price.",
            },
          ]}
        />
        <p className="measure">
          The WR344 is the 4WD sibling, also rated {formatAcres(wr344.acres, false)}, at {wr344.slope}%. Its
          listing describes a Cut-to-Zero offset blade.
          Width {specText(wr344.specs.cuttingWidth)} and height {specText(wr344.specs.cuttingHeight)} are on
          the amazon.com product information for that listing, as of Oct 13, 2026. A European WR344E listing
          gives 20 mm to 70 mm, and we wouldn't plan on that range.{" "}
          <SourceLine ids={["amz-wr344"]} checked={RECHECKED} />
        </p>
        <h3>Who it is not for</h3>
        <p className="measure">
          If your yard has a real hill, honestly, we'd skip the WR340. It's two-wheel drive and rated for 30%, so the WR344
          (rated for 84%) is the one to look at. And if your lawn's a bit patchy or weedy, its camera can mistake those spots for not-grass. On a very
          broken-up acre, that 1 acre rating is generous too.
        </p>
        <OwnerReports
          intro="Here's what owners reported in the 3 owner threads we read in October 2026, and one independent review. The leaf report is about the older 2023 Vision, so it may not be the same on Vision Cloud."
          items={[
            {
              text: "One owner of the older 2023 Landroid Vision said theirs stopped at leaves, weeds and bald patches. That's a different model, so it may not happen on the Vision Cloud, but it's worth knowing if your lawn isn't perfect.",
              href: "https://www.reddit.com/r/worxlandroid/comments/15puvcg/",
              linkLabel: "2023 Vision thread on leaves and bare spots",
            },
            {
              text: "Owners say Cut-to-Edge still leaves a strip of tall grass, in a thread and in an independent review.",
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
              text: "In a later thread, an owner says the mower improved after a firmware update.",
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
          If your banks are steep on an open acre, we'd start here: {formatAcres(x430.acres, false)} and {x430.slope}%. The
          body is {specText(x430.specs.bodyWidth)}. Network
          RTK needs Wi-Fi or 4G. The antenna comes with it, and Segway describes it as optional. The longer write-up is
          the <Link href="/reviews/segway-navimow-x4">Navimow X4 review</Link>.
        </p>
        <KeyNumbers
          rows={[
            { label: "Rated area", value: formatAcres(x430.acres), detail: <ComfortableFor rated={x430.acres} /> },
            {
              label: "Max slope",
              value: slopeWithRise(x430.slope, x430.degrees),
            },
            {
              label: "Passage",
              value: specText(x430.specs.bodyWidth),
              detail: "About 2 ft is the gate width we'd plan on for that body. Measure your side gate if it might be tighter.",
            },
            {
              label: "Navigation",
              value: navigationLabel(x430.family.navigation),
              detail: "The good news is Connect+ is free for one year on the X430, then there's a yearly fee. Network RTK is described as free for life, as long as Segway's cloud stays up.",
            },
            {
              label: "Cut",
              value: `${specText(x430.specs.cuttingWidth)} wide, ${specText(x430.specs.cuttingHeight)} high.`,
              detail: "A retailer copy gives 0.8–4 in. We'd plan on the listing figure, which is 0.75–4 in.",
            },
          ]}
        />
        <p className="measure">
          The X450 is rated{" "}
          {x450 ? formatAcres(Number(x450.ladder?.ratedAreaAcres?.value), false) : "Not published"}, with a
          map maximum of 1.8 acres for that model only, at the same slope. Other X450 specs aren't published, so we wouldn't guess them.
        </p>
        <h3>Who it is not for</h3>
        <p className="measure">
          If your side passage is narrower than about 2 ft, if your lawn has no reliable Wi-Fi
          or cell coverage, or if a yearly fee after the free period is a deal-breaker, we'd pass.
        </p>
        <OwnerReports
          intro="In the 4 owner threads we read in October 2026, owners talked about the grass, the edges, and finding the mower:"
          items={[
            {
              text: "Owners say it keeps up with St. Augustine and Bermuda when it runs often.",
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
              text: "Owners still trim the edges, and some describe missed strips.",
              href: "https://www.reddit.com/r/roboticLawnmowers/comments/1uy0323/",
              linkLabel: "Thread on edges",
            },
            {
              text: "Owners say Locate My Mower stops once the mower powers off after a lift.",
              href: "https://www.reddit.com/r/SegwayNavimow/comments/1ub6fc5/",
              linkLabel: "Thread on Locate My Mower",
            },
          ]}
        />
        <StatusLine>
          <p>On sale in the US as of Oct 10, 2026.</p>
          <p>It was sold out on navimow.com on Oct 10, 2026. The amazon.com listing was still live.</p>
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
            Start with your grass. Measure it in acres and square feet, and take out the house, the drive, and the beds.{" "}
            <Link href="/guides/how-big-a-robot-mower-do-i-need">How big a robot mower do I need?</Link>
          </li>
          <li>
            Then measure your steepest bank as rise over 10 ft, and compare it with the slope column above. Leave
            extra margin if the steep part is at the edge of your lawn.{" "}
            <Link href="/best/robot-mower-for-hills">The hills page converts percent, degrees, and rise.</Link>
          </li>
          <li>
            If trees cover your mower's path, read{" "}
            <Link href="/guides/rtk-vs-lidar-vs-vision">RTK, LiDAR, or vision</Link> and the{" "}
            <Link href="/best/robot-mower-under-trees">under-trees page</Link> before you pick a network-RTK
            mower.
          </li>
          <li>
            Measure your narrowest passage, like a side gate. The X430 body is 24 in. The LUBA 3 gap is 27.6 in. Body width isn't
            published for the other three picks. The{" "}
            <Link href="/guides/robot-mower-front-and-back-yard">front-and-back guide</Link> compares a gap
            you measure with the figures that are published.
          </li>
          <li>
            Before you order, read the owner threads on the reviews and see whether each model is on sale.
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
                  Add your front and back grass first. A half acre is 21,780 sq ft. The{" "}
                  <Link href="/best/robot-mower-half-acre">half-acre page</Link> compares the ratings. If your
                  yard has trees or two zones, use the size guide rather than the full rated area. That's
                  where the sizing math lives.
                </>
              ),
            },
            {
              q: "What if the yard is steep?",
              a: "Compare your bank with the published percent. The WR340 stops at 30%. The i210 stops at 45%. The Dreame 2500 and the LUBA 3000 publish 80%. The X430 publishes 84%. Leave extra margin if the steep part is at the edge of your lawn.",
            },
            {
              q: "Do I still need a boundary wire?",
              a: "Not for these five picks. They're wire-free. A wire model is still on the ladder if you want one that doesn't depend on open sky. The dashed marks are those models.",
            },
            {
              q: "Why is there no score?",
              a: "You won't find scores here, and here's why: we haven't mowed with these ourselves, so a score would just be made up. What we've done is read the specs and the owner reports, then lined the mowers up by lawn size and slope.",
            },
          ]}
        />
      </div>
      <YardPhoto id="photo-best-faq" />
      <ResearchedBox
        scope="group"
        sources={researched.map((id) => ({ id }))}
        manuals="No owner's manual was in the source list."
        threads="Owner threads linked in each pick, from October 2026."
        questions="No manufacturer has answered a question yet."
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
