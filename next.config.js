/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },

  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  },
};

module.exports = nextConfig;
