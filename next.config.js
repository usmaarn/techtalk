/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  baseUrl: '/',
  paths: {
    "@/models/*": ['/config/models/*']
  }

}

module.exports = nextConfig
