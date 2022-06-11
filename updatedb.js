const exifr = require('exifr')
const fs = require('fs')

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

deleteDb()

const files = fs.readdirSync('assets/images/')
files.forEach(async (filename) => {
  try {
    if (validateImage(filename)) {
      const metadata = await getExif(filename)
      await insertImageMetadata(metadata)
    }
  } catch (err) {
    console.log(err)
  } finally {
    // db.destroy   // this should work, but it's not ???
  }
})

function validateImage(filename) {
  let r = false
  const ext = filename.split('.').slice(-1)[0].toLowerCase()
  if (filename.includes('.') && ['jpg', 'jpeg', 'png'].includes(ext)) {
    r = true
  }
  return r
}

async function insertImageMetadata(metadata) {
  const { filename, title, date, tags } = metadata
  return await db('images').insert({ filename, title, date, tags })
}

async function getExif(filename) {
  let {
    CreateDate: date,
    Keywords: tags,
    ObjectName: title,
  } = await exifr.parse('assets/images/' + filename, {
    exif: true,
    iptc: true,
  })
  date = date.toISOString().split('T')[0]
  if (typeof tags === 'string') {
    // images with single tag return as string
    tags = tags.toLowerCase()
  } else {
    tags = tags
      .filter((x) => !['Type/Selfie', 'Flagged'].includes(x))
      .map((x) => x.toLowerCase())
      .join(' ')
  }
  console.log({ filename, title, date, tags })
  return { filename, title, date, tags }
}

async function deleteDb() {
  return await db('images').del()
}

// const keywords = exif.Keywords.filter(
//   (x) =>
//     ![
//       'Type/Selfie',
//       'Flagged',
//       'Border Collie',
//       'Tabby',
//       'Jack Russell',
//     ].includes(x)
// ).map((x) => x.toLowerCase())
// console.log(keywords)
