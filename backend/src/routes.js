const express = require('express')
const routes = express.Router()


routes.get('/', (req, res) => {
    return res.json({message:`Hello ${req.query.name}`}) //http://localhost:3333/?name=Paulo
})

routes.post('/devs',(req,res) => {
    console.log(req.body)
    return res.json({ ok: true })
})

module.exports = routes