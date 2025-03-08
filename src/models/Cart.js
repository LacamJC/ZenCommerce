const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const Cart = sequelize.define("Cart", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    id_product_cart: {
        type: DataTypes.INTEGER,
        unique: true
    },

    id_user: {
        type: DataTypes.INTEGER,
        unique: true
    },

    final_price: {
        type: DataTypes.DECIMAL(10,2),

    }
    
})

sequelize.sync({force:true})

module.exports = Cart