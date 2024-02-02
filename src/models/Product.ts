import { InferAttributes, InferCreationAttributes } from "sequelize";

import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  Length,
  Model,
  Table,
  Unique,
  UpdatedAt,
} from "sequelize-typescript";

interface ProductAttributes extends InferAttributes<Product> {}

interface ProductCreationAttributes extends InferCreationAttributes<Product> {}

@Table({
  tableName: "products",
})
export class Product extends Model<
  ProductAttributes,
  ProductCreationAttributes
> {
  @Length({ min: 3, max: 128 })
  @Unique
  @Column
  declare name: string;

  @Column({
    type: DataType.FLOAT(10, 2).UNSIGNED,
  })
  declare price: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare availability: number;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;

  @DeletedAt
  declare deletedAt: Date;
}
