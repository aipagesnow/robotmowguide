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

const PATH = "/reviews/ecovacs-goat-a3000-lidar-pro";
const CHECKED = "2026-11-18";
const PUBLISHED = "2026-11-18";
const FACT =
  "Edited and fact-checked by the Robot Mow Guide editors at Aivora Digital. Specs checked against manufacturer pages on Nov 18, 2026.";

const title = "GOAT A3000 LiDAR PRO review: robot mower with an edge trimmer";
const description =
  "The GOAT A3000 LiDAR PRO has a built-in string trimmer for edges and is rated for 0.75 acre and 50% slopes. Owners say to keep a trimmer for no-go zones.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: PATH,
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Reviews", path: "/reviews" },
  { name: "ECOVACS GOAT A3000 LiDAR PRO", path: PATH },
];

const sources = [
  "ecovacs-a3000-lidar",
  "ecovacs-a2000-lidar",
  "ecovacs-a-lidar-manual",
  "amz-goat-a3000-lidar",
  "amz-goat-a2000-lidar",
  "bgr-goat-a3000",
  "9to5-goat-a3000",
];

export default function GoatA3000Review() {
  const a3000 = modelFacts("ecovacs-goat-a3000-lidar-pro", "GOAT A3000 LiDAR PRO");
  const a2000 = modelFacts("ecovacs-goat-a3000-lidar-pro", "GOAT A2000 LiDAR PRO");
  const family = a3000.family;
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");
  const dreame = modelFacts("dreame-a3-awd-pro", "A3 AWD Pro 3500");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path={PATH}
      crumbs={crumbs}
      updated={CHECKED}
      published={PUBLISHED}
      factCheck={FACT}
      disclosure
      status="On sale in the US as of Nov 18, 2026."
    >
      <p className="measure">
        Short answer: if you want a robot mower that trims its own edges on a lawn up to about three-quarters of
        an acre, the GOAT A3000 LiDAR PRO is worth a look. Unlike the other mowers we cover, it has a string
        trimmer built into the side. It's rated for {formatAcres(a3000.acres)} and slopes up to {publishedSlope(a3000.slope, a3000.degrees)}, and it
        finds its way with LiDAR, so there's no boundary wire and no RTK antenna.
      </p>
      <p className="measure">
        Here's the catch: the trimmer cuts closest along hard edges the mower can see, like a wall, a fence or a
        paver edge. Around flower beds and trees you've marked as no-go zones, owners report gaps of several
        inches. So we'd plan on it shrinking your trimming, not ending it.
      </p>
      <CtaCluster>
        <ProductLink
          asin={a3000.variant.asin}
          model="GOAT A3000 LiDAR PRO"
          productSlug={family.slug}
          placement="verdict"
          pageType="review"
        />
      </CtaCluster>
      <YardPhoto id="card-goat-a3000" />
      <h2>Key numbers for your yard</h2>
      <KeyNumbers
        rows={[
          {
            label: "Rated area",
            value: formatAcres(a3000.acres),
            detail: (
              <>
                <ComfortableFor rated={a3000.acres} /> ECOVACS rates it in metric as 3,000 m². The A2000 is{" "}
                {formatAcres(a2000.acres, false)}.
              </>
            ),
          },
          {
            label: "Max slope",
            value: slopeWithRise(a3000.slope, a3000.degrees),
            detail: "That's inside the lawn. ECOVACS gives 20% for a virtual boundary.",
          },
          {
            label: "Edges",
            value: "Side string trimmer, 7.1 in wide",
            detail: "Blade edge mowing leaves about 2 in. The trimmer is rated to about 0 in.",
          },
          {
            label: "Paths",
            value: "2.95 ft (0.9 m)",
            detail: "The manual's minimum passage width. Measure your side gate before you buy.",
          },
          {
            label: "Navigation",
            value: navigationLabel(family.navigation),
            detail: specText(a3000.specs.positioning),
          },
          {
            label: "Connectivity",
            value: "Wi-Fi and Bluetooth",
            detail: "The manual says home Wi-Fi is required. 4G needs ECOVACS' optional cellular module.",
          },
        ]}
      />
      <h2>How the edge trimmer works</h2>
      <p className="measure">
        The trimmer is a small string head on the right side of the mower, and it runs as its own job. In the app
        you mark which edges to trim, and the mower runs them as a separate task or on its own schedule. ECOVACS
        lists the trimmer as 7.1 in (18 cm) wide, spinning at 8,500 rpm. The main blades mow to about 2 in (5 cm) from an edge, and
        the trimmer is meant to take that last strip down to about zero.{" "}
        <SourceLine ids={["ecovacs-a3000-lidar", "ecovacs-a-lidar-manual", "9to5-goat-a3000"]} checked={CHECKED} />
      </p>
      <p className="measure">
        Two things are worth knowing before you count on it. The trimmer is loud, rated at 82 dB(A) against 62 for
        mowing, so you'll want trim jobs at a time your neighbors won't mind. And it stops when it senses a person
        nearby. The manual says to stay at least 6.5 ft (2 m) away while it runs, so if your kids play out there,
        schedule trimming for when they're inside.{" "}
        <SourceLine ids={["ecovacs-a3000-lidar", "ecovacs-a-lidar-manual"]} checked={CHECKED} />
      </p>
      <h2>Where it trims close, and where it doesn't</h2>
      <p className="measure">
        It does best along long, straight edges the mower can see as it goes: a house wall, a fence, a driveway or
        a paver path. BGR's reviewer says it took over about 75 to 90% of the trimming they'd otherwise do, with
        touch-ups left at corners. The owners in the threads below are less upbeat.{" "}
        <SourceLine ids={["bgr-goat-a3000"]} checked={CHECKED} />
      </p>
      <p className="measure">
        No-go zones are the weak spot. If your lawn is ringed with mulch beds, tree circles and a swing set, those
        mapped lines are where owners report several inches of uncut grass. One owner gets a closer cut where the
        mower can see a solid edge than along a line drawn only in the app. So if most of your edging is beds and
        trees, keep the string trimmer handy.
      </p>
      <OwnerReports
        intro="In the 3 owner threads we read in November 2026:"
        items={[
          {
            text: "An A3000 Pro owner, about two weeks in, says the mower itself is great and well worth it, but the string trimmer doesn't work well.",
            href: "https://www.reddit.com/r/ECOVACSGOATFamily/comments/1rxvsjj/",
            linkLabel: "Two-week A3000 Pro thread",
          },
          {
            text: "An A3000 Pro owner, about six weeks in, reports around 6 in of uncut grass along no-go zones after remapping, and has stopped using the trimmer.",
            href: "https://www.reddit.com/r/ECOVACSGOATFamily/comments/1vmjbd6/",
            linkLabel: "No-go zone thread",
          },
          {
            text: "An A3000 LiDAR owner says they get a cut as close as RTK models by placing solid blocks the mower can see, rather than relying on a mapped boundary.",
            href: "https://www.reddit.com/r/ECOVACSGOATFamily/comments/1v9wbdu/",
            linkLabel: "Trim distance thread",
          },
        ]}
      />
      <VariantTable
        family={family}
        pageType="review"
        caption="Both models share the same body, trimmer and manual. Amazon listings checked Nov 18, 2026."
        differences={{
          "GOAT A3000 LiDAR PRO": `The three-quarter-acre model. Rated ${formatAcres(a3000.acres)}. 7.5 Ah battery, up to 160 min per charge.`,
          "GOAT A2000 LiDAR PRO": `The half-acre model. Rated ${formatAcres(a2000.acres)}. Same slope and trimmer. 3.0 Ah battery, up to 50 min per charge.`,
        }}
      />
      <h2>Specs we checked</h2>
      <SpecTable
        caption="GOAT A3000 LiDAR PRO, unless a line names the A2000. Specs from the ECOVACS US product page and owner's manual, checked Nov 18, 2026."
        rows={[
          {
            label: "Rated area",
            value: `${formatAcres(a3000.acres)}, 3,000 m²`,
            sources: ["ecovacs-a-lidar-manual"],
            checked: CHECKED,
            href: "/guides/how-big-a-robot-mower-do-i-need",
          },
          {
            label: "Max slope",
            value: publishedSlope(a3000.slope, a3000.degrees),
            sources: ["ecovacs-a3000-lidar", "ecovacs-a-lidar-manual"],
            checked: CHECKED,
            href: "/best/robot-mower-for-hills",
            note: "20% on a virtual boundary.",
          },
          {
            label: "Navigation",
            value: specText(a3000.specs.positioning),
            sources: ["ecovacs-a3000-lidar", "amz-goat-a3000-lidar"],
            checked: CHECKED,
            href: "/guides/rtk-vs-lidar-vs-vision",
          },
          {
            label: "Cutting width",
            value: "13 in (33 cm), two blade discs",
            sources: ["ecovacs-a3000-lidar", "ecovacs-a-lidar-manual"],
            checked: CHECKED,
          },
          {
            label: "Cutting height",
            value: "1.2–3.5 in (30–90 mm), 7 settings in the app",
            sources: ["ecovacs-a3000-lidar"],
            checked: CHECKED,
          },
          {
            label: "Edge trimmer",
            value: specText(a3000.specs.trimmer),
            sources: ["ecovacs-a3000-lidar", "ecovacs-a-lidar-manual"],
            checked: CHECKED,
          },
          {
            label: "Edge distance",
            value: specText(a3000.specs.edgeCutting),
            sources: ["ecovacs-a3000-lidar", "ecovacs-a2000-lidar"],
            checked: CHECKED,
          },
          {
            label: "Narrowest passage",
            value: "2.95 ft (0.9 m)",
            sources: ["ecovacs-a-lidar-manual", "ecovacs-a2000-lidar"],
            checked: CHECKED,
            href: "/guides/robot-mower-front-and-back-yard",
          },
          {
            label: "Battery and charge",
            value: `${specText(a3000.specs.battery)}; up to ${specText(a3000.specs.runtime)}; about ${specText(a3000.specs.chargeTime)} to recharge`,
            sources: ["ecovacs-a3000-lidar", "ecovacs-a-lidar-manual"],
            checked: CHECKED,
          },
          {
            label: "Weather",
            value: specText(a3000.specs.waterproofing),
            sources: ["ecovacs-a3000-lidar"],
            checked: CHECKED,
          },
          {
            label: "Weight",
            value: "40.3 lb (18.3 kg)",
            sources: ["ecovacs-a-lidar-manual"],
            checked: CHECKED,
          },
          {
            label: "Theft",
            value: specText(a3000.specs.theft),
            sources: ["ecovacs-a-lidar-manual"],
            checked: CHECKED,
            href: "/guides/robot-mower-theft-protection",
          },
        ]}
      />
      <h2>Is three-quarters of an acre your size?</h2>
      <p className="measure">
        If your open lawn is somewhere between a half and three-quarters of an acre, the A3000 is the size we'd
        look at. <ComfortableFor rated={a3000.acres} /> If your grass is closer to a half acre, the A2000 has the
        same trimmer and slope rating with a smaller battery.{" "}
        <Link href="/guides/how-big-a-robot-mower-do-i-need">How big a mower do you need?</Link>{" "}
        <SourceLine ids={["ecovacs-a-lidar-manual"]} checked={CHECKED} />
      </p>
      <h2>Slope: fine for a gentle bank</h2>
      <p className="measure">
        It's rated for {publishedSlope(a3000.slope, a3000.degrees)}, a rise of {risePer10Ft(a3000.slope)}. That covers
        most rolling yards. If you've got a steep bank, though, the{" "}
        <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD 3000</Link> is rated for {luba.slope}% on the same{" "}
        {formatAcres(luba.acres, false)}. And ECOVACS gives just 20% for a virtual boundary, so keep the edge of
        your map off the slope.{" "}
        <SourceLine ids={["ecovacs-a3000-lidar", "ecovacs-a-lidar-manual"]} checked={CHECKED} />
      </p>
      <SlopeMarginNote />
      <h2>LiDAR, Wi-Fi and the 4G add-on</h2>
      <p className="measure">
        It maps your yard with two LiDAR sensors and a camera, so it doesn't need a clear view of the sky. That's
        handy if part of your lawn sits under trees. Worth knowing: the manual says home Wi-Fi is required, on the
        2.4 GHz band. If your router doesn't reach the far corner, ECOVACS sells a cellular module for 4G.{" "}
        <Link href="/guides/rtk-vs-lidar-vs-vision">RTK, LiDAR or vision?</Link>{" "}
        <SourceLine ids={["ecovacs-a3000-lidar", "ecovacs-a-lidar-manual"]} checked={CHECKED} />
      </p>
      <h2>Honest limits</h2>
      <ul className="grid gap-2 pl-5">
        {family.notFor?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <SupportOutlook brand="ECOVACS" />
      <h2>Two neighbors on the ladder</h2>
      <p className="measure">
        If edges matter but you'd rather skip the string, the{" "}
        <Link href="/reviews/dreame-a3-awd-pro">Dreame A3 AWD Pro 3500</Link> is rated{" "}
        {formatAcres(dreame.acres, false)} and {dreame.slope}%, and it uses an edge mode that pushes its blade
        discs out toward the edge, with no string trimmer. The <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD 3000</Link> matches the A3000's size
        and handles steeper ground, with no trimmer.{" "}
        <Link href="/vs/luba-mini-2-awd-1500h-vs-dreame-a3-awd-pro-3500">How the edge modes compare</Link>.
      </p>
      <Faq
        items={[
          {
            q: "Does a robot mower with an edge trimmer replace my string trimmer?",
            a: "Not completely. ECOVACS rates the trimmer to about 0 in from an edge, and a BGR reviewer says it took over most of their trimming. Owners report gaps around no-go zones, so keep a string trimmer for beds and trees.",
          },
          {
            q: "Is the GOAT A3000 LiDAR PRO wire-free?",
            a: "Yes. It maps with LiDAR and a camera, so there's no boundary wire and no RTK antenna to place.",
          },
          {
            q: "What's the difference between the A3000 and the A2000?",
            a: "Size and battery. The A3000 is rated for 0.75 acre with a 7.5 Ah battery. The A2000 is rated for 0.5 acre with a 3.0 Ah battery. Both have the same trimmer and 50% slope rating.",
          },
          {
            q: "Can it run without Wi-Fi?",
            a: "The manual says home Wi-Fi is required. ECOVACS sells an optional cellular module for 4G if your Wi-Fi doesn't reach the lawn.",
          },
        ]}
      />
      <ResearchedBox
        sources={sources.map((id) => ({ id }))}
        manuals="The GOAT A2000/A3000 LiDAR PRO instruction manual (ECOVACS US, PDF)."
        threads="Three owner threads from r/ECOVACSGOATFamily, March to August 2026, each from a different owner."
        questions="No manufacturer has answered questions yet."
        specsLine="ECOVACS US product pages and manual checked Nov 18, 2026. Amazon listings checked the same day."
      />
      <EndLinks
        pageType="review"
        links={[
          { asin: a3000.variant.asin, model: "GOAT A3000 LiDAR PRO", productSlug: family.slug },
          { asin: a2000.variant.asin, model: "GOAT A2000 LiDAR PRO", productSlug: family.slug },
        ]}
      />
      <h2>Sources</h2>
      <ul className="grid gap-2 pl-5">
        {sources.map((id) => (
          <li key={id}>
            <SourceLine ids={[id]} checked={CHECKED} />
          </li>
        ))}
      </ul>
      <Related
        links={[
          { href: "/best/robot-mower-1-acre", label: "Which robot mower for an acre?" },
          { href: "/reviews/mammotion-luba-3-awd", label: "LUBA 3 AWD review" },
          { href: "/guides/rtk-vs-lidar-vs-vision", label: "RTK, LiDAR, or vision" },
        ]}
      />
    </ArticleFrame>
  );
}
