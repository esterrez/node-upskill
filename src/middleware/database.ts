import type { RequestHandler } from "express";
import { Sequelize } from "sequelize";

export const database: RequestHandler = async (req) => {
  const sequelize = new Sequelize(process.env.DB_CONNECTION_URI);

  try {
    await sequelize.authenticate();
    req.database = sequelize;
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
