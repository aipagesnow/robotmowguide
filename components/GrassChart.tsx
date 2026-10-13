import Link from "next/link";
import { bermudaFit, HEIGHT_ROWS, stAugustineFit, type HeightRow } from "@/lib/grass";

export function GrassChart({ focus }: { focus: "st-augustine" | "bermuda" }) {
  const fit = (row: HeightRow) => (focus === "st-augustine" ? stAugustineFit(row) : bermudaFit(row));
  return (
    <div className="table-scroll">
      <p className="scroll-cue">Swipe sideways to read every column.</p>
      <table className="data">
        <caption>
          Published cutting-height ranges on this site, set next to the{" "}
          {focus === "st-augustine" ? "St. Augustine" : "Bermuda"} bands above.
        </caption>
        <thead>
          <tr>
            <th scope="col">Model</th>
            <th scope="col">Published cut</th>
            <th scope="col">{focus === "st-augustine" ? "Against 3.5–4 in" : "Against a short Bermuda cut"}</th>
          </tr>
        </thead>
        <tbody>
          {HEIGHT_ROWS.map((row) => (
            <tr key={row.model}>
              <th scope="row">
                {row.href ? <Link href={row.href}>{row.model}</Link> : row.model}
              </th>
              <td className="dim">{row.height}</td>
              <td>{fit(row)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
