import Image from "next/image";
import Link from "next/link";
import type { SanityAccueilFormations, SanityFormation } from "../lib/sanity/types";

type Props = {
  data: SanityAccueilFormations | null
}

export default function FormationsSection({ data }: Props) {
  if (!data) return null

  const { formations, afficheUrl, afficheAlt } = data

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

        {/* MOBILE */}
        <div className="grid gap-10 lg:hidden">
          <Title />
          {formations.map((f, i) => (
            <FormationCard key={i} f={f} />
          ))}
          {afficheUrl && <Poster src={afficheUrl} alt={afficheAlt} />}
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:grid lg:grid-cols-[3.5fr_1fr] lg:gap-4">
          <div className="flex-1">
            <Title />
            <div className="mt-12 grid items-stretch gap-14 lg:grid-cols-[0.2fr_1fr_1fr]">
              <div />
              {formations.map((f, i) => (
                <FormationCard key={i} f={f} />
              ))}
            </div>
          </div>

          {afficheUrl && (
            <a
              href={afficheUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full cursor-zoom-in"
            >
              <div className="h-full w-full overflow-hidden rounded-sm shadow-2xl">
                <Image
                  src={afficheUrl}
                  alt={afficheAlt ?? "Affiche formation"}
                  width={420}
                  height={700}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 1280px) 420px, 360px"
                />
              </div>
            </a>
          )}
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

function FormationCard({ f }: { f: SanityFormation }) {
  return (
    <article className="flex h-full max-w-xl flex-col leading-none">
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

      <div className="mt-auto pt-4">
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

function Poster({ src, alt }: { src: string; alt?: string }) {
  return (
    <div className="w-full overflow-hidden rounded-sm shadow-2xl">
      <Image
        src={src}
        alt={alt ?? "Affiche formation"}
        width={800}
        height={1100}
        className="h-auto w-full object-cover"
      />
    </div>
  );
}