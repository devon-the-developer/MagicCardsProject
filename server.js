const EXPRESS = require('express')
const SERVER = EXPRESS()

const ROUTES = require('./routes/routes')

SERVER.use('/', ROUTES)



module.exports = SERVER