import { injectable } from 'tsyringe';
import { Product } from '../models';
import { CreationAttributes } from 'sequelize';

@injectable() 
export default class ProductRepository {
    async findAll() {
        return await Product.findAll();
    }

    async findById(id: number) {
        return await Product.findByPk(id);
    }

    async create(product: CreationAttributes<Product>) {
        return await Product.create(product);
    }

    async update(id: number,product:Partial<Product>){
        return await Product.update(product, {where: {id}});
    }

    async delete(id: number): Promise<number>{
        return await Product.destroy({where: {id}});
    }
}