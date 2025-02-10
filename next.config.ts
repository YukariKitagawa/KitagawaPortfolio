import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/YukariPortfolio" : "",
  basePath: process.env.NODE_ENV === "production" ? "/YukariPortfolio" : "",
}

export default nextConfig
