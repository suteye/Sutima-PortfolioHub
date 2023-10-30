/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
    async rewrites() {
        return [
            //https://sutima-portfolio-hub.vercel.app/work/:workId
            {
                source: '/work/:workId',
                destination: '/work/:workId',
            },
        ]
    },
}
module.exports = nextConfig
