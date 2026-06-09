import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/SmartWeb",
  assetPrefix: "/SmartWeb",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
