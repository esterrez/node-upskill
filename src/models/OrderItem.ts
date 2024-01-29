import { InferAttributes, InferCreationAttributes } from "sequelize";
import {
  Model,
  Column,
  CreatedAt,
  HasMany,
  Table,
  UpdatedAt,
  BelongsTo,
} from "sequelize-typescript";

import { Order } from "./Order";
import { Product } from "./Product";

@Table({
  tableName: "order_items",
})
export class OrderItem extends Model<
  InferAttributes<OrderItem>,
  InferCreationAttributes<OrderItem>
> {
  @BelongsTo(() => Order, "order_id")
  declare order: Order;

  @HasMany(() => Product, "id")
  declare products: Product[];

  @Column
  declare quantity: number;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}
