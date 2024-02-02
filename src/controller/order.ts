import { Container } from "../models/Container";
import { pagination } from "../helper/pagination";
import { RequestHandler } from "express";

export const listCustomerOrders: RequestHandler = async (req, res) => {
  const { page } = req.query;
  const products = await Container.findAll({
    ...pagination(page),
    order: [["createdAt", "DESC"]],
  });

  res.json(products);
};
export const createOrderFromBasket: RequestHandler = async (req, res) => {};
