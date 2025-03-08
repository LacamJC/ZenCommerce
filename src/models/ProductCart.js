const { DataTypes} = require("sequelize")
const sequelize = require("../config/database")

const ProductCart = sequelize.define("ProductCart", { 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    id_product: {
        type: DataTypes.INTEGER,
    },

    id_cart: {
        type: DataTypes.INTEGER
    },

    quantity: {
        type: DataTypes.INTEGER
    }
})


module.exports = ProductCart