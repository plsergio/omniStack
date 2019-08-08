const Dev = require('../models/Dev')

module.exports = {
    async store(req, res) {
        //console.log(req.params.devId)
        //console.log(req.headers.user)
        const {devId} = req.params
        const {user} = req.params

        const targetDev = await Dev.findById(devId)
        const loggedDev = await Dev.findById(user)

        if (!targetDev){
            return res.status(400).json({ error: 'Dev not exists'})
        }

        console.log(targetDev._id)
        console.log(targetDev._id)
        //loggedDev.likes.push(targetDev._id)

        //await loggedDev.save()

        return res.json(loggedDev)
    }
}