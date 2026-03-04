// app/materiel-et-mobilier-dentaire/hygiene-sterilisation/page.tsx
import { ProductTile } from "@/app/src/components/products/ProductTile";
import type { ProductCard } from "@/app/src/data/chirurgie";
import { HYGIENE_ITEMS } from "@/app/src/data/hygiene";

function brandIs(item: ProductCard, brand: string) {
  return item.brand?.toLowerCase() === brand.toLowerCase();
}

function ProductCell({ item, ctaHref }: { item: ProductCard; ctaHref: string }) {
  return (
    <div className="flex flex-col">
      <p className="text-2xl font-barlow font-semibold uppercase text-black">
        {item.brand?.toUpperCase()}
      </p>
      <ProductTile item={item} ctaHref={ctaHref} />
    </div>
  );
}

// “case vide” pour compléter une ligne en md:4 colonnes
function Spacer({ mdCols = 1 }: { mdCols?: 1 | 2 | 3 }) {
  return <div className={`hidden md:block md:col-span-${mdCols}`} aria-hidden="true" />;
}

export default function HygieneSterilisationPage() {
  const items = HYGIENE_ITEMS as ProductCard[];
  const ctaHref = "/contact";

  const melag = items.filter((i) => brandIs(i, "MELAG")).slice(0, 3);

  const castellini = items.filter((i) => brandIs(i, "CASTELLINI")).slice(0, 2);
  const euronda = items.filter((i) => brandIs(i, "EURONDA")).slice(0, 2);

  const nsk = items.filter((i) => brandIs(i, "NSK")).slice(0, 1);

  // helper : combien de “cases vides” pour finir la ligne en md:4 colonnes
  const missingCols = (count: number) => {
    const mod = count % 4;
    return mod === 0 ? 0 : 4 - mod;
  };

  return (
    <main className="pb-16">
      {/* ✅ HERO / TITRE DE PAGE */}
      <section className="bg-red text-white font-barlow">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8">
          <h1 className="text-5xl">L’hygiène et la stérilisation</h1>
          <p className="max-w-7xl text-lg leading-5 opacity-95">
            Pyrénées Dentaire vous accompagne dans le choix des solutions les plus
            performantes en imagerie et prise d’empreinte. Grâce à des technologies
            innovantes et un accompagnement expert, nous vous aidons à gagner en
            précision, en efficacité et en confort au quotidien.
          </p>
        </div>
      </section>

      {/* ✅ CONTENU */}
      <div className="mx-auto max-w-7xl px-6 pt-10">
        <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {/* =======================
              BLOC MELAG
             ======================= */}
          {/* ligne de séparation + “titre bloc” */}
       

          {melag.map((item) => (
            <ProductCell key={item.id} item={item} ctaHref={ctaHref} />
          ))}

          {/* MELAG = 3 → on complète à 4 colonnes pour forcer la ligne suivante */}
          {missingCols(melag.length) === 1 && <Spacer mdCols={1} />}
          {missingCols(melag.length) === 2 && <Spacer mdCols={2} />}
          {missingCols(melag.length) === 3 && <Spacer mdCols={3} />}

          {/* =======================
              LIGNE CASTELLINI + EURONDA (2 colonnes / 2 colonnes)
             ======================= */}
          {/* ligne de séparation + 2 titres sur la même ligne */}
          <div className="col-span-full border-t border-black/10 pt-6" />

         

          {castellini.map((item) => (
            <ProductCell key={item.id} item={item} ctaHref={ctaHref} />
          ))}
          {euronda.map((item) => (
            <ProductCell key={item.id} item={item} ctaHref={ctaHref} />
          ))}

          {/* =======================
              BLOC NSK
             ======================= */}
          {/* ligne de séparation + “titre bloc” */}
          <div className="col-span-full border-t border-black/10 pt-6">
         
          </div>

          {nsk.map((item) => (
            <ProductCell key={item.id} item={item} ctaHref={ctaHref} />
          ))}

          {/* NSK = 1 → on complète à 4 colonnes */}
          {missingCols(nsk.length) === 1 && <Spacer mdCols={1} />}
          {missingCols(nsk.length) === 2 && <Spacer mdCols={2} />}
          {missingCols(nsk.length) === 3 && <Spacer mdCols={3} />}
        </section>
      </div>
    </main>
  );
}