import { Product } from "../models/Product";
import { PersistanceError } from "../error/PersistanceError";
import { RequestHandler } from "express";

export const list: RequestHandler = async (req, res) => {
  const products = await Product.findAll({
    limit: 20,
  });

  res.json(products);
};

export const getbyId: RequestHandler = async (req, res) => {
  const product = await Product.findByPk(req.params.id);

  res.json(product);
};

export const create: RequestHandler = async (req, res) => {
  try {
    console.log("will create a product", req.body);
    const product = await Product.create(req.body);

    console.log(product);

    res.json(product);
  } catch (cause) {
    console.error(cause);
    res.status(500).json(new PersistanceError({ cause }));
  }
};

export const update: RequestHandler = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).send();
    }

    await product?.update(req.body);

    res.send();
  } catch (cause) {
    console.error(cause);
    res.status(500).json(new PersistanceError({ cause }));
  }
};

export const remove: RequestHandler = async (req, res) => {
  const product = await Product.findByPk(req.params.id);

  if (!product) {
    return res.status(404).json();
  }

  await product?.destroy();
  res.status(204).send();
};
