const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  if (!year || !month || !day) return iso;
  return `${MONTHS[month - 1]} ${day}, ${year}`;
}

export function acresToSqFt(acres: number): number {
  return Math.round(acres * 43560);
}

export function formatSqFt(acres: number): string {
  return `${acresToSqFt(acres).toLocaleString("en-US")} sq ft`;
}

export function formatAcres(acres: number, withSqFt = true): string {
  const acresText = Number.isInteger(acres) ? String(acres) : String(acres);
  const unit = acres === 1 ? "acre" : "acres";
  if (!withSqFt) return `${acresText} ${unit}`;
  return `${acresText} ${unit} (${formatSqFt(acres)})`;
}

export function degreesFromPercent(percent: number): number {
  return (Math.atan(percent / 100) * 180) / Math.PI;
}

export function formatDegrees(value: number): string {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? `${rounded}°` : `${rounded.toFixed(1)}°`;
}

export function risePer10Ft(percent: number): string {
  const rise = Math.round(percent * 10) / 100;
  const text = Number.isInteger(rise) ? String(rise) : rise.toFixed(1);
  return `${text} ft over 10 ft`;
}

export function realisticAcres(rated: number): number {
  return Math.round((rated / 1.25) * 100) / 100;
}

export function formatInches(value: string | number): string {
  return `${value} in`;
}
