import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  async redirects() {
    return [
      {
        source: "/produits.php",
        destination: "/materiel-et-mobilier-dentaire/fauteuils-eclairages-mobilier",
        permanent: true,
      },
      {
        source: "/book.php",
        destination: "/realisations",
        permanent: true,
      },
      {
        source: "/galeries.php",
        destination: "/realisations",
        permanent: true,
      },
      {
        source: "/presentation.php",
        destination: "/societe",
        permanent: true,
      },
      {
        source: "/contact.php",
        destination: "/contact",
        permanent: true,
      },
      // Toute autre URL .php non gérée → accueil
      {
        source: "/:path*.php",
        destination: "/",
        permanent: true,
      },
    ];
  },
  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 0,
    },
  },
} satisfies NextConfig;

export default nextConfig;