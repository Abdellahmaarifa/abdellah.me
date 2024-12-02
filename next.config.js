/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  // Ignore v0 directory
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: /v0/,
    };
    return config;
  },
};

module.exports = nextConfig;
