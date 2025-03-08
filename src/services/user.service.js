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
    } catch(error) {
        return error.message
    }


}