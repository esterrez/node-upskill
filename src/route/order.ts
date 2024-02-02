import { Router } from "express";
import { listCustomerOrders, createOrderFromBasket } from "../controller/order";

export const order = Router();

order.get("/", listCustomerOrders);

order.post("/", createOrderFromBasket);
