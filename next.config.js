/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.fransium.com', 'images.unsplash.com', 'res.cloudinary.com'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
