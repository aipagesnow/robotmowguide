import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { Faq, QuickPick, Related, ResearchedBox } from "@/components/Blocks";
import { SlopeMarginNote } from "@/components/VoiceBits";
import { Slot } from "@/components/Slot";
import { SlopeConverter } from "@/components/SlopeTools";
import { currentCandidates } from "@/lib/candidates";
import { degreesFromPercent, formatDegrees, risePer10Ft } from "@/lib/format";
import { pageMeta } from "@/lib/metadata";
import { SLOPE_TABLE_PERCENTS, type Candidate } from "@/lib/match";
import { RECHECKED } from "@/lib/site";

const title = "What robot mower can climb my yard?";
const description =
  "Convert a slope to percent, degrees, and rise per 10 feet, then compare it with current mowers’ interior and boundary figures.";

export const metadata: Metadata = pageMeta({ title, description, path: "/best/robot-mower-for-hills" });

const sources = ["dreame-a3", "mammotion-luba3", "navimow-x4", "amz-wr344", "worx-vision-cloud", "husq-420iq"];

export default function HillsPage() {
  const candidates = currentCandidates();
  const dreame = candidates.find((item) => item.model === "A3 AWD Pro 2500");
  const luba = candidates.find((item) => item.model === "LUBA 3 AWD 3000");
  const x430 = candidates.find((item) => item.model === "Navimow X430");
  const wr344 = candidates.find((item) => item.model.startsWith("Landroid Vision Cloud 4WD WR344"));

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/best/robot-mower-for-hills"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Best", path: "/best" },
        { name: "Hills", path: "/best/robot-mower-for-hills" },
      ]}
      updated={RECHECKED}
      whatChanged="October 13, 2026: first published. Linked the half-acre page."
      disclosure
    >
      <p className="measure">
        A bank that rises 4 ft over 10 ft is a 40% slope (about 22°). Compare that with each mower's
        published maximum, and allow extra margin if the steep part is at the edge.
      </p>
      <QuickPick
        pageType="best_for"
        items={[
          dreame && {
            yard: "About 0.62 acre, 80% published",
            model: "Dreame A3 AWD Pro 2500",
            href: "/reviews/dreame-a3-awd-pro",
            asin: dreame.asin,
            productSlug: dreame.slug,
          },
          luba && {
            yard: "About 0.75 acre under trees, 80% (38.6° published)",
            model: "LUBA 3 AWD 3000",
            href: "/reviews/mammotion-luba-3-awd",
            asin: luba.asin,
            productSlug: luba.slug,
          },
          x430 && {
            yard: "An open acre, 84% (40° published)",
            model: "Navimow X430",
            href: "/reviews/segway-navimow-x4",
            asin: x430.asin,
            productSlug: x430.slug,
          },
          wr344 && {
            yard: "An acre on 4WD, 84% (about 40° on the listing)",
            model: "Worx WR344",
            href: "/reviews/worx-landroid-vision-cloud",
            asin: wr344.asin,
            productSlug: wr344.slug,
          },
        ].filter((item): item is NonNullable<typeof item> => Boolean(item))}
      />
      <YardPhoto id="photo-slope" />
      <h2>How to measure with a phone</h2>
      <p className="measure">
        Lay a straight board on the bank. Open the phone’s level app and set it on the board. Read the
        angle in degrees, or the percent if the app shows percent. The other way: run a 10 ft string line
        from the high point to the low point, pull it level, and measure the vertical gap with a tape. That
        gap in feet, divided by 10, times 100, is the percent. A 4 ft gap is 40%.
      </p>
      <h2>Converter</h2>
      <p className="measure">
        Percent, degrees, and rise per 10 ft are the same slope. Degrees are the arctangent of percent
        divided by 100. Rise over 10 ft is 10 ft times percent divided by 100.
      </p>
      <SlopeConverter candidates={candidates} />
      <h2>Printed conversions</h2>
      <p className="measure">
        These degrees are computed from the percent. They are not a second published rating. A model is
        listed when its published maximum is at least that percent. Where a boundary figure is lower, that
        maximum is the interior, and the boundary may not cover the same percent.
      </p>
      <PrintedSlopes candidates={candidates} />
      <SlopeMarginNote />
      <Slot id="dia-slope">
        <SlopeRuler />
      </Slot>
      <h2>Interior and boundary, model by model</h2>
      <ModelSlopes candidates={candidates} />
      <p className="measure">
        The Worx WR340 is rated 30%. It is the wrong pick when the bank is steeper than that. The
        WR344 is the 84% model in that family.{" "}
        <Link href="/reviews/worx-landroid-vision-cloud">Worx Landroid Vision Cloud review</Link>.
      </p>
      <Faq
        items={[
          {
            q: "What does 80% slope mean?",
            a: "80% is a rise of 8 ft over 10 ft. Dreame prints 38.7° and the LUBA 3 AWD 3000 prints 38.6°. A row with no published degree stays without one.",
          },
          {
            q: "Why do some mowers list two slopes?",
            a: "Husqvarna’s iQ pages put 15% at the boundary beside a higher interior figure. If your steep spot is the edge, the boundary number is the one that matters.",
          },
          {
            q: "Is 40% steep for a robot mower?",
            a: "40% is 4 ft over 10 ft. It is above the WR340’s 30% and under the 45% i210 figure and the 80% and 84% models.",
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
          { href: "/best/robot-mower-1-acre", label: "Robot mowers for about 1 acre" },
          { href: "/best/robot-mower-half-acre", label: "Which robot mower for a half acre?" },
          { href: "/guides/rtk-vs-lidar-vs-vision", label: "RTK, LiDAR, or vision" },
        ]}
      />
    </ArticleFrame>
  );
}

