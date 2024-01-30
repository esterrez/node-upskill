import { Router } from "express";
import { Order } from "../models/Order";
import { pagination } from "../helper/pagination";

export const order = Router();

order.get("/", async (req, res) => {
  const { page } = req.query;
  const products = await Order.findAll({
    ...pagination(page),
    order: [["createdAt", "DESC"]],
  });

  res.send(products);
});
