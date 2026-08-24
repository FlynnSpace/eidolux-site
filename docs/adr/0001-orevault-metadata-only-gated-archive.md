# OreVault 只同步元数据，正文走受控档案

v1 不公开 OreVault 笔记正文。公开面只展示从 vault 拉取的标题与宏观指标（teaser）；完整内容留给未来的 Gated archive（密码/令牌访问）。这样 personal site 与私人知识库生命周期分离，避免 processed 笔记误公开，也为后续「精选/password 解锁」留口子而不必重构数据层。

**Considered Options**: 全量 MDX 导出到 public repo；手写独立内容源与 vault 脱钩。前者泄露风险高且与 vault 编辑流冲突；后者 v1 维护两套内容不划算。

**Consequences**: v1 无 AI 助手（无公开 corpus）；`/writing` 只能是空壳或 hand-curated 占位；Gated archive 需单独 auth 与内容管道，不能假设「sync 即发布」。
