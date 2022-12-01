module.exports = (sequelize, DataTypes) => {
    const Ordered = sequelize.define('Ordered', {
        Ordered_id:{
            type: DataTypes.INTERGER,
            primarykey: true,
            autoIncremet: true
        },

        customer_id: DataTypes.INTERGER,
        product_id: DataTypes.INTERGER,
        order_date: DataTypes.DATE
    }, {
        timestamp: false,
        freezeTable: true
    })

    return Ordered

}