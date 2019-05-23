var express = require('express')
var logger = require('morgan')

var exampleRouter = require('./routes/example')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.use('/example', exampleRouter)

module.exports = app
