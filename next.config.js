/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['ppl-ai-code-interpreter-files.s3.amazonaws.com', 'user-gen-media-assets.s3.amazonaws.com'],
  },
}

module.exports = nextConfig





