const config = require('./knexfile').development
const connection = require('knex')(config)

function incrementPhotoCounter(id, db = connection) {
  return db('photos').where('id', id).increment('views', 1)
}

function getPhoto(id, db = connection) {
  return db('photos').select().where('id', id).first()
}

function getRandomPhotoByTag(group, tag, db = connection) {
  return db('photos')
    .select('id')
    .where('tags', 'like', `%${group}/${tag}%`)
    .orderByRaw('random()')
    .limit(1)
    .first()
}

function getGroupTags(group, db = connection) {
  const regex = new RegExp(group + '/', 'gi')
  return db('photos')
    .select('tags')
    .where('tags', 'like', `%${group}/%`)
    .orderByRaw('random()')
    .then((result) => {
      // TODO this is a mess, but it works.
      return result
        .map((t) => t.tags.split(' '))
        .reduce((a, e) => a.concat(e))
        .filter((g) => g.includes(group + '/'))
        .map((group) => group.replace(regex, ''))
        .filter((v, i, a) => a.indexOf(v) === i)
    })
}

function getPhotosByTag(tag, sort = 'random', limit = 9999, db = connection) {
  switch (sort) {
    case 'views':
      return db('photos')
        .where('tags', 'like', `%/${tag}%`)
        .orderBy('views', 'desc')
        .limit(limit)
    case 'date':
      return db('photos')
        .where('tags', 'like', `%/${tag}%`)
        .orderBy('date', 'desc')
        .limit(limit)
    case 'rdate':
      return db('photos')
        .where('tags', 'like', `%/${tag}%`)
        .orderBy('date', 'asc')
        .limit(limit)
    default:
      return db('photos')
        .where('tags', 'like', `%/${tag}%`)
        .orderByRaw('random()')
        .limit(limit)
  }
}

function getPhotos(
  sort = 'random',
  limit = 9999,
  filter = '/', // all tags contain '/'
  db = connection
) {
  switch (sort) {
    case 'views':
      return db('photos')
        .where('tags', 'like', `%${filter}%`)
        .orderBy('views', 'desc')
        .limit(limit)
    case 'date':
      return db('photos')
        .where('tags', 'like', `%${filter}%`)
        .orderBy('date', 'desc')
        .limit(limit)
    case 'rdate':
      return db('photos')
        .where('tags', 'like', `%${filter}%`)
        .orderBy('date', 'asc')
        .limit(limit)
    default:
      return db('photos')
        .where('tags', 'like', `%${filter}%`)
        .orderByRaw('random()')
        .limit(limit)
  }
}

module.exports = {
  incrementPhotoCounter,
  getPhoto,
  getPhotos,
  getPhotosByTag,
  getGroupTags,
  getRandomPhotoByTag,
}
