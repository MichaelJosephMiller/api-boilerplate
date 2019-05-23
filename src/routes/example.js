var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('<h1>Example Page</h1>')
  next()
})

module.exports = router
