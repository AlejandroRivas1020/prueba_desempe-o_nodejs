import ProductRepository from '../repositories/productRepository';
import { CreationAttributes } from 'sequelize';
import { injectable, inject } from 'tsyringe';
import { Product } from '../models';

@injectable()
export default class ProductService {
    constructor(
        @inject(ProductRepository) private productRepository: ProductRepository
    ) {}

    async getAllProducts() {
        return await this.productRepository.findAll();
    }

    async getProductById(id: number) {
        return await this.productRepository.findById(id);
    }

    async createProduct(product: CreationAttributes<Product>) {
        return await this.productRepository.create(product);
    }

    async updateProduct(id: number, product: Partial<Product>): Promise<[affectedCount: number]> {
        return await this.productRepository.update(id, product);
    }

    async deleteProduct(id: number): Promise<number> {
        return await this.productRepository.delete(id);
    }
}