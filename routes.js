const express = require('express')
const router = express.Router()
const exifr = require('exifr')
const fs = require('fs')

const { shuffleArray } = require('./lib.js')

// ls | awk '{print "{ file: \047" $1"\047, title: \047"$1"\047, tags: [] },"}'

//  fuzzles: [{ file: '1.jpeg', tags: [] }],
const db = {
  fuzzles: [],
}

// db.fuzzles.push({ file: x })

const files = fs.readdirSync('assets/images/')
files.forEach(async (image) => {
  try {
    const ext = image.split('.').slice(-1)[0].toLowerCase() // fails for a file called 'jpg' or 'png'
    if (image.includes('.') && ['jpg', 'jpeg', 'png'].includes(ext)) {
      let data = await exifr.parse('assets/images/' + image, { iptc: true })
      db.fuzzles.push({ file: image, tags: data.Keywords })
      //console.log(image, data.Keywords)
    }
  } catch (err) {
    console.log({ image }, err)
  }
})

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
