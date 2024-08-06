import UserRepository from "../repositories/userRepository";
import { injectable, inject } from "tsyringe";
import { User } from "../models/userModel"

@injectable()
export default class UserService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  async getAllUsers() {
    return await this.userRepository.findAll();
  }

  async getUserById(id: number) {
    return await this.userRepository.findById(id);
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findByEmail(email);
  }

  async createUser(user: Partial<User>) {
    return await this.userRepository.create(user);
  }

  async updateUser(id: number, user: Partial<User>): Promise<[affectedCount: number]>{
    return await this.userRepository.update(id, user);
  }

  async deleteUser(id: number) : Promise<number>{
      return await this.userRepository.delete(id);
  }


  async checkUserCredentials(
    email: string,
    password: string
  ): Promise<User> {
    const user = await this.getUserByEmail(email);
    if (user && user.password === password) {
      return user;
    }
    throw new Error("Invalid credentials");
  }
}