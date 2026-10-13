"use client";

import Script from "next/script";
import { useEffect } from "react";

type Props = { gaId?: string };

export function Analytics({ gaId }: Props) {
  useEffect(() => {
    if (!gaId) return;
    let cancelled = false;
    import("web-vitals")
      .then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
        if (cancelled) return;
        const send = (metric: { name: string; value: number; id: string; rating: string }) => {
          if (typeof window.gtag !== "function") return;
          window.gtag("event", "web_vital", {
            metric_name: metric.name,
            metric_value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
            metric_rating: metric.rating,
            metric_id: metric.id,
            transport_type: "beacon",
          });
        };
        onCLS(send);
        onFCP(send);
        onINP(send);
        onLCP(send);
        onTTFB(send);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, [gaId]);

  if (!gaId || !/^G-[A-Z0-9]+$/.test(gaId)) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
