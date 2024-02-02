import { RequestHandler } from "express";
import { Container } from "../models/Container";
import { Item } from "../models/Item";

export const getCustomerBasket: RequestHandler = async (req, res) => {
  console.log("searching for user", req.user?.id);

  const [basket] = await Container.findOrCreate({
    where: {
      type: "basket",
      user_id: req.user?.id,
    },
    include: [Item],
  });

  res.json(basket);
};

export const setBasketItems: RequestHandler<Record<string, never>> = async (
  req,
  res,
) => {
  const [basket] = await Container.findOrCreate({
    where: {
      type: "basket",
      user_id: req.user?.id,
    },
  });

  await basket.update({
    items: req.body,
  });

  res.send();
};

export const addBasketItem: RequestHandler = async (req, res) => {
  const [basket] = await Container.findOrCreate({
    where: {
      type: "basket",

      user: {
        id: req.user?.id,
      },
    },
  });

  // TODO: add single item

  res.send();
};

export const deleteBasketItem: RequestHandler = async (req, res) => {
  const basketItem = await Item.findOne({
    where: {
      container: {
        type: "basket",
        user: {
          id: req.user?.id,
        },
      },
      id: req.params.id,
    },
  });

  if (!basketItem) throw new Error("unable to find basket item");

  res.send(204).send();
};
