import express from "express"
import cors from "cors"
import 'dotenv/config'
import clientRouter from "./routes/clientRouter.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use('/client', clientRouter)

const PORT = process.env.port
app.listen(PORT, () => {
    console.log(`Girgittonimiz xizmatingizga muntazir: http://localhost:${PORT}`);
})