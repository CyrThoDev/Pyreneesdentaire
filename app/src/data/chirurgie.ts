// src/data/chirurgie.ts
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

export const CHIRURGIE_ITEMS: ProductCard[] = [
  // ===== EMS =====
  {
    id: "ems-airflow-prophylaxis-master",
    brand: "EMS",
    model: "AIRFLOW® PROPHYLAXIS MASTER",
    description:
      "AIRFLOW® Prophylaxis Master est la dernière innovation d’EMS dédiée à la « Guided Biofilm Therapy » : une solution unique pour le traitement des maladies parodontales et des lésions carieuses.",
    imageSrc: "/images/chirurgie/EMS-AirflowMaster.png",
    imageAlt: "EMS AIRFLOW Prophylaxis Master",
  },
  {
    id: "ems-air-flow-handy-3-0",
    brand: "EMS",
    model: "AIR-FLOW® handy 3.0",
    description:
      "Pièce à main design et ergonomique. Flux de poudre optimisé pour des traitements maîtrisés. Corps fin pour un confort de travail accru et une vision optimale de la zone de traitement. Compatible avec la plupart des raccords de turbine. Montage par simple connexion. Facile à nettoyer et à entretenir. Recharge aisée du réservoir à poudre grâce à l’accessoire AIR-FLOW® Easy Fill 3.0. Embout coudé à 120° pour un usage universel. Rotation à 360° de l’embout.",
    imageSrc: "/images/chirurgie/EMS-Airflow3.0.png",
    imageAlt: "EMS AIR-FLOW handy 3.0",
  },

  // ===== ACTEON =====
  {
    id: "acteon-newtron-p5-xs-bled",
    brand: "ACTEON",
    model: "Newtron® P5 XS BLED",
    description:
      "Avec NEWTRON P5XS B.LED, vous pouvez compter sur des traitements plus rapides avec un détartrage ultrasonique plus confortable et polyvalent. Les traitements plus confortables pour le patient. Les tissus mous sont préservés, sans dommage gingival et avec une diminution de l’élimination du ciment.",
    imageSrc: "/images/chirurgie/ACTEON-Newtron.png",
    imageAlt: "ACTEON Newtron P5 XS BLED",
  },
  {
    id: "acteon-implant-center-2",
    brand: "ACTEON",
    model: "Implant Center 2",
    description:
      "L’Implant Center™ 2 combine les technologies ultrasoniques et rotatives les plus avancées dans un seul appareil pour de nombreuses applications cliniques : chirurgies pré-implantaires et implantaires, parodontie, endodontie, prophylaxie, restauration.",
    imageSrc: "/images/chirurgie/ACTEON-Implant-Center.png",
    imageAlt: "ACTEON Implant Center 2",
  },

  // ===== NSK =====
  {
    id: "nsk-varios-combi-pro2",
    brand: "NSK",
    model: "Varios Combi Pro2",
    description:
      "Alliant l’aéropolissage par poudre sous-gingival et supra-gingival au détartrage ultrasonique pour le traitement parodontal, le Varios Combi Pro2 a été pensé pour une utilisation facile, s’adaptant à votre style de traitement préféré. Né de l’expérience et de la recherche approfondies de NSK, le Varios Combi Pro2 vous apporte le soin professionnel que vous attendez. Sa durabilité et son entretien simplifié en font l’appareil idéal au quotidien…",
    // TODO: la fin de la dernière phrase est coupée sur la maquette.
    imageSrc: "/images/chirurgie/NSK-Varios-CombiPro.png",
    imageAlt: "NSK Varios Combi Pro2",
  },
  {
    id: "nsk-surgic-pro-2",
    brand: "NSK",
    model: "Surgic Pro 2",
    description:
      "Le moteur chirurgical Surgic Pro largement reconnu évolue pour devenir le « Surgic Pro2 ». Des améliorations ont été apportées, respectivement sur le fonctionnement, la sécurité et le déploiement sans fil. En plus d’améliorer les performances de base du Surgic Pro, son extrême adaptabilité de connexion à différents appareils externes offre à l’utilisateur un confort, une sécurité et une efficacité accrus lors des traitements dentaires.",
    imageSrc: "/images/chirurgie/NSK-SurgicPRO.png",
    imageAlt: "NSK Surgic Pro 2",
  },

  // ===== BIEN-AIR =====
  {
    id: "bien-air-chiropro-plus",
    brand: "BIEN-AIR",
    model: "Chiropro Plus",
    description:
      "DEXIS IXS est la nouvelle version améliorée de Gendex™. Basé sur des décennies de succès avec les capteurs Gendex GXS-700, IXS offre tout ce que vous attendez d’un capteur, et bien plus encore. Produisez facilement des images de qualité diagnostique avec un meilleur contraste, moins de bruit et une plus grande flexibilité de dose.",
    // TODO IMPORTANT: ce texte semble parler d’un capteur radiologique (DEXIS/Gendex), pas d’un Chiropro.
    imageSrc: "/images/chirurgie/BIENAIR-Chiropro-Plus.png",
    imageAlt: "Bien-Air Chiropro Plus",
  },
  {
    id: "bien-air-contre-angles-pieces-a-main",
    brand: "BIEN-AIR",
    model: "Les contre-angles et pièces à main",
    description:
      "Les contre-angles et pièces à main Bien-Air vous offrent le meilleur de la microtechnologie suisse. Conçu et fabriqué au cœur de la Watch Valley, chaque instrument est une œuvre d’orfèvrerie alliant ultra-précision, robustesse et silence de fonctionnement.",
    imageSrc: "/images/chirurgie/BIEN-AIR-Contreangles.png",
    imageAlt: "Bien-Air contre-angles et pièces à main",
  },

  // ===== MECTRON =====
  {
    id: "mectron-combi-touch",
    brand: "MECTRON",
    model: "Combi touch",
    description:
      "Le Combi touch de Mectron est l’association des ultrasons et de l’aéropolissage en un seul appareil. Il permet un traitement prophylactique complet : élimination du tartre supra- et sous-gingival, élimination des colorations externes et du biofilm, et nettoyage d’implants.",
    imageSrc: "/images/chirurgie/MECTRON-CombiTouch.png",
    imageAlt: "Mectron Combi touch",
  },

  // ===== (Marque à confirmer dans la maquette) =====
  {
    id: "scanner-pspix-2",
    brand: "ACTEON",
    // NOTE: sur ta radiologie, tu l’avais déjà chez ACTEON ; sur la maquette chirurgie il apparaît sans header de marque clair dans ce rang.
    model: "Scanner PSPIX® 2",
    description:
      "Déposez simplement la plaque à l’intérieur de la fente, le PSPIX2 détectera automatiquement la taille, la numérisera, optimisera l’image et l’enverra instantanément à votre logiciel d’imagerie. PSPIX® 2 est un concentré de technologie, comme notre technologie brevetée FIBER2PIXEL®, basée sur l’utilisation de microfibres optiques à large spectre, garantissant la clarté et le contraste des images. Avec sa taille révolutionnaire, le PSPIX® 2 nécessite si peu d’espace qu’il peut facilement s’intégrer dans n’importe quel cabinet : Le premier scanner à plaques d’imagerie personnel sur le marché, conçu pour votre commodité.",
    imageSrc: "/images/chirurgie/acteon-pspix-2.png",
    imageAlt: "Scanner PSPIX 2",
  },

  // ===== KAVO =====
  {
    id: "kavo-quattrocare-plus",
    brand: "KAVO",
    model: "QUATTROcare™ PLUS",
    description:
      "Pour une préparation rentable, complète et simple de l’instrument. Rapide et efficace : chaque cycle de maintenance prend seulement une minute si vous traitez quatre instruments, tandis que l’ensemble du processus est commandé par un programme et automatisé.",
    imageSrc: "/images/chirurgie/KAVO-Quattrocare.png",
    imageAlt: "KaVo QUATTROcare PLUS",
  },
  {
    id: "kavo-turbines",
    brand: "KAVO",
    model: "Les turbines",
    description:
      "Pour atteindre facilement la performance maximale : puissantes et silencieuses. Pour un travail totalement décontracté. Éveillez votre passion avec les turbines dentaires KaVo, en silence : offrant une puissance maximale, des fonctionnalités intelligentes et un confort moderne.",
    imageSrc: "/images/chirurgie/KAVO-Turbines.png",
    imageAlt: "KaVo turbines",
  },
];