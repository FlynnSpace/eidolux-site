# 子项目注册表用手写 YAML，不做自动扫描

Shell 通过仓库内 `products.yaml` 管理子项目清单（slug、repo、展示模式、描述等）。Product 数量短期个位数，YAML 可控且审计友好。不使用 GitHub Org 扫描（过度工程、权限复杂）或硬编码（改动需改代码）。

**Consequences**: 新增 Product 需手动编辑 YAML 并提交；展示模式字段区分 `live`（OreVault mirror）/ `static`（README 摘要）/ `link-only`（仅 GitHub 链接）。
