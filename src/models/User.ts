import { InferAttributes, InferCreationAttributes } from "sequelize";
import {
  Model,
  Column,
  CreatedAt,
  DeletedAt,
  HasMany,
  Length,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import { Order } from "./Order";

@Table({
  tableName: "users",
})
export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  @Length({ min: 2, max: 100 })
  @Column
  declare firstName: string;

  @Length({ min: 2, max: 100 })
  @Column
  declare lastName: string;

  @HasMany(() => Order, "user_id")
  declare orders: Order[];

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;

  @DeletedAt
  declare deletedAt: Date;
}
