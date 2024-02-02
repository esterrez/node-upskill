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
  HasOne,
} from "sequelize-typescript";
import { Container } from "./Container";

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

  @Length({ min: 2, max: 100 })
  @Column
  declare username: string;

  @Length({ min: 2, max: 100 })
  @Column
  declare password: string;

  @HasMany(() => Container, "user_id")
  declare orders: Container[];

  @HasOne(() => Container, "user_id")
  declare basket: Container;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;

  @DeletedAt
  declare deletedAt: Date;
}
