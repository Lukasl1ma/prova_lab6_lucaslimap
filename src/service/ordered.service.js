const {ordered} = require ('../models/index')

const save = async data => {
    return item = await ordered.create(data)
}

const remove = async orderedId => {
    return item = await ordered.destroy({
        where:{
            id: orderedId
        }
    })
}

module.exports = {
    save,
    remove
}