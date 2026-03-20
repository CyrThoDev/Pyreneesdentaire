import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 0,
    },
  },
} satisfies NextConfig;

export default nextConfig;