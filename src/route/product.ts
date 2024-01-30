import { Router } from "express";
import { Product } from "../models/Product";
import { PersistanceError } from "../error/PersistanceError";

export const product = Router();

product.get("/", async (req, res) => {
  const products = await Product.findAll({
    limit: 20,
  });

  res.send(products);
});

product.get("/:id", async (req, res) => {
  const product = await Product.findByPk(req.params.id);

  res.send(product);
});

product.post("/", async (req, res) => {
  try {
    console.log("will create a product", req.body);
    const product = await Product.create(req.body);

    res.send(product);
  } catch (cause) {
    res.status(500).send(new PersistanceError({ cause }));
  }
});

product.patch("/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).send();
    }

    await product?.update(req.body);

    res.send();
  } catch (cause) {
    console.error(cause);
    res.status(500).send(new PersistanceError({ cause }));
  }
});

product.delete("/:id", async (req, res) => {
  const product = await Product.findByPk(req.params.id);

  if (!product) {
    return res.status(404).send();
  }

  await product?.destroy();
  res.status(204).send();
});
