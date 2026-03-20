// app/scripts/migrate-equipe.ts
import { writeClient } from "../src/lib/sanity/write-client"

const team = [
  {
    _type: 'membreEquipe',
    name: 'Guillaume MICHAUT',
    role: 'Agence',
    phone: '05 59 02 28 46',
    email: 'michaut.g@wanadoo.fr',
    afficherDansSociete: true,
    afficherDansFooter: true,
  },
  {
    _type: 'membreEquipe',
    name: 'Nadège MICHAUT',
    role: 'Service comptabilité',
    phone: '05 59 02 28 46',
    email: 'nadege.michaut@gmail.com',
    afficherDansSociete: true,
    afficherDansFooter: true,
  },
  {
    _type: 'membreEquipe',
    name: 'Laurent DEPIESSE',
    role: 'Technico-commercial',
    phone: '06 83 11 51 80',
    email: 'laurentdepiesse@gmail.com',
    afficherDansSociete: true,
    afficherDansFooter: true,
  },
  {
    _type: 'membreEquipe',
    name: 'Agata GAUTRY',
    role: 'Responsable commerciale matériel',
    phone: '06 36 65 75 87',
    email: 'agata.pyreneesdentaire@gmail.com',
    afficherDansSociete: true,
    afficherDansFooter: true,
  },
  {
    _type: 'membreEquipe',
    name: 'Julien DELMOND',
    role: 'Responsable commercial consommable',
    phone: '06 77 11 91 21',
    email: 'julien.delmond@icloud.com',
    afficherDansSociete: true,
    afficherDansFooter: true,
  },
  {
    _type: 'membreEquipe',
    name: 'Richard DIAZ',
    role: 'Technicien',
    phone: '06 07 63 61 36',
    email: 'richard.pyrenees@orange.fr',
    afficherDansSociete: true,
    afficherDansFooter: true,
  },
  {
    _type: 'membreEquipe',
    name: 'Jean-Marie ROCTY',
    role: 'Technicien',
    phone: '06 48 22 58 07',
    email: 'jmarie.pyreneesdentaire@gmail.com',
    afficherDansSociete: true,
    afficherDansFooter: true,
  },
  {
    _type: 'membreEquipe',
    name: 'Jean-Marc LACOUR',
    role: 'Technicien',
    phone: '06 20 28 83 66',
    email: 'lacour.pyreneesdentaire@orange.fr',
    afficherDansSociete: true,
    afficherDansFooter: true,
  },
  {
    _type: 'membreEquipe',
    name: 'Loïc NIESER',
    role: 'Technicien',
    phone: '07 86 94 83 07',
    email: 'loic.pyrenees@gmail.com',
    afficherDansSociete: true,
    afficherDansFooter: true,
  },
  {
    _type: 'membreEquipe',
    name: 'Fabrice RIBAS',
    role: 'Service informatique',
    phone: '06 77 75 25 01',
    email: 'p.m.i@wanadoo.fr',
    afficherDansSociete: false,  // ← pas dans la page société
    afficherDansFooter: true,    // ← uniquement dans le footer
  },
]

async function migrate() {
  console.log('🚀 Migration équipe...')
  for (const membre of team) {
    const result = await writeClient.create(membre)
    console.log(`✅ Créé : ${membre.name} (${result._id})`)
  }
  console.log('🎉 Migration terminée !')
}

migrate().catch(console.error)