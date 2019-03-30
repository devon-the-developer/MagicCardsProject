const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()

ROUTER.get('/', function (req, res) {
  res.send("Hello there")
})

module.exports = ROUTER