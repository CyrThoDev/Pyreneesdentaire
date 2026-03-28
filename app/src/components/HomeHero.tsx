import Button from "./ui/Button";
import type { SanityAccueilHero } from "../lib/sanity/types";

type Props = { data: SanityAccueilHero | null }

export function HomeHero({ data }: Props) {
  if (!data) return null

  return (
    <section className="relative w-full">

      {/* Background wrapper */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={data.videoUrl} type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20">
        <div className="flex flex-col justify-center gap-12">

          {/* TEXTE */}
          <div className="flex flex-col gap-3 max-w-6xl">
            <div className="flex flex-col gap-2">
              <h1 className="text-white font-oswald font-bold uppercase text-6xl md:text-7xl lg:text-9xl">
                {data.titre}
              </h1>
              <p className="font-barlow text-white uppercase tracking-[0.2em] text-xl md:text-3xl">
                {data.sousTitre}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-barlow text-white md:text-xl">
                {data.texte}
              </p>

              {data.services?.length > 0 && (
                <div className="flex flex-col gap-0">
                  <p className="font-barlow text-white text-xl">Nos services :</p>
                  <ul className="font-barlow text-white md:text-xl list-disc pl-6 flex flex-col gap-0 leading-[1.2]">
                    {data.services.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="flex md:justify-end">
            <Button href={data.ctaLien} variant="red">
              {data.ctaLabel}
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}