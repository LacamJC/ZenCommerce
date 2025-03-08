const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const Product = sequelize.define("Product", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    name: {
        type: DataTypes.STRING,
    },

    value: {
        type: DataTypes.DECIMAL(10,2)
    },

    description: {
        type: DataTypes.TEXT
    },

    image: {
        type: DataTypes.STRING
    },

    category: {
        type: DataTypes.STRING
    },

    origin: {
        type: DataTypes.STRING
    }
})


module.exports = Product