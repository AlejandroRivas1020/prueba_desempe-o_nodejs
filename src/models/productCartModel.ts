import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    ForeignKey,
    AutoIncrement,
  } from "sequelize-typescript";
  import { Cart } from './cartModel'
  import { Product } from './productModel';
  
  @Table({
    tableName: "productCarts",
    timestamps: true, 
  })
  export class ProductCart extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    id!: number;
  
    @ForeignKey(()=>Cart)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    cartId!: number;
  
    @ForeignKey(()=>Product)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    productId!: number;
  
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    quantity!: number;
  
  }