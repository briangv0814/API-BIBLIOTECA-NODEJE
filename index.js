const express = require("express")
const livrosRoutes = require("./routes/livrosRoutes")
const logRequest = require("./middlewares/logRequest")

const app = express()

app.use(express.json())

app.use(logRequest)
app.use("/livros", livrosRoutes)

app.listen(3000, () =>{
    console.log("Servidor rodando em http://localhost:3000/")
})