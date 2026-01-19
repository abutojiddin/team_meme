import express from "express";

import { 
    getClientProducts, 
    postClientProduct, 
    putClientProduct, 
    deleteClientProduct 
} from "../controllers/client_products.controller.js";

const clientProductRouter = express.Router();

// Barcha mahsulotlarni olish
clientProductRouter.get("/", getClientProducts);

// Yangi mahsulot qo'shish
clientProductRouter.post("/", postClientProduct);

// Mahsulotni ID bo'yicha yangilash
clientProductRouter.put("/:id", putClientProduct);

// Mahsulotni ID bo'yicha o'chirish
clientProductRouter.delete("/:id", deleteClientProduct);

export default clientProductRouter;