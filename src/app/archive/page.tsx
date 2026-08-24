export default function ArchivePage() {
  return (
    <div data-route="archive" className="flex flex-col items-center justify-center min-h-[50vh]">
      <div className="text-center max-w-md">
        <h1 className="font-mono text-2xl font-bold mb-3">Archive</h1>
        <p className="text-[var(--color-ink-muted)] text-sm mb-8">
          Content archive — coming soon.
          <br />
          知识库正文将通过密码访问开放。
        </p>
        <div className="flex flex-col gap-2 w-64 mx-auto">
          <input
            type="password"
            placeholder="Enter access code"
            disabled
            className="w-full px-4 py-2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-sm font-mono opacity-50 cursor-not-allowed"
          />
          <button
            disabled
            className="w-full px-4 py-2 rounded-[var(--radius-md)] bg-[var(--color-accent)] text-white text-sm font-medium opacity-30 cursor-not-allowed"
          >
            Unlock
          </button>
        </div>
      </div>
    </div>
  );
}
