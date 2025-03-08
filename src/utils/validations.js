const { User } = require("../models/associations")

exports.validatePassword = (password) => {
    if (password.length < 6 || password == undefined || password == null || typeof (password) !== "string" || password.trim().length < 1) {
        return { message: "A senha deve ter pelo menos 6 caracteres" }
    }

    if (password.length < 6 || password.trim().length < 6) {
        return { message: "A senha deve conter pelo menos 6 caracteres" }
    }

    if (password === undefined || password === null) {
        return { message: "A senha não pode ser nula" }
    }

    if (typeof (password) !== "string") {
        return { message: "A senha deve ser uma STRING" }
    }

    return null

}

exports.validateName = (name) => {

    if (name === undefined || name === null) {
        return { message: "O nome não pode ser nulo" }
    }

    if (typeof (name) !== "string" || !isNaN(Number(name))) {
        return { message: "O nome deve ser do tipo STRING" }
    }

    if (name.trim().length <= 1) {
        return { message: "Nome deve conter pelo menos 2 caracteres" }
    }



    return null
}

exports.validateInput = (value, name) => {
    console.log("Esta rodando")
    if (value === undefined || value === null) {
        return { message: `${name} não pode ser nulo` }
    }

    // if (typeof (value) !== "string" || !isNaN(Number(value))) {
    //     return { message: `O ${name} deve ser do tipo STRING` }
    // }

    if (value.trim().length <= 1) {
        return { message: `${name} deve conter pelo menos 2 caracteres` }
    }

    return null

}


exports.validateEmail = async (email) => {
    if (email === null || email === undefined) {
        return { message: "O email não pode ser nula" }
    }

    if (email.length < 1 || email.trim() < 1) {
        return { message: "O email não pode ser vazia" }
    }

    if (typeof (email) !== "string" || !isNaN(Number(email))) {
        return { message: "O email deve ser uma STRING" }
    }

    const user = await User.findOne({where: {email : email}})
    if(user){
        return {message:"Email já cadastrado"}
    }

    return null

}