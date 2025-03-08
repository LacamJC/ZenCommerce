const sequelize = require("../config/database")

const Cart = require("./Cart")
const Product = require("./Product")
const User = require("./User")
const ProductCart = require("./ProductCart")

async function databaseSync() {
    try {
        sequelize.sync({ force: true })

        console.log("==== Tabelas sincronizadas com sucesso ====")
    }
    catch(error) {
        console.log(`Erro ao sincronizar tabelas: ${error}`)
    }
}

databaseSync()

module.exports = { User, Product, ProductCart, Cart }