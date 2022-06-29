const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const connection = require('knex')(config)
const utils = require('../lib.js')

function getImages(sort, db = connection) {
  switch (sort) {
    case 'random':
      return db('images')
        .select()
        .then((images) => {
          return utils.shuffleArray(images)
        })
    case 'date':
      return db('images').select().orderBy('date', 'desc')
    case 'rdate':
      return db('images').select().orderBy('date', 'asc')
    default:
      return db('images').select()
  }
}

function getImagesByTag(tag, sort = 'random', db = connection) {
  switch (sort) {
    case 'date':
      return db('images')
        .select()
        .where('tags', 'like', `%/${tag}%`)
        .orderBy('date', 'desc')
    case 'rdate':
      return db('images')
        .select()
        .where('tags', 'like', `%/${tag}%`)
        .orderBy('date', 'asc')
    default:
      // random
      return db('images')
        .select()
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
