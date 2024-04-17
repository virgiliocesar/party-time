const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

//DB connection

const conn = require("./db/conn.js")
conn()

app.listen(3000, function () {
    console.log("Servidor Online")
})

//* 8y7Sjy2cIArA1S0j

//* mongodb+srv://virgilio:<password>@cluster0.pbho3gt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0