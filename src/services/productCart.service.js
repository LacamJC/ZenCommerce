const ProductCart = require("../models/ProductCart")

exports.getProductCart = async() => {
    return await ProductCart.findAll()
}