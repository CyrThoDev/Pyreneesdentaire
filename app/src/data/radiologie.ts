// src/data/radiologie.ts
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

export const RADIOLGIE_ITEMS: ProductCard[] = [
  {
    id: "owandy-imax-3d-ceph-xpro",
    brand: "OWANDY",
    model: "I-MAX 3D CEPH XPRO",
    headline: "Nouvelle génération de panoramique dentaire céphalométrique",
    lines: [
      "L’I-Max 3D CEPH XPRO s’adapte à tous les cabinets",
      "L’I-Max 3D CEPH XPRO CONE BEAM MULTI-FOV",
      "Flexibilité d’utilisation",
      "Précision et résolution élevées",
      "Réduction de l’exposition aux rayonnements",
      "Efficacité clinique",
      "Polyvalence",
    ],
    imageSrc: "/images/radiologie/i-max_3d.png",
    imageAlt: "OWANDY I-MAX 3D CEPH XPRO",
  },
  {
    id: "owandy-cr",
    brand: "OWANDY",
    model: "OWANDY CR",
    headline: "Lecteur de plaques dentaire Owandy-CR",
    lines: [
      "Le plus petit scanner de plaque ERLM",
      "Un scanner adapté à toutes les pratiques dentaire",
      "5 tailles de plaques",
      "Endodontie, chirurgie prothétique et implantaire, parodontie",
      "Diagnostics carieux",
      "Bitewing, rétroalvéolaire, postérieure…",
    ],
    imageSrc: "/images/radiologie/owandy_cr.png",
    imageAlt: "OWANDY CR",
  },
  {
    id: "opteo",
    brand: "OWANDY",
    model: "Capteur Intraoral OPTEO",
    headline:
      "Capteur intraoral nouvelle génération, conçu pour s’adapter parfaitement à vos besoins cliniques",
    description:
      "Optimisez votre workflow avec un capteur dentaire haute résolution offrant une visualisation instantanée de vos clichés. Plus besoin de temps de développement : obtenez des images précises en un seul geste, pour des diagnostics plus rapides et fiables.",
    imageSrc: "/images/radiologie/capteur_intraoral_owandy.png",
    imageAlt: "Capteur intraoral OPTEO",
  },
  {
    id: "owandy-ios",
    brand: "OWANDY",
    model: "OWANDY IOS INTRAORAL SCANNER",
    description:
      "Incroyablement rapide & précis. Technologie Fast Scan. Scannez immédiatement, pas de temps de préchauffage. 20 secondes arcade complète, 60 secondes pour la bouche entière. Précision 20µm. Aucun mouvement mécanique. Aucune calibration. Reconstruction assistée par I.A.",
    imageSrc: "/images/radiologie/owandy_ios_intraoral.png",
    imageAlt: "Owandy IOS Intraoral Scanner",
  },

  {
    id: "dexis-op-3d-lx",
    brand: "DEXIS",
    model: "OP 3D LX",
    headline: "L’innovation en imagerie qui voit plus grand.",
    description:
      "Plateforme d’imagerie multimodale construite sur la technologie OP 3D, pour élargir vos possibilités de diagnostic 3D grâce à une gamme d’applications cliniques.",
    imageSrc: "/images/radiologie/op_3D_LX.png",
    imageAlt: "DEXIS OP 3D LX",
  },
  {
    id: "dexis-focus",
    brand: "DEXIS",
    model: "DEXIS FOCUS",
    description:
      "Design pratique renforcé par le mécanisme « Anti-Drift », garantissant une utilisation stable et précise.",
    imageSrc: "/images/radiologie/dexis_focus.png",
    imageAlt: "DEXIS Focus",
  },
  {
    id: "dexis-ixs",
    brand: "DEXIS",
    model: "DEXIS™ IXS™ Sensor",
    description:
      "Nouvelle version améliorée de Gendex™ : meilleur contraste, moins de bruit, grande flexibilité de dose.",
    imageSrc: "/images/radiologie/dexis_ixs_sensor.png",
    imageAlt: "DEXIS IXS Sensor",
  },
  {
    id: "dexis-is-3800w",
    brand: "DEXIS",
    model: "DEXIS IS 3800W",
    headline: "La liberté d’évoluer sans fil",
    description:
      "Jusqu’à une heure de prise d’empreinte en continu. Station de recharge intelligente. Connexion Wi-Fi point-à-point dédiée.",
    imageSrc: "/images/radiologie/dexis_is_3800.png",
    imageAlt: "DEXIS IS 3800W",
  },

  {
    id: "acteon-xmind",
    brand: "ACTEON",
    model: "X-MIND® optima 3D",
    description:
      "Design compact, détection de pointe, qualité de diagnostic élevée. Association matériel avancé + logiciel RealGUIDE™ 5.4.",
    imageSrc: "/images/radiologie/x-mind_optima_3d.png",
    imageAlt: "ACTEON X-MIND optima 3D",
  },
  {
    id: "acteon-pspix2",
    brand: "ACTEON",
    model: "Scanner PSPIX® 2",
    description:
      "Déposez la plaque : détection automatique, numérisation, optimisation et envoi instantané. Très compact.",
    imageSrc: "/images/radiologie/scanner_pspix_2.png",
    imageAlt: "ACTEON PSPIX 2",
  },

  {
    id: "durr-vistascan",
    brand: "DÜRR DENTAL",
    model: "VistaScan Mini View 2.0",
    description:
      "Technologie de pointe, fonctions IA, Smart Reader pour automatiser les workflows, excellente qualité d’image.",
    imageSrc: "/images/radiologie/vistascan_mini.png",
    imageAlt: "VistaScan Mini View 2.0",
  },
  {
    id: "myray-hyperion",
    brand: "MYRAY",
    model: "Hyperion X9 Pro",
    description:
      "Imagerie 2D, 3D et céphalométrique. Diagnostics rapides, sûrs et de qualité supérieure.",
    imageSrc: "/images/radiologie/hyperion_x9_pro.png",
    imageAlt: "MYRAY Hyperion X9 Pro",
  },
];