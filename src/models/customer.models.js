module.exports = (sequelize,DataTypes) => {
    const Customer = sequelize.define('customer', {
        customer_id: {

            type: DataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true 

        }, 

        email: DataTypes.STRING,
        name: DataTypes.STRING
    },{
        timestamps: false,
        freezeTablename: true

    })

    return Custumer

}