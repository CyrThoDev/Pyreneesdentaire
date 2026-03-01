// app/(site)/catalogue/page.tsx
import { FauteuilSection } from "@/app/src/components/catalogue/FauteuilSection";
import { EclairageSection } from "@/app/src/components/catalogue/EclairageSection";
import { MobilierSection } from "@/app/src/components/catalogue/MobilierSection";
import type {
  CatalogueFauteuil,
  CatalogueFurnitureCard,
  CatalogueLightingHero,
  CatalogueLightingItem,
} from "@/app/src/components/catalogue/types";

export default function CataloguePage() {
  const fauteuils: CatalogueFauteuil[] = [
    {
      id: "airel-quetin-pe9",
      brand: "AIREL-QUETIN",
      model: "PE9",
      title: "PE9, le fauteuil universel",
      desc:
        "L’équipement PE9 a été conçu afin de s’adapter à toutes les positions de travail, de droite comme de gauche, de deux à quatre mains. Le PE9 est le fauteuil ambidextre par excellence. Son design ergonomique et ses fonctionnalités font de lui un unit universel",
      specsTitle: "CARACTÉRISTIQUES TECHNIQUES",
      specs: [
        "Tablette instrument ambidextre avec écran intégré",
        "Support aspiration en position ambidextre",
        "Têtière orbitale triple articulation à assistance pneumatique",
        "Sellerie ultra-confort à dossier élargi",
        "Système de désinfection interne IGN",
      ],
      image: "/images/fauteuils/fauteuil_pe9.png",
      href: "#",
    },
    {
      id: "airel-quetin-k2",
      brand: "AIREL-QUETIN",
      model: "K2",
      title: "K2, le fauteuil compact",
      desc:
        "L’équipement k2 a été conçu afin de répondre à un besoin d’optimisation. Compact et léger, il rend l’espace de travail aéré et accessible pour le patient et le praticien. Le K2 s’adapte parfaitement aux petits espaces !",
      specsTitle: "CARACTÉRISTIQUES TECHNIQUES",
      specs: [
        "Tablette instruments sur bras compensé avec écran intégré",
        "Support aspiration sur bras flexible",
        "Têtière orbitale triple articulation à assistance pneumatique",
        "Fauteuil chaise avec dossier affiné",
        "Système de décontamination IGN",
        "Sellerie confortable et personnalisable",
      ],
      image: "/images/fauteuils/fauteuil_k2.png",
      href: "#",
    },
    {
      id: "belmont-eurus-s8",
      brand: "BELMONT",
      model: "EURUS S8",
      desc:
        "L’Eurus S8 est l’incarnation du luxe et du confort à la japonaise. Bénéficiant de toutes les caractéristiques qui ont bâti la réputation de Belmont, l’Eurus S8 s’adapte à votre environnement de travail et votre expertise. Il offre une excellente stabilité et une sécurité maximale pour le patient, le dentiste et son assistante.",
      specsTitle: "CARACTÉRISTIQUES TECHNIQUES",
      specs: [
        "Configuration ambidextre ultra-rapide",
        "Tablette praticien légère et maniable",
        "Interface tactile Eurus fluide et intuitive",
        "Repose-nuque manuel ou motorisé",
        "Pédale sans fil disponible (option)",
        "Accoudoirs rotatifs",
        "Versions : Standard (Crachoir) & VAC PACK",
      ],
      image: "/images/fauteuils/Belmont_S8.jpg",
      href: "#",
    },
    {
      id: "belmont-eurus-s6",
      brand: "BELMONT",
      model: "EURUS S6",
      desc:
        "Adapté à toutes les situations, l’EURUS S6 offre l’ergonomie idéale pour tous les espaces. Grâce à sa jambière escamotable, il permute aisément d’une position chaise à une position allongée. Disposant de toutes les fonctionnalités de la gamme Eurus, il excelle dans toutes les positions de travail. Grâce à ses joysticks de contrôle, le fauteuil est entièrement manipulable au pied, permettant une hygiène optimale.",
      specsTitle: "CARACTÉRISTIQUES TECHNIQUES",
      specs: [
        "Véritable fauteuil chaise",
        "Jambière escamotable",
        "Repose-nuque motorisé",
        "Accoudoirs rotatifs",
        "Joysticks de contrôle",
        "Interface tactile Eurus",
        "Versions : Standard (Crachoir) & VAC PACK",
      ],
      image: "/images/fauteuils/Belmont_S6.png",
      href: "#",
    },
    {
      id: "castellini-puma-eli-ambidextre",
      brand: "CASTELLINI",
      model: "PUMA ELI AMBIDEXTRE",
      desc:
        "Puma ELI Ambidextre offre une flexibilité opérationnelle avec une transformation rapide pour les droitiers et les gauchers. Le design compact et ergonomique optimise l'espace, tandis que la mobilité des bras et les tablettes praticien garantissent une liberté opérationnelle. La technologie SideFlex réduit, en parallèle, la traction sur le poignet et la console LCD tactile assure un contrôle précis. Les systèmes d’hygiène de pointe (Autosteril, M.W.B. et Time Flushing) garantissent une désinfection efficace, tandis que les scialytiques Venus assurent un éclairage optimal, avec réglage de la température de couleur et intégration multimédia dans la version MCT View. Puma ELI Ambidextre est idéal pour les cabinets multi-opérateurs, alliant efficacité, confort et précision.",
      specsTitle: "CARACTÉRISTIQUES TECHNIQUES",
      specs: ["Caméra intra-orale", "Capteur radiographique Zen-X", "Écran LED"],
      image: "/images/fauteuils/Castellini_Puma.png",
      href: "#",
    },
    {
      id: "castellini-skema-6",
      brand: "CASTELLINI",
      model: "SKEMA 6",
      title: "L’innovation au service des professionnels odontologiques",
      desc:
        "Conçu pour répondre aux besoins des professionnels les plus exigeants, Skema 6 est le point de rencontre entre l’innovation technologique et l’ergonomie de pointe. Cette unité de soins dentaires intègre les fonctionnalités de pointe, offrant une expérience d’utilisation fluide, conviviale et entièrement personnalisable. Grâce à une interface tactile de 7’’, à des commandes vocales et à une large gamme d’instruments intégrés, Skema 6 permet d’aborder n’importe quelle procédure, de l’endodontie à la chirurgie implantaire, avec précision et sécurité. Le design ergonomique, la gestion intelligente des paramètres de fonctionnement et l’interconnexion avec les systèmes numériques du cabinet, font de Skema 6 la solution idéale pour ceux qui recherchent l’excellence des performances et une efficacité opérationnelle maximale.",
      specsTitle: "CARACTÉRISTIQUES TECHNIQUES",
      specs: ["Interface Full Touch", "Technologie NFC", "Élégance et fonctionnalité"],
      image: "/images/fauteuils/Castellini_AREA.png",
      href: "#",
    },
    {
      id: "kavo-uniqa",
      brand: "KAVO",
      model: "UNIQA",
      title: "La première unité de traitement dans la classe compacte premium",
      desc:
        "Signé KaVo, l’uniQa est un produit unique en son genre. Sa grande marge de manœuvre permet de répondre à vos besoins particuliers et à votre manière de travailler. Une conception attrayante associée à des fonctionnalités intelligentes et à la fabrication KaVo premium garantissent un traitement quotidien de qualité exceptionnelle, ainsi qu’un succès pérenne.",
      specsTitle: "CARACTÉRISTIQUES TECHNIQUES",
      specs: [
        "Nouvelles diodes lumineuses dans la courbe du fauteuil",
        "Repose-pied au design chic et pratique",
        "Nouveau crachoir pivotant",
        "Nouveaux accessoires",
      ],
      image: "/images/fauteuils/KaVo-uniQa_S-LED-HD_7h-transparent01.png",
      href: "#",
    },
  ];

  const eclairageHero: CatalogueLightingHero = {
    eyebrow: "OUDIN DENTAIRE",
    title: "UNIQA",
    desc:
      "Un dentiste passe 2000 heures par an dans un lieu clos et éclairé d’une lumière artificielle. Le reste du temps ? Accueil, salle d’attente, salle de soins, bloc de chirurgie, stérilisation, salle de repos. Au total, cela fait bien peu de lumière naturelle… Nous poussons loin la technologie LED pour aller au delà des seuls aspects économique et écologique. En recréant au mieux la lumière extérieure avec des luminaires haut de gamme, nous visons confort visuel et optimisation de l’ergonomie du poste de travail. Une meilleure appréciation, donc plus de précision.",
    rightImage: {
      src: "/images/eclairages/omedia.png",
      alt: "Omedia – luminaire avec écran",
    },
    thumbs: [
      { src: "/images/eclairages/albedo.png", alt: "Panneau lumineux" },
      { src: "/images/eclairages/od-aminoa-evo-lampe.png", alt: "Luminaire organique" },
     
    ],
  };

  const eclairages: CatalogueLightingItem[] = [
    {
      id: "zenium-tao",
      brand: "ZENIUM",
      title: "TAO",
      desc:
        "Un tout nouveau concept. TAO redéfinit le rôle du mobilier dans le cabinet dentaire en termes de dimensions, de sécurité et d’organisation. TAO est un projet ambitieux issu de la recherche sur l’art dentaire réalisée dans des cliniques de toute l’Europe. Il s’agit d’un concept innovant et évolutif pour l’aménagement de votre cabinet, afin de respecter vos habitudes de travail d’aujourd’hui et de demain.",
      image: { src: "/images/eclairages/uniqa.jpg", alt: "TAO" },
      href: "#",
    },
    {
      id: "zenium-zyo-ii",
      brand: "ZENIUM",
      title: "ZYO II",
      desc:
        "ZYO est une lampe scialytique à leds au design d’une pureté saisissante, un condensé d’énergie et de puissance au service de l’espace dentaire. Face aux nouveaux protocoles médicaux intégrant la vidéo pour assister les chirurgiens dentistes dans leurs interventions, ZYO est l’outil par excellence inventé pour répondre à leurs attentes.",
      image: { src: "/images/eclairages/zyo-ii.png", alt: "ZYO II" },
      href: "#",
    },
    {
      id: "belmont-eurus-light",
      brand: "BELMONT",
      title: "EURUS LIGHT",
      desc:
        "L’Eurus Light de nouvelle génération (conforme à la norme ISO9680) est capable de diffuser une lumière d’intensité variable de 3 000 à 34.000 lux et reproduit la lumière naturelle avec une capacité de rendu des couleurs fonctionnelles élevée.",
      image: { src: "/images/eclairages/EURUS-LIGHT_mirror.jpg", alt: "Eurus Light" },
      href: "#",
    },
    {
      id: "faro-siderea-sunlight",
      brand: "FARO",
      title: "SIDERÈA SUNLIGHT",
      desc:
        "Depuis toujours, la recherche de la solution adaptée pour un meilleur éclairage au cabinet est une nécessité. FARO présente un nouveau produit en or : la scialytique d’ambiance LEO.",
      image: { src: "/images/eclairages/SIDEREA.png", alt: "Siderea Sunlight" },
      href: "#",
    },
  ];

  const mobilier: CatalogueFurnitureCard[] = [
    {
      id: "dental-art-avant",
      brand: "DENTAL ART",
      title: "Avant system",
      desc: "Texte descriptif…",
      image: "/products/mobilier-1.png",
    },
    {
      id: "rossicaws-eva",
      brand: "ROSSICAWS",
      title: "Eva",
      desc: "Texte descriptif…",
      image: "/products/mobilier-2.png",
    },
    {
      id: "belmont-eurus-clair",
      brand: "BELMONT",
      title: "L’Eurus CLAIR",
      desc: "Texte descriptif…",
      image: "/products/mobilier-3.png",
    },
    {
      id: "support-design-statera",
      brand: "SUPPORT DESIGN",
      title: "Statera Core+",
      desc: "Texte descriptif…",
      image: "/products/mobilier-4.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="bg-red text-white font-barlow">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8">
          <h1 className="text-5xl ">
            Les fauteuils, l’éclairage et le mobilier
          </h1>
          <p className="max-w-7xl text-lg opacity-95">
            Pyrenées Dentaire vous propose une large gamme de fauteuils, éclairages et mobilier dentaire issus des meilleures marques. Alliant ergonomie, confort et design, nos solutions optimisent votre cabinet tout en offrant un environnement agréable pour vos patients. Que vous recherchiez des fauteuils performants, des éclairages précis ou du mobilier fonctionnel et esthétique, nous avons le matériel adapté à vos besoins.
          </p>
        </div>
      </section>

      <FauteuilSection title="Les fauteuils" items={fauteuils} ctaLabel="CONTACTEZ NOUS" />

      <EclairageSection
        title="L’éclairage"
        hero={eclairageHero}
        items={eclairages}
        ctaLabel="CONTACTEZ-NOUS"
        ctaHref="#"
      />

      <MobilierSection
        title="Le mobilier"
        items={mobilier}
        ctaLabel="CONTACTEZ NOUS"
        ctaHref="#"
      />
    </div>
  );
}