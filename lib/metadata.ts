import type { Metadata } from "next";

export function pageMeta(input: {
  title: string;
  description: string;
  path: string;
  type?: "article" | "website";
}): Metadata {
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: input.path },
    openGraph: {
      title: input.title,
      description: input.description,
      url: input.path,
      type: input.type || "article",
      siteName: "RobotMowGuide",
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
    },
  };
}
