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
import { NavFour, SpecPlate } from "@/components/Diagrams";
import { SpecTable } from "@/components/SpecTable";
import { VariantTable } from "@/components/VariantTable";
import { pageMeta } from "@/lib/metadata";
import { formatAcres, risePer10Ft } from "@/lib/format";
import { modelFacts, navigationLabel } from "@/lib/products";
import { publishedSlope, slopeWithRise, specText } from "@/lib/speak";
import { SPEC_CHECKED } from "@/lib/site";

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
      status="On sale in the US as of Oct 10, 2026."
    >
      <p className="measure">
        If trees cover your lawn, the 3000 is the LUBA 3 we'd read first. It's rated {formatAcres(m3000.acres)}{" "}
        and {publishedSlope(m3000.slope, m3000.degrees)}, with LiDAR, network RTK, and vision together.
      </p>
      <p className="measure">
        If you need a cut above {specText(m3000.specs.cuttingHeight)}, we'd skip the standard version. The
        high-cut model is the one that reaches 4 in, and it doesn't have a confirmed amazon.com listing.
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
            detail: (
              <>
                <ComfortableFor rated={m3000.acres} /> Mammotion's US product page notes 3,000 m².
              </>
            ),
          },
          {
            label: "Max slope",
            value: slopeWithRise(m3000.slope, m3000.degrees),
          },
          {
            label: "Narrowest gap",
            value: specText(m3000.specs.narrowestGap),
            detail: "Here's the thing about side gates: they're often narrower than you remember. Mammotion's note is 70 cm, so grab a tape measure before you order. Anything tighter and it can't get through.",
          },
          {
            label: "Navigation",
            value: navigationLabel(family.navigation),
            detail: "The 3000 has all three. The 1500 is LiDAR and vision only, so there's no network RTK on that one.",
          },
          {
            label: "After the free data",
            value: "A subscription, price not stated",
            detail: "Built-in 4G includes 3 years of data. NetRTK is free for life, as long as Mammotion keeps its cloud running.",
          },
        ]}
      />
      <VariantTable
        family={family}
        pageType="review"
        differences={{
          "LUBA 3 AWD 1500": `Rated ${formatAcres(m1500.acres)}. LiDAR and vision only, no network RTK. Slope ${m1500.slope}%. Degrees aren't published for this model.`,
          "LUBA 3 AWD 3000": "The one we'd start with. Network RTK, LiDAR, and vision. Standard cut height is in the specs below.",
          "LUBA 3 AWD 5000": `Rated ${formatAcres(m5000.acres)}. Slope ${m5000.slope}%. Degrees aren't published for this model. Other specs aren't published.`,
          "LUBA 3 AWD 3000H / 5000H (high-cut)": `Cutting height ${high ? specText(high.specs?.cuttingHeight) : "Not published"}. Rated area and slope aren't published for this model.`,
        }}
      />
      <h2>Specs we checked</h2>
      <SpecPlate familyId="mammotion-luba-3-awd" slotId="plate-luba3" modelName="LUBA 3 AWD 3000" />
      <SpecTable
        caption="LUBA 3 AWD 3000 figures, checked Oct 10, 2026. Where two Mammotion pages disagree, you'll see both."
        rows={[
          {
            label: "Rated area",
            value: formatAcres(m3000.acres),
            sources: ["mammotion-luba3-sku", "amz-luba3-3000"],
            checked: SPEC_CHECKED,
            href: "/guides/how-big-a-robot-mower-do-i-need",
            note: "Mammotion's US product page notes 3,000 m², which is the area behind that rating.",
          },
          {
            label: "Max slope",
            value: publishedSlope(m3000.slope, m3000.degrees),
            sources: ["mammotion-luba3", "amz-luba3-3000"],
            checked: SPEC_CHECKED,
            href: "/best/robot-mower-for-hills",
            note: "Degrees are the published 38.6°, not a figure we worked out ourselves.",
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
            note: "It's a 400 mm dual-disc system, from the global series page.",
          },
          {
            label: "Cutting height",
            value: specText(m3000.specs.cuttingHeight),
            sources: ["amz-luba3-3000"],
            checked: SPEC_CHECKED,
            note: "That's the standard version. The high-cut 3000H and 5000H go to 2.2–4.0 in on the Mammotion US page.",
          },
          {
            label: "Narrowest gap",
            value: specText(m3000.specs.narrowestGap),
            sources: ["mammotion-luba3"],
            checked: SPEC_CHECKED,
            note: "That's 70 cm, so measure your gate before you order.",
          },
          {
            label: "Obstacle clearance",
            value: specText(m3000.specs.obstacleClearance),
            sources: ["mammotion-luba3-sku"],
            checked: SPEC_CHECKED,
            note: "That's the standard model. The same note lists 3.2 in for the H version.",
          },
          {
            label: "Battery",
            value: specText(m3000.specs.battery),
            sources: ["amz-luba3-3000"],
            checked: SPEC_CHECKED,
            note: "The Mammotion US page says up to 15 Ah and up to 215 minutes for the series. We'd use the listing figure for the 3000.",
          },
          {
            label: "Zones",
            value: specText(m3000.specs.zones),
            sources: ["amz-luba3-3000"],
            checked: SPEC_CHECKED,
            note: "Mammotion pages also cite 50 and 100 zones for the series. Those figures don't agree, so we'd use the listing.",
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
        If trees cover your lawn, the 3000's LiDAR is why we'd look at it. It uses network RTK, and LiDAR or
        a camera. Vision is the camera half of that second setup, not a separate product. The 1500 drops
        network RTK and keeps LiDAR and vision. That split matters under your canopy, where a satellite fix
        weakens and a scanned map can still see the yard.{" "}
        <Link href="/guides/rtk-vs-lidar-vs-vision">How those setups fail</Link>.{" "}
        <SourceLine ids={["mammotion-luba3-sku"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Cut height: standard and high-cut</h2>
      <p className="measure">
        The standard 3000 cuts {specText(m3000.specs.cuttingHeight)}, which is the one to read if you don't
        need a tall cut. That tops out too low for a St. Augustine lawn you keep tall, and for summer fescue
        in the same situation. The high-cut 3000H and 5000H are listed at 2.2–4.0 in. They don't have a
        confirmed amazon.com listing, so you'll see the plain no-link line instead of a button.{" "}
        <SourceLine ids={["amz-luba3-3000", "mammotion-luba3"]} checked={SPEC_CHECKED} />
      </p>
      <h2 id="slope">Slope</h2>
      <p className="measure">
        {m3000.slope}% is the slope we'd plan on, a rise of {risePer10Ft(m3000.slope)}. The 1500 and the 5000
        publish {m1500.slope}%. Degrees aren't published for those models.{" "}
        <SourceLine ids={["mammotion-luba3"]} checked={SPEC_CHECKED} />
      </p>
      <SlopeMarginNote />
      <h2>Size and zones</h2>
      <p className="measure">
        The 3000 is {formatAcres(m3000.acres)}, which is the size we'd match to your lawn.{" "}
        <ComfortableFor rated={m3000.acres} /> The 1500 is {formatAcres(m1500.acres, false)}. The 5000 is{" "}
        {formatAcres(m5000.acres, false)}. We'd plan on 30 zones for the 3000, because that's what its
        amazon.com listing says ({specText(m3000.specs.zones)}). You'll also see 50 and 100 on Mammotion's
        series pages, but those don't match this 3000, so we wouldn't count on the 50 or the 100.{" "}
        <SourceLine ids={["amz-luba3-3000", "mammotion-luba3"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Edges and the gap</h2>
      <p className="measure">
        Mammotion doesn't publish how close it gets to your fence, so you may still want a string trimmer
        along the beds. The narrowest gap on the US page is {specText(m3000.specs.narrowestGap)}. Obstacle
        clearance is {specText(m3000.specs.obstacleClearance)} on the standard model, and the SKU note lists
        3.2 in for the H version. Cutting width is {specText(m3000.specs.cuttingWidth)}.{" "}
        <SourceLine ids={["mammotion-luba3", "mammotion-luba3-sku", "mammotion-luba3-global"]} checked={SPEC_CHECKED} />
      </p>
      <OwnerReports
        intro="In the 4 owner threads we read in October 2026:"
        items={[
          {
            text: "Owners linked firmware 2.3.30.26 to the blades cutting out and the mower restarting. A later note in the thread said a fix was being tried.",
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
      <h2>Honest limits</h2>
      <ul className="grid gap-2 pl-5">
        <li>If you keep the grass tall, the standard version stops at 2.7 in.</li>
        <li>If you want a long, settled record for the app, the threads above are uneven, and they're a small set.</li>
        <li>If you're counting on features the Mammotion page marks as not available yet, we wouldn't.</li>
        <li>If your side passage is under 27.6 in, it won't get through.</li>
      </ul>
      <h2>Connectivity and support</h2>
      <p className="measure">
        You get built-in 4G with 3 years of data, then a subscription, and Mammotion doesn't say the price.
        NetRTK is free for life, as long as Mammotion keeps its cloud running.{" "}
        <SourceLine ids={["mammotion-luba3"]} checked={SPEC_CHECKED} />
      </p>
      <p className="measure">
        We'd plan on the amazon.com listing for the 3000: up to 12 Ah and up to 175 minutes. The US product
        page says up to 15 Ah and up to 215 minutes for the series, which is a different claim.
      </p>
      <SupportOutlook brand="Mammotion" />
      <p className="measure">
        The Mammotion US store was sold out on Oct 10, 2026. The amazon.com listing was live. Some features
        on the Mammotion page are marked as not available yet, so we wouldn't count on those.
      </p>
      <h2>Two other yards</h2>
      <p className="measure">
        If you want LiDAR without RTK, the Dreame A3 AWD Pro 2500 is the other yard we'd compare. It's rated{" "}
        {formatAcres(dreame.acres)} and {dreame.slope}%.{" "}
        <Link href="/reviews/dreame-a3-awd-pro">Dreame A3 AWD Pro review</Link>.
      </p>
      <p className="measure">
        If your lawn is an open acre, the Navimow X430 is the comparison, with a steeper published slope of{" "}
        {x430.slope}% and no LiDAR. <Link href="/reviews/segway-navimow-x4">Navimow X4 review</Link>.
      </p>
      <Faq
        items={[
          {
            q: "Can the standard 3000 cut St. Augustine tall?",
            a: "The listing tops out at 2.7 in. If you keep St. Augustine higher than that, we'd look at the high-cut 3000H, whose published range is 2.2–4.0 in. That model has no confirmed Amazon listing.",
          },
          {
            q: "How many zones does the 3000 have?",
            a: "We'd plan on 30 zones, because that's what its amazon.com listing says. You'll also see 50 and 100 on Mammotion's series pages, but those don't match this model, so we wouldn't count on them as of Oct 10, 2026.",
          },
          {
            q: "Will it fit a narrow side yard?",
            a: "Mammotion says you need at least 27.6 in (70 cm) through the side gate. If yours is tighter than that, it can't get through, so grab a tape measure before you order.",
          },
        ]}
      />
      <ResearchedBox
        sources={sources.map((id) => ({ id }))}
        manuals="No owner's manual was in the sources we used."
        threads="We read four owner threads in October 2026."
        questions="No manufacturer has answered questions yet."
      />
      <h2>See these models</h2>
      <p className="measure">The 3000 button is up top. The two comparisons:</p>
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
