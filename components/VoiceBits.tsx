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
      Makers usually publish one maximum slope and don't say whether it applies in the middle of
      your lawn or at the edge. When a model also gives a lower figure for the edge, that's the one to use there. If your bank runs into a bed
      or a fence, we'd leave some margin, because edges are usually harder.
    </p>
  );
}
