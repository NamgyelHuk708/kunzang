import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure image optimization to allow external YouTube image URLs and Unsplash images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
