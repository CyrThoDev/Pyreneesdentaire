// app/scripts/migrate-realisations.ts
import fs from 'fs'
import path from 'path'
import { writeClient } from "../src/lib/sanity/write-client"

const realisations = [
  { file: 'realisation7.png',  title: 'Double salle avec cloison bois',  alt: 'Cabinet dentaire – double salle avec cloison bois', ordre: 1  },
  { file: 'realisation11.jpg', title: 'Fauteuil beige sur sol bleu',      alt: 'Fauteuil beige sur sol bleu',                       ordre: 2  },
  { file: 'realisation6.png',  title: 'Cabinet gris lustre circulaire',   alt: 'Cabinet gris avec lustre circulaire',               ordre: 3  },
  { file: 'realisation2.jpeg', title: 'Plan de travail moderne',          alt: 'Plan de travail dentaire moderne',                  ordre: 4  },
  { file: 'realisation9.jpg',  title: 'Cabinet blanc fauteuil noir',      alt: 'Cabinet blanc avec fauteuil noir',                  ordre: 5  },
  { file: 'realisation1.jpg',  title: 'Fauteuil bleu ciel',               alt: 'Cabinet dentaire – fauteuil bleu ciel',             ordre: 6  },
  { file: 'realisation8.jpg',  title: 'Fauteuil bleu fresque murale',     alt: 'Fauteuil bleu avec fresque murale',                 ordre: 7  },
  { file: 'realisation12.jpg', title: 'Plafond décoratif fleuri',         alt: 'Cabinet avec plafond décoratif fleuri',             ordre: 8  },
  { file: 'realisation5.jpg',  title: 'Fauteuil dentaire bleu marine',    alt: 'Fauteuil dentaire bleu marine',                     ordre: 9  },
  { file: 'realisation4.jpg',  title: 'Cabinet mobilier orange',          alt: 'Cabinet avec mobilier orange',                      ordre: 10 },
  { file: 'realisation10.jpg', title: 'Cabinet vert émeraude',            alt: 'Cabinet vert émeraude',                             ordre: 11 },
  { file: 'realisation3.jpg',  title: 'Salle de soins lustre annulaire',  alt: 'Salle de soins avec lustre annulaire',              ordre: 12 },
]

async function migrate() {
  console.log('🚀 Migration réalisations...')

  for (const item of realisations) {
    const filePath = path.resolve(process.cwd(), 'public/images/realisations', item.file)

    console.log(`⬆️  Upload : ${item.file}`)
    const asset = await writeClient.assets.upload('image', fs.createReadStream(filePath), {
      filename: item.file,
    })

    const doc = await writeClient.createOrReplace({
      _id: `realisation-${item.ordre}`,
      _type: 'realisation',
      title: item.title,
      image: {
        _type: 'image',
        asset: { _type: 'reference', _ref: asset._id },
      },
      alt: item.alt,
      ordre: item.ordre,
    })

    console.log(`✅ Créé : ${item.file} (${doc._id})`)
  }

  console.log('🎉 Migration terminée !')
}

migrate().catch(console.error)
