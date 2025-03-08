const cartService = require("../services/cart.service.js")

exports.getCart = async (req,res) => {
    try{    
        const cart = await cartService.getCart()
        res.status(200).json(cart)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

exports.createCart = async (req,res) => {
    try {
        const cart = await cartService.createCart(req.body)
        res.status(200).json(cart)
    } catch(error) {
        res.status(500).json({message: error.message})
    }

}

exports.deleteCart = async (req,res) => {
    try {
        const cart = await cartService.deleteCart(req.body)
        res.status(200).json(cart)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}