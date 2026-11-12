import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { EndLinks, Faq, OwnerReports, Related, ResearchedBox, SourceLine } from "@/components/Blocks";
import { ProductLink } from "@/components/ProductLink";
import { ComfortableFor, SlopeMarginNote } from "@/components/VoiceBits";
import { pageMeta } from "@/lib/metadata";
import { formatAcres, realisticAcres } from "@/lib/format";
import { modelFacts } from "@/lib/products";
import { publishedSlope, specText } from "@/lib/speak";

const PATH = "/vs/luba-mini-2-awd-1500h-vs-dreame-a3-awd-pro-3500";
const CHECKED = "2026-11-12";

const title = "LUBA mini 2 vs Dreame A3 AWD Pro 3500: edges and lawn size";
const description =
  "The LUBA mini 2 1500H is rated 0.37 acre and the Dreame A3 AWD Pro 3500 0.87 acre. How each one cuts the edge, and which size fits your lawn.";

export const metadata: Metadata = pageMeta({ title, description, path: PATH });

const sources = ["mammotion-mini2", "amz-mini2-1500h", "dreame-a3", "amz-dreame-a3-3500"];

export default function VsPage() {
  const mini = modelFacts("mammotion-luba-mini-2-awd", "LUBA mini 2 AWD 1500H (high-cut)");
  const dreame = modelFacts("dreame-a3-awd-pro", "A3 AWD Pro 3500");

  const rows = [
    {
      topic: "Rated area",
      m: formatAcres(mini.acres),
      d: formatAcres(dreame.acres),
      better: `This decides most purchases. The mini 2 suits a lawn up to about ${formatAcres(realisticAcres(mini.acres), false)} with trees or two zones. Above that, the Dreame is the one of these two that covers it.`,
    },
    {
      topic: "Edge cutting",
      m: specText(mini.specs.edgeCutting),
      d: specText(dreame.specs.edgeCutting),
      better:
        "The Dreame gets closer on paper. Owners report that its edge mode cuts the border low, so on a lawn kept tall most switch it off and trim by hand instead.",
    },
    {
      topic: "Cutting height",
      m: specText(mini.specs.cuttingHeight),
      d: specText(dreame.specs.cuttingHeight),
      better:
        "The mini 2 1500H for St. Augustine or fescue kept tall. The Dreame if you want to cut shorter than 2.2 in, for example Bermuda or zoysia.",
    },
    {
      topic: "Cutting width",
      m: specText(mini.specs.cuttingWidth),
      d: specText(dreame.specs.cuttingWidth),
      better: "The Dreame covers ground faster because its two discs cut twice the width.",
    },
    {
      topic: "Slope",
      m: publishedSlope(mini.slope, mini.degrees),
      d: publishedSlope(dreame.slope, dreame.degrees),
      better: "Either. Both publish an 80% maximum.",
    },
    {
      topic: "Narrow paths",
      m: "Mammotion says it mows 27 in paths.",
      d: "No path width published. The body is about 20.9 in wide.",
      better: "The mini 2, because it has a published path figure.",
    },
  ];

  return (
    <ArticleFrame
      title={title}
      description={description}
      path={PATH}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Head-to-head", path: "/vs" },
        { name: "LUBA mini 2 vs Dreame 3500", path: PATH },
      ]}
      updated={CHECKED}
      published={CHECKED}
      factCheck="Edited and fact-checked by the Robot Mow Guide editors at Aivora Digital. Specs checked against manufacturer pages and amazon.com listings on Nov 12, 2026."
      whatChanged="November 12, 2026: first published."
      disclosure
    >
      <p className="measure">
        Both of these mowers use LiDAR and vision with no RTK antenna, but they are sized for different
        lawns. The LUBA mini 2 AWD 1500H is rated {formatAcres(mini.acres, false)}. The
        Dreame A3 AWD Pro 3500 is rated {formatAcres(dreame.acres, false)}, more than twice the area.
      </p>
      <p className="measure">
        If your lawn is about a third of an acre or less, the mini 2 is the better fit, especially if you keep the
        grass tall. If your lawn is bigger than that, the mini 2 is too small, and the Dreame 3500 is the one of
        these two to look at. Edge cutting is the main difference after size, and neither mower removes the string
        trimmer job.
      </p>
      <div data-cta-cluster="true" className="grid gap-2">
        <p className="paid m-0">
          Paid links: <Link href="/affiliate-disclosure">see disclosure</Link>
        </p>
        <div className="flex flex-wrap gap-3">
          <ProductLink
            asin={mini.variant.asin}
            model="LUBA mini 2 AWD 1500H"
            productSlug={mini.family.slug}
            placement="vs_top"
            pageType="vs"
          />
          <ProductLink
            asin={dreame.variant.asin}
            model="Dreame A3 AWD Pro 3500"
            productSlug={dreame.family.slug}
            placement="vs_top"
            pageType="vs"
          />
        </div>
      </div>
      <h2>Where they differ</h2>
      <div className="table-scroll">
        <p className="scroll-cue">Swipe sideways to read every column.</p>
        <table className="data">
          <caption>
            How the LUBA mini 2 AWD 1500H and the Dreame A3 AWD Pro 3500 differ. Specs and both amazon.com
            listings checked Nov 12, 2026.
          </caption>
          <thead>
            <tr>
              <th scope="col">Difference</th>
              <th scope="col">LUBA mini 2 AWD 1500H</th>
              <th scope="col">Dreame A3 AWD Pro 3500</th>
              <th scope="col">Better for</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.topic}>
                <th scope="row">{row.topic}</th>
                <td>{row.m}</td>
                <td>{row.d}</td>
                <td>{row.better}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Start with your lawn size</h2>
      <p className="measure">
        The mini 2 1500H is rated {formatAcres(mini.acres)}. <ComfortableFor rated={mini.acres} />
      </p>
      <p className="measure">
        The Dreame 3500 is rated {formatAcres(dreame.acres)}. Using the same rule, it is comfortable for about{" "}
        {formatAcres(realisticAcres(dreame.acres), false)} with trees or two zones.
      </p>
      <p className="measure">
        So for a lawn between about {formatAcres(realisticAcres(mini.acres), false)} and{" "}
        {formatAcres(realisticAcres(dreame.acres), false)}, only the Dreame fits. For a small lawn, the Dreame
        will cover it, but you would be paying for area you don&apos;t use, and it is a bigger machine with twice
        the cutting width. Dreame lists the body at about 29.1 in long and 20.9 in wide, and it doesn&apos;t
        publish the narrowest path the mower can get through. Mammotion says
        the mini 2 mows paths down to 27 in, which matters if a side passage joins your front and back lawns.{" "}
        <SourceLine ids={["mammotion-mini2", "amz-mini2-1500h", "dreame-a3", "amz-dreame-a3-3500"]} checked={CHECKED} />
      </p>

      <h2>How each one cuts the edge</h2>
      <p className="measure">
        The two mowers handle edges in different ways. The mini 2 has a main disc plus a separate 4.7 in edge
        disc, which Mammotion says mows to about 2.1 in from walls. The Dreame has no separate edge disc. Instead,
        its EdgeMaster 2.0 mode moves the two cutting discs outward at the boundary, and Dreame rates the gap at
        under 1.2 in in auto mode. On the published figures, the Dreame cuts closer to the edge.
      </p>
      <p className="measure">
        Owner reports change that picture for lawns kept tall. Several Dreame A3 owners report that EdgeMaster cuts
        the border strip at a fixed low height of about 1.2 in, whatever height you set for the rest of the lawn.
        On St. Augustine or fescue kept around 3.5 in, that leaves a visibly scalped band, and one 3500 owner
        reports blade damage where gravel sits at the base of the grass by a road. Most of these owners turn the
        mode off. Dreame doesn&apos;t publish an edge gap for mowing with it off, so expect more trimming.
      </p>
      <p className="measure">
        Mini 2 owners describe a more ordinary result. The edge disc gets close, but there are still a few
        spots to trim by hand, usually in narrow areas. In one thread from March 2026, owners said that after an
        update they could no longer find the setting that lets the edge disc run over the boundary, and the
        mower left a larger uncut strip around the lawn. The thread doesn&apos;t say whether a later update
        changed this.{" "}
        <SourceLine ids={["mammotion-mini2", "dreame-a3"]} checked={CHECKED} />
      </p>
      <p className="measure">
        In practice, if you keep the grass short and your edges are clean borders like a driveway or a path
        without loose gravel, the Dreame&apos;s edge mode is more likely to help. If you keep the grass tall, the mini 2 is the safer choice
        for the edges, but plan on some trimming with either mower. The{" "}
        <Link href="/best/robot-mower-st-augustine">St. Augustine page</Link> covers tall-cut lawns in more detail.
      </p>

      <h2>Cutting height and your grass</h2>
      <p className="measure">
        The mini 2 1500H is the high-cut version, and it cuts {specText(mini.specs.cuttingHeight)}. That range
        suits St. Augustine and summer fescue, which are usually kept around 3 to 4 in. It won&apos;t go below 2.2
        in, so it is a poor match for Bermuda or zoysia kept short.
      </p>
      <p className="measure">
        The Dreame cuts {specText(dreame.specs.cuttingHeight)} (3–10 cm on Dreame&apos;s spec table). That covers
        both short warm-season grass and most tall-cut lawns, as long as you leave the edge mode off on a tall
        lawn.{" "}
        <SourceLine ids={["amz-mini2-1500h", "dreame-a3"]} checked={CHECKED} />
      </p>

      <h2>Slope, battery and zones</h2>
      <p className="measure">
        Both publish an 80% maximum slope. Mammotion gives 38.6° for the mini 2, and the 3500 listing gives 38.7°
        for the Dreame, so there is nothing to choose between them on a bank.
      </p>
      <SlopeMarginNote />
      <p className="measure">
        The mini 2 has a {specText(mini.specs.battery)} battery and manages up to {specText(mini.specs.zones)}.
        The Dreame 3500 has a {specText(dreame.specs.battery)} battery, and its listing allows up to 100 zones,
        100 no-go areas and 50 paths. Both include 4G data for three years, and both say a subscription follows.
        Neither product page states that price.{" "}
        <SourceLine ids={["mammotion-mini2", "dreame-a3", "amz-dreame-a3-3500"]} checked={CHECKED} />
      </p>

      <OwnerReports
        intro="These are the owner threads read for this page in November 2026. They are individual reports, not failure rates."
        items={[
          {
            text: "Dreame A3 AWD Pro owners on fescue and St. Augustine say EdgeMaster cuts the border at a fixed low height and scalps a band, so they switched it off.",
            href: "https://www.reddit.com/r/Dreame_Tech/comments/1sivqul/",
            linkLabel: "Dreame EdgeMaster thread",
          },
          {
            text: "An A3 AWD Pro 3500 owner says the low edge cut damaged blades on gravel by a road, and other owners in the thread report scalped borders.",
            href: "https://us.forum.dreametech.com/forum.php?mod=viewthread&tid=11053",
            linkLabel: "Dreame forum thread",
          },
          {
            text: "A long-time Dreame owner who moved to the A3 praises the battery life, the faster mowing from the wider twin discs, and the navigation, but also notes the low edge cut.",
            href: "https://www.reddit.com/r/automower/comments/1rtoord/",
            linkLabel: "A3 owner write-up",
          },
          {
            text: "A LUBA mini 2 AWD owner says it cuts close enough to the edge, but that any robot mower still needs some trimming by hand.",
            href: "https://www.reddit.com/r/mammotion/comments/1sex5nx/",
            linkLabel: "Mini 2 owner thread",
          },
          {
            text: "In March 2026, mini 2 owners reported that an update moved the edge-overlap setting and left a wider uncut perimeter.",
            href: "https://www.reddit.com/r/mammotion/comments/1ry7s2k/",
            linkLabel: "Mini 2 edge setting thread",
          },
          {
            text: "A mini 2 owner with five separate lawn areas, slopes and steep drop edges reports it working well after time spent on no-go areas, with only a few spots left to trim.",
            href: "https://www.reddit.com/r/mammotion/comments/1wqjgnb/",
            linkLabel: "Mini 2 owner report",
          },
        ]}
      />

      <h2>Who should buy which</h2>
      <ul className="grid gap-2 pl-5">
        <li>
          Choose the LUBA mini 2 1500H if your lawn is up to about a third of an acre, you keep the grass tall,
          or a narrow side passage joins two lawns. The{" "}
          <Link href="/reviews/mammotion-luba-mini-2-awd">LUBA mini 2 AWD review</Link> covers it in more detail.
        </li>
        <li>
          Choose the Dreame A3 AWD Pro 3500 if your lawn is bigger than about a third of an acre. It is
          comfortable for about 0.7 acre with trees or two zones, and rated 0.87 acre on an open lawn. It is also
          the one of these two for grass kept shorter than 2.2 in. If you keep it tall, expect to leave EdgeMaster off. The{" "}
          <Link href="/reviews/dreame-a3-awd-pro">Dreame A3 AWD Pro review</Link> also covers heat pauses and
          rutting reported by owners.
        </li>
        <li>
          If your lawn is near half an acre and you are unsure, the{" "}
          <Link href="/guides/how-big-a-robot-mower-do-i-need">sizing guide</Link> explains how trees and separate
          zones reduce the area a mower can realistically handle.
        </li>
      </ul>

      <Faq
        items={[
          {
            q: "Which one cuts closer to the edge?",
            a: "On the published figures, the Dreame. Dreame rates its edge gap at under 1.2 in, and Mammotion says the mini 2 mows to about 2.1 in from walls. Owners report that the Dreame edge mode cuts the border low, so on a tall lawn many switch it off.",
          },
          {
            q: "Will either one replace my string trimmer?",
            a: "No. Owners of both mowers still trim narrow areas and a few small spots by hand. The edge features reduce the job but don't remove it.",
          },
          {
            q: "Is the Dreame 3500 too big for a quarter-acre lawn?",
            a: "It will cover it, because it is rated 0.87 acre. The mini 2 is the closer fit for a quarter acre, and it has a published 27 in path figure, while Dreame doesn't publish one for the 3500.",
          },
          {
            q: "Which one is better for St. Augustine?",
            a: "The mini 2 1500H, because its 2.2–4.0 in range is aimed at grass kept tall. The Dreame can also cut at 3.9 in, but its edge mode scalps a tall lawn according to owners, so you would leave it off.",
          },
        ]}
      />
      <ResearchedBox
        scope="group"
        sources={sources.map((id) => ({ id }))}
        manuals="No owner's manual was in the source list."
        threads="We read six owner threads in November 2026, linked above."
        questions="No manufacturer questions have been answered yet."
        specsLine="Specs and both amazon.com listings checked Nov 12, 2026."
      />
      <h2>See both models</h2>
      <EndLinks
        pageType="vs"
        links={[
          { asin: mini.variant.asin, model: "LUBA mini 2 AWD 1500H", productSlug: mini.family.slug },
          { asin: dreame.variant.asin, model: "Dreame A3 AWD Pro 3500", productSlug: dreame.family.slug },
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
          { href: "/reviews/mammotion-luba-mini-2-awd", label: "LUBA mini 2 AWD review" },
          { href: "/reviews/dreame-a3-awd-pro", label: "Dreame A3 AWD Pro review" },
          { href: "/best/robot-mower-small-yard", label: "Which robot mower for a small yard?" },
          { href: "/best/robot-mower-half-acre", label: "Which robot mower for a half acre?" },
          { href: "/vs/dreame-a3-awd-pro-vs-luba-3-awd", label: "Dreame A3 AWD Pro 2500 vs LUBA 3 AWD 3000" },
        ]}
      />
    </ArticleFrame>
  );
}
