/** @type {import('next').NextConfig} */
const nextConfig = {
    // images:{
    //     domains: ['static.bhd.com.do']
    // }
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig
