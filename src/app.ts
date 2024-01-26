import express from "express";
import { database } from "./middleware/database";

export const app = express();

app.use(database);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

export default app;
