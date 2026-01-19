import pool from "../config/connection.js";

export const getCategory = async (req, res) => {
    const result = await pool.query('SELECT * FROM categories')

    try {
        res.status(200).json({ message: 'Topildi', categories: result.rows })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const postCategory = async (req, res) => {
    const { name, description } = req.body

    try {
        const result = await pool.query(
            `
                INSERT INTO categories (name, description) 
                VALUES ($1, $2)
                RETURNING *
            `,
            [
                name,
                description
            ]
        )

        res.status(200).json({ message: "Qo'shildi", newCategory: result.rows[0] })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const deleteCategory = async (req, res) => {
    const id = +req.params.id

    const result = await pool.query(
        `
            DELETE FROM categories
            WHERE category_id = ${id}
            RETURNING *
        `
    )

    res.json({ message: !result.rows[0] ? `${id} id lik client mavjud emas` : 'O\'chirildi', deletedCategory: result.rows[0] })
}

export const putCategory = async (req, res) => {
    const id = req.params.id
    const { name, description } = req.body

    try {
        const result = await pool.query(
            `
                UPDATE categories 
                SET ( name, description ) = ( $1, $2 )
                WHERE category_id = $3
                RETURNING *
            `,
            [ name, description, id ]
        )

        res.status(200).json({ message: "O'zgartirildi", updatedClient: result.rows[0] })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}