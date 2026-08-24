# 首页三段式 + NOW/SHIPPED 分层

首页固定三个编号 section：`1. currently building`、`2. thinking`、`3. trajectory`。Section 1 内部用 NOW/SHIPPED label 区分进行中大系统与已完成小 demo，不另建独立 section。

理由：小 demo 和独立网页是完成品但不是「正在 build 的系统」，需要区分但不值得独占一个 section；三段式（做/想/去哪）已覆盖全部输出类型，加第四段会稀释节奏。

**Considered Options**: 加 `fragments` 第四 section；把小 demo 混入 NOW 不分层；单独建 `/lab` 页。前者破坏三段节奏；中者大小项混杂；后者违背 Shell 模型（每个实验是独立 Product，不需要聚合页）。

**Consequences**: `products.yaml` 从 flat list 改为 `now` + `shipped` 两组；shipped 为空时该 label 不渲染；未来新增小 demo 只需往 `shipped` 追加条目。
