import { AmazonCta } from "@/components/AmazonCta";
import { amazonHref, type PageType, type Placement } from "@/lib/amazon";
import { NO_LINK_LINE } from "@/lib/site";

type Props = {
  asin: string | null;
  status?: string;
  model: string;
  productSlug: string;
  placement: Placement;
  pageType: PageType;
  compact?: boolean;
};

export function ProductLink({ asin, status, model, productSlug, placement, pageType, compact }: Props) {
  if (status === "discontinued") return null;
  if (!asin) return <p className="paid m-0">{NO_LINK_LINE}</p>;
  const href = amazonHref(asin, status);
  if (!href) return null;
  const full = `See ${model} on Amazon`;
  return (
    <AmazonCta
      href={href}
      label={compact ? "See on Amazon" : full}
      ariaLabel={full}
      asin={asin}
      productSlug={productSlug}
      variant={model}
      placement={placement}
      pageType={pageType}
    />
  );
}
