import { InferAttributes, InferCreationAttributes } from "sequelize";
import {
  Model,
  Column,
  CreatedAt,
  HasMany,
  Table,
  UpdatedAt,
  BelongsTo,
  DataType,
} from "sequelize-typescript";

import { Container } from "./Container";
import { Product } from "./Product";

@Table({
  tableName: "items",
})
export class Item extends Model<
  InferAttributes<Item>,
  InferCreationAttributes<Item>
> {
  @BelongsTo(() => Container, "container_id")
  declare container: Container;

  @Column(DataType.INTEGER)
  declare container_id: number;

  @HasMany(() => Product, "id")
  declare products: Product[];

  @Column
  declare quantity: number;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}
