import { injectable } from 'tsyringe';
import { Order } from '../models';
import { CreationAttributes } from 'sequelize';

@injectable() 
export default class OrderRepository {
    async findAll() {
        return await Order.findAll();
    }

    async findById(id: number) {
        return await Order.findByPk(id);
    }

    async create(order: CreationAttributes<Order>) {
        return await Order.create(order);
    }

    async update(id: number,order:Partial<Order>){
        return await Order.update(order, {where: {id}});
    }

    async delete(id: number): Promise<number>{
        return await Order.destroy({where: {id}});
    }
}