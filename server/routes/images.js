const express = require('express')
const db = require('../db/db')
// const utils = require('../lib.js')

const router = express.Router()

// /vi/images
router.get('/ping/', (req, res) => {
  res.json({ pingback: 'hello world' })
})

router.get('/all', (req, res) => {
  console.log('redirecting')
  res.redirect('/v1/images/all/random')
})

router.get('/all/:sort', (req, res) => {
  const sort = req.params.sort
  console.log('sort:', sort)
  db.getImages(sort)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

// router.patch('/:id', (req, res) => {
//   const id = req.params.id
//   const comment = {
//     ...req.body,
//     post_id: req.body.postId,
//     date_posted: req.body.datePosted,
//   }
//   delete comment.postId
//   delete comment.datePosted
//   console.log(comment)
//   db.editComment(id, comment)
//     .then((data) => {
//       res.json(data)
//     })
//     .catch((err) => {
//       console.error(err.message)
//       res.status(500).send('Server error')
//     })
// })

module.exports = router
