import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: "/OSEYI.png",
        permanent: true, // Indicates a 301 redirect
      },
    ];
  },
};

export default nextConfig;
