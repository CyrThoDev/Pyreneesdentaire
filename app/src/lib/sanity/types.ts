// src/lib/sanity/types.ts
import { SanityImageSource } from "@sanity/image-url"

export type SanityFauteuil = {
  _id: string
  brand: string
  model: string
  desc: string
  specsTitle: string
  specs: string[]
  image: SanityImageSource
  href: string
}

export type SanityEclairage = {
  _id: string
  brand: string
  title: string
  desc: string
  image: SanityImageSource
  href: string
}

export type SanityEclairageHero = {
  eyebrow: string
  desc: string
  thumb1: SanityImageSource
  thumb2: SanityImageSource
  thumb3: SanityImageSource
}

export type SanityEnteteDePage = {
  titre: string
  description: string
}

export type SanityMobilier = {
  _id: string
  brand: string
  title: string
  desc: string
  image: SanityImageSource
}

export type SanityPartenaires = {
  liste: string[]
}

export type SanityProduit = {
  _id: string
  brand: string
  model: string
  headline?: string
  lines?: string[]
  description?: string
  image: SanityImageSource
}

export type SanityPageRadiologieEmpreinte = {
  titre: string
  description: string
}

export type SanityMembreEquipe = {
  _id: string
  name: string
  role: string
  phone: string
  email: string
  photo?: SanityImageSource
  afficherDansSociete?: boolean
  afficherDansFooter?: boolean
}

export type SanityPageSociete = {
  titre: string
  intro: any[]  // portable text
}

export type SanityFooterContact = {
  _id: string
  name: string
  role?: string
  phone?: string
  email?: string
}