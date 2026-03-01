export default function SocietePage() {
  const team = [
    {
      name: "Guillaume MICHAUT",
      role: "Agence",
      phone: "05 59 02 28 46",
      email: "michaut.g@wanadoo.fr",
    },
    {
      name: "Nadège MICHAUT",
      role: "Service comptabilité",
      phone: "05 59 02 28 46",
      email: "nadege.michaut@gmail.com",
    },
    {
      name: "Laurent DEPIESSE",
      role: "Technico-commercial",
      phone: "06 83 11 51 80",
      email: "laurentdepiesse@gmail.com",
    },
    {
      name: "Agata GAUTRY",
      role: "Responsable commerciale matériel",
      phone: "06 36 65 75 87",
      email: "agata.pyreneesdentaire@gmail.com",
    },
    {
      name: "Julien DELMOND",
      role: "Responsable commercial consommable",
      phone: "06 77 11 91 21",
      email: "julien.delmond@icloud.com",
    },
    {
      name: "Richard DIAZ",
      role: "Technicien",
      phone: "06 07 63 61 36",
      email: "richard.pyrenees@orange.fr",
    },
    {
      name: "Jean-Marie ROCTY",
      role: "Technicien",
      phone: "06 48 22 58 07",
      email: "jmarie.pyreneesdentaire@gmail.com",
    },
    {
      name: "Jean-Marc LACOUR",
      role: "Technicien",
      phone: "06 20 28 83 66",
      email: "lacour.pyreneesdentaire@orange.fr",
    },
  ];

  const partenaires = `
Airel/Quetin - Anthogyr - Bego - Belmont - Bien Air - Carestream - Castellini - Cattani - Coltene Whaledent - Dental Art - Durr Dental - Edenta - Espe 3M - Faro - Gamasonic - Garcin - GC - Heraeus Kulzer - Ivolar/Vivadent - Kavo - Kerr Have - Maillefer - Major - Melag - Mestra - Metasys - Micro Mega - NSK - Prodont Holliger - Protechno - Renfert - Roeko - Rossicaw - Satelec - Schulke Dental - Stabyl - Techdent - Voco - Vita - Yeti Dental - Zenium - Zhermack
  `;

  return (
    <>
            <section className="bg-red text-white ">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-14 ">
          <h1 className="text-5xl ">
           PYRENEES DENTAIRE
          </h1>
        </div>
      </section>
      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-16 font-barlow">
        <div className="space-y-6  leading-relaxed text-gray-700">
          <p>
            Basée à Idron (64), <strong>PYRÉNÉES DENTAIRE</strong> est votre partenaire de confiance
            pour l’équipement complet et la gestion de votre cabinet dentaire.
            Nous sommes spécialisés dans l’étude, l’agencement, l’installation,
            l’entretien et la maintenance de tous les matériels nécessaires à votre activité.
          </p>

          <p>
            Notre expertise s’étend également aux laboratoires de prothèse dentaire,
            pour lesquels nous proposons un service complet comprenant la réalisation,
            l’installation, l’entretien et la maintenance des équipements.
          </p>

          <p>
            Chez <strong>PYRÉNÉES DENTAIRE</strong>, nous mettons à votre disposition
            toute la fourniture et le périphérique indispensables à votre activité,
            en sélectionnant uniquement des produits de qualité professionnelle.
          </p>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="mb-14 text-3xl font-light tracking-wide">
          L’ÉQUIPE DE PYRÉNÉES DENTAIRE
        </h2>

        <div className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
          {team.map((member, i) => (
            <div key={i} className="space-y-4">
              
              {/* PHOTO PLACEHOLDER */}
              <div className="h-56 w-full border border-gray-300 bg-gray-100" />

              {/* INFOS */}
              <div className=" space-y-1">
                <p className="font-semibold">{member.name}</p>
                <p className="text-gray-600">{member.role}</p>
                <p className="text-gray-600">{member.phone}</p>
                <p className="text-gray-600">{member.email}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PARTENAIRES */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h3 className="mb-6 font-semibold">Nos partenaires</h3>
        <p className=" leading-relaxed text-gray-600">
          {partenaires}
        </p>
      </section>

    </>
  );
}