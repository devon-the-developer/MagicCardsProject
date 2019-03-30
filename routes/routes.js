const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()
const FS = require('fs')
const CARDSDATA = require('../cardsdata.json')

ROUTER.get('/', function (req, res) {
  // let parsedData = CARDSDATA.cards
  // console.log(parsedData)
  // let parsedData = {
  //   cards: CARDSDATA.cards
  // }
  res.render("../views/cards/index", CARDSDATA)
})



module.exports = ROUTER