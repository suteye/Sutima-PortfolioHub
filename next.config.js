/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    // distDir: 'dist',
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    experimental: {
        appDir: true,
      },
}
module.exports = nextConfig
