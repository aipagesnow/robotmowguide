"use client";

import { useState } from "react";
import Link from "next/link";

function track(step: string) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "tool_use", { tool: "mower-finder", step });
}

export function FinderEmbed() {
  const [area, setArea] = useState("0.5");
  const [slope, setSlope] = useState("20");

  return (
    <section className="sheet p-4" aria-label="Start the mower finder">
      <h2 className="mt-0">Two questions, then the full list</h2>
      <p className="measure">
        How much grass do you mow, and how steep is the worst bank in your yard? The full finder also asks about trees, zones, and
        wire.
      </p>
      <form
        className="grid gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          track("result");
        }}
      >
        <label className="grid gap-1">
          <span className="label">Lawn area in acres</span>
          <input
            className="dim min-h-11 border border-rule bg-paper px-2"
            value={area}
            inputMode="decimal"
            onChange={(event) => {
              setArea(event.target.value);
              track("area");
            }}
          />
        </label>
        <label className="grid gap-1">
          <span className="label">Steepest slope in percent</span>
          <input
            className="dim min-h-11 border border-rule bg-paper px-2"
            value={slope}
            inputMode="decimal"
            onChange={(event) => {
              setSlope(event.target.value);
              track("slope");
            }}
          />
        </label>
      </form>
      <p className="mb-0" aria-live="polite">
        You're looking at {area || "0"} acres and a slope of {slope || "0"}%.{" "}
        <Link href="/tools/mower-finder#results">See full results</Link>
      </p>
    </section>
  );
}
