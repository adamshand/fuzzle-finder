const express = require('express')
const db = require('../db/db')
// const utils = require('../lib.js')

const router = express.Router()

// /api/v1
// select * from images where tags like '%species/dog%' order by random() limit 1;
router.get('/hero/:group/:tag', (req, res) => {
  const { group, tag } = req.params
  db.getGroupTags(group)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

router.get('/group/:group', (req, res) => {
  const { group } = req.params
  db.getGroupTags(group)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

router.get('/thumbs/tag/:tag', (req, res) => {
  const { tag } = req.params
  const { sort } = req.query
  db.getImagesByTag(tag, sort)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

router.get('/thumbs', (req, res) => {
  const { sort } = req.query
  db.getImages(sort)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

router.get('/ping(/:msg)?', (req, res) => {
  const msg = req.params.msg || 'hello world'
  res.json({ pingback: msg })
})

module.exports = router
