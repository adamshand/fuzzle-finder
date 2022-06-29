const config = require('./knexfile').development
const connection = require('knex')(config)
const utils = require('../lib.js')

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
  console.log('db', { sort })
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
}
