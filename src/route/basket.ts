import { Router } from "express";
import {
  addBasketItem,
  deleteBasketItem,
  getCustomerBasket,
  setBasketItems,
} from "../controller/basket";
import { requireBasicAuth } from "../helper/getBasicAuth";

export const basket = Router();

basket.use(requireBasicAuth);

basket.get("/", getCustomerBasket);

basket.patch("/items", setBasketItems);

basket.delete("/items/:id", deleteBasketItem);

basket.post("/items", addBasketItem);

basket.put("/items/:id/quantity");
