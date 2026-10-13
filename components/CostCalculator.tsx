"use client";

import { useMemo, useState } from "react";
import { isYearly, moneyText, type CostRow } from "@/lib/costs";

const FAMILIES = [
  "segway-navimow-x4",
  "mammotion-luba-3-awd",
  "mammotion-luba-mini-2-awd",
  "dreame-a3-awd-pro",
  "mova-lidax-ultra",
  "worx-landroid-vision-cloud",
  "husqvarna-automower-iq",
  "segway-navimow-i2-awd",
  "roborock-rockneo-q110h",
] as const;

const LABELS: Record<string, string> = {
  "segway-navimow-x4": "Navimow X4",
  "mammotion-luba-3-awd": "LUBA 3 AWD",
  "mammotion-luba-mini-2-awd": "LUBA mini 2 AWD",
  "dreame-a3-awd-pro": "Dreame A3 AWD Pro",
  "mova-lidax-ultra": "MOVA LiDAX Ultra",
  "worx-landroid-vision-cloud": "Worx Landroid Vision Cloud",
  "husqvarna-automower-iq": "Automower iQ",
  "segway-navimow-i2-awd": "Navimow i series",
  "roborock-rockneo-q110h": "RockNeo Q110H",
};

export function CostCalculator({ rows }: { rows: CostRow[] }) {
  const [family, setFamily] = useState<string>(FAMILIES[0]);
  const [years, setYears] = useState(5);
  const [months, setMonths] = useState(8);

  const mine = useMemo(() => rows.filter((row) => row.family === family), [rows, family]);
  const yearly = mine.filter(isYearly);
  const yearlySum = yearly.reduce((sum, row) => sum + Number(row.value), 0);

  return (
    <form className="sheet grid gap-4 p-4" onSubmit={(event) => event.preventDefault()}>
      <div className="flex flex-wrap gap-3">
        <label className="grid gap-1">
          <span className="label">Family</span>
          <select className="min-h-11 border border-rule bg-paper px-2" value={family} onChange={(event) => setFamily(event.target.value)}>
            {FAMILIES.map((id) => (
              <option key={id} value={id}>
                {LABELS[id]}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1">
          <span className="label">Years</span>
          <select className="min-h-11 border border-rule bg-paper px-2" value={years} onChange={(event) => setYears(Number(event.target.value))}>
            {[1, 2, 3, 4, 5].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1">
          <span className="label">Mowing season, months</span>
          <input
            className="dim min-h-11 border border-rule bg-paper px-2"
            inputMode="numeric"
            value={months}
            onChange={(event) => setMonths(Number(event.target.value) || 0)}
          />
        </label>
      </div>
      <p className="measure m-0">
        Season length does not change the dollars. No published line on this page is priced per month, and
        electricity is left out because battery watt-hours and a standby figure are not both published.
      </p>
      <div aria-live="polite" className="grid gap-2">
        <ul className="grid gap-2 pl-5">
          {mine.map((row) => (
            <li key={row.item}>
              {row.item}: {moneyText(row)}
              {row.confidence.startsWith("official") ? "" : " (as reported; not in the yearly sum)"}
            </li>
          ))}
        </ul>
        <p className="measure m-0">
          {yearly.length
            ? `If the published yearly fee applied in every one of the ${years} years, ${LABELS[family]} would be $${yearlySum.toFixed(2)} a year, or $${(yearlySum * years).toFixed(2)} over that span. A free period is a separate line and is not subtracted, because it is not the same length on every model. The sum skips one-time accessories and any line that is Not published or only as reported. Blades are Not published, so this is not a full five-year cost.`
            : `No official yearly price is published for ${LABELS[family]}. The total stays Not published.`}
        </p>
      </div>
    </form>
  );
}
