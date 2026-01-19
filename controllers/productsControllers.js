import pool from "../config/connection.js";

export const getProducts = async (req, res) => {
    const result = await pool.query('SELECT * FROM products ORDER BY id')

    res.status(200).json({ message: 'Productlar keldi', products: result.rows })
}



export const postProducts = async (req, res) => {
    const { name,description,price,image,category_id} = req.body

    try {
        const result = await pool.query(
            `
                INSERT INTO products (name, description, price, image, category_id) 
                VALUES ($1, $2, $3, $4, $5)
                RETURNING *
            `,
            [
                name,
                description,
                price,
                image,
                category_id
            ]
        )

        res.status(200).json({ message: "Qo'shildi", newproduct: result.rows[0] })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}




export const putProduct = async (req, res) => {
    const id = req.params.id
    const { name,description,price,image,category_id} = req.body

    try {
        const result = await pool.query(
            `
                UPDATE products 
                SET ( name,description,price,image,category_id ) = ( $1, $2, $3, $4, $5 )
                WHERE id = $6
                RETURNING *;
            `,
            [ name,description,price,image,category_id,id]
        )

        res.status(200).json({ message: "O'zgartirildi", updatedProduct: result.rows[0] })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



export const deleteProduct = async (req, res) => {
    const id = +req.params.id

    const result = await pool.query(
        `
            DELETE FROM products
            WHERE id = ${id}
            RETURNING *
        `
    )

    res.json({ message: !result.rows[0] ? `${id} id lik product mavjud emas` : 'O\'chirildi', deletedProduct: result.rows[0] })
}