/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:['www.pexels.com','images.pexels.com','cdn.sanity.io']
  },
}

module.exports = nextConfig
