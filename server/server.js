const path = require('path')
const express = require('express')

const images = require('./routes/images')

const server = express()
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())

server.use('/v1/images', images)

server.use('/v1/*', (req, res) => res.sendStatus(404))
server.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
)

module.exports = server
