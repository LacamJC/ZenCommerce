const { Product } = require("../models/associations")

exports.getProduct = async () => {
    return await Product.findAll()
}