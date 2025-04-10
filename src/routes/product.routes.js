const express = require("express")

const productController = require("../controllers/product.controller.js")

const router = express.Router()

router.get("/", productController.getProduct)
router.get("/detail/:id", productController.getProductById)
router.post("/", productController.createProduct)
router.put("/", productController.updateProduct)
router.delete("/", productController.deleteProduct)

module.exports = router