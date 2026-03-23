/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  transpilePackages: ['recharts'],
  serverExternalPackages: ['ts3-nodejs-library', 'ssh2', 'cpu-features'],
};

module.exports = nextConfig;
