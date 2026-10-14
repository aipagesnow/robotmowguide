import type { ReactNode } from "react";
import { Breadcrumbs, Disclosure, MetaRow } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { PUBLISHED, type Crumb } from "@/lib/site";

export function ArticleFrame({
  title,
  description,
  path,
  crumbs,
  updated = PUBLISHED,
  whatChanged: _whatChanged,
  disclosure = false,
  extra,
  factCheck,
  status,
  children,
}: {
  title: string;
  description: string;
  path: string;
  crumbs?: Crumb[];
  updated?: string;
  whatChanged?: string;
  disclosure?: boolean;
  extra?: unknown;
  factCheck?: string;
  status?: ReactNode;
  children: ReactNode;
}) {
  return (
    <article className="wrap py-8">
      <JsonLd data={articleSchema({ title, description, path, published: PUBLISHED, modified: updated })} />
      {crumbs ? <JsonLd data={breadcrumbSchema(crumbs)} /> : null}
      {extra ? <JsonLd data={extra} /> : null}
      {crumbs ? <Breadcrumbs crumbs={crumbs} /> : null}
      <h1>{title}</h1>
      <MetaRow updated={updated} factCheck={factCheck} status={status} />
      {disclosure ? <Disclosure /> : null}
      {children}
    </article>
  );
}
