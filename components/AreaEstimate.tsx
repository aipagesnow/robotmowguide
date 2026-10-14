"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Row = { name: string; acres: number; href?: string };

export function AreaEstimate({ models }: { models: Row[] }) {
  const [lawn, setLawn] = useState("0.5");
  const [heavy, setHeavy] = useState(false);
  const [zones, setZones] = useState(false);

  const result = useMemo(() => {
    const acres = Number(lawn);
    if (!Number.isFinite(acres) || acres <= 0) return null;
    const factor = heavy || zones ? 1.25 : 1;
    const needed = acres * factor;
    const fits = models.filter((model) => model.acres + 1e-9 >= needed).slice(0, 5);
    return { acres, factor, needed, fits };
  }, [lawn, heavy, zones, models]);

  return (
    <form className="sheet grid gap-4 p-4" onSubmit={(event) => event.preventDefault()}>
      <p className="measure m-0">
        If your yard has heavy trees or more than one zone, turn that on to use the rule of thumb above. Husqvarna's ±20% note and
        the 420 iQ split of 0.5 acre irregular / 1 acre systematic stay separate from this estimate.
      </p>
      <div className="flex flex-wrap gap-3">
        <label className="grid gap-1">
          <span className="label">Lawn acres</span>
          <input className="dim min-h-11 border border-rule bg-paper px-2" inputMode="decimal" value={lawn} onChange={(event) => setLawn(event.target.value)} />
        </label>
        <label className="flex min-h-11 items-center gap-2">
          <input type="checkbox" checked={heavy} onChange={(event) => setHeavy(event.target.checked)} />
          Heavy trees
        </label>
        <label className="flex min-h-11 items-center gap-2">
          <input type="checkbox" checked={zones} onChange={(event) => setZones(event.target.checked)} />
          More than one zone
        </label>
      </div>
      <div aria-live="polite">
        {result ? (
          <p className="measure m-0">
            At {result.factor}×, your {result.acres} acre lawn needs a rating of at least {result.needed.toFixed(2)}{" "}
            acres.{" "}
            {result.fits.length
              ? result.fits.map((model, index) => (
                  <span key={model.name}>
                    {index > 0 ? ", " : "Ratings that cover it: "}
                    {model.href ? <Link href={model.href}>{model.name}</Link> : model.name} ({model.acres} acres)
                  </span>
                ))
              : "No current rating on this list covers that number."}
          </p>
        ) : (
          <p className="measure m-0">Enter a lawn area above zero so we can match it.</p>
        )}
      </div>
    </form>
  );
}
