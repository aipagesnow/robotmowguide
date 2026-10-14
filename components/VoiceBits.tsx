import Link from "next/link";
import { formatAcres, realisticAcres } from "@/lib/format";

export function ComfortableFor({ rated }: { rated: number }) {
  return (
    <>
      Comfortable for about {formatAcres(realisticAcres(rated), false)} with trees or two zones.{" "}
      <Link href="/guides/how-big-a-robot-mower-do-i-need">how we size</Link>
    </>
  );
}

export function SlopeMarginNote() {
  return (
    <p className="measure">
      Unless a row says otherwise, makers publish one maximum slope and don't say whether it applies inside
      the lawn or at the edge. Edges are usually harder, so leave some margin on a bank that runs into a bed
      or fence.
    </p>
  );
}
