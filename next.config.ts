import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure image optimization to allow external YouTube image URLs
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;
