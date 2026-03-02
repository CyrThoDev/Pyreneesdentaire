import Image from "next/image";
import Button from "./ui/Button";

export function HomeHero() {
  return (
    <section className="relative w-full">

      {/* Background wrapper */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-cabinet.jpg"
          alt="Cabinet dentaire"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20">

        <div className="flex flex-col justify-center gap-12">

          {/* TEXTE */}
          <div className="flex flex-col gap-8 max-w-4xl">

            <div className="flex flex-col gap-4">
              <h1 className="text-white font-oswald font-extrabold uppercase l tracking-tight text-5xl md:text-6xl lg:text-8xl">
                PYRÉNÉES DENTAIRE
              </h1>

              <p className="font-barlow text-white uppercase tracking-[0.2em] text-xs md:text-xl">
                MATÉRIELS ET FOURNITURES POUR L’ART DENTAIRE
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <p className="font-barlow text-white md:text-lg leading-relaxed ">
                Pyrénées Dentaire vous propose des solutions performantes et un accompagnement sur mesure pour la conception et la réalisation de votre cabinet dentaire. Notre équipe vous conseille et vous guide dans le choix de vos équipements et instruments dentaires, en fonction de vos besoins et de vos exigences professionnelles. 
              </p>

              <div className="flex flex-col gap-2">
                <p className="font-barlow text-white text-lg">
                  Nos services :
                </p>

                <ul className="font-barlow text-white md:text-lg list-disc pl-6 flex flex-col gap-1">
                  <li>Vente de matériel dentaire</li>
                  <li>Conception et installation de cabinet</li>
                  <li>Formation continue</li>
                  <li>Entretien et dépannage</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex md:justify-end">
            <Button href="/contact" variant="red">
              PRENDRE RENDEZ-VOUS
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}