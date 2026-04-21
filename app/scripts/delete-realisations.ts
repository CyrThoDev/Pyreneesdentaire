// app/scripts/delete-realisations.ts
import { writeClient } from "../src/lib/sanity/write-client"

async function deleteAll() {
  console.log('🗑️  Suppression de toutes les réalisations...')
  const docs = await writeClient.fetch<{ _id: string }[]>('*[_type == "realisation"]{ _id }')
  for (const doc of docs) {
    await writeClient.delete(doc._id)
    console.log(`✅ Supprimé : ${doc._id}`)
  }
  console.log(`🎉 ${docs.length} réalisations supprimées.`)
}

deleteAll().catch(console.error)
