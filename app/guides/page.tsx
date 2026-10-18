import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { CtaCluster, Faq, Related } from "@/components/Blocks";
import { ProductLink } from "@/components/ProductLink";
import { modelFacts } from "@/lib/products";
import { pageMeta } from "@/lib/metadata";
import { RECHECKED } from "@/lib/site";

const title = "Robot mower guides";
const description =
  "US guides on mower size, navigation, cost, theft, winter storage, front and back yards, and the 2026 FCC rule.";

export const metadata: Metadata = pageMeta({ title, description, path: "/guides" });

export default function GuidesIndex() {
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/guides"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
      ]}
      updated={RECHECKED}
      whatChanged="October 13, 2026: added cost to own, whether a robot mower is worth it, and theft protection."
      disclosure
    >
      <p className="measure">
        These guides answer a question about your yard before they name a mower. We last checked the specs on Oct 10,
        2026, unless a guide says otherwise.
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
      <YardPhoto id="photo-guides" />
      <ul className="grid gap-4 pl-5">
        <li>
          <Link href="/guides/how-big-a-robot-mower-do-i-need">How big a robot mower do I need?</Link>
          <p className="m-0">
            You size it to the grass you mow, with a rule of thumb if you've got heavy trees or two zones.
          </p>
        </li>
        <li>
          <Link href="/guides/rtk-vs-lidar-vs-vision">RTK, LiDAR, or vision: which navigation fits your yard</Link>
          <p className="m-0">
            We'd match wire, an antenna, network RTK, LiDAR, or a camera to your yard, and say what makes each one fail.
          </p>
        </li>
        <li>
          <Link href="/guides/fcc-robot-mower-ban">Are robot mowers banned in the US? The 2026 FCC rule, tracked</Link>
          <p className="m-0">
            No, not if yours is already on sale. The July 28, 2026 change is about new models.
          </p>
        </li>
        <li>
          <Link href="/guides/robot-mower-winter-storage">How do I store a robot mower for winter?</Link>
          <p className="m-0">
            We'd follow the Q110H storage temperature, because the other US pages don't include a winter checklist.
          </p>
        </li>
        <li>
          <Link href="/guides/robot-mower-front-and-back-yard">Can one robot mower do the front yard and the back yard?</Link>
          <p className="m-0">
            Often yes, if your side opening is wide enough. We'd measure it against the published widths.
          </p>
        </li>
        <li>
          <Link href="/guides/robot-mower-cost-to-own">What does a robot mower cost to own?</Link>
          <p className="m-0">
            It's the fees the makers publish. Missing prices stay Not published, and Amazon prices aren't listed.
          </p>
        </li>
        <li>
          <Link href="/guides/are-robot-mowers-worth-it">Are robot mowers worth it?</Link>
          <p className="m-0">For some yards, yes. For the yards on that guide, we'd wait.</p>
        </li>
        <li>
          <Link href="/guides/robot-mower-theft-protection">How do I keep a robot mower from being stolen?</Link>
          <p className="m-0">We'd use a published PIN, alarm, or tracker, and notice which models leave theft blank.</p>
        </li>
      </ul>
      <Faq
        items={[
          {
            q: "Which guide should I read first?",
            a: "Start with how big a robot mower you need, because the size comes from the grass you actually mow. Then read the navigation guide to match RTK, LiDAR, or a camera to your yard. Those two answer most of the buying question.",
          },
          {
            q: "Are robot mowers banned in the US?",
            a: "No, not if the model's already on sale. The July 28, 2026 FCC change is about new models. Our FCC tracker keeps the dates and documents in one place.",
          },
          {
            q: "Can one robot mower handle my front and back yard?",
            a: "Often yes, if the side opening between them is wide enough for the mower to pass. The front and back yard guide has the published widths to measure against.",
          },
          {
            q: "Have you tested these mowers?",
            a: "No, it's research. We haven't mowed with these ourselves. The guides use maker specs, the owner threads we link to, and the published US pages.",
          },
        ]}
      />
      <Related
        links={[
          { href: "/best", label: "Best robot lawn mowers for US yards" },
          { href: "/reviews", label: "Robot mower reviews" },
        ]}
      />
    </ArticleFrame>
  );
}
