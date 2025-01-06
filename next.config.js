/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/learning-cursor',
  assetPrefix: '/learning-cursor',
}

module.exports = nextConfig 