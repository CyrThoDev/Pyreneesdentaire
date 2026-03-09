// app/confidentialite/page.tsx
export const metadata = {
  title: "Politique de confidentialité & cookies | Pyrénées Dentaire",
  description:
    "Informations relatives au traitement des données personnelles et à l'utilisation des cookies sur le site Pyrénées Dentaire.",
};

function Item({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3 border-b border-black/10 pb-8 last:border-b-0 last:pb-0">
      <h2 className="font-oswald text-2xl uppercase tracking-wide">{title}</h2>
      <div className="space-y-3 text-base leading-7 text-black/80">
        {children}
      </div>
    </section>
  );
}

export default function ConfidentialitePage() {
  // 👉 Mets une date réelle quand tu publies
  const lastUpdate = "05/03/2026";

  // 👉 Remplace les champs ci-dessous
  const companyName = "Pyrénées Dentaire";
  const contactEmail = "[email de contact]";
  const companyAddress = "[adresse]";
  const companyPhone = "[téléphone]";

  return (
    <main className="w-full bg-white">
      <header className="bg-red text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 font-barlow">
          <h1 className="font-oswald text-4xl sm:text-5xl uppercase tracking-wide">
            Politique de confidentialité & cookies
          </h1>
          <p className="mt-3 max-w-3xl text-white/90">
            Ce document explique quelles données peuvent être traitées lors de
            votre navigation sur le site {companyName}, à quelles fins, et quels
            sont vos droits.
          </p>
          <p className="mt-2 text-sm text-white/80">Dernière mise à jour : {lastUpdate}</p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-12 font-barlow">
        <div className="space-y-10">
          <Item title="1. Responsable du traitement">
            <p>
              Le responsable du traitement est : <strong>{companyName}</strong>.
            </p>
            <ul className="list-disc pl-6">
              <li>Adresse : {companyAddress}</li>
              <li>Téléphone : {companyPhone}</li>
              <li>Email : {contactEmail}</li>
            </ul>
          </Item>

          <Item title="2. Données collectées via le site">
            <p>
              Le site est actuellement un site vitrine. À ce jour, il ne
              propose pas de formulaire de contact, de création de compte, ni
              d’espace client.
            </p>
            <p>
              Si vous contactez {companyName} par email ou téléphone, les données
              que vous communiquez (par exemple : nom, coordonnées, contenu du
              message) sont utilisées uniquement pour répondre à votre demande.
            </p>
          </Item>

          <Item title="3. Données techniques (logs)">
            <p>
              Lors de votre navigation, des données techniques peuvent être
              traitées pour des raisons de fonctionnement, de sécurité et de
              maintenance (par exemple : adresse IP, date/heure, informations de
              navigateur, pages consultées).
            </p>
            <p>
              Ces données sont utilisées à des fins techniques et de sécurité et
              ne sont pas utilisées pour vous “suivre” à des fins publicitaires.
            </p>
          </Item>

          <Item title="4. Hébergement">
            <p>
              Le site est hébergé par <strong>Vercel</strong> (Vercel Inc.,
              Walnut, CA, États-Unis). Dans le cadre de l’hébergement, des
              données techniques peuvent être traitées afin d’assurer la mise à
              disposition et la sécurité du site.
            </p>
            <p>
              Pour plus d’informations, vous pouvez consulter la politique de
              confidentialité de Vercel.
            </p>
          </Item>

          <Item title="5. Cookies et traceurs">
            <p>
              Le site {companyName} n’utilise actuellement pas d’outil de mesure
              d’audience (analytics) ni de cookies publicitaires.
            </p>
            <p>
              Des cookies strictement nécessaires au fonctionnement et/ou à la
              sécurité peuvent toutefois être utilisés (par exemple, liés à
              l’infrastructure d’hébergement).
            </p>
            <p>
              Si des outils de mesure d’audience ou de marketing sont ajoutés à
              l’avenir, une information dédiée et, lorsque requis, votre
              consentement seront mis en place avant le dépôt/lecture des
              traceurs.
            </p>
          </Item>

          <Item title="6. Durées de conservation">
            <p>
              Les données transmises lors d’une prise de contact (email /
              téléphone) sont conservées uniquement pendant la durée nécessaire
              au traitement de la demande, puis archivées ou supprimées selon
              les obligations applicables.
            </p>
          </Item>

          <Item title="7. Vos droits">
            <p>
              Conformément au RGPD, vous disposez notamment d’un droit d’accès,
              de rectification, d’effacement, d’opposition et de limitation du
              traitement, ainsi que d’un droit à la portabilité lorsque
              applicable.
            </p>
            <p>
              Pour exercer vos droits, vous pouvez contacter :{" "}
              <strong>{contactEmail}</strong>.
            </p>
            <p>
              Vous pouvez également introduire une réclamation auprès de la
              CNIL.
            </p>
          </Item>

          <Item title="8. Contact">
            <p>
              Pour toute question relative à la présente politique :{" "}
              <strong>{contactEmail}</strong>.
            </p>
          </Item>
        </div>
      </div>
    </main>
  );
}