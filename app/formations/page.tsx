// app/formations/page.tsx
import FormationRow from "./FormationRow";
import { formations } from "./formationData";

export default function FormationsPage() {
  return (
    <main className="w-full">
      <section className="w-full bg-white"> <section className="bg-red text-white font-barlow py-12"> <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 "> <h1 className="text-5xl "> NOS FORMATIONS ET EVENEMENTS </h1> </div> </section> <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12 font-barlow"> <div className="max-w-none"> <p className="font-barlow font-semibold text-lg"> Pyrénées Dentaire : des formations spécialisées pour laboratoires et chirurgiens-dentistes </p> <p className="m-0 leading-5 "> <br /> Pyrénées Dentaire, en collaboration avec ses partenaires experts, propose des formations professionnelles sur mesure destinées aux laboratoires dentaires et aux chirurgiens-dentistes. Ces sessions ont pour objectif d’améliorer les compétences techniques, optimiser l’ergonomie au travail et maîtriser les outils d’imagerie moderne. <br /> La formation en ergonomie enseigne les bonnes postures et gestes adaptés pour prévenir les tensions physiques et les troubles musculo-squelettiques. Une meilleure ergonomie permet aux professionnels de travailler plus confortablement tout en conservant une précision optimale dans leurs interventions ou fabrications dentaires. <br /> La posturologie se concentre sur l’équilibre corporel et le confort au quotidien. Les participants apprennent à corriger les déséquilibres et à améliorer leur posture, ce qui contribue à la santé globale et à la qualité du travail, que ce soit en cabinet ou en laboratoire. <br /> La formation en imagerie dentaire permet de maîtriser les outils numériques et radiographiques essentiels pour le diagnostic, la planification et la communication avec les patients et les équipes. Les participants apprennent à exploiter pleinement ces technologies pour des résultats précis et fiables. </p> <p className="mt-6 leading-5 "> Avec nos formations, nous accompagnons laboratoires et chirurgiens-dentistes dans l’amélioration de leur pratique, la prévention des risques professionnels et l’adoption des dernières innovations technologiques du secteur. </p> </div> </div> <div className=" border-t max-w-6xl mx-auto border-neutral-300" /> </section>

      <section className="w-full font-barlow">
        {formations.map((f, index) => (
          <FormationRow key={f.id} f={f} isAlt={index % 2 !== 0} />
        ))}
      </section>
    </main>
  );
}