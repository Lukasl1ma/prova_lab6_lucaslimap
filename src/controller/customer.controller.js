const customerService = require('../service/customer.service')

const save = async(req,res) =>{
    const item = await customerService.save(req.body)
    res.send(item)
}

const remove = async(req,res) =>{
    await customerService.remove(req.params.id, req.body)
    res.send('Customer removed with successful!')
}
 module.exports = {
    save,
    remove
 }