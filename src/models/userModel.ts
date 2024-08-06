import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    ForeignKey,
    AutoIncrement,
    HasMany
  } from "sequelize-typescript";
  import { Role } from './roleModel'

  
  @Table({
    tableName: "users",
    timestamps: true, 
  })
  export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    id!: number;
  
    @Column({
      type: DataType.STRING,
      allowNull: false,
      unique:true,
    })
    email!: string;
  
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    password!: string;
  
    @ForeignKey(() => Role)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    roleId!: number;

  }