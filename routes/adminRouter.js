import express from "express"
import pool from "../config/connection.js";
import { deleteAdmin, getAdmin, postAdmin } from "../controllers/adminControllers.js";

const adminRouter = express.Router()

adminRouter.get('/', getAdmin)

adminRouter.post('/', postAdmin)

adminRouter.delete('/:id', deleteAdmin)

adminRouter.put('/:id', async (req, res) => {
    const id = req.params.id
    const { username, email, phone_number, pasword, profile_img } = req.body

    try {
        const result = await pool.query(
            `
                UPDATE admin 
                SET ( username, email, phone_number, pasword, profile_img ) = ( $1, $2, $3, $4, $5 )
                WHERE id = $6
                RETURNING *
            `,
            [ username, email, phone_number, pasword, profile_img, id ]
        )

        res.status(200).json({ message: "O'zgartirildi", updatedClient: result.rows[0] })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

export default adminRouter