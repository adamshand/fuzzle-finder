const config = require('./knexfile').development
const connection = require('knex')(config)

function updatePhotoCounter(id, db = connection) {
  return db('images').where('id', id).increment('views', 1)
}

function getPhoto(id, db = connection) {
  return db('images').select().where('id', id).first()
}

function getRandomPhotoByTag(group, tag, db = connection) {
  return db('images')
    .select('filename')
    .where('tags', 'like', `%${group}/${tag}%`)
    .orderByRaw('random()')
    .limit(1)
    .first()
}

function getGroupTags(group, db = connection) {
  const regex = new RegExp(group + '/', 'gi')
  //TODO need to sanitise $group
  return db('images')
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
      // .sort()
    })
}

function getPhotos(sort = 'random', limit = 9999, db = connection) {
  switch (sort) {
    case 'views':
      return db('images').select().orderBy('views', 'desc').limit(limit)
    case 'date':
      return db('images').select().orderBy('date', 'desc').limit(limit)
    case 'rdate':
      return db('images').select().orderBy('date', 'asc').limit(limit)
    default:
      return db('images').select().orderByRaw('random()').limit(limit)
  }
}

function getPhotosByTag(tag, sort = 'random', limit = 9999, db = connection) {
  //TODO need to sanitise $tag & sort (?)
  switch (sort) {
    case 'views':
      return db('images')
        .where('tags', 'like', `%/${tag}%`)
        .where('views', '>', 0)
        .orderBy('views', 'desc')
        .limit(limit)
    case 'date':
      return db('images')
        .where('tags', 'like', `%/${tag}%`)
        .orderBy('date', 'desc')
        .limit(limit)
    case 'rdate':
      return db('images')
        .where('tags', 'like', `%/${tag}%`)
        .orderBy('date', 'asc')
        .limit(limit)
    default:
      return db('images')
        .where('tags', 'like', `%/${tag}%`)
        .orderByRaw('random()')
        .limit(limit)
  }
}

module.exports = {
  updatePhotoCounter,
  getPhoto,
  getPhotos,
  getPhotosByTag,
  getGroupTags,
  getRandomPhotoByTag,
}
