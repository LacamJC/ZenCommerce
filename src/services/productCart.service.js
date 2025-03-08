const { ProductCart } = require("../models/associations")

exports.getProductCart = async () => {
    return await ProductCart.findAll()
}