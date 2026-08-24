import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eidolux",
  description: "Personal shell — projects, knowledge, experiments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <div className="min-h-screen flex flex-col">
          <Nav />
          <main className="flex-1 w-full max-w-[1320px] mx-auto px-[72px] py-0">
            {children}
          </main>
          <footer className="w-full max-w-[1320px] mx-auto px-[72px] py-8 border-t border-[var(--color-ink)] text-[11px] text-[var(--color-stone)]">
            <div className="flex items-center justify-between">
              <span className="font-mono">Eidolux</span>
              <a
                href="https://github.com/eidolux"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
