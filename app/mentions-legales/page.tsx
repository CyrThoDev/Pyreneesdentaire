// app/mentions-legales/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "../src/components/Printbutton";

export const metadata: Metadata = {
  title: "Mentions légales | Pyrénées Dentaire",
  description:
    "Règlement et mentions légales du site Pyrénées Dentaire (PyreneesDentaire.fr).",
};

type Article = {
  id: string;
  title: string;
  content: React.ReactNode;
};

const ARTICLES: Article[] = [
  {
    id: "article-1",
    title: "Article 1. Objet & Présentation",
    content: (
      <div className="space-y-3">
        <p>
          L&apos;entreprise Pyrénées Dentaire, domiciliée au <br />
          5, rue de l&apos;Oussere 64320 Idron <br />
          immatriculée au Registre du Commerce et des Sociétés de PAU sous le
          numéro 31845763700037 présente ses services sur son site internet
          PyreneesDentaire.fr.
        </p>
      </div>
    ),
  },
  {
    id: "article-2",
    title: "Article 2. Avertissements à caractère général",
    content: (
      <div className="space-y-3">
        <p>En accédant au site PyreneesDentaire.fr l&apos;internaute s&apos;engage à :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            ne pas détourner les informations auxquelles il aura accès légalement
            ou frauduleusement notamment à des fins de commerce ;
          </li>
          <li>
            ne pratiquer ni le &quot; hacking &quot; (piratage informatique) ni
            le &quot; spamming &quot; (Envoi d&apos;un même message électronique
            à un très grand nombre de destinataires).
          </li>
        </ul>
        <p>
          Avant même tout avertissement, l&apos;internaute est considéré comme
          parfaitement informé de l&apos;existence de règles de conduite à adopter
          lors de la navigation sur l&apos;internet. Ces règles ont été codifiées
          sous le nom de NETIQUETTE (Ce document est disponible sur le site
          Internet{" "}
          <a
            className="font-semibold text-red underline underline-offset-4 hover:brightness-95"
            href="https://www.sri.ucl.ac.be/SRI/rfc1855.fr.html"
            target="_blank"
            rel="noreferrer"
          >
            www.sri.ucl.ac.be/SRI/rfc1855.fr.html
          </a>
          ).
        </p>
        <p>
          Tout litige portant sur l&apos;interprétation ou l&apos;exécution d&apos;un
          engagement contractuel prévu au présent site sera de la compétence
          exclusive des tribunaux français faisant application de la loi
          française.
        </p>
      </div>
    ),
  },
  {
    id: "article-3",
    title: "Article 3. Protection",
    content: (
      <div className="space-y-3">
        <p>
          L&apos;ensemble des programmes et données de PyreneesDentaire.fr sont
          régis par le code de la propriété intellectuelle et reste la propriété
          exclusive de son concepteur.
        </p>
        <p>
          Le site PyreneesDentaire.fr ainsi que son contenu (textes, images,
          bases de données, programmes, marques, logos, noms de domaine et tous
          signes distinctifs afférents …) sont protégés par les droits
          d&apos;auteur.
        </p>
        <p>
          Toute publication, reproduction ou rediffusion, tant en France qu&apos;à
          l&apos;étranger de tout ou partie de la thématique PyreneesDentaire.fr
          est interdite sauf accord exprès de leur propriétaire.
        </p>
        <p>
          Toute contravention aux dispositions des présentes est constitutive
          d&apos;un délit de contrefaçon et engage à ce titre la responsabilité
          civile et pénale de son auteur.
        </p>
        <p>
          En naviguant sur le site, PyreneesDentaire.fr n&apos;autorise
          l&apos;utilisateur qu&apos;à visualiser son contenu, et ce, uniquement à
          titre personnel et privé.
        </p>
        <p>
          L&apos;autorisation de reproduction ne vous est concédée que sous forme
          numérique sur votre ordinateur aux fins de visualisation des pages
          consultées.
        </p>
        <p>
          L&apos;impression papier est autorisée aux fins de copie privée à
          l&apos;usage exclusif du copiste au sens de l&apos;article L. 122-5 2°
          du Code de la propriété intellectuelle.
        </p>
      </div>
    ),
  },
  {
    id: "article-4",
    title: "Article 4. Droit sur les informations nominatives",
    content: (
      <div className="space-y-3">
        <p className="font-semibold">Loi &quot; Informatique, fichiers et libertés &quot;</p>
        <p>
          En application de la loi nº78-17 du 6 janvier 1978 relative à
          l&apos;informatique, aux fichiers et aux libertés, vous disposez des
          droits d&apos;opposition (art.26 de la loi), d&apos;accès (art.34 à 38 de
          la loi), et de rectification (art.36 de la loi) des données vous
          concernant.
        </p>
        <p>
          Ainsi, vous pouvez exiger que soient rectifiées, complétées,
          clarifiées, mises à jour ou effacées les informations vous concernant
          qui sont inexactes, incomplètes, équivoques, périmées ou dont la
          collecte ou l&apos;utilisation, la communication ou la conservation est
          interdite.
        </p>
        <p>Pour exercer ce droit adressez-vous à PyreneesDentaire.fr :</p>
        <p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-bold uppercase tracking-wide text-red underline underline-offset-4 hover:brightness-95"
          >
            en utilisant le formulaire de contact
          </Link>
          .
        </p>
      </div>
    ),
  },
  {
    id: "article-5",
    title: "Article 5. Avertissements relatifs aux différents services proposés",
    content: (
      <div className="space-y-3">
        <p>
          L&apos;entreprise Pyrénées Dentaire rappelle qu&apos;elle se réserve le
          droit de mettre fin ou de modifier à tout moment les services proposés
          dans le site PyreneesDentaire.fr.
        </p>
      </div>
    ),
  },
  {
    id: "article-6",
    title: "Article 6. Responsabilité de l’entreprise gestionnaire",
    content: (
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-oswald text-lg font-semibold uppercase tracking-wide text-black/80">
            Navigateur de l&apos;internaute
          </h3>
          <p>
            L&apos;entreprise Pyrénées Dentaire ne peut être tenue pour
            responsable du mauvais fonctionnement du site pour un navigateur
            donné.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-oswald text-lg font-semibold uppercase tracking-wide text-black/80">
            Continuité du site
          </h3>
          <p>PyreneesDentaire.fr a pour vocation de fonctionner 24 heures sur 24, 7 jours sur 7.</p>
          <p>
            Cela dit, l&apos;entreprise Pyrénées Dentaire se réserve le droit
            d&apos;interrompre l&apos;accès à son site web pour toute raison,
            notamment technique.
          </p>
          <p>
            Les conséquences d&apos;une éventuelle interruption ne sauraient
            engager la responsabilité de l&apos;entreprise Pyrénées Dentaire.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-oswald text-lg font-semibold uppercase tracking-wide text-black/80">
            Liens vers des sites tiers
          </h3>
          <p>
            Le site PyreneesDentaire.fr contient des liens hypertextes dirigeant
            les utilisateurs vers des sites internet gérés par des tiers.
          </p>
          <p>
            Ces sites n&apos;étant pas gérés par l&apos;entreprise Pyrénées Dentaire,
            celle-ci ne peut être tenue pour responsable de leur contenu
            (qualité, véracité, pertinence …) ni des difficultés que pourrait
            rencontrer l&apos;internaute pour y accéder.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-oswald text-lg font-semibold uppercase tracking-wide text-black/80">
            Données échangées sur le site
          </h3>
          <p>
            L&apos;entreprise Pyrénées Dentaire s&apos;efforce de mettre en œuvre
            tous les moyens pour protéger les données à caractère personnel
            qu&apos;elle a collectées.
          </p>
          <p>
            Malgré cela, l&apos;entreprise Pyrénées Dentaire ne peut pas
            s&apos;engager à ce que les informations échangées sur son site ne
            soient pas interceptées par des tiers.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-oswald text-lg font-semibold uppercase tracking-wide text-black/80">
            Dommages
          </h3>
          <p>
            L&apos;entreprise Pyrénées Dentaire ne garantit pas que son site
            (ainsi que le serveur qui le rend accessible et/ou les sites tiers
            avec lesquels il a des liens), ne contiennent pas de virus ou
            d&apos;autres composants susceptibles de causer un dommage aux biens
            et aux personnes.
          </p>
          <p>
            L&apos;entreprise Pyrénées Dentaire ne saura être tenue pour
            responsable d&apos;une perte de données ou d&apos;une détérioration de ces
            données.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-oswald text-lg font-semibold uppercase tracking-wide text-black/80">
            Préjudices
          </h3>
          <p>
            L&apos;entreprise Pyrénées Dentaire ne pourra être tenue responsable
            d&apos;un préjudice d&apos;aucune nature (personnelle, physique, matérielle,
            financière ou autre) survenu à l&apos;occasion de la navigation d&apos;un
            internaute sur PyreneesDentaire.fr.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "article-7",
    title: "Article 7. Convention de Preuve",
    content: (
      <div className="space-y-3">
        <p>
          Il est convenu que, excepté dans le cas d&apos;erreurs manifestes, les
          données contenues dans les systèmes d&apos;information de l&apos;entreprise
          Pyrénées Dentaire ont force probante quant aux éléments de connexions
          et aux informations résultant d&apos;un traitement informatique relatif à
          l&apos;inscription à PyreneesDentaire.fr et a la navigation sur
          PyreneesDentaire.fr.
        </p>
        <p className="font-semibold">Pyrénées Dentaire / PyreneesDentaire.fr le 25/06/2013</p>
      </div>
    ),
  },
];

export default function MentionsLegalesPage() {
  return (
    <main className="font-barlow">
      {/* Bandeau titre */}
      <header className="bg-black/5">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-black/60">
            Informations légales
          </p>
          <h1 className="mt-2 font-oswald text-3xl sm:text-4xl font-semibold uppercase tracking-wide text-black/85">
            Règlement et mentions légales
          </h1>
         
        </div>
      </header>

      {/* Contenu */}
      <section className="mx-auto max-w-6xl px-6 py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          {/* Articles */}
          <div className="space-y-6">
            {ARTICLES.map((a) => (
              <article
                key={a.id}
                id={a.id}
                className="rounded-sm border border-black/10 bg-white p-6 sm:p-8"
              >
                <h2 className="font-oswald text-xl sm:text-2xl font-semibold uppercase tracking-wide text-black/85">
                  {a.title}
                </h2>
                <div className="mt-4 text-[15px] leading-7 text-black/70">
                  {a.content}
                </div>
              </article>
            ))}

            <div className="rounded-sm border border-black/10 bg-white p-6 sm:p-8">
              <h2 className="font-oswald text-xl sm:text-2xl font-semibold uppercase tracking-wide text-black/85">
                Conception du site
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-black/70">
                Conception de site internet par{" "}
                <a
                  className="font-semibold text-red underline underline-offset-4 hover:brightness-95"
                  href="https://www.cyrielle-webdev.fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cyrielle Thomas - https://www.cyrielle-webdev.fr/
                </a>
                
              </p>
            <p>
  Le présent règlement est imprimable (<PrintButton />).
</p>
            </div>
          </div>

          {/* Sommaire (sticky desktop) */}
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-sm border border-black/10 bg-white p-6">
              <p className="font-oswald text-base font-semibold uppercase tracking-wide text-black/80">
                Sommaire
              </p>
              <nav className="mt-4 space-y-2">
                {ARTICLES.map((a) => (
                  <a
                    key={a.id}
                    href={`#${a.id}`}
                    className="block text-sm font-semibold text-black/65 hover:text-red"
                  >
                    {a.title}
                  </a>
                ))}
                <a
                  href="#"
                  className="mt-4 inline-flex w-full items-center justify-center bg-red px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:brightness-95 transition"
                >
                  Retour en haut
                </a>
              </nav>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}