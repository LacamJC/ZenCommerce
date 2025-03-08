const Product = require("../models/Product")

exports.getProduct = async () => {
    return await Product.findAll()
}