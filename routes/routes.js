const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()

ROUTER.get('/', function (req, res) {
  res.render("../views/layouts/main.hbs")
})

module.exports = ROUTER