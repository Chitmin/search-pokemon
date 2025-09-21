import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // "https://img.pokemondb.net/artwork/pikachu.jpg"
      {
        protocol: "https",
        hostname: "img.pokemondb.net",
        pathname: "/artwork/**",
      },
    ],
  },
};

export default nextConfig;
