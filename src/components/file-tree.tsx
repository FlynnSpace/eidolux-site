"use client";

import { useState } from "react";
import type { VaultNode } from "@/lib/orevault-mock";

export function FileTree({ nodes }: { nodes: VaultNode[] }) {
  return (
    <ul className="font-mono text-sm space-y-px">
      {nodes.map((node) => (
        <TreeNode key={node.name} node={node} depth={0} />
      ))}
    </ul>
  );
}

function TreeNode({ node, depth }: { node: VaultNode; depth: number }) {
  const [expanded, setExpanded] = useState(depth < 1);
  const isFolder = node.type === "folder";
  const hasChildren = isFolder && node.children && node.children.length > 0;

  return (
    <li>
      <button
        onClick={() => isFolder && setExpanded(!expanded)}
        className={`flex items-center gap-2 w-full text-left px-2 py-1.5 rounded-[2px] hover:bg-[var(--color-paper-light)] transition-colors duration-120 ${
          isFolder ? "cursor-pointer" : "cursor-default"
        }`}
        style={{ paddingLeft: `${depth * 1.25 + 0.5}rem` }}
        disabled={!isFolder}
      >
        <span className="w-3 text-center text-[var(--color-stone)] text-xs">
          {isFolder ? (expanded ? "▾" : "▸") : "·"}
        </span>
        <span className={isFolder ? "font-medium text-[var(--color-ink)]" : "text-[var(--color-stone)]"}>
          {node.name}
        </span>
        {isFolder && node.children && (
          <span className="text-xs text-[var(--color-stone)] ml-auto">
            {node.children.length}
          </span>
        )}
      </button>
      {isFolder && expanded && hasChildren && (
        <ul className="space-y-px">
          {node.children!.map((child) => (
            <TreeNode key={child.name} node={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}
