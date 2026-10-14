import { degreesFromPercent, formatAcres, formatDegrees, realisticAcres, risePer10Ft } from "@/lib/format";

export function publishedSlope(percent: number, degrees?: number): string {
  if (typeof degrees === "number") return `${percent}% (${formatDegrees(degrees)})`;
  return `${percent}% (degrees not published)`;
}

export function slopeWithRise(percent: number, degrees?: number): string {
  return `${publishedSlope(percent, degrees)}, a rise of ${risePer10Ft(percent)}`;
}

export function interiorOrBoundary(note?: string): string {
  if (note && /boundary/i.test(note)) return note;
  return "";
}

export function realisticLine(rated: number): string {
  return `Comfortable for about ${formatAcres(realisticAcres(rated), false)} with trees or two zones.`;
}

export function computedDegrees(percent: number): string {
  return formatDegrees(degreesFromPercent(percent));
}

export function specText(item?: { value?: string | number | null; unit?: string } | null): string {
  if (!item || item.value === undefined || item.value === null || item.value === "") return "Not published";
  if (!item.unit) return String(item.value);
  return `${item.value} ${item.unit}`;
}

export { formatAcres };
