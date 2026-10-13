import fs from "fs";
import path from "path";
import manifest from "@/content/images.json";

type Slot = {
  id: string;
  kind: string;
  status: string;
  source: string;
  files: string[];
  alt: string;
};

const slots = (manifest as { slots: Slot[] }).slots;

export function getSlot(id: string): Slot | undefined {
  return slots.find((slot) => slot.id === id);
}

export function slotVisible(id: string): boolean {
  const slot = getSlot(id);
  if (!slot) return false;
  if (slot.status === "approved") return filesReady(slot);
  if (slot.status === "made" && process.env.VERCEL_ENV !== "production") return filesReady(slot);
  return false;
}

function filesReady(slot: Slot): boolean {
  if (slot.kind === "diagram" || slot.source === "svg-in-code") return true;
  if (!slot.files.length) return false;
  return slot.files.every((file) => {
    const rel = file.replace(/^\//, "");
    return fs.existsSync(path.join(process.cwd(), "public", rel));
  });
}

export function slotAlt(id: string): string {
  return getSlot(id)?.alt || "";
}
