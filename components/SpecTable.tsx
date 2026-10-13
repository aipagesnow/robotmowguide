import Link from "next/link";
import { SourceLine } from "@/components/Blocks";

export type SpecRow = {
  label: string;
  value: string;
  sources: string[];
  checked: string;
  href?: string;
  note?: string;
};

export function SpecTable({ caption, rows }: { caption: string; rows: SpecRow[] }) {
  return (
    <div className="table-scroll">
      <p className="scroll-cue">Swipe sideways to read every column.</p>
      <table className="data">
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Figure</th>
            <th scope="col">Published value</th>
            <th scope="col">Source</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.href ? <Link href={row.href}>{row.label}</Link> : row.label}</th>
              <td>
                <span className="dim">{row.value}</span>
                {row.note ? <span className="mt-1 block text-[0.95rem] text-graphite">{row.note}</span> : null}
              </td>
              <td>
                <SourceLine ids={row.sources} checked={row.checked} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
