// app/scripts/migrate-formations.ts
import fs from 'fs'
import path from 'path'
import { writeClient } from '../src/lib/sanity/write-client'

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function block(key: string, style: string, spans: { key: string; text: string; marks?: string[] }[], listItem?: string): any {
  return {
    _type: 'block',
    _key: key,
    style,
    ...(listItem ? { listItem, level: 1 } : {}),
    children: spans.map(s => ({
      _type: 'span',
      _key: s.key,
      text: s.text,
      marks: s.marks ?? [],
    })),
    markDefs: [],
  }
}

const h3 = (key: string, text: string) => block(key, 'h3', [{ key: `${key}s`, text }])
const h4 = (key: string, text: string) => block(key, 'h4', [{ key: `${key}s`, text }])
const p = (key: string, text: string) => block(key, 'normal', [{ key: `${key}s`, text }])
const bold = (key: string, text: string) => block(key, 'normal', [{ key: `${key}s`, text, marks: ['strong'] }])
const bullet = (key: string, text: string) => block(key, 'normal', [{ key: `${key}s`, text }], 'bullet')

// ─── CONTENU PAGE FORMATIONS ──────────────────────────────────────────────────

const pageFormationsDescription = [
  bold('pf1', 'Pyrénées Dentaire : des formations spécialisées pour laboratoires et chirurgiens-dentistes'),
  p('pf2', "Pyrénées Dentaire, en collaboration avec ses partenaires experts, propose des formations professionnelles sur mesure destinées aux laboratoires dentaires et aux chirurgiens-dentistes. Ces sessions ont pour objectif d'améliorer les compétences techniques, optimiser l'ergonomie au travail et maîtriser les outils d'imagerie moderne."),
  p('pf3', "La formation en ergonomie enseigne les bonnes postures et gestes adaptés pour prévenir les tensions physiques et les troubles musculo-squelettiques. Une meilleure ergonomie permet aux professionnels de travailler plus confortablement tout en conservant une précision optimale dans leurs interventions ou fabrications dentaires."),
  p('pf4', "La posturologie se concentre sur l'équilibre corporel et le confort au quotidien. Les participants apprennent à corriger les déséquilibres et à améliorer leur posture, ce qui contribue à la santé globale et à la qualité du travail, que ce soit en cabinet ou en laboratoire."),
  p('pf5', "La formation en imagerie dentaire permet de maîtriser les outils numériques et radiographiques essentiels pour le diagnostic, la planification et la communication avec les patients et les équipes. Les participants apprennent à exploiter pleinement ces technologies pour des résultats précis et fiables."),
  p('pf6', "Avec nos formations, nous accompagnons laboratoires et chirurgiens-dentistes dans l'amélioration de leur pratique, la prévention des risques professionnels et l'adoption des dernières innovations technologiques du secteur."),
]

// ─── PROGRAMME : CHAÎNE DU NUMÉRIQUE ─────────────────────────────────────────

const chaineNumeriqueProgramme = [
  h3('cn1', 'PROGRAMME'),
  block('cn2', 'normal', [
    { key: 'cn2a', text: 'PYRÉNÉES DENTAIRE vous invite à participer à la journée ' },
    { key: 'cn2b', text: 'LA CHAÎNE DU NUMÉRIQUE', marks: ['strong'] },
    { key: 'cn2c', text: ' animée par Jean-Michel KEPA, le Dr Marchat et le laboratoire MANCINI.' },
  ]),
  bold('cn3', "L'intelligence artificielle se renforce pour nos CBCT"),
  h4('cn4', "Pourquoi vous allez l'adorer"),
  bullet('cn5', 'Segmentation automatique'),
  bullet('cn6', "L'IA identifie et sépare instantanément les structures anatomiques."),
  bold('cn7', 'Gain de temps'),
  p('cn8', 'Plus besoin de détourage manuel fastidieux, le logiciel prépare le travail pour vous.'),
  bold('cn9', 'Diagnostic précis'),
  p('cn10', 'Une visualisation plus claire pour une planification implantaire sécurisée.'),
]

// ─── PROGRAMME : RESTAURATION DU SOURIRE ─────────────────────────────────────

