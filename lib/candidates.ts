import { amazonHref } from "@/lib/amazon";
import type { Candidate } from "@/lib/match";
import {
  families,
  lineKind,
  navigationLabel,
  pickAnchor,
  reviewHref,
  type Sourced,
} from "@/lib/products";

function inches(item?: Sourced): number | null {
  if (!item || typeof item.value !== "number") return null;
  if (item.unit === "ft") return item.value * 12;
  return item.value;
}

function passageInches(specs: Record<string, Sourced> | undefined): number | null {
  if (!specs) return null;
  const values = [inches(specs.narrowestGap), inches(specs.bodyWidth), inches(specs.narrowestPath)].filter(
    (value): value is number => typeof value === "number",
  );
  if (!values.length) return null;
  return Math.max(...values);
}

function boundarySlope(note?: string): number | undefined {
  if (!note) return undefined;
  const match = note.match(/(\d+(?:\.\d+)?)\s*%\s*at (?:the )?boundary/i);
  if (!match) return undefined;
  return Number(match[1]);
}

function shortName(model: string): string {
  return model.replace(/\s*\([^)]*\)$/, "");
}

export function currentCandidates(): Candidate[] {
  const rows: Candidate[] = [];
  for (const family of families) {
    if (family.status !== "current") continue;
    for (const variant of family.variants) {
      const status = variant.status || family.status;
      if (status === "superseded" || status === "discontinued" || status === "legacy") continue;
      const acres = variant.ladder?.ratedAreaAcres?.value;
      const slope = variant.ladder?.maxSlopePercent?.value;
      if (typeof acres !== "number" || typeof slope !== "number") continue;
      const degrees = variant.ladder?.maxSlopeDegrees?.value;
      const note = variant.ladder?.maxSlopePercent?.note;
      rows.push({
        id: `${family.id}:${variant.model}`,
        model: variant.model,
        shortName: shortName(variant.model),
        familyId: family.id,
        acres,
        slope,
        degrees: typeof degrees === "number" ? degrees : undefined,
        boundarySlope: boundarySlope(note),
        navigation: family.navigation,
        navigationLabel: navigationLabel(family.navigation),
        line: lineKind(family.boundary),
        passageInches: passageInches(variant.specs),
        asin: variant.asin,
        amazon: amazonHref(variant.asin, status),
        status,
        href: reviewHref(family.id) || pickAnchor(variant.model),
        slug: family.slug,
      });
    }
  }
  return rows.sort((a, b) => a.acres - b.acres || a.slope - b.slope || a.model.localeCompare(b.model));
}
