// app/scripts/migrate-footer.ts
import { writeClient } from "../src/lib/sanity/write-client"

type FooterContactData = {
  _type: string
  name: string
  role?: string
  phone?: string
  email?: string
}
const contacts : FooterContactData[] = [
  { _type: 'footerContact', name: 'Agence', phone: '05 59 02 28 46', email: 'michaut.g@wanadoo.fr' },
  { _type: 'footerContact', name: 'Service comptabilité', phone: '05 59 02 28 46', email: 'nadege.michaut@gmail.com' },
  { _type: 'footerContact', name: 'Laurent DEPIESSE', role: 'Technico-commercial', phone: '06 83 11 51 80', email: 'laurentdepiesse@gmail.com' },
  { _type: 'footerContact', name: 'Agata GAUTRY', role: 'Responsable commerciale matériel', phone: '06 38 65 75 87', email: 'agata.pyreneesdentaire@gmail.com' },
  { _type: 'footerContact', name: 'Julien DELMOND', role: 'Responsable commercial consommable\nCabinet/Laboratoire', phone: '06 77 11 91 21', email: 'julien.delmond@icloud.com' },
  { _type: 'footerContact', name: 'Richard DIAZ', role: 'Technicien', phone: '06 07 63 61 36', email: 'richard.pyrenees@orange.fr' },
  { _type: 'footerContact', name: 'Jean-Marie ROCTY', role: 'Technicien', phone: '06 48 22 58 07', email: 'jmarie.pyreneesdentaire@gmail.com' },
  { _type: 'footerContact', name: 'Jean-Marc LACOUR', role: 'Technicien', phone: '06 20 28 83 66', email: 'lacour.pyreneesdentaire@orange.fr' },
  { _type: 'footerContact', name: 'Loïc NIESER', role: 'Technicien', phone: '07 86 94 83 07', email: 'loic.pyrenees@gmail.com' },
  { _type: 'footerContact', name: 'Fabrice RIBAS', role: 'Service informatique', phone: '06 77 75 25 01', email: 'p.m.i@wanadoo.fr' },
]

async function migrate() {
  console.log('🚀 Migration footer...')
  for (const contact of contacts) {
    const result = await writeClient.create(contact)
    console.log(`✅ Créé : ${contact.name} (${result._id})`)
  }
  console.log('🎉 Migration terminée !')
}

migrate().catch(console.error)