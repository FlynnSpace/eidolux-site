# 个人网站（eidolux）

eidolux 的个人站点 Shell：作为 GitHub 私有仓库群的前端入口与 Sitemap，聚合各子项目的展示、跳转与（对 OreVault）只读结构镜像。v1 搭架子；唯一可立刻「看见效果」的子项是知识库结构镜像。

## Language

**Shell（壳）**:
主站 Next.js 应用，负责 Sitemap、统一导航、设计脊柱，以及从 GitHub 拉取各子项目元数据。不是内容仓库本身。
_Avoid_: 中枢, 主站（口语）

**Product（子项目）**:
Shell Sitemap 上的一条目，对应一个（通常私有的）GitHub 仓库，例如 OreVault、视频创作 Agent、独立小功能页。各有自己的前端与交互，可独立部署。
_Avoid_: 项目（与 GitHub repo 混称）, Lab

**Live demo（可运行展示）**:
访客在 Shell 内能直接体验子项目 UI 或只读视图，无需本地起服务。
_Avoid_: 在线版

**Static showcase（静态展示）**:
无法长期托管运行时的子项目卡片：README 摘要、截图、GitHub 链接、状态说明（如「无公网 demo」）。
_Avoid_: 占位

**OreVault mirror（知识库镜像）**:
直接从私有 OreVault repo main 分支同步文件夹结构与笔记标题（及总字数、最近更新时间），不展示正文。v1 唯一预期有可见效果的 Product。数据源：GitHub API / sparse-checkout，构建时拉取。
_Avoid_: 知识库同步, vault 全量, 另建 mirror repo

**Product registry（子项目注册表）**:
Shell 仓库内的 `products.yaml`，手写维护。分两层：`now`（进行中大系统）和 `shipped`（已完成小 demo / 独立网页）。每条含 slug、repo URL、展示模式、描述段落、状态标签。
_Avoid_: 自动扫描, 硬编码

**Section（首页分区）**:
首页按编号分三段，顺序固定：`1. currently building`（NOW + SHIPPED 两层）→ `2. thinking`（vault 精选概念 teaser）→ `3. trajectory`（方向与探索）。不增不减，除非内容性质真正超出三段覆盖范围。
_Avoid_: 无编号分区, 随意加 section

**Gated archive（受控档案）**:
未来通过密码/令牌访问的正文区；v1 仅占位页（coming soon）。与 OreVault mirror 的 teaser 分离。
_Avoid_: 会员区, 私密博客

**Design spine（设计脊柱）**:
全 Shell 共享的导航、字体、间距 token；各 Product 路由/卡片层仅改 accent 与局部交互皮肤。
_Avoid_: 主题

**Intro product（简介子项目）**:
`/about` 的长期目标形态——也应是独立 GitHub 仓库 + 自有前端；v1 用 Shell 内占位，不阻塞上线。
_Avoid_: 关于页

**Visitor（访客）**:
主序：读者/同好 → 自媒体观众 → 潜在合作方。
_Avoid_: 用户

**Site identity（站点身份）**:
eidolux；尚无独立频道品牌名。

## 刻意不再使用

**Lab experiment**: 曾提议的独立实验区。当前模型下，前端交互尝试 = 独立小功能网页 Product，不必单独 `/lab` 路由。
_Avoid_: 实验场, playground 路由

**全站 AI 助手**: v1 砍掉；无公开 corpus，维护成本高于 v1 价值。
_Avoid_: 聊天机器人

**外链聚合页**: v1 不做独立 `/links`。
_Avoid_: link-in-bio 页
