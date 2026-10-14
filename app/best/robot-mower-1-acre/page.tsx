import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { Faq, QuickPick, Related, ResearchedBox, SourceLine } from "@/components/Blocks";
import { SlopeMarginNote } from "@/components/VoiceBits";
import { Slot } from "@/components/Slot";
import { pageMeta } from "@/lib/metadata";
import { formatAcres, realisticAcres } from "@/lib/format";
import { getFamily, modelFacts } from "@/lib/products";
import { interiorOrBoundary, publishedSlope } from "@/lib/speak";
import { RECHECKED, SPEC_CHECKED } from "@/lib/site";

const title = "Which robot mower for about 1 acre?";
const description =
  "Which current robot mowers are rated for an open acre, and which fall short once trees or a second zone come in.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/best/robot-mower-1-acre",
});

const sources = ["navimow-x4", "worx-vision-cloud", "wirecutter", "amz-wr344", "mammotion-luba3-sku", "dreame-a3", "husq-420iq"];

export default function AcrePage() {
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");
  const x450 = getFamily("segway-navimow-x4").variants.find((item) => item.model === "Navimow X450");
  const worx = modelFacts("worx-landroid-vision-cloud", "Landroid Vision Cloud WR340 (1 acre, 2WD)");
  const wr344 = modelFacts("worx-landroid-vision-cloud", "Landroid Vision Cloud 4WD WR344 (1 acre)");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");
  const luba5000 = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 5000");
  const dreame = modelFacts("dreame-a3-awd-pro", "A3 AWD Pro 2500");
  const dreame5000 = getFamily("dreame-a3-awd-pro").variants.find((item) => item.model === "A3 AWD Pro 5000");
  const i210 = modelFacts("segway-navimow-i2-awd", "Navimow i210 AWD");
  const iq420 = modelFacts("husqvarna-automower-iq", "Automower 420 iQ");
  const iq435 = modelFacts("husqvarna-automower-iq", "Automower 435 iQ AWD");
  const iq440 = modelFacts("husqvarna-automower-iq", "Automower 440 iQ");

  const rows = [
    { name: "Navimow i210 AWD", acres: i210.acres, slope: publishedSlope(i210.slope, i210.degrees), note: "Under an acre.", href: "/best#navimow-i210" },
    { name: "Dreame A3 AWD Pro 2500", acres: dreame.acres, slope: publishedSlope(dreame.slope, dreame.degrees), note: "Under an acre.", href: "/reviews/dreame-a3-awd-pro" },
    { name: "LUBA 3 AWD 3000", acres: luba.acres, slope: publishedSlope(luba.slope, luba.degrees), note: "Under an acre. LiDAR is the reason to read it for trees.", href: "/reviews/mammotion-luba-3-awd" },
    { name: "Worx WR340", acres: worx.acres, slope: publishedSlope(worx.slope, worx.degrees), note: "Covers an open acre. Not enough for trees or two zones. Wirecutter’s complex-lawn note is separate.", href: "/reviews/worx-landroid-vision-cloud" },
    { name: "Worx WR344", acres: wr344.acres, slope: publishedSlope(wr344.slope, wr344.degrees), note: "Same 1 acre rating, 4WD slope. Not enough for trees or two zones.", href: "/reviews/worx-landroid-vision-cloud" },
    { name: "Navimow X430", acres: x430.acres, slope: publishedSlope(x430.slope, x430.degrees), note: "Covers an open acre. Not enough for trees or two zones.", href: "/reviews/segway-navimow-x4" },
    { name: "Automower 420 iQ", acres: iq420.acres, slope: `${publishedSlope(iq420.slope, iq420.degrees)}. ${interiorOrBoundary(iq420.variant.ladder?.maxSlopePercent?.note)}`, note: iq420.variant.ladder?.ratedAreaAcres?.note || "Maker note on the area.", href: "/reviews/husqvarna-automower-iq" },
    { name: "A3 AWD Pro 5000", acres: Number(dreame5000?.ladder?.ratedAreaAcres?.value), slope: "Not published", note: "Dreame doesn't publish a slope figure for the 5000.", href: "/reviews/dreame-a3-awd-pro" },
    { name: "LUBA 3 AWD 5000", acres: luba5000.acres, slope: publishedSlope(luba5000.slope, luba5000.degrees), note: "Rated area meets 1.25 acres. Degrees are not published on this row.", href: "/reviews/mammotion-luba-3-awd" },
    { name: "Automower 435 iQ AWD", acres: iq435.acres, slope: `${publishedSlope(iq435.slope, iq435.degrees)}. ${interiorOrBoundary(iq435.variant.ladder?.maxSlopePercent?.note)}`, note: "Rated above 1.25 acres. No confirmed amazon.com listing.", href: "/reviews/husqvarna-automower-iq" },
    { name: "Navimow X450", acres: Number(x450?.ladder?.ratedAreaAcres?.value), slope: publishedSlope(Number(x450?.ladder?.maxSlopePercent?.value), typeof x450?.ladder?.maxSlopeDegrees?.value === "number" ? Number(x450.ladder.maxSlopeDegrees.value) : undefined), note: "Map maximum of 1.8 acres is stated for the X450 only. No confirmed amazon.com listing.", href: "/reviews/segway-navimow-x4" },
    { name: "Automower 440 iQ", acres: iq440.acres, slope: `${publishedSlope(iq440.slope, iq440.degrees)}. ${interiorOrBoundary(iq440.variant.ladder?.maxSlopePercent?.note)}`, note: "The largest rating in this table. No confirmed amazon.com listing.", href: "/reviews/husqvarna-automower-iq" },
  ];

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/best/robot-mower-1-acre"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Best", path: "/best" },
        { name: "1 acre", path: "/best/robot-mower-1-acre" },
      ]}
      updated={RECHECKED}
      whatChanged="October 13, 2026: first published. Linked the half-acre page."
      disclosure
    >
      <p className="measure">
        An open acre with one zone needs a model rated at least 1 acre. Heavy trees, or more than one zone,
        need a rating of at least 1.25 acres.{" "}
        <Link href="/guides/how-big-a-robot-mower-do-i-need">how we size</Link>. The X430, the WR340, and the
        WR344 are rated 1.0 acre, so they cover the open case and miss the complex case.
      </p>
      <QuickPick
        pageType="best_for"
        items={[
          {
            yard: "Open acre, steep banks",
            model: "Navimow X430",
            href: "/reviews/segway-navimow-x4",
            asin: x430.variant.asin,
            productSlug: x430.family.slug,
          },
          {
            yard: "Open acre, gentler banks",
            model: "Worx Landroid Vision Cloud WR340",
            href: "/reviews/worx-landroid-vision-cloud",
            asin: worx.variant.asin,
            productSlug: worx.family.slug,
          },
          {
            yard: "Open acre, 4WD slope",
            model: "Worx WR344",
            href: "/reviews/worx-landroid-vision-cloud",
            asin: wr344.variant.asin,
            productSlug: wr344.family.slug,
          },
          {
            yard: "1.5 acres, no confirmed listing",
            model: "Navimow X450",
            href: "/reviews/segway-navimow-x4",
            asin: x450?.asin ?? null,
            productSlug: x430.family.slug,
          },
        ]}
      />
      <YardPhoto id="photo-acre" />
      <h2>Rated area with trees or two zones</h2>
      <p className="measure">
        The Rated ÷ 1.25 column is the planning figure for heavy trees or two zones.{" "}
        <Link href="/guides/how-big-a-robot-mower-do-i-need">how we size</Link>.
      </p>
      <Slot id="dia-rated-vs-real">
        <RatedBars
          rows={[
            { name: "X430", rated: x430.acres },
            { name: "WR340", rated: worx.acres },
            { name: "LUBA 3000", rated: luba.acres },
            { name: "X450", rated: Number(x450?.ladder?.ratedAreaAcres?.value) },
          ]}
        />
      </Slot>
      <div className="table-scroll">
        <p className="scroll-cue">Swipe sideways to read every column.</p>
        <table className="data">
          <caption>
            Rated acres against the 1.25 planning figure. One acre of grass is 43,560 sq ft. Specs checked
            Oct 10, 2026, except the WR344 listing recheck on Oct 13, 2026.
          </caption>
          <thead>
            <tr>
              <th scope="col">Model</th>
              <th scope="col">Rated</th>
              <th scope="col">Rated ÷ 1.25</th>
              <th scope="col">Open acre</th>
              <th scope="col">1 acre with trees or two zones</th>
              <th scope="col">Slope</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <th scope="row">{row.href ? <Link href={row.href}>{row.name}</Link> : row.name}</th>
                <td className="dim">{formatAcres(row.acres)}</td>
                <td className="dim">{formatAcres(realisticAcres(row.acres))}</td>
                <td>{row.acres + 1e-9 >= 1 ? "Yes" : "No"}</td>
                <td>{row.acres + 1e-9 >= 1.25 ? "Yes" : "No"}</td>
                <td>
                  {row.slope}
                  <span className="mt-1 block text-[0.95rem] text-graphite">{row.note}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SlopeMarginNote />
      <h2>What the 1.0 acre ratings leave out</h2>
      <p className="measure">
        Wirecutter, updated Aug 3, 2026, suggests a complex lawn closer to a quarter acre than the WR340’s 1
        acre rating. That note is Wirecutter’s. The WR340 is not an award winner.{" "}
        <SourceLine ids={["wirecutter", "worx-vision-cloud"]} checked={SPEC_CHECKED} />
      </p>
      <p className="measure">
        The LUBA 3 AWD 3000 is rated {formatAcres(luba.acres)}. It does not cover a full acre. It is still
        the comparison when trees cover a smaller lawn, because it adds LiDAR. The Dreame 2500 is rated{" "}
        {formatAcres(dreame.acres, false)}. The i210 is rated {formatAcres(i210.acres, false)}.
      </p>
      <p className="measure">
        The 420 iQ area note says 0.5 acre for an irregular lawn and 1 acre for systematic mowing. Use
        Husqvarna’s figure for this model rather than <Link href="/guides/how-big-a-robot-mower-do-i-need#trees-or-two-zones">how we size</Link>. The same page puts 15% at the boundary
        beside the higher slope figure, so that higher figure is the interior and 15% is the boundary.{" "}
        <SourceLine ids={["husq-420iq"]} checked={SPEC_CHECKED} />
      </p>
      <p className="measure">
        The X450, the LUBA 5000, the Dreame 5000, and the Husqvarna iQ rows above do not have a confirmed
        amazon.com listing in the data checked for this page, except where a button appears in the quick
        pick. The X450 row in that box has no button for that reason.
      </p>
      <Faq
        items={[
          {
            q: "Is a 1 acre rating enough for 1 acre of grass?",
            a: (
              <>
                For one open zone, yes: the rating has to be at least 1 acre. For heavy trees or two zones,
                the rating needs to be at least 1.25 acres.{" "}
                <Link href="/guides/how-big-a-robot-mower-do-i-need">how we size</Link>. The X430, WR340, and
                WR344 are 1.0 acre models.
              </>
            ),
          },
          {
            q: "Which 1 acre mower is for a steep bank?",
            a: "The X430 publishes 84% (40°). The WR344 publishes 84%. The WR340 publishes 30%. The hills page converts a measured bank.",
          },
          {
            q: "What if the lawn is over about 2 acres?",
            a: "The finder says nothing fits once the lawn is past every current rating, and it points at two mowers or a commercial unit. The 440 iQ is rated 2 acres and has no confirmed listing here.",
          },
        ]}
      />
      <ResearchedBox
        scope="group"
        sources={sources.map((id) => ({ id }))}
        manuals="No owner's manual was in the source list for this page."
        threads="Owner threads are on the linked reviews, read in October 2026."
        questions="No manufacturer questions have been answered yet."
        specsLine="Specs checked Oct 10, 2026. The WR344 listing was opened again on Oct 13, 2026."
      />
      <Related
        links={[
          { href: "/tools/mower-finder", label: "Which mower fits my yard?" },
          { href: "/best", label: "Best robot lawn mowers for US yards" },
          { href: "/best/robot-mower-for-hills", label: "What robot mower can climb my yard?" },
          { href: "/best/robot-mower-half-acre", label: "Which robot mower for a half acre?" },
          { href: "/guides/how-big-a-robot-mower-do-i-need", label: "How big a robot mower do I need?" },
          { href: "/reviews/segway-navimow-x4", label: "Navimow X4 review" },
          { href: "/reviews/worx-landroid-vision-cloud", label: "Worx Landroid Vision Cloud review" },
        ]}
      />
    </ArticleFrame>
  );
}

