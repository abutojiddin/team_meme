import express from "express"
import { deleteCategory, getCategory, postCategory, putCategory } from "../controllers/categoryControllers.js"

const categoryRouter = express.Router()

categoryRouter.get('/', getCategory)

categoryRouter.post('/', postCategory)

categoryRouter.delete('/:id', deleteCategory)

categoryRouter.put('/:id', putCategory)

export default categoryRouter