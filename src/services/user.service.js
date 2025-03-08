const { User } = require("../models/associations")
const { validateName, validateEmail, validatePassword } = require("../utils/validations")
const { createHashPassword } = require("../utils/security")

exports.getUser = async () => {
    return await User.findAll()
}

exports.createUser = async (data) => {
    const {
        name,
        email,
        password,
        address,
    } = data



    const errorName = validateName(name)
    if (errorName) {
        return errorName.message
    }

    const errorPassword = validatePassword(password)
    if (errorPassword) {
        return errorPassword.message
    }

    const hashedPassword = await createHashPassword(password)

    const errorEmail = await validateEmail(email)
    if (errorEmail) {
        return errorEmail.message
    }


    try {
        const user = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
            address: address
        })

        return user
    } catch (error) {
        console.log(error.message)
        return { message: "Erro ao criar usuario" }

    }


}

exports.updateUser = async (data) => {
    const {
        name,
        email,
        address,
        id,
    } = data

    const alterData = []

    const exists = await User.findOne({where: {id: id}})
    if(!exists)
    {
        return {message:"Usuário não encontrado"}
    }

    if (name) {
        const user = await User.update({ name: name }, {where: {id: id}})
        if (user) {
            alterData.push("Nome alterado")
        }
    }

    if (email) {
        const user = await User.update({ email: email }, {where: {id: id}})
        if (user) {
            alterData.push("Email alterado")
        }
    }

    if (address) {
        const user = await User.update({ address: address }, {where: {id: id}})
        if (user) {
            alterData.push("Endereço alterado")
        }
    }

    if (alterData.length === 0) {
        return { message: "Nenhum dado foi alterado" }
    } else {
        return { message: alterData }
    }

}

exports.deleteUser = async (data) => {
    const {
        id,
        hasPermission
    } = data

    if(hasPermission == "token")
    {
        console.log("Ele pode")
        try{
            await User.destroy({ where: { id: id } })
            return {message:"Usuário deletado com sucesso"}
        } catch(error) {
            console.log(error.message)
            return {message:"Erro ao deletar usuário"}
        }
    }else{
        console.log("Ele não pode")
        return {message:"Falta de credenciais para executar esta tarefa"}
    }

}