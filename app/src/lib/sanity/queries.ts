// src/lib/sanity/queries.ts
import { sanityNoStoreFetch } from "./fetch";
import {
  SanityFauteuil,
  SanityEclairage,
  SanityEclairageHero,
  SanityEnteteDePage,
  SanityMobilier,
  SanityPartenaires,
  SanityProduit,
  SanityPageSociete,
  SanityMembreEquipe,
  SanityFooterContact,
  SanityRealisation,
  SanityRealisationsPage,
  SanityOffreProduit,
  SanityPageOffresProduits,
  SanityPageFormations,
  SanityFormationDetail,
} from "./types";

export async function getFauteuils(): Promise<SanityFauteuil[]> {
  return sanityNoStoreFetch(`
    *[_type == "fauteuil"] | order(orderRank) {
      _id, brand, model, desc, specsTitle, specs, image, href
    }
  `);
}

export async function getEclairages(): Promise<SanityEclairage[]> {
  return sanityNoStoreFetch(`
    *[_type == "eclairage"] | order(orderRank) {
      _id, brand, title, desc, image, href
    }
  `);
}

export async function getEclairageHero(): Promise<SanityEclairageHero> {
  return sanityNoStoreFetch(`
    *[_type == "eclairageHero" && _id == "eclairageHero"][0] {
      eyebrow, desc, thumb1, thumb2, thumb3
    }
  `);
}

export async function getEnteteFauteuilsEclairagesMobilier(): Promise<SanityEnteteDePage> {
  return sanityNoStoreFetch(`
    *[_type == "pageFauteuilsEclairagesMobilier" && _id == "pageFauteuilsEclairagesMobilier"][0] {
      titre, description
    }
  `);
}

export async function getMobilier(): Promise<SanityMobilier[]> {
  return sanityNoStoreFetch(`
    *[_type == "mobilier"] | order(orderRank) {
      _id, brand, title, desc, image
    }
  `);
}

export async function getPartenaires(): Promise<SanityPartenaires> {
  return sanityNoStoreFetch(`
    *[_type == "partenaires" && _id == "partenaires"][0] {
      liste
    }
  `);
}

export async function getProduits(categorie: string): Promise<SanityProduit[]> {
  return sanityNoStoreFetch(
    `*[_type == "produit" && categorie == $categorie] | order(orderRank) {
      _id, brand, model, headline, lines, description, image
    }`,
    { categorie }
  );
}

export async function getEnteteRadiologieEmpreinte(): Promise<SanityEnteteDePage> {
  return sanityNoStoreFetch(`
    *[_type == "pageRadiologieEmpreinte" && _id == "pageRadiologieEmpreinte"][0] {
      titre, description
    }
  `);
}

export async function getEnteteHygieneSterilisation(): Promise<SanityEnteteDePage> {
  return sanityNoStoreFetch(`
    *[_type == "pageHygieneSterilisation" && _id == "pageHygieneSterilisation"][0] {
      titre, description
    }
  `);
}

export async function getEnteteChirurgieProphylaxie(): Promise<SanityEnteteDePage> {
  return sanityNoStoreFetch(`
    *[_type == "pageChirurgieProphylaxie" && _id == "pageChirurgieProphylaxie"][0] {
      titre, description
    }
  `);
}

export async function getPageSociete(): Promise<SanityPageSociete> {
  return sanityNoStoreFetch(`
    *[_type == "pageSociete" && _id == "pageSociete"][0] {
      titre, intro
    }
  `);
}

export async function getEquipe(): Promise<SanityMembreEquipe[]> {
  return sanityNoStoreFetch(`
    *[_type == "membreEquipe"] | order(orderRank) {
      _id, name, role, phone, email, photo
    }
  `);
}

export async function getRealisations(): Promise<SanityRealisation[]> {
  return sanityNoStoreFetch(`
    *[_type == "realisation"] | order(orderRank) {
      _id, title, image, alt, ordre
    }
  `);
}

