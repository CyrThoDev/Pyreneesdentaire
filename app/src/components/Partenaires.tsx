const partenaires = [
  "Airel/Quetin",
  "Anthogyr",
  "Bego",
  "Belmont",
  "Bien Air",
  "Carestream",
  "Castellini",
  "Cattani",
  "Coltene Whaledent",
  "Dental Art",
  "Durr Dental",
  "Edenta",
  "Espe 3M",
  "Faro",
  "Gamasonic",
  "Garcin",
  "GC",
  "Heraeus Kulzer",
  "Ivolar/Vivadent",
  "Kavo",
  "Kerr Have",
  "Maillefer",
  "Major",
  "Melag",
  "Mestra",
  "Metasys",
  "Micro Mega",
  "NSK",
  "Prodont Holliger",
  "Protechno",
  "Renfert",
  "Roeko",
  "Rossicaw",
  "Satelec",
  "Schulke Dental",
  "Stabyl",
  "Techdent",
  "Voco",
  "Vita",
  "Yeti Dental",
  "Zenium",
  "Zhermack",
];

export default function PartnersSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 border-t border-black/10 font-barlow">
      <h3 className="mb-3 text-lg font-semibold">Nos partenaires</h3>

      <p className="text-gray-600 leading-relaxed">
        {partenaires.join(" - ")}
      </p>
    </section>
  );
}