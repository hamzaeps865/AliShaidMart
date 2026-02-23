import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // These are optional MongoDB driver dependencies that are not needed
      // in the browser bundle. Marking them as false prevents Webpack from
      // trying to resolve them and throwing "Module not found" errors.
      config.resolve.fallback = {
        ...config.resolve.fallback,
        kerberos: false,
        "@mongodb-js/zstd": false,
        "@aws-sdk/credential-providers": false,
        "mongodb-client-encryption": false,
        "gcp-metadata": false,
        snappy: false,
        socks: false,
      };
    }
    return config;
  },
};

export default nextConfig;
