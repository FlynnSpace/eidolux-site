# Shell 作为 GitHub 子项目 Sitemap，非内容站

主站不是文章站或 portfolio 模板站，而是 **Shell + Product 注册表**：每个 Product 对应私有 GitHub 仓库（OreVault、视频 Agent、独立小页等），各有独立前端。Shell 负责统一导航、设计脊柱，以及从 GitHub 同步 OreVault 的**文件夹结构 + 标题 + 总字数 + 最近更新**（无正文）。无法公网常驻运行的子项（如视频 Agent）用 Static showcase；能只读展示的（OreVault mirror）用 Live demo。Gated archive 仅占位，正文访问留 v2。

**Considered Options**: 传统 `/writing` + `/projects` + `/lab` 内容站 IA；OreVault MDX 全量导出。前者与「子项目各管各的前端」不符；后者与「正文不公开、仅 GitHub 元数据同步」冲突。

**Consequences**: Product 清单需维护（registry）；OreVault 展示依赖 GitHub API/文件树解析，非 Obsidian 直连；`/about` 长期也应拆成独立 repo，v1 可占位。
