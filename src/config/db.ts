import { Sequelize } from 'sequelize-typescript';
import {Cart, Order, Product, ProductCart, Role, User } from '../models';

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: '5.161.244.18',
    username: 'root',
    password: 'mypassword',
    database: 'ecomfast',
    models: [Product,User,Role,Cart,ProductCart,Order],
});

export default sequelize;