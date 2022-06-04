const fs = require('fs')
const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes')

const server = express()

const { shuffleArray } = require('./lib.js')

// Server configuration
server.use('/assets', express.static('assets'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.use('/', routes)

// fuzzles = { fs.readdirSync('images') }
// fuzzles = { images: ['1.jpeg', '6.jpeg', '7.jpeg', 'FullSizeRender.jpeg'] }

module.exports = server
