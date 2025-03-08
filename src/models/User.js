const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
    },

    email: {
        type: DataTypes.STRING,
        unique: true
    },

    password: {
        type: DataTypes.STRING
    },

    address: {
        type: DataTypes.JSON
    }
})




module.exports = User