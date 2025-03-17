let productModel = require("../models/crudSchema")


let createProduct = async (req, res) => {
    try {
        let product = new productModel(req.body)
        console.log("req.body", req.body)
        let data = await product.save()
        res.status(201).send({ MESSAGE: "Product create succesfully", data })
    } catch (err) {
        res.status(500).send({ ERROR: "Error", err })
    }

}
let getAllProduct = async (req, res) => {
    try {
        let data = await productModel.find()
        res.status(200).send({ MESSAGE: "Products Get succesfully", data })
    } catch (err) {
        res.status(500).send({ ERROR: "Error", err })
    }

}
let deleteProduct = async (req, res) => {
    try {
        let data = await productModel.deleteOne({ _id: req.body.id })
        res.status(200).send({ MESSAGE: "Product deleted successfully", data });
    } catch (err) {
        res.status(500).send({ ERROR: "Error", err })
    }

}


module.exports = { createProduct, getAllProduct, deleteProduct }