// app/not-found.tsx
import Link from "next/link";
import Button from "./src/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-[calc(100svh-120px)] bg-white font-barlow">
      {/* Bandeau titre (style proche de tes sections) */}
      <div className="border-b border-black/10 bg-black/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <p className="font-barlow  font-semibold tracking-[0.18em] text-black/60">
            PYRÉNÉNÉES DENTAIRES
          </p>
          <h1 className="mt-2 font-oswald text-2xl font-semibold tracking-wide text-black/80">
            Page introuvable
          </h1>
        </div>
      </div>

      {/* Contenu */}
      <div className="mx-auto max-w-6xl px-6 py-14 font-barlow">
        <div className="grid items-start gap-10 md:grid-cols-[1.1fr_0.9fr]">
          {/* Colonne gauche */}
          <section>
            <div className="inline-flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center border border-black/15 bg-white text-sm font-bold text-black/70">
                404
              </span>
              <p className="text-sm font-semibold tracking-wide text-black/50">
                Erreur
              </p>
            </div>

            <h2 className="mt-6 font-oswald text-3xl font-semibold tracking-wide text-black/85 md:text-4xl">
              Oups… cette page n’existe pas.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-black/65">
              Le lien est peut-être incorrect, ou la page a été déplacée.
              Vous pouvez revenir à l’accueil, ou accéder directement à la rubrique
              “Matériel et mobilier dentaire”.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/" variant="red" >
                Retour à l’accueil
              </Button>

              <Button
                href="/materiel-et-mobilier-dentaire"
                variant="white"
                
              >
                Voir le catalogue
              </Button>
            </div>

            <div className="mt-10 border-t border-black/10 pt-6">
              <p className="text-sm text-black/55">
                Besoin d’aide ?{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-black/75 underline underline-offset-4 hover:text-black"
                >
                  Contactez-nous
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Colonne droite : “cartouche” sobre */}
          <aside className="border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <p className=" font-semibold uppercase tracking-[0.18em] text-black/45">
              Accès rapide
            </p>

            <nav className="mt-5 grid gap-3 text-sm">
              <QuickLink href="/materiel-et-mobilier-dentaire/fauteuils-eclairages-mobilier">
                Les fauteils, éclairages et mobilier 
              </QuickLink>
              <QuickLink href="/materiel-et-mobilier-dentaire/radiologie-empreinte">
                La radiologie et la prise d’empreinte
              </QuickLink>
              <QuickLink href="/materiel-et-mobilier-dentaire/hygiene-sterilisation">
                L'hygiène et la stérilisation
              </QuickLink>
              <QuickLink href="/materiel-et-mobilier-dentaire/chirurgie">
               La chirurgie et la prophylaxie
              </QuickLink>
            </nav>

            <div className="mt-6 border-t border-black/10 pt-5">
              <p className="text-sm text-black/55">
                Si vous pensez qu’il s’agit d’une erreur, dis-nous d’où vous venez
                (URL) et on corrige.
              </p>
              <div className="mt-4">
                <Button href="/contact" variant="white" >
                  Nous contacter
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function QuickLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-between gap-3 border border-black/10 bg-black/[0.02] px-4 py-3 text-black/70 transition hover:bg-black/[0.04]"
    >
      <span className="font-semibold">{children}</span>
      <span className="text-black/35 transition group-hover:text-black/55">
        →
      </span>
    </Link>
  );
}