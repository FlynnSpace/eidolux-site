# GitHub Pages 静态部署 + 自定义域名 eidolux.party

全站（eidolux-site 及子项目 unprompted）使用 GitHub Pages 部署，Next.js 配置 `output: "export"` 生成纯静态文件。域名 `eidolux.party` 通过 Namesilo 注册（支付宝付款），DNS A 记录指向 GitHub Pages IP。

OreVault 私有仓库 push 时通过 `repository_dispatch` 触发 eidolux-site 重建，使知识库镜像数据在无人干预下保持最新。GitHub API 请求在构建时执行，token 存于 repo secrets；请求失败时 fallback 到 mock 数据，不阻塞部署。

**Considered Options**:

- **Vercel**: Next.js 原生最优解，零配置 ISR。放弃原因：账号二次验证密码丢失，CLI 不可用；免费版 Private repo 也可用但当前无法登录。
- **Cloudflare Pages**: 尝试过，构建系统默认用 `opennextjs-cloudflare` 适配器导致配置复杂，Dashboard 交互繁琐，最终放弃。
- **GitHub Pages + 静态导出**: 零配置（Actions workflow 即全部），生态内闭环（触发重建也是 Actions），免费且无带宽焦虑。代价是放弃 ISR（数据只在构建时更新），但 OreVault 变更频率低（日均 < 2 次 push），rebuild trigger 足以覆盖。

**域名选择**：`eidolux.com` / `.dev` / `.space` / `.page` 均被注册；`.io` 可用但贵（$33/年）；`.party` 在 Namesilo 可用且便宜，气质契合个人实验站调性。

**Consequences**:

- 子项目默认也用 GitHub Pages 部署（如 unprompted），保持统一。
- 仓库必须 public 才能免费使用 GitHub Pages（已改为 public，无安全顾虑）。
- `next.config.ts` 不设 `basePath`（自定义域名直接映射根路径）。
- OreVault 的 dispatch token 需要 `contents: write` 权限才能触发 `repository_dispatch`；当前降级为手动 push 触发，待 token 权限补齐后自动生效。
