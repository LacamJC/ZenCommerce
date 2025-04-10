const { Product } = require("../models/associations")
const { validateInput } = require("../utils/validations")
exports.getProduct = async () => {
    return await Product.findAll()
}

exports.getProductById = async (id) => {
    console.log("AQUI")
    return await Product.findOne({where: {id : id}})
}

exports.createProduct = async (data) => {
    const {
        name,
        value,
        description,
        image,
        origin
    } = data

    const nameError = validateInput(name, "Nome do produto")
    if (nameError) {
        return nameError.message
    }

    const valueError = validateInput(value, "O valor do prooduto")
    if (valueError) {
        return valueError.message
    }

    const descriptionError = validateInput(description, "A descrição do produto ")
    if (descriptionError) {
        return descriptionError.message
    }

    try {
        const product = await Product.create({
            name: name,
            value: value,
            description: description,
            origin: origin
        })

        return product
    } catch (error) {
        console.log(error)
        return { message: "Erro interno do servidor ao cadastrar o produto" }
    }




}

exports.updateProduct = async (data) => {
    const {
        id,
        name,
        value,
        description,
        image,
        origin
    } = data

    const nameError = validateInput(name, "Nome do produto")
    if (nameError) {
        return nameError.message
    }

    const valueError = validateInput(value, "O valor do prooduto")
    if (valueError) {
        return valueError.message
    }

    const descriptionError = validateInput(description, "A descrição do produto ")
    if (descriptionError) {
        return descriptionError.message
    }

    try {
        const product = await Product.findOne({ where: { id: id } })

        if (!product) {
            return { messaeg: "Produto não encontrado" }
        }

        const new_product = await Product.update({
            name: name,
            value: value,
            description: description,
            origin: origin

        }, { where: { id: id } })

        return await Product.findOne({ where: { id: id } })
    } catch (error) {
        console.log(error)
        return { message: "Erro ao alterar dados do produto" }
    }
}

exports.deleteProduct = async (data) => {
    const {
        hasPermission,
        id
    } = data

    if (hasPermission != "token") {
        return { message: "Falta de credenciais para ação" }
    }

    const product = await Product.findOne({where : {id : id}})
    if(!product)
    {
        return { message: "Produto não encontrado"}
    }

    try {
        await Product.destroy({ where: { id: id } })
        return { message: "Produto deletado com sucesso" }
    } catch (error) {
        console.log(error)
        return { message: "Erro ao deletar produto" }
    }

}