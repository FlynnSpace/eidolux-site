import Link from "next/link";
import type { Product } from "@/lib/products";

const modeLabel: Record<Product["mode"], string> = {
  live: "Live",
  static: "Static",
  "link-only": "GitHub →",
};

const modeBadgeClass: Record<Product["mode"], string> = {
  live: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  static: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  "link-only": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
};

function CardContent({ product }: { product: Product }) {
  return (
    <>
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-mono font-medium text-base group-hover:text-[var(--color-accent)] transition-colors">
          {product.slug}
        </h3>
        <span
          className={`text-xs px-2 py-0.5 rounded-full font-medium ${modeBadgeClass[product.mode]}`}
        >
          {modeLabel[product.mode]}
        </span>
      </div>
      <p className="text-sm text-[var(--color-ink-muted)] mb-4">
        {product.desc}
      </p>
      {product.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded bg-[var(--color-bg-secondary)] text-[var(--color-ink-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

const cardClass =
  "group block p-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] transition-colors";

export function ProductCard({ product }: { product: Product }) {
  if (product.route) {
    return (
      <Link href={product.route} className={cardClass}>
        <CardContent product={product} />
      </Link>
    );
  }

  return (
    <a
      href={product.repo ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClass}
    >
      <CardContent product={product} />
    </a>
  );
}
