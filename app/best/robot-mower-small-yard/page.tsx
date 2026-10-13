import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { Faq, QuickPick, Related, ResearchedBox, SourceLine } from "@/components/Blocks";
import { pageMeta } from "@/lib/metadata";
import { formatAcres } from "@/lib/format";
import { modelFacts } from "@/lib/products";
import { interiorOrBoundary, publishedSlope, specText } from "@/lib/speak";
import { RECHECKED, SPEC_CHECKED } from "@/lib/site";

const title = "Which robot mower for a small yard?";
const description =
  "Quarter-acre and third-acre robot mowers for a small US yard, including the Navimow i210 AWD, the RockNeo Q110H, and the LUBA mini 2 AWD 1500H.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/best/robot-mower-small-yard",
});

const sources = ["amz-i210", "navimow-ces26", "amz-q110h", "q110h-manual", "mammotion-mini2", "amz-mini2-1500h", "amz-mova-1000", "worx-landroid-models", "worx-wr147-manual"];

export default function SmallYardPage() {
  const i210 = modelFacts("segway-navimow-i2-awd", "Navimow i210 AWD");
  const i105 = modelFacts("segway-navimow-i2-awd", "Navimow i105N (previous generation)");
  const q = modelFacts("roborock-rockneo-q110h", "RockNeo Q110H");
  const mini = modelFacts("mammotion-luba-mini-2-awd", "LUBA mini 2 AWD 1500H (high-cut)");
  const mova = modelFacts("mova-lidax-ultra", "LiDAX Ultra 1000");
  const wr147 = modelFacts("worx-landroid-m-wr147", "Landroid M WR147");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/best/robot-mower-small-yard"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Best", path: "/best" },
        { name: "Small yard", path: "/best/robot-mower-small-yard" },
      ]}
      updated={RECHECKED}
      whatChanged="October 13, 2026: added the Worx Landroid M WR147 as the boundary-wire quarter acre. The i1 models stay off the short list."
      disclosure
    >
      <p className="measure">
        A small yard here means about a quarter acre of grass, {formatAcres(0.25)}, up to the mini 2’s{" "}
        {formatAcres(mini.acres)}. The i210 AWD is the open quarter acre with no antenna. The Q110H is the
        other quarter-acre RTK mower, with a shorter cut. The mini 2 1500H is the step up when the bank is
        steep or the grass is kept tall.
      </p>
      <QuickPick
        pageType="best_for"
        items={[
          {
            yard: "Open quarter acre, no antenna",
            model: "Navimow i210 AWD",
            href: "/reviews/segway-navimow-i-series",
            asin: i210.variant.asin,
            productSlug: i210.family.slug,
          },
          {
            yard: "Open quarter acre, cut to 3.15 in",
            model: "RockNeo Q110H",
            href: "/reviews/roborock-rockneo-q110h",
            asin: q.variant.asin,
            productSlug: q.family.slug,
          },
          {
            yard: "Up to 0.37 acre, steep or tall grass",
            model: "LUBA mini 2 AWD 1500H",
            href: "/reviews/mammotion-luba-mini-2-awd",
            asin: mini.variant.asin,
            productSlug: mini.family.slug,
          },
          {
            yard: "Quarter acre on LiDAR",
            model: "LiDAX Ultra 1000",
            href: "/reviews/mova-lidax-ultra",
            asin: mova.variant.asin,
            productSlug: mova.family.slug,
          },
        ]}
      />
      <YardPhoto id="photo-small-yard" />
      <h2>Current small-yard ratings</h2>
      <div className="table-scroll">
        <p className="scroll-cue">Swipe sideways to read every column.</p>
        <table className="data">
          <caption>Current models around a quarter acre. The WR147 is the boundary-wire row. The i105N is not in this table.</caption>
          <thead>
            <tr>
              <th scope="col">Model</th>
              <th scope="col">Rated</th>
              <th scope="col">Slope</th>
              <th scope="col">Cut</th>
              <th scope="col">Navigation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <Link href="/reviews/segway-navimow-i-series">Navimow i210 AWD</Link>
              </th>
              <td className="dim">{formatAcres(i210.acres)}</td>
              <td>{publishedSlope(i210.slope, i210.degrees)}</td>
              <td className="dim">{specText(i210.specs.cuttingHeight)}</td>
              <td>Network RTK and vision. No antenna.</td>
            </tr>
            <tr>
              <th scope="row">
                <Link href="/reviews/roborock-rockneo-q110h">RockNeo Q110H</Link>
              </th>
              <td className="dim">{formatAcres(q.acres)}</td>
              <td>{publishedSlope(q.slope, q.degrees)}</td>
              <td className="dim">{specText(q.specs.cuttingHeight)}</td>
              <td>RTK, VSLAM, and vision.</td>
            </tr>
            <tr>
              <th scope="row">
                <Link href="/reviews/mammotion-luba-mini-2-awd">LUBA mini 2 AWD 1500H</Link>
              </th>
              <td className="dim">{formatAcres(mini.acres)}</td>
              <td>{publishedSlope(mini.slope, mini.degrees)}</td>
              <td className="dim">{specText(mini.specs.cuttingHeight)}</td>
              <td>LiDAR and vision. No antenna.</td>
            </tr>
            <tr>
              <th scope="row">
                <Link href="/reviews/mova-lidax-ultra">LiDAX Ultra 1000</Link>
              </th>
              <td className="dim">{formatAcres(mova.acres)}</td>
              <td>{publishedSlope(mova.slope, mova.degrees)}</td>
              <td className="dim">{specText(mova.specs.cuttingHeight)}</td>
              <td>LiDAR and vision. No RTK.</td>
            </tr>
            <tr>
              <th scope="row">
                <Link href="/reviews/worx-landroid-m-wr147">Worx Landroid M WR147</Link>
              </th>
              <td className="dim">{formatAcres(wr147.acres)}</td>
              <td>{publishedSlope(wr147.slope, wr147.degrees)}</td>
              <td className="dim">{specText(wr147.specs.cuttingHeight)}</td>
              <td>Boundary wire. Bump sensor.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>Leave the previous i1 off the short list</h2>
      <p className="measure">
        The i105N is rated {formatAcres(i105.acres)} and is marked superseded. It still has its own listing.
        It is not a current pick on this page. The i110N is the other previous-generation row, and it has no
        confirmed listing. Both stay on the{" "}
        <Link href="/reviews/segway-navimow-i-series">i series review</Link> with the superseded status line.{" "}
        <SourceLine ids={["amz-i105n", "amz-i210"]} checked="2026-10-13" />
      </p>
      <p className="measure">
        {interiorOrBoundary()} applies to the i210 and the Q110H. The Q110H’s 24.2° was calculated from 45%
        and is labeled that way on its review. The mini 2 publishes {publishedSlope(mini.slope, mini.degrees)}.
        A bank past 45% is a reason to leave the i210 and the Q110H.{" "}
        <Link href="/best/robot-mower-for-hills">Hills page</Link>.{" "}
        <SourceLine ids={["navimow-ces26", "q110h-manual", "mammotion-mini2"]} checked={SPEC_CHECKED} />
      </p>
      <p className="measure">
        Few owner reports exist yet for the LiDAX Ultra, and few exist yet for the US Q110H. The mini 2 has
        a short owner record, including a report of turns tearing thin sandy grass. Read those pages before
        you use a button.
      </p>
      <Faq
        items={[
          {
            q: "What counts as a small yard?",
            a: "About a quarter acre of grass, up to 0.37 acre for the mini 2. A half acre of grass is the next page, not this one.",
          },
          {
            q: "Can I buy the i105N from this list?",
            a: "No. It is the previous generation. The i series review keeps its own button and its superseded status line.",
          },
          {
            q: "Which small mower cuts tall grass?",
            a: "The mini 2 1500H listing says 2.2–4.0 in. The Q110H manual line is 1.57–3.15 in. The i210 listing says 2–3.6 in.",
          },
        ]}
      />
      <ResearchedBox
        scope="group"
        sources={sources.map((id) => ({ id }))}
        manuals="The Q110H English technical data was read Oct 13, 2026. The other rows use brand pages and listings."
        threads="Owner threads are on the linked reviews. MOVA and the Q110H have few."
        questions="No manufacturer questions have been answered yet."
        specsLine="Listing titles rechecked Oct 13, 2026."
      />
      <Related
        links={[
          { href: "/best/robot-mower-half-acre", label: "Which robot mower for a half acre?" },
          { href: "/best/robot-mower-under-trees", label: "Which robot mower under trees?" },
          { href: "/reviews/segway-navimow-i-series", label: "Navimow i series review" },
          { href: "/reviews/worx-landroid-m-wr147", label: "Worx Landroid M WR147 review" },
          { href: "/guides/robot-mower-front-and-back-yard", label: "Front yard and back yard" },
        ]}
      />
    </ArticleFrame>
  );
}
