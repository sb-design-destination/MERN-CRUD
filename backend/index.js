let express = require("express");
let app = express()
const cors = require("cors");
require("dotenv").config()
let PORT = process.env.PORT
require("./mongoDbConnect")

let router = require("./router/crudRouter")

app.use(cors());
app.use(express.json())
app.use("/product", router)

app.listen(PORT, (err) => {
    if (err) {
        console.log("Eroor", err)
    } else {
        console.log("Appliation Run Success" + PORT)
    }
})