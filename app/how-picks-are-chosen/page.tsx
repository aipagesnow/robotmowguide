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
        A pick starts from the yard. The ladder places each current model at the lawn area its maker rates,
        then shows the maximum slope that maker publishes. The work is research-based.
      </p>
      <YardPhoto id="photo-method" />
      <MethodDiagram />
      <h2>Sources</h2>
      <p className="measure">
        Specs come from the maker’s US product page when one exists, and from the amazon.com listing text
        when that page is the only place a figure appears. Listing links on the site are paid links. A source
        line names the page and the date it was checked. An owner-report line links the thread or the
        independent review it came from. If a manual was not in the source list, the page says so.
      </p>
      <h2>The ladder and the 1.25× rule</h2>
      <p className="measure">
        Rated area is the maker’s number, shown in acres and, the first time, in square feet. One acre is
        43,560 sq ft. Heavy trees or two zones use the rule of thumb in{" "}
        <Link href="/guides/how-big-a-robot-mower-do-i-need">how we size</Link>. Where a maker prints its own
        fine print, the page quotes that note instead of folding it into that rule. Husqvarna’s 420 iQ page
        is one example.
      </p>
      <h2>The mower finder</h2>
      <p className="measure">
        The <Link href="/tools/mower-finder">mower finder</Link> uses the same current models as the ladder.
        It leaves out superseded and discontinued models. A current model with no published slope is left
        out, because the filter will not guess one.
      </p>
      <p className="measure">
        Area: an open single lawn needs a rating at least as large as the lawn. Heavy trees, or more than
        one zone, use the rule of thumb in <Link href="/guides/how-big-a-robot-mower-do-i-need">how we size</Link>.
        Slope: the published maximum has to be at least the steepest
        slope you enter. If you mark that slope as an edge, and the model prints a lower boundary figure,
        the row stays and the note says the boundary is lower. Heavy trees prefer LiDAR or vision. An
        RTK-only model can still appear, with a note about satellite fix under canopy. A passage uses a
        published body width or minimum gap. If that width is missing, the note says to check the manual.
        If nothing fits, the result says nothing fits, including a lawn past every rated area.
      </p>
      <h2>Slope</h2>
      <p className="measure">
        Slope is shown as a percent and, when the maker publishes it, as degrees. The first time on a page it
        also appears as rise over 10 ft.
      </p>
      <SlopeMarginNote />
      <h2>Owner reports</h2>
      <p className="measure">
        Themes come from threads and independent reviews opened for the date on the page. Each theme
        has a link. The count is the threads we read, not a percentage of all owners. We do not paraphrase
        Amazon review text, and we do not print a score or a row of stars.
      </p>
      <h2>No scores</h2>
      <p className="measure">
        There is no numeric score and no award line. A numbered tag on the ladder means
        the model is one of the picks on the best-mowers page, which a reader can check against the yard.
      </p>
      <h2>Re-checks and corrections</h2>
      <p className="measure">
        Specs are re-checked at least every 90 days, and again before a page is edited. The Updated date
        changes only when the page changes. Send a correction to{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. If a figure was wrong, the page is updated
        and the Updated date moves.
      </p>
      <h2>Drafts and images</h2>
      <p className="measure">
        Drafts are written with AI assistance. A person checks every figure against the linked source before
        a page is published or updated.
      </p>
      <p className="measure">
        Yard photographs are licensed photos from Pexels of real yards. They do not show a mower, and they
        are not from a test. Credits: Curtis Adams, Stephen Leonardi, Ron Greenberg, Dominik Gryzbon, Get
        Lost Mike, James Anthony, Viktoria B., Clay Elliot, Pixabay, Max Vakhtbovych, Jonathan, Magda
        Ehlers, Dianne, Viaceslav Kat, Alexander F Ungerer, wr heustis, Al Rashed, Matheus Bertelli,
        hi room, and Anastasiya Pavlova, on Pexels.
      </p>
      <Faq
        items={[
          {
            q: "Do you test mowers on a lawn?",
            a: "No. Reviews are research-based. We have not tested these mowers.",
          },
          {
            q: "Why is a model missing?",
            a: "The live pages cover five picks, ten family reviews, three head-to-head pages, the grass pages, and the finder. A model stays off a page until its specs are in the checked data.",
          },
          {
            q: "Who do I write about a wrong figure?",
            a: (
              <>
                Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with the page and the source you
                are looking at.
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
