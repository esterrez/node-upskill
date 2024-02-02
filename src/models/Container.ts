import { InferAttributes, InferCreationAttributes } from "sequelize";
import {
  Model,
  CreatedAt,
  Table,
  UpdatedAt,
  BelongsTo,
  HasMany,
  Column,
  DataType,
} from "sequelize-typescript";
import { User } from "./User";
import { Item } from "./Item";

@Table({
  tableName: "containers",
})
export class Container extends Model<
  InferAttributes<Container>,
  InferCreationAttributes<Container>
> {
  @Column(DataType.ENUM({ values: ["basket", "order"] }))
  declare type: "basket" | "order";

  @BelongsTo(() => User, "id")
  declare user: User;

  @HasMany(() => Item, "container_id")
  declare items: Item[];

  @Column(DataType.INTEGER)
  declare user_id: number;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}
