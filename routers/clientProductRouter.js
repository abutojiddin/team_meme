import express from "express";
import pool from "../config/connection.js";

const getClientProducts = express.Router();

getClientProducts.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM client_products");

        console.log(result.rows);
        res.status(200).json({
            success: true,
            client_products: result.rows,
        });
    } catch (error) {
        console.error("Xatolik yuz berdi:", error.message);
        res.status(500).json({
            success: false,
            message: "Serverda xatolik yuz berdi",
        });
    }
});

export default getClientProducts;
