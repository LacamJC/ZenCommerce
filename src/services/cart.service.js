const { Cart } = require("../models/associations")
const { userExists } = require("../utils/verify")
exports.getCart = async () => {
    return await Cart.findAll()
}

exports.createCart = async (data) => {
    const {
        id_user,
    } = data

    const userMessage = await userExists(id_user)
    if(userMessage)
    {
        return userMessage.message
    }
    
    try {   
        const cart = await Cart.create({
            id_user : id_user
        })

        return cart
    } catch(error)
    {
        return error.message
    }

}

exports.deleteCart = async (data) => {
    const {
        hasPermission,
        id
    } = data 

    if(hasPermission != "token")
    {
        return {message: "Falta de credenciais para ação"}
    }


    try {
        await Cart.destroy({where : {id : id}})
        return {message: "Carrinho deletado com sucesso"}
    } catch(error)
    {
        console.log(error)
        return {message: "Erro ao apagar carrinho de compras"}
    }

}