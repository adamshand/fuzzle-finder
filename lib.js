const fs = require('fs')
const path = require('path')

// use instead of typeof to determine what kind of object something is
// eg. getInternalclass(date)
const getInternalClass = (value) => ({}.toString.call(value))

function readJsonFile(file, cb) {
  fs.readFile(path.resolve(file), 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      let puppers = JSON.parse(data)
      cb(puppers)
    }
  })
}

function writeJsonFile(obj, file, cb) {
  const data = JSON.stringify(obj, null, 2)
  fs.writeFile(path.resolve(file), data, (err) => {
    if (err) {
      console.log(err)
    } else {
      cb()
    }
  })
}

function shuffleArray(array) {
  let curId = array.length
  // There remain elements to shuffle
  while (0 !== curId) {
    // Pick a remaining element
    let randId = Math.floor(Math.random() * curId)
    curId -= 1
    // Swap it with the current element.
    let tmp = array[curId]
    array[curId] = array[randId]
    array[randId] = tmp
  }
  return array
}

module.exports = {
  shuffleArray,
  readJsonFile,
  writeJsonFile,
  getInternalClass,
}
