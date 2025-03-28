import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    nodeMiddleware: true,
    ppr: true,
  },
};

export default nextConfig;
