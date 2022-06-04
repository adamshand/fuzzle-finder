const express = require('express')
const router = express.Router()

// ls | awk '{print "{ file: \047" $1"\047, title: \047"$1"\047, tags: [] },"}'
const files = {
  fuzzles: [
    { file: '1.jpeg', title: '1.jpeg', tags: [] },
    { file: '6.jpeg', title: '6.jpeg', tags: [] },
    { file: '7.jpeg', title: '7.jpeg', tags: [] },
    { file: 'FullSizeRender.jpeg', title: 'FullSizeRender.jpeg', tags: [] },
    { file: 'IMG_0068.jpeg', title: 'IMG_0068.jpeg', tags: [] },
    { file: 'IMG_0094.jpeg', title: 'IMG_0094.jpeg', tags: [] },
    { file: 'IMG_0190.jpeg', title: 'IMG_0190.jpeg', tags: [] },
    { file: 'IMG_0191.jpeg', title: 'IMG_0191.jpeg', tags: [] },
    { file: 'IMG_0223.jpeg', title: 'IMG_0223.jpeg', tags: [] },
    { file: 'IMG_0647.jpeg', title: 'IMG_0647.jpeg', tags: [] },
    { file: 'IMG_0886.jpeg', title: 'IMG_0886.jpeg', tags: [] },
    { file: 'IMG_0955.jpeg', title: 'IMG_0955.jpeg', tags: [] },
    { file: 'IMG_1333.jpeg', title: 'IMG_1333.jpeg', tags: [] },
    { file: 'IMG_1405.jpeg', title: 'IMG_1405.jpeg', tags: [] },
    { file: 'IMG_1456.jpeg', title: 'IMG_1456.jpeg', tags: [] },
    { file: 'IMG_1493.jpeg', title: 'IMG_1493.jpeg', tags: [] },
    { file: 'IMG_1516.jpeg', title: 'IMG_1516.jpeg', tags: [] },
    { file: 'IMG_1644.jpeg', title: 'IMG_1644.jpeg', tags: [] },
    { file: 'IMG_2010.jpeg', title: 'IMG_2010.jpeg', tags: [] },
    { file: 'IMG_2113.jpeg', title: 'IMG_2113.jpeg', tags: [] },
    { file: 'IMG_2501.jpeg', title: 'IMG_2501.jpeg', tags: [] },
    { file: 'IMG_4047.jpeg', title: 'IMG_4047.jpeg', tags: [] },
    { file: 'IMG_4513.jpeg', title: 'IMG_4513.jpeg', tags: [] },
    { file: 'IMG_5950.jpeg', title: 'IMG_5950.jpeg', tags: [] },
    { file: 'IMG_6053.jpeg', title: 'IMG_6053.jpeg', tags: [] },
  ],
}
console.log(files)

router.get('/', (req, res) => {
  res.render('home', files)
})

// router.get('/fuzzles', (req, res) => {
//   // books.books = shuffleArray(books.books)
// })

// router.get('/books/new', (req, res) => {
//   res.render('new')
// })

// router.get('/books/:id', (req, res) => {
//   const id = req.params.id
//   readBook(id, (err, book) => {
//     if (err) {
//       console.error(err)
//       return
//     }

//     res.render('details', book)
//   })
// })

// router.get('/books/:id/edit', (req, res) => {
//   const id = req.params.id
//   readBook(id, (err, book) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     res.render('edit', book)
//   })
// })

// router.post('/books/:id/edit', (req, res) => {
//   const id = req.params.id
//   const newBook = req.body

//   //read books.json
//   readBooks((err, booksData) => {
//     const selectedBook = booksData.books.find((book) => book.id == id)
//     selectedBook.title = newBook.title
//     selectedBook.author = newBook.author
//     selectedBook.genre = newBook.genre
//     selectedBook.rating = newBook.rating
//     selectedBook.reviews.push(newBook.review)
//     writeJson(booksData, 'books.json', () => {
//       res.redirect('/books/' + req.params.id)
//     })
//   })
// })

module.exports = router
