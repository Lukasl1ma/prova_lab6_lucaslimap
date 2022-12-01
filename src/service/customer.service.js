const { customer } = require('../models/index')

const save = async data => {
    return item = await customer.create(data)
}

const remove = async customerId =>{
    return item = await customer.destroy({
        where: {
            id: customerId
        }
    })
}

module.exports = {
    save,
    remove
}