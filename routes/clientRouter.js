import express from "express"
import { getClient } from "../controllers/clientControllers.js"

const clientRouter = express.Router()

clientRouter.get('/', getClient)

export default clientRouter
