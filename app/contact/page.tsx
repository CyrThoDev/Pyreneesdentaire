"use client";

import Button from "../src/components/ui/Button";

type ContactInfo = {
  commercialName: string;
  phoneDisplay: string;
  phoneE164: string;
  email: string;
};

const CONTACT: ContactInfo = {
  commercialName: "Guillaume Michaut",
  phoneDisplay: "05 59 02 28 46",
  phoneE164: "+33559022846",
  email: "michaut.g@wanadoo.fr",
};

const mailtoHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
  "Demande d’informations"
)}&body=${encodeURIComponent(
  "Bonjour,\n\nJe souhaiterais obtenir plus d’informations.\n\nCordialement,"
)}`;

export default function ContactPage() {
  return (
    <main className="bg-white text-black">
      <section className="bg-red font-barlow text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-12">
          <h1 className="text-5xl">CONTACT</h1>
          <p className="max-w-7xl text-lg leading-5 opacity-95">
            Retrouvez ici toutes les coordonnées pour contacter l’agence :
            visite au showroom, prise de rendez-vous, demande d’information,
            demande de prix ou SAV.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div id="rdv" className="p-8">
          <h2 className="mb-4 font-oswald text-2xl uppercase">
            Prendre rendez-vous, contacter le SAV ou faire une demande de prix
          </h2>

          <p className="mb-6 font-barlow text-black/80">
            Pour planifier un échange, obtenir un renseignement sur un produit,
            faire une demande de prix ou contacter le SAV, vous pouvez joindre
            directement notre agence par téléphone ou par email.
          </p>

          <div className="space-y-5">
            <div>
              <p className="text-sm text-black/60">Votre interlocuteur</p>
              <p className="font-barlow text-lg font-semibold">
                {CONTACT.commercialName}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <a
                href={`tel:${CONTACT.phoneE164}`}
                className="font-oswald inline-flex items-center justify-center rounded-none border border-black px-14 py-3 text-black hover:bg-red/80 focus-visible:ring-red"
              >
                Appeler {CONTACT.phoneDisplay}
              </a>

              <div className="flex flex-col items-center">
                <Button
                  href={mailtoHref}
                  variant="red"
                  className="w-full border border-red"
                >
                  Demander plus d'informations
                </Button>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-2 font-barlow text-center text-sm underline underline-offset-4 hover:opacity-70"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}