const restaurationSourireProgramme = [
  h3('rs1', 'PROGRAMME'),
  p('rs2', 'Durée : de 9h à 17h, avec 1h de pause déjeuner.'),
  p('rs3', "La journée alterne des séquences théoriques et pratiques afin de permettre une mise en application immédiate des concepts abordés."),
  h4('rs4', 'Matinée — 9h à 12h30'),
  bold('rs5', 'Partie théorique'),
  bullet('rs6', 'Analyse esthétique'),
  bullet('rs7', 'Composite stratifié antérieur et simplification des teintes'),
  bullet('rs8', 'Techniques spécifiques de préparation, montage et polissage'),
  bold('rs9', 'Partie pratique'),
  bullet('rs10', 'Restauration avec wax-up de deux angles fracturés (11-21)'),
  h4('rs11', 'PAUSE DÉJEUNER — 12h30 à 13h30'),
  h4('rs12', 'Après-midi — 13h30 à 17h'),
  bold('rs13', 'Partie théorique'),
  bullet('rs14', 'Technique de composites injectés (simples ou stratifiés) et facettes ceramiques'),
  bullet('rs15', 'Composite stratifié antérieur et simplification des teintes'),
  bullet('rs16', "Réalisation d'un moule en silicone transparent"),
  bullet('rs17', 'Préparation des surfaces'),
  bullet('rs18', "Astuces d'injection"),
  bullet('rs19', 'Technique de push-back'),
  bullet('rs20', 'Optimisation du polissage'),
  bold('rs21', 'Partie pratique'),
  p('rs22', "Reconstruction des incisives latérales conoïdes à l'aide des techniques de composites injectés simples et stratifiés."),
]

// ─── MIGRATION ────────────────────────────────────────────────────────────────

async function migrate() {
  console.log('🚀 Migration formations...')
  const imgDir = path.resolve(process.cwd(), 'public/images')

  // pageFormations singleton
  console.log('📝 Création pageFormations...')
  await writeClient.createOrReplace({
    _id: 'pageFormations',
    _type: 'pageFormations',
    titre: 'NOS FORMATIONS ET EVENEMENTS',
    description: pageFormationsDescription,
  })
  console.log('✅ pageFormations créé')

  // Formation 1 : Chaîne du Numérique
  console.log('⬆️  Upload poster : FORMATION_OWANDY.png')
  const poster1 = await writeClient.assets.upload(
    'image',
    fs.createReadStream(path.join(imgDir, 'FORMATION_OWANDY.png')),
    { filename: 'FORMATION_OWANDY.png' }
  )

  await writeClient.createOrReplace({
    _id: 'formation-chaine-numerique',
    _type: 'formation',
    titre: 'LA CHAÎNE DU NUMÉRIQUE',
    dateLine: 'Jeudi 26 Mars 2026 - à la Rotonde de Salies de Béarn',
    startDate: '2026-03-26',
    lieu: 'Rotonde de Salies de Béarn',
    statut: 'publie',
    poster: {
      _type: 'image',
      asset: { _type: 'reference', _ref: poster1._id },
      alt: 'Formation La chaîne du numérique',
    },
    horaires: { debut: '9h', fin: '17h' },
    programme: chaineNumeriqueProgramme,
    contacts: [
      {
        _key: 'c1',
        nom: 'AGATA GAUTRY',
        email: 'agata.pyreneesdentaire@gmail.com',
        emailHref: 'mailto:agata.pyreneesdentaire@gmail.com',
        telephone: '06 38 65 75 87',
        telephoneHref: 'tel:+33638657587',
      },
      {
        _key: 'c2',
        nom: 'JULIEN DELMOND',
        email: 'julien.delmond@icloud.com',
        emailHref: 'mailto:julien.delmond@icloud.com',
        telephone: '06 77 11 91 21',
        telephoneHref: 'tel:+33677119121',
      },
    ],
    ctaLabel: 'INSCRIPTION',
    ctaHref: '/inscription',
  })
  console.log('✅ formation-chaine-numerique créée')

  // Formation 2 : Restauration du Sourire
  console.log('⬆️  Upload poster : affiche-formation.png')
  const poster2 = await writeClient.assets.upload(
    'image',
    fs.createReadStream(path.join(imgDir, 'affiche-formation.png')),
    { filename: 'affiche-formation.png' }
  )

  await writeClient.createOrReplace({
    _id: 'formation-restauration-sourire',
    _type: 'formation',
    titreTop: '360°',
    titre: 'SUR LA RESTAURATION DU SOURIRE',
    dateLine: 'Jeudi 21 Mai 2026 - Casino Capbreton',
    startDate: '2026-05-21',
    lieu: 'Casino Capbreton',
    statut: 'publie',
    poster: {
      _type: 'image',
      asset: { _type: 'reference', _ref: poster2._id },
      alt: 'Affiche formation restauration du sourire',
    },
    horaires: { debut: '9h', fin: '17h', notes: 'avec 1h de pause déjeuner' },
    programme: restaurationSourireProgramme,
    contacts: [
      {
        _key: 'c1',
        nom: 'JULIEN DELMOND',
        email: 'julien.delmond@icloud.com',
        emailHref: 'mailto:julien.delmond@icloud.com',
        telephone: '06 77 11 91 21',
        telephoneHref: 'tel:+33677119121',
      },
    ],
    ctaLabel: 'INSCRIPTION',
    ctaHref: '/inscription',
  })
  console.log('✅ formation-restauration-sourire créée')

  console.log('🎉 Migration terminée !')
}

migrate().catch(console.error)
