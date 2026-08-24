import { getProducts } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export default function HomePage() {
  const products = getProducts();

  return (
    <div>
      <section className="mb-12">
        <h1 className="font-mono text-2xl font-bold mb-2">eidolux</h1>
        <p className="text-[var(--color-ink-muted)] text-base max-w-lg">
          Personal shell — a sitemap of projects, knowledge, and experiments.
        </p>
      </section>

      <section>
        <h2 className="text-sm font-medium text-[var(--color-ink-muted)] uppercase tracking-wider mb-4">
          Products
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
