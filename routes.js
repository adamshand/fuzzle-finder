const express = require('express')
const router = express.Router()

const { shuffleArray } = require('./lib.js')

// ls | awk '{print "{ file: \047" $1"\047, title: \047"$1"\047, tags: [] },"}'
const db = {
  fuzzles: [
    { file: '1.jpeg', title: '1.jpeg', tags: [] },
    { file: '2.jpeg', title: '2.jpeg', tags: [] },
    { file: '3.jpeg', title: '3.jpeg', tags: [] },
    { file: '4.jpeg', title: '4.jpeg', tags: [] },
    { file: '5.jpeg', title: '5.jpeg', tags: [] },
    { file: '6.jpeg', title: '6.jpeg', tags: [] },
    { file: '7.jpeg', title: '7.jpeg', tags: [] },
    { file: '8.jpeg', title: '8.jpeg', tags: [] },
    { file: '9.jpeg', title: '9.jpeg', tags: [] },
    { file: '10.jpeg', title: '10.jpeg', tags: [] },
    { file: '11.jpeg', title: '11.jpeg', tags: [] },
    { file: '12.jpeg', title: '12.jpeg', tags: [] },
    { file: '13.jpeg', title: '13.jpeg', tags: [] },
    { file: '14.jpeg', title: '14.jpeg', tags: [] },
    { file: '15.jpeg', title: '15.jpeg', tags: [] },
    { file: '16.jpeg', title: '16.jpeg', tags: [] },
    { file: '17.jpeg', title: '17.jpeg', tags: [] },
    { file: '18.jpeg', title: '18.jpeg', tags: [] },
    { file: '19.jpeg', title: '19.jpeg', tags: [] },
    { file: '20.jpeg', title: '20.jpeg', tags: [] },
    { file: '21.jpeg', title: '21.jpeg', tags: [] },
    { file: '22.jpeg', title: '22.jpeg', tags: [] },
    { file: '23.jpeg', title: '23.jpeg', tags: [] },
    { file: '24.jpeg', title: '24.jpeg', tags: [] },
    { file: '25.jpeg', title: '25.jpeg', tags: [] },
    { file: '26.jpeg', title: '26.jpeg', tags: [] },
    { file: '27.jpeg', title: '27.jpeg', tags: [] },
    { file: '28.jpeg', title: '28.jpeg', tags: [] },
    { file: '29.jpeg', title: '29.jpeg', tags: [] },
    { file: '30.jpeg', title: '30.jpeg', tags: [] },
    { file: '31.jpeg', title: '31.jpeg', tags: [] },
    { file: '32.jpeg', title: '32.jpeg', tags: [] },
    { file: '33.jpeg', title: '33.jpeg', tags: [] },
    { file: '34.jpeg', title: '34.jpeg', tags: [] },
    { file: '35.jpeg', title: '35.jpeg', tags: [] },
    { file: '36.jpeg', title: '36.jpeg', tags: [] },
    { file: '37.jpeg', title: '37.jpeg', tags: [] },
    { file: '38.jpeg', title: '38.jpeg', tags: [] },
    { file: '39.jpeg', title: '39.jpeg', tags: [] },
    { file: '40.jpeg', title: '40.jpeg', tags: [] },
    { file: '41.jpeg', title: '41.jpeg', tags: [] },
    { file: '42.jpeg', title: '42.jpeg', tags: [] },
    { file: '43.jpeg', title: '43.jpeg', tags: [] },
    { file: '44.jpeg', title: '44.jpeg', tags: [] },
    { file: '45.jpeg', title: '45.jpeg', tags: [] },
    { file: '46.jpeg', title: '46.jpeg', tags: [] },
    { file: '47.jpeg', title: '47.jpeg', tags: [] },
    { file: '48.jpeg', title: '48.jpeg', tags: [] },
    { file: '49.jpeg', title: '49.jpeg', tags: [] },
    { file: '50.jpeg', title: '50.jpeg', tags: [] },
    { file: '51.jpeg', title: '51.jpeg', tags: [] },
    { file: '52.jpeg', title: '52.jpeg', tags: [] },
    { file: '53.jpeg', title: '53.jpeg', tags: [] },
    { file: '54.jpeg', title: '54.jpeg', tags: [] },
    { file: '55.jpeg', title: '55.jpeg', tags: [] },
  ],
}

console.log(db)

router.get('/', (req, res) => {
  db.fuzzles = shuffleArray(db.fuzzles)
  res.render('home', db)
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
