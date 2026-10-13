import raw from "@/content/costs.json";

export type CostRow = {
  family: string;
  item: string;
  value: string | number | null;
  unit: string | null;
  src: string[];
  checked: string;
  confidence: string;
  note?: string;
};

type CostFile = { updated: string; rows: CostRow[] };

const data = raw as CostFile;

export const costRows = data.rows;
export const costsUpdated = data.updated;

export function rowsFor(family: string): CostRow[] {
  return costRows.filter((row) => row.family === family);
}

export function moneyText(row: CostRow): string {
  if (row.value === null || row.value === "") return "Not published";
  if (typeof row.value === "number") {
    const amount = Number.isInteger(row.value) ? String(row.value) : row.value.toFixed(2);
    if (row.unit === "usd/year") return `$${amount} per year`;
    if (row.unit?.startsWith("usd")) return `$${amount}`;
    return `$${amount}`;
  }
  return String(row.value);
}

export function isYearly(row: CostRow): boolean {
  return typeof row.value === "number" && row.unit === "usd/year" && row.confidence.startsWith("official");
}
