import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
} from 'sequelize-typescript';
// import { User } from './user';

@Table({
    tableName: 'products',
    timestamps: true, 
})
export class Product extends Model<Product> {
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

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    price!: number;

    @Column({
        type:DataType.TEXT,
        allowNull:false,
    })
    description!:string;

    @Column({
        type: DataType.INTEGER,
        allowNull:false
    })
    stock!: number;

}