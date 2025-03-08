const productService = require("../services/product.service.js")

exports.getProduct = async (req,res) => {
    try{
        const product = await productService.getProduct()
        res.status(200).json(product)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}