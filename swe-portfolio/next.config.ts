import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.imgur.com',
        port: '',
        search: ''
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        search: ''
      }
    ]
  }
};

export default nextConfig;
