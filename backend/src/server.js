const express = require('express')
const mongose = require('mongoose')
const routes = require('./routes')
const server = express()

mongose.connect('mongodb+srv://omnistack:omnistack@cluster0-bhgyf.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
server.use(express.json())
server.use(routes)
server.listen(3333)

