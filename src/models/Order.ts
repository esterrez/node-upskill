import { InferAttributes, InferCreationAttributes } from "sequelize";
import {
  Model,
  CreatedAt,
  Table,
  UpdatedAt,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { User } from "./User";
import { OrderItem } from "./OrderItem";

@Table({
  tableName: "orders",
})
export class Order extends Model<
  InferAttributes<Order>,
  InferCreationAttributes<Order>
> {
  @BelongsTo(() => User, "user_id")
  declare user: User;

  @HasMany(() => OrderItem, "order_id")
  declare items: OrderItem[];

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}
