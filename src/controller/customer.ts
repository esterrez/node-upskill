import { RequestHandler } from "express";
import { User } from "../models/User";
import { getDummyCustomer } from "../helper/getDummyCustomer";

export const createCustomer: RequestHandler = async (req, res) => {
  const customer = await User.create(req.body);

  res.send(await customer.save());
};

export const updateCustomer: RequestHandler = async (req, res) => {
  const userId = await getDummyCustomer(req);
  const where = {
    id: userId,
  };

  await User.update(req.body, {
    where,
  });

  res.send();
};
