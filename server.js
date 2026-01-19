import express from "express"
import cors from "cors"
import 'dotenv/config'
import clientRouter from "./routes/clientRouter.js"
import categoryRouter from "./routes/categoryRouter.js"
import clientProductRoutes from "./routes/clientProductRoutes.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use('/client', clientRouter)

app.use('/category', categoryRouter)

app.use('/clientProduct', clientProductRoutes)

const PORT = process.env.port

app.listen(PORT, () => {
    console.log(`Girgittonimiz xizmatingizga muntazir: http://localhost:${PORT}`);
})