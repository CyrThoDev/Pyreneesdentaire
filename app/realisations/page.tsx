import RealisationsMasonry from "../src/components/realisations/RealisationsGrid";

export default function Materiel() {
  return (
   
      <>
         <section className="bg-red text-white font-barlow">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8">
          <h1 className="text-5xl ">
            NOS RÉALISATIONS
          </h1>
          <p className="max-w-7xl text-lg opacity-95">
Découvrez nos réalisations de cabinets dentaires conçus sur mesure. Chaque projet allie design, ergonomie et respect des normes afin d’offrir un cadre de travail optimal aux praticiens et une expérience agréable aux patients.    </p>
        </div>
      </section>
        <RealisationsMasonry />
</>
   
  );
}