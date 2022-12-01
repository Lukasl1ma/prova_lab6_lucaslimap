const orderedService = require('../service/ordered.service')

const save = async (req,res) => {
    const item = await orderedService(req.body)
    res.send(item)
}

const remove = async (req,res) => {
    await orderedService(req.params.id, req.body)
    res.send('Ordered removed with successful!')
}

module.exports = {
    save,
    remove
}