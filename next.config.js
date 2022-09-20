/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['gsap'])

const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: 'akamai',
    path:'./'
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false }

    return config;
  }
}

module.exports = withTM(nextConfig)
