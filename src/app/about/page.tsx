export default function AboutPage() {
  return (
    <div>
      <section className="pt-24 pb-16">
        <p
          className="text-[11px] font-bold uppercase text-[var(--color-stone)] flex items-center gap-3.5 mb-7"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "0.16em" }}
        >
          <span className="inline-block w-6 h-px bg-[var(--color-ink)]"></span>
          about
        </p>
        <h1
          className="text-[clamp(40px,8vw,72px)] font-medium leading-[0.95] mb-6"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.035em" }}
        >
          eidolux<span className="text-[var(--color-rust)]">.</span>
        </h1>
        <p className="text-[15px] leading-[1.7] text-[var(--color-stone)] max-w-[620px]">
          This page will become its own project — a standalone repo with custom interactions.
        </p>
      </section>

      <section className="border-t border-[var(--color-ink)] pt-10 pb-24">
        <p className="text-[15px] leading-[1.75] max-w-[620px]">
          <span className="font-medium" style={{ fontFamily: "var(--font-display)" }}>
            Eidolux
          </span>
          <span className="text-[var(--color-stone)]"> · 批判理论 + prompt 工程</span>
        </p>
        <p className="text-[13px] text-[var(--color-stone)] mt-6">
          ← 这里将来是一个完整的交互式自我介绍
        </p>
      </section>
    </div>
  );
}
