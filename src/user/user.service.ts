// import bcrypt from 'bcrypt';
import {Request, Response} from 'express';
// import { Jwt } from '../services/jwt';
import {UserModel, UserDao} from "./user.dao";


export class UserService {
    public async getUser(request: Request): Promise<UserModel>  {
        try {
            const userDao: UserDao = new UserDao();
            const userId = request.params.id;
            console.log('params getUser', userId);
            const user = await userDao.findById(userId);
            console.log('resultado getUser', user)

            return Promise.resolve(user);
        } catch (error) {
            return Promise.reject(error);
        }
    }
    //
    // public async loginUser(request: Request): Promise<string>  {
    //     console.log('servicio loginUser');
    //     return Promise.resolve('loginUser');
    // }
    //
    // public async saveUser(request: Request): Promise<string> {
    //     console.log('servicio saveUser');
    //     return Promise.resolve('saveUser');
    // }
    //
    // public async updateUser(request: Request): Promise<string>  {
    //     console.log('servicio updateUser');
    //     return Promise.resolve('updateUser');
    // }
}
