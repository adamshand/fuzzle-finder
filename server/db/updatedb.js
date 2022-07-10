const exifr = require('exifr')
const fs = require('fs/promises')
const md5 = require('md5-file')

const config = require('./knexfile').development
const db = require('knex')(config)

async function main() {
  await deleteAllDbData()

  const files = await fs.readdir('../public/images/')
  for (const filename of files) {
    try {
      if (validateImage(filename)) {
        const metadata = await getExif(filename)
        await insertImageMetadata(metadata, filename)
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

async function insertImageMetadata(metadata, file) {
  const { title, date, tags } = metadata
  const views = 0
  const id = await md5(`../public/images/${file}`)
  return await db('photos').insert({ id, title, date, tags, views })
}

async function getExif(filename) {
  let {
    CreateDate: date,
    Keywords: tags,
    ObjectName: title,
  } = await exifr.parse('../public/images/' + filename, {
    exif: true,
    iptc: true,
  })
  date = date.toISOString().split('T')[0]
  if (typeof tags === 'string') {
    // images with single tag return as string
    tags = tags.toLowerCase()
  } else {
    tags = tags
      .map((tag) => tag.toLowerCase())
      .filter((tag) => ['name', 'species', 'with'].includes(tag.split('/')[0]))
      .join(' ')
  }
  console.log({ filename, title, date, tags })
  return { filename, title, date, tags }
}

async function deleteAllDbData() {
  return await db('photos').del()
}

main().catch((e) => {
  process.exitCode = 1
  console.error(`failed: ${e.message}`)
})
