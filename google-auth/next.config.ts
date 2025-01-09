/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true, // Enable server actions
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  }
};

module.exports = nextConfig;