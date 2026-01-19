import express from "express";
import { 
    deleteClientProduct, 
    getClientProducts, 
    postClientProduct, 
    putClientProduct 
} from "../controllers/clientProductController.js";

const clientProductRouter = express.Router();

clientProductRouter.get("/", getClientProducts);
clientProductRouter.post("/", postClientProduct);
clientProductRouter.put("/:id", putClientProduct);
clientProductRouter.delete("/:id", deleteClientProduct);

export default clientProductRouter;