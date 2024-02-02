import { Router } from "express";
import { list, getbyId, create, update, remove } from "../controller/product";

export const product = Router();

product.get("/", list);

product.get("/:id", getbyId);

product.post("/", create);

product.patch("/:id", update);

product.delete("/:id", remove);
