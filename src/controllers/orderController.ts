import { Request, Response } from 'express';
import { container } from 'tsyringe';
import OrderService from '../services/orderService';
import { Order } from '../models';
export default class OrderController {
    static async getAllOrders(req: Request, res: Response) {
        try {
            const orderService = container.resolve(OrderService);
            const orders = await orderService.getAllOrders();
            res.json(orders);
            
        } catch (error:any) {
            res.status(500).json({
                status: 500,
                message: error.message});
        }
    }

    static async getOrderById(req: Request, res: Response) {
        try {
            const orderService = container.resolve(OrderService);
            const orders = await orderService.getOrderById(parseInt(req.params.id));
            res.json(orders);
            
        } catch (error:any) {
            res.status(500).json({
                status: 500,
                message: error.message});
        }
    }

    static async createOrder(req: Request, res: Response) {
        try {
            const orderService = container.resolve(OrderService);
            const order = await orderService.createOrder(req.body);
            res.status(201).json(order);
            
        } catch (error:any) {
            res.status(500).json({
                status: 500,
                message: error.message});
        }
    }

    static async updateOrder(req: Request, res: Response){
        const orderService: OrderService = container.resolve(OrderService);
        const id: number = parseInt(req.params.id);
        const order: Partial<Order> = req.body;
        try{
            const [affectedCount]: number[] = await orderService.updateOrder(id, order);
            if(affectedCount === 0){
                res.status(404).json({
                    status: 404,
                    message: 'Order not found'
                });
                return;
            }
            res.status(200).json({
                status: 200,
                message: 'Order updated'
            });

        }catch(err: any){
            res.status(500).json({
                status: 500,
                message: err.message});
        }
    }

    static async deleteOrder(req: Request, res: Response){
        const orderService: OrderService = container.resolve(OrderService);
        const id: number = parseInt(req.params.id);
        try{
            const deletedCount: number = await orderService.deleteOrder(id);
            if(deletedCount === 0){
                res.status(404).json({
                    status: 404,
                    message: 'Order not found'
                });
                return;
            }
            res.status(200).json({
                status: 200,
                message: 'Order deleted'
            });

        }catch(err: any){
            res.status(500).json({
                status: 500,
                message: err.message});
        }
    }
}