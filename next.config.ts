import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  
  // TypeScript এরর ইগনোর করার জন্য
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;