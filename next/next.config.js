/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'uploadthing.com', 'utfs.io'],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig

