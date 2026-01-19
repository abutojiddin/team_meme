import pool from "../config/connection.js";

export const getClientProducts = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM client_products ORDER BY id');
        res.status(200).json({ 
            message: 'Mahsulotlar topildi', 
            products: result.rows 
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const postClientProduct = async (req, res) => {
    const { client_id, product_name, price, amount, category } = req.body;

    try {
        const result = await pool.query(
            `
                INSERT INTO client_products (client_id, product_name, price, amount, category) 
                VALUES ($1, $2, $3, $4, $5)
                RETURNING *
            `,
            [client_id, product_name, price, amount, category]
        );

        res.status(201).json({ 
            message: "Mahsulot qo'shildi", 
            newProduct: result.rows[0] 
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteClientProduct = async (req, res) => {
    const id = +req.params.id;

    try {
        const result = await pool.query(
            `
                DELETE FROM client_products
                WHERE id = $1
                RETURNING *
            `,
            [id]
        );

        res.json({ 
            message: !result.rows[0] ? `${id} id lik mahsulot topilmadi` : "Mahsulot o'chirildi", 
            deletedProduct: result.rows[0] 
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const putClientProduct = async (req, res) => {
    const id = req.params.id;
    const { client_id, product_name, price, amount, category } = req.body;

    try {
        const result = await pool.query(
            `
                UPDATE client_products 
                SET client_id = $1, product_name = $2, price = $3, amount = $4, category = $5
                WHERE id = $6
                RETURNING *
            `,
            [client_id, product_name, price, amount, category, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Yangilash uchun mahsulot topilmadi" });
        }

        res.status(200).json({ 
            message: "Mahsulot ma'lumotlari o'zgartirildi", 
            updatedProduct: result.rows[0] 
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}