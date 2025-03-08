const { Cart, User } = require("../models/associations")

exports.userExists = async (id) => {
    try{
        const user = await User.findOne({where: {id :id}})
        if(!user)
        {
            return {message: "Usuário não encontrado"}
        }else{
            return null
        }
    } catch(error){
        console.log(error)
        return {message: "Erro ao validar usuario"}
    }
}