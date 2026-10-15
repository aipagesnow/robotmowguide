"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

type Item = { readonly href: string; readonly label: string };

export function MobileMenu({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (open) {
      panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    } else if (wasOpen.current) {
      btnRef.current?.focus();
    }
    wasOpen.current = open;
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onDown = (e: PointerEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <div ref={wrapRef} className="mobile-menu">
      <button
        ref={btnRef}
        type="button"
        className="mobile-menu-btn"
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen((o) => !o)}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
          {open ? (
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
        <span>Menu</span>
      </button>
      <div id="mobile-menu-panel" ref={panelRef} className="mobile-menu-panel" hidden={!open}>
        <nav aria-label="Primary mobile">
          <ul>
            {items.map((item) => {
              const cur = isCurrent(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={cur ? "page" : undefined}
                    className={cur ? "is-current" : undefined}
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
