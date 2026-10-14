import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { CtaCluster, Faq, Related, SourceLine } from "@/components/Blocks";
import { ProductLink } from "@/components/ProductLink";
import { pageMeta } from "@/lib/metadata";
import { modelFacts } from "@/lib/products";
import { specText } from "@/lib/speak";
import { RECHECKED, SPEC_CHECKED } from "@/lib/site";

const title = "How do I keep a robot mower from being stolen?";
const description =
  "Which current models publish a PIN, an alarm, or tracking, and which pages leave theft as Not published.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/guides/robot-mower-theft-protection",
});

export default function TheftGuide() {
  const mova = modelFacts("mova-lidax-ultra", "LiDAX Ultra 3000 AWD");
  const q = modelFacts("roborock-rockneo-q110h", "RockNeo Q110H");
  const worx = modelFacts("worx-landroid-vision-cloud", "Landroid Vision Cloud WR340 (1 acre, 2WD)");
  const wr147 = modelFacts("worx-landroid-m-wr147", "Landroid M WR147");
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/guides/robot-mower-theft-protection"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
        { name: "Theft protection", path: "/guides/robot-mower-theft-protection" },
      ]}
      updated={RECHECKED}
      whatChanged="October 13, 2026: first published, from the theft lines in the checked specs."
      disclosure
    >
      <p className="measure">
        We'd start with a published lock or alarm if the mower will sit on a street-visible lawn. In this set, the MOVA
        LiDAX Ultra 3000 AWD states location tracking, an off-map alarm, AirTag compatibility, and a PIN
        lock. To be fair, several other current models don't state a theft feature at all. A fence and a garage still
        matter, because a radio feature isn't a lock on the mower.
      </p>
      <CtaCluster>
        <ProductLink
          asin={mova.variant.asin}
          model="LiDAX Ultra 3000 AWD"
          productSlug={mova.family.slug}
          placement="inline"
          pageType="guide"
        />
      </CtaCluster>
      <YardPhoto id="photo-front-street" />
      <h2>What is published</h2>
      <div className="table-scroll">
        <p className="scroll-cue">Swipe sideways to read every column.</p>
        <table className="data">
          <caption>Theft and tracking lines from the model specs. A blank in the sources isn't filled in.</caption>
          <thead>
            <tr>
              <th scope="col">Model</th>
              <th scope="col">Published theft line</th>
              <th scope="col">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <Link href="/reviews/mova-lidax-ultra">MOVA LiDAX Ultra 3000 AWD</Link>
              </th>
              <td>{specText(mova.specs.theft)}. Connectivity: {specText(mova.specs.connectivity)}.</td>
              <td>
                <SourceLine ids={["mova-3000"]} checked={SPEC_CHECKED} />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Link href="/reviews/roborock-rockneo-q110h">RockNeo Q110H</Link>
              </th>
              <td>
                {specText(q.specs.theft)}. The 4G module is sold separately, and the price is Not published.
              </td>
              <td>
                <SourceLine ids={["fdr-q110h", "verge"]} checked={SPEC_CHECKED} />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Link href="/reviews/worx-landroid-vision-cloud">Worx WR340</Link>
              </th>
              <td>{specText(worx.specs.theft)}</td>
              <td>
                <SourceLine ids={["amz-wr340", "wirecutter"]} checked={RECHECKED} />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Link href="/reviews/worx-landroid-m-wr147">Worx Landroid M WR147</Link>
              </th>
              <td>
                Not published. Connectivity on the manual is {specText(wr147.specs.connectivity)}. No PIN or
                GPS claim is published, so we wouldn't assume one.
              </td>
              <td>
                <SourceLine ids={["worx-wr147-manual"]} checked={SPEC_CHECKED} />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Link href="/reviews/segway-navimow-x4">Navimow X430</Link>
              </th>
              <td>
                Not published as a theft feature. Network RTK on this model needs Wi-Fi or 4G. Connect+ is
                free for 1 year on the X430, and that isn't a lock.
              </td>
              <td>
                <SourceLine ids={["navimow-x4"]} checked={SPEC_CHECKED} />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Link href="/reviews/husqvarna-automower-iq">Automower iQ</Link>
              </th>
              <td>
                Not published. Nothing on the Husqvarna US pages we read states that an iQ model keeps
                reporting after the power is off.
              </td>
              <td>
                <SourceLine ids={["husq-420iq"]} checked={SPEC_CHECKED} />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Link href="/reviews/segway-navimow-i-series">Navimow i110N</Link>
              </th>
              <td>
                A 4G anti-theft module is an optional add-on on the i110N. The price is Not published. That
                line isn't copied onto the i210 AWD, so we wouldn't assume that model has it.
              </td>
              <td>
                <SourceLine ids={["homedepot-i110n"]} checked={SPEC_CHECKED} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>What a street-visible yard changes</h2>
      <p className="measure">
        If your front yard is unfenced next to a sidewalk, a missing alarm matters. The{" "}
        <Link href="/guides/robot-mower-front-and-back-yard">front-and-back guide</Link> is about passage
        width, not a lock. We'd bring the mower in if the listing doesn't publish tracking. The{" "}
        <Link href="/guides/are-robot-mowers-worth-it">worth-it guide</Link> lists that yard as a reason to
        wait.
      </p>
      <p className="measure">
        The X430 link is on the <Link href="/reviews/segway-navimow-x4">X4 review</Link> if you
        want the open-acre mower and accept that a theft line is Not published. The Q110H link is on its{" "}
        <Link href="/reviews/roborock-rockneo-q110h">review</Link>.
      </p>
      <Faq
        items={[
          {
            q: "Does Find My Landroid come with the WR340?",
            a: "The amazon.com comparison chart marks it included. Wirecutter treats a GPS module as an extra. The two lines disagree, so we wouldn't pick one for you.",
          },
          {
            q: "Does the Automower iQ have GPS tracking?",
            a: "Not published on the Husqvarna US pages we read. Husqvarna doesn't publish a PIN, an alarm, or a power-off report.",
          },
          {
            q: "Is an AirTag the same as the maker’s tracking?",
            a: "Only the MOVA Ultra 3000 AWD line in this table says AirTag compatible. That's the maker's phrase. It isn't a claim that an AirTag replaces a fence.",
          },
        ]}
      />
      <Related
        links={[
          { href: "/reviews/mova-lidax-ultra", label: "MOVA LiDAX Ultra review" },
          { href: "/reviews/roborock-rockneo-q110h", label: "RockNeo Q110H review" },
          { href: "/guides/robot-mower-front-and-back-yard", label: "Front yard and back yard" },
          { href: "/guides/are-robot-mowers-worth-it", label: "Are robot mowers worth it?" },
          { href: "/guides/robot-mower-cost-to-own", label: "What does a robot mower cost to own?" },
        ]}
      />
    </ArticleFrame>
  );
}
