import type { PageType, Placement } from "@/lib/amazon";

type Props = {
  href: string;
  label: string;
  ariaLabel?: string;
  asin: string;
  productSlug: string;
  variant: string;
  placement: Placement;
  pageType: PageType;
};

/** Client-safe: uses the server-built href as-is. Do not rebuild from ASIN + env here. */
export function AmazonCta({
  href,
  label,
  ariaLabel,
  asin,
  productSlug,
  variant,
  placement,
  pageType,
}: Props) {
  return (
    <a
      className="cta"
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      aria-label={ariaLabel || label}
      data-asin={asin}
      data-product-slug={productSlug}
      data-variant={variant}
      data-placement={placement}
      data-page-type={pageType}
    >
      {label}
    </a>
  );
}
