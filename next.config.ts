import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubActions ? "/SmartWeb" : "",
  assetPrefix: isGitHubActions ? "/SmartWeb" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
