# Eidolux — Design Constraints

本文件是视觉层的硬约束，等同于代码层的 lint 规则。所有 UI 改动必须通过本文件的检查。

**视觉对标**：[christopherigweze.com](https://www.christopherigweze.com/)
源文件缓存在 `/tmp/igweze.html`（HTML）和 `/tmp/igweze.css`（完整样式表），可随时重新 curl 获取。

## Color Tokens（仅此 5 色）

| Token | Hex | 用途 |
|-------|-----|------|
| `--color-paper` | `#f0ede6` | 背景（原站 `--paper`） |
| `--color-paper-light` | `#e6e3dc` | 次级背景、hover |
| `--color-ink` | `#1c1c1a` | 正文、标题 |
| `--color-stone` | `#7a756d` | 辅助文字、标签、边框 |
| `--color-rust` | `#9b6a47` | 唯一 accent（原站 `--rust`），句号、hover |

禁止引入第六种颜色。如需区分路由氛围，仅调整 `--color-rust` 的色相偏移，不新增 token。

## Typography（仅此 2 字体）

| CSS 变量 | 字体 | 用途 |
|----------|------|------|
| `--font-display` / `--font-sans` | **Inter** | 标题、section label、nav logo、stamp |
| `--font-body` / `--font-mono` | **JetBrains Mono** | 正文段落、描述、nav 链接、footer |

字重仅用 `400`（regular）、`500`（medium）、`700`（bold，仅 stamp/section label）。

## 首页 Hero 精确数值（源自原站 CSS）

| 元素 | 属性 | 值 |
|------|------|-----|
| `.pf-hero` 容器 | padding | `96px 0 104px` |
| `.pf-hero` 容器 | gap | `28px` |
| `.pf-hero` 容器 | max-width | `1100px` |
| stamp（label） | font-family | `var(--font-sans)` (Inter) |
| stamp | font-size | `11px` |
| stamp | font-weight | `700` |
| stamp | letter-spacing | `0.16em` |
| stamp | text-transform | `uppercase` |
| stamp 横线 | width × height | `24px × 1px`，颜色 `var(--ink)` |
| **h1 标题** | font-size | **`clamp(96px, 13vw, 176px)`** |
| h1 | font-weight | `500` |
| h1 | letter-spacing | `-0.045em` |
| h1 | line-height | `0.9` |
| h1 | font-family | `var(--font-sans)` (Inter) |
| h1 句号 | color | `var(--rust)` |
| lede（简介段） | font-family | `var(--font-mono)` (JetBrains Mono) |
| lede | font-size | `17px` |
| lede | line-height | `1.7` |
| lede | max-width | `620px` |
| sub（个签） | font-size | `15px` |
| sub | color | `var(--stone)` |
| sub | max-width | `620px` |

### 移动端覆盖（≤640px）

| 属性 | 值 |
|------|-----|
| hero padding | `40px 0 56px` |
| h1 font-size | `clamp(56px, 16vw, 88px)` |
| h1 letter-spacing | `-0.04em` |
| h1 line-height | `0.95` |
| stamp font-size | `10px` |
| stamp 横线 | `18px` |
| lede font-size | `15px` |
| lede max-width | `100%` |

## Section 系统精确数值

| 元素 | 属性 | 值 |
|------|------|-----|
| `.pf-section-head` | border-top | `0.5px solid var(--ink)` |
| `.pf-section-head` | padding | `28px 0 20px` |
| `.pf-section-head` | display | `flex`, `justify-content: space-between`, `align-items: baseline` |
| section title (`.pf-anchor`) | font-family | `var(--font-sans)` |
| section title | font-size | `24px` |
| section title | font-weight | `700` |
| section title | letter-spacing | `-0.02em` |
| section meta（右侧） | font-family | `var(--font-mono)` |
| section meta | font-size | `12px` |
| section meta | color | `var(--stone)` |

### Currently Building 列表

| 元素 | 属性 | 值 |
|------|------|-----|
| label（now / shipped） | font-family | `var(--font-sans)` |
| label | font-size | `11px` |
| label | font-weight | `700` |
| label | letter-spacing | `0.14em` |
| label | text-transform | `uppercase` |
| list item | display | `flex`, 两端对齐 |
| `.cb-name`（项目名） | font-family | `var(--font-sans)` |
| `.cb-name` | font-size | 默认继承（~17px） |
| `.cb-name` | font-weight | 继承（medium） |
| `.cb-desc`（描述） | font-family | `var(--font-mono)` |
| `.cb-desc` | font-size | 继承 |
| `.cb-status` | font-family | `var(--font-mono)` |
| `.cb-status` | font-size | `12px` |
| `.cb-status` | color | `var(--stone)` |

## Shell 容器

| 属性 | 值 |
|------|-----|
| max-width | `1320px` |
| padding | `0 72px` |
| margin | `0 auto` |

移动端（≤900px）：padding `0 32px`；≤640px：`0 24px`；≤400px：`0 18px`。

## Spacing

基于 `4px` 倍数：4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 72, 80, 96, 104。

## 禁止清单（Do Not）

| 禁止 | 理由 |
|------|------|
| 卡片阴影（box-shadow） | 用边框和留白分隔层级 |
| 渐变（gradient） | 扁平 > 立体 |
| 圆角 > 4px | 克制感；2px 或 4px only |
| 悬浮动画 > 150ms | 快且不引人注目 |
| 彩色 icon / emoji | 单色 ink 或 stone |
| 全宽占满 | 内容列左对齐，右侧留白是品牌的一部分 |
| em-dash（—）在正文中 | 用逗号或句号重写 |
| 大写标题（全大写 heading） | 只 section label 可以 uppercase tracking |
| 背景图 / 纹理 | paper 色即背景 |
| border-radius 在 hero/section 级元素 | 原站全零 |

## Layout

- shell 容器 `max-width: 1320px`，水平 padding `72px`
- 正文段落 max-width `620px`（lede）或 `720px`（entry body），左对齐
- 导航：logo 左 + 链接右，单行，链接 `14px` JetBrains Mono
- Footer：`border-top 0.5px solid var(--ink)`，padding `28px 0 56px`
- 右侧留白是有意的，不是空的 layout

## Homepage Structure

首页固定三段式，编号不可省略：

```
1. currently building    [NOW / SHIPPED 分层]
2. thinking              [vault 精选概念 teaser]
3. trajectory            [方向 / 探索]
```

- 每段 header 用 `border-top 0.5px solid var(--ink)` 分隔
- section title: Inter `24px` bold，letter-spacing `-0.02em`
- 右侧 meta: JetBrains Mono `12px` stone
- NOW/SHIPPED 是 section 1 内部的 label，不是独立 section
- Section 2/3 v1 为占位文案，后续接真实数据

## Voice Rules（文案）

- 小写作为气质：slug、导航项可全小写
- 正文 sentence case，始终大写 I、专有名词
- 个签保留原样大写（The UNIVERSE is under no obligation to make sense to you.）
- 简洁 > 修饰；一句能说完不写两句

## 源文件引用

后续如需重新校准，可直接 curl 原站：

```bash
curl -s "https://www.christopherigweze.com/" -o /tmp/igweze.html
curl -s "https://www.christopherigweze.com/_next/static/chunks/0rd04y8q80.d6.css" -o /tmp/igweze.css
```

CSS 文件中关键 class 名：

- Hero: `.pf-hero`, `.pf-hero-stamp`, `.pf-hero-title`, `.pf-hero-dot`, `.pf-hero-lede`, `.pf-hero-sub`
- Section: `.pf-section-head`, `.pf-anchor`, `.pf-section-meta`
- Currently: `.pf-currently`, `.pf-currently-label`, `.pf-currently-list`, `.cb-name`, `.cb-desc`, `.cb-status`
- Work entries: `.pf-entry`, `.pf-entry-head`, `.pf-entry-num`, `.pf-entry-name`, `.pf-entry-body`
- Nav: `.pf-nav`, `.pf-brand`, `.pf-links`, `.pf-link`
- Footer: `.pf-footer`, `.pf-footer-l`, `.pf-footer-r`
- Shell: `.pf-shell`

注意：CSS 路径中的 hash 段可能随部署更新，HTML 中 `<link rel="stylesheet">` 的 href 始终指向最新版。

## Enforcement

后续如接入 pre-commit 或 lint 脚本，应检查：
- 无 off-palette hex code 出现在 CSS/TSX
- 无未授权字体 font-family
- 无 box-shadow、linear-gradient
- border-radius 值 ≤ 4px
- h1 font-size 必须使用 clamp() 响应式写法
