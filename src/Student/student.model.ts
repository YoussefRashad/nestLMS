import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Student extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  public id: number;

  @Column({ unique: true })
  public email: string;

  @Column
  public password: string;

  @Column
  public username: string;
}
