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
import { FccWaiver } from "@/components/FccNote";
import { ProductLink } from "@/components/ProductLink";
import { NavFour, SpecPlate } from "@/components/Diagrams";
import { SpecTable } from "@/components/SpecTable";
import { VariantTable } from "@/components/VariantTable";
import { pageMeta } from "@/lib/metadata";
import { formatAcres, formatDate } from "@/lib/format";
import { modelFacts, navigationLabel } from "@/lib/products";
import { interiorOrBoundary, publishedSlope, realisticLine, slopeWithRise, specText } from "@/lib/speak";
import { FCC_COVERED_LIST, FCC_TABLE_CHECKED, SPEC_CHECKED } from "@/lib/site";

const title = "LUBA 3 AWD review: three-quarters of an acre under trees";
const description =
  "The LUBA 3 AWD 3000 is rated for 0.75 acre and 80% (38.6°), with LiDAR plus network RTK. Standard cut tops out at 2.7 in.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/reviews/mammotion-luba-3-awd",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Reviews", path: "/reviews" },
  { name: "LUBA 3 AWD", path: "/reviews/mammotion-luba-3-awd" },
];

const sources = ["mammotion-luba3", "mammotion-luba3-sku", "mammotion-luba3-global", "amz-luba3-3000"];

export default function LubaReview() {
  const m3000 = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");
  const m1500 = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 1500");
  const m5000 = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 5000");
  const high = m3000.family.variants.find((item) => item.model.startsWith("LUBA 3 AWD 3000H"));
  const family = m3000.family;
  const dreame = modelFacts("dreame-a3-awd-pro", "A3 AWD Pro 2500");
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/reviews/mammotion-luba-3-awd"
      crumbs={crumbs}
      whatChanged="October 13, 2026: linked the Dreame 2500 comparison beside the X430 comparison."
      disclosure
    >
      <StatusLine>
        <p>On sale in the US as of {formatDate(family.statusDate)}.</p>
        <p>Sold out on the Mammotion US store at that check. The amazon.com listing was live.</p>
        <p>
          Some features on the Mammotion page are marked as not available yet. This review does not describe
          those features as available.
        </p>
        <p>
          Mammotion has no Conditional Approval for new models on the{" "}
          <a href={FCC_COVERED_LIST}>FCC Covered List and Conditional Approvals table</a>, checked{" "}
          {formatDate(FCC_TABLE_CHECKED)}.
        </p>
        <p>
          <FccWaiver />
        </p>
      </StatusLine>
      <p className="measure">
        The 3000 is the LUBA 3 to read first when trees cover the lawn: {formatAcres(m3000.acres)} and{" "}
        {publishedSlope(m3000.slope, m3000.degrees)}, with LiDAR, network RTK, and vision together.
      </p>
      <p className="measure">
        Skip the standard version if you need a cut above {specText(m3000.specs.cuttingHeight)}. The high-cut
        row is the one that reaches 4 in, and it does not have a confirmed amazon.com listing.
      </p>
      <CtaCluster>
        <ProductLink
          asin={m3000.variant.asin}
          model="LUBA 3 AWD 3000"
          productSlug={family.slug}
          placement="verdict"
          pageType="review"
        />
      </CtaCluster>
      <YardPhoto id="card-luba3" />
      <h2>Key numbers for your yard</h2>
      <KeyNumbers
        rows={[
          {
            label: "Rated area",
            value: formatAcres(m3000.acres),
            detail: `${realisticLine(m3000.acres)} The area note on the sheet is 3,000 m².`,
          },
          {
            label: "Max slope",
            value: slopeWithRise(m3000.slope, m3000.degrees),
            detail: interiorOrBoundary(),
          },
          {
            label: "Narrowest gap",
            value: specText(m3000.specs.narrowestGap),
            detail: "A side passage tighter than that gap is a stop. The note on the page is 70 cm.",
          },
          {
            label: "Navigation",
            value: navigationLabel(family.navigation),
            detail: "The 3000 has all three. The 1500 is LiDAR and vision only, with no network RTK.",
          },
          {
            label: "After the free data",
            value: "A subscription, price not stated",
            detail: "Built-in 4G includes 3 years of data. NetRTK is described as free for life, and that depends on Mammotion’s cloud.",
          },
        ]}
      />
      <VariantTable
        family={family}
        pageType="review"
        differences={{
          "LUBA 3 AWD 1500": `Rated ${formatAcres(m1500.acres)}. LiDAR and vision only. No network RTK. Slope ${m1500.slope}%. Degrees are not published on this row.`,
          "LUBA 3 AWD 3000": "The model this review follows. Network RTK, LiDAR, and vision. Standard cut height is on the spec table.",
          "LUBA 3 AWD 5000": `Rated ${formatAcres(m5000.acres)}. Slope ${m5000.slope}%. Degrees are not published on this row. Other specs were empty on the sheet we checked.`,
          "LUBA 3 AWD 3000H / 5000H (high-cut)": `Cutting height ${high ? specText(high.specs?.cuttingHeight) : "Not published"}. Rated area and slope were not on this row.`,
        }}
      />
      <h2>Specs we checked</h2>
      <SpecPlate familyId="mammotion-luba-3-awd" slotId="plate-luba3" modelName="LUBA 3 AWD 3000" />
      <SpecTable
        caption="LUBA 3 AWD 3000 figures checked Oct 10, 2026. Where two Mammotion pages disagree, both figures are shown."
        rows={[
          {
            label: "Rated area",
            value: formatAcres(m3000.acres),
            sources: ["mammotion-luba3-sku", "amz-luba3-3000"],
            checked: SPEC_CHECKED,
            href: "/guides/how-big-a-robot-mower-do-i-need",
            note: "3,000 m² on the sheet.",
          },
          {
            label: "Max slope",
            value: publishedSlope(m3000.slope, m3000.degrees),
            sources: ["mammotion-luba3", "amz-luba3-3000"],
            checked: SPEC_CHECKED,
            href: "/best/robot-mower-for-hills",
            note: `${interiorOrBoundary()} Degrees are the published 38.6°, not a computed stand-in.`,
          },
          {
            label: "Navigation",
            value: specText(m3000.specs.positioning),
            sources: ["mammotion-luba3", "amz-luba3-3000"],
            checked: SPEC_CHECKED,
            href: "/guides/rtk-vs-lidar-vs-vision",
          },
          {
            label: "Cutting width",
            value: specText(m3000.specs.cuttingWidth),
            sources: ["mammotion-luba3-global"],
            checked: SPEC_CHECKED,
            note: "400 mm dual-disc system, on the global series page.",
          },
          {
            label: "Cutting height",
            value: specText(m3000.specs.cuttingHeight),
            sources: ["amz-luba3-3000"],
            checked: SPEC_CHECKED,
            note: "Standard version. High-cut 3000H and 5000H: 2.2–4.0 in on the Mammotion US page.",
          },
          {
            label: "Narrowest gap",
            value: specText(m3000.specs.narrowestGap),
            sources: ["mammotion-luba3"],
            checked: SPEC_CHECKED,
            note: "70 cm.",
          },
          {
            label: "Obstacle clearance",
            value: specText(m3000.specs.obstacleClearance),
            sources: ["mammotion-luba3-sku"],
            checked: SPEC_CHECKED,
            note: "Standard model. The same note lists 3.2 in for the H version.",
          },
          {
            label: "Battery",
            value: specText(m3000.specs.battery),
            sources: ["amz-luba3-3000"],
            checked: SPEC_CHECKED,
            note: "The Mammotion US page says up to 15 Ah and up to 215 minutes for the series. The listing figure above is the 3000.",
          },
          {
            label: "Zones",
            value: specText(m3000.specs.zones),
            sources: ["amz-luba3-3000"],
            checked: SPEC_CHECKED,
            note: "Mammotion pages also cite 50 and 100 zones for the series. The figures do not agree.",
          },
          {
            label: "Drive",
            value: specText(m3000.specs.drive),
            sources: ["amz-luba3-3000"],
            checked: SPEC_CHECKED,
          },
        ]}
      />
      <h2>Trees and LiDAR</h2>
      <NavFour highlight={["network", "lidar"]} />
      <p className="measure">
        The 3000 uses network RTK, and LiDAR or a camera. Vision is the camera half of that second setup, not
        a separate product. The 1500 drops network RTK and keeps LiDAR and vision. That
        split matters under canopy, where a satellite fix weakens and a scanned map can still see the yard.{" "}
        <Link href="/guides/rtk-vs-lidar-vs-vision">How those setups fail</Link>.{" "}
        <SourceLine ids={["mammotion-luba3-sku"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Cut height: standard and high-cut</h2>
      <p className="measure">
        The standard 3000 cuts {specText(m3000.specs.cuttingHeight)}. That tops out too low for a St.
        Augustine lawn kept tall, and for summer fescue in the same situation. The high-cut 3000H and 5000H
        are listed at 2.2–4.0 in. They have no confirmed amazon.com listing, so the variant table shows the
        plain no-link line. <SourceLine ids={["amz-luba3-3000", "mammotion-luba3"]} checked={SPEC_CHECKED} />
      </p>
      <h2 id="slope">Slope</h2>
      <p className="measure">
        {slopeWithRise(m3000.slope, m3000.degrees)}. {interiorOrBoundary()} The 1500 and the 5000 publish{" "}
        {m1500.slope}%. Degrees are not on those rows. This page does not copy 38.6° onto them.{" "}
        <SourceLine ids={["mammotion-luba3"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Size and zones</h2>
      <p className="measure">
        The 3000 is {formatAcres(m3000.acres)}. {realisticLine(m3000.acres)} The 1500 is{" "}
        {formatAcres(m1500.acres)}. The 5000 is {formatAcres(m5000.acres)}. The amazon.com listing for the
        3000 says {specText(m3000.specs.zones)}. Mammotion pages also cite 50 zones and 100 zones for the
        series. Use the listing’s 30 if you are buying the 3000, and treat 50 and 100 as series claims that
        do not match it. <SourceLine ids={["amz-luba3-3000", "mammotion-luba3"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Edges and the gap</h2>
      <p className="measure">
        A distance-to-the-fence figure is not published. The narrowest gap on the US page is{" "}
        {specText(m3000.specs.narrowestGap)}. Obstacle clearance is {specText(m3000.specs.obstacleClearance)}{" "}
        on the standard model, and the SKU note lists 3.2 in for the H version. Cutting width is{" "}
        {specText(m3000.specs.cuttingWidth)}.{" "}
        <SourceLine ids={["mammotion-luba3", "mammotion-luba3-sku", "mammotion-luba3-global"]} checked={SPEC_CHECKED} />
      </p>
      <OwnerReports
        intro="In the owner threads we read for the October 10, 2026 check. Both themes are problems. A generic LiDAR praise piece was not about this model, so it is not repeated here."
        items={[
          {
            text: "Owners linked firmware 2.3.30.26 to blade cut-outs and restarts. A later note in the thread said a fix was being tried.",
            href: "https://www.reddit.com/r/MammotionTechnology/comments/1vtyyfi/",
            linkLabel: "Thread on firmware 2.3.30.26",
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
      <h2>Honest limits</h2>
      <ul className="grid gap-2 pl-5">
        <li>Tall-cut lawns on the standard version, which stops at 2.7 in.</li>
        <li>Buyers who want a long, settled record for the app. The threads above are uneven, and they are a small set.</li>
        <li>Anyone counting on features the Mammotion page marks as not available yet.</li>
        <li>A side passage under 27.6 in.</li>
      </ul>
      <h2>Connectivity and support</h2>
      <p className="measure">
        Built-in 4G includes 3 years of data, then a subscription is required. The price is not stated.
        NetRTK is described as free for life, and that depends on Mammotion’s cloud.{" "}
        <SourceLine ids={["mammotion-luba3"]} checked={SPEC_CHECKED} />
      </p>
      <p className="measure">
        The battery line disagrees with itself across pages: the amazon.com listing says up to 12 Ah and up
        to 175 minutes for the 3000, and the US product page says up to 15 Ah and up to 215 minutes for the
        series. <FccWaiver />
      </p>
      <h2>Two other yards</h2>
      <p className="measure">
        The Dreame A3 AWD Pro 2500 is LiDAR and vision without RTK, rated {formatAcres(dreame.acres)} and{" "}
        {publishedSlope(dreame.slope, dreame.degrees)}.{" "}
        <Link href="/reviews/dreame-a3-awd-pro">Dreame A3 AWD Pro review</Link>.
      </p>
      <p className="measure">
        The Navimow X430 is the open acre with a steeper published slope,{" "}
        {publishedSlope(x430.slope, x430.degrees)}, and no LiDAR.{" "}
        <Link href="/reviews/segway-navimow-x4">Navimow X4 review</Link>.
      </p>
      <Faq
        items={[
          {
            q: "Can the standard 3000 cut St. Augustine tall?",
            a: "The listing tops out at 2.7 in. If you keep St. Augustine higher than that, look at the high-cut 3000H, whose published range is 2.2–4.0 in. That row has no confirmed Amazon listing.",
          },
          {
            q: "How many zones does the 3000 have?",
            a: "The amazon.com listing says 30. Mammotion pages also cite 50 and 100 for the series. Those numbers were still in conflict on Oct 10, 2026.",
          },
          {
            q: "Will it fit a narrow side yard?",
            a: "The US page lists a narrowest gap of 27.6 in (70 cm). A passage under that width is outside the published figure.",
          },
        ]}
      />
      <ResearchedBox
        sources={sources.map((id) => ({ id }))}
        manuals="No owner's manual was in the source list for this page."
        threads="Four owner threads, read for the October 10, 2026 check."
        questions="No manufacturer questions have been answered yet."
      />
      <h2>See these models</h2>
      <p className="measure">The 3000 button is at the top of this page. The two comparisons:</p>
      <EndLinks
        pageType="review"
        links={[
          { asin: dreame.variant.asin, model: "Dreame A3 AWD Pro 2500", productSlug: dreame.family.slug },
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
          { href: "/best#luba-3-3000", label: "LUBA 3 AWD 3000 on the best-mowers page" },
          { href: "/best/robot-mower-for-hills", label: "What robot mower can climb my yard?" },
          { href: "/reviews/segway-navimow-x4", label: "Navimow X4 review" },
          { href: "/reviews/dreame-a3-awd-pro", label: "Dreame A3 AWD Pro review" },
          { href: "/vs/navimow-x430-vs-luba-3-awd-3000", label: "Navimow X430 vs LUBA 3 AWD 3000" },
          { href: "/vs/dreame-a3-awd-pro-vs-luba-3-awd", label: "Dreame A3 AWD Pro 2500 vs LUBA 3 AWD 3000" },
          { href: "/guides/rtk-vs-lidar-vs-vision", label: "RTK, LiDAR, or vision" },
          { href: "/guides/how-big-a-robot-mower-do-i-need", label: "How big a robot mower do I need?" },
        ]}
      />
    </ArticleFrame>
  );
}
