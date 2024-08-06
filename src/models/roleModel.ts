import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
  } from "sequelize-typescript";
  
  @Table({
    tableName: "roles",
    timestamps: true, 
  })
  export class Role extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    id!: number;
  
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    name!: string;
    
  }