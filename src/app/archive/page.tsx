export default function ArchivePage() {
  return (
    <div>
      <section className="pt-24 pb-16">
        <p
          className="text-[11px] font-bold uppercase text-[var(--color-stone)] flex items-center gap-3.5 mb-7"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "0.16em" }}
        >
          <span className="inline-block w-6 h-px bg-[var(--color-ink)]"></span>
          gated content
        </p>
        <h1
          className="text-[clamp(40px,8vw,72px)] font-medium leading-[0.95] mb-6"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.035em" }}
        >
          archive<span className="text-[var(--color-rust)]">.</span>
        </h1>
        <p className="text-[15px] leading-[1.7] text-[var(--color-stone)] max-w-[620px]">
          知识库正文将通过密码访问开放。Coming soon.
        </p>
      </section>

      <section className="border-t border-[var(--color-ink)] pt-10 pb-24">
        <div className="max-w-[260px]">
          <input
            type="password"
            placeholder="access code"
            disabled
            className="w-full px-3 py-2.5 rounded-[2px] border border-[var(--color-ink)] bg-[var(--color-paper)] text-sm cursor-not-allowed text-[var(--color-stone)]"
          />
        </div>
      </section>
    </div>
  );
}
