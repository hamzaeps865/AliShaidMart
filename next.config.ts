import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mark optional MongoDB native driver dependencies as external so they are
  // never bundled. This works with both Turbopack (Next.js 16 default) and
  // Webpack, and avoids "Module not found" errors at build time.
  serverExternalPackages: [
    "kerberos",
    "@mongodb-js/zstd",
    "@aws-sdk/credential-providers",
    "mongodb-client-encryption",
    "gcp-metadata",
    "snappy",
    "socks",
  ],
};

export default nextConfig;
