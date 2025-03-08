const { Cart } = require("../models/associations")

exports.getCart = async () => {
    return await Cart.findAll()
}