import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page is not on RobotMowGuide. Try the mower rankings, the reviews, or the guides.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <article className="wrap py-10">
      <p className="label">404</p>
      <h1>That page is not here</h1>
      <p className="measure">
        The address does not match a page on this site. The rankings, reviews, and guides are linked below.
      </p>
      <ul className="grid gap-2 pl-5">
        <li>
          <Link href="/best">Best robot lawn mowers for US yards</Link>
        </li>
        <li>
          <Link href="/reviews">Robot mower reviews</Link>
        </li>
        <li>
          <Link href="/guides">Guides</Link>
        </li>
      </ul>
    </article>
  );
}
