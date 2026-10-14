export const SITE_NAME = "RobotMowGuide";
export const PUBLISHER = "Aivora Digital";
export const CONTACT_EMAIL = "hello@robotmowguide.com";
export const PUBLISHED = "2026-10-13";
export const SPEC_CHECKED = "2026-10-10";
export const FCC_TABLE_CHECKED = "2026-10-09";

const configured = (process.env.NEXT_PUBLIC_SITE_URL || "https://robotmowguide.com").replace(
  /\/$/,
  "",
);

export const SITE_URL = /vercel\.app|localhost|127\.0\.0\.1/i.test(configured)
  ? "https://robotmowguide.com"
  : configured;

// On Vercel previews, Next.js points file-based OG/Twitter image URLs at the preview host
// (VERCEL_BRANCH_URL / VERCEL_URL) instead of metadataBase. Clear them so previews keep the
// canonical site URL, matching production output.
if (process.env.VERCEL_ENV === "preview") {
  delete process.env.VERCEL_BRANCH_URL;
  delete process.env.VERCEL_URL;
}

export const INDEXNOW_KEY = "2b3fd7045f9cfd3978efbb9fb48e8fc1";

export const DISCLOSURE_SENTENCE = "As an Amazon Associate I earn from qualifying purchases.";

export const NO_LINK_LINE =
  "There's no Amazon link for this model yet because we couldn't confirm a current amazon.com listing for this exact version.";

export const FACT_CHECK = `Edited and fact-checked by the RobotMowGuide editors at Aivora Digital. Specs checked against manufacturer pages on Oct 10, 2026.`;

export const FCC_SEARCH = "https://apps.fcc.gov/oetcf/eas/reports/GenericSearch.cfm";
export const FCC_DA_26_789 = "https://docs.fcc.gov/public/attachments/DA-26-789A1.pdf";
export const FCC_COVERED_LIST = "https://www.fcc.gov/supplychain/coveredlist";
export const HUSQ_ANTENNA =
  "https://www.husqvarna.com/us/support/troubleshooting-reference-station-issues-during-epos-setup-of-automower-ka-70304/";

export type Crumb = { name: string; path: string };

export const RECHECKED = "2026-10-13";

export const NAV = [
  { href: "/best", label: "Best" },
  { href: "/tools/mower-finder", label: "Find my mower" },
  { href: "/reviews", label: "Reviews" },
  { href: "/vs", label: "Head-to-head" },
  { href: "/guides", label: "Guides" },
  { href: "/how-picks-are-chosen", label: "How picks are chosen" },
] as const;

export function absoluteUrl(path: string): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}
