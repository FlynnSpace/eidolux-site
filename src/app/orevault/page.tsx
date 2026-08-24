import { getMockVaultTree, getMockVaultStats } from "@/lib/orevault-mock";
import { FileTree } from "@/components/file-tree";

export default function OreVaultPage() {
  const tree = getMockVaultTree();
  const stats = getMockVaultStats();

  return (
    <div data-route="orevault">
      <section className="mb-8">
        <h1 className="font-mono text-2xl font-bold mb-2">OreVault</h1>
        <p className="text-[var(--color-ink-muted)] text-sm mb-6">
          个人知识库 · Obsidian Vault — 文件夹结构与笔记标题一览（正文不公开）
        </p>
        <div className="flex gap-6 text-sm">
          <Stat label="笔记" value={stats.totalNotes.toString()} />
          <Stat label="总字数" value={formatNumber(stats.totalWords)} />
          <Stat label="最近更新" value={stats.lastUpdated} />
        </div>
      </section>

      <section className="border border-[var(--color-border)] rounded-[var(--radius-lg)] p-4 bg-[var(--color-surface)]">
        <FileTree nodes={tree} />
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[var(--color-ink-muted)] text-xs uppercase tracking-wider">
        {label}
      </span>
      <span className="font-mono font-medium text-base">{value}</span>
    </div>
  );
}

function formatNumber(n: number): string {
  if (n >= 10000) return `${(n / 10000).toFixed(1)}万`;
  return n.toLocaleString("zh-CN");
}
