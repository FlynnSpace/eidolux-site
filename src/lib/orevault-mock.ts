export interface VaultNode {
  name: string;
  type: "folder" | "file";
  children?: VaultNode[];
}

export interface VaultStats {
  totalNotes: number;
  totalWords: number;
  lastUpdated: string;
}

export function getMockVaultTree(): VaultNode[] {
  return [
    {
      name: "05-Raw",
      type: "folder",
      children: [
        { name: "Bilibili", type: "folder", children: [
          { name: "B站 - 实体行业做toB不是抽象吗 @凶残CEO麟西", type: "file" },
          { name: "B站 - 商机到底在哪 @凶残CEO麟西", type: "file" },
          { name: "B站 - 是否适合做品牌 @凶残CEO麟西", type: "file" },
        ]},
        { name: "WeChat-Articles", type: "folder", children: [
          { name: "微信 - 罗伯特格林谈使命与创造力", type: "file" },
        ]},
        { name: "Articles", type: "folder", children: [
          { name: "六层提示词递进体系 @Sabrina Ramonov", type: "file" },
        ]},
      ],
    },
    {
      name: "10-Sources",
      type: "folder",
      children: [
        { name: "GitHub-Projects", type: "folder", children: [
          { name: "GitHub - Hyperframes HTML视频渲染框架 @HeyGen", type: "file" },
        ]},
        { name: "Bilibili", type: "folder", children: [
          { name: "B站 - 实体行业做toB不是抽象吗 @凶残CEO麟西", type: "file" },
        ]},
        { name: "Articles", type: "folder", children: [
          { name: "Browser - 前端审美参考网站合集", type: "file" },
        ]},
      ],
    },
    {
      name: "20-Notes",
      type: "folder",
      children: [
        { name: "创作主权 = 谁注入知识谁拥有作者性", type: "file" },
        { name: "AI效率的熵增悖论 确定性推导与不可控演绎", type: "file" },
        { name: "校验即教学 用约束代替默认值教Agent思考", type: "file" },
        { name: "AI熵增定律v2 创作主权与产品的光谱定位", type: "file" },
      ],
    },
    {
      name: "30-Projects",
      type: "folder",
      children: [
        { name: "技术时代的人文自媒体", type: "file" },
        { name: "AI视频创作Agent产品", type: "folder", children: [
          { name: "产品定位与架构 v2", type: "file" },
          { name: "交互架构 · 卡牌体系与多视图", type: "file" },
        ]},
        { name: "个人网站", type: "folder", children: [
          { name: "CONTEXT", type: "file" },
        ]},
      ],
    },
    {
      name: "40-Areas",
      type: "folder",
      children: [
        { name: "健身", type: "folder", children: [] },
        { name: "自我认知", type: "folder", children: [] },
      ],
    },
    {
      name: "Daily",
      type: "folder",
      children: [],
    },
  ];
}

export function getMockVaultStats(): VaultStats {
  return {
    totalNotes: 147,
    totalWords: 284_600,
    lastUpdated: "2026-08-24",
  };
}
