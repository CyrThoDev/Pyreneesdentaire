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

export async function getFooterContacts(): Promise<SanityFooterContact[]> {
  return sanityNoStoreFetch(`
    *[_type == "footerContact"] | order(orderRank) {
      _id, name, role, phone, email
    }
  `);
}