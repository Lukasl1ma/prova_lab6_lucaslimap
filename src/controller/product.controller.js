const productController = require('../service/product.service')

const save = async (req, res) => {
    const item = await productController(req.body)
    res.send(item)
}

const remove = async (req, res) => {
    await productController(req.params.id, req.body)
    res.send('Product removed with successful!')
}

module.exports = {
    save,
    remove
}

