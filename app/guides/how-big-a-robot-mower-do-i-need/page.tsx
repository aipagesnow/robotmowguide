import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { Faq, Related, SourceLine } from "@/components/Blocks";
import { AcreSquares, YardAcre, YardHalf, YardQuarter, YardWooded } from "@/components/Diagrams";
import { pageMeta } from "@/lib/metadata";
import { formatAcres, realisticAcres } from "@/lib/format";
import { getFamily, modelFacts } from "@/lib/products";
import { publishedSlope, realisticLine } from "@/lib/speak";

const title = "How big a robot mower do I need?";
const description =
  "Match a robot mower to the lawn you actually mow: rated acres, square feet, trees, and two zones.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/guides/how-big-a-robot-mower-do-i-need",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Guides", path: "/guides" },
  { name: "How big a robot mower do I need?", path: "/guides/how-big-a-robot-mower-do-i-need" },
];

export default function SizeGuide() {
  const i210 = modelFacts("segway-navimow-i2-awd", "Navimow i210 AWD");
  const dreame = modelFacts("dreame-a3-awd-pro", "A3 AWD Pro 2500");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");
  const worx = modelFacts("worx-landroid-vision-cloud", "Landroid Vision Cloud WR340 (1 acre, 2WD)");
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");
  const iq420 = modelFacts("husqvarna-automower-iq", "Automower 420 iQ");
  const iq410 = modelFacts("husqvarna-automower-iq", "Automower 410 iQ");
  const x450 = getFamily("segway-navimow-x4").variants.find((item) => item.model === "Navimow X450");
  const dreame3500 = getFamily("dreame-a3-awd-pro").variants.find((item) => item.model === "A3 AWD Pro 3500");
  const dreame5000 = getFamily("dreame-a3-awd-pro").variants.find((item) => item.model === "A3 AWD Pro 5000");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/guides/how-big-a-robot-mower-do-i-need"
      crumbs={crumbs}
      whatChanged="October 13, 2026: linked the front-and-back guide for a yard split by the house."
    >
      <p className="measure">
        Buy for the grass you mow, not the lot on the deed. Use the maker’s rated acres as the ceiling, then
        cut that number when the yard has heavy trees or a front lawn and a back lawn. Our rule for that
        case is rated area divided by 1.25. A 1 acre rating then plans on about {formatAcres(realisticAcres(1))}.
      </p>
      <YardPhoto id="photo-lot-sizes" />
      <div className="table-scroll">
        <p className="scroll-cue">Swipe sideways to read every column.</p>
        <table className="data">
          <caption>Rated area beside our 1.25× planning figure for heavy trees and two zones.</caption>
          <thead>
            <tr>
              <th scope="col">Rated area</th>
              <th scope="col">Square feet</th>
              <th scope="col">Plan on, with heavy trees and two zones</th>
            </tr>
          </thead>
          <tbody>
            {[0.25, 0.5, 0.62, 0.75, 1, 1.5].map((acres) => (
              <tr key={acres}>
                <th scope="row">{formatAcres(acres, false)}</th>
                <td className="dim">{formatAcres(acres).replace(/^.*\((.*)\)$/, "$1")}</td>
                <td className="dim">{formatAcres(realisticAcres(acres))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="measure">
        The 1.25× column is ours. It is not printed on a manufacturer page. One acre is 43,560 sq ft.
      </p>
      <h2>What an acre looks like on a lot</h2>
      <AcreSquares />
      <p className="measure">
        Sizes run from an eighth of an acre to one acre. A quarter acre is 10,890 sq ft. In the
        worked example, subtract a 1,200 sq ft house, a 600 sq ft drive, and 400 sq ft of beds from that lot
        and about 8,690 sq ft of lawn remains. That lawn is smaller than the 0.25 acre a maker might assume.
      </p>
      <YardQuarter />
      <p className="measure">
        A lot 90 ft by 121 ft is a quarter acre, with a front lawn and a back lawn. The Navimow i210 AWD is
        rated {formatAcres(i210.acres)}. {realisticLine(i210.acres)}{" "}
        <Link href="/best#navimow-i210">i210 pick</Link>.
      </p>
      <YardHalf />
      <p className="measure">
        A lot 132 ft by 165 ft is a half acre, {formatAcres(0.5)}, with a 3 ft side passage between the
        front and the back. Two zones matter even when the total grass is inside a rating. The Dreame A3 AWD
        Pro 2500 is rated {formatAcres(dreame.acres)}. Its page also says each of two maps needs its own
        charging station. <Link href="/best#dreame-a3-2500">Dreame pick</Link>.
      </p>
      <YardAcre />
      <p className="measure">
        A lot 180 ft by 242 ft is one acre, {formatAcres(1)}. The Navimow X430 and the Worx Landroid
        Vision Cloud WR340 are both rated {formatAcres(1)}. {realisticLine(1)} The slope and the trees decide
        which of those two ratings is the honest one.{" "}
        <Link href="/reviews/segway-navimow-x4">Navimow X4 review</Link>.
      </p>
      <h2>When the maker already discounts the rating</h2>
      <p className="measure">
        Do not stack our 1.25× rule on top of a maker’s own discount unless you mean to be that conservative.
        Say which number you are using.
      </p>
      <p className="measure">
        Husqvarna rates the Automower 420 iQ at {formatAcres(iq420.acres)} and{" "}
        {publishedSlope(iq420.slope, iq420.degrees)}, and 15% at the boundary. The same page describes 0.5
        acre for an irregular lawn and 1 acre for systematic mowing.{" "}
        <SourceLine ids={["husq-420iq"]} checked="2026-10-10" />
      </p>
      <p className="measure">
        The Automower 410 iQ is rated {formatAcres(iq410.acres)}, with a ±20% note on that area, and{" "}
        {publishedSlope(iq410.slope, iq410.degrees)}, and 15% at the boundary.{" "}
        <SourceLine ids={["husq-410iq"]} checked="2026-10-10" />
      </p>
      <p className="measure">
        The Navimow X4 page rates the X450 at {x450 ? formatAcres(Number(x450.ladder?.ratedAreaAcres?.value)) : "Not published"}{" "}
        and lists a map maximum of 1.8 acres for that model. That 1.8 acre figure belongs to the X450. It is
        not a general Navimow multiplier. <SourceLine ids={["navimow-x4"]} checked="2026-10-10" />
      </p>
      <p className="measure">
        Wirecutter, updated Aug 3, 2026, suggests a complex lawn closer to a quarter acre for the WR340,
        whose maker rates it at {formatAcres(worx.acres)}.{" "}
        <SourceLine ids={["wirecutter"]} checked="2026-10-10" />
      </p>
      <h2>Trees shrink the useful area</h2>
      <YardWooded />
      <p className="measure">
        Canopy over about a third of a lawn is enough to weaken a satellite fix along the mower’s path. The
        LUBA 3 AWD 3000 is rated {formatAcres(luba.acres)}. {realisticLine(luba.acres)}{" "}
        <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD review</Link>.{" "}
        <Link href="/guides/rtk-vs-lidar-vs-vision">How navigation fails under trees</Link>.
      </p>
      <h2>Ratings that do not include a slope</h2>
      <p className="measure">
        The Dreame A3 AWD Pro 3500 is rated{" "}
        {dreame3500 ? formatAcres(Number(dreame3500.ladder?.ratedAreaAcres?.value)) : "Not published"}, and
        the 5000 is rated{" "}
        {dreame5000 ? formatAcres(Number(dreame5000.ladder?.ratedAreaAcres?.value)) : "Not published"}. The
        rows we checked have no maximum slope for those two models. This guide does not copy the
        2500’s {publishedSlope(dreame.slope, dreame.degrees)} onto them.{" "}
        <SourceLine ids={["dreame-a3"]} checked="2026-10-10" />
      </p>
      <h2>What this means when you choose</h2>
      <ul className="grid gap-3 pl-5">
        <li>
          About a quarter acre, open: <Link href="/best#navimow-i210">Navimow i210 AWD</Link>, rated{" "}
          {formatAcres(i210.acres)}.
        </li>
        <li>
          About {formatAcres(dreame.acres, false)} with two zones:{" "}
          <Link href="/best#dreame-a3-2500">Dreame A3 AWD Pro 2500</Link>.
        </li>
        <li>
          About {formatAcres(luba.acres, false)} under trees:{" "}
          <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD 3000</Link>.
        </li>
        <li>
          An open acre: <Link href="/reviews/segway-navimow-x4">Navimow X430</Link> or{" "}
          <Link href="/best#worx-wr340">Worx WR340</Link>, then check slope.
        </li>
      </ul>
      <Faq
        items={[
          {
            q: "Is the rated acre the lot or the lawn?",
            a: "It is the mowing area the maker claims, not the deed. House, drive, beds, and a pool come out of the lot before you compare it with a rating.",
          },
          {
            q: "Should I always divide by 1.25?",
            a: "Use it for heavy trees and two zones, and say that you did. For an open single lawn, the maker’s rated area is the figure to start from. If the maker already prints a lower figure for irregular lawns, use that note.",
          },
          {
            q: "My front yard and back yard are separate. Does that count as one area?",
            a: (
              <>
                Add the grass, then ask whether the mower can pass between them or needs a second map and a
                second dock. The Dreame 2500 page says two maps each need a charging station. The{" "}
                <Link href="/guides/robot-mower-front-and-back-yard">front-and-back guide</Link> compares your
                opening with the published widths.
              </>
            ),
          },
        ]}
      />
      <Related
        links={[
          { href: "/best", label: "Best robot lawn mowers for US yards" },
          { href: "/best/robot-mower-1-acre", label: "Which robot mower for about 1 acre?" },
          { href: "/best/robot-mower-half-acre", label: "Which robot mower for a half acre?" },
          { href: "/guides/robot-mower-front-and-back-yard", label: "Front yard and back yard" },
          { href: "/tools/mower-finder", label: "Which mower fits my yard?" },
          { href: "/guides/rtk-vs-lidar-vs-vision", label: "RTK, LiDAR, or vision" },
          { href: "/how-picks-are-chosen", label: "How picks are chosen" },
        ]}
      />
    </ArticleFrame>
  );
}
