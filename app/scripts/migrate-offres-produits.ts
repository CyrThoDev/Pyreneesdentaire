// app/scripts/migrate-offres-produits.ts
import fs from 'fs'
import path from 'path'
import { writeClient } from "../src/lib/sanity/write-client"

const offres = [
  {
    _id: 'offre-kulzer-labo',
    title: 'KULZER LABORATOIRE',
    subtitle: 'Feels like kulzer',
    leftImage:  { file: 'labo1.png',    alt: 'Kulzer Laboratoire - visuel' },
    rightImage: { file: 'labo02.png',   alt: 'Kulzer Laboratoire - dépliant offres' },
    pdf: 'depliant-offres-laboratoire-q1-2026-bd.pdf',
  },
  {
    _id: 'offre-kulzer-cabinet',
    title: 'KULZER CABINET',
    subtitle: 'Post Graduate in implant surgery and dental',
    leftImage:  { file: 'cabinet01.png', alt: 'Kulzer Cabinet - visuel' },
    rightImage: { file: 'cabinet02.png', alt: 'Kulzer Cabinet - dépliant offres' },
    pdf: 'depliant-offres-cabinet-dentaire-q1-2026-bd.pdf',
  },
]

async function migrate() {
  console.log('🚀 Migration offres produits...')

  for (const offre of offres) {
    const imgDir = path.resolve(process.cwd(), 'public/images/offres-accueil')
    const pdfDir = path.resolve(process.cwd(), 'public/pdfs')

    console.log(`⬆️  Upload images : ${offre.leftImage.file} / ${offre.rightImage.file}`)
    const [leftAsset, rightAsset] = await Promise.all([
      writeClient.assets.upload('image', fs.createReadStream(path.join(imgDir, offre.leftImage.file)), { filename: offre.leftImage.file }),
      writeClient.assets.upload('image', fs.createReadStream(path.join(imgDir, offre.rightImage.file)), { filename: offre.rightImage.file }),
    ])

    console.log(`⬆️  Upload PDF : ${offre.pdf}`)
    const pdfAsset = await writeClient.assets.upload('file', fs.createReadStream(path.join(pdfDir, offre.pdf)), { filename: offre.pdf })

    const doc = await writeClient.createOrReplace({
      _id: offre._id,
      _type: 'offreProduit',
      title: offre.title,
      subtitle: offre.subtitle,
      leftVisual: {
        _type: 'image',
        asset: { _type: 'reference', _ref: leftAsset._id },
        alt: offre.leftImage.alt,
      },
      rightVisual: {
        _type: 'image',
        asset: { _type: 'reference', _ref: rightAsset._id },
        alt: offre.rightImage.alt,
      },
      fichierPdf: {
        _type: 'file',
        asset: { _type: 'reference', _ref: pdfAsset._id },
      },
    })

    console.log(`✅ Créé : ${doc._id}`)
  }

  console.log('🎉 Migration terminée !')
}

migrate().catch(console.error)
