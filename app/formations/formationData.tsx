import type { ReactNode } from "react";

export type Formation = {
  id: string;
  dateLine: string;
  titleTop?: string;
  titleMain: string;

  posterSrc: string;
  posterAlt: string;

  ctaLabel: string;
  ctaHref: string;

  bg?: "gray" | "white";

  content: ReactNode;
};

export const formations: Formation[] = [
  {
    id: "chaine-numerique",
    dateLine: "Jeudi 26 Mars 2026 - à la Rotonde de Salies de Béarn",
    titleTop: "360°",
    titleMain: "LA CHAÎNE DU NUMÉRIQUE",

    posterSrc: "/images/formations/chaine-numerique.jpg",
    posterAlt: "Formation La chaîne du numérique",

    ctaLabel: "INSCRIPTION",
    ctaHref: "/inscription",

    bg: "white",

    content: (
      <>
        <h3 className="font-bold text-neutral-900">PROGRAMME</h3>

        <p className=" leading-none">
          PYRÉNÉES DENTAIRE vous invite à participer à la journée
          <strong> LA CHAÎNE DU NUMÉRIQUE</strong> animée par Jean-Michel KEPA,
          le Dr Marchat et le laboratoire MANCINI.
        </p>

        <p className="mt-4 text-red ">De 9h à 17h</p>

        <p className=" font-bold ">
          L’intelligence artificielle se renforce pour nos CBCT
        </p>

        <p className="mt-6 font-bold text-neutral-900">
          Pourquoi vous allez l’adorer
        </p>

        <div className="space-y-5 leading-none">
          <ul>
            <li >
              Segmentation automatique
            </li>
            <li >
              L’IA identifie et sépare instantanément les structures anatomiques.
            </li>
          </ul>

          <div>
            <p className="font-bold text-neutral-900">Gain de temps</p>
            <p className="leading-7 text-neutral-700">
              Plus besoin de détourage manuel fastidieux, le logiciel prépare le
              travail pour vous.
            </p>
          </div>

          <div>
            <p className="font-bold text-neutral-900">Diagnostic précis</p>
            <p className="leading-7 text-neutral-700">
              Une visualisation plus claire pour une planification implantaire
              sécurisée.
            </p>
          </div>
        </div>

        <div className="mt-5">
          <p className="font-bold text-neutral-900">INSCRIPTION</p>

          <p className="mt-2  text-neutral-700">
            AGATA GAUTRY —{" "}
            <a
              href="tel:+33638657587"
              className="hover:underline underline-offset-2"
            >
              06 38 65 75 87
            </a>
          </p>

          <p className=" text-neutral-700">
            JULIEN DELMOND —{" "}
            <a
              href="tel:+33677119121"
              className="hover:underline underline-offset-2"
            >
              06 77 11 91 21
            </a>
          </p>
        </div>
      </>
    ),
  },

  {
    id: "restauration-sourire",
    dateLine: "Jeudi 21 Mai 2026 - Casino Capbreton",
    titleTop: "360°",
    titleMain: "SUR LA RESTAURATION DU SOURIRE",

    posterSrc: "/images/affiche-formation.png",
    posterAlt: "Affiche formation restauration du sourire",

    ctaLabel: "INSCRIPTION",
    ctaHref: "/inscription",

    bg: "gray",

    content: (
      <>
        <h3 className="font-bold  text-md">PROGRAMME</h3>

        <p className=" leading-none ">
          Durée : de 9h à 17h, avec 1h de pause déjeuner.
          
        </p>
        <p className="leading-none">La journée alterne des séquences théoriques et pratiques afin de
          permettre une mise en application immédiate des concepts abordés.</p>

<div className="leading-none">
        <p className="mt-5 text-red ">
          Matinée — 9h à 12h30
        </p>

        <p className="font-bold ">
          Partie théorique
        </p>

        <ul className=" space-y-1 leading-none">
          <li>Analyse esthétique</li>
          <li>
            Composite stratifié antérieur et simplification des teintes
          </li>
          <li>
            Techniques spécifiques de préparation, montage et polissage
          </li>
          <li>
            Partie pratique
          </li>
           <li>
            Restauration avec wax-up de deux angles fracturés (11-21)
          </li>
        </ul>

        </div>

        <p className="mt-6 text-red ">
          PAUSE DEJEUNER — 12h30 à 13h30
        </p>

<div className="leading-none">
        <p className="mt-6 text-red ">
          Après-midi — 13h30 à 17h
        </p>

        <p className="font-bold ">
          Partie théorique
        </p>

        <ul className=" space-y-1 leading-none">
          <li>Technique de composites injectés (simples ou stratifiés) et facettes ceramiques</li>
          <li>
            Composite stratifié antérieur et simplification des teintes
          </li>
          <li>
            - Réalisation d'un moule en silicone transparent
          </li>
          <li>
            - Préparation des surfaces
          </li>
           <li>
           - Astuces d'ijection
          </li>
           <li>
           - Technique de push-back
          </li>
          <li>
           - Optimisation du polissage
          </li>
        </ul>

        <p className="font-bold ">
          Partie pratique
        </p>

        <p className="leading-none text-neutral-700">
          Reconstruction des incisives latérales conoïdes à l’aide des
          techniques de composites injectés simples et stratifiés.
        </p>
</div>
        <div className="mt-8">
          <p className="font-bold text-neutral-900">INSCRIPTION</p>

          <p className="mt-2  ">
            JULIEN DELMOND —{" "}
            <a
              href="tel:+33677119121"
              className="hover:underline underline-offset-2"
            >
              06 77 11 91 21
            </a>
          </p>

          <p className=" ">
            Marc-Sebastien Cotteret —{" "}
            <a
              href="tel:+33671715628"
              className="hover:underline underline-offset-2"
            >
              06 71 71 56 28
            </a>
          </p>
        </div>
      </>
    ),
  },
];