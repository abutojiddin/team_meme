import pool from "../config/connection.js";

export const getClient = async (req, res) => {
    const result = await pool.query('SELECT * FROM client')

    res.status(200).json({ Message: 'Topildi', Clients: result.rows })
}