const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()
const FS = require('fs')
const CARDSDATA = require('../cardsdata.json')

ROUTER.get('/', function (req, res) {
  res.render("../views/cards/index", CARDSDATA)
})



module.exports = ROUTER