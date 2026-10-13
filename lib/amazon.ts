const TAG = process.env.AMAZON_ASSOCIATE_TAG;

if (process.env.VERCEL_ENV === "production" && !TAG) {
  throw new Error("AMAZON_ASSOCIATE_TAG is required for a production build");
}

export type Placement =
  | "quick_pick"
  | "verdict"
  | "pick_block"
  | "table"
  | "variant_table"
  | "vs_top"
  | "end_block"
  | "finder"
  | "inline"
  | "sticky";

export type PageType = "home" | "best" | "best_for" | "review" | "vs" | "guide" | "tool";

export function amazonHref(asin: string | null | undefined, status?: string | null): string | null {
  if (!asin || status === "discontinued") return null;
  if (!TAG) return null;
  if (!/^[A-Z0-9]{10}$/.test(asin)) return null;
  if (!/^[A-Za-z0-9-]+$/.test(TAG)) return null;
  return `https://www.amazon.com/dp/${asin}?tag=${TAG}`;
}
