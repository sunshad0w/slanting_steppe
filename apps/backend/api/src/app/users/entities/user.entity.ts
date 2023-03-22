import { IUser } from '@ss/shared/data-access/interfaces';
import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { CreatedAt } from 'sequelize-typescript/dist/model/column/timestamps/created-at';

@Table
export class UserEntity extends Model implements IUser {
  @CreatedAt
  created: string;

  @Column
  email: string;

  @PrimaryKey
  id: number;

  @Column
  password: string;

  @UpdatedAt
  updated: string;

  @Column({ type: DataType.CHAR(50), unique: true })
  username: string;
}
