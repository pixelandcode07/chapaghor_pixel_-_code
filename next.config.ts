

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.unsplash.com'],
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

<<<<<<< HEAD
export default nextConfig; // Use `module.exports = nextConfig;` if you are using older CommonJS
=======
export default nextConfig; 
>>>>>>> ea5595f4e292ff54fe83a5712be3a2946111c541
