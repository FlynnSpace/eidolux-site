# eidolux-site — Agent 入口

个人站点 Shell，对标 [christopherigweze.com](https://www.christopherigweze.com/) 的视觉体系。

## 必读文件（按优先级）

| 文件 | 内容 | 何时读 |
|------|------|--------|
| `DESIGN.md` | 视觉硬约束：颜色、字体、间距、首页精确数值 | 任何 UI/样式改动前 |
| `CONTEXT.md` | 领域术语表：Shell、Product、Section、OreVault mirror 等 | 讨论功能 / 新增概念时 |
| `docs/adr/` | 4 个架构决策记录 | 挑战已有决策或新增决策时 |
| `content/products.yaml` | 首页产品注册表（now / shipped 两层） | 增删项目展示时 |

## 技术栈

- Next.js 16 + Turbopack
- Tailwind CSS（无自定义 config，全用 arbitrary values 对齐 DESIGN.md）
- TypeScript strict
- 字体：Inter（display）+ JetBrains Mono（body）via Google Fonts `<link>`
- 数据：`products.yaml`（本地 YAML）+ GitHub API（OreVault tree，需 `GITHUB_TOKEN`）

## 关键架构

```
src/
├── app/
│   ├── page.tsx          ← 首页三段式（currently building / thinking / trajectory）
│   ├── orevault/page.tsx ← GitHub API 拉取真实 vault 文件树
│   ├── about/page.tsx    ← 占位，未来独立 repo
│   └── archive/page.tsx  ← 占位，未来 gated content
├── components/
│   ├── nav.tsx
│   ├── product-card.tsx
│   └── file-tree.tsx     ← client component，可折叠文件树
├── lib/
│   ├── products.ts       ← 读 products.yaml
│   ├── orevault.ts       ← GitHub API fetch + tree builder
│   └── orevault-mock.ts  ← 无 token 时的 fallback
└── content/
    └── products.yaml
```

## 约束

- 所有样式数值必须能追溯到 `DESIGN.md` 中的表格
- 不引入第六种颜色、第三种字体
- `AGENTS.md` 由 Next.js 自动生成，不要手动编辑
- `.env.local` 含 `GITHUB_TOKEN`，不提交
- OreVault mirror 只展示结构和标题，**不展示正文**
