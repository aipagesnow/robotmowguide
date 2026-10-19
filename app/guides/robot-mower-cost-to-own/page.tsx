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
        For a yearly fee, the only official dollar figure here is Navimow Connect+ after the free period, $32.90
        a year. Everything else is a free-period length, a one-time accessory, a secondary report, or Not
        published. Amazon prices aren't listed. We don't guess a blade price, a battery price, or your electricity
        bill.
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
        These are the published fees, and the good news is a free period stays separate from the yearly fee, as of Oct 10, 2026. The X430 free period is 1
        year and the X450 free period is 2 years. We'd keep each one as published, not average them.{" "}
        <SourceLine ids={["navimow-x4"]} checked={SPEC_CHECKED} />
      </p>
      <div className="table-scroll">
        <p className="scroll-cue">Swipe sideways to read every column.</p>
        <table className="data">
          <caption>
            Subscription and accessory lines. The yearly-sum column is Yes only when there's an official dollars-per-year
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
        We'd plan on MOVA's Ultra 3000 AWD page, which says 4G is free for 3 years. Wirecutter, updated Aug 3, 2026, reports a
        GPS service of $50 per year after year 1. Both lines are in the table. The two GPS lines disagree, so
        we wouldn't average them, and the $50 line isn't in the official sum.{" "}
        <SourceLine ids={["mova-3000", "wirecutter"]} checked={SPEC_CHECKED} />
      </p>
      <p className="measure">
        We'd plan on Worx's line: lifetime RTK Cloud service at no extra cost. Find My Landroid isn't settled: the amazon.com
        comparison chart on the WR340 listing marks it included, and Wirecutter treats a GPS module as an
        extra at about $100. We'd mention that $100 line as reported, once. It isn't added to a yearly total.{" "}
        <SourceLine ids={["worx-vision-cloud", "amz-wr340", "wirecutter"]} checked={RECHECKED} />
      </p>
      <p className="measure">
        The Verge reported Automower Connect cellular as free for life, and we'd treat that as a report, not a fee. The Husqvarna US pages used for the
        iQ specs don't state a cellular price, so that report isn't an official fee.
        Blade prices are Not published.
      </p>
      <p className="measure">
        Mammotion says a 4G subscription is required after the free 3 years on the LUBA 3 AWD and doesn't
        state the price. We'd plan on Not published for that fee. The LUBA mini 2 AWD page states 3 years of 4G data
        and doesn't state a later price.
      </p>
      <p className="measure">
        The MowGate is a one-time accessory at $449.99 on navimow.com, as of Oct 10, 2026. It isn't a
        yearly subscription. The Navimow i series calls a 4G anti-theft module an optional add-on and doesn't
        publish a price. The RockNeo Q110H tracking module is sold separately, and we don't have a price for it.
        The Worx Landroid M WR147 has no subscription in this set.
      </p>
      <h2>Five years, only from the published yearly fee</h2>
      <p className="measure">
        Five years here uses only the published yearly fee. Season length doesn't change these dollars. No line here is priced per month, and electricity isn't
        included, because a battery watt-hour figure and a dock standby figure aren't both published. The
        mower's own purchase price isn't in the yearly sum.
      </p>
      <p className="measure">
        If you leave the form as it first appears, five years of the Connect+ fee, if it were charged every
        year and the free period were ignored, is $164.50. That figure is $32.90 times 5. It isn't a full
        five-year cost, because blades, batteries, and the mower's purchase price are Not published. A free
        year on the X430, or two free years on the X450, would make the paid span shorter. Those free years
        aren't subtracted here, because the two models don't share one free period.
      </p>
      <CostCalculator rows={rows} />
      <Faq
        items={[
          {
            q: "Why does a cell say Not published?",
            a: "The maker's page didn't state a number, or we haven't collected one. The cell stays Not published. We don't fill it with a guess.",
          },
          {
            q: "Does the season length change the total?",
            a: "No. None of these lines is priced per month, so a longer season doesn't change the dollars. The month field is there so you can see that limit.",
          },
          {
            q: "Is $164.50 the five-year cost of an X430?",
            a: "No. It's five years of the $32.90 Connect+ fee if that fee were charged every year. It skips the free period, the mower's purchase price, blades, and electricity.",
          },
        ]}
      />
      <Related
        links={[
          { href: "/guides/are-robot-mowers-worth-it", label: "Are robot mowers worth it?" },
          { href: "/guides/fcc-robot-mower-ban", label: "Are robot mowers banned in the US? The 2026 FCC rule" },
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
