const ASIN_RE = /^[A-Z0-9]{10}$/;

export type AmazonClickParams = {
  asin: string;
  product_slug: string;
  variant: string;
  placement: string;
  page_type: string;
};

export type AmazonClickAttrs = {
  asin?: string | null;
  productSlug?: string | null;
  variant?: string | null;
  placement?: string | null;
  pageType?: string | null;
};

function clean(value: string | null | undefined): string {
  return (value || "").trim();
}

export function isAmazonClickUrl(url: URL, pageOrigin: string): boolean {
  const host = url.hostname.toLowerCase();
  if (host === "amazon.com" || host.endsWith(".amazon.com")) return true;
  if (url.origin !== pageOrigin) return false;
  return url.pathname === "/go" || url.pathname.startsWith("/go/");
}

export function asinFromUrl(url: URL): string {
  const parts = url.pathname.split("/").filter(Boolean);
  for (let i = 0; i < parts.length; i += 1) {
    const key = parts[i].toLowerCase();
    const next = parts[i + 1];
    if (!next || !ASIN_RE.test(next.toUpperCase())) continue;
    if (key === "dp" || key === "d" || key === "product" || key === "go") return next.toUpperCase();
  }
  const query = clean(url.searchParams.get("asin")).toUpperCase();
  return ASIN_RE.test(query) ? query : "";
}

export function pageTypeFromPath(pathname: string): string {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  if (path === "/") return "home";
  if (path === "/best") return "best";
  if (path.startsWith("/best/")) return "best_for";
  if (path.startsWith("/reviews")) return "review";
  if (path.startsWith("/vs")) return "vs";
  if (path.startsWith("/guides")) return "guide";
  if (path.startsWith("/tools")) return "tool";
  return "";
}

export function readAmazonClickParams(attrs: AmazonClickAttrs, href: string, pagePath: string): AmazonClickParams {
  let url: URL | null = null;
  try {
    url = new URL(href);
  } catch {
    url = null;
  }
  const fromQuery = (key: string) => (url ? clean(url.searchParams.get(key)) : "");
  const attrAsin = clean(attrs.asin).toUpperCase();
  const queryAsin = fromQuery("asin").toUpperCase();
  return {
    asin: (ASIN_RE.test(attrAsin) ? attrAsin : "") || (url ? asinFromUrl(url) : "") || (ASIN_RE.test(queryAsin) ? queryAsin : ""),
    product_slug: clean(attrs.productSlug) || fromQuery("product_slug"),
    variant: clean(attrs.variant) || fromQuery("variant"),
    placement: clean(attrs.placement) || fromQuery("placement") || "inline",
    page_type: clean(attrs.pageType) || fromQuery("page_type") || pageTypeFromPath(pagePath),
  };
}

export const AMAZON_CLICK_DELAY_MS = 300;

export function sendAmazonClick(options: {
  gtag: ((...args: unknown[]) => void) | undefined;
  params: AmazonClickParams;
  href: string;
  sameTab: boolean;
  preventDefault: () => void;
  assign: (href: string) => void;
  schedule: (fn: () => void, ms: number) => unknown;
  cancel: (id: unknown) => void;
}): void {
  if (typeof options.gtag !== "function") return;

  const fields = {
    ...options.params,
    link_url: options.href,
    page_path: window.location.pathname,
    transport_type: "beacon",
  };
  if (!options.sameTab) {
    options.gtag("event", "amazon_click", fields);
    return;
  }

  options.preventDefault();
  let moved = false;
  let timer: unknown = 0;
  const go = () => {
    if (moved) return;
    moved = true;
    options.cancel(timer);
    options.assign(options.href);
  };
  timer = options.schedule(go, AMAZON_CLICK_DELAY_MS);
  try {
    options.gtag("event", "amazon_click", {
      ...fields,
      event_callback: go,
      event_timeout: AMAZON_CLICK_DELAY_MS,
    });
  } catch {
    go();
  }
}

export function opensInSameTab(click: {
  button: number;
  metaKey: boolean;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  targetAttr: string | null;
  download: boolean;
}): boolean {
  if (click.button !== 0) return false;
  if (click.metaKey || click.ctrlKey || click.shiftKey || click.altKey) return false;
  if (click.download) return false;
  const target = clean(click.targetAttr).toLowerCase();
  return target === "" || target === "_self";
}
