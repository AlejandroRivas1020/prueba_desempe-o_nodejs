import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    ForeignKey,
    AutoIncrement,
  } from "sequelize-typescript";
  import {User} from './userModel'

  @Table({
    tableName: "carts",
    timestamps: true, 
  })
  export class Cart extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    id!: number;
  
    @ForeignKey(()=> Cart)
    @Column({
      type: DataType.STRING,
      allowNull: false,
      unique:true,
    })
    userId!: string;
  
  }