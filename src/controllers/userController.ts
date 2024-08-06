import { Request, Response } from "express";
import { container } from "tsyringe";
import UserService from "../services/userService";
import { User } from '../models';
export default class UserController {
  static async getAllUsers(_: Request, res: Response) {
    try {
        const userService = container.resolve(UserService);
        const users = await userService.getAllUsers();
        res.json(users);
        
    } catch (error:any) {
        res.status(500).json({
        status: 500,
        message: error.message});
    }
  }

  static async getUserById(req: Request, res: Response) {
    try {
        const userService = container.resolve(UserService);
        const user = await userService.getUserById(parseInt(req.params.id));
        res.json(user);
        
    } catch (error:any) {
        res.status(500).json({
        status: 500,
        message: error.message});
    }
  }

  static async createUser(req: Request, res: Response) {
    try {
        const userService = container.resolve(UserService);
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
        
    } catch (error:any) {
        res.status(500).json({
        status: 500,
        message: error.message});
    }
  } 

  static async updateUser(req: Request, res: Response){
    const userService: UserService = container.resolve(UserService);
    const id: number = parseInt(req.params.id);
    const user: Partial<User> = req.body;
    try{
        const [affectedCount]: number[] = await userService.updateUser(id,user);
        if(affectedCount === 0){
            res.status(404).json({
                status: 404,
                message: 'User not found'
            });
            return;
        }
        res.status(200).json({
            status: 200,
            message: 'User updated successfully'
        });
    }catch(err: any){
        res.status(500).json({
            status: 500,
            message: err.message});
    }  
}

static async deleteUser(req: Request, res: Response){
    const userService: UserService = container.resolve(UserService);
    const id: number = parseInt(req.params.id);
    try{
        const affectedCount: number = await userService.deleteUser(id);
        if(affectedCount === 0){
            res.status(404).json({
                status: 404,
                message: 'User not found'
            });
            return;
        }
        res.status(200).json({
            status: 200,
            message: 'User deleted successfully'
        });
    }catch(err: any){
        res.status(500).json({
            status: 500,
            message: err.message});
    }
}



}