import type { ReactNode } from "react";
import { Slot } from "@/components/Slot";
import { formatAcres, formatDegrees, degreesFromPercent } from "@/lib/format";
import { getFamily, primaryVariant, navigationLabel } from "@/lib/products";

function Frame({
  title,
  desc,
  viewBox,
  children,
}: {
  title: string;
  desc: string;
  viewBox: string;
  children: ReactNode;
}) {
  const titleId = title.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
  return (
    <figure className="blueprint">
      <svg role="img" viewBox={viewBox} aria-labelledby={`${titleId}-t ${titleId}-d`} className="block h-auto w-full">
        <title id={`${titleId}-t`}>{title}</title>
        <desc id={`${titleId}-d`}>{desc}</desc>
        <rect width="800" height="520" fill="#123a63" />
        {children}
      </svg>
    </figure>
  );
}

export function YardQuarter() {
  return (
    <Slot id="dia-yard-quarter">
      <Frame
        title="Plan of a flat quarter-acre suburban lot with front and back lawns"
        desc="Example plan, not a survey. If your lot is 90 feet by 121 feet, that's 10,890 square feet, or 0.25 acre. It shows a house, a driveway, a front lawn, and a back lawn."
        viewBox="0 0 720 460"
      >
        <PlanRect x={70} y={50} w={580} h={340} label="Lot 90 ft × 121 ft" sub="10,890 sq ft · 0.25 acre" />
        <rect x="250" y="150" width="180" height="110" fill="none" stroke="#ffffff" />
        <text x="340" y="210" fill="#ffffff" fontSize="14" textAnchor="middle">House</text>
        <rect x="430" y="150" width="70" height="150" fill="none" stroke="#dbe7f3" />
        <text x="465" y="230" fill="#dbe7f3" fontSize="13" textAnchor="middle">Drive</text>
        <text x="340" y="110" fill="#dbe7f3" fontSize="14" textAnchor="middle">Front lawn</text>
        <text x="300" y="330" fill="#dbe7f3" fontSize="14" textAnchor="middle">Back lawn</text>
        <text x="80" y="430" fill="#dbe7f3" fontSize="13">An example of a flat quarter-acre lot, with a front lawn and a back lawn.</text>
      </Frame>
    </Slot>
  );
}

export function YardHalf() {
  return (
    <Slot id="dia-yard-half-zones">
      <Frame
        title="Plan of a half-acre lot whose front and back lawns are joined by a narrow side passage"
        desc="Example plan, not a survey. If your lot is 132 feet by 165 feet, that's 21,780 square feet, or 0.5 acre. A 3 foot passage joins the front and back lawns."
        viewBox="0 0 720 480"
      >
        <PlanRect x={60} y={40} w={600} h={380} label="Lot 132 ft × 165 ft" sub="21,780 sq ft · 0.5 acre" />
        <rect x="230" y="140" width="200" height="150" fill="none" stroke="#ffffff" />
        <text x="330" y="220" fill="#ffffff" fontSize="14" textAnchor="middle">House</text>
        <rect x="430" y="140" width="18" height="150" fill="none" stroke="#e2186f" />
        <text x="500" y="200" fill="#ffffff" fontSize="13">Passage 3 ft</text>
        <text x="200" y="100" fill="#dbe7f3" fontSize="14">Front lawn</text>
        <text x="200" y="360" fill="#dbe7f3" fontSize="14">Back lawn</text>
        <text x="70" y="450" fill="#dbe7f3" fontSize="13">The pink line is a 3 ft side passage. If your mower is wider than that gap, it can't get through.</text>
      </Frame>
    </Slot>
  );
}

export function YardAcre() {
  return (
    <Slot id="dia-yard-acre">
      <Frame
        title="Plan of an open one-acre lot with a long driveway"
        desc="Example plan, not a survey. If your lot is 180 feet by 242 feet, that's 43,560 square feet, or 1 acre, with a long drive and a few beds."
        viewBox="0 0 720 480"
      >
        <PlanRect x={50} y={36} w={640} h={390} label="Lot 180 ft × 242 ft" sub="43,560 sq ft · 1 acre" />
        <rect x="70" y="80" width="36" height="300" fill="none" stroke="#dbe7f3" />
        <text x="88" y="230" fill="#dbe7f3" fontSize="13" textAnchor="middle" transform="rotate(-90 88 230)">Long drive</text>
        <rect x="180" y="90" width="160" height="90" fill="none" stroke="#ffffff" />
        <text x="260" y="140" fill="#ffffff" fontSize="14" textAnchor="middle">House</text>
        <circle cx="420" cy="300" r="28" fill="none" stroke="#dbe7f3" />
        <circle cx="520" cy="250" r="22" fill="none" stroke="#dbe7f3" />
        <text x="400" y="360" fill="#dbe7f3" fontSize="14">Beds</text>
        <text x="250" y="250" fill="#dbe7f3" fontSize="14">Open lawn</text>
      </Frame>
    </Slot>
  );
}

