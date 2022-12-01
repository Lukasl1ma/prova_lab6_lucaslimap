module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define ('Product',{
        product_id: {
            type: DataTypes.INTERGER,
            primarykey: true,
            autoIncrement: true
        }, 

        name: DataTypes.STRING,
        value: DataTypes.DOUBLE

    },{
        timestamps: false,
        frazeTablename: true
    })

    return Product

}