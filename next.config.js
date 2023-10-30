/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
}

const getRedirects = async () => {
    const redirects = [
        // https://sutima-portfolio-hub-suteye.vercel.app/work/:id
        {
            source: '/work/:id',
            destination: '/work/:id',
        },
        // https://sutima-portfolio-hub-suteye.vercel.app/work
        {
            source: '/work',
            destination: '/work',
        },
        // https://sutima-portfolio-hub-suteye.vercel.app/about
        {
            source: '/about',
            destination: '/about',
        },
    ]
}

module.exports = nextConfig
