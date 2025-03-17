let mongoose = require("mongoose");
require("dotenv").config()

let MONG_URL = process.env.MONGO_URL


mongoose.connect(MONG_URL).then(() => {
    console.log("MongoDb Run Succesfully")
}).catch((err) => {
    console.log("err", err)
})