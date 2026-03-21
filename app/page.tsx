import { HomeHero } from "./src/components/HomeHero";
import { HomeCategoriesGrid } from "./src/components/home/HomeCategoriesGrid";
import FormationsSection from "./src/components/FormationsSection";
import OffreProduitsSection from "./src/components/OffresAccueil";
import BonsPlansDuMoisSection from "./src/components/BonsPlansDuMois";
import { client } from "./src/lib/sanity/client";
import { heroQuery, categoriesQuery } from "./src/lib/sanity/queries";
import type { SanityAccueilHero, SanityAccueilCategories } from "./src/lib/sanity/types";

export default async function Home() {
  const [hero, categories] = await Promise.all([
    client.fetch<SanityAccueilHero | null>(heroQuery),
    client.fetch<SanityAccueilCategories | null>(categoriesQuery),
  ])

  return (
    <>
      <HomeHero data={hero} />
      <HomeCategoriesGrid data={categories} />
      <FormationsSection />
      <OffreProduitsSection />
      <BonsPlansDuMoisSection />
    </>
  );
}