// app/components/FormationsSection.tsx
import Image from "next/image";
import Link from "next/link";

type Formation = {
  dayLabel: string;
  title: string;
  subtitleLines: string[];
  dateLine: string;
  placeLine: string;
  href: string;
};

const formations: Formation[] = [
  {
    dayLabel: "Jeudi 21 MAI",
    title: "FORMATION KULZER",
    subtitleLines: [
      "360°",
      "SUR LA RESTAURATION DU SOURIRE",
      "Animé par le Dr Charles Toledano",
    ],
    dateLine: "Date : jeudi 21 mai 2026 de 9h à 17h",
    placeLine: "Lieu : Capbreton,",
    href: "/formations/kulzer-360-restauration-sourire",
  },
  {
    dayLabel: "Jeudi 26 Mars",
    title: "FORMATION OWANDY",
    subtitleLines: [
      "La chaîne du numérique",
      "Animé par Jean-Michel KEPA, le Dr",
      "Marchat et le laboratoire MANCINI.",
    ],
    dateLine: "Date : jeudi 26 Mars 2026 de 9h à 17h",
    placeLine: "Lieu : Salies de Béarn",
    href: "/formations/owandy-chaine-du-numerique",
  },
];

export default function FormationsSection() {
  return (
    <section
      className="w-full text-white bg-cover bg-left bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.50), rgba(0,0,0,0.50)),
          url('/images/bg-doctor.png')
        `,
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-14 lg:py-16">
        {/* MOBILE: enfilade */}
        <div className="grid gap-10 lg:hidden">
          <Title />
          <FormationCard f={formations[0]} />
          <FormationCard f={formations[1]} />
          <Poster />
        </div>

        {/* DESKTOP: flex 2 colonnes */}
        <div className="hidden lg:grid lg:grid-cols-[3.5fr_1fr]  lg:gap-4">
          {/* COLONNE GAUCHE */}
          <div className="flex-1">
            {/* 1) Titre au-dessus */}
            <Title />

            {/* 2) Grid 3 colonnes dessous : vide / f1 / f2 */}
         <div className="mt-12 grid items-stretch gap-14 lg:grid-cols-[0.2fr_1fr_1fr]">
              <div /> {/* colonne vide */}
              <FormationCard f={formations[0]} />
              <FormationCard f={formations[1]} />
            </div>
          </div>

          {/* COLONNE DROITE : affiche pleine hauteur */}
                <a
            href="/images/affiche-formation.png"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full cursor-zoom-in"
          >
            <div className="h-full w-full overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="/images/affiche-formation.png"
                alt="Affiche formation"
                width={420}
                height={700}
                className="h-full w-full object-cover"
                sizes="(min-width: 1280px) 420px, 360px"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function Title() {
  return (
    <h2 className="text-5xl font-light tracking-tight sm:text-6xl">
      Nos <span className="font-extrabold">formations</span>
    </h2>
  );
}

function FormationCard({ f }: { f: Formation }) {
  return (
    <article className="flex h-full max-w-xl flex-col">
      
      {/* Partie haute */}
      <div>
        <p className="text-2xl font-extrabold tracking-tight">
          {f.dayLabel}
        </p>

        <h3 className="mt-3 text-4xl font-black leading-[1.05] tracking-tight">
          {f.title}
        </h3>

        <div className="mt-2 space-y-1 text-lg font-semibold leading-snug text-white/95">
          {f.subtitleLines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>

      {/* Partie basse alignée */}
      <div className="mt-auto pt-8">
        <div className="space-y-1 text-base leading-relaxed text-white/80">
          <p>{f.dateLine}</p>
          <p>{f.placeLine}</p>
        </div>

        <Link
          href={f.href}
          className="mt-4 inline-flex items-center text-base font-extrabold uppercase text-red-500 hover:text-red-400"
        >
          + DE DÉTAIL
        </Link>
      </div>

    </article>
  );
}

function Poster() {
  return (
    <div className="w-full overflow-hidden rounded-sm shadow-2xl 0">
      <Image
        src="/images/affiche-formation.png"
        alt="Affiche formation"
        width={800}
        height={1100}
        className="h-auto w-full object-cover"
        
      />
    </div>
  );
}