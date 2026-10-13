"use client";

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
      onClick={() => {
        if (typeof window.gtag !== "function") return;
        window.gtag("event", "amazon_click", {
          asin,
          product_slug: productSlug,
          variant,
          placement,
          page_type: pageType,
          transport_type: "beacon",
        });
      }}
    >
      {label}
    </a>
  );
}
