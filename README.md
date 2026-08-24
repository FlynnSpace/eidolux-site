# eidolux-site

Personal shell — a sitemap of GitHub projects, knowledge vault, and experiments.

## Stack

- Next.js 16 + TypeScript
- Tailwind CSS 4
- `content/products.yaml` as product registry

## Routes (v1 scaffold)

| Route | Purpose |
|-------|---------|
| `/` | Product card grid |
| `/orevault` | Vault file tree + stats (mock data, no content) |
| `/archive` | Gated archive placeholder (coming soon) |
| `/about` | Intro placeholder |

## Development

```bash
pnpm dev
```

## Design

Unified spine (nav, font, spacing tokens) + per-route accent via CSS variables.
See `src/app/globals.css` for the token system.
