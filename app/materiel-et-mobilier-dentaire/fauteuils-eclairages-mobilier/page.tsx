// app/(site)/page.tsx
import Image from "next/image";
import Link from "next/link";

type ProductRow = {
  brand: string;
  model: string;
  desc?: string;
  specsTitle?: string;
  specs?: string[];
  image: string; // /public/...
  href?: string;
};

type LightingCard = {
  brand: string;
  title: string;
  desc: string;
  href?: string;
};

type FurnitureCard = {
  brand: string;
  title: string;
  desc: string;
  image: string;
  href?: string;
};

const FAUTEUILS: ProductRow[] = [
  {
    brand: "AIREL-QUETIN",
    model: "PE9",
    desc:
      "PE9, le fauteuil universel . L’équipement PE9 a été conçu afin de s’adapter à toutes les positions de travail, de droite comme degauche, de deux à quatre mains.Le PE9 est le fauteuil ambidextre par excellence. Son design ergonomique et ses fonctionnalités font de lui un unit universel",
    specsTitle: "CARACTÉRISTIQUES TECHNIQUES",
    specs: [
      "• Tablette instrument ambidextre avec écran intégré",
      "• Support aspiration en position ambidextre",
      "• Têtière orbitale triple articulation à assistance pneumatique",
      "• Sellerie ultra-confort à dossier élargi",
      "• Système de désinfection interne IGN",
      

    ],
    image: "/images/fauteuil_pe9.png",
    href: "#",
  },
  {
    brand: "AIREL-QUETIN",
    model: "K2",
    desc: "Texte descriptif…",
    specsTitle: "CARACTÉRISTIQUES TECHNIQUES",
    specs: ["• Option 1…", "• Option 2…", "• Option 3…"],
    image: "/products/fauteuil-2.png",
    href: "#",
  },
  {
    brand: "BELMONT",
    model: "EURUS S",
    desc: "Texte descriptif…",
    specsTitle: "CARACTÉRISTIQUES TECHNIQUES",
    specs: ["• Option 1…", "• Option 2…"],
    image: "/products/fauteuil-3.png",
    href: "#",
  },
  {
    brand: "CASTELLINI",
    model: "AREA",
    desc: "Texte descriptif…",
    specsTitle: "CARACTÉRISTIQUES TECHNIQUES",
    specs: ["• Option 1…", "• Option 2…", "• Option 3…"],
    image: "/products/fauteuil-4.png",
    href: "#",
  },
  {
    brand: "KAVO",
    model: "UNIQ",
    desc: "Texte descriptif…",
    specsTitle: "CARACTÉRISTIQUES TECHNIQUES",
    specs: ["• Option 1…", "• Option 2…"],
    image: "/products/fauteuil-5.png",
    href: "#",
  },
];

const LIGHTING_CARDS: LightingCard[] = [
  {
    brand: "ZENIUM",
    title: "TAO",
    desc: "Texte descriptif… (à remplacer).",
    href: "#",
  },
  {
    brand: "ZENIUM",
    title: "ZY01",
    desc: "Texte descriptif…",
    href: "#",
  },
  {
    brand: "BELMONT",
    title: "EURUS LIGHT",
    desc: "Texte descriptif…",
    href: "#",
  },
  {
    brand: "FARO",
    title: "SIDERA SUNLIGHT",
    desc: "Texte descriptif…",
    href: "#",
  },
];

