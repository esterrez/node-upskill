import { Router } from "express";
import { createCustomer, updateCustomer } from "../controller/customer";

export const customer = Router();

customer.post("/", createCustomer);

customer.patch("/", updateCustomer);
