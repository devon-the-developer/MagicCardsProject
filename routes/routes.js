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
  let cardToAdd = req.body;
  let cardKeys = Object.keys(cardToAdd);
  let cardValues = Object.values(cardToAdd);
//where you left off - tyring to get abilities & flavorText in object textBox
  console.log(cardKeys)
  console.log(cardValues)
  cardToAdd.id = CARDSDATA.cards.length + 1;
  let arrayOfCards = CARDSDATA.cards;
  arrayOfCards.push(cardToAdd);


  dataToWrite = JSON.stringify(arrayOfCards);
  FS.writeFile("../cardsdata.json", dataToWrite, 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved')
  })

  res.redirect('/')
  console.log(arrayOfCards)
})

module.exports = ROUTER