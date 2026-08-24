import { getVaultData } from "@/lib/orevault";
import { FileTree } from "@/components/file-tree";

export const revalidate = 3600;

export default async function OreVaultPage() {
  const { tree, stats } = await getVaultData();

  return (
    <div>
      <section className="pt-24 pb-16">
        <p
          className="text-[11px] font-bold uppercase text-[var(--color-stone)] flex items-center gap-3.5 mb-7"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "0.16em" }}
        >
          <span className="inline-block w-6 h-px bg-[var(--color-ink)]"></span>
          knowledge vault
        </p>
        <h1
          className="text-[clamp(40px,8vw,72px)] font-medium leading-[0.95] mb-6"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.035em" }}
        >
          orevault<span className="text-[var(--color-rust)]">.</span>
        </h1>
        <p className="text-[15px] leading-[1.7] text-[var(--color-stone)] max-w-[620px] mb-10">
          个人知识库 · 文件夹结构与笔记标题一览
        </p>
        <div className="flex gap-10 text-sm">
          <Stat label="notes" value={stats.totalNotes.toString()} />
          <Stat label="words" value={formatNumber(stats.totalWords)} />
          <Stat label="updated" value={stats.lastUpdated} />
        </div>
      </section>

      <section className="border-t border-[var(--color-ink)] pt-8 pb-24">
        <FileTree nodes={tree} />
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span
        className="text-[11px] font-bold uppercase text-[var(--color-stone)]"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "0.14em" }}
      >
        {label}
      </span>
      <span className="font-medium text-base">{value}</span>
    </div>
  );
}

function formatNumber(n: number): string {
  if (n >= 10000) return `${(n / 10000).toFixed(1)}万`;
  return n.toLocaleString("zh-CN");
}
