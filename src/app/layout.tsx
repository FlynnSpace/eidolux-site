import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "eidolux",
  description: "Personal shell — projects, knowledge, experiments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col antialiased">
        <Nav />
        <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-8">
          {children}
        </main>
        <footer className="w-full max-w-5xl mx-auto px-6 py-6 border-t border-[var(--color-border)] text-sm text-[var(--color-ink-muted)]">
          <div className="flex items-center justify-between">
            <span>eidolux</span>
            <div className="flex gap-4">
              <a
                href="https://github.com/eidolux"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-ink)] transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