export function YardWooded() {
  return (
    <Slot id="dia-yard-wooded">
      <Frame
        title="Plan of a wooded lot with tree canopy over a third of the lawn"
        desc="Example plan. Three canopy circles cover about one third of the lawn. If your trees shade that much, that's where a satellite fix often weakens."
        viewBox="0 0 720 480"
      >
        <PlanRect x={60} y={40} w={600} h={380} label="Example lawn under trees" sub="Canopy about 1/3 of the lawn" />
        <circle cx="220" cy="250" r="70" fill="#1d4f80" stroke="#dbe7f3" />
        <circle cx="360" cy="180" r="70" fill="#1d4f80" stroke="#dbe7f3" />
        <circle cx="470" cy="300" r="70" fill="#1d4f80" stroke="#dbe7f3" />
        <text x="300" y="250" fill="#ffffff" fontSize="14" textAnchor="middle">Canopy</text>
        <text x="80" y="450" fill="#dbe7f3" fontSize="13">Shaded circles show tree canopy over about one third of the lawn.</text>
      </Frame>
    </Slot>
  );
}

export function YardHillside() {
  const deg = formatDegrees(degreesFromPercent(40));
  return (
    <Slot id="dia-yard-hillside">
      <Frame
        title="Plan of a hillside lot with contour lines and the steepest bank marked"
        desc={`Example bank, not a survey and not a mower rating. If your steepest bank rises 4 feet over 10 feet, that's 40 percent, ${deg}.`}
        viewBox="0 0 720 460"
      >
        {[0, 1, 2, 3, 4].map((line) => (
          <path
            key={line}
            d={`M80 ${120 + line * 50} C 200 ${90 + line * 48}, 360 ${150 + line * 46}, 640 ${110 + line * 52}`}
            fill="none"
            stroke="#dbe7f3"
            strokeOpacity="0.7"
          />
        ))}
        <polygon points="460,250 560,250 560,290" fill="none" stroke="#f2c230" strokeWidth="2" />
        <text x="470" y="245" fill="#f2c230" fontSize="14">Example bank 40% ({deg})</text>
        <text x="575" y="275" fill="#f2c230" fontSize="12">4 ft rise / 10 ft</text>
        <text x="80" y="420" fill="#dbe7f3" fontSize="13">Contour lines on a slope. The yellow triangle is an example 40% bank, not a mower's rating.</text>
      </Frame>
    </Slot>
  );
}

export function YardFlorida() {
  return (
    <Slot id="dia-yard-florida">
      <Frame
        title="Plan of a Florida yard with a pool cage, palms, and St. Augustine lawn"
        desc="An example Florida lot with a screened pool cage, two palms, and a St. Augustine lawn. Not a survey."
        viewBox="0 0 720 460"
      >
        <PlanRect x={60} y={40} w={600} h={360} label="St. Augustine lawn" sub="Example Florida yard" />
        <rect x="360" y="180" width="220" height="140" fill="none" stroke="#ffffff" strokeDasharray="6 4" />
        <text x="470" y="255" fill="#ffffff" fontSize="14" textAnchor="middle">Pool cage</text>
        <line x1="160" y1="300" x2="160" y2="230" stroke="#dbe7f3" strokeWidth="2" />
        <circle cx="160" cy="210" r="26" fill="none" stroke="#dbe7f3" />
        <line x1="230" y1="150" x2="230" y2="90" stroke="#dbe7f3" strokeWidth="2" />
        <circle cx="230" cy="74" r="22" fill="none" stroke="#dbe7f3" />
        <text x="140" y="330" fill="#dbe7f3" fontSize="13">Two palms</text>
        <text x="70" y="430" fill="#dbe7f3" fontSize="13">Example only. If your lawn is St. Augustine, cut height matters more than the plan, because it's often kept tall.</text>
      </Frame>
    </Slot>
  );
}

