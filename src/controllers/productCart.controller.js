const productCartService = require("../services/productCart.service.js")

exports.getProductCart = async (req,res) => {
    try{
        const productCart = await productCartService.getProductCart()
        res.status(200).json(product)
    }catch(error){
        res.status(500).send({message: error.message})
    }
}