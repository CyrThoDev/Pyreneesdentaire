import { PortableText } from "@portabletext/react";
import FormationRow from "./FormationRow";
import { getPageFormations, getFormationsDetail } from "../src/lib/sanity/queries";

export default async function FormationsPage() {
  const [page, formations] = await Promise.all([
    getPageFormations(),
    getFormationsDetail(),
  ]);

  return (
    <main className="w-full">
      <section className="w-full bg-white">
        <section className="bg-red text-white font-barlow py-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6">
            <h1 className="text-5xl">
              {page?.titre ?? "NOS FORMATIONS ET EVENEMENTS"}
            </h1>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12 font-barlow">
          <div className="max-w-none space-y-4 leading-5">
            {page?.description ? (
              <PortableText value={page.description} />
            ) : null}
          </div>
        </div>

        <div className="border-t max-w-6xl mx-auto border-neutral-300" />
      </section>

      <section className="w-full font-barlow">
        {formations.map((f, index) => (
          <FormationRow key={f._id} f={f} isAlt={index % 2 !== 0} />
        ))}
      </section>
    </main>
  );
}