export async function getRealisationsPage(): Promise<SanityRealisationsPage | null> {
  return sanityNoStoreFetch(`
    *[_type == "realisationsPage" && _id == "realisationsPage"][0] {
      blocs[] {
        _key,
        grandeCote,
        disposition,
        "grande": { "src": grande.asset->url, "alt": grande.alt },
        "photo2":  { "src": photo2.asset->url,  "alt": photo2.alt  },
        "photo3":  { "src": photo3.asset->url,  "alt": photo3.alt  },
        "photo4":  { "src": photo4.asset->url,  "alt": photo4.alt  },
      }
    }
  `);
}

export async function getPageFormations(): Promise<SanityPageFormations | null> {
  return sanityNoStoreFetch(`
    *[_type == "pageFormations" && _id == "pageFormations"][0] {
      titre,
      description
    }
  `);
}

export async function getFormationsDetail(): Promise<SanityFormationDetail[]> {
  return sanityNoStoreFetch(`
    *[_type == "formation"] | order(orderRank) {
      _id,
      dateLine,
      titreTop,
      titre,
      "posterUrl": poster.asset->url,
      "posterAlt": poster.alt,
      horaires,
      programme,
      contacts,
      ctaLabel,
      ctaHref
    }
  `);
}

export async function getPageOffresProduits(): Promise<SanityPageOffresProduits> {
  return sanityNoStoreFetch(`
    *[_type == "pageOffresProduits" && _id == "pageOffresProduits"][0] {
      titre, description
    }
  `);
}

export async function getOffresProduits(): Promise<SanityOffreProduit[]> {
  return sanityNoStoreFetch(`
    *[_type == "offreProduit"] | order(orderRank) {
      _id,
      title,
      subtitle,
      "leftVisual": { "src": leftVisual.asset->url, "alt": leftVisual.alt },
      "rightVisual": { "src": rightVisual.asset->url, "alt": rightVisual.alt },
      "downloadHref": fichierPdf.asset->url
    }
  `);
}

export async function getFooterContacts(): Promise<SanityFooterContact[]> {
  return sanityNoStoreFetch(`
    *[_type == "footerContact"] | order(orderRank) {
      _id, name, role, phone, email
    }
  `);
}

// queries accueil

export const heroQuery = `*[_type == "accueilHero" && _id == "accueilHero"][0]{
  "videoUrl": video.asset->url,
  titre,
  sousTitre,
  texte,
  services,
  ctaLabel,
  ctaLien
}`

const imagesFragment = `"images": images[]{ "src": asset->url, alt }`

export const categoriesQuery = `{
  "fauteuils":  *[_type == "accueilFauteuils"  && _id == "accueilFauteuils"][0]{ ${imagesFragment} },
  "chirurgie":  *[_type == "accueilChirurgie"  && _id == "accueilChirurgie"][0]{ ${imagesFragment} },
  "hygiene":    *[_type == "accueilHygiene"    && _id == "accueilHygiene"][0]{   ${imagesFragment} },
  "radiologie": *[_type == "accueilRadiologie" && _id == "accueilRadiologie"][0]{ ${imagesFragment} },
}`

export const formationsQuery = `*[_type == "accueilFormations" && _id == "accueilFormations"][0]{
  formations[]{
    dayLabel,
    title,
    subtitleLines[]{
      text,
      bold
    },
    dateLine,
    placeLine,
    href
  },
  "afficheUrl": affiche.asset->url,
  "afficheAlt": affiche.alt
}`

export const offresQuery = `*[_type == "accueilOffres" && _id == "accueilOffres"][0]{
  offres[]{
    title,
    subtitle,
    "leftVisual": {
      "src": leftVisual.asset->url,
      "alt": leftVisual.alt
    },
    "rightVisual": {
      "src": rightVisual.asset->url,
      "alt": rightVisual.alt
    },
    "downloadHref": fichierPdf.asset->url
  }
}`

export const bonPlanQuery = `*[_type == "accueilBonPlan" && _id == "accueilBonPlan"][0]{
  subtitle,
  description,
  price,
  monthly,
  oldPricePrefix,
  oldPriceValue,
  ctaLabel,
  ctaHref,
  "imageSrc": image.asset->url,
  "imageAlt": image.alt
}`