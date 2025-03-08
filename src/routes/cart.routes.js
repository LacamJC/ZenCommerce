const express = require("express")

const cartController = require("../controllers/cart.controller.js")

const router = express.Router() 

router.get("/", cartController.getCart) 
router.post("/", cartController.createCart)
// router.put("/", cartController.updateCart)
router.delete("/", cartController.deleteCart)

module.exports = router