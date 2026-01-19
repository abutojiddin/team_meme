import express from "express"
import cors from "cors"
import 'dotenv/config'
import clientRouter from "./routes/clientRouter.js"
import categoryRouter from "./routes/categoryRouter.js"
import { getProducts } from "./controllers/productsControllers.js"
import productRouter from "./routes/productsRouter.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use('/client', clientRouter)

app.use('/category', categoryRouter)

app.use('/products', productRouter)

app.use('/clientProduct', clientRouter)

const PORT = process.env.port

app.listen(PORT, () => {
    console.log(`Girgittonimiz xizmatingizga muntazir: http://localhost:${PORT}`);
})