import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { CtaCluster, Faq, Related, SourceLine } from "@/components/Blocks";
import { CostCalculator } from "@/components/CostCalculator";
import { ProductLink } from "@/components/ProductLink";
import { pageMeta } from "@/lib/metadata";
import { costRows, isYearly, moneyText, type CostRow } from "@/lib/costs";
import { modelFacts } from "@/lib/products";
import { RECHECKED, SPEC_CHECKED } from "@/lib/site";

const title = "What does a robot mower cost to own?";
const description =
  "Published subscription and accessory figures for current robot mowers. Missing prices stay Not published.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/guides/robot-mower-cost-to-own",
});

const LABELS: Record<string, string> = {
  "segway-navimow-x4": "Navimow X4",
  "mammotion-luba-3-awd": "LUBA 3 AWD",
  "mammotion-luba-mini-2-awd": "LUBA mini 2 AWD",
  "dreame-a3-awd-pro": "Dreame A3 AWD Pro",
  "mova-lidax-ultra": "MOVA LiDAX Ultra",
  "worx-landroid-vision-cloud": "Worx Landroid Vision Cloud",
  "husqvarna-automower-iq": "Automower iQ",
  "segway-navimow-i2-awd": "Navimow i series",
  "roborock-rockneo-q110h": "RockNeo Q110H",
  "segway-navimow": "Navimow accessory",
};

function visibleRows(): CostRow[] {
  return costRows.filter((row) => !row.src.some((src) => src.startsWith("docs/")));
}

function figure(row: CostRow): string {
  const text = moneyText(row);
  if (row.confidence.startsWith("official")) return text;
  return `${text} (as reported)`;
}

export default function CostGuide() {
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");
  const rows = visibleRows();

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/guides/robot-mower-cost-to-own"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
        { name: "Cost to own", path: "/guides/robot-mower-cost-to-own" },
      ]}
      updated={RECHECKED}
      whatChanged="October 13, 2026: first published, from the subscription figures checked Oct 10, 2026."
      disclosure
    >
      <p className="measure">
        The only official yearly dollar figure in this set is Navimow Connect+ after the free period, $32.90
        per year. Everything else is a free-period length, a one-time accessory, a secondary report, or Not
        published. This page does not print Amazon prices, and it does not guess a blade price, a battery
        price, or an electricity bill. We have not tested these mowers.
      </p>
      <CtaCluster>
        <ProductLink
          asin={x430.variant.asin}
          model="Navimow X430"
          productSlug={x430.family.slug}
          placement="inline"
          pageType="guide"
        />
      </CtaCluster>
      <YardPhoto id="photo-cost" />
      <h2>Published lines</h2>
      <p className="measure">
        Checked Oct 10, 2026. A free period is not blended into the yearly fee. The X430 free period is 1
        year and the X450 free period is 2 years. Those stay as one published string, not an average.{" "}
        <SourceLine ids={["navimow-x4"]} checked={SPEC_CHECKED} />
      </p>
      <div className="table-scroll">
        <p className="scroll-cue">Swipe sideways to read every column.</p>
        <table className="data">
          <caption>
            Subscription and accessory lines. The yearly-sum column is Yes only for an official dollars-per-year
            figure.
          </caption>
          <thead>
            <tr>
              <th scope="col">Family</th>
              <th scope="col">Item</th>
              <th scope="col">Published figure</th>
              <th scope="col">In the yearly sum</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${row.family}-${row.item}`}>
                <th scope="row">{LABELS[row.family] || row.family}</th>
                <td>{row.item}</td>
                <td className="dim">{figure(row)}</td>
                <td>{isYearly(row) ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2>Where two sources disagree</h2>
      <p className="measure">
        MOVA’s Ultra 3000 AWD page says 4G is free for 3 years. Wirecutter, updated Aug 3, 2026, reports a
        GPS service of $50 per year after year 1. Both lines are in the table. This page does not average
        them and does not add the $50 line into the official sum.{" "}
        <SourceLine ids={["mova-3000", "wirecutter"]} checked={SPEC_CHECKED} />
      </p>
      <p className="measure">
        Worx says lifetime RTK Cloud service at no extra cost. Find My Landroid is not settled: the amazon.com
        comparison chart on the WR340 listing marks it included, and Wirecutter treats a GPS module as an
        extra at about $100. The $100 line stays as reported. It is not added to a yearly total.{" "}
        <SourceLine ids={["worx-vision-cloud", "amz-wr340", "wirecutter"]} checked={RECHECKED} />
      </p>
      <p className="measure">
        The Verge reported Automower Connect cellular as free for life. The Husqvarna US pages used for the
        iQ specs do not state a cellular price, so this page does not treat that report as an official fee.
        Blade prices are Not published.
      </p>
      <p className="measure">
        Mammotion says a 4G subscription is required after the free 3 years on the LUBA 3 AWD and does not
        state the price. That cell stays Not published. The LUBA mini 2 AWD page states 3 years of 4G data
        and does not state a later price.
      </p>
      <p className="measure">
        The MowGate is a one-time accessory at $449.99 on navimow.com, checked Oct 10, 2026. It is not a
        yearly subscription. The Navimow i series calls a 4G anti-theft module an optional add-on and does
        not publish a price. The RockNeo Q110H tracking module is sold separately, and the price was not
        collected. The Worx Landroid M WR147 has no subscription row in this set.
      </p>
      <h2>Five years, only from the published yearly fee</h2>
      <p className="measure">
        Season length does not change these dollars. No line here is priced per month, and electricity is
        left out because a battery watt-hour figure and a dock standby figure are not both published. The
        mower’s own purchase price is also left off this page.
      </p>
      <p className="measure">
        With the form left as it first appears, five years of the Connect+ fee, if it were charged every
        year and the free period were ignored, is $164.50. That figure is $32.90 times 5. It is not a full
        five-year cost, because blades, batteries, and the mower’s purchase price are Not published. A free
        year on the X430, or two free years on the X450, would make the paid span shorter. This page does
        not subtract those years for you, because the two models do not share one free period.
      </p>
      <CostCalculator rows={rows} />
      <Faq
        items={[
          {
            q: "Why does a cell say Not published?",
            a: "The maker’s page did not state a number, or this site has not collected one. The cell stays Not published. It is not filled with a guess.",
          },
          {
            q: "Does the season length change the total?",
            a: "No. None of these lines is priced per month. The month field is there so that limit is visible.",
          },
          {
            q: "Is $164.50 the five-year cost of an X430?",
            a: "No. It is five years of the $32.90 Connect+ fee if that fee were charged every year. It skips the free period, the mower’s purchase price, blades, and electricity.",
          },
        ]}
      />
      <Related
        links={[
          { href: "/guides/are-robot-mowers-worth-it", label: "Are robot mowers worth it?" },
          { href: "/reviews/segway-navimow-x4", label: "Navimow X4 review" },
          { href: "/reviews/worx-landroid-vision-cloud", label: "Worx Landroid Vision Cloud review" },
          { href: "/guides/robot-mower-theft-protection", label: "Robot mower theft protection" },
          { href: "/best", label: "Best robot lawn mowers for US yards" },
        ]}
      />
      <p className="measure">
        <Link href="/how-picks-are-chosen">How picks are chosen</Link>.
      </p>
    </ArticleFrame>
  );
}
