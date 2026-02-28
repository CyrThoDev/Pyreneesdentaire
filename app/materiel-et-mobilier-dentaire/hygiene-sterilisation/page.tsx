// app/hygiene/page.tsx
import { CategoryPage } from "@/app/src/components/products/CategoryPage";

export default function Page() {
  return (
    <>
    <section className="bg-red text-white font-barlow">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8">
          <h1 className="text-5xl font-condensed">
            L’hygiène et la stérilisation
          </h1>
          <p className="max-w-7xl text-lg opacity-95">
Pyrénées Dentaire vous accompagne dans le choix des solutions les plus performantes en imagerie et prise d’empreinte. Grâce à des technologies innovantes et un accompagnement expert, nous vous aidons à gagner en précision, en efficacité et en confort au quotidien.          </p>
        </div>
      </section>
    <CategoryPage
      title="Hygiène"
      subtitle="Contenu à venir."
      items={[]}
      ctaHref="/contact"
    />
    </>
  );
}