import type { ReactNode } from "react";
import Link from "next/link";
import { ProductLink } from "@/components/ProductLink";
import type { PageType, Placement } from "@/lib/amazon";
import { formatDate } from "@/lib/format";
import { sourceHref, sourceLabel } from "@/lib/products";
import { DISCLOSURE_SENTENCE, FACT_CHECK, type Crumb } from "@/lib/site";

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-[0.92rem] text-graphite">
      <ol className="m-0 flex list-none flex-wrap gap-2 p-0">
        {crumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {index === crumbs.length - 1 ? (
              <span aria-current="page">{crumb.name}</span>
            ) : (
              <Link href={crumb.path}>{crumb.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function MetaRow({ updated, whatChanged }: { updated: string; whatChanged: string }) {
  return (
    <div className="meta-row measure">
      <p className="m-0">
        By the <Link href="/about">RobotMowGuide editors</Link>
      </p>
      <p className="m-0">{FACT_CHECK}</p>
      <p className="dim m-0">Updated {formatDate(updated)}</p>
      <p className="m-0">
        <span className="label">What changed</span> {whatChanged}
      </p>
    </div>
  );
}

export function Disclosure() {
  return (
    <p className="measure text-[0.95rem]">
      {DISCLOSURE_SENTENCE} Links to Amazon are paid links.{" "}
      <Link href="/affiliate-disclosure">How this site makes money</Link>
    </p>
  );
}

export function PaidLinks() {
  return (
    <p className="paid">
      Paid links: <Link href="/affiliate-disclosure">see disclosure</Link>
    </p>
  );
}

export function CtaCluster({ children }: { children: React.ReactNode }) {
  return (
    <div data-cta-cluster="true" className="grid gap-2">
      <PaidLinks />
      {children}
    </div>
  );
}

export function StatusLine({ children }: { children: React.ReactNode }) {
  return (
    <p className="measure">
      <span className="label">Status</span> {children}
    </p>
  );
}

export type QuickPickItem = {
  yard: string;
  model: string;
  href: string;
  asin: string | null;
  productSlug: string;
  status?: string;
};

export function QuickPick({ items, pageType }: { items: QuickPickItem[]; pageType: PageType }) {
  return (
    <section className="sheet" aria-label="Quick picks" data-cta-cluster="true">
      <div className="px-3 pt-3">
        <PaidLinks />
      </div>
      <div className="grid">
        {items.map((item) => (
          <div key={item.model} className="grid gap-2 border-b border-rule px-3 py-3 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_auto] md:items-center">
            <p className="label m-0">{item.yard}</p>
            <p className="m-0">
              <Link href={item.href}>{item.model}</Link>
            </p>
            <ProductLink
              asin={item.asin}
              status={item.status}
              model={item.model}
              productSlug={item.productSlug}
              placement="quick_pick"
              pageType={pageType}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export type KeyNumber = { label: string; value: string; detail?: string };

export function KeyNumbers({ rows }: { rows: KeyNumber[] }) {
  return (
    <div className="sheet">
      <p className="label m-0 px-3 pt-3">Key numbers for your yard</p>
      <dl className="m-0 grid">
        {rows.map((row) => (
          <div key={row.label} className="grid gap-1 border-t border-rule px-3 py-3 md:grid-cols-[14rem_1fr]">
            <dt className="label m-0">{row.label}</dt>
            <dd className="m-0">
              <span className="dim">{row.value}</span>
              {row.detail ? <span className="mt-1 block text-[0.95rem] text-graphite">{row.detail}</span> : null}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function OwnerReports({
  intro,
  items,
}: {
  intro: string;
  items: { text: string; href: string; linkLabel: string; extra?: { href: string; linkLabel: string }[] }[];
}) {
  return (
    <section>
      <h2>What owners report</h2>
      <p className="measure">{intro}</p>
      <ul className="grid gap-3 pl-5">
        {items.map((item) => (
          <li key={item.href + item.text} data-owner-report="true">
            {item.text}{" "}
            <a href={item.href}>{item.linkLabel}</a>
            {item.extra?.map((link) => (
              <span key={link.href}>
                {" "}
                · <a href={link.href}>{link.linkLabel}</a>
              </span>
            ))}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ResearchedBox({
  sources,
  manuals,
  threads,
  questions,
  scope = "one",
}: {
  sources: { id: string }[];
  manuals: string;
  threads: string;
  questions: string;
  scope?: "one" | "group";
}) {
  const unique = [...new Map(sources.map((item) => [item.id, item])).values()];
  return (
    <aside className="sheet mt-8 p-4">
      <h2 className="mt-0">How this page was researched</h2>
      <p className="measure">
        {scope === "one"
          ? "This is a research-based review. We have not tested this mower."
          : "This is a research-based roundup. We have not tested these mowers."}
      </p>
      <ul className="grid gap-2 pl-5">
        <li>
          {unique.length} sources consulted, linked in the source list
          {unique.length ? ":" : "."}{" "}
          {unique.map((item, index) => {
            const href = sourceHref(item.id);
            const label = sourceLabel(item.id);
            return (
              <span key={item.id}>
                {index > 0 ? ", " : ""}
                {href ? <a href={href}>{label}</a> : label}
              </span>
            );
          })}
        </li>
        <li>{manuals}</li>
        <li>{threads}</li>
        <li>{questions}</li>
        <li>Specs checked Oct 10, 2026.</li>
      </ul>
      <p className="m-0">
        <Link href="/how-picks-are-chosen">How picks are chosen</Link>
      </p>
    </aside>
  );
}

export function Faq({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <section className="faq">
      <h2>Questions</h2>
      {items.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <div className="measure">{item.a}</div>
        </details>
      ))}
    </section>
  );
}

export function Related({ links }: { links: { href: string; label: string }[] }) {
  return (
    <nav aria-label="Related pages">
      <h2>Related</h2>
      <ul className="grid gap-2 pl-5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SourceLine({ ids, checked }: { ids: string[]; checked: string }) {
  return (
    <p className="text-[0.92rem] text-graphite">
      {ids.map((id, index) => {
        const href = sourceHref(id);
        const label = sourceLabel(id);
        return (
          <span key={id}>
            {index > 0 ? "; " : ""}
            {href ? <a href={href}>{label}</a> : label}
          </span>
        );
      })}
      {", checked "}
      {formatDate(checked)}.
    </p>
  );
}

export function EndLinks({
  links,
  pageType,
  placement = "end_block",
}: {
  links: { asin: string | null; model: string; productSlug: string; status?: string }[];
  pageType: PageType;
  placement?: Placement;
}) {
  return (
    <CtaCluster>
      <div className="flex flex-wrap gap-3">
        {links.map((link) => (
          <ProductLink
            key={link.model}
            asin={link.asin}
            status={link.status}
            model={link.model}
            productSlug={link.productSlug}
            placement={placement}
            pageType={pageType}
          />
        ))}
      </div>
    </CtaCluster>
  );
}
