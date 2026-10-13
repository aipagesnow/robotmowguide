import { getSlot, slotVisible } from "@/lib/images";

const SIZES = "(min-width: 1152px) 1120px, calc(100vw - 2rem)";

function widthsFor(files: string[], ext: "avif" | "webp") {
  return files
    .filter((file) => file.endsWith(`.${ext}`))
    .map((file) => {
      const width = Number(file.match(/-(\d+)\.(?:avif|webp)$/)?.[1]);
      return width ? { file, width } : null;
    })
    .filter((item): item is { file: string; width: number } => item !== null)
    .sort((a, b) => a.width - b.width);
}

function srcSet(items: { file: string; width: number }[]) {
  return items.map((item) => `${item.file} ${item.width}w`).join(", ");
}

export function YardPhoto({ id, priority = false }: { id: string; priority?: boolean }) {
  if (!slotVisible(id)) return null;
  const slot = getSlot(id);
  if (!slot || slot.kind !== "photo" || !slot.alt) return null;
  const avif = widthsFor(slot.files, "avif");
  const webp = widthsFor(slot.files, "webp");
  const largest = webp[webp.length - 1] || avif[avif.length - 1];
  if (!largest) return null;
  const height = id.startsWith("hero-") ? Math.round((largest.width * 9) / 16) : Math.round((largest.width * 3) / 4);

  return (
    <figure className="yard-photo">
      <picture>
        {avif.length ? <source type="image/avif" srcSet={srcSet(avif)} sizes={SIZES} /> : null}
        {webp.length ? <source type="image/webp" srcSet={srcSet(webp)} sizes={SIZES} /> : null}
        <img
          src={largest.file}
          alt={slot.alt}
          width={largest.width}
          height={height}
          sizes={SIZES}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
        />
      </picture>
    </figure>
  );
}