function PlanRect({ x, y, w, h, label, sub }: { x: number; y: number; w: number; h: number; label: string; sub: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill="none" stroke="#ffffff" />
      <text x={x + 12} y={y + 22} fill="#ffffff" fontSize="14">{label}</text>
      <text x={x + 12} y={y + 40} fill="#dbe7f3" fontSize="12" fontFamily="ui-monospace, monospace">{sub}</text>
    </g>
  );
}

export function AcreSquares() {
  const sizes = [0.125, 0.25, 0.5, 0.75, 1];
  return (
    <Slot id="dia-acres">
      <Frame
        title="Squares comparing lawn sizes from an eighth of an acre to one acre"
        desc="Five squares whose sides scale with the square root of the area, labeled in acres and square feet. The example takes a house, a drive, and beds out of a quarter-acre lot so you can see what's left to mow."
        viewBox="0 0 760 420"
      >
        {sizes.map((acres, index) => {
          const side = Math.round(160 * Math.sqrt(acres));
          const x = 30 + index * 146;
          const y = 200 - side;
          return (
            <g key={acres}>
              <rect x={x} y={y} width={side} height={side} fill="none" stroke="#ffffff" />
              <text x={x} y={230} fill="#ffffff" fontSize="13" fontFamily="ui-monospace, monospace">
                {acres} ac
              </text>
              <text x={x} y={248} fill="#dbe7f3" fontSize="12" fontFamily="ui-monospace, monospace">
                {formatAcres(acres).match(/\((.*)\)/)?.[1]}
              </text>
            </g>
          );
        })}
        <text x="30" y="300" fill="#ffffff" fontSize="15">Example: your lot minus the house, the drive, and the beds</text>
        <text x="30" y="328" fill="#dbe7f3" fontSize="14">0.25 acre lot, 10,890 sq ft</text>
        <text x="30" y="350" fill="#dbe7f3" fontSize="14">− house 1,200 sq ft − drive 600 sq ft − beds 400 sq ft</text>
        <text x="30" y="376" fill="#ffffff" fontSize="14">= about 8,690 sq ft of lawn in this example</text>
      </Frame>
    </Slot>
  );
}

const NAV_PANELS = [
  {
    id: "wire",
    title: "Boundary wire",
    needs: "A buried or pegged wire",
    weakens: "A cut or moved wire",
  },
  {
    id: "antenna",
    title: "Antenna RTK",
    needs: "Antenna with open sky",
    weakens: "Trees, walls, and the mower",
  },
  {
    id: "network",
    title: "Network RTK",
    needs: "Cell service, or Wi-Fi",
    weakens: "Poor cell, or canopy",
  },
  {
    id: "lidar",
    title: "LiDAR or camera",
    needs: "No outdoor hardware",
    weakens: "Leaves, gaps, or heat",
  },
] as const;

export function NavFour({ highlight = [] }: { highlight?: string[] }) {
  return (
    <Slot id="dia-nav-four">
      <Frame
        title="Four plan views of one yard showing boundary wire, antenna RTK, network RTK, and LiDAR or camera navigation"
        desc="The same yard four ways. Under each plan is what that navigation needs, and what weakens it. A highlighted panel shows the navigation that mower uses, when a highlight is set."
        viewBox="0 0 760 460"
      >
        {NAV_PANELS.map((panel, index) => {
          const x = 20 + index * 185;
          const on = highlight.includes(panel.id);
          return (
            <g key={panel.id}>
              <rect x={x} y={20} width={170} height={400} fill="none" stroke={on ? "#e2186f" : "#dbe7f3"} />
              <text x={x + 10} y={44} fill="#ffffff" fontSize="14">{panel.title}</text>
              {on ? <text x={x + 10} y={64} fill="#ffffff" fontSize="12">This model</text> : null}
              <rect x={x + 20} y={90} width={130} height={90} fill="none" stroke="#ffffff" />
              <text x={x + 85} y={140} fill="#dbe7f3" fontSize="12" textAnchor="middle">Yard</text>
              <text x={x + 10} y={210} fill="#ffffff" fontSize="12">Needs</text>
              <text x={x + 10} y={232} fill="#dbe7f3" fontSize="12">{panel.needs}</text>
              <text x={x + 10} y={300} fill="#ffffff" fontSize="12">Weakens when</text>
              <text x={x + 10} y={322} fill="#dbe7f3" fontSize="12">{panel.weakens}</text>
            </g>
          );
        })}
      </Frame>
    </Slot>
  );
}

