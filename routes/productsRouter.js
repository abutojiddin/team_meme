import express from 'express';
import { deleteProduct, getProducts, postProducts, putProduct } from '../controllers/productsControllers.js';


const productRouter = express.Router()

productRouter.get('/', getProducts)

productRouter.post('/', postProducts)
productRouter.put('/:id',putProduct)
productRouter.delete('/:id', deleteProduct)




export default productRouter