const EXPRESS = require('express')
const HBS = require('express-handlebars')
const ROUTES = require('./routes/routes')
const BODYPARSER = require('body-parser')

const SERVER = EXPRESS()



SERVER.engine('hbs', HBS({
  defaultLayout: 'main',
  extname: 'hbs'
}))

SERVER.set('view engine', 'hbs')
SERVER.use(EXPRESS.static('public'))
SERVER.use(BODYPARSER.urlencoded({extended: false}))

SERVER.use('/', ROUTES)

module.exports = SERVER