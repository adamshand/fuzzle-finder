const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

const path = require('path')

const db = require('../db/db')
// const { shuffle } = require('lodash')

// https://stackoverflow.com/questions/56386307/loading-of-a-resource-blocked-by-content-security-policy
// res.header('Content-Security-Policy', 'img-src self')

// Base API Route: /api/v1

router.get('/photo/:id', [check('id').isNumeric()], (req, res) => {
  const { id } = req.params
  const [error] = validationResult(req).errors
  console.log(error)
  if (error.length === 0) {
    db.updatePhotoCounter(id)
      .then(() => true)
      .catch((err) => {
        console.error(err.message)
        res.status(500).send('Server error')
      })

    db.getPhoto(id)
      .then((photo) => {
        res.json(photo)
      })
      .catch((err) => {
        console.error(err.message)
        res.status(500).send('Server error')
      })
  } else {
    res.status(400).send(`Invalid photo ${error.param} "${error.value}"`)
  }
})

router.get('/photo/:group/:tag', (req, res) => {
  const { group, tag } = req.params
  db.getRandomPhotoByTag(group, tag)
    .then((photo) => {
      res.sendFile(
        path.join(__dirname, '../../server/public/images', photo.filename)
      )
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

// router.get('/group', (req, res) => {
//   res.redirect('/')
// })

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

router.get('/photos/tag/:tag', (req, res) => {
  const { tag } = req.params
  const { sort, limit } = req.query
  db.getPhotosByTag(tag, sort, limit)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

router.get('/photos/', (req, res) => {
  const { sort, limit } = req.query
  db.getPhotos(sort, limit)
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
