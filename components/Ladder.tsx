import Link from "next/link";
import { Slot } from "@/components/Slot";
import { formatAcres, formatDegrees, degreesFromPercent } from "@/lib/format";
import { ladderRows, type LadderRow } from "@/lib/products";

function slopeText(row: LadderRow): string {
  if (typeof row.degrees === "number") return `${row.slope}% · ${formatDegrees(row.degrees)}`;
  return `${row.slope}%`;
}

function slopeTable(row: LadderRow): string {
  const base = slopeText(row);
  if (typeof row.degrees === "number") return base;
  return `${base} (degrees not published)`;
}

function tableName(name: string): string {
  return name.replace(/\s*\([^)]*\)$/, "");
}

function shortName(name: string): string {
  return name
    .replace("Landroid Vision Cloud ", "Worx ")
    .replace("Landroid M ", "Worx ")
    .replace("Automower ", "")
    .replace("LUBA mini 2 AWD ", "LUBA mini ")
    .replace(" (high-cut)", "")
    .replace(" (1 acre, 2WD)", "")
    .replace(" (1 acre)", "");
}

export function Ladder({ picks = "elsewhere" }: { picks?: "below" | "elsewhere" }) {
  const rows = ladderRows();
  return (
    <section aria-labelledby="ladder-heading">
      <h2 id="ladder-heading">The ladder: rated area, then slope</h2>
      <p className="measure">
        Each current model sits at the lawn area its maker rates it for. The percent beside it is that
        model’s published maximum slope. A solid mark is wire-free. A dashed mark uses a boundary wire.{" "}
        {picks === "below"
          ? "A numbered tag marks one of the five picks below."
          : "A numbered tag marks one of the five picks on the best-mowers page."}
      </p>
      <Slot id="dia-ladder">
        <LadderDrawing rows={rows} />
      </Slot>
      <div className="table-scroll mt-4">
        <p className="scroll-cue">Swipe sideways to read every column.</p>
        <table className="data">
          <caption>Robot mowers by rated lawn area and maximum slope. Figures checked Oct 10, 2026.</caption>
          <thead>
            <tr>
              <th scope="col">Model</th>
              <th scope="col">Rated area</th>
              <th scope="col">Max slope</th>
              <th scope="col">Boundary</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <th scope="row">
                  {row.pick ? <span className="callout">{row.pick}</span> : null}
                  {row.href ? <Link href={row.href}>{tableName(row.name)}</Link> : tableName(row.name)}
                  {row.pick ? " (pick)" : ""}
                </th>
                <td className="dim">{formatAcres(row.acres)}</td>
                <td className="dim">
                  {slopeTable(row)}
                  {row.slopeNote && /boundary/i.test(row.slopeNote) ? ` (${row.slopeNote})` : ""}
                </td>
                <td>
                  {row.line === "boundary-wire"
                    ? "Boundary wire"
                    : row.line === "either"
                      ? "Wire-free or boundary wire"
                      : "Wire-free"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function LadderDrawing({ rows }: { rows: LadderRow[] }) {
  const left = 248;
  const right = 740;
  const span = right - left;
  const height = 92 + rows.length * 36 + 56;
  const xAt = (acres: number) => left + (Math.min(acres, 2) / 2) * span;
  return (
    <figure className="blueprint mt-4">
      <svg
        role="img"
        viewBox={`0 0 760 ${height}`}
        aria-labelledby="ladder-title ladder-desc"
        className="block h-auto w-full"
      >
        <title id="ladder-title">Diagram ranking robot mowers by rated lawn area, with each model’s maximum slope</title>
        <desc id="ladder-desc">
          A scale from 0 to 2 acres. Each current model is a row, marked at its rated area, with its maximum slope.
          Numbered rows are the five picks. Solid lines are wire-free. Dashed lines use a boundary wire. A dotted line can run wire-free or with a boundary wire.
        </desc>
        <rect width="760" height={height} fill="#123a63" />
        {[0, 0.5, 1, 1.5, 2].map((tick) => (
          <g key={tick}>
            <line x1={xAt(tick)} y1={36} x2={xAt(tick)} y2={height - 48} stroke="#dbe7f3" strokeOpacity="0.35" />
            <text x={xAt(tick)} y={28} fill="#ffffff" fontSize="12" textAnchor="middle" fontFamily="ui-monospace, monospace">
              {tick} ac
            </text>
          </g>
        ))}
        {rows.map((row, index) => {
          const y = 78 + index * 36;
          const x = xAt(row.acres);
          const dash =
            row.line === "boundary-wire" ? "5 4" : row.line === "either" ? "1 3" : undefined;
          return (
            <g key={row.id}>
              {row.pick ? (
                <g>
                  <rect x={198} y={y - 12} width={18} height={18} fill="none" stroke="#e2186f" />
                  <text x={207} y={y + 2} fill="#ffffff" fontSize="11" textAnchor="middle" fontFamily="ui-monospace, monospace">
                    {row.pick}
                  </text>
                </g>
              ) : null}
              <text x={12} y={y + 4} fill="#ffffff" fontSize="13">
                {shortName(row.name)}
                {row.pick ? " · Pick" : ""}
              </text>
              <line
                x1={left}
                y1={y}
                x2={x}
                y2={y}
                stroke={row.pick ? "#e2186f" : "#dbe7f3"}
                strokeWidth={row.pick ? 2 : 1}
                strokeDasharray={dash}
              />
              <rect x={x - 4} y={y - 4} width={8} height={8} fill={row.pick ? "#e2186f" : "#ffffff"} />
              <text x={x + 10} y={y + 4} fill="#dbe7f3" fontSize="12" fontFamily="ui-monospace, monospace">
                {slopeText(row)}
              </text>
            </g>
          );
        })}
        <text x={12} y={height - 22} fill="#dbe7f3" fontSize="12">
          Solid: wire-free. Dashed: boundary wire. Dotted: wire-free or boundary wire. Number and the word Pick mark a pick. Scale 0 to 2 acres.
        </text>
      </svg>
    </figure>
  );
}