const FURNITURE: FurnitureCard[] = [
  {
    brand: "DENTAL ART",
    title: "Avant system",
    desc: "Texte descriptif…",
    image: "/products/mobilier-1.png",
    href: "#",
  },
  {
    brand: "ROSSI CAYS",
    title: "Eva",
    desc: "Texte descriptif…",
    image: "/products/mobilier-2.png",
    href: "#",
  },
  {
    brand: "BELMONT",
    title: "L’Eurus CLRF",
    desc: "Texte descriptif…",
    image: "/products/mobilier-3.png",
    href: "#",
  },
  {
    brand: "SUPPORT DESIGN",
    title: "Statera Core",
    desc: "Texte descriptif…",
    image: "/products/mobilier-4.png",
    href: "#",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-black">
     

      {/* HERO rouge */}
      <section className="bg-[#b1001a] text-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <h1 className="text-2xl font-condensed">
            Les fauteuils, l’éclairage et le mobilier
          </h1>
          <p className="mt-3 max-w-3xl text-sm/6 opacity-95">
            Pyrenées Dentaire vous propose une large gamme de fauteuils, éclairages et
mobilier dentaire issus des meilleures marques. Alliant ergonomie, confort et design,
nos solutions optimisent votre cabinet tout en offrant un environnement agréable
pour vos patients.
Que vous recherchiez des fauteuils performants, des éclairages précis ou du
mobilier fonctionnel et esthétique, nous avons le matériel adapté à vos besoins.
          </p>
        </div>
      </section>

      {/* LES FAUTEUILS */}
      <SectionTitle title="Les fauteuils" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="divide-y divide-black/10">
          {FAUTEUILS.map((p) => (
            <ProductRowItem key={`${p.brand}-${p.model}`} item={p} />
          ))}
        </div>
      </div>

      {/* L’ÉCLAIRAGE */}
      <SectionTitle title="L’éclairage" />
      <div className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Texte */}
          <div>
            <p className="text-xs font-semibold  text-black/60">
              QUETIN DENTAIRE
            </p>
            <h3 className="mt-2 text-lg font-bold">UNIQ</h3>
            <p className="mt-3 text-sm/6 text-black/70">
              Texte descriptif… (à remplacer)
            </p>
          </div>

          {/* Trio d’images (comme sur la capture) */}
          <div className="grid grid-cols-3 gap-4">
            <Thumb src="/products/light-1.png" alt="Éclairage 1" />
            <Thumb src="/products/light-2.png" alt="Éclairage 2" />
            <Thumb src="/products/light-3.png" alt="Éclairage 3" />
          </div>
        </div>

        {/* Ligne “logos/labels” */}
        <div className="mt-10 grid grid-cols-4 gap-6 text-center text-[11px] font-semibold text-black/60">
          <div>ZENIUM</div>
          <div>ZENIUM</div>
          <div>BELMONT</div>
          <div>FARO</div>
        </div>

        {/* 4 colonnes texte */}
        <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {LIGHTING_CARDS.map((c) => (
            <LightingCardItem key={`${c.brand}-${c.title}`} item={c} />
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <PrimaryButton href="#">CONTACTEZ NOUS</PrimaryButton>
        </div>
      </div>

      {/* LE MOBILIER */}
      <SectionTitle title="Le mobilier" />
      <div className="mx-auto max-w-6xl px-6 pb-10">
        {/* “Labels” en haut (comme sur la capture) */}
        <div className="grid grid-cols-4 gap-6 text-center text-[11px] font-semibold  text-black/60">
          <div>DENTAL ART</div>
          <div>ROSSI CAYS</div>
          <div>BELMONT</div>
          <div>SUPPORT DESIGN</div>
        </div>

        {/* 4 cards */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FURNITURE.map((f) => (
            <FurnitureCardItem key={`${f.brand}-${f.title}`} item={f} />
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <PrimaryButton href="#">CONTACTEZ NOUS</PrimaryButton>
        </div>
      </div>

      {/* NOS RÉALISATIONS */}
      <section className="bg-black/5">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="relative overflow-hidden rounded-sm bg-black">
            <div className="absolute left-6 top-6 z-10 text-white">
              <h3 className="text-2xl font-bold">Nos réalisations</h3>
            </div>

            <div className="grid grid-cols-3">
              <RealisationImg src="/realisations/r1.jpg" alt="Réalisation 1" />
              <RealisationImg src="/realisations/r2.jpg" alt="Réalisation 2" />
              <RealisationImg src="/realisations/r3.jpg" alt="Réalisation 3" />
            </div>

            <div className="absolute bottom-6 right-6 z-10">
              <PrimaryButton href="#">VOIR LES RÉALISATIONS</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* --------------------------- Components --------------------------- */


function SectionTitle({ title }: { title: string }) {
  return (
    <div className="bg-black/5">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <h2 className="text-lg font-semibold text-black/60">{title}</h2>
      </div>
    </div>
  );
}

function ProductRowItem({ item }: { item: ProductRow }) {
  return (
    <article className="grid gap-6 py-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
      {/* Texte */}
      <div>
        <p className="text-xs font-semibold uppercase  text-black/60">
          {item.brand}
        </p>
        <h3 className="mt-2 text-lg font-bold">{item.model}</h3>
        {item.desc ? (
          <p className="mt-3 max-w-2xl text-sm/6 text-black/70">{item.desc}</p>
        ) : null}

        {item.specs?.length ? (
          <div className="mt-4">
            {item.specsTitle ? (
              <p className="text-xs font-bold uppercase  text-black/60">
                {item.specsTitle}
              </p>
            ) : null}
            <ul className="mt-2 space-y-1 text-sm text-black/70">
              {item.specs.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {/* Image + bouton */}
      <div className="flex flex-col items-end gap-4">
        <div className="relative h-45 w-full max-w-90">
          <Image
            src={item.image}
            alt={`${item.brand} ${item.model}`}
            fill
            className="object-contain"
          />
        </div>
        <PrimaryButton href={item.href ?? "#"}>CONTACTEZ NOUS</PrimaryButton>
      </div>
    </article>
  );
}

function Thumb({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-4/3 w-full bg-white">
      <Image src={src} alt={alt} fill className="object-contain" />
    </div>
  );
}

function LightingCardItem({ item }: { item: LightingCard }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase  text-black/60">
        {item.brand}
      </p>
      <h4 className="mt-2 text-sm font-bold">{item.title}</h4>
      <p className="mt-2 text-sm/6 text-black/70">{item.desc}</p>
    </div>
  );
}

function FurnitureCardItem({ item }: { item: FurnitureCard }) {
  return (
    <article className="border border-black/10 bg-white">
      <div className="relative aspect-4/3 w-full bg-black/5">
        <Image src={item.image} alt={item.title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <p className="text-xs font-semibold uppercase  text-black/60">
          {item.brand}
        </p>
        <h4 className="mt-2 text-sm font-bold">{item.title}</h4>
        <p className="mt-2 text-sm/6 text-black/70">{item.desc}</p>
      </div>
    </article>
  );
}

function RealisationImg({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-4/3 w-full">
      <Image src={src} alt={alt} fill className="object-cover opacity-90" />
    </div>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-block bg-[#b1001a] px-4 py-2 text-[11px] font-bold uppercase  text-white"
    >
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <FooterCol
            title="Infos pratiques"
            items={["Adresse…", "Téléphone…", "Email…"]}
          />
          <FooterCol
            title="Showroom"
            items={["Horaires…", "Accès…", "Parking…"]}
          />
          <FooterCol
            title="Réseaux"
            items={["Instagram…", "LinkedIn…", "Facebook…"]}
          />
          <FooterCol
            title="Service"
            items={["Maintenance…", "SAV…", "Livraison…"]}
          />
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">
          © {new Date().getFullYear()} — Nom de l’entreprise — Mentions légales
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-3 space-y-2 text-xs text-white/70">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}