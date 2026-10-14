"use client";

import { useMemo, useState } from "react";
import { degreesFromPercent, formatDegrees, risePer10Ft } from "@/lib/format";
import { percentFromDegrees, percentFromRise, type Candidate } from "@/lib/match";

function track() {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "tool_use", { tool: "slope-converter", step: "convert" });
}

export function SlopeConverter({ candidates }: { candidates: Candidate[] }) {
  const [value, setValue] = useState("40");
  const [unit, setUnit] = useState<"percent" | "degrees" | "rise">("percent");
  const [atEdge, setAtEdge] = useState(false);

  const result = useMemo(() => {
    const raw = Number(value);
    if (!Number.isFinite(raw) || raw < 0) return null;
    const percent = unit === "degrees" ? percentFromDegrees(raw) : unit === "rise" ? percentFromRise(raw) : raw;
    return {
      percent,
      degrees: degreesFromPercent(percent),
      rise: risePer10Ft(percent),
    };
  }, [unit, value]);

  return (
    <div className="grid gap-4">
      <form
        className="sheet grid gap-3 p-4"
        onSubmit={(event) => {
          event.preventDefault();
          track();
        }}
      >
        <label className="grid gap-1">
          <span className="label">Slope you measured</span>
          <input
            className="dim min-h-11 border border-rule bg-paper px-2"
            value={value}
            inputMode="decimal"
            onChange={(event) => setValue(event.target.value)}
          />
        </label>
        <label className="grid gap-1">
          <span className="label">Unit</span>
          <select
            className="min-h-11 border border-rule bg-sheet px-2"
            value={unit}
            onChange={(event) => setUnit(event.target.value as "percent" | "degrees" | "rise")}
          >
            <option value="percent">percent</option>
            <option value="degrees">degrees</option>
            <option value="rise">feet of rise over 10 ft</option>
          </select>
        </label>
        <label className="flex min-h-11 items-center gap-2">
          <input type="checkbox" checked={atEdge} onChange={(event) => setAtEdge(event.target.checked)} />
          This measurement is at the edge, not in the middle of the lawn
        </label>
        <button className="cta w-fit" type="submit">
          Convert
        </button>
      </form>
      <div aria-live="polite" className="sheet p-4">
        {result ? (
          <>
            <p className="m-0 dim">
              {result.percent.toFixed(1)}% · {formatDegrees(result.degrees)} · {result.rise}
            </p>
            <p className="measure">
              The degrees and the rise come from the percent you entered. Rise is 10 ft times that percent, divided by
              100. Degrees are the arctangent of the percent divided by 100.
            </p>
            <ul className="grid gap-2 pl-5">
              {candidates.map((candidate) => {
                const interiorClear = candidate.slope + 1e-9 >= result.percent;
                const boundary =
                  typeof candidate.boundarySlope === "number" ? candidate.boundarySlope : undefined;
                const boundaryClear = boundary === undefined ? null : boundary + 1e-9 >= result.percent;
                const edgeFlag = atEdge && boundary !== undefined && boundary + 1e-9 < result.percent;
                const separated = boundary !== undefined;
                return (
                  <li key={candidate.id}>
                    {candidate.shortName}: published maximum {candidate.slope}%
                    {typeof candidate.degrees === "number" ? ` (${formatDegrees(candidate.degrees)} published)` : " (degrees aren't published)"}
                    , {risePer10Ft(candidate.slope)}.{" "}
                    {separated ? "There's a separate edge figure, so this maximum is for the middle of the lawn. " : ""}
                    {interiorClear ? "That published maximum covers your slope." : "That published maximum is lower than your slope."}{" "}
                    {boundary === undefined
                      ? "No separate edge figure is published."
                      : `The edge is ${boundary}%, ${risePer10Ft(boundary)}, and degrees aren't published. ${
                          boundaryClear ? "That edge figure covers your slope." : "That edge figure is lower than your slope."
                        }`}
                    {edgeFlag ? " Your bank is at the edge, and that edge figure is lower, so we'd plan on the lower number." : ""}
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <p className="m-0">Enter a slope of zero or higher.</p>
        )}
      </div>
    </div>
  );
}
