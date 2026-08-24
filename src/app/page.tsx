import { getProducts } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export default function HomePage() {
  const { now, shipped } = getProducts();

  return (
    <div>
      {/* Hero */}
      <section className="flex flex-col gap-7 max-w-[1100px] pt-24 pb-26">
        <p
          className="text-[11px] font-bold uppercase text-[var(--color-stone)] flex items-center gap-3.5"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "0.16em" }}
        >
          <span className="inline-block w-6 h-px bg-[var(--color-ink)]"></span>
          AI product engineer
        </p>
        <h1
          className="font-medium leading-[0.9] m-0"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(96px, 13vw, 176px)",
            letterSpacing: "-0.045em",
          }}
        >
          Eidolux<span className="text-[var(--color-rust)]">.</span>
        </h1>
        <p className="text-[17px] leading-[1.7] max-w-[620px] m-0">
          I design AI agents for video production and knowledge systems.
          Every tool I ship asks the same question: at what point does
          automation stop serving you and start replacing you? I build the
          agents, and I build the constraints that keep them from doing too
          much. The interesting work is always at the boundary.
        </p>
        <p className="text-[15px] leading-[1.7] text-[var(--color-stone)] max-w-[620px] m-0">
          The UNIVERSE is under no obligation to make sense to you.
        </p>
      </section>

      {/* Section 1: Currently Building */}
      <section className="pb-26">
        <header className="border-t border-[var(--color-ink)] flex items-baseline justify-between pt-7 pb-5">
          <h2
            className="text-2xl font-bold m-0"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            1. currently building
          </h2>
          <span className="text-xs text-[var(--color-stone)]" style={{ fontFamily: "var(--font-body)" }}>
            {now.length + shipped.length} systems · 2026
          </span>
        </header>

        {now.length > 0 && (
          <div className="mb-8">
            <p
              className="text-[11px] font-bold uppercase text-[var(--color-stone)] pt-1 pb-4"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.14em" }}
            >
              now
            </p>
            <div className="border-t border-[var(--color-ink)]">
              {now.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        )}

        {shipped.length > 0 && (
          <div>
            <p
              className="text-[11px] font-bold uppercase text-[var(--color-stone)] pt-1 pb-4"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.14em" }}
            >
              shipped
            </p>
            <div className="border-t border-[var(--color-ink)]">
              {shipped.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Section 2: Thinking */}
      <section className="pb-26">
        <header className="border-t border-[var(--color-ink)] flex items-baseline justify-between pt-7 pb-5">
          <h2
            className="text-2xl font-bold m-0"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            2. thinking
          </h2>
          <span className="text-xs text-[var(--color-stone)]" style={{ fontFamily: "var(--font-body)" }}>
            vault notes · selected
          </span>
        </header>
        <div className="border-t border-[var(--color-ink)] py-8">
          <p className="text-[15px] leading-[1.75] text-[var(--color-stone)] max-w-[620px]">
            Selected concepts from the vault. Coming soon.
          </p>
        </div>
      </section>

      {/* Section 3: Trajectory */}
      <section>
        <header className="border-t border-[var(--color-ink)] flex items-baseline justify-between pt-7 pb-5">
          <h2
            className="text-2xl font-bold m-0"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            3. trajectory
          </h2>
          <span className="text-xs text-[var(--color-stone)]" style={{ fontFamily: "var(--font-body)" }}>
            where I&apos;m headed
          </span>
        </header>
        <div className="border-t border-[var(--color-ink)] py-8">
          <p className="text-[15px] leading-[1.75] text-[var(--color-stone)] max-w-[620px]">
            Near-term, mid-term, long-term. Written out honestly, subject to revision.
          </p>
        </div>
      </section>
    </div>
  );
}
