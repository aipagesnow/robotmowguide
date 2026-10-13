"use client";

import { useMemo, useState } from "react";

export type PassageLimit = {
  model: string;
  inches: number;
  href: string;
  meaning: string;
};

export function PassageGauge({ limits }: { limits: PassageLimit[] }) {
  const [value, setValue] = useState("30");
  const gap = useMemo(() => {
    const raw = Number(value);
    if (!Number.isFinite(raw) || raw <= 0) return null;
    return raw;
  }, [value]);

  return (
    <form className="grid gap-3" onSubmit={(event) => event.preventDefault()}>
      <label className="grid gap-1">
        <span className="label">Narrowest clear width, in inches</span>
        <input
          className="min-h-11 border border-rule bg-sheet px-3"
          inputMode="decimal"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </label>
      <p className="m-0 text-[0.95rem] text-graphite">
        Measure the opening the mower must pass, gate hardware included. A result only compares that number
        with the published figure.
      </p>
      <div className="table-scroll">
        <table className="data">
          <caption>Your measurement against published passage figures.</caption>
          <thead>
            <tr>
              <th scope="col">Model</th>
              <th scope="col">Published figure</th>
              <th scope="col">Your gap</th>
            </tr>
          </thead>
          <tbody>
            {limits.map((limit) => {
              const relation =
                gap === null
                  ? "Enter a width."
                  : gap + 1e-9 >= limit.inches
                    ? "At least as wide as the published figure."
                    : "Narrower than the published figure.";
              return (
                <tr key={limit.model}>
                  <th scope="row">
                    <a href={limit.href}>{limit.model}</a>
                  </th>
                  <td className="dim">
                    {limit.inches} in
                    <span className="mt-1 block text-[0.95rem] text-graphite">{limit.meaning}</span>
                  </td>
                  <td>{relation}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </form>
  );
}
