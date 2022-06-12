const exifr = require('exifr')
const fs = require('fs/promises')

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

async function main() {
  await deleteAllDbData()

  const files = await fs.readdir('assets/images/')
  for (const filename of files) {
    try {
      if (validateImage(filename)) {
        const metadata = await getExif(filename)
        await insertImageMetadata(metadata)
      }
    } catch (err) {
      console.log(err)
    }
  }

  await db.destroy()
}

function validateImage(filename) {
  const ext = filename.split('.').slice(-1)[0].toLowerCase()
  if (filename.includes('.') && ['jpg', 'jpeg', 'png'].includes(ext)) {
    return true
  }
  console.log(`error: invalid filename: ${filename}`)
  return false
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

async function deleteAllDbData() {
  return await db('images').del()
}

main().catch((e) => {
  process.exitCode = 1
  console.error(`failed: ${e.message}`)
})
