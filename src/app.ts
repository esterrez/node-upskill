import express from "express";
import { database } from "./middleware/database";
import { product } from "./route/product";
import bodyParser from "body-parser";
import { order } from "./route/order";

export const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(database);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/product", product);

app.use("/order", order);

export default app;
