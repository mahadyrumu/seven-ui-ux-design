import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/real-estate",
        destination: "/real-estate-landing",
        permanent: true,
      },
      {
        source: "/travel-app",
        destination: "/travel-landing",
        permanent: true,
      },
      {
        source: "/finance-dashboard",
        destination: "/finance-landing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
