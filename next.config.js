/** @type {import('next').NextConfig} */
const repo = "Sutima-PortfolioHub"
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`
const nextConfig = {
    output: "export",
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
    assetPrefix: assetPrefix,
    basePath: basePath,
}

module.exports = nextConfig
