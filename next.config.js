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
  env: {
    mapbox_key:
      "pk.eyJ1IjoieW9nZXNoc20iLCJhIjoiY2xpNHZxeDcwMGp1dzNmcGMzY3d4Nng0ciJ9.jYrfd75eeqZRhPbK0N6BRQ",
  },
};

module.exports = nextConfig;
