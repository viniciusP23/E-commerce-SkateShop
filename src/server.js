import express from "express"
import productRouter from "./routes/products.js"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())


app.use("/products", productRouter)

app.listen(3000, () => console.log("Servidor Conectado..."))