import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { MethodDiagram } from "@/components/Diagrams";
import { Faq, Related } from "@/components/Blocks";
import { SlopeMarginNote } from "@/components/VoiceBits";
import { pageMeta } from "@/lib/metadata";
import { CONTACT_EMAIL, RECHECKED } from "@/lib/site";

const title = "How picks are chosen";
const description =
  "How RobotMowGuide ranks robot mowers by rated lawn area and slope, and how each figure is checked.";

export const metadata: Metadata = pageMeta({ title, description, path: "/how-picks-are-chosen" });

export default function MethodPage() {
  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/how-picks-are-chosen"
      updated={RECHECKED}
      whatChanged="October 13, 2026: names the licensed yard photographs."
    >
      <p className="measure">
        Every pick starts with your yard, not a brand. We line up each current mower by the lawn size its maker rates it for, then
        show the steepest slope it's rated to climb. And to be upfront: it's all research. We haven't tested these mowers ourselves.
      </p>
      <YardPhoto id="photo-method" />
      <MethodDiagram />
      <h2>Sources</h2>
      <p className="measure">
        Specs come from the maker's US product page when one exists, and from the amazon.com page
        when that's the only place a figure appears. Links to those Amazon pages are paid. Under the specs
        you'll see the source and the date. An owner note links the thread or the
        independent review it came from. If we didn't have the manual, we say so.
      </p>
      <h2>How we size picks</h2>
      <p className="measure">
        Rated area is the maker's number for the grass it can cover, in acres and, the first time, in square feet. One acre is
        43,560 sq ft. If you've got heavy trees or two zones, use the rule of thumb in{" "}
        <Link href="/guides/how-big-a-robot-mower-do-i-need#trees-or-two-zones">how we size</Link>. Where a maker publishes its own figure for a tricky lawn, as Husqvarna does
        for the 420 iQ, we'd give you that figure instead.
      </p>
      <h2>The mower finder</h2>
      <p className="measure">
        The <Link href="/tools/mower-finder">mower finder</Link> uses the same current models as the ladder.
        Replaced and discontinued models aren't in it. If a current model has no published slope, it isn't included,
        because we won't guess one for you.
      </p>
      <p className="measure">
        For area, an open lawn in one piece needs a rating at least as big as your grass. Heavy trees, or more than
        one zone, use the rule of thumb in <Link href="/guides/how-big-a-robot-mower-do-i-need">how we size</Link>.
        For slope, the published maximum has to be at least the steepest
        slope you enter. If you mark that slope as an edge, and the model prints a lower boundary figure,
        it still shows up, and the note says the boundary is lower. Heavy trees favor LiDAR or a camera. An
        RTK-only model can still appear, with a note about the satellite fix under the canopy. A side passage uses a
        published body width or minimum gap. If that width is missing, the note says to read the manual.
        If nothing fits, the result says so, including when your lawn is bigger than every rated area.
      </p>
      <h2>Slope</h2>
      <p className="measure">
        You'll see slope as a percent and, when the maker publishes it, as degrees. The first time,
        it's also the rise over 10 ft, so you can picture the bank.
      </p>
      <SlopeMarginNote />
      <h2>Owner reports</h2>
      <p className="measure">
        The themes come from owner threads and independent reviews, with the date we read them. Each theme
        has a link. That count is the threads we read, not a percentage of all owners. We don't paraphrase
        Amazon review text, and we don't print a score or a row of stars.
      </p>
      <h2>No scores</h2>
      <p className="measure">
        You won't find a numeric score or an award line here. A numbered tag on the ladder means
        that model is one of the picks on the best-mowers page, so you can match it to your yard.
      </p>
      <h2>Re-checks and corrections</h2>
      <p className="measure">
        We go back over the specs at least every 90 days, and again before an edit. The Updated date
        moves only when the words change. Send a correction to{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. If a figure was wrong, we fix it
        and the Updated date moves.
      </p>
      <h2>Drafts and images</h2>
      <p className="measure">
        Drafts are written with AI help. A person matches every figure to the linked source before
        we publish or update.
      </p>
      <p className="measure">
        The yard photographs are licensed photos from Pexels of real yards. They don't show a mower, and they
        aren't from a mowing test. Credits: Curtis Adams, Stephen Leonardi, Ron Greenberg, Dominik Gryzbon, Get
        Lost Mike, James Anthony, Viktoria B., Clay Elliot, Pixabay, Max Vakhtbovych, Jonathan, Magda
        Ehlers, Dianne, Viaceslav Kat, Alexander F Ungerer, wr heustis, Al Rashed, Matheus Bertelli,
        hi room, and Anastasiya Pavlova, on Pexels.
      </p>
      <Faq
        items={[
          {
            q: "Do you test mowers on a lawn?",
            a: "No. It's research. We haven't mowed with these ourselves.",
          },
          {
            q: "Why is a model missing?",
            a: "A model isn't included until its specs are in and dated. What you'll find so far is five picks, ten family reviews, three head-to-head pages, the grass pages, and the finder.",
          },
          {
            q: "Who do I write about a wrong figure?",
            a: (
              <>
                Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with the address and the source you're
                looking at.
              </>
            ),
          },
        ]}
      />
      <Related
        links={[
          { href: "/about", label: "About RobotMowGuide" },
          { href: "/best", label: "Best robot lawn mowers for US yards" },
          { href: "/tools/mower-finder", label: "Which mower fits my yard?" },
          { href: "/guides/how-big-a-robot-mower-do-i-need", label: "How big a robot mower do I need?" },
        ]}
      />
    </ArticleFrame>
  );
}
