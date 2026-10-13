import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { CtaCluster, Faq, Related } from "@/components/Blocks";
import { ProductLink } from "@/components/ProductLink";
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
      whatChanged="October 13, 2026: linked the new family reviews and the hills page."
      disclosure
    >
      <p className="measure">
        Choose the navigation the yard can feed. Heavy tree cover points to a mower that can map with LiDAR,
        not to RTK alone. An open acre with steep banks can use network RTK if the lawn has Wi-Fi or cell
        service. Vision on these models is an extra pair of cameras, not a fourth setup you buy by itself.
      </p>
      <h2>Two checked examples</h2>
      <p className="measure">
        For heavy trees, the LUBA 3 AWD 3000 is rated {formatAcres(luba.acres)} and uses{" "}
        {navigationLabel(luba.family.navigation)}. For an open steep acre, the Navimow X430 is rated{" "}
        {formatAcres(x430.acres)} and {publishedSlope(x430.slope, x430.degrees)}, with{" "}
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
      <h2>Four setups, one yard</h2>
      <NavFour />
      <p className="measure">
        The drawing uses short labels. The differences that change a purchase are below. A highlighted panel
        is not set here, because this page is comparing setups rather than one mower.
      </p>
      <h3>Boundary wire</h3>
      <p className="measure">
        A wire is buried or pegged around the lawn, and the mower follows it. It does not need sky. It fails
        when the wire is cut, or when a bed moves and nobody moves the wire. On the ladder, the Worx Landroid
        M WR147 is a boundary-wire model rated {formatAcres(0.25)}. The Husqvarna Automower 420 iQ can run
        wire-free or with a boundary wire.
      </p>
      <h3>Antenna RTK</h3>
      <p className="measure">
        A reference antenna on the property sends corrections. It needs open sky above the antenna, and the
        mower still needs sky along its path. Trees, walls, and the roof edge weaken it. Raising only the
        antenna does not fix canopy over the grass.
      </p>
      <AntennaDiagram />
      <p className="measure">
        Husqvarna’s own EPOS guidance asks for a reference station at least 6.5 ft (2 m) high, with at least
        135° of open sky. That is Husqvarna’s rule for its station, published Jan 28, 2026. It is not a
        universal spec for every brand.{" "}
        <a href={HUSQ_ANTENNA}>Husqvarna reference-station guidance</a>.
      </p>
      <h3>Network RTK</h3>
      <p className="measure">
        Corrections arrive over Wi-Fi or cell service. There may be no antenna to mount. The Navimow X430
        includes an antenna and says it is optional. The Navimow i210 AWD is network RTK plus vision and does
        not use an antenna. The fix weakens when cell service is poor at the lawn, or when canopy covers the
        path. A yearly fee after a free period is a separate question, answered on each review from that
        maker’s page.
      </p>
      <h3>LiDAR or a camera</h3>
      <p className="measure">
        The mower builds a map from what it sees. Nothing has to be installed in the yard. It weakens when
        the camera reads leaves, weeds, or bare soil as “not grass,” and when a LiDAR unit pauses in heat.
        The Dreame A3 AWD Pro 2500 is LiDAR plus vision, with no RTK and no wire, rated{" "}
        {formatAcres(dreame.acres)}. The LUBA 3 AWD 1500 is LiDAR plus vision only. The 3000 adds network
        RTK. The 1500 is rated {formatAcres(luba1500.acres)}.
      </p>
      <p className="measure">
        The Worx Landroid Vision Cloud WR340 uses cloud RTK, with no antenna, plus stereo vision, and Worx
        says a V-SLAM fallback takes over in shade. It is rated {formatAcres(worx.acres)} and{" "}
        {publishedSlope(worx.slope, worx.degrees)}.
      </p>
      <h2>What this means when you choose</h2>
      <ul className="grid gap-3 pl-5">
        <li>
          Open quarter acre, no antenna to mount: <Link href="/best#navimow-i210">Navimow i210 AWD</Link>.
        </li>
        <li>
          Trees, and you do not want a base station: <Link href="/best#dreame-a3-2500">Dreame A3 AWD Pro 2500</Link>{" "}
          or <Link href="/reviews/mammotion-luba-3-awd">LUBA 3 AWD 3000</Link>.
        </li>
        <li>
          Open acre, steep banks, Wi-Fi or cell at the lawn:{" "}
          <Link href="/reviews/segway-navimow-x4">Navimow X430</Link>.
        </li>
        <li>
          Open acre, gentler slopes, cloud RTK: <Link href="/best#worx-wr340">Worx WR340</Link>.
        </li>
      </ul>
      <Faq
        items={[
          {
            q: "Do I need an antenna in the yard?",
            a: "Only for antenna RTK. Network RTK uses Wi-Fi or cell. The X430 includes an antenna and describes it as optional. The i210 page says no antenna. LiDAR models such as the Dreame 2500 do not use RTK at all.",
          },
          {
            q: "Will trees block RTK?",
            a: "They can. The mower needs a fix along its path, not only at the antenna or the dock. Canopy over the grass is the failure, which is why a LiDAR model is the comparison when the lawn is wooded.",
          },
          {
            q: "Is a boundary wire still reasonable?",
            a: "Yes, when you want a mower that does not depend on sky. The trade is the install, and a wire that can be cut. The ladder marks boundary-wire models with a dashed line.",
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
          { href: "/best", label: "Best robot lawn mowers for US yards" },
        ]}
      />
    </ArticleFrame>
  );
}
