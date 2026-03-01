// src/data/hygiene.ts

export type ProductCard = {
  id: string;
  brand: string;
  model: string;
  headline?: string;
  lines?: string[];
  description?: string;
  imageSrc: string;
  imageAlt: string;
};

export const HYGIENE_ITEMS: ProductCard[] = [
  /* =========================
     MELAG
  ========================= */

  {
    id: "melag-vacuklav-40-44",
    brand: "MELAG",
    model: "VACUKLAV 40 - 44 B+ EVOLUTION",
    headline:
      "Autoclave de classe B ultra rapide et haute performance",
    description:
      "Stérilisez jusqu’à 9 kg d’instruments en 8 à 25 minutes. Puissants, fiables et polyvalents, ces autoclaves haut de gamme offrent une utilisation intuitive et des performances inégalées.",
    imageSrc: "/images/hygiene/teaser-produkte-autoklaven.avif",
    imageAlt: "MELAG Vacuklav 40 44 B+ Evolution",
  },

  {
    id: "melag-melatherm-20",
    brand: "MELAG",
    model: "MELATHERM 20",
    headline: "Thermodésinfecteur XXL 160 L",
    description:
      "Chambre extra-large, système de rinçage innovant améliorant les résultats de nettoyage jusqu’à 63 %, documentation intelligente et performance durable pour les cabinets à forte activité.",
    imageSrc: "/images/hygiene/mt20-frontal-2-1.png",
    imageAlt: "MELAG Melatherm 20",
  },

  {
    id: "melag-vacuclave-105-305",
    brand: "MELAG",
    model: "Vacuclave 105 & 305",
    headline: "Les autoclaves les plus rapides de leur catégorie",
    description:
      "Stérilisez jusqu’à 22 contre-angles sur 2 plateaux ou 1 MELAstore Box Compact en un temps record. Rapidité, fiabilité et traçabilité avancée.",
    imageSrc: "/images/hygiene/Vacuclave-305.webp",
    imageAlt: "MELAG Vacuclave 305",
  },

  /* =========================
     EURONDA
  ========================= */

  {
    id: "euronda-eurosafe-170",
    brand: "EURONDA",
    model: "Eurosafe 170",
    headline: "Thermodésinfecteur haute capacité",
    description:
      "Système de lavage et séchage par injection performant. Filtration optimisée pour préserver la pompe et garantir efficacité et longévité dans les cliniques à fort flux patient.",
    imageSrc: "/images/hygiene/Miniature-Eurosafe-170.png",
    imageAlt: "Euronda Eurosafe 170",
  },

  {
    id: "euronda-e10",
    brand: "EURONDA",
    model: "Autoclave E10",
    headline: "Traçabilité numérique et interface intuitive",
    description:
      "Écran couleur 7 pouces, gestion connectée des données de stérilisation, systèmes de traçabilité numérique et papier pour simplifier les opérations quotidiennes.",
    imageSrc: "/images/hygiene/Miniature-E10.png",
    imageAlt: "Euronda E10",
  },

  /* =========================
     CASTELLINI
  ========================= */

  {
    id: "castellini-c-plus",
    brand: "CASTELLINI",
    model: "C-17 PLUS / C-22 PLUS / C-28 PLUS",
    headline: "Performance élevée, coûts maîtrisés",
    description:
      "Système intégré de déminéralisation permettant l’utilisation d’eau du robinet. Plus besoin de stocker des bidons. Fiabilité accrue et réduction des coûts d’exploitation.",
    imageSrc: "/images/hygiene/C_PLUS.jpg",
    imageAlt: "Castellini C Plus",
  },

  /* =========================
     TETHYS
  ========================= */

  {
    id: "tethys-h10-plus",
    brand: "TETHYS",
    model: "H10 PLUS",
    headline: "Premier dispositif 4 en 1",
    description:
      "Décontamination, lavage, désinfection thermique et séchage réunis en un seul processus automatisé. Simplifie le reconditionnement des instruments et réduit les risques.",
    imageSrc: "/images/hygiene/THETIS10.jpg",
    imageAlt: "Tethys H10 Plus",
  },

  /* =========================
     NSK
  ========================= */

  {
    id: "nsk-icare-plus",
    brand: "NSK",
    model: "iCare+",
    headline: "Nettoyage et lubrification automatiques",
    description:
      "Système automatique de nettoyage, désinfection et lubrification des instruments dynamiques. Protège vos équipements et réduit les risques infectieux.",
    imageSrc: "/images/hygiene/iCareplus3.png",
    imageAlt: "NSK iCare Plus",
  },
];