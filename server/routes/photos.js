const { group } = require('console')
const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

const path = require('path')

const db = require('../db/db')

// https://stackoverflow.com/questions/56386307/loading-of-a-resource-blocked-by-content-security-policy
// res.header('Content-Security-Policy', 'img-src self')

// API endpoints for refactor
// GET /photos
// GET /photos/random?tag=:tag
// GET /photos/:id
// GET /photos/:id/like
// GET /tags/:tag/photos
// GET /groups
// GET /groups/:group

// Base API Route: /api/v1

router.get('/photo/:id', [check('id').isNumeric()], async (req, res) => {
  const { id } = req.params

  try {
    validationResult(req).throw()
  } catch (err) {
    res.status(400).send(`Invalid URL parameter.`)
  }

  try {
    await db.updatePhotoCounter(id)
    const result = await db.getPhoto(id)
    res.json(result)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})

router.get('/randomPhoto/:group/:tag', (req, res) => {
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
