import { readFileSync } from "fs";
import { join } from "path";
import { parse } from "yaml";

export interface Product {
  slug: string;
  repo: string | null;
  mode: "live" | "static" | "link-only";
  desc: string;
  route?: string;
  status: string;
}

interface ProductsFile {
  products: {
    now: Product[];
    shipped: Product[];
  };
}

export function getProducts(): { now: Product[]; shipped: Product[] } {
  const filePath = join(process.cwd(), "content", "products.yaml");
  const raw = readFileSync(filePath, "utf-8");
  const data = parse(raw) as ProductsFile;
  return data.products;
}
