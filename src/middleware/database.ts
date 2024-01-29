import type { RequestHandler } from "express";
import { Sequelize } from "sequelize-typescript";
import { User } from "../models/User";
import { Product } from "../models/Product";
import { Order } from "../models/Order";
import { OrderItem } from "../models/OrderItem";

export const database: RequestHandler = async (req, res, next) => {
  const sequelize = new Sequelize(process.env.DB_CONNECTION_URI, {
    define: {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: true,
    },
    models: [User, Product, Order, OrderItem],
  });

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  next();
};
