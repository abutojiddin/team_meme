import express from "express"
import pool from "../config/connection.js";

const adminRouter = express.Router()

adminRouter.get('/', async (req, res) => {
    const result = await pool.query('SELECT * FROM categories')

    try {
        res.status(200).json({ message: 'Topildi', categories: result.rows })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

export default adminRouter