// app/formations/page.tsx
import Image from "next/image";
import Link from "next/link";

type Formation = {
  id: string;
  dateLine: string; // ex: "Jeudi 21 Mai 2026 - Casino Capbreton"
  titleTop: string; // ex: "360°"
  titleMain: string; // ex: "SUR LA RESTAURATION DU SOURIRE"
  description: string;
  posterSrc: string;
  posterAlt: string;
  ctaLabel: string;
  ctaHref: string;
};

const formations: Formation[] = [
  {
    id: "restauration-sourire-1",
    dateLine: "Jeudi 21 Mai 2026 - Casino Capbreton",
    titleTop: "360°",
    titleMain: "SUR LA RESTAURATION DU SOURIRE",
    description: "Texte...",
    posterSrc: "/images/formations/360-restauration-sourire.png", // 👉 remplace par ton vrai fichier
    posterAlt: "Affiche formation 360° sur la restauration du sourire",
    ctaLabel: "INSCRIPTION",
    ctaHref: "/inscription", // 👉 remplace
  },
  {
    id: "restauration-sourire-2",
    dateLine: "Jeudi 21 Mai 2026 - Casino Capbreton",
    titleTop: "360°",
    titleMain: "SUR LA RESTAURATION DU SOURIRE",
    description: "Texte...",
    posterSrc: "/images/formations/360-restauration-sourire.png", // 👉 remplace
    posterAlt: "Affiche formation 360° sur la restauration du sourire",
    ctaLabel: "INSCRIPTION",
    ctaHref: "/inscription", // 👉 remplace
  },
];

export default function FormationsPage() {
  return (
    <main className="w-full bg-[#e9e9e9] ">
      {/* INTRO TEXTE */}
      <section className="w-full bg-white">
        <section className="bg-red text-white font-barlow">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-14">
          <h1 className="text-5xl font-condensed">
           NOS FORMATIONS
          </h1>
        </div>
      </section>
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-12 font-barlow">
          <div className="prose prose-neutral max-w-none">
            <p className="m-0 text-[15px] leading-7 text-neutral-800">
              <strong>
                Pyrénées Dentaire : des formations spécialisées pour laboratoires
                et chirurgiens-dentistes
              </strong>
              <br />
              Pyrénées Dentaire, en collaboration avec ses partenaires experts,
              propose des formations professionnelles sur mesure destinées aux
              laboratoires dentaires et aux chirurgiens-dentistes. Ces sessions
              ont pour objectif d’améliorer les compétences techniques,
              optimiser l’ergonomie au travail et maîtriser les outils d’imagerie
              moderne.
              <br />
              La formation en ergonomie enseigne les bonnes postures et gestes
              adaptés pour prévenir les tensions physiques et les troubles
              musculo-squelettiques. Une meilleure ergonomie permet aux
              professionnels de travailler plus confortablement tout en
              conservant une précision optimale dans leurs interventions ou
              fabrications dentaires.
              <br />
              La posturologie se concentre sur l’équilibre corporel et le confort
              au quotidien. Les participants apprennent à corriger les
              déséquilibres et à améliorer leur posture, ce qui contribue à la
              santé globale et à la qualité du travail, que ce soit en cabinet ou
              en laboratoire.
              <br />
              La formation en imagerie dentaire permet de maîtriser les outils
              numériques et radiographiques essentiels pour le diagnostic, la
              planification et la communication avec les patients et les équipes.
              Les participants apprennent à exploiter pleinement ces
              technologies pour des résultats précis et fiables.
            </p>

            <p className="mt-6 text-[15px] leading-7 text-neutral-800">
              Avec nos formations, nous accompagnons laboratoires et
              chirurgiens-dentistes dans l’amélioration de leur pratique, la
              prévention des risques professionnels et l’adoption des dernières
              innovations technologiques du secteur.
            </p>
          </div>
        </div>
      </section>

      {/* LISTE FORMATIONS */}
      <section className="w-full font-barlow">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
          <div className="space-y-16 sm:space-y-20">
            {formations.map((f) => (
              <FormationRow key={f.id} f={f} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function FormationRow({ f }: { f: Formation }) {
  return (
    <article className="grid gap-8 md:grid-cols-[360px_1fr] md:gap-14">
      {/* POSTER */}
      <div className="relative w-full">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-white shadow-sm">
          <Image
            src={f.posterSrc}
            alt={f.posterAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 360px"
            priority={false}
          />
        </div>
      </div>

      {/* TEXTE */}
      <div className="flex flex-col justify-start pt-1">
        <p className="text-sm text-neutral-600">{f.dateLine}</p>

        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
          <span className="block">{f.titleTop}</span>
          <span className="block">{f.titleMain}</span>
        </h2>

        <p className="mt-8 max-w-xl text-[15px] leading-7 text-neutral-700">
          {f.description}
        </p>

        <div className="mt-10">
          <Link
            href={f.ctaHref}
            className="inline-flex h-10 items-center justify-center rounded-none bg-[#b10f2e] px-10 text-sm font-semibold tracking-wide text-white transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-neutral-900/30"
            aria-label={`${f.ctaLabel} : ${f.titleTop} ${f.titleMain}`}
          >
            {f.ctaLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}