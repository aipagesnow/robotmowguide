import Link from "next/link";
import { Mark } from "@/components/Mark";
import { NAV } from "@/lib/site";
import { MobileMenu } from "@/components/MobileMenu";

export function Header() {
  return (
    <header className="site-header relative">
      <div className="wrap flex flex-wrap items-center gap-x-6 gap-y-1 py-1.5">
        <Link href="/" className="flex items-center gap-2 min-h-11">
          <Mark size={28} />
          <span className="wordmark text-lg font-semibold tracking-wide">
            Robot<span className="font-extrabold">Mow</span>Guide
          </span>
        </Link>
        <nav aria-label="Primary" className="desktop-nav flex flex-wrap gap-x-5 gap-y-1 text-[0.95rem]">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="min-h-11 inline-flex items-center">
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileMenu items={NAV} />
      </div>
    </header>
  );
}
