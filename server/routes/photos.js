const express = require('express')
const router = express.Router()
// const { check, validationResult } = require('express-validator')

const path = require('path')

const db = require('../db/db')

// Base API Route: /api/v1

router.get('/photos', (req, res) => {
  // const { limit, search, sort, tag } = req.query
  const { limit, search, sort } = req.query
  // db.getPhotos(limit, search, sort, tag)
  db.getPhotos(limit, search, sort)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

// router.get('/photos/:id', [check('id').isNumeric()], async (req, res) => {
router.get('/photos/:id', async (req, res) => {
  const { id } = req.params

  // TODO look at using isEmpty() instead of two try/catch
  // try {
  //   validationResult(req).throw()
  // } catch (err) {
  //   res.status(400).send(`Invalid URL parameter.`)
  // }

  try {
    await db.incrementPhotoCounter(id)
    const result = await db.getPhoto(id)
    res.json(result)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})

router.get('/random/:group/:tag', (req, res) => {
  const { group, tag } = req.params
  db.getRandomPhotoByTag(group, tag)
    .then((photo) => {
      res.sendFile(
        path.join(__dirname, '../../server/public/images', photo.id + '.jpeg')
      )
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

// router.get('/tags/:tag/photos', (req, res) => {
//   const { tag } = req.params
//   const { sort, limit } = req.query
//   db.getPhotosByTag(tag, sort, limit)
//     .then((data) => {
//       res.json(data)
//     })
//     .catch((err) => {
//       console.error(err.message)
//       res.status(500).send('Server error')
//     })
// })

router.get('/groups/:group/tags', (req, res) => {
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

router.get('/ping(/:msg)?', (req, res) => {
  const msg = req.params.msg || 'hello world'
  res.json({ pingback: msg })
})

module.exports = router

// router.get('/searches', (req, res) => {
// possible restful endpoint fo saved searches
// })

// still messing with endpoints
//
// /groups              all groups
// /tags/:group         all tags with :group (or /groups/:group)
// /photos              all photos
// /photos?tag=:tag     all photos with tag xxx
// /photos?limit=3      first three photos
// /photos?sort=random  orders photos randomly
// /photos?search=:str  all photos with tag or title containing :str
// /photos/:id          photo with :id

// /garages
//   Returns list of garages (think JSON array here)
// /garages/yyy
//   Returns specific garage
// /garage/yyy/cars
//   Returns list of cars in garage
// /garages/cars
//   Returns list of all cars in all garages (may not be practical of course)
// /cars
//   Returns list of all cars
// /cars/xxx
//   Returns specific car
// /cars/colors
//   Returns lists of all posible colors for cars
