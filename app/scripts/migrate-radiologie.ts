// app/scripts/migrate-radiologie.ts
import { writeClient } from "../src/lib/sanity/write-client"

type ProduitData = {
  _type: string
  categorie: string
  brand: string
  model: string
  headline?: string
  lines?: string[]
  description?: string
}

const produits: ProduitData[] = [
  {
    _type: 'produit',
    categorie: 'radiologie-empreinte',
    brand: 'DEXIS',
    model: 'DEXIS FOCUS',
    description: "Design pratique renforcé par le mécanisme « Anti-Drift », garantissant une utilisation stable et précise.",
  },
  {
    _type: 'produit',
    categorie: 'radiologie-empreinte',
    brand: 'DEXIS',
    model: 'DEXIS™ IXS™ Sensor',
    description: "Nouvelle version améliorée de Gendex™ : meilleur contraste, moins de bruit, grande flexibilité de dose.",
  },
  {
    _type: 'produit',
    categorie: 'radiologie-empreinte',
    brand: 'DEXIS',
    model: 'DEXIS IS 3800W',
    description: `La liberté d'évoluer sans fil
Jusqu'à une heure de prise d'empreinte en continu. Station de recharge intelligente. Connexion Wi-Fi point-à-point dédiée.`,
  },
  {
    _type: 'produit',
    categorie: 'radiologie-empreinte',
    brand: 'ACTEON',
    model: 'X-MIND® optima 3D',
    description: "Design compact, détection de pointe, qualité de diagnostic élevée. Association matériel avancé + logiciel RealGUIDE™ 5.4.",
  },
  {
    _type: 'produit',
    categorie: 'radiologie-empreinte',
    brand: 'ACTEON',
    model: 'Scanner PSPIX® 2',
    description: "Déposez la plaque : détection automatique, numérisation, optimisation et envoi instantané. Très compact.",
  },
  {
    _type: 'produit',
    categorie: 'radiologie-empreinte',
    brand: 'DÜRR DENTAL',
    model: 'VistaScan Mini View 2.0',
    description: "Technologie de pointe, fonctions IA, Smart Reader pour automatiser les workflows, excellente qualité d'image.",
  },
  {
    _type: 'produit',
    categorie: 'radiologie-empreinte',
    brand: 'MYRAY',
    model: 'Hyperion X9 Pro',
    description: "Imagerie 2D, 3D et céphalométrique. Diagnostics rapides, sûrs et de qualité supérieure.",
  },
]

async function migrate() {
  console.log('🚀 Migration radiologie & empreinte...')
  for (const produit of produits) {
    const result = await writeClient.create(produit)
    console.log(`✅ Créé : ${produit.brand} ${produit.model} (${result._id})`)
  }
  console.log('🎉 Migration terminée !')
}

migrate().catch(console.error)