/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Add your own image domains here when needed
    ],
  },
  // Suppress hydration warnings for browser extension conflicts
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Fix the outputFileTracingRoot warning
  outputFileTracingRoot: __dirname,
}

module.exports = nextConfig





