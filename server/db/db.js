const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const connection = require('knex')(config)

function getImages(db = connection) {
  return db('images').select()
}

// function getPost(id, db = connection) {
//   return db('Posts')
//     .where({ id })
//     .select(
//       'id',
//       'title',
//       'date_created as dateCreated',
//       'comment_count as commentCount',
//       'paragraphs'
//     )
//     .first()
// }

// function addPost(post, db = connection) {
//   return db('Posts').insert(post)
// }

// function editPost(id, post, db = connection) {
//   // update should return the columns you specify (eg. id/title)
//   // but it appears that knex doesn't support this with sqlite
//   // better-sqlite does supportt this.
//   // return db('Posts').where({ id }).update(post, ['id', 'title'])

//   return db('Posts').where({ id }).update({ post })

//   // remember you can also do this:
//   // return db('Posts').where({ id }).update({
//   //   id: post.id,
//   //   title: post.title,
//   //   paragraphs: post.paragraphs,
//   // })
// }

// // function getPostComments(id, db = connection) {
// //   return db('Comments')
// //     .where('post_id', id)
// //     .select('id', 'post_id as postId', 'date_posted as datePosted', 'comment')
// // }

// // function addPostComment(comment, db = connection) {
// //   return db('Comments').insert(comment)
// // }

// // function getCommentById(id, db = connection) {
// //   return db('Comments')
// //     .where('id', id)
// //     .select('id', 'post_id as postId', 'date_posted as datePosted', 'comment')
// //     .first()
// // }

// // function deletePost(id, db = connection) {
// //   return db('Posts').where({ id }).delete()
// // }

// // function deleteComment(id, db = connection) {
// //   return db('Comments').where({ id }).delete()
// // }

// // function editComment(id, comment, db = connection) {
// //   // see comment on editPost()
// //   return db('Comments').where({ id }).update(comment)
// // }

module.exports = {
  getImages,
}
