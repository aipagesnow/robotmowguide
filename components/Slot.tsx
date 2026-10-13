import type { ReactNode } from "react";
import { slotVisible } from "@/lib/images";

export function Slot({ id, children }: { id: string; children: ReactNode }) {
  if (!slotVisible(id)) return null;
  return <>{children}</>;
}
