import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/KitagawaPortfolio" : "",
  basePath: process.env.NODE_ENV === "production" ? "/KitagawaPortfolio" : "",
}

export default nextConfig
