import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Hauteur proche de ta maquette */}
      <div className="relative h-[520px] w-full md:h-[560px] lg:h-[600px]">
        {/* Background image */}
        <Image
          src="/images/hero-cabinet.jpg"
          alt="Cabinet dentaire"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-6xl px-4">
            <div className="relative flex w-full flex-col justify-center">
              {/* Left text block */}
              <div className="max-w-3xl">
                <h1 className="text-white font-oswald font-extrabold uppercase leading-[0.95] tracking-tight text-5xl md:text-6xl lg:text-7xl">
                  PYRÉNÉES DENTAIRE
                </h1>

                <p className="mt-4 text-white/90 uppercase tracking-[0.35em] text-xs md:text-sm">
                  MATÉRIELS ET FOURNITURES POUR L’ART DENTAIRE
                </p>

                <p className="mt-5 text-white/85 text-sm md:text-base leading-relaxed max-w-2xl">
                  Pyrénées Dentaire vous propose des solutions efficaces ainsi
                  qu’un accompagnement sur-mesure pour la conception et la
                  réalisation de votre cabinet dentaire. L’équipe de Pyrénées
                  Dentaire vous accompagne et vous oriente dans le choix de vos
                  équipements et instruments dentaires.
                </p>

                <ul className="mt-5 space-y-1 text-white/85 text-sm md:text-base">
                  <li>– Vente de matériel dentaire</li>
                  <li>
                    – Conception et Installation de cabinet dentaire et de
                    laboratoire
                  </li>
                  <li>
                    – Formation continue sur les matériaux et nouveautés
                  </li>
                  <li>– Entretien et dépannage</li>
                </ul>
              </div>

              {/* CTA (droite, bas) */}
              <div className="mt-10 flex justify-end">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center bg-[#B30000] px-8 text-white font-semibold uppercase tracking-wider text-sm hover:brightness-95 transition"
                >
                  PRENDRE RENDEZ-VOUS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
