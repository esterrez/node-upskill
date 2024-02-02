import { User } from "../models/User";
import { decodeBasicAuth } from "./decodeBasicAuth";
import { Request, Response, NextFunction } from "express";

export const requireBasicAuth = async <Req extends Request>(
  req: Req,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;

  if (!authorization) throw new UnauthorizedError();

  const [authType, authValue] = authorization.split(" ");

  if (authType !== "Basic" || !authValue.length) throw new UnauthorizedError();

  const credentials = decodeBasicAuth(authValue);

  const user = await User.findOne({
    where: {
      username: credentials.username,
      password: credentials.password,
    },
  });

  if (!user) throw new UnauthorizedError();

  req.user = user;
  next();
};

class UnauthorizedError extends Error {
  constructor() {
    super("Unauthorized");
  }
}