export function AntennaDiagram() {
  return (
    <Slot id="dia-antenna">
      <Frame
        title="Diagram of good and bad places to mount an RTK antenna"
        desc="A roofline and an open pole keep the sky view. Under the eaves and against a wall block it. Husqvarna's EPOS guidance asks for at least 6.5 feet of height and 135 degrees of open sky for its reference station."
        viewBox="0 0 760 420"
      >
        <AntennaCase x={20} label="Roofline" note="Open sky" ok />
        <AntennaCase x={200} label="Open pole" note="Open sky" ok />
        <AntennaCase x={380} label="Under eaves" note="Poor sky view" ok={false} />
        <AntennaCase x={560} label="Against a wall" note="Poor sky view" ok={false} />
        <text x="20" y="300" fill="#ffffff" fontSize="14">Sky-view cone: 135° of open sky above the antenna</text>
        <text x="20" y="330" fill="#dbe7f3" fontSize="13">Husqvarna EPOS says: mount the reference station at least 6.5 ft (2 m) up,</text>
        <text x="20" y="350" fill="#dbe7f3" fontSize="13">with at least 135° of sky. That's Husqvarna's rule for its own station, not every brand's.</text>
        <text x="20" y="380" fill="#dbe7f3" fontSize="13">The mower also needs sky along its path. Raising only the antenna doesn't fix canopy over your lawn.</text>
      </Frame>
    </Slot>
  );
}

function AntennaCase({ x, label, note, ok }: { x: number; label: string; note: string; ok: boolean }) {
  return (
    <g>
      <rect x={x} y={30} width={160} height={200} fill="none" stroke={ok ? "#dbe7f3" : "#f2c230"} />
      <path d={`M${x + 40} 180 H${x + 120} V150 H${x + 70} V110`} fill="none" stroke="#ffffff" />
      <rect x={x + 74} y={96} width={16} height={10} fill="#ffffff" />
      <text x={x + 10} y={220} fill="#ffffff" fontSize="13">{label}</text>
      <text x={x + 10} y={48} fill={ok ? "#dbe7f3" : "#f2c230"} fontSize="12">{ok ? "Clear" : "Blocked"} · {note}</text>
    </g>
  );
}

