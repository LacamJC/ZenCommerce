const Cart = require("../models/Cart")

exports.getCart = async () => {
    return await Cart.findAll()
}