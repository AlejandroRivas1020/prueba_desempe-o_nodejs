import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    ForeignKey,
    AutoIncrement,
  } from "sequelize-typescript";
  import { ProductCart } from './productCartModel';
  import { User } from './userModel';
  
  @Table({
    tableName: "Order",
    timestamps: true, 
  })
  export class Order extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    id!: number;
  
    @ForeignKey(()=>User)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    userId!: number;
  
    @ForeignKey(()=>ProductCart)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    productCardId!: number;
  
    @Column({
      type: DataType.DECIMAL(10,2),
      allowNull: false,
    })
    total!: number;
  
  }