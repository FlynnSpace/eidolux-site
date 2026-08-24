export default function AboutPage() {
  return (
    <div className="max-w-lg">
      <h1 className="font-mono text-2xl font-bold mb-3">About</h1>
      <p className="text-[var(--color-ink-muted)] text-sm mb-6">
        This page will become its own project — a standalone repo with custom interactions.
      </p>
      <div className="border border-dashed border-[var(--color-border)] rounded-[var(--radius-lg)] p-8 text-center text-sm text-[var(--color-ink-muted)]">
        <p className="font-mono mb-2">eidolux</p>
        <p>批判理论 + prompt 工程</p>
        <p className="mt-4 text-xs">
          ← 这里将来是一个完整的交互式自我介绍
        </p>
      </div>
    </div>
  );
}
