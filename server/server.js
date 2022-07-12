const path = require('path')
const express = require('express')

const photos = require('./routes/photos')

const server = express()
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())

server.use('/api/v1', photos)

server.use('/api/v1/*', (req, res) => res.sendStatus(404))
server.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
)

module.exports = server
