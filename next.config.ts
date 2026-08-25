import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/eidolux-site",
  images: { unoptimized: true },
};

export default nextConfig;
