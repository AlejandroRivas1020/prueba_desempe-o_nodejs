import OrderRepository from '../repositories/orderRepository';
import { CreationAttributes } from 'sequelize';
import { injectable, inject } from 'tsyringe';
import { Order } from '../models';

@injectable()
export default class OrderService {
    constructor(
        @inject(OrderRepository) private orderRepository: OrderRepository
    ) {}

    async getAllOrders() {
        return await this.orderRepository.findAll();
    }

    async getOrderById(id: number) {
        return await this.orderRepository.findById(id);
    }

    async createOrder(order: CreationAttributes<Order>) {
        return await this.orderRepository.create(order);
    }

    async updateOrder(id: number, order: Partial<Order>): Promise<[affectedCount: number]> {
        return await this.orderRepository.update(id, order);
    }

    async deleteOrder(id: number): Promise<number> {
        return await this.orderRepository.delete(id);
    }
}