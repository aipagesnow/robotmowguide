import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { AreaEstimate } from "@/components/AreaEstimate";
import { CtaCluster, Faq, Related, SourceLine } from "@/components/Blocks";
import { ProductLink } from "@/components/ProductLink";
import { currentCandidates } from "@/lib/candidates";
import { AcreSquares, YardAcre, YardHalf, YardQuarter, YardWooded } from "@/components/Diagrams";
import { ComfortableFor, SlopeMarginNote } from "@/components/VoiceBits";
import { pageMeta } from "@/lib/metadata";
import { formatAcres, realisticAcres } from "@/lib/format";
import { getFamily, modelFacts } from "@/lib/products";
import { publishedSlope } from "@/lib/speak";
import { RECHECKED } from "@/lib/site";

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
      updated={RECHECKED}
      whatChanged="October 13, 2026: added an area check for trees or two zones."
      disclosure
    >
      <p className="measure" id="trees-or-two-zones">
        You size it to the grass you mow. A rating assumes an open, simple lawn. If yours has heavy tree cover or is split into two zones, a
        sensible rule of thumb is to divide the rating by 1.25. On that basis a 1-acre mower is a comfortable
        fit for about 0.8 acres. That's our own rule of thumb, not a figure from the maker.
      </p>
      <CtaCluster>
        <ProductLink
          asin={i210.variant.asin}
          model="Navimow i210 AWD"
          productSlug={i210.family.slug}
          placement="inline"
          pageType="guide"
        />
        <ProductLink
          asin={x430.variant.asin}
          model="Navimow X430"
          productSlug={x430.family.slug}
          placement="inline"
          pageType="guide"
        />
      </CtaCluster>
      <YardPhoto id="photo-lot-sizes" />
      <div className="table-scroll">
        <p className="scroll-cue">Swipe sideways to read every column.</p>
        <table className="data">
          <caption>The maker's rating beside the 1.25 planning figure for heavy trees and two zones.</caption>
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
        One acre is 43,560 sq ft, which is the whole lot, not just your grass.
      </p>
      <h2>What an acre looks like on a lot</h2>
      <AcreSquares />
      <p className="measure">
        On a lot, a quarter acre is 10,890 sq ft. In the
        worked example, take out a 1,200 sq ft house, a 600 sq ft drive, and 400 sq ft of beds from that lot
        and about 8,690 sq ft of lawn is what's left. That's smaller than the 0.25 acre a maker might assume.
      </p>
      <YardQuarter />
      <p className="measure">
        A lot 90 ft by 121 ft is a quarter acre, with a front lawn and a back lawn. The Navimow i210 AWD is
        the one we'd look at here, rated {formatAcres(i210.acres, false)}. <ComfortableFor rated={i210.acres} />{" "}
        <Link href="/best#navimow-i210">i210 pick</Link>.
      </p>
      <YardHalf />
      <p className="measure">
        A lot 132 ft by 165 ft is a half acre, with a 3 ft side passage between the front and the back. Two
        zones still matter even when your grass fits a rating. The Dreame A3 AWD Pro 2500 is rated{" "}
        {formatAcres(dreame.acres, false)}. Its page also says each of two maps needs its own charging
        station. <Link href="/best#dreame-a3-2500">Dreame pick</Link>.
      </p>
      <YardAcre />
      <p className="measure">
        A lot 180 ft by 242 ft is one acre. The Navimow X430 and the Worx Landroid Vision Cloud WR340 are
        both rated {formatAcres(1, false)}. <ComfortableFor rated={1} /> The slope and the trees decide which
        of those two is the honest fit for your yard. <Link href="/reviews/segway-navimow-x4">Navimow X4 review</Link>.
      </p>
      <h2>When the maker already discounts the rating</h2>
      <p className="measure">
        If the maker already gives a smaller figure for a complex lawn, we'd use that figure as printed. Dividing it
        by 1.25 again would have you buying a bigger mower than you need.
      </p>
      <p className="measure">
        Husqvarna rates the Automower 420 iQ at {formatAcres(iq420.acres, false)} and{" "}
        {publishedSlope(iq420.slope, iq420.degrees)}, and 15% at the boundary. The same page describes 0.5
        acre for an irregular lawn and 1 acre for systematic mowing. We'd plan from those notes, and the estimator below doesn't apply them again.
        <Link href="/reviews/husqvarna-automower-iq">Automower iQ review</Link>.{" "}
        <SourceLine ids={["husq-420iq"]} checked="2026-10-10" />
      </p>
      <p className="measure">
        The Automower 410 iQ is rated {formatAcres(iq410.acres, false)}, with a ±20% note on that area, and{" "}
        {iq410.slope}%, and 15% at the boundary. We'd read that note before you stretch the rating. <SourceLine ids={["husq-410iq"]} checked="2026-10-10" />
      </p>
      <SlopeMarginNote />
      <p className="measure">
        The Navimow X4 page rates the X450 at{" "}
        {x450 ? formatAcres(Number(x450.ladder?.ratedAreaAcres?.value), false) : "Not published"} and lists a
        map maximum of 1.8 acres for that model. That 1.8 acre figure belongs to the X450. It's not a
        general Navimow multiplier, so we wouldn't borrow it for a smaller model. <SourceLine ids={["navimow-x4"]} checked="2026-10-10" />
      </p>
      <p className="measure">
        Wirecutter, updated Aug 3, 2026, suggests a complex lawn closer to a quarter acre for the WR340,
        whose maker rates it at {formatAcres(worx.acres, false)}. If your acre is broken up, we'd plan closer to that.{" "}
        <SourceLine ids={["wirecutter"]} checked="2026-10-10" />
      </p>
      <h2>Check a lawn against current ratings</h2>
      <p className="measure">
        You can match your lawn to current ratings with the same rule, JavaScript off or on. An open 0.5 acre in one zone needs a
        rating of 0.5 acre. The same 0.5 acre with heavy trees, or with more than one zone, needs 0.625 acre.
        A 0.4 acre lawn with two zones needs 0.5 acre. That's the grass we'd size, not the whole lot.
      </p>
      <AreaEstimate
        models={currentCandidates().map((row) => ({
          name: row.shortName,
          acres: row.acres,
          href: row.href,
        }))}
      />
      <h2>Trees shrink the useful area</h2>
      <YardWooded />
      <p className="measure">
        Yes, trees shrink it. Honestly, canopy over about a third of your lawn is enough to weaken a satellite fix along the mower's path. The
        LUBA 3 AWD 3000 is the one we'd look at here, rated {formatAcres(luba.acres, false)}. <ComfortableFor rated={luba.acres} />{" "}
        <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD review</Link>.{" "}
        <Link href="/guides/rtk-vs-lidar-vs-vision">How navigation fails under trees</Link>.
      </p>
      <h2>Ratings that do not include a slope</h2>
      <p className="measure">
        These ratings don't include a slope. The Dreame A3 AWD Pro 3500 is rated{" "}
        {dreame3500 ? formatAcres(Number(dreame3500.ladder?.ratedAreaAcres?.value), false) : "Not published"},
        and the 5000 is rated{" "}
        {dreame5000 ? formatAcres(Number(dreame5000.ladder?.ratedAreaAcres?.value), false) : "Not published"}.
        Dreame doesn't publish a slope for the 3500 or the 5000, so we wouldn't guess one for your hill.{" "}
        <SourceLine ids={["dreame-a3"]} checked="2026-10-10" />
      </p>
      <h2>What this means when you choose</h2>
      <ul className="grid gap-3 pl-5">
        <li>
          About a quarter acre, open, we'd pick the <Link href="/best#navimow-i210">Navimow i210 AWD</Link>, rated{" "}
          {formatAcres(i210.acres, false)}.
        </li>
        <li>
          About {formatAcres(dreame.acres, false)} with two zones, we'd pick the{" "}
          <Link href="/best#dreame-a3-2500">Dreame A3 AWD Pro 2500</Link>.
        </li>
        <li>
          About {formatAcres(luba.acres, false)} under trees, we'd pick the{" "}
          <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD 3000</Link>.
        </li>
        <li>
          An open acre, we'd pick the <Link href="/reviews/segway-navimow-x4">Navimow X430</Link> or the{" "}
          <Link href="/best#worx-wr340">Worx WR340</Link>, then compare the slope with your hill.
        </li>
      </ul>
      <Faq
        items={[
          {
            q: "Is the rated acre the lot or the lawn?",
            a: "It's the grass the mower can cover, not the size on your deed. So take out the house, the driveway, the flower beds and the pool if you've got one. What's left is usually a fair bit smaller than you'd guess.",
          },
          {
            q: "Should I always divide by 1.25?",
            a: "We'd use it for heavy trees and two zones, and we'd say so. For an open single lawn, the maker's rated area is where we'd start. If the maker already prints a lower figure for an irregular lawn, use that note.",
          },
          {
            q: "My front yard and back yard are separate. Does that count as one area?",
            a: (
              <>
                We'd add the grass first, then see if the mower can pass between your yards or needs a second map and a
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
