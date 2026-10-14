"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AmazonCta } from "@/components/AmazonCta";
import { PaidLinks } from "@/components/Blocks";
import { matchMowers, percentFromDegrees, percentFromRise, type Candidate, type FinderInput } from "@/lib/match";
import { NO_LINK_LINE } from "@/lib/site";

function track(step: string) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "tool_use", { tool: "mower-finder", step });
}

export function MowerFinder({ candidates }: { candidates: Candidate[] }) {
  const [areaValue, setAreaValue] = useState("0.5");
  const [areaUnit, setAreaUnit] = useState<"acres" | "sqft">("acres");
  const [house, setHouse] = useState("");
  const [drive, setDrive] = useState("");
  const [beds, setBeds] = useState("");
  const [slopeValue, setSlopeValue] = useState("20");
  const [slopeUnit, setSlopeUnit] = useState<"percent" | "degrees" | "rise">("percent");
  const [trees, setTrees] = useState<FinderInput["trees"]>("some");
  const [zones, setZones] = useState<FinderInput["zones"]>("none");
  const [passage, setPassage] = useState("36");
  const [slopeAtEdge, setSlopeAtEdge] = useState(false);
  const [wire, setWire] = useState<FinderInput["wire"]>("wire-free");

  const input = useMemo(() => buildInput(areaValue, areaUnit, house, drive, beds, slopeValue, slopeUnit, trees, zones, passage, slopeAtEdge, wire), [
    areaValue,
    areaUnit,
    house,
    drive,
    beds,
    slopeValue,
    slopeUnit,
    trees,
    zones,
    passage,
    slopeAtEdge,
    wire,
  ]);

  const result = useMemo(() => (input ? matchMowers(candidates, input) : null), [candidates, input]);

  return (
    <div className="grid gap-6">
      <form
        className="sheet grid gap-4 p-4"
        onSubmit={(event) => {
          event.preventDefault();
          track("result");
        }}
      >
        <fieldset className="grid gap-2">
          <legend className="label">Lawn area</legend>
          <div className="flex flex-wrap gap-2">
            <label className="grid gap-1">
              <span className="sr-only">Area number</span>
              <input className="dim min-h-11 border border-rule bg-paper px-2" value={areaValue} inputMode="decimal" onChange={(event) => { setAreaValue(event.target.value); track("area"); }} />
            </label>
            <label className="grid gap-1">
              <span className="sr-only">Area unit</span>
              <select className="min-h-11 border border-rule bg-sheet px-2" value={areaUnit} onChange={(event) => setAreaUnit(event.target.value as "acres" | "sqft")}>
                <option value="acres">acres</option>
                <option value="sqft">sq ft</option>
              </select>
            </label>
          </div>
          <p className="m-0 text-[0.95rem]">Your lot minus the house, the drive, and the beds. Leave the three boxes blank if that number is already the grass you mow.</p>
          <div className="flex flex-wrap gap-2">
            <label className="grid gap-1 text-[0.95rem]">
              House sq ft
              <input className="dim min-h-11 border border-rule bg-paper px-2" value={house} inputMode="decimal" onChange={(event) => setHouse(event.target.value)} />
            </label>
            <label className="grid gap-1 text-[0.95rem]">
              Drive sq ft
              <input className="dim min-h-11 border border-rule bg-paper px-2" value={drive} inputMode="decimal" onChange={(event) => setDrive(event.target.value)} />
            </label>
            <label className="grid gap-1 text-[0.95rem]">
              Beds sq ft
              <input className="dim min-h-11 border border-rule bg-paper px-2" value={beds} inputMode="decimal" onChange={(event) => setBeds(event.target.value)} />
            </label>
          </div>
        </fieldset>
        <fieldset className="grid gap-2">
          <legend className="label">Steepest slope</legend>
          <div className="flex flex-wrap gap-2">
            <label className="grid gap-1">
              <span className="sr-only">Slope number</span>
              <input className="dim min-h-11 border border-rule bg-paper px-2" value={slopeValue} inputMode="decimal" onChange={(event) => { setSlopeValue(event.target.value); track("slope"); }} />
            </label>
            <label className="grid gap-1">
              <span className="sr-only">Slope unit</span>
              <select className="min-h-11 border border-rule bg-sheet px-2" value={slopeUnit} onChange={(event) => setSlopeUnit(event.target.value as "percent" | "degrees" | "rise")}>
                <option value="percent">percent</option>
                <option value="degrees">degrees</option>
                <option value="rise">rise over 10 ft, in feet</option>
              </select>
            </label>
          </div>
          <p className="m-0 text-[0.95rem]">
            <Link href="/best/robot-mower-for-hills">Slope converter</Link>
          </p>
          <label className="flex min-h-11 items-center gap-2">
            <input type="checkbox" checked={slopeAtEdge} onChange={(event) => setSlopeAtEdge(event.target.checked)} />
            This steepest spot is at an edge, not in the middle of your lawn
          </label>
        </fieldset>
        <fieldset className="grid gap-2">
          <legend className="label">Tree cover</legend>
          <select className="min-h-11 border border-rule bg-sheet px-2" value={trees} onChange={(event) => { setTrees(event.target.value as FinderInput["trees"]); track("trees"); }}>
            <option value="open">Open</option>
            <option value="some">Some</option>
            <option value="heavy">Heavy</option>
          </select>
        </fieldset>
        <fieldset className="grid gap-2">
          <legend className="label">Separate zones</legend>
          <select className="min-h-11 border border-rule bg-sheet px-2" value={zones} onChange={(event) => { setZones(event.target.value as FinderInput["zones"]); track("zones"); }}>
            <option value="none">None</option>
            <option value="passage">Connected by a passage</option>
            <option value="separate">Not connected</option>
          </select>
          {zones === "passage" ? (
            <label className="grid gap-1">
              Passage width in inches
              <input className="dim min-h-11 border border-rule bg-paper px-2" value={passage} inputMode="decimal" onChange={(event) => setPassage(event.target.value)} />
            </label>
          ) : null}
        </fieldset>
        <fieldset className="grid gap-2">
          <legend className="label">Wire</legend>
          <select className="min-h-11 border border-rule bg-sheet px-2" value={wire} onChange={(event) => { setWire(event.target.value as FinderInput["wire"]); track("wire"); }}>
            <option value="wire-free">Wire-free only</option>
            <option value="either">Happy to lay wire</option>
          </select>
        </fieldset>
        <button className="cta w-fit" type="submit">
          Update the short list
        </button>
      </form>
      <div aria-live="polite" className="grid gap-4">
        {result?.nothing ? <p className="measure">{result.nothing}</p> : null}
        {result?.matches.map((match) => (
          <article key={match.candidate.id} className="sheet p-4">
            <h3 className="mt-0">
              {match.candidate.href ? <Link href={match.candidate.href}>{match.candidate.shortName}</Link> : match.candidate.shortName}
            </h3>
            <p className="measure">{match.why}</p>
            {match.watch.map((line) => (
              <p key={line} className="measure">
                {line}
              </p>
            ))}
            <div data-cta-cluster="true" className="grid gap-2">
              <PaidLinks />
              {match.candidate.amazon ? (
                <AmazonCta
                  href={match.candidate.amazon}
                  label={`See ${match.candidate.shortName} on Amazon`}
                  ariaLabel={`See ${match.candidate.shortName} on Amazon`}
                  asin={match.candidate.asin || ""}
                  productSlug={match.candidate.slug}
                  variant={match.candidate.shortName}
                  placement="finder"
                  pageType="tool"
                />
              ) : match.candidate.asin ? null : (
                <p className="paid m-0">{NO_LINK_LINE}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function buildInput(
  areaValue: string,
  areaUnit: "acres" | "sqft",
  house: string,
  drive: string,
  beds: string,
  slopeValue: string,
  slopeUnit: "percent" | "degrees" | "rise",
  trees: FinderInput["trees"],
  zones: FinderInput["zones"],
  passage: string,
  slopeAtEdge: boolean,
  wire: FinderInput["wire"],
): FinderInput | null {
  const area = Number(areaValue);
  if (!Number.isFinite(area) || area <= 0) return null;
  const subtract = [house, drive, beds].reduce((sum, value) => sum + (Number(value) || 0), 0);
  const baseSq = areaUnit === "acres" ? area * 43560 : area;
  const lawnAcres = Math.max(baseSq - subtract, 0) / 43560;
  const slopeRaw = Number(slopeValue);
  if (!Number.isFinite(slopeRaw) || slopeRaw < 0) return null;
  const slopePercent =
    slopeUnit === "degrees" ? percentFromDegrees(slopeRaw) : slopeUnit === "rise" ? percentFromRise(slopeRaw) : slopeRaw;
  const passageInches = zones === "passage" ? Number(passage) : undefined;
  return {
    lawnAcres,
    slopePercent,
    trees,
    zones,
    passageInches: passageInches !== undefined && Number.isFinite(passageInches) ? passageInches : undefined,
    slopeAtEdge,
    wire,
  };
}
