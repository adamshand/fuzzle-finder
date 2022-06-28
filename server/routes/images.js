const express = require('express')
const db = require('../db/db')
const router = express.Router()

// /vi/images
router.get('/ping/', (req, res) => {
  res.json({ pingback: 'hello world' })
})

// router.delete('/:id', (req, res) => {
//   const id = req.params.id
//   db.deleteComment(id)
//     .then((data) => {
//       res.json(data)
//     })
//     .catch((err) => {
//       console.error(err.message)
//       res.status(500).send('Server error')
//     })
// })

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
