import raw from "@/content/products.json";

export type Sourced = {
  value: string | number;
  unit?: string;
  src: string[];
  checked: string;
  note?: string;
};

export type Variant = {
  model: string;
  ladder?: {
    ratedAreaAcres?: Sourced;
    maxSlopePercent?: Sourced;
    maxSlopeDegrees?: Sourced;
  };
  specs?: Record<string, Sourced>;
  asin: string | null;
  status?: string;
};

export type OwnerReport = {
  theme: string;
  src: string[];
  tone?: string;
  note?: string;
};

export type Family = {
  id: string;
  slug: string;
  brand: string;
  family: string;
  primaryVariant: string;
  status: string;
  statusDate: string;
  statusNote?: string;
  boundary: string;
  navigation: string[];
  variants: Variant[];
  connectivityCost?: Sourced;
  ownerReports?: OwnerReport[];
  notFor?: string[];
  supportOutlook?: string;
};

type SourceRecord = { url: string; title: string; accessed: string };

type Catalog = {
  sources: Record<string, SourceRecord>;
  products: Family[];
};

const data = raw as unknown as Catalog;

export const sources = data.sources;
export const families = data.products;

export function getFamily(id: string): Family {
  const family = families.find((item) => item.id === id);
  if (!family) throw new Error(`Missing product family ${id}`);
  return family;
}

export function modelFacts(familyId: string, model: string) {
  const family = getFamily(familyId);
  const variant = family.variants.find((item) => item.model === model);
  if (!variant?.ladder?.ratedAreaAcres || !variant.ladder.maxSlopePercent) {
    throw new Error(`Missing ladder figures for ${model}`);
  }
  const degrees = variant.ladder.maxSlopeDegrees?.value;
  return {
    family,
    variant,
    acres: Number(variant.ladder.ratedAreaAcres.value),
    slope: Number(variant.ladder.maxSlopePercent.value),
    degrees: typeof degrees === "number" ? degrees : undefined,
    specs: variant.specs || {},
  };
}

export function primaryVariant(family: Family): Variant {
  return (
    family.variants.find((variant) => variant.model === family.primaryVariant) ||
    family.variants.find((variant) => variant.model.includes(family.primaryVariant)) ||
    family.variants[0]
  );
}

export function isAmazonSource(id: string): boolean {
  const source = sources[id];
  return Boolean(source && /amazon\.com/i.test(source.url));
}

export function sourceHref(id: string): string | undefined {
  const source = sources[id];
  if (!source || isAmazonSource(id)) return undefined;
  return source.url;
}

export function sourceLabel(id: string): string {
  const source = sources[id];
  if (!source) return id;
  if (isAmazonSource(id)) return "amazon.com listing";
  return source.title;
}

export const NAV_LABEL: Record<string, string> = {
  "network-rtk": "Network RTK",
  vision: "Vision",
  tof: "Time-of-flight sensor",
  lidar: "LiDAR",
  "cloud-rtk": "Cloud RTK",
  "v-slam": "V-SLAM",
  "rtk-antenna-or-network": "Antenna or network RTK",
  "rtk-antenna": "Antenna RTK",
  "lidar-assist": "LiDAR assist",
  "boundary-wire": "Boundary wire",
  "guide-wire": "Guide wire",
  "rtk-epos": "EPOS RTK",
  "radar-or-ultrasonic": "Radar or ultrasonic",
  "wire-optional": "Boundary wire optional",
};

export function navigationLabel(keys: string[]): string {
  return keys.map((key) => NAV_LABEL[key] || key).join(", ");
}

export function wireFree(boundary: string): boolean {
  return !/boundary-wire|^wire$/i.test(boundary) && !boundary.startsWith("boundary");
}

export type LineKind = "wire-free" | "boundary-wire" | "either";

export type LadderRow = {
  id: string;
  name: string;
  acres: number;
  slope: number;
  degrees?: number;
  slopeNote?: string;
  boundary: string;
  line: LineKind;
  asin: string | null;
  status: string;
  href?: string;
  pick?: number;
};

export function lineKind(boundary: string): LineKind {
  if (/wire-free/i.test(boundary) && /or wire/i.test(boundary)) return "either";
  if (/boundary[- ]wire/i.test(boundary)) return "boundary-wire";
  return "wire-free";
}

const PICK_ANCHOR: Record<string, { anchor: string; pick: number }> = {
  "Navimow i210 AWD": { anchor: "/best#navimow-i210", pick: 1 },
  "A3 AWD Pro 2500": { anchor: "/best#dreame-a3-2500", pick: 2 },
  "LUBA 3 AWD 3000": { anchor: "/best#luba-3-3000", pick: 3 },
  "Landroid Vision Cloud WR340 (1 acre, 2WD)": { anchor: "/best#worx-wr340", pick: 4 },
  "Navimow X430": { anchor: "/best#navimow-x430", pick: 5 },
};

const REVIEW_HREF: Record<string, string> = {
  "segway-navimow-x4": "/reviews/segway-navimow-x4",
  "mammotion-luba-3-awd": "/reviews/mammotion-luba-3-awd",
  "worx-landroid-vision-cloud": "/reviews/worx-landroid-vision-cloud",
  "dreame-a3-awd-pro": "/reviews/dreame-a3-awd-pro",
};

export function reviewHref(familyId: string): string | undefined {
  return REVIEW_HREF[familyId];
}

export function pickAnchor(model: string): string | undefined {
  return PICK_ANCHOR[model]?.anchor;
}

export function ladderRows(): LadderRow[] {
  const rows: LadderRow[] = [];
  for (const family of families) {
    if (family.status !== "current") continue;
    const variant = primaryVariant(family);
    const acres = variant.ladder?.ratedAreaAcres?.value;
    const slope = variant.ladder?.maxSlopePercent?.value;
    if (typeof acres !== "number" || typeof slope !== "number") continue;
    const degrees = variant.ladder?.maxSlopeDegrees?.value;
    const pick = PICK_ANCHOR[variant.model];
    rows.push({
      id: family.id,
      name: variant.model,
      acres,
      slope,
      degrees: typeof degrees === "number" ? degrees : undefined,
      slopeNote: variant.ladder?.maxSlopePercent?.note,
      boundary: family.boundary,
      line: lineKind(family.boundary),
      asin: variant.asin,
      status: variant.status || family.status,
      href: REVIEW_HREF[family.id] || pick?.anchor,
      pick: pick?.pick,
    });
  }
  return rows.sort((a, b) => a.acres - b.acres || a.slope - b.slope || a.name.localeCompare(b.name));
}
