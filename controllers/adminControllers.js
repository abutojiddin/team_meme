import pool from "../config/connection.js";

export const getAdmin = async (req, res) => {
    const result = await pool.query('SELECT * FROM admin')

    try {
        res.status(200).json({ message: 'Topildi', admins: result.rows })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const postAdmin = async (req, res) => {
    const { id, username, email, phone_number, pasword, profile_img } = req.body

    try {
        const result = await pool.query(
            `
                INSERT INTO admin (username, email, phone_number, pasword, profile_img) 
                VALUES ($1, $2, $3, $4, $5)
                RETURNING *
            `,
            [
                username, email, phone_number, pasword, profile_img
            ]
        )

        res.status(200).json({ message: "Qo'shildi", newAdmin: result.rows[0] })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const deleteAdmin = async (req, res) => {
    const id = +req.params.id

    const result = await pool.query(
        `
            DELETE FROM admin
            WHERE id = ${id}
            RETURNING *
        `
    )

    res.json({ message: !result.rows[0] ? `${id} id lik client mavjud emas` : 'O\'chirildi', deletedCategory: result.rows[0] })
}