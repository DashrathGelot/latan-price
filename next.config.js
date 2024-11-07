/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/latan-price/public",
    output: "export",
    images: {
        remotePatterns: [
            { 
                hostname: 'dashrathgelot.github.io',
                protocol: 'https',
                pathname: '**'
            }
        ],
    }
};

module.exports = nextConfig;