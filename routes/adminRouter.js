import express from "express"
import pool from "../config/connection.js";
import { deleteAdmin, getAdmin, postAdmin, putAdmin } from "../controllers/adminControllers.js";

const adminRouter = express.Router()

adminRouter.get('/', getAdmin)

adminRouter.post('/', postAdmin)

adminRouter.delete('/:id', deleteAdmin)

adminRouter.put('/:id', putAdmin)

export default adminRouter