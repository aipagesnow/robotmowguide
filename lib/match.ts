export type LineKind = "wire-free" | "boundary-wire" | "either";

export type Candidate = {
  id: string;
  model: string;
  shortName: string;
  familyId: string;
  acres: number;
  slope: number;
  degrees?: number;
  boundarySlope?: number;
  navigation: string[];
  navigationLabel: string;
  line: LineKind;
  passageInches: number | null;
  asin: string | null;
  amazon: string | null;
  status: string;
  href?: string;
  slug: string;
};

export type FinderInput = {
  lawnAcres: number;
  slopePercent: number;
  trees: "open" | "some" | "heavy";
  zones: "none" | "passage" | "separate";
  passageInches?: number;
  slopeAtEdge: boolean;
  wire: "wire-free" | "either";
};

export type Match = {
  candidate: Candidate;
  why: string;
  watch: string[];
};

export type FinderResult = {
  matches: Match[];
  nothing: string | null;
};

function ledBySight(candidate: Candidate): boolean {
  return candidate.navigation.some((key) => key === "lidar" || key === "vision" || key === "lidar-assist");
}

function rtkOnly(candidate: Candidate): boolean {
  return !ledBySight(candidate);
}

export function matchMowers(candidates: Candidate[], input: FinderInput): FinderResult {
  const lawn = input.lawnAcres;
  if (!Number.isFinite(lawn) || lawn <= 0 || !Number.isFinite(input.slopePercent) || input.slopePercent < 0) {
    return {
      matches: [],
      nothing: "Enter a lawn area above zero and a slope of zero or more.",
    };
  }
  const multiple = input.zones !== "none";
  const factor = input.trees === "heavy" || multiple ? 1.25 : 1;
  const needed = lawn * factor;
  const wireFreeOnly = input.wire === "wire-free";
  const passage = input.zones === "passage" ? input.passageInches : undefined;

  const areaOk = candidates.filter((item) => item.acres + 1e-9 >= needed);
  const slopeOk = areaOk.filter((item) => item.slope + 1e-9 >= input.slopePercent);
  const wireOk = slopeOk.filter((item) => (wireFreeOnly ? item.line !== "boundary-wire" : true));
  const fit = wireOk.filter((item) => {
    if (passage === undefined || !Number.isFinite(passage)) return true;
    if (item.passageInches === null) return true;
    return item.passageInches <= passage + 1e-9;
  });

  const ranked = [...fit].sort((a, b) => {
    if (input.trees === "heavy") {
      const aSight = ledBySight(a) ? 0 : 1;
      const bSight = ledBySight(b) ? 0 : 1;
      if (aSight !== bSight) return aSight - bSight;
    }
    return a.acres - b.acres || b.slope - a.slope || a.model.localeCompare(b.model);
  });

  const matches: Match[] = ranked.slice(0, 3).map((candidate) => {
    const watch: string[] = [];
    if (input.trees === "heavy" && rtkOnly(candidate)) {
      watch.push("What to watch: satellite fix under canopy. This model is not LiDAR or vision-led.");
    }
    if (
      input.slopeAtEdge &&
      typeof candidate.boundarySlope === "number" &&
      candidate.boundarySlope + 1e-9 < input.slopePercent
    ) {
      watch.push(
        `What to watch: the published boundary figure is ${candidate.boundarySlope}%, which is lower than this bank. The interior figure is ${candidate.slope}%.`,
      );
    }
    if (input.zones === "passage" && candidate.passageInches === null) {
      watch.push("What to watch: no body width or minimum gap is published. Check the manual before you trust a side passage.");
    }
    if (input.zones === "separate") {
      watch.push("What to watch: the zones are not connected. Check whether this model keeps two maps, and whether each map needs its own dock.");
    }
    const areaWords =
      factor === 1.25
        ? `Rated area ${candidate.acres} acres covers the ${needed.toFixed(2)} acres this yard needs with trees or two zones.`
        : `Rated area ${candidate.acres} acres covers this ${lawn} acre lawn at 1.0×, which is the open single-lawn case.`;
    const slopeWords =
      typeof candidate.boundarySlope === "number"
        ? `Published interior slope ${candidate.slope}% is at least the ${input.slopePercent}% you entered, and the note also prints a boundary figure of ${candidate.boundarySlope}%.`
        : `Published maximum slope ${candidate.slope}% is at least the ${input.slopePercent}% you entered.`;
    return {
      candidate,
      why: `${areaWords} ${slopeWords} Navigation: ${candidate.navigationLabel}.`,
      watch,
    };
  });

  if (matches.length) return { matches, nothing: null };

  const largest = candidates.reduce((max, item) => Math.max(max, item.acres), 0);
  const steepest = candidates.reduce((max, item) => Math.max(max, item.slope), 0);
  if (needed > largest + 1e-9) {
    return {
      matches: [],
      nothing: `Nothing fits. The list tops out at ${largest} rated acres, and this yard needs ${needed.toFixed(2)} under the rule in use. Over about 2 acres, consider two mowers or a commercial unit.`,
    };
  }
  if (!areaOk.length) {
    return {
      matches: [],
      nothing: "Nothing fits. No current model is rated for this lawn under the area rule.",
    };
  }
  if (!slopeOk.length) {
    return {
      matches: [],
      nothing: `Nothing fits. No current model publishes a maximum slope of at least ${input.slopePercent}%. The highest published maximum on the list is ${steepest}%.`,
    };
  }
  if (!wireOk.length) {
    return {
      matches: [],
      nothing: "Nothing fits. The models that clear the area and the slope need a boundary wire, and this check is wire-free only.",
    };
  }
  return {
    matches: [],
    nothing:
      "Nothing fits. Every current model that cleared the area, the slope, and the wire check publishes a body width or gap wider than this passage.",
  };
}

export const SLOPE_TABLE_PERCENTS = [10, 15, 20, 25, 30, 35, 45, 50, 60, 70, 80, 84, 100];

export function percentFromDegrees(degrees: number): number {
  return Math.tan((degrees * Math.PI) / 180) * 100;
}

export function percentFromRise(feetOver10: number): number {
  return (feetOver10 / 10) * 100;
}
