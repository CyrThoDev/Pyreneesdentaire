// src/lib/sanity/queries.ts
import { client } from './client'
import { SanityFauteuil, SanityEclairage, SanityEclairageHero, SanityEnteteDePage, SanityMobilier, SanityPartenaires } from './types'

export async function getFauteuils(): Promise<SanityFauteuil[]> {
  return client.fetch(`
    *[_type == "fauteuil"] | order(orderRank) {
      _id, brand, model, desc, specsTitle, specs, image, href
    }
  `)
}

export async function getEclairages(): Promise<SanityEclairage[]> {
  return client.fetch(`
    *[_type == "eclairage"] | order(orderRank) {
      _id, brand, title, desc, image, href
    }
  `)
}

export async function getEclairageHero(): Promise<SanityEclairageHero> {
  return client.fetch(`
    *[_type == "eclairageHero" && _id == "eclairageHero"][0] {
      eyebrow, desc, thumb1, thumb2, thumb3
    }
  `)
}


export async function getEnteteFauteuilsEclairagesMobilier(): Promise<SanityEnteteDePage> {
  return client.fetch(`
    *[_type == "pageFauteuilsEclairagesMobilier" && _id == "pageFauteuilsEclairagesMobilier"][0] {
      titre, description
    }
  `)
}

export async function getMobilier(): Promise<SanityMobilier[]> {
  return client.fetch(`
    *[_type == "mobilier"] | order(orderRank) {
      _id, brand, title, desc, image
    }
  `)
}

export async function getPartenaires(): Promise<SanityPartenaires> {
  return client.fetch(`
    *[_type == "partenaires" && _id == "partenaires"][0] {
      liste
    }
  `)
}