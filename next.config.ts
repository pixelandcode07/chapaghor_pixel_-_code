// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,

//   // TypeScript এরর ইগনোর করার জন্য
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig; // Use `module.exports = nextConfig;` if you are using older CommonJS