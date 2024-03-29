const { withContentlayer } = require("next-contentlayer");
//import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client"],
  },
}

module.exports = withContentlayer(nextConfig);
//export default withContentlayer(nextConfig)
