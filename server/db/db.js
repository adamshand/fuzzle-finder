const config = require('./knexfile').development
const connection = require('knex')(config)
const utils = require('../lib.js')

function getPhotoByTag(group, tag, db = connection) {
  // select * from images where tags like '%species/dog%' order by random() limit 1;
  return db('images')
    .select('filename')
    .where('tags', 'like', `%${group}/${tag}%`)
    .orderby()
    .limit(1)
}
function getGroupTags(group, db = connection) {
  const regex = new RegExp(group + '/', 'gi')
  //TODO need to sanitise $group
  return db('images')
    .select('tags')
    .where('tags', 'like', `%${group}/%`)
    .then((result) => {
      // TODO this is a mess, but it works.
      return result
        .map((t) => t.tags.split(' '))
        .reduce((a, e) => a.concat(e))
        .filter((g) => g.includes(group + '/'))
        .map((group) => group.replace(regex, ''))
        .filter((v, i, a) => a.indexOf(v) === i)
        .sort()
    })
}
//        .map((group) => group.replace(/with[/]/gi, ''))

function getImages(sort = 'random', db = connection) {
  switch (sort) {
    case 'date':
      return db('images').select().orderBy('date', 'desc')
    case 'rdate':
      return db('images').select().orderBy('date', 'asc')
    default:
      return db('images')
        .select()
        .then((images) => {
          return utils.shuffleArray(images)
        })
  }
}

function getImagesByTag(tag, sort = 'random', db = connection) {
  //TODO need to sanitise $tag & sort (?)
  switch (sort) {
    case 'date':
      return db('images')
        .where('tags', 'like', `%/${tag}%`)
        .orderBy('date', 'desc')
    case 'rdate':
      return db('images')
        .where('tags', 'like', `%/${tag}%`)
        .orderBy('date', 'asc')
    default:
      return db('images')
        .where('tags', 'like', `%/${tag}%`)
        .then((images) => {
          return utils.shuffleArray(images)
        })
  }
}

module.exports = {
  getImages,
  getImagesByTag,
  getGroupTags,
  getPhotoByTag,
}
