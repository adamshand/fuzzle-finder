const config = require('../db/knexfile.js')
const knex = require('knex')
const testDb = knex(config.test)

const request = require('supertest')

const server = require('../server.js')
const db = require('../db/db.js')

// beforeAll(() => {
//   return testDb.migrate.latest()
// })
// beforeEach(() => {
//   return testDb.seed.run()
// })

//// Route *Integration* Tests
describe('GET /ping/:msg', () => {
  test('returns :msg', () => {
    expect.assertions(1)
    return request(server)
      .get('/api/v1/ping/morena')
      .then((response) => {
        expect(response.body.pingback).toBe('morena')
      })
  })
})

//// Route *Unit* Tests
// Note to future self:
//  These *look* like integration tests but aren't, connection.js:3 triggers
//  the db test environment. Most of our routes simply pass data through wihtout
//  changing it so tests don't really test much.  But if we were manipulating
//  the data in the route they would catch any errors in that process.

// const request = require('supertest')
// const db = require('../../db/market')
// const server = require('../../server')

// jest.mock('../../db/market')

// const fakeItem = [
//   {
//     id: 1,
//     user_id: 'auth0|001',
//     title: 'Cow',
//     description: 'A bovine creature, good condition',
//     trade_value: '500',
//     image: 'cow.png',
//     status: 'Active',
//   },
// ]

// const fakeUser = [
//   {
//     auth0_id: 'auth0|001',
//     name: 'Jack Spriggins',
//     location: 'Glenorchy',
//     bio: 'I will trade for beans, particularly if they are magical.',
//     avatar: 'jack.png',
//     beans: 10,
//   },
// ]

// describe('GET /api/v1/market/item/:id', () => {
//   test('promise resolves', () => {
//     expect.assertions(1)
//     db.getItem.mockImplementation(() => Promise.resolve(fakeItem))
//     return request(server)
//       .get('/api/v1/market/item/1')
//       .then((response) => {
//         expect(response.body).toEqual(fakeItem)
//       })
//   })
//   test('promise rejects', () => {
//     expect.assertions(1)
//     db.getItem.mockImplementation(() => Promise.reject(fakeItem))
//     return request(server)
//       .get('/api/v1/market/item/1')
//       .then((response) => {
//         expect(response.res.statusCode).toBe(500)
//       })
//   })
// })
