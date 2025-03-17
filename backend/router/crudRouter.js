let productContoller = require("../controller/crudController")
let express = require("express")
let router = express.Router()




router.post("/CREATEPRODUCT", productContoller.createProduct)
router.get("/GETALLPRODUCT", productContoller.getAllProduct)
router.delete("/DELETEPRODUCT", productContoller.deleteProduct)


module.exports = router