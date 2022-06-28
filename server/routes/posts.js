const express = require('express')

// eslint-disable-next-line no-unused-vars
const db = require('../db/db')

const router = express.Router()

// server.use('/v1/posts', posts)

router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deletePost(id)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

router.post('/:id/comments', (req, res) => {
  const comment = {
    ...req.body,
    post_id: req.params.id,
    date_posted: Date.now(),
  }
  delete comment.postId
  db.addPostComment(comment)
    .then((ids) => {
      const commentId = ids[0]
      return db.getCommentById(commentId)
    })
    .then((comment) => {
      res.json(comment)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error', err.message)
    })
})

router.get('/:id/comments', (req, res) => {
  const id = req.params.id
  db.getPostComments(id)
    .then((comments) => {
      res.json(comments)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

router.get('/', (req, res) => {
  db.getPosts()
    .then((posts) => {
      posts.forEach((p) => (p.paragraphs = JSON.parse(p.paragraphs)))
      res.json(posts)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getPost(id)
    .then((post) => {
      post.paragraphs = JSON.parse(post.paragraphs)
      res.json(post)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

router.post('/', (req, res) => {
  const post = req.body
  post.paragraphs = JSON.stringify(post.paragraphs)
  post.date_created = Date.now()

  db.addPost(post)
    .then((idArr) => {
      const newPostId = idArr[0]
      return db.getPost(newPostId)
    })
    .then((post) => {
      res.json(post)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error', err.message)
    })
})

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const post = {
    ...req.body,
    id: id,
    date_created: req.body.dateCreated,
    comment_count: req.body.commentCount,
    paragraphs: JSON.stringify(req.body.paragraphs),
  }
  delete post.dateCreated
  delete post.commentCount

  db.editPost(id, post)
    .then(() => {
      return db.getPost(id)
    })
    .then((post) => {
      if (post.paragraphs) {
        post.paragraphs = JSON.parse(post.paragraphs)
      }
      res.json(post)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

module.exports = router
