import express from "express"
import cors from "cors"
import 'dotenv/config'


const app = express()

app.use(cors())
app.use(express.json())


app.get('/test', (req, res) => {
    res.json({ message: "ishlavotdi" })
})

const PORT = process.env.port
app.listen(PORT, () => {
    console.log(`Girgittonimiz xizmatingizga muntazir: http://localhost:${PORT}`);
});