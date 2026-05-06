import Image from "next/image";
import Link from "next/link";
import type { SanityAccueilFormations, SanityFormation } from "../lib/sanity/types";

type Props = {
  data: SanityAccueilFormations | null
}

export default function FormationsSection({ data }: Props) {
  if (!data) return null

  const { formations, affiches } = data

  return (
    <section
      className="font-barlow w-full text-white bg-cover bg-center bg-no-repeat lg:bg-left"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.50), rgba(0,0,0,0.50)),
          url('/images/bg-doctor.png')
        `,
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-14 lg:py-16">
        <Title />

        {affiches && affiches.length === 1 ? (
          /* 1 photo : textes côte à côte + photo à droite */
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr_280px] lg:gap-10 items-center">
            {formations.map((f, i) => <FormationCard key={i} f={f} />)}
            <a
              href={affiches[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full cursor-zoom-in"
            >
              <div className="overflow-hidden rounded-sm shadow-2xl">
                <Image
                  src={affiches[0].url}
                  alt={affiches[0].alt ?? "Affiche formation"}
                  width={420}
                  height={700}
                  className="w-full h-auto object-cover"
                  sizes="280px"
                />
              </div>
            </a>
          </div>
        ) : (
          /* 2 photos : texte + photo alternés */
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_280px_1fr_280px] lg:gap-10 items-center">
            {formations.map((f, i) => {
              const affiche = affiches?.[i]
              return (
                <>
                  <FormationCard key={`text-${i}`} f={f} />
                  {affiche ? (
                    <a
                      key={`img-${i}`}
                      href={affiche.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full cursor-zoom-in"
                    >
                      <div className="overflow-hidden rounded-sm shadow-2xl">
                        <Image
                          src={affiche.url}
                          alt={affiche.alt ?? "Affiche formation"}
                          width={420}
                          height={700}
                          className="w-full h-auto object-cover"
                          sizes="280px"
                        />
                      </div>
                    </a>
                  ) : (
                    <div key={`empty-${i}`} />
                  )}
                </>
              )
            })}
          </div>
        )}
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

function FormationCard({ f }: { f: SanityFormation }) {
  return (
    <article className="flex flex-col leading-none">
      <div>
        <p className="text-2xl font-extrabold">{f.dayLabel}</p>
        <h3 className="mt-3 text-4xl font-black leading-[1.05]">{f.title}</h3>
        <div className="mt-2 space-y-1 text-lg text-white/95 leading-none">
          {f.subtitleLines.map((line, idx) => (
            <p key={idx} className={line.bold ? "font-extrabold" : "font-normal"}>
              {line.text}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="space-y-1 text-base leading-none text-white/80">
          <p>{f.dateLine}</p>
          <p>{f.placeLine}</p>
        </div>
        <Link
          href={f.href}
          className="mt-2 inline-flex items-center text-base font-extrabold uppercase text-red-500 hover:text-red-400"
        >
          + DE DÉTAIL
        </Link>
      </div>
    </article>
  );
}
