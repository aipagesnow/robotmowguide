"use client";

import { useEffect } from "react";
import { isAmazonClickUrl, opensInSameTab, readAmazonClickParams, sendAmazonClick } from "@/lib/amazon-click";

function anchorFromEvent(event: MouseEvent): HTMLAnchorElement | null {
  const node = event.target;
  const el = node instanceof Element ? node : node instanceof Node ? node.parentElement : null;
  const anchor = el?.closest("a");
  return anchor instanceof HTMLAnchorElement ? anchor : null;
}

export function AmazonClicks() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 && event.button !== 1) return;
      const anchor = anchorFromEvent(event);
      if (!anchor) return;
      let url: URL;
      try {
        url = new URL(anchor.href);
      } catch {
        return;
      }
      if (!isAmazonClickUrl(url, window.location.origin)) return;
      if (typeof window.gtag !== "function") return;

      const params = readAmazonClickParams(
        {
          asin: anchor.getAttribute("data-asin"),
          productSlug: anchor.getAttribute("data-product-slug"),
          variant: anchor.getAttribute("data-variant"),
          placement: anchor.getAttribute("data-placement"),
          pageType: anchor.getAttribute("data-page-type"),
        },
        anchor.href,
        window.location.pathname,
      );
      sendAmazonClick({
        gtag: window.gtag,
        params,
        href: anchor.href,
        sameTab:
          !event.defaultPrevented &&
          opensInSameTab({
            button: event.button,
            metaKey: event.metaKey,
            ctrlKey: event.ctrlKey,
            shiftKey: event.shiftKey,
            altKey: event.altKey,
            targetAttr: anchor.getAttribute("target"),
            download: anchor.hasAttribute("download"),
          }),
        preventDefault: () => event.preventDefault(),
        assign: (href) => window.location.assign(href),
        schedule: (fn, ms) => window.setTimeout(fn, ms),
        cancel: (id) => window.clearTimeout(id as number),
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