function RatedBars({ rows }: { rows: { name: string; rated: number }[] }) {
  const max = 1.6;
  return (
    <figure className="blueprint mt-4">
      <svg role="img" viewBox="0 0 760 280" className="block h-auto w-full" aria-labelledby="acre-title acre-desc">
        <title id="acre-title">Rated area beside the 1.25 planning figure</title>
        <desc id="acre-desc">
          Four bars. The longer bar is the rated acres. The shorter bar is that rating divided by 1.25.
        </desc>
        <rect width="760" height="280" fill="#123a63" />
        {rows.map((row, index) => {
          const y = 36 + index * 60;
          const ratedW = (row.rated / max) * 520;
          const realW = (realisticAcres(row.rated) / max) * 520;
          return (
            <g key={row.name}>
              <text x="24" y={y} fill="#ffffff" fontSize="14">
                {row.name}
              </text>
              <rect x="150" y={y - 14} width={ratedW} height="12" fill="#ffffff" />
              <rect x="150" y={y + 2} width={realW} height="12" fill="#dbe7f3" />
              <text x={160 + ratedW} y={y - 3} fill="#ffffff" fontSize="12">
                {row.rated} ac rated
              </text>
            </g>
          );
        })}
        <text x="24" y="262" fill="#ffffff" fontSize="14">
          White is rated acres. The pale bar is rated divided by 1.25. The table has the same numbers.
        </text>
      </svg>
    </figure>
  );
}
