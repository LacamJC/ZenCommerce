const express = require("express");

const userRoutes = require("./user.routes")
const productRoutes = require("./product.routes.js")
const cartRoutes = require("./cart.routes.js")
const productCartRoutes = require("./productCart.routes.js")
const router = express.Router()


router.get("/", (req,res) => {
    res.send({message:"Bem vindo ao Cantinho Zen"})
})

router.use("/user", userRoutes)
router.use("/product", productRoutes)
router.use("/cart", cartRoutes)
router.use("/productCart", productCartRoutes)


module.exports = router