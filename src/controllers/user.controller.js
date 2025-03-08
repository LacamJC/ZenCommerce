const userService = require("../services/user.service");

exports.getUser = async (req,res) => {
    try {
        const user = await userService.getUser()
        res.status(200).json(user)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}