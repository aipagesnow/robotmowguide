import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { YardPhoto } from "@/components/YardPhoto";
import { CtaCluster, Faq, Related } from "@/components/Blocks";
import { ProductLink } from "@/components/ProductLink";
import { SlopeMarginNote } from "@/components/VoiceBits";
import { AntennaDiagram, NavFour } from "@/components/Diagrams";
import { pageMeta } from "@/lib/metadata";
import { HUSQ_ANTENNA } from "@/lib/site";
import { modelFacts, navigationLabel } from "@/lib/products";
import { formatAcres } from "@/lib/format";
import { publishedSlope } from "@/lib/speak";

const title = "RTK, LiDAR, or vision: which navigation fits your yard";
const description =
  "How boundary wire, antenna RTK, network RTK, and LiDAR or a camera behave under trees, walls, and open sky.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/guides/rtk-vs-lidar-vs-vision",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Guides", path: "/guides" },
  { name: "RTK, LiDAR, or vision", path: "/guides/rtk-vs-lidar-vs-vision" },
];

export default function RtkGuide() {
  const luba = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 3000");
  const x430 = modelFacts("segway-navimow-x4", "Navimow X430");
  const i210 = modelFacts("segway-navimow-i2-awd", "Navimow i210 AWD");
  const dreame = modelFacts("dreame-a3-awd-pro", "A3 AWD Pro 2500");
  const worx = modelFacts("worx-landroid-vision-cloud", "Landroid Vision Cloud WR340 (1 acre, 2WD)");
  const luba1500 = modelFacts("mammotion-luba-3-awd", "LUBA 3 AWD 1500");

  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/guides/rtk-vs-lidar-vs-vision"
      crumbs={crumbs}
      whatChanged="October 13, 2026: linked the under-trees page."
      disclosure
    >
      <p className="measure">
        We'd pick the navigation your yard can actually feed. Heavy tree cover points to a mower that can map with LiDAR,
        not to RTK alone. An open acre with steep banks can use network RTK if your lawn has Wi-Fi or cell
        service. Here's the thing: vision on these models is an extra pair of cameras, not a fourth setup you'd buy by itself.
      </p>
      <h2>Two checked examples</h2>
      <p className="measure">
        For heavy trees, we'd look at the LUBA 3 AWD 3000, rated {formatAcres(luba.acres)} and using{" "}
        {navigationLabel(luba.family.navigation)}. For an open steep acre, the Navimow X430 is the one we'd look at, rated{" "}
        {formatAcres(x430.acres, false)} and {publishedSlope(x430.slope, x430.degrees)}, with{" "}
        {navigationLabel(x430.family.navigation)}.
      </p>
      <CtaCluster>
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
      <YardPhoto id="photo-rtk" />
      <h2>Four setups, one yard</h2>
      <NavFour />
      <h3>Boundary wire</h3>
      <p className="measure">
        A wire is buried or pegged around your lawn, and the mower follows it. It doesn't need sky. It fails
        when the wire is cut, or when a bed moves and nobody moves the wire. On the ladder, the Worx Landroid
        M <Link href="/reviews/worx-landroid-m-wr147">WR147</Link> is a boundary-wire model rated {formatAcres(0.25, false)}. The Husqvarna{" "}
        <Link href="/reviews/husqvarna-automower-iq">Automower 420 iQ</Link> can run wire-free or with a boundary wire.
      </p>
      <h3>Antenna RTK</h3>
      <p className="measure">
        A reference antenna on your property sends corrections. It needs open sky above the antenna, and the
        mower still needs sky along its path. Trees, walls, and the roof edge weaken it. Raising only the
        antenna doesn't fix canopy over your grass.
      </p>
      <AntennaDiagram />
      <p className="measure">
        Husqvarna's own EPOS guidance asks for a reference station at least 6.5 ft (2 m) high, with at least
        135° of open sky. That's Husqvarna's rule for its station, published Jan 28, 2026. It isn't a
        universal spec for every brand.{" "}
        <a href={HUSQ_ANTENNA}>Husqvarna reference-station guidance</a>.
      </p>
      <h3>Network RTK</h3>
      <p className="measure">
        Corrections arrive over Wi-Fi or cell service, so there may be no antenna to mount. The Navimow X430
        includes an antenna and says it's optional. The Navimow i210 AWD is network RTK plus vision and doesn't
        use an antenna. The fix weakens when cell service is poor at your lawn, or when canopy covers the
        path. A yearly fee after a free period is a separate question, answered on each review from that
        maker's page.
      </p>
      <h3>LiDAR or a camera</h3>
      <p className="measure">
        The mower builds a map from what it sees, so nothing has to be installed in your yard. It weakens when
        the camera reads leaves, weeds, or bare soil as "not grass," and when a LiDAR unit pauses in heat.
        The Dreame A3 AWD Pro 2500 is LiDAR plus vision, with no RTK and no wire, rated{" "}
        {formatAcres(dreame.acres, false)}. The LUBA 3 AWD 1500 is LiDAR plus vision only. The 3000 adds
        network RTK. The 1500 is rated {formatAcres(luba1500.acres, false)}.
      </p>
      <p className="measure">
        The Worx Landroid Vision Cloud WR340 uses cloud RTK, with no antenna, plus stereo vision, and Worx
        says a V-SLAM fallback takes over in shade. It's rated {formatAcres(worx.acres, false)} and{" "}
        {worx.slope}%.
      </p>
      <SlopeMarginNote />
      <h2>What this means when you choose</h2>
      <ul className="grid gap-3 pl-5">
        <li>
          Open quarter acre and you don't want an antenna: we'd pick the <Link href="/best#navimow-i210">Navimow i210 AWD</Link>.
        </li>
        <li>
          Trees, and you don't want a base station: we'd pick the <Link href="/best#dreame-a3-2500">Dreame A3 AWD Pro 2500</Link>{" "}
          or the <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD 3000</Link>.
        </li>
        <li>
          Open acre, steep banks, Wi-Fi or cell at the lawn: we'd pick the{" "}
          <Link href="/reviews/segway-navimow-x4">Navimow X430</Link>.
        </li>
        <li>
          Open acre, gentler slopes, cloud RTK: we'd pick the <Link href="/best#worx-wr340">Worx WR340</Link>.
        </li>
      </ul>
      <Faq
        items={[
          {
            q: "Do I need an antenna in the yard?",
            a: "Only if you're on antenna RTK. Network RTK uses Wi-Fi or cell. The X430 includes an antenna and describes it as optional. The i210 page says no antenna. LiDAR models such as the Dreame 2500 don't use RTK at all.",
          },
          {
            q: "Will trees block RTK?",
            a: "They can. The mower needs a fix along its path, not only at the antenna or the dock. If canopy covers your grass, that's the failure, which is why we'd compare a LiDAR model when the lawn is wooded.",
          },
          {
            q: "Is a boundary wire still reasonable?",
            a: "Yes, if you want a mower that doesn't depend on sky. The trade is the install, and a wire that can be cut. The ladder marks boundary-wire models with a dashed line.",
          },
        ]}
      />
      <Related
        links={[
          { href: "/guides/how-big-a-robot-mower-do-i-need", label: "How big a robot mower do I need?" },
          { href: "/reviews/mammotion-luba-3-awd", label: "LUBA 3 AWD review" },
          { href: "/reviews/segway-navimow-x4", label: "Navimow X4 review" },
          { href: "/reviews/dreame-a3-awd-pro", label: "Dreame A3 AWD Pro review" },
          { href: "/reviews/worx-landroid-vision-cloud", label: "Worx Landroid Vision Cloud review" },
          { href: "/best/robot-mower-for-hills", label: "What robot mower can climb my yard?" },
          { href: "/best/robot-mower-under-trees", label: "Which robot mower under trees?" },
          { href: "/best", label: "Best robot lawn mowers for US yards" },
        ]}
      />
    </ArticleFrame>
  );
}
