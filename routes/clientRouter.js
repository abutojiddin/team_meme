import express from "express"
import { deleteClient, getClient, postClient, putClient } from "../controllers/clientControllers.js"

const clientRouter = express.Router()

clientRouter.get('/', getClient)

clientRouter.post('/', postClient)

clientRouter.delete('/:id', deleteClient)

clientRouter.put('/:id', putClient)

export default clientRouter
