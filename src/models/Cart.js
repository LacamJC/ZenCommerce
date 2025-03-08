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

    },

    id_user: {
        type: DataTypes.INTEGER,

    },

    total_amount: {
        type: DataTypes.DECIMAL(10, 2),

    }

})


module.exports = Cart