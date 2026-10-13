import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { CtaCluster, Disclosure, Faq, Related, ResearchedBox, SourceLine } from "@/components/Blocks";
import { PassageDiagram, ZonesMap } from "@/components/Diagrams";
import { PassageGauge } from "@/components/PassageGauge";
import { ProductLink } from "@/components/ProductLink";
import { YardPhoto } from "@/components/YardPhoto";
import { pageMeta } from "@/lib/metadata";
import { modelFacts } from "@/lib/products";
import { specText } from "@/lib/speak";
import { RECHECKED, SPEC_CHECKED } from "@/lib/site";

const title = "Can one robot mower do the front yard and the back yard?";
const description =
  "Add the grass, then compare your narrowest opening with the published body width, path claim, or gap. The gauge does not say the mower fits.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/guides/robot-mower-front-and-back-yard",
});

const sources = ["navimow-x4", "mammotion-luba3", "amz-mova-2000", "q110h-manual", "dreame-a3"];

export default function FrontAndBackGuide() {
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");
  const mova = modelFacts("mova-lidax-ultra", "LiDAX Ultra 2000");
  const q110 = modelFacts("roborock-rockneo-q110h", "RockNeo Q110H");
  const dreame = modelFacts("dreame-a3-awd-pro", "A3 AWD Pro 2500");

  const limits = [
    {
      model: "RockNeo Q110H",
      inches: Number(q110.specs.bodyWidth?.value),
      href: "/reviews/roborock-rockneo-q110h",
      meaning: "Body width from the manual. Not a minimum passage.",
    },
    {
      model: "LiDAX Ultra 2000",
      inches: Number(mova.specs.passage?.value),
      href: "/reviews/mova-lidax-ultra",
      meaning: "Listing bullet for paths. Not a measured body width.",
    },
    {
      model: "Navimow X430",
      inches: Number(x430.specs.bodyWidth?.value),
      href: "/reviews/segway-navimow-x4",
      meaning: "Body width. The Navimow page calls it a hard limit for side passages.",
    },
    {
      model: "LUBA 3 AWD 3000",
      inches: Number(luba.specs.narrowestGap?.value),
      href: "/reviews/mammotion-luba-3-awd",
      meaning: "Narrowest gap the brand publishes (70 cm).",
    },
  ];

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/guides/robot-mower-front-and-back-yard"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
        { name: "Front and back yard", path: "/guides/robot-mower-front-and-back-yard" },
      ]}
      updated={RECHECKED}
      whatChanged="October 13, 2026: added a passage-width check and the Dreame 2500 for two maps."
    >
      <p className="measure">
        Add the front grass and the back grass, then measure the narrowest opening between them, gate
        hardware included. If that opening is narrower than the published figure, treat the yards as separate
        maps or as a carry. For two maps, the Dreame A3 AWD Pro 2500 is the model here that publishes two
        separate maps, and each map needs its own charging station.{" "}
        <SourceLine ids={["dreame-a3"]} checked={SPEC_CHECKED} />
      </p>
      <Disclosure />
      <CtaCluster>
        <ProductLink
          asin={dreame.variant.asin}
          model="Dreame A3 AWD Pro 2500"
          productSlug={dreame.family.slug}
          placement="quick_pick"
          pageType="guide"
        />
      </CtaCluster>
      <YardPhoto id="photo-front-back" />
      <ZonesMap />
      <p className="measure">A passage the mower cannot use splits the yard.</p>
      <h2>Published widths, and what each one is</h2>
      <PassageDiagram />
      <p className="measure">
        The LiDAX Ultra 2000 listing claims paths of {specText(mova.specs.passage)}. The X430 body is{" "}
        {specText(x430.specs.bodyWidth)}. The LUBA 3 gap is {specText(luba.specs.narrowestGap)}. The Q110H
        body is {specText(q110.specs.bodyWidth)}, and that figure is a body width, not a minimum passage.{" "}
        <SourceLine ids={["q110h-manual", "amz-mova-2000"]} checked={RECHECKED} />{" "}
        <SourceLine ids={["navimow-x4", "mammotion-luba3"]} checked={SPEC_CHECKED} />
      </p>
      <div className="table-scroll">
        <table className="data">
          <caption>What each published inch figure means. A wider number is not automatically the mower you need.</caption>
          <thead>
            <tr>
              <th scope="col">Model</th>
              <th scope="col">Figure</th>
              <th scope="col">What it is</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <Link href="/reviews/roborock-rockneo-q110h">RockNeo Q110H</Link>
              </th>
              <td className="dim">{specText(q110.specs.bodyWidth)}</td>
              <td>Manual width, 420 mm of the 625×420×270 mm body. Not a minimum gap.</td>
            </tr>
            <tr>
              <th scope="row">
                <Link href="/reviews/mova-lidax-ultra">LiDAX Ultra 2000</Link>
              </th>
              <td className="dim">{specText(mova.specs.passage)}</td>
              <td>The listing says it handles paths of that width. Not a measured body width.</td>
            </tr>
            <tr>
              <th scope="row">
                <Link href="/reviews/segway-navimow-x4">Navimow X430</Link>
              </th>
              <td className="dim">{specText(x430.specs.bodyWidth)}</td>
              <td>Body width, called a hard limit for side passages.</td>
            </tr>
            <tr>
              <th scope="row">
                <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD 3000</Link>
              </th>
              <td className="dim">{specText(luba.specs.narrowestGap)}</td>
              <td>Narrowest gap, 70 cm.</td>
            </tr>
            <tr>
              <th scope="row">
                <Link href="/reviews/dreame-a3-awd-pro">Dreame A3 AWD Pro 2500</Link>
              </th>
              <td className="dim">Not published</td>
              <td>{specText(dreame.specs.maps)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>Compare your opening</h2>
      <p className="measure">
        The gauge says “at least as wide” or “narrower.” It does not say the mower fits.
      </p>
      <PassageGauge limits={limits} />
      <h2>Two maps are not free on every brand</h2>
      <p className="measure">
        The Dreame 2500 page says two separate maps, and each map needs its own charging station. A side
        passage that fails the width check can mean a second dock, not only a second zone name. The i210 and
        the Worx picks still have no passage width on the sheets we checked.{" "}
        <SourceLine ids={["dreame-a3"]} checked={SPEC_CHECKED} />
      </p>
      <p className="measure">
        Area is a separate sum. A half acre of grass is 21,780 sq ft whether or not the mower can drive
        between the yards. The <Link href="/guides/how-big-a-robot-mower-do-i-need">size guide</Link> and the{" "}
        <Link href="/best/robot-mower-half-acre">half-acre page</Link> cover the rating. This page only
        covers the opening.
      </p>
      <Faq
        items={[
          {
            q: "Do I add the front yard and the back yard?",
            a: "Add the grass for the rating. Then measure the opening. If the opening is narrower than the published figure, the mower may need a second map, a second dock, or a carry.",
          },
          {
            q: "Is 24 inches enough for the X430?",
            a: "24 in is the published body width, and Navimow calls it a hard limit for side passages. The gauge only says whether your opening is at least that wide. It does not say the mower fits.",
          },
          {
            q: "What about a bed I cannot reach without lifting the mower?",
            a: "Treat it as a carry. A bed you can reach only by lifting the mower is not a second mapped zone.",
          },
        ]}
      />
      <ResearchedBox
        scope="group"
        sources={sources.map((id) => ({ id }))}
        manuals="The Q110H body width is from the English technical data, read Oct 13, 2026. The other widths are from brand pages or the listing bullet named above."
        threads="No passage-width owner threads were added for this page."
        questions="No manufacturer questions have been answered yet."
        specsLine="Q110H width and the Ultra 2000 path bullet checked Oct 13, 2026. X430 and LUBA figures checked Oct 10, 2026."
      />
      <h2>Sources</h2>
      <ul className="grid gap-2 pl-5">
        {sources.map((id) => (
          <li key={id}>
            <SourceLine ids={[id]} checked={id === "q110h-manual" || id === "amz-mova-2000" ? RECHECKED : SPEC_CHECKED} />
          </li>
        ))}
      </ul>
      <Related
        links={[
          { href: "/guides/how-big-a-robot-mower-do-i-need", label: "How big a robot mower do I need?" },
          { href: "/best/robot-mower-half-acre", label: "Which robot mower for a half acre?" },
          { href: "/reviews/segway-navimow-x4", label: "Navimow X4 review" },
          { href: "/reviews/mammotion-luba-3-awd", label: "LUBA 3 AWD review" },
          { href: "/best", label: "Best robot lawn mowers for US yards" },
        ]}
      />
    </ArticleFrame>
  );
}
