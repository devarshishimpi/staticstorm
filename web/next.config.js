/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.staticstorm.repocraft.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
