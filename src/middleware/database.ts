import type { RequestHandler } from "express";
import { Sequelize } from "sequelize-typescript";
import { User } from "../models/User";
import { Product } from "../models/Product";
import { Container } from "../models/Container";
import { Item } from "../models/Item";

export const database: RequestHandler = async (req, res, next) => {
  const sequelize = new Sequelize(process.env.DB_CONNECTION_URI, {
    define: {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: true,
    },
    models: [User, Product, Container, Item],
  });

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  next();
};
