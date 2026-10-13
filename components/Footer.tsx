import Link from "next/link";
import { Newsletter } from "@/components/Newsletter";
import { CONTACT_EMAIL, DISCLOSURE_SENTENCE, PUBLISHER } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap grid gap-8 py-10">
        <nav aria-label="About this site" className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/about">About</Link>
          <Link href="/how-picks-are-chosen">How picks are chosen</Link>
          <Link href="/affiliate-disclosure">Affiliate disclosure</Link>
          <Link href="/privacy">Privacy</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </nav>
        <p className="m-0 max-w-[66ch] text-[0.95rem]">
          {DISCLOSURE_SENTENCE}{" "}
          <Link href="/affiliate-disclosure">How this site makes money</Link>
        </p>
        <Newsletter />
        <p className="m-0 text-[0.9rem]">© 2026 {PUBLISHER}</p>
      </div>
    </footer>
  );
}
