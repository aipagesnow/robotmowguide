import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { CtaCluster, Disclosure, Faq, Related } from "@/components/Blocks";
import { ProductLink } from "@/components/ProductLink";
import { pageMeta } from "@/lib/metadata";
import { modelFacts } from "@/lib/products";
import { FCC_COVERED_LIST, FCC_DA_26_789, FCC_SEARCH, FCC_TABLE_CHECKED, RECHECKED } from "@/lib/site";
import { formatDate } from "@/lib/format";

const title = "Are robot mowers banned in the US? The 2026 FCC rule, tracked";
const description =
  "What the July 28, 2026 FCC Covered List change does and does not do for robot mowers already on sale in the US.";

const FACT =
  "Edited and fact-checked by the RobotMowGuide editors at Aivora Digital. FCC documents read again on Oct 13, 2026. The Covered List appendix date cited here is Oct 9, 2026.";

const FAQ_URL = "https://www.fcc.gov/covered-list-faqs-robots-inverters";
const FACT_SHEET = "https://docs.fcc.gov/public/attachments/DOC-423682A1.pdf";
const NEWS = "https://www.fcc.gov/document/fcc-adds-foreign-produced-power-inverters-and-robots-covered-list-0";
const ROBOTS_CA = "https://www.fcc.gov/sites/default/files/robots-ca.pdf";
const DA_996 = "https://docs.fcc.gov/public/attachments/DA-26-996A1.txt";
const DA_1089 = "https://docs.fcc.gov/public/attachments/DA-26-1089A1.txt";
const DA_1063 = "https://www.fcc.gov/document/fcc-announces-conditional-approvals-certain-devices";
const HUSQ =
  "https://www.husqvarnagroup.com/en/press/husqvarna-group-first-receive-fcc-conditional-approval-foreign-manufactured-advanced-robotic";
const ANSCER_PAGE = "https://www.fcc.gov/document/fcc-announces-conditional-approvals-certain-robots";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/guides/fcc-robot-mower-ban",
});

