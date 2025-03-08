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

    amount: {
        type: DataTypes.INTEGER
    }
})

// sequelize.sync({force:true})

module.exports = ProductCart