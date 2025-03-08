const { Sequelize } = require("sequelize");
require("dotenv").config()

const sequelize = new Sequelize(
    process.env.NODE_ENV === "test" ? "sqlite:memory" : process.env.DB_NAME,
    process.env.NODE_ENV === "test" ? undefined : process.env.DB_USER,
    process.env.NODE_ENV === "test" ? undefined : process.env.DB_PASSWORD,
    {
        dialect: process.env.NODE_ENV === "test" ? "sqlite" : process.env.DB_DIALECT,
        host: process.env.NODE_ENV === "test" ? undefined : process.env.DB_HOST,
        port: process.env.NODE_ENV === "test" ? undefined : process.env.DB_PORT,
        logging: false,
    }
)


async function validateConnection() {
    try {
        await sequelize.authenticate()
        console.log("Conectado ao banco de dados")
    } catch (error) {
        console.log(error)
    }

}

validateConnection()



module.exports = sequelize