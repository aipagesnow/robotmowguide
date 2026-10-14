import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { Faq, QuickPick, Related, ResearchedBox, SourceLine } from "@/components/Blocks";
import { SlopeMarginNote } from "@/components/VoiceBits";
import { pageMeta } from "@/lib/metadata";
import { formatAcres, formatSqFt } from "@/lib/format";
import { modelFacts } from "@/lib/products";
import { publishedSlope } from "@/lib/speak";
import { RECHECKED, SPEC_CHECKED } from "@/lib/site";

const title = "Which robot mower for a half acre?";
const description =
  "A half acre of grass is 21,780 sq ft. Which current ratings cover that lawn, and which fall short once trees or a second zone come in.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/best/robot-mower-half-acre",
});

const sources = ["mova-2000", "amz-mova-2000", "mova-3000", "dreame-a3", "mammotion-luba3", "amz-i210"];

export default function HalfAcrePage() {
  const mova = modelFacts("mova-lidax-ultra", "LiDAX Ultra 2000");
  const movaAwd = modelFacts("mova-lidax-ultra", "LiDAX Ultra 3000 AWD");
  const dreame = modelFacts("dreame-a3-awd-pro", "A3 AWD Pro 2500");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");
  const i210 = modelFacts("segway-navimow-i2-awd", "Navimow i210 AWD");
  const need = 0.5 * 1.25;

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/best/robot-mower-half-acre"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Best", path: "/best" },
        { name: "Half acre", path: "/best/robot-mower-half-acre" },
      ]}
      updated={RECHECKED}
      whatChanged="October 13, 2026: first published."
      disclosure
    >
      <p className="measure">
        A half acre of grass is {formatSqFt(0.5)}. If your half acre is open, you'd want a rating of at least{" "}
        {formatAcres(0.5, false)}. If you've got heavy trees or two zones, you'd want a rating of at least {formatAcres(need, false)}.{" "}
        <Link href="/guides/how-big-a-robot-mower-do-i-need">how we size</Link>. The LiDAX Ultra 2000 covers
        the open lawn and misses the tree or two-zone one. The LUBA 3 AWD 3000 and the LiDAX Ultra 3000 AWD cover
        both.
      </p>
      <QuickPick
        pageType="best_for"
        items={[
          {
            yard: "Open half acre if your banks go up to 45%",
            model: "LiDAX Ultra 2000",
            href: "/reviews/mova-lidax-ultra",
            asin: mova.variant.asin,
            productSlug: mova.family.slug,
          },
          {
            yard: "A half acre with steeper banks and LiDAR",
            model: "Dreame A3 AWD Pro 2500",
            href: "/reviews/dreame-a3-awd-pro",
            asin: dreame.variant.asin,
            productSlug: dreame.family.slug,
          },
          {
            yard: "A half acre under your trees, plus RTK",
            model: "LUBA 3 AWD 3000",
            href: "/reviews/mammotion-luba-3-awd",
            asin: luba.variant.asin,
            productSlug: luba.family.slug,
          },
          {
            yard: "A half acre on an 80% slope, with LiDAR and AWD",
            model: "LiDAX Ultra 3000 AWD",
            href: "/reviews/mova-lidax-ultra",
            asin: movaAwd.variant.asin,
            productSlug: movaAwd.family.slug,
          },
        ]}
      />
      <YardPhoto id="photo-half-acre" />
      <h2>Rated area against a half acre</h2>
      <div className="table-scroll">
        <p className="scroll-cue">Swipe sideways to read every column.</p>
        <table className="data">
          <caption>
            Half acre is {formatAcres(0.5)}. The complex case asks for {formatAcres(need, false)}. Specs
            as of Oct 10, 2026, with MOVA listing titles also read on Oct 13, 2026.
          </caption>
          <thead>
            <tr>
              <th scope="col">Model</th>
              <th scope="col">Rated</th>
              <th scope="col">Open half acre</th>
              <th scope="col">Half acre with trees or two zones</th>
              <th scope="col">Slope</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Navimow i210 AWD", href: "/reviews/segway-navimow-i-series", acres: i210.acres, slope: publishedSlope(i210.slope, i210.degrees) },
              { name: "LiDAX Ultra 2000", href: "/reviews/mova-lidax-ultra", acres: mova.acres, slope: publishedSlope(mova.slope, mova.degrees) },
              { name: "Dreame A3 AWD Pro 2500", href: "/reviews/dreame-a3-awd-pro", acres: dreame.acres, slope: publishedSlope(dreame.slope, dreame.degrees) },
              { name: "LUBA 3 AWD 3000", href: "/reviews/mammotion-luba-3-awd", acres: luba.acres, slope: publishedSlope(luba.slope, luba.degrees) },
              { name: "LiDAX Ultra 3000 AWD", href: "/reviews/mova-lidax-ultra", acres: movaAwd.acres, slope: publishedSlope(movaAwd.slope, movaAwd.degrees) },
            ].map((row) => (
              <tr key={row.name}>
                <th scope="row">
                  <Link href={row.href}>{row.name}</Link>
                </th>
                <td className="dim">{formatAcres(row.acres)}</td>
                <td>{row.acres + 1e-9 >= 0.5 ? "Yes" : "No"}</td>
                <td>{row.acres + 1e-9 >= need ? "Yes" : "No"}</td>
                <td>{row.slope}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SlopeMarginNote />
      <h2>What a half-acre rating leaves out</h2>
      <p className="measure">
        The Ultra 2000 is rated {formatAcres(mova.acres, false)} and {publishedSlope(mova.slope, mova.degrees)}.
        It matches an open half acre and stops short of {formatAcres(need, false)}. The i210 is rated{" "}
        {formatAcres(i210.acres, false)}. It's the quarter-acre mower, not a half-acre one. If your lot is
        half an acre and the grass is only the back yard, measure the grass and use the{" "}
        <Link href="/best/robot-mower-small-yard">small-yard page</Link>.{" "}
        <SourceLine ids={["mova-2000", "amz-i210"]} checked="2026-10-13" />
      </p>
      <p className="measure">
        The Dreame 2500 is rated {formatAcres(dreame.acres, false)} and {dreame.slope}%. That area is just
        under {formatAcres(need, false)}, so a complex half acre isn't covered. It's still the LiDAR
        comparison when your bank is steeper than the Ultra 2000's 45%.{" "}
        <SourceLine ids={["dreame-a3"]} checked={SPEC_CHECKED} />
      </p>
      <p className="measure">
        The LUBA 3 AWD 3000 is rated {formatAcres(luba.acres, false)} and adds network RTK beside LiDAR. The
        Ultra 3000 AWD is rated {formatAcres(movaAwd.acres, false)} and {movaAwd.slope}%.
        Few owner reports exist yet for the MOVA family, so we'd treat that as a real gap.{" "}
        <Link href="/reviews/mova-lidax-ultra">The MOVA review</Link> says that plainly.{" "}
        <SourceLine ids={["mammotion-luba3", "mova-3000"]} checked={SPEC_CHECKED} />
      </p>
      <Faq
        items={[
          {
            q: "Is 0.5 acre the same as a half-acre lot?",
            a: "Only if the grass itself is half an acre. Take the house, the drive, and the beds out of the lot. Measure what's left, then compare it with the rated area.",
          },
          {
            q: "Which half-acre mower is for a steep bank?",
            a: "If your bank is steep, compare it with these. The Ultra 2000 publishes 45%. The Dreame 2500 and the LUBA 3000 publish 80%. The Ultra 3000 AWD publishes 80%. The hills page converts a bank you measure.",
          },
          {
            q: "What if the half acre is split by the house?",
            a: (
              <>
                That's two zones. You'd then want a rating of at least 0.625 acre.{" "}
                <Link href="/guides/how-big-a-robot-mower-do-i-need">how we size</Link>. The front-and-back
                guide is where your passage width decides whether one map can join them.
              </>
            ),
          },
        ]}
      />
      <ResearchedBox
        scope="group"
        sources={sources.map((id) => ({ id }))}
        manuals="No owner's manual was in the source list."
        threads="Owner threads are on the linked reviews."
        questions="No manufacturer has answered a question yet."
        specsLine="MOVA and i210 listing titles also read on Oct 13, 2026. Other specs as of Oct 10, 2026."
      />
      <Related
        links={[
          { href: "/guides/how-big-a-robot-mower-do-i-need", label: "How big a robot mower do I need?" },
          { href: "/guides/robot-mower-front-and-back-yard", label: "Front yard and back yard" },
          { href: "/best/robot-mower-1-acre", label: "Which robot mower for about 1 acre?" },
          { href: "/reviews/mova-lidax-ultra", label: "MOVA LiDAX Ultra review" },
          { href: "/vs/dreame-a3-awd-pro-vs-luba-3-awd", label: "Dreame A3 AWD Pro 2500 vs LUBA 3 AWD 3000" },
          { href: "/best/robot-mower-under-trees", label: "Which robot mower under trees?" },
        ]}
      />
    </ArticleFrame>
  );
}
