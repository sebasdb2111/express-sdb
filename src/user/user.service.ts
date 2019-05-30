// import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
// import { Jwt } from '../services/jwt';
import { UserDao } from './user.dao';
import { UserModel } from './user.model';

export class UserService {
    public async getUser(request: Request): Promise<UserModel> {
        try {
            const userDao: UserDao = new UserDao();
            const userId: string = request.params.id;
            const user = await userDao.findById(userId);

            return Promise.resolve(user);
        } catch (error) {
            return Promise.reject(error);
        }

    }

    public async saveUser(request: Request): Promise<UserModel> {
        const userDao: UserDao = new UserDao();
        const userData = request.body;
        const user = await userDao.save(userData);

        return Promise.resolve(user);
    }

    // public async loginUser(request: Response): Promise<string>  {
    //     console.log('servicio loginUser');
    //     return Promise.resolve('loginUser');
    // }
    //

    //
    // public async updateUser(request: Response): Promise<string>  {
    //     console.log('servicio updateUser');
    //     return Promise.resolve('updateUser');
    // }
}
