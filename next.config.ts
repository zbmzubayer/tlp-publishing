import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.leadconnectorhq.com",
      },
    ],
  },
};

export default nextConfig;
