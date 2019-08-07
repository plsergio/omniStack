const express = require('express')

const server = express()

server.get('/', (req, res) => {
    //http://localhost:3333/?name=Paulo
    return res.json({message:`Hello ${req.query.name}`})
})

server.listen(3333)

