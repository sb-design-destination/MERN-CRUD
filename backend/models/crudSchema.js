let mongoose = require("mongoose");


let productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    stock: Number
})

let product = new mongoose.model("product", productSchema)
module.exports = product