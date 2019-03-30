const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()
const FS = require('fs')
const CARDSDATA = require('../cardsdata.json')

ROUTER.get('/', function (req, res) {
  res.render("../views/cards/index", CARDSDATA)
})

ROUTER.get('/cards/:name', function (req, res) {
  let cardName = req.params.name;
  let grabbedCard = CARDSDATA.cards.find(x => x.name == cardName);
  res.render('../views/cards/view', grabbedCard)
} )

ROUTER.get('/addcard', function (req, res) {
  res.render('../views/cards/addcard')
})

ROUTER.post('/addcard', function (req, res) {
  let cardToAdd = req.body
  console.log(cardToAdd)
})

module.exports = ROUTER