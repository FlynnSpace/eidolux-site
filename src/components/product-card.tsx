import Link from "next/link";
import type { Product } from "@/lib/products";

function CardContent({ product }: { product: Product }) {
  return (
    <div className="flex items-start justify-between gap-6">
      <span>
        <Link
          href={product.route ?? product.repo ?? "#"}
          className="font-medium transition-colors duration-150 hover:text-[var(--color-rust)] mr-1"
          style={{ fontFamily: "var(--font-display)" }}
          {...(!product.route && product.repo
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {product.slug}
        </Link>
        <span className="text-[var(--color-ink)] text-[14px] leading-[1.75]">
          {product.desc}
        </span>
      </span>
      <span
        className="text-[12px] text-[var(--color-stone)] shrink-0 pt-0.5"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {product.status}
      </span>
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border-b border-[var(--color-ink)] py-5">
      <CardContent product={product} />
    </div>
  );
}
