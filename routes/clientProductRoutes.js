import express from "express";

import { 
    getClientProducts, 
    postClientProduct, 
    putClientProduct, 
    deleteClientProduct 
} from "../controllers/clientControllers.js";

const clientProductRouter = express.Router();

clientProductRouter.get("/", getClientProducts);

clientProductRouter.post("/", postClientProduct);

clientProductRouter.put("/:id", putClientProduct);

clientProductRouter.delete("/:id", deleteClientProduct);

export default clientProductRouter;