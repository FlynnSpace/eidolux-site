"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { href: "/", label: "home" },
  { href: "/orevault", label: "orevault" },
  { href: "/about", label: "about" },
  { href: "/archive", label: "archive" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="w-full max-w-[1320px] mx-auto px-[72px] pt-7 pb-6 flex items-center justify-between">
      <Link
        href="/"
        className="font-medium tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Eidolux
      </Link>
      <div className="flex gap-8 text-[14px]" style={{ fontFamily: "var(--font-body)" }}>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={`transition-colors duration-120 ${
              pathname === route.href
                ? "text-[var(--color-ink)]"
                : "text-[var(--color-stone)] hover:text-[var(--color-ink)]"
            }`}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
