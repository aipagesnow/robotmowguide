import { PUBLISHER, SITE_NAME, SITE_URL, absoluteUrl, type Crumb } from "@/lib/site";

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  published: string;
  modified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.published,
    dateModified: input.modified,
    mainEntityOfPage: absoluteUrl(input.path),
    author: {
      "@type": "Organization",
      name: "RobotMowGuide editors",
      url: absoluteUrl("/about"),
    },
    publisher: {
      "@type": "Organization",
      name: PUBLISHER,
      url: absoluteUrl("/about"),
    },
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function homeSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      email: "vora+robotmow@mail.grokbot.com",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      publisher: {
        "@type": "Organization",
        name: PUBLISHER,
        url: absoluteUrl("/about"),
      },
    },
  ];
}
