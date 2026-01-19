import pool from "../config/connection.js";

export const getClient = async (req, res) => {
    const result = await pool.query('SELECT * FROM client ORDER BY id')

    res.status(200).json({ message: 'Topildi', clients: result.rows })
}

export const postClient = async (req, res) => {
    const { fullname, age, email, password, address, phone_number, profile_img } = req.body

    try {
        const result = await pool.query(
            `
                INSERT INTO client (fullname, age, email, password, address, phone_number, profile_img) 
                VALUES ($1, $2, $3, $4, $5, $6, $7)
                RETURNING *
            `,
            [
                fullname,
                age,
                email,
                password,
                address,
                phone_number,
                profile_img
            ]
        )

        res.status(200).json({ message: "Qo'shildi", newClient: result.rows[0] })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const deleteClient = async (req, res) => {
    const id = +req.params.id

    const result = await pool.query(
        `
            DELETE FROM client
            WHERE id = ${id}
            RETURNING *
        `
    )

    res.json({ message: !result.rows[0] ? `${id} id lik client mavjud emas` : 'O\'chirildi', deletedclient: result.rows[0] })
}

export const putClient = async (req, res) => {
    const id = req.params.id
    const { fullname, age, email, password, address, phone_number, profile_img } = req.body

    try {
        const result = await pool.query(
            `
                UPDATE client 
                SET ( fullname, age, email, password, address, phone_number, profile_img ) = ( $1, $2, $3, $4, $5, $6, $7 )
                WHERE id = $8
                RETURNING *
            `,
            [ fullname, age, email, password, address, phone_number, profile_img, id ]
        )

        res.status(200).json({ message: "O'zgartirildi", updatedClient: result.rows[0] })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

