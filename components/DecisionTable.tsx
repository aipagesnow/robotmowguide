import Link from "next/link";
import { currentCandidates } from "@/lib/candidates";
import { matchMowers, type FinderInput } from "@/lib/match";

const SIZES = [0.25, 0.5, 1, 1.5, 2.5];
const SLOPES = [30, 45, 80, 100];
const TREES: FinderInput["trees"][] = ["open", "heavy"];

export function DecisionTable() {
  const candidates = currentCandidates();
  const rows = TREES.flatMap((trees) =>
    SIZES.flatMap((size) =>
      SLOPES.map((slope) => {
        const result = matchMowers(candidates, {
          lawnAcres: size,
          slopePercent: slope,
          trees,
          zones: "none",
          slopeAtEdge: false,
          wire: "wire-free",
        });
        return { trees, size, slope, result };
      }),
    ),
  );

  return (
    <div className="table-scroll">
      <p className="scroll-cue">Swipe sideways to read every column.</p>
      <table className="data">
        <caption>
          Wire-free matches for one zone. The slope column is the bank you enter, and this table treats that
          bank as an interior limit. With heavy trees, a mower needs more rated area than your lawn (<Link href="/guides/how-big-a-robot-mower-do-i-need#trees-or-two-zones">how we size</Link>).
        </caption>
        <thead>
          <tr>
            <th scope="col">Lawn</th>
            <th scope="col">Slope</th>
            <th scope="col">Trees</th>
            <th scope="col">Fits</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.trees}-${row.size}-${row.slope}`}>
              <th scope="row" className="dim">
                {row.size} acres
              </th>
              <td className="dim">{row.slope}%</td>
              <td>{row.trees === "heavy" ? "Heavy" : "Open"}</td>
              <td>
                {row.result.nothing ? (
                  row.result.nothing
                ) : (
                  row.result.matches.map((match, index) => (
                    <span key={match.candidate.id}>
                      {index > 0 ? "; " : ""}
                      {match.candidate.href ? (
                        <Link href={match.candidate.href}>{match.candidate.shortName}</Link>
                      ) : (
                        match.candidate.shortName
                      )}
                    </span>
                  ))
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
