import type { MetadataRoute } from "next";
import routes from "@/content/routes.json";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: page.lastmod,
  }));
}
