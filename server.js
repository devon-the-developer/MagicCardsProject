const EXPRESS = require('express')
const hbs = require('express-handlebars')
const ROUTES = require('./routes/routes')

const SERVER = EXPRESS()



SERVER.use('/', ROUTES)

SERVER.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))

SERVER.set('view engine', 'hbs')
SERVER.use(EXPRESS.static('public'))

module.exports = SERVER