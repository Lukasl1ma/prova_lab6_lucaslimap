const { product } = require ('../models/index')

const save = async data => {
    return item = await product.create(data)
}

const remove = async productId => {
    return item = await product.destroy({
        where: {
            id: productId
        }
    })
}

module.exports = {
    save,
    remove
}