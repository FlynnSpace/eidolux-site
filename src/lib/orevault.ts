/**
 * Fetches OreVault structure from GitHub API at build time.
 * Falls back to mock data when GITHUB_TOKEN is unavailable.
 */

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

const OWNER = "FlynnSpace";
const REPO = "OreVault";
const BRANCH = "master";

const VISIBLE_ROOTS = new Set([
  "05-Raw",
  "10-Sources",
  "20-Notes",
  "30-Projects",
  "40-Areas",
  "Daily",
]);

const HIDDEN_PATHS = new Set([
  "AGENTS.md",
  "HOME.md",
  "log.md",
  ".gitignore",
]);

interface GitHubTreeItem {
  path: string;
  mode: string;
  type: "blob" | "tree";
  sha: string;
  size?: number;
}

interface GitHubTreeResponse {
  sha: string;
  tree: GitHubTreeItem[];
  truncated: boolean;
}

interface GitHubCommit {
  sha: string;
  commit: {
    committer: {
      date: string;
    };
  };
}

async function githubFetch<T>(endpoint: string): Promise<T> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error("GITHUB_TOKEN not set");

  const res = await fetch(`https://api.github.com${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
  }

  return res.json() as Promise<T>;
}

function buildTree(items: GitHubTreeItem[]): VaultNode[] {
  const root: Map<string, VaultNode> = new Map();

  const filtered = items.filter((item) => {
    const topDir = item.path.split("/")[0];
    if (!VISIBLE_ROOTS.has(topDir)) return false;
    if (HIDDEN_PATHS.has(item.path)) return false;
    if (item.type === "blob" && !item.path.endsWith(".md")) return false;
    return true;
  });

  const folderMap = new Map<string, VaultNode>();

  for (const topDir of VISIBLE_ROOTS) {
    const node: VaultNode = { name: topDir, type: "folder", children: [] };
    root.set(topDir, node);
    folderMap.set(topDir, node);
  }

  const sortedItems = [...filtered].sort((a, b) =>
    a.path.localeCompare(b.path)
  );

  for (const item of sortedItems) {
    const parts = item.path.split("/");
    if (parts.length === 1) continue;

    const parentPath = parts.slice(0, -1).join("/");
    const name = parts[parts.length - 1].replace(/\.md$/, "");

    let parent = folderMap.get(parentPath);
    if (!parent) {
      // Build intermediate folders
      let current = "";
      for (let i = 0; i < parts.length - 1; i++) {
        const prev = current;
        current = current ? `${current}/${parts[i]}` : parts[i];
        if (!folderMap.has(current)) {
          const folder: VaultNode = {
            name: parts[i],
            type: "folder",
            children: [],
          };
          folderMap.set(current, folder);
          const p = folderMap.get(prev);
          if (p && p.children) {
            p.children.push(folder);
          }
        }
      }
      parent = folderMap.get(parentPath);
    }

    if (!parent) continue;

    if (item.type === "tree") {
      const folder: VaultNode = { name, type: "folder", children: [] };
      folderMap.set(item.path, folder);
      parent.children!.push(folder);
    } else {
      parent.children!.push({ name, type: "file" });
    }
  }

  return Array.from(root.values()).filter(
    (node) => node.children && node.children.length > 0
  );
}

function countNotes(items: GitHubTreeItem[]): number {
  return items.filter((item) => {
    if (item.type !== "blob") return false;
    if (!item.path.endsWith(".md")) return false;
    const topDir = item.path.split("/")[0];
    return VISIBLE_ROOTS.has(topDir);
  }).length;
}

function estimateWords(items: GitHubTreeItem[]): number {
  const totalBytes = items
    .filter((item) => {
      if (item.type !== "blob") return false;
      if (!item.path.endsWith(".md")) return false;
      const topDir = item.path.split("/")[0];
      return VISIBLE_ROOTS.has(topDir);
    })
    .reduce((sum, item) => sum + (item.size ?? 0), 0);

  // Chinese UTF-8: ~3 bytes/char; subtract ~35% for frontmatter/links/syntax
  return Math.round((totalBytes * 0.65) / 3);
}

export async function getVaultData(): Promise<{
  tree: VaultNode[];
  stats: VaultStats;
}> {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    // Fallback: import mock
    const { getMockVaultTree, getMockVaultStats } = await import(
      "./orevault-mock"
    );
    return { tree: getMockVaultTree(), stats: getMockVaultStats() };
  }

  const [treeRes, commits] = await Promise.all([
    githubFetch<GitHubTreeResponse>(
      `/repos/${OWNER}/${REPO}/git/trees/${BRANCH}?recursive=1`
    ),
    githubFetch<GitHubCommit[]>(
      `/repos/${OWNER}/${REPO}/commits?sha=${BRANCH}&per_page=1`
    ),
  ]);

  const tree = buildTree(treeRes.tree);
  const totalNotes = countNotes(treeRes.tree);
  const totalWords = estimateWords(treeRes.tree);
  const lastUpdated = commits[0]?.commit.committer.date.slice(0, 10) ?? "unknown";

  return {
    tree,
    stats: { totalNotes, totalWords, lastUpdated },
  };
}
