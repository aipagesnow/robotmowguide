import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { EndLinks, Faq, Related, ResearchedBox, SourceLine } from "@/components/Blocks";
import { ProductLink } from "@/components/ProductLink";
import { pageMeta } from "@/lib/metadata";
import { formatAcres } from "@/lib/format";
import { modelFacts, navigationLabel } from "@/lib/products";
import { interiorOrBoundary, publishedSlope, slopeWithRise, specText } from "@/lib/speak";
import { RECHECKED, SPEC_CHECKED } from "@/lib/site";

const title = "Worx Vision Cloud WR340 vs Navimow X430";
const description =
  "Two open-acre mowers. The WR340 stops at 30% (17°). The X430 publishes 84% (40°) and a 24 in body.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/vs/worx-vision-cloud-wr340-vs-navimow-x430",
});

const sources = ["worx-vision-cloud", "amz-wr340", "wirecutter", "navimow-x4", "amz-x430", "homedepot-x430"];

export default function VsWr340Page() {
  const worx = modelFacts("worx-landroid-vision-cloud", "Landroid Vision Cloud WR340 (1 acre, 2WD)");
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");

  const rows = [
    {
      topic: "Rated area",
      w: formatAcres(worx.acres),
      x: formatAcres(x430.acres),
      better: "An open acre: either rating covers it. A complex acre is a separate caution on the Worx review.",
    },
    {
      topic: "Slope",
      w: `${slopeWithRise(worx.slope, worx.degrees)}. Two-wheel drive. ${interiorOrBoundary()}`,
      x: `${slopeWithRise(x430.slope, x430.degrees)}. All-wheel drive. ${interiorOrBoundary()}`,
      better: "Banks between 30% and 84%: X430. Banks inside 30% (17°): the WR340’s published maximum covers them.",
    },
    {
      topic: "Navigation",
      w: navigationLabel(worx.family.navigation),
      x: navigationLabel(x430.family.navigation),
      better: "No antenna and a cloud RTK service Worx prices at no extra cost: WR340. A steeper acre that also has vision and a time-of-flight sensor: X430.",
    },
    {
      topic: "Cut",
      w: specText(worx.specs.cuttingHeight),
      x: specText(x430.specs.cuttingHeight),
      better: "A lawn kept near 4 in, such as standard St. Augustine: X430. A lawn inside 3.54 in: either.",
    },
    {
      topic: "Side passage",
      w: "Not published.",
      x: `Body width ${specText(x430.specs.bodyWidth)}.`,
      better: "A gap you can measure against a published body: X430, at 24 in. Under that, or if you need a WR340 width: neither figure clears it.",
    },
  ];

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/vs/worx-vision-cloud-wr340-vs-navimow-x430"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Head-to-head", path: "/vs" },
        { name: "WR340 vs X430", path: "/vs/worx-vision-cloud-wr340-vs-navimow-x430" },
      ]}
      updated={RECHECKED}
      whatChanged="October 13, 2026: first published."
      disclosure
    >
      <p className="measure">
        Buy the WR340 for an open acre whose banks stay inside {publishedSlope(worx.slope, worx.degrees)}.
        Buy the X430 when the banks are steeper, up to {publishedSlope(x430.slope, x430.degrees)}, and the
        side passage clears a {specText(x430.specs.bodyWidth)} body. Both are rated {formatAcres(x430.acres, false)}.
        We have not tested these mowers.
      </p>
      <div data-cta-cluster="true" className="grid gap-2">
        <p className="paid m-0">
          Paid links: <Link href="/affiliate-disclosure">see disclosure</Link>
        </p>
        <div className="flex flex-wrap gap-3">
          <ProductLink
            asin={worx.variant.asin}
            model="Landroid Vision Cloud WR340"
            productSlug={worx.family.slug}
            placement="vs_top"
            pageType="vs"
          />
          <ProductLink
            asin={x430.variant.asin}
            model="Navimow X430"
            productSlug={x430.family.slug}
            placement="vs_top"
            pageType="vs"
          />
        </div>
      </div>
      <YardPhoto id="photo-vs-wr340-x430" />
      <h2>Where they differ</h2>
      <div className="table-scroll">
        <p className="scroll-cue">Swipe sideways to read every column.</p>
        <table className="data">
          <caption>
            Five differences between the Worx Vision Cloud WR340 and the Navimow X430. Specs checked Oct 10,
            2026.
          </caption>
          <thead>
            <tr>
              <th scope="col">Difference</th>
              <th scope="col">Worx WR340</th>
              <th scope="col">Navimow X430</th>
              <th scope="col">Better for</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.topic}>
                <th scope="row">{row.topic}</th>
                <td>{row.w}</td>
                <td>{row.x}</td>
                <td>{row.better}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2>Choose the WR340</h2>
      <p className="measure">
        Choose it when the acre is open, the banks stay at or under {publishedSlope(worx.slope, worx.degrees)},
        and you want cloud RTK without an antenna. Worx says lifetime RTK Cloud service at no extra cost.
        That depends on Worx’s cloud. The WR344, not this model, is the 4WD sibling at a much steeper slope.{" "}
        <SourceLine ids={["worx-vision-cloud"]} checked={SPEC_CHECKED} />
      </p>
      <h2>Choose the X430</h2>
      <p className="measure">
        Choose it when the bank is between 30% and {publishedSlope(x430.slope, x430.degrees)}, or when the
        grass is kept tall enough to need a 4 inch cut. The body width is {specText(x430.specs.bodyWidth)}.
        Connect+ is free for 1 year on the X430, then a yearly fee. Network RTK is described as free for
        life, depending on Segway’s cloud. <SourceLine ids={["navimow-x4"]} checked={SPEC_CHECKED} />
      </p>
      <h2>What each review holds back</h2>
      <p className="measure">
        Find My Landroid is not settled on the WR340. The listing’s comparison chart marks it included.
        Wirecutter treats a GPS module as an extra. The{" "}
        <Link href="/reviews/worx-landroid-vision-cloud">Worx review</Link> leaves that conflict in place.
        Wirecutter also suggests a complex lawn closer to a quarter acre than the 1 acre rating.
      </p>
      <p className="measure">
        The X430 still needs Wi-Fi or cell service for network RTK, and canopy can drop the fix. The{" "}
        <Link href="/reviews/segway-navimow-x4">Navimow X4 review</Link> is the longer write-up. Owner threads
        for both models live on those reviews.
      </p>
      <Faq
        items={[
          {
            q: "Which one for a flat open acre?",
            a: "Either rating is 1 acre. Choose the WR340 if you want cloud RTK at no extra cost in Worx’s wording and the banks stay inside 30% (17°). Choose the X430 if you want the steeper published slope or a cut that reaches 4 in.",
          },
          {
            q: "Which one climbs a 40% bank?",
            a: "The X430. It publishes 84% (40°). The WR340 publishes 30% (17°). A 40% bank is above the WR340 and inside the X430 figure. Neither maker says whether the maximum is the interior or only the boundary.",
          },
          {
            q: "Do both need a boundary wire?",
            a: "No. Both are wire-free. The WR147 is the Worx boundary-wire model, and it is a different review.",
          },
        ]}
      />
      <ResearchedBox
        scope="group"
        sources={sources.map((id) => ({ id }))}
        manuals="No owner's manual was in the source list for this page."
        threads="Owner threads are on the two reviews, read for the October 10, 2026 check."
        questions="No manufacturer questions have been answered yet."
      />
      <h2>See both models</h2>
      <EndLinks
        pageType="vs"
        links={[
          { asin: worx.variant.asin, model: "Landroid Vision Cloud WR340", productSlug: worx.family.slug },
          { asin: x430.variant.asin, model: "Navimow X430", productSlug: x430.family.slug },
        ]}
      />
      <h2>Sources</h2>
      <ul className="grid gap-2 pl-5">
        {sources.map((id) => (
          <li key={id}>
            <SourceLine ids={[id]} checked={id.startsWith("amz-wr") || id === "wirecutter" ? RECHECKED : SPEC_CHECKED} />
          </li>
        ))}
      </ul>
      <Related
        links={[
          { href: "/reviews/worx-landroid-vision-cloud", label: "Worx Landroid Vision Cloud review" },
          { href: "/reviews/segway-navimow-x4", label: "Navimow X4 review" },
          { href: "/reviews/husqvarna-automower-iq", label: "Automower iQ review" },
          { href: "/best/robot-mower-1-acre", label: "Which robot mower for about 1 acre?" },
          { href: "/vs/navimow-x430-vs-luba-3-awd-3000", label: "Navimow X430 vs LUBA 3 AWD 3000" },
        ]}
      />
    </ArticleFrame>
  );
}
