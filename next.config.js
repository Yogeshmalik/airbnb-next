/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "a0.muscache.com",
      "links.papareact.com",
      "www.jsonkeeper.com",
      "www.jsonserve.com",
    ],
  },
  experimental: { appDir: true },
};

module.exports = nextConfig;
