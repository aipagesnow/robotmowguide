import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { Faq, QuickPick, Related, ResearchedBox, SourceLine } from "@/components/Blocks";
import { SlopeMarginNote } from "@/components/VoiceBits";
import { CanopyDiagram } from "@/components/Diagrams";
import { pageMeta } from "@/lib/metadata";
import { formatAcres } from "@/lib/format";
import { modelFacts, navigationLabel } from "@/lib/products";
import { publishedSlope } from "@/lib/speak";
import { RECHECKED, SPEC_CHECKED } from "@/lib/site";

const title = "Which robot mower works under trees?";
const description =
  "Tree canopy weakens a satellite fix along the mower’s path. LiDAR models are the comparison. RTK models cover the open part of the yard.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/best/robot-mower-under-trees",
});

const sources = ["mammotion-luba3", "dreame-a3", "mammotion-mini2", "amz-mova-2000", "navimow-ces26", "amz-q110h"];

export default function TreesPage() {
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");
  const dreame = modelFacts("dreame-a3-awd-pro", "A3 AWD Pro 2500");
  const mini = modelFacts("mammotion-luba-mini-2-awd", "LUBA mini 2 AWD 1500H (high-cut)");
  const mova = modelFacts("mova-lidax-ultra", "LiDAX Ultra 2000");
  const i210 = modelFacts("segway-navimow-i2-awd", "Navimow i210 AWD");
  const q = modelFacts("roborock-rockneo-q110h", "RockNeo Q110H");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/best/robot-mower-under-trees"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Best", path: "/best" },
        { name: "Under trees", path: "/best/robot-mower-under-trees" },
      ]}
      updated={RECHECKED}
      whatChanged="October 13, 2026: first published, for yards where a satellite fix weakens under canopy."
      disclosure
    >
      <p className="measure">
        If the canopy is over your mower's path, that's the problem, not a tree sitting at the edge of an open lawn. A satellite fix weakens
        under that cover. We'd read a LiDAR model for the shaded part of your yard. An RTK mower can still
        be the right machine for the open part.
      </p>
      <QuickPick
        pageType="best_for"
        items={[
          {
            yard: "About 0.75 acre under your trees",
            model: "LUBA 3 AWD 3000",
            href: "/reviews/mammotion-luba-3-awd",
            asin: luba.variant.asin,
            productSlug: luba.family.slug,
          },
          {
            yard: "About 0.62 acre, with LiDAR and no RTK",
            model: "Dreame A3 AWD Pro 2500",
            href: "/reviews/dreame-a3-awd-pro",
            asin: dreame.variant.asin,
            productSlug: dreame.family.slug,
          },
          {
            yard: "A small steep yard under your trees",
            model: "LUBA mini 2 AWD 1500H",
            href: "/reviews/mammotion-luba-mini-2-awd",
            asin: mini.variant.asin,
            productSlug: mini.family.slug,
          },
          {
            yard: "An open half acre, with LiDAR",
            model: "LiDAX Ultra 2000",
            href: "/reviews/mova-lidax-ultra",
            asin: mova.variant.asin,
            productSlug: mova.family.slug,
          },
        ]}
      />
      <YardPhoto id="photo-trees" />
      <h2>Where the fix weakens</h2>
      <CanopyDiagram />
      <p className="measure">
        Your mower needs sky along its path, not only at an antenna out in the open.{" "}
        <Link href="/guides/rtk-vs-lidar-vs-vision">How RTK, LiDAR, and vision fail</Link>.
      </p>
      <h2>LiDAR rows, then the RTK rows</h2>
      <div className="table-scroll">
        <p className="scroll-cue">Swipe sideways to read every column.</p>
        <table className="data">
          <caption>Navigation as published. A LiDAR model is the canopy comparison. An RTK model is the open-sky comparison.</caption>
          <thead>
            <tr>
              <th scope="col">Model</th>
              <th scope="col">Rated</th>
              <th scope="col">Slope</th>
              <th scope="col">Navigation</th>
              <th scope="col">For canopy</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "LUBA 3 AWD 3000", href: "/reviews/mammotion-luba-3-awd", model: luba, canopy: "Yes, for the shaded part. LiDAR plus network RTK." },
              { name: "Dreame A3 AWD Pro 2500", href: "/reviews/dreame-a3-awd-pro", model: dreame, canopy: "Yes, for the shaded part. LiDAR and vision, and there's no RTK." },
              { name: "LUBA mini 2 AWD 1500H", href: "/reviews/mammotion-luba-mini-2-awd", model: mini, canopy: "Yes, on a smaller lawn. It's LiDAR and vision." },
              { name: "LiDAX Ultra 2000", href: "/reviews/mova-lidax-ultra", model: mova, canopy: "Yes. LiDAR and vision. Few owner reports yet, so read the review before you order." },
              { name: "Navimow i210 AWD", href: "/reviews/segway-navimow-i-series", model: i210, canopy: "The open part of your yard only. Network RTK and vision." },
              { name: "RockNeo Q110H", href: "/reviews/roborock-rockneo-q110h", model: q, canopy: "The open part of your yard only. It's RTK-led." },
            ].map((row) => (
              <tr key={row.name}>
                <th scope="row">
                  <Link href={row.href}>{row.name}</Link>
                </th>
                <td className="dim">{formatAcres(row.model.acres)}</td>
                <td>{publishedSlope(row.model.slope, row.model.degrees)}</td>
                <td>{navigationLabel(row.model.family.navigation)}</td>
                <td>{row.canopy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SlopeMarginNote />
      <p className="measure">
        The i210 is rated {formatAcres(i210.acres)} and doesn't use an antenna. Canopy can still weaken
        network RTK, which is why heavy tree cover is on its skip list. We'd use it for the open quarter acre,
        and a LiDAR model for the shaded part if that part is large enough to need its own mower. The
        Q110H is the same kind of split: RTK plus VSLAM, rated {formatAcres(q.acres, false)}.{" "}
        <SourceLine ids={["navimow-ces26", "amz-q110h"]} checked="2026-10-13" />
      </p>
      <p className="measure">
        The LUBA 3000 is the larger LiDAR-plus-RTK model, rated {formatAcres(luba.acres, false)}. The Dreame
        2500 is LiDAR without RTK, rated {formatAcres(dreame.acres, false)}. The mini 2 is the small steep LiDAR model. The
        Ultra 2000 is the half-acre LiDAR model, and few owner reports exist yet.{" "}
        <SourceLine ids={["mammotion-luba3", "dreame-a3", "amz-mova-2000"]} checked={SPEC_CHECKED} />
      </p>
      <Faq
        items={[
          {
            q: "Does one tree mean I need LiDAR?",
            a: "Not by itself. The question is whether your mower's path runs under the canopy. An open lawn with a tree at the fence can still suit an RTK mower.",
          },
          {
            q: "Will an antenna in the open fix a shaded lawn?",
            a: "No. The antenna's open sky doesn't give your mower a fix under the canopy.",
          },
          {
            q: "Which shaded yard is too big for these LiDAR rows?",
            a: (
              <>
                Once you're past the rated area. For heavy trees or two zones, use{" "}
                <Link href="/guides/how-big-a-robot-mower-do-i-need">how we size</Link>. The half-acre and
                1-acre guides are where that shows up for your yard.
              </>
            ),
          },
        ]}
      />
      <ResearchedBox
        scope="group"
        sources={sources.map((id) => ({ id }))}
        manuals="No canopy manual was needed. Navigation is what the brand pages and listings already say on the reviews."
        threads="Owner threads are on the linked reviews."
        questions="No manufacturer has answered a question yet."
        specsLine="Specs as of Oct 10, 2026, with listing titles also read on Oct 13, 2026."
      />
      <Related
        links={[
          { href: "/guides/rtk-vs-lidar-vs-vision", label: "RTK, LiDAR, or vision" },
          { href: "/best/robot-mower-half-acre", label: "Which robot mower for a half acre?" },
          { href: "/reviews/mammotion-luba-3-awd", label: "LUBA 3 AWD review" },
          { href: "/vs/dreame-a3-awd-pro-vs-luba-3-awd", label: "Dreame A3 AWD Pro 2500 vs LUBA 3 AWD 3000" },
        ]}
      />
    </ArticleFrame>
  );
}
