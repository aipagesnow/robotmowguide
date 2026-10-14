import { CtaCluster } from "@/components/Blocks";
import { ProductLink } from "@/components/ProductLink";
import type { PageType } from "@/lib/amazon";
import { formatAcres, formatDate, formatDegrees } from "@/lib/format";
import type { Family, Variant } from "@/lib/products";

function areaCell(variant: Variant): string {
  const value = variant.ladder?.ratedAreaAcres?.value;
  if (typeof value !== "number") return "Not published";
  const base = formatAcres(value);
  const note = publicNote(variant.ladder?.ratedAreaAcres?.note);
  return note ? `${base}. ${note}` : base;
}

function slopeCell(variant: Variant): string {
  const percent = variant.ladder?.maxSlopePercent?.value;
  if (typeof percent !== "number") return "Not published";
  const published = variant.ladder?.maxSlopeDegrees?.value;
  const deg = typeof published === "number" ? formatDegrees(published) : "degrees not published";
  const note = publicNote(variant.ladder?.maxSlopePercent?.note);
  const base = `${percent}% (${deg})`;
  return note ? `${base}. ${note}` : base;
}

function statusCell(family: Family, variant: Variant): string {
  const date = formatDate(variant.statusDate || family.statusDate);
  if (variant.status === "superseded") {
    return `Replaced by a newer model but still sold as of ${date}. Current model: ${family.primaryVariant}.`;
  }
  if (variant.status === "discontinued") {
    return `No longer sold as of ${date}.`;
  }
  return `On sale in the US as of ${date}.`;
}

function publicNote(note?: string): string | undefined {
  if (!note) return undefined;
  if (/research pack|before publishing|confirm|re-check|MODELS|Amazon title|aggregator|manual/i.test(note)) {
    return undefined;
  }
  return note;
}

export function VariantTable({
  family,
  differences,
  pageType,
}: {
  family: Family;
  differences: Record<string, string>;
  pageType: PageType;
}) {
  return (
    <section>
      <h2>Variants</h2>
      <CtaCluster>
        <div className="table-scroll">
          <p className="scroll-cue">Swipe sideways to see every column.</p>
          <table className="data">
            <caption>
              {family.family} variants. Area and slope checked {formatDate(family.statusDate)}.
            </caption>
            <thead>
              <tr>
                <th scope="col">Model</th>
                <th scope="col">Rated area</th>
                <th scope="col">Max slope</th>
                <th scope="col">What differs</th>
                <th scope="col">Status</th>
                <th scope="col">Amazon</th>
              </tr>
            </thead>
            <tbody>
              {family.variants.map((variant) => (
                <tr key={variant.model}>
                  <th scope="row">{variant.model}</th>
                  <td className="dim">{areaCell(variant)}</td>
                  <td className="dim">{slopeCell(variant)}</td>
                  <td>{differences[variant.model] || "Not published"}</td>
                  <td>{statusCell(family, variant)}</td>
                  <td>
                    <ProductLink
                      asin={variant.asin}
                      status={variant.status || family.status}
                      model={variant.model.replace(/\s*\(.*\)$/, "")}
                      productSlug={family.slug}
                      placement="variant_table"
                      pageType={pageType}
                      compact
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CtaCluster>
    </section>
  );
}
