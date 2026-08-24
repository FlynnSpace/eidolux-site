"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { href: "/", label: "Home" },
  { href: "/orevault", label: "OreVault" },
  { href: "/about", label: "About" },
  { href: "/archive", label: "Archive" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="w-full max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
      <Link
        href="/"
        className="font-mono text-lg font-semibold tracking-tight"
      >
        eidolux
      </Link>
      <div className="flex gap-6 text-sm">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={`transition-colors hover:text-[var(--color-accent)] ${
              pathname === route.href
                ? "text-[var(--color-accent)] font-medium"
                : "text-[var(--color-ink-muted)]"
            }`}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
