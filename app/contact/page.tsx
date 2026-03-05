"use client";

import Button from "../src/components/ui/Button";

type ContactInfo = {
  commercialName: string;
  phoneDisplay: string; // affichage humain
  phoneE164: string; // ex: +33512345678
  email: string;
  rdvUrl: string; // ex: Calendly / page interne / tel:
};

const CONTACT: ContactInfo = {
  commercialName: "Guillaume Michaut",
  phoneDisplay: "05 59 02 28 46",
  phoneE164: "+33559022846", // <-- remplace
  email: "michaut.g@wanadoo.fr", // <-- remplace si besoin
  rdvUrl: "/contact#rdv", // <-- remplace (ex: lien Calendly ou page RDV)
};

export default function ContactPage() {
  return (
    <main className="bg-white text-black">
      {/* HERO */}

      <section className="bg-red text-white font-barlow">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-12">
          <h1 className="text-5xl">
            CONTACT
          </h1>
          <p className="max-w-7xl text-lg leading-5 opacity-95">
Retrouvez ici toutes les coordonnées pour contacter l’agence : visite au showroom, demande d’information ou accompagnement sur votre projet. </p>
        </div>
      </section>
    

      {/* 2 BLOCS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* BLOC RDV */}
          <div id="rdv" className=" p-8">
            <h2 className="font-oswald text-2xl uppercase mb-4">Prendre rendez-vous</h2>

            <p className="font-barlow text-black/80 mb-6">
              Pour planifier un échange (projet, devis, démonstration, installation),
              vous pouvez appeler directement ou réserver un créneau.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-black/60">Votre interlocuteur</p>
                <p className="font-barlow text-lg font-semibold">{CONTACT.commercialName}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {/* Appel */}
                <a
                  href={`tel:${CONTACT.phoneE164}`}
                  className="inline-flex items-center justify-center border border-black px-6 py-3 font-oswald uppercase hover:bg-black hover:text-white transition"
                >
                  Appeler {CONTACT.phoneDisplay}
                </a>

                {/* Lien RDV (Calendly ou page interne) */}
                <Button href={CONTACT.rdvUrl} variant="red" className="w-full sm:w-auto">
                  Réserver un créneau
                </Button>
              </div>

             
            </div>
          </div>

          {/* BLOC CONTACT */}
          <div className=" p-8">
            <h2 className="font-oswald text-2xl uppercase mb-4">Demande de contact</h2>

            <p className="font-barlow text-black/80 mb-6">
              Pour toute question (produits, disponibilité, SAV, formation), vous pouvez
              nous contacter par téléphone ou par email.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-black/60">Votre interlocuteur</p>
                <p className="font-barlow text-lg font-semibold">{CONTACT.commercialName}</p>
              </div>

              <div className="space-y-2">
                {/* Téléphone : en clair + lien */}
                <p className="font-barlow">
                  <span className="font-semibold">Téléphone :</span>{" "}
                  <span>{CONTACT.phoneDisplay}</span>{" "}
                  <a
                    href={`tel:${CONTACT.phoneE164}`}
                    className="ml-2 underline underline-offset-4 hover:opacity-70"
                  >
                    (appeler)
                  </a>
                </p>

                {/* Email : en clair + mailto */}
                <p className="font-barlow">
                  <span className="font-semibold">Email :</span>{" "}
                  <span>{CONTACT.email}</span>{" "}
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="ml-2 underline underline-offset-4 hover:opacity-70"
                  >
                    (envoyer un email)
                  </a>
                </p>
              </div>

              <div className="mt-6 bg-gray-50 border border-gray-200 p-4">
                <p className="text-sm text-black/70">
                  Astuce : si le clic sur “envoyer un email” ne fonctionne pas, copiez-collez
                  simplement l’adresse ci-dessus dans votre webmail (Gmail, Outlook, etc.).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

  
    </main>
  );
}