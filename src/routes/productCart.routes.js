const express = require("express")

const productCartController = require("../controllers/productCart.controller.js")

const router = express.Router() 

router.get("/", productCartController.getProductCart)

module.exports = router