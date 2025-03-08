const productService = require("../services/product.service.js")

exports.getProduct = async (req,res) => {
    try{
        const product = await productService.getProduct()
        res.status(200).json(product)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

exports.createProduct = async (req,res) => {
    try {
        const product = await productService.createProduct(req.body)
        res.status(201).json(product)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

exports.updateProduct = async (req,res) => {
    try {
        const product = await productService.updateProduct(req.body)
        res.status(200).json(product)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

exports.deleteProduct = async (req,res) => {
    try {
        const product = await productService.deleteProduct(req.body)
        res.status(200).json(product)
    } catch(error) {
        res.status(500).json({message : error.message})
    }
}