function PrintedSlopes({ candidates }: { candidates: Candidate[] }) {
  return (
    <div className="table-scroll">
      <p className="scroll-cue">Swipe sideways to read every column.</p>
      <table className="data">
        <caption>Percent, computed degrees, and rise per 10 ft. A model is listed when its published maximum covers that percent.</caption>
        <thead>
          <tr>
            <th scope="col">Percent</th>
            <th scope="col">Degrees, computed</th>
            <th scope="col">Rise per 10 ft</th>
            <th scope="col">Published maximum covers it</th>
          </tr>
        </thead>
        <tbody>
          {SLOPE_TABLE_PERCENTS.map((percent) => (
            <tr key={percent}>
              <th scope="row" className="dim">
                {percent}%
              </th>
              <td className="dim">{formatDegrees(degreesFromPercent(percent))}</td>
              <td className="dim">{risePer10Ft(percent)}</td>
              <td>
                {candidates
                  .filter((item) => item.slope + 1e-9 >= percent)
                  .map((item) => item.shortName)
                  .join("; ") || "None"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ModelSlopes({ candidates }: { candidates: Candidate[] }) {
  return (
    <div className="table-scroll">
      <p className="scroll-cue">Swipe sideways to read every column.</p>
      <table className="data">
        <caption>Published slope for every current model that has both area and slope. Interior is used only when the note also prints a boundary.</caption>
        <thead>
          <tr>
            <th scope="col">Model</th>
            <th scope="col">Interior</th>
            <th scope="col">Boundary</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.href ? <Link href={item.href}>{item.shortName}</Link> : item.shortName}</th>
              <td className="dim">
                {item.slope}% · {typeof item.degrees === "number" ? formatDegrees(item.degrees) : "degrees not published"} ·{" "}
                {risePer10Ft(item.slope)}
                {typeof item.boundarySlope === "number" ? " · interior" : ""}
              </td>
              <td className="dim">
                {typeof item.boundarySlope === "number"
                  ? `${item.boundarySlope}% · degrees not published · ${risePer10Ft(item.boundarySlope)} · boundary`
                  : "Not published"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SlopeRuler() {
  const marks = [15, 30, 45, 80, 84, 100];
  return (
    <figure className="blueprint mt-4">
      <svg role="img" viewBox="0 0 760 220" className="block h-auto w-full" aria-labelledby="slope-title slope-desc">
        <title id="slope-title">Slope ruler from 15 percent to 100 percent</title>
        <desc id="slope-desc">
          A ruler of slope percents with computed degrees and rise per 10 feet. 100 percent is 45 degrees.
        </desc>
        <rect width="760" height="220" fill="#123a63" />
        <line x1="40" y1="70" x2="720" y2="70" stroke="#dbe7f3" />
        {marks.map((percent) => {
          const x = 40 + ((percent - 15) / 85) * 680;
          return (
            <g key={percent}>
              <line x1={x} y1="58" x2={x} y2="82" stroke="#ffffff" />
              <text x={x} y="110" fill="#ffffff" fontSize="13" textAnchor="middle">
                {percent}%
              </text>
              <text x={x} y="132" fill="#dbe7f3" fontSize="12" textAnchor="middle">
                {formatDegrees(degreesFromPercent(percent))}
              </text>
              <text x={x} y="154" fill="#dbe7f3" fontSize="12" textAnchor="middle">
                {risePer10Ft(percent)}
              </text>
            </g>
          );
        })}
        <text x="40" y="196" fill="#ffffff" fontSize="14">
          Interior and boundary are labelled in the table. Colour is not the only cue.
        </text>
      </svg>
    </figure>
  );
}
