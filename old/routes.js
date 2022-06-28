const express = require('express')
const router = express.Router()

const exifr = require('exifr')
const fs = require('fs')

const { shuffleArray, importImages } = require('./lib.js')

// //  fuzzles: [{ file: '1.jpeg', tags: [] }],
// const db = {
//   fuzzles: [],
// }

// const files = fs.readdirSync('assets/images/')
// files.forEach(async (file) => {
//   try {
//     const ext = file.split('.').slice(-1)[0].toLowerCase()
//     if (file.includes('.') && ['jpg', 'jpeg', 'png'].includes(ext)) {
//       const exif = await exifr.parse('assets/images/' + file, { iptc: true })
//       const keywords = exif.Keywords.filter(
//         (x) =>
//           ![
//             'Type/Selfie',
//             'Flagged',
//             'Border Collie',
//             'Tabby',
//             'Jack Russell',
//           ].includes(x)
//       ).map((x) => x.toLowerCase())
//       // console.log(keywords)
//       db.fuzzles.push({ file, tags: keywords })
//       // console.log(file, exif.Keywords)
//       console.log(db.fuzzles)
//     }
//   } catch (err) {
//     console.log({ file }, err)
//   }
// })

// /api/vi
router.get('/ping/:foo', (req, res) => {
  // res.json([req.params.foo])
  res.redirect('/')
})

router.get('/images/:sortby', (req, res) => {
  db.fuzzles = shuffleArray(db.fuzzles)
  // console.log(db.fuzzles)
  res.render('home', db)
})

router.get('/import', (req, res) => {
  importImages() // no wookie
  res.redirect('/foo')
})

router.get('/by', (req, res) => {
  res.redirect('/')
})

router.get('/by/name', (req, res) => {
  // get uniq list of name tags
  // shuffle list
  // pick random image for each tag
  // build object?
  // pass to handlebars
  const names = [
    { file: '', name: 'dio' },
    { file: '', name: 'audrey' },
    { file: '', name: 'andre' },
    { file: '', name: 'claude' },
    { file: '', name: 'adam' },
    { file: '', name: 'tink' },
    { file: '', name: 'amy' },
    { file: '', name: 'pam' },
    { file: '', name: 'brett' },
    { file: '', name: 'emily' },
    { file: '', name: 'zsazsa' },
  ]
  names.forEach((x) => {})
  // console.log(db.fuzzles)
  res.render('by-name', db)
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
