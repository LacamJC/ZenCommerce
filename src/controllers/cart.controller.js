const cartService = require("../services/cart.service.js")

exports.getCart = async (req,res) => {
    try{    
        const cart = await cartService.getCart()
        res.status(200).json(cart)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}