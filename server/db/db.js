const config = require('./knexfile').development
const connection = require('knex')(config)

function getPhotos(limit, search, sort = 'random', db = connection) {
  let sortRaw
  switch (sort) {
    case 'views':
      sortRaw = 'views desc'
      break
    case 'date':
      sortRaw = 'date desc'
      break
    case 'rdate':
      sortRaw = 'date asc'
      break
    default:
      sortRaw = 'random()'
      break
  }

  return db('photos').modify((query) => {
    search &&
      query
        .where('tags', 'like', `%${search}%`)
        .orWhere('title', 'like', `%${search}%`)
    limit && query.limit(limit)
    sort && query.orderByRaw(sortRaw)
    return query
  })
}

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

// limit, search, sort, tag
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

module.exports = {
  incrementPhotoCounter,
  getPhoto,
  getPhotos,
  getPhotosByTag,
  getGroupTags,
  getRandomPhotoByTag,
}

// deprecating for the moment and using getPhotos with .orWhere()
// function searchPhotos(s, db = connection) {
//   return db('photos').where('title', s).orWhere('tags', s)
// }

// function getPhotos(
//   sort = 'random',
//   limit = 9999,
//   filter = '/', // all tags contain '/'
//   db = connection
// ) {
//   switch (sort) {
//     case 'views':
//       return db('photos')
//         .where('tags', `%${filter}%`)
//         .orWhere('title', `%${filter}%`)
//         .orderBy('views', 'desc')
//         .limit(limit)
//     case 'date':
//       return db('photos')
//         .where('tags', `%${filter}%`)
//         .orWhere('title', `%${filter}%`)
//         .orderBy('date', 'desc')
//         .limit(limit)
//     case 'rdate':
//       return db('photos')
//         .where('tags', `%${filter}%`)
//         .orWhere('title', `%${filter}%`)
//         .orderBy('date', 'asc')
//         .limit(limit)
//     default:
//       return db('photos')
//         .where('tags', `%${filter}%`)
//         .orWhere('title', `%${filter}%`)
//         .orderByRaw('random()')
//         .limit(limit)
//   }
// }
