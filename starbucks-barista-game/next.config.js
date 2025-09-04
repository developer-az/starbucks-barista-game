/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ppl-ai-code-interpreter-files.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'user-gen-media-assets.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Suppress hydration warnings for browser extension conflicts
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
}

module.exports = nextConfig

