// app/scripts/migrate-hygiene.ts
import { writeClient } from "../src/lib/sanity/write-client"

type ProduitData = {
  _type: string
  categorie: string
  brand: string
  model: string
  headline?: string
  description?: string
}

const produits: ProduitData[] = [
 
  {
    _type: 'produit',
    categorie: 'hygiene-sterilisation',
    brand: 'MELAG',
    model: 'Vacuclave 105 & 305',
    headline: 'Les autoclaves les plus rapides de leur catégorie',
    description: 'Stérilisez jusqu\'à 22 contre-angles sur 2 plateaux ou 1 MELAstore Box Compact en un temps record. Rapidité, fiabilité et traçabilité avancée.',
  },
  {
    _type: 'produit',
    categorie: 'hygiene-sterilisation',
    brand: 'EURONDA',
    model: 'Eurosafe 170',
    headline: 'Thermodésinfecteur haute capacité',
    description: 'Système de lavage et séchage par injection performant. Filtration optimisée pour préserver la pompe et garantir efficacité et longévité dans les cliniques à fort flux patient.',
  },
  {
    _type: 'produit',
    categorie: 'hygiene-sterilisation',
    brand: 'EURONDA',
    model: 'Autoclave E10',
    headline: 'Traçabilité numérique et interface intuitive',
    description: 'Écran couleur 7 pouces, gestion connectée des données de stérilisation, systèmes de traçabilité numérique et papier pour simplifier les opérations quotidiennes.',
  },

  {
    _type: 'produit',
    categorie: 'hygiene-sterilisation',
    brand: 'CASTELLINI',
    model: 'H10 PLUS',
    headline: 'Premier dispositif 4 en 1',
    description: 'Décontamination, lavage, désinfection thermique et séchage réunis en un seul processus automatisé. Simplifie le reconditionnement des instruments et réduit les risques.',
  },
  {
    _type: 'produit',
    categorie: 'hygiene-sterilisation',
    brand: 'NSK',
    model: 'iCare+',
    headline: 'Nettoyage et lubrification automatiques',
    description: 'Système automatique de nettoyage, désinfection et lubrification des instruments dynamiques. Protège vos équipements et réduit les risques infectieux.',
  },
]

async function migrate() {
  console.log('🚀 Migration hygiène & stérilisation...')
  for (const produit of produits) {
    const result = await writeClient.create(produit)
    console.log(`✅ Créé : ${produit.brand} ${produit.model} (${result._id})`)
  }
  console.log('🎉 Migration terminée !')
}

migrate().catch(console.error)