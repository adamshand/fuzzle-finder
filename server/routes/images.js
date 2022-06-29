const express = require('express')
const db = require('../db/db')
// const utils = require('../lib.js')

const router = express.Router()

// /api/v1
router.get('/ping(/:msg)?', (req, res) => {
  const msg = req.params.msg || 'hello world'
  res.json({ pingback: msg })
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

router.get('/thumbs/tag/:tag', (req, res) => {
  const { tag } = req.params
  const { sort } = req.query
  console.log({ tag })
  // const sort = req.params.sort || 'random'
  db.getImagesByTag(tag, sort)
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
