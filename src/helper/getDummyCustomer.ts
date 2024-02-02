import { Request } from "express";
import { User } from "../models/User";

/**
 * TODO: update me!!!
 * @deprecated to be updated with proper oAuth JWT
 */
export const getDummyCustomer = async ({
  headers,
}: Request): Promise<User["id"]> => {
  const { "x-customer": customerId } = headers;

  const [user] = await User.findOrCreate({
    where: {
      id: Number(customerId),
    },
  });

  if (!user) throw new Error("Auth required!");
  return user.id;
};
