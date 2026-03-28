import { HomeHero } from "./src/components/HomeHero";
import { HomeCategoriesGrid } from "./src/components/home/HomeCategoriesGrid";
import FormationsSection from "./src/components/FormationsSection";
import OffreProduitsSection from "./src/components/OffresAccueil";
import BonsPlansDuMoisSection from "./src/components/BonsPlansDuMois";
import { client } from "./src/lib/sanity/client";
import { heroQuery, categoriesQuery, formationsQuery, offresQuery, bonPlanQuery } from "./src/lib/sanity/queries";
import type { SanityAccueilHero, SanityAccueilCategories, SanityAccueilFormations, SanityAccueilOffres, SanityAccueilBonPlan } from "./src/lib/sanity/types";
import { formations } from "./formations/formationData";

export default async function Home() {
  const [hero, categories, formations, offres, bonPlan] = await Promise.all([
    client.fetch<SanityAccueilHero | null>(heroQuery),
    client.fetch<SanityAccueilCategories | null>(categoriesQuery),
    client.fetch<SanityAccueilFormations | null>(formationsQuery),
    client.fetch<SanityAccueilOffres | null>(offresQuery),
     client.fetch<SanityAccueilBonPlan | null>(bonPlanQuery),
  ])

  return (
    <>
      <HomeHero data={hero} />
      <HomeCategoriesGrid data={categories} />
      <FormationsSection data={formations} />
      <OffreProduitsSection data={offres} />
      <BonsPlansDuMoisSection data={bonPlan} />
    </>
  );
}