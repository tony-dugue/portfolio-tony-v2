/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['gsap'])

const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false }

    return config;
  }
}

module.exports = withTM(nextConfig)
