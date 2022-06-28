const request = require('supertest')
const { getAllByRole } = require('@testing-library/dom')
require('@testing-library/jest-dom')

const server = require('./server')

describe('GET /books', () => {
  test("Homepage contains 'book-list'", () => {
    const expected = 'book-list'
    expect.assertions(1)
    return request(server)
      .get('/books')
      .then((response) => {
        expect(response.text).toContain(expected)
      })
  })
})

describe('GET /books/4', () => {
  test('Specific book page has image', () => {
    const expected = '/images/never-let-me-go.jpg'
    return request(server)
      .get('/books/4')
      .then((response) => {
        expect(response.text).toContain(expected)
      })
  })
})

describe('GET /books/2/edit', () => {
  test('Specific book edit page has form', () => {
    const expected = `<form class="form" action="/books/2/edit" method="post">`
    return request(server)
      .get('/books/2/edit')
      .then((response) => {
        expect(response.text).toContain(expected)
      })
  })
})

test('home page has at least 5 books', () => {
  // expect.assertions(1)
  return request(server)
    .get('/books')
    .then((response) => {
      document.body.innerHTML = response.text
      const items = getAllByRole(document, 'listitem')
      expect(items.length >= 5).toBeTruthy()
    })
})