export function MethodDiagram() {
  const steps = [
    "The maker's US spec page and the manual",
    "Owner threads and independent reviews, with a link",
    "The amazon.com page for that exact model",
    "Lined up by the lawn size and slope the maker rates",
    "Dated, and read again at least every 90 days",
  ];
  return (
    <Slot id="dia-method">
      <figure
        aria-label="How a pick is researched and dated"
        className="my-6 rounded-xl border p-5 sm:p-7"
        style={{ background: "#eef6e8", borderColor: "#b8d4a8", color: "#1d2b1f" }}
      >
        <ol className="m-0 grid list-none gap-3 p-0">
          {steps.map((step, index) => (
            <li
              key={step}
              className="flex items-start gap-3 rounded-lg border bg-white px-4 py-3 leading-snug"
              style={{ borderColor: "#cfe2c3", fontSize: "1.0625rem" }}
            >
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-semibold"
                style={{ background: "#2f6b34", color: "#ffffff", fontSize: "1rem" }}
              >
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </figure>
    </Slot>
  );
}

export function AffiliateDiagram() {
  const steps = ["You click See on Amazon", "The link opens amazon.com", "A qualifying purchase may pay this site a commission", "Your price is the same"];
  return (
    <Slot id="dia-affiliate">
      <Frame
        title="How an Amazon paid link works for you"
        desc="You click a See on Amazon link, and it opens amazon.com. A qualifying purchase may pay this site a commission. The price you pay stays the same."
        viewBox="0 0 720 360"
      >
        {steps.map((step, index) => (
          <g key={step}>
            <rect x={40} y={24 + index * 74} width={640} height={56} fill="none" stroke="#ffffff" />
            <text x={60} y={58 + index * 74} fill="#ffffff" fontSize="16">{step}</text>
          </g>
        ))}
      </Frame>
    </Slot>
  );
}

export function CanopyDiagram() {
  return (
    <Slot id="dia-canopy">
      <Frame
        title="Plan showing where tree canopy weakens satellite positioning and how other navigation takes over"
        desc="Example plan, not a survey. The canopy circle is where a satellite fix gets weak. A mower in the open is labeled satellite or network RTK. A mower under the canopy is labeled LiDAR or camera. Your mower needs sky along its path, not only at an antenna."
        viewBox="0 0 720 460"
      >
        <rect x="60" y="40" width="600" height="340" fill="none" stroke="#ffffff" />
        <text x="76" y="68" fill="#ffffff" fontSize="16">Example lawn</text>
        <circle cx="430" cy="210" r="110" fill="#1d4f80" stroke="#dbe7f3" />
        <text x="430" y="200" fill="#ffffff" fontSize="14" textAnchor="middle">Canopy</text>
        <text x="430" y="222" fill="#dbe7f3" fontSize="12" textAnchor="middle">Weak satellite fix</text>
        <rect x="120" y="160" width="36" height="22" fill="none" stroke="#f2c230" />
        <text x="168" y="176" fill="#f2c230" fontSize="13">Open sky: RTK</text>
        <rect x="400" y="250" width="36" height="22" fill="none" stroke="#ffffff" />
        <text x="360" y="300" fill="#ffffff" fontSize="13" textAnchor="middle">Under canopy: LiDAR or camera</text>
        <text x="70" y="420" fill="#dbe7f3" fontSize="13">Your mower needs sky along its whole path, not only up at the antenna.</text>
      </Frame>
    </Slot>
  );
}

export function ZonesMap() {
  return (
    <Slot id="dia-zones">
      <Frame
        title="Map of a yard with front and back zones, a transit path and a no-go bed"
        desc="Example map, not a brand app and not a survey. A front zone and a back zone are joined by a side passage. A flower bed is marked no-go. A bed past a fence is a zone you'd carry the mower to."
        viewBox="0 0 720 460"
      >
        <rect x="70" y="40" width="250" height="160" fill="none" stroke="#ffffff" />
        <text x="84" y="68" fill="#ffffff" fontSize="15">Front zone</text>
        <rect x="400" y="220" width="250" height="160" fill="none" stroke="#ffffff" />
        <text x="414" y="248" fill="#ffffff" fontSize="15">Back zone</text>
        <rect x="250" y="150" width="160" height="90" fill="none" stroke="#dbe7f3" strokeDasharray="5 4" />
        <text x="330" y="200" fill="#dbe7f3" fontSize="13" textAnchor="middle">Side passage</text>
        <rect x="110" y="120" width="70" height="40" fill="none" stroke="#e2186f" />
        <text x="145" y="144" fill="#e2186f" fontSize="12" textAnchor="middle">No-go bed</text>
        <rect x="560" y="50" width="90" height="60" fill="none" stroke="#f2c230" />
        <text x="605" y="76" fill="#f2c230" fontSize="12" textAnchor="middle">Carry zone</text>
        <text x="605" y="92" fill="#f2c230" fontSize="11" textAnchor="middle">past a fence</text>
        <text x="70" y="430" fill="#dbe7f3" fontSize="13">Example only. If your mower can't use the passage, your yard splits into two maps, or you carry it.</text>
      </Frame>
    </Slot>
  );
}

export function PassageDiagram() {
  return (
    <Slot id="dia-passage-width">
      <Frame
        title="Gauge comparing mower widths with gate and side-passage widths"
        desc="Dimension lines only. The Navimow X430 body width is 24 inches. The LUBA 3 AWD 3000 narrowest gap is 27.6 inches. The LiDAX Ultra 2000 page says 23.6 inch paths. Example gates at 36 and 32 inches aren't product specs."
        viewBox="0 0 720 420"
      >
        <text x="40" y="40" fill="#ffffff" fontSize="16">Published limits, then two example gates</text>
        {[
          ["LiDAX Ultra 2000 path", 23.6, 236],
          ["X430 body width", 24, 240],
          ["LUBA 3 gap", 27.6, 276],
          ["Wider example gate", 32, 320],
          ["Wider example gate, 36 in", 36, 360],
        ].map(([label, inches, width], index) => (
          <g key={index}>
            <text x="40" y={80 + index * 60} fill="#dbe7f3" fontSize="14">{label} · {inches} in</text>
            <line x1="40" y1={96 + index * 60} x2={40 + Number(width)} y2={96 + index * 60} stroke="#ffffff" strokeWidth="8" />
          </g>
        ))}
        <text x="40" y="390" fill="#dbe7f3" fontSize="13">Measure your own passage. The bars are the published figures, not a promise it'll fit your gate.</text>
      </Frame>
    </Slot>
  );
}

export function SeasonsDiagram() {
  const steps = [
    "Spring: put the dock back and look over the map",
    "Summer: it mows on the schedule you set",
    "Fall: leaves can hide the edges and stop a camera",
    "Winter: use the storage temperature in that model's manual",
  ];
  return (
    <Slot id="dia-seasons">
      <Frame
        title="A year with a robot mower, from spring setup to winter storage"
        desc="Four seasons of the year. Winter points you to the storage temperature in that model's manual. No charge level is shown."
        viewBox="0 0 720 400"
      >
        {steps.map((step, index) => (
          <g key={step}>
            <rect x="40" y={30 + index * 80} width="640" height="60" fill="none" stroke="#ffffff" />
            <text x="56" y={66 + index * 80} fill="#ffffff" fontSize="16">{step}</text>
          </g>
        ))}
      </Frame>
    </Slot>
  );
}

export function SpecPlate({ familyId, slotId, modelName }: { familyId: string; slotId: string; modelName: string }) {
  const family = getFamily(familyId);
  const variant = family.variants.find((item) => item.model === modelName) || primaryVariant(family);
  const acres = Number(variant.ladder?.ratedAreaAcres?.value);
  const slope = Number(variant.ladder?.maxSlopePercent?.value);
  const published = variant.ladder?.maxSlopeDegrees?.value;
  const deg = typeof published === "number" ? formatDegrees(published) : formatDegrees(degreesFromPercent(slope));
  const width = variant.specs?.cuttingWidth?.value;
  const height = variant.specs?.cuttingHeight?.value;
  const x = 80 + (Number.isFinite(acres) ? (acres / 2) * 520 : 0);
  return (
    <Slot id={slotId}>
      <Frame
        title={slotId === "plate-x4" ? "Spec diagram for the Segway Navimow X4 series" : "Spec diagram for the Mammotion LUBA 3 AWD series"}
        desc={`${modelName} is rated for ${formatAcres(acres)}. The slope is ${slope}% (${deg}). Navigation: ${navigationLabel(family.navigation)}. Cutting width is ${width ?? "not published"} inches. Cutting height is ${height ?? "not published"} inches.`}
        viewBox="0 0 720 420"
      >
        <text x="24" y="36" fill="#ffffff" fontSize="18">{family.family}</text>
        <text x="24" y="58" fill="#dbe7f3" fontSize="14">{modelName}</text>
        <text x="24" y="100" fill="#ffffff" fontSize="13">Rated area, 0 to 2 acres</text>
        <line x1="80" y1="140" x2="600" y2="140" stroke="#dbe7f3" />
        <text x="80" y="160" fill="#dbe7f3" fontSize="12">0</text>
        <text x="580" y="160" fill="#dbe7f3" fontSize="12">2 ac</text>
        <rect x={x - 5} y={132} width={10} height={16} fill="#e2186f" />
        <text x={x + 12} y={128} fill="#ffffff" fontSize="13">{formatAcres(acres, false)}</text>
        <polygon points="80,280 180,280 180,200" fill="none" stroke="#ffffff" />
        <text x="190" y="230" fill="#ffffff" fontSize="16">{slope}% ({deg})</text>
        <text x="190" y="252" fill="#dbe7f3" fontSize="13">Rise {((slope / 100) * 10).toFixed(1).replace(".0", "")} ft over 10 ft</text>
        <text x="24" y="320" fill="#ffffff" fontSize="14">Navigation: {navigationLabel(family.navigation)}</text>
        <text x="24" y="348" fill="#dbe7f3" fontSize="14">Cut width: {width ? `${width} in` : "Not published"}</text>
        <text x="280" y="348" fill="#dbe7f3" fontSize="14">Cut height: {height ? `${height} in` : "Not published"}</text>
        <text x="24" y="390" fill="#dbe7f3" fontSize="12">No product drawing. These are the published specs for {modelName}.</text>
      </Frame>
    </Slot>
  );
}