export default function FccPage() {
  const i210 = modelFacts("segway-navimow-i2-awd", "Navimow i210 AWD");
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/guides/fcc-robot-mower-ban"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
        { name: "FCC rule", path: "/guides/fcc-robot-mower-ban" },
      ]}
      updated={RECHECKED}
      whatChanged="October 13, 2026: first published, with links to three current models that already have a listing."
      factCheck={FACT}
    >
      <p className="measure">
        Short answer: no. If a robot mower model was already FCC-authorized before the July 28, 2026 rule, it can still
        be imported, sold and used, and the one in your yard may keep getting security and compatibility updates at least
        until January 1, 2029. The rule only stops new models that haven't been authorized yet, unless they get a
        Conditional Approval.
      </p>
      <p className="measure">
        If you're buying a mower now, these current models have a confirmed amazon.com listing.
      </p>
      <Disclosure />
      <CtaCluster>
        <ProductLink
          asin={i210.variant.asin}
          model="Navimow i210 AWD"
          productSlug={i210.family.slug}
          placement="inline"
          pageType="guide"
        />
        <ProductLink
          asin={luba.variant.asin}
          model="LUBA 3 AWD 3000"
          productSlug={luba.family.slug}
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
      <YardPhoto id="photo-fcc" />
      <h2>What the FCC added on July 28, 2026</h2>
      <p className="measure">
        On July 28, 2026, the FCC added foreign-produced advanced robotic devices to the Covered List. The
        fact sheet is <a href={FACT_SHEET}>DOC-423682</a>. The news release is <a href={NEWS}>on fcc.gov</a>.
        The public notice is cited as DA 26-786. Those links are the FCC copies we read.
      </p>
      <p className="measure">
        The Covered List name, from the{" "}
        <a href={FAQ_URL}>FCC FAQ</a> (page updated October 2, 2026), is: “Foreign produced advanced robotic
        devices, except advanced robotic devices which have been granted a Conditional Approval by DoW.”
      </p>
      <p className="measure">
        The same fact sheet says the restrictions apply to new device models. It says the update doesn't
        prohibit import, sale, or use of existing models the FCC previously authorized, and doesn't affect
        previously purchased devices. To be fair, it also says the rule is country-neutral.
      </p>
      <h2>Does the definition name a lawn mower?</h2>
      <p className="measure">
        Not by name. The <a href={FAQ_URL}>FCC FAQ</a> defines an advanced robotic device as a device with ground
        locomotion, that operates at a distance from a human, weighs over 4.4 lb with its dock, contains a
        sensor, has a network connection of at least 200 kbps (including Bluetooth, Wi-Fi, or cellular), and
        uses navigation software.
      </p>
      <p className="measure">
        The notice doesn't mention lawn mowers by name, but a connected wire-free robot mower appears to meet
        every part of that definition. If yours has no radio link at 200 kbps or more, it may fall outside that
        definition.
      </p>
      <h2>What did not change</h2>
      <ul className="grid gap-2 pl-5">
        <li>
          A model the FCC had already authorized can still be imported, marketed, and sold (
          <a href={FACT_SHEET}>fact sheet DOC-423682</a>).
        </li>
        <li>
          If you already own one, you can keep using it (
          <a href={FACT_SHEET}>fact sheet DOC-423682</a>).
        </li>
        <li>
          Devices authorized before July 28, 2026 may keep receiving software and firmware updates that
          mitigate harm to US consumers, including security patches and operating-system compatibility
          updates, at least until January 1, 2029. The waiver is of 47 CFR §§ 2.932(b) and 2.1043(b). After
          that date it depends on further FCC action. The notice doesn't say the waiver covers hardware
          changes (<a href={FCC_DA_26_789}>DA 26-789</a>).
        </li>
        <li>
          Repairs of already-authorized devices you already have aren't prohibited. Replacement with
          identical parts isn't prohibited (<a href={FAQ_URL}>FCC FAQ</a>).
        </li>
      </ul>
      <h2>Who counts as foreign-produced</h2>
      <p className="measure">
        It's about where the mower is made, not the brand name. The <a href={FAQ_URL}>FCC FAQ</a> says “foreign-produced” means the device isn't a domestic end
        product under 48 CFR § 25.101(a). It must be manufactured in the United States, and the cost of
        domestic components must exceed 65 percent for items delivered from 2024 through 2028, and 75 percent
        from 2029. The maker's nationality isn't the test. The fact sheet says the rule applies regardless
        of the nationality of origin (<a href={FACT_SHEET}>DOC-423682</a>).
      </p>
      <h2>Conditional approvals</h2>
      <p className="measure">
        A Conditional Approval is an exception for a named device or platform. The rows below are the robotic
        ones we could read. The appendix inside{" "}
        <a href={DA_1089}>DA 26-1089</a> is marked “Updated October 9, 2026.” We only read the rows named here
        from that appendix. The live table is the{" "}
        <a href={FCC_COVERED_LIST}>FCC Covered List</a>, table date {formatDate(FCC_TABLE_CHECKED)}.
      </p>
      <p className="measure">
        Applicants must submit Conditional Approval applications by January 1, 2028 (
        <a href={ROBOTS_CA}>FCC robots-ca.pdf</a>).
      </p>
      <div className="table-scroll">
        <p className="scroll-cue">Swipe sideways to read every column.</p>
        <table className="data">
          <caption>Robotic Conditional Approval rows we read in October 2026.</caption>
          <thead>
            <tr>
              <th scope="col">Device or platform</th>
              <th scope="col">Date</th>
              <th scope="col">FCC document</th>
              <th scope="col">End date in the row we read</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Husqvarna AB 305v IQ, 310v IQ, 420v IQ, and 440v IQ robotic platforms</th>
              <td>September 9, 2026</td>
              <td>
                Appendix in <a href={DA_1089}>DA 26-1089</a>, updated October 9, 2026
              </td>
              <td>No end date in the row we read</td>
            </tr>
            <tr>
              <th scope="row">Matic Robots, Inc. Robotic Floor Cleaner Model 4MA0001 and Charging Dock Model 4DK0008</th>
              <td>October 2, 2026</td>
              <td>
                <a href={DA_1063}>DA 26-1063</a>
              </td>
              <td>Not a mower. No end date was in the row we could read</td>
            </tr>
            <tr>
              <th scope="row">ANSCER Robotics AR250, AR650, and AR1250</th>
              <td>September 18, 2026</td>
              <td>
                <a href={DA_996}>DA 26-996</a> and <a href={ANSCER_PAGE}>the FCC announcement</a>
              </td>
              <td>No termination date while the onshoring plan is met. Not a mower.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>Brands a buyer asks about</h2>
      <p className="measure">
        If you're asking about a brand, none of the rows we could read is Navimow, Mammotion, Dreame, Worx, ECOVACS, MOVA, eufy, Sunseeker,
        or Greenworks. That doesn't mean those brands are missing from every FCC file. It only covers
        the rows we could read. No specific mower is marked FCC-authorized from these
        rows.
      </p>
      <div className="table-scroll">
        <p className="scroll-cue">Swipe sideways to read every column.</p>
        <table className="data">
          <caption>What the rows we read do, and don't, say about brands.</caption>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">In the rows we read</th>
              <th scope="col">What that means for a mower already on sale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Husqvarna platforms listed above</th>
              <td>Yes. FCC spelling is “305v IQ” and the same pattern for the other three.</td>
              <td>
                Husqvarna's September 11, 2026 press release says the FCC announced the approval on September
                9, 2026, names platforms 305V iQ, 310V iQ, 420V iQ, and 440V iQ, says a US launch is expected
                in 2027, and says already-approved models on the market are exempt. That last sentence is
                Husqvarna's. The FCC fact sheet says previously authorized models can still be sold, and it
                doesn't limit that sentence to one brand (
                <a href={HUSQ}>Husqvarna Group</a>, <a href={FACT_SHEET}>DOC-423682</a>).
              </td>
            </tr>
            <tr>
              <th scope="row">Matic and ANSCER</th>
              <td>Yes. Floor cleaner and industrial robots, not lawn mowers.</td>
              <td>They don't tell you whether a lawn mower is authorized.</td>
            </tr>
            <tr>
              <th scope="row">Navimow, Mammotion, Dreame, Worx, ECOVACS, MOVA, eufy, Sunseeker, Greenworks</th>
              <td>Not in the robotic rows we could read.</td>
              <td>
                The fact sheet still says previously authorized models can still be sold. These rows don't
                show that a given model from these brands is authorized. We'd look up the FCC ID on your mower before you rely
                on a brand name.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>How to check an FCC ID</h2>
      <p className="measure">
        You'll find the ID on your mower or in its papers. Search it in the{" "}
        <a href={FCC_SEARCH}>FCC equipment authorization search</a>. We aren't saying that any
        model's ID is on file. The search result is what tells you. If an ID is missing, that doesn't answer it
        either way.
      </p>
      <h2>What to buy now</h2>
      <p className="measure">
        We'd choose for the lawn you have. The rankings are on <Link href="/best">the best-mowers page</Link>.
      </p>
      <h2>Open questions</h2>
      <p className="measure">
        The documents cited here don't name a proposal to stop sales of already-authorized mowers. New models
        still need authorization, or a Conditional Approval, before
        they can be sold. What happens to software updates after January 1, 2029 depends on further FCC
        action (<a href={FCC_DA_26_789}>DA 26-789</a>).
      </p>
      <Faq
        items={[
          {
            q: "Can I still buy a robot mower?",
            a: "Yes, if the model was already authorized. The fact sheet says the update doesn't prohibit import, sale, or use of those models.",
          },
          {
            q: "What does the FCC rule mean if I already own a robot mower?",
            a: "You can keep using it. The fact sheet says the update doesn't prohibit the use of models that were already authorized, and DA 26-789 says they may get security and compatibility updates at least until January 1, 2029.",
          },
          {
            q: "Will my mower keep getting updates?",
            a: "DA 26-789 says your already-authorized mower may receive security and compatibility updates at least until January 1, 2029. It doesn't promise hardware changes, and it doesn't set the rule after that date.",
          },
          {
            q: "Does it matter which brand?",
            a: "The rule is about where and how the device is produced, not the brand's nationality. A Conditional Approval is for a named platform. The mower brands in the table above weren't in the approval rows we could read.",
          },
          {
            q: "How do I check a model’s FCC authorization?",
            a: "Use the FCC equipment authorization search and the ID on your mower or in its papers. We don't list example IDs.",
          },
          {
            q: "Will new models come to the US?",
            a: "A new model needs FCC authorization, or a Conditional Approval, before it can be sold. Husqvarna says the approved platforms are expected in the US in 2027. That date is Husqvarna's, not ours.",
          },
          {
            q: "Can I import one myself?",
            a: "The fact sheet says models the FCC had already authorized can still be imported and sold. These documents don't describe a path for a model that has no authorization.",
          },
        ]}
      />
      <h2>Changelog</h2>
      <ul className="grid gap-2 pl-5">
        <li>
          October 13, 2026: first written up. The Covered List appendix date cited is October 9, 2026.
          The FAQ page date cited is October 2, 2026. Links are here for three current models that already
          have an amazon.com listing.
        </li>
      </ul>
      <Related
        links={[
          { href: "/best", label: "Best robot lawn mowers for US yards" },
          { href: "/guides/how-big-a-robot-mower-do-i-need", label: "How big a robot mower do I need?" },
          { href: "/reviews/segway-navimow-x4", label: "Navimow X4 review" },
          { href: "/reviews/mammotion-luba-3-awd", label: "LUBA 3 AWD review" },
          { href: "/reviews/worx-landroid-vision-cloud", label: "Worx Landroid Vision Cloud review" },
          { href: "/reviews/dreame-a3-awd-pro", label: "Dreame A3 AWD Pro review" },
        ]}
      />
    </ArticleFrame>
  );
}
