// app/scripts/migrate-chirurgie.ts
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
    categorie: 'chirurgie-prophylaxie',
    brand: 'ACTEON',
    model: 'Newtron® P5 XS BLED',
    description: 'Avec NEWTRON P5XS B.LED, vous pouvez compter sur des traitements plus rapides avec un détartrage ultrasonique plus confortable et polyvalent. Les traitements plus confortables pour le patient. Les tissus mous sont préservés, sans dommage gingival et avec une diminution de l\'élimination du ciment.',
  },
  {
    _type: 'produit',
    categorie: 'chirurgie-prophylaxie',
    brand: 'ACTEON',
    model: 'Implant Center 2',
    description: 'L\'Implant Center™ 2 combine les technologies ultrasoniques et rotatives les plus avancées dans un seul appareil pour de nombreuses applications cliniques : chirurgies pré-implantaires et implantaires, parodontie, endodontie, prophylaxie, restauration.',
  },
  {
    _type: 'produit',
    categorie: 'chirurgie-prophylaxie',
    brand: 'NSK',
    model: 'Varios Combi Pro2',
    description: 'Alliant l\'aéropolissage par poudre sous-gingival et supra-gingival au détartrage ultrasonique pour le traitement parodontal, le Varios Combi Pro2 a été pensé pour une utilisation facile, s\'adaptant à votre style de traitement préféré.',
  },
  {
    _type: 'produit',
    categorie: 'chirurgie-prophylaxie',
    brand: 'NSK',
    model: 'Surgic Pro 2',
    description: 'Le moteur chirurgical Surgic Pro largement reconnu évolue pour devenir le « Surgic Pro2 ». Des améliorations ont été apportées, respectivement sur le fonctionnement, la sécurité et le déploiement sans fil.',
  },
  {
    _type: 'produit',
    categorie: 'chirurgie-prophylaxie',
    brand: 'BIEN-AIR',
    model: 'Chiropro Plus',
    description: 'Les contre-angles et pièces à main Bien-Air vous offrent le meilleur de la microtechnologie suisse. Conçu et fabriqué au cœur de la Watch Valley, chaque instrument est une œuvre d\'orfèvrerie alliant ultra-précision, robustesse et silence de fonctionnement.',
  },
  {
    _type: 'produit',
    categorie: 'chirurgie-prophylaxie',
    brand: 'BIEN-AIR',
    model: 'Les contre-angles et pièces à main',
    description: 'Les contre-angles et pièces à main Bien-Air vous offrent le meilleur de la microtechnologie suisse. Conçu et fabriqué au cœur de la Watch Valley, chaque instrument est une œuvre d\'orfèvrerie alliant ultra-précision, robustesse et silence de fonctionnement.',
  },
  {
    _type: 'produit',
    categorie: 'chirurgie-prophylaxie',
    brand: 'MECTRON',
    model: 'Combi touch',
    description: 'Le Combi touch de Mectron est l\'association des ultrasons et de l\'aéropolissage en un seul appareil. Il permet un traitement prophylactique complet : élimination du tartre supra- et sous-gingival, élimination des colorations externes et du biofilm, et nettoyage d\'implants.',
  },
  {
    _type: 'produit',
    categorie: 'chirurgie-prophylaxie',
    brand: 'KAVO',
    model: 'QUATTROcare™ PLUS',
    description: 'Pour une préparation rentable, complète et simple de l\'instrument. Rapide et efficace : chaque cycle de maintenance prend seulement une minute si vous traitez quatre instruments, tandis que l\'ensemble du processus est commandé par un programme et automatisé.',
  },
  {
    _type: 'produit',
    categorie: 'chirurgie-prophylaxie',
    brand: 'KAVO',
    model: 'Les turbines',
    description: 'Pour atteindre facilement la performance maximale : puissantes et silencieuses. Éveillez votre passion avec les turbines dentaires KaVo, en silence : offrant une puissance maximale, des fonctionnalités intelligentes et un confort moderne.',
  },
]

async function migrate() {
  console.log('🚀 Migration chirurgie & prophylaxie...')
  for (const produit of produits) {
    const result = await writeClient.create(produit)
    console.log(`✅ Créé : ${produit.brand} ${produit.model} (${result._id})`)
  }
  console.log('🎉 Migration terminée !')
}

migrate().catch(console.error)