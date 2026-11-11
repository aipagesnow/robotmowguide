import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFrame } from "@/components/ArticleFrame";
import { pageMeta } from "@/lib/metadata";
import { htmlSitemapGroups } from "@/lib/sitemaps";

const title = "All pages";
const description = "A complete list of pages on Robot Mow Guide.";

export const metadata: Metadata = pageMeta({ title, description, path: "/sitemap" });

export default function SitemapPage() {
  return (
    <ArticleFrame
      title={title}
      description={description}
      path="/sitemap"
      whatChanged="November 2026: first published."
    >
      <p className="measure">Every page on Robot Mow Guide, grouped by section.</p>
      {htmlSitemapGroups().map((group) => (
        <section key={group.heading} className="measure">
          <h2>{group.heading}</h2>
          <ul>
            {group.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </ArticleFrame>
  );
}
