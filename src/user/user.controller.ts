import {NextFunction, Request, Response} from 'express';
import {UserService} from './user.service';

export class UserController {
    constructor() {
        this.getUser = this.getUser.bind(this);
        // this.loginUser = this.loginUser.bind(this);
        this.saveUser = this.saveUser.bind(this);
        // this.updateUser = this.updateUser.bind(this);
    }

    public getUser(request: Request, response: Response, next?: NextFunction): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await this.getService().getUser(request);
                return data;
            } catch (err) {
                throw new Error(err);
            }
        });
    }

    public saveUser(request: Request): Promise<any> {
        return new Promise(async () => {
            try {
                const data = await this.getService().saveUser(request);
                return data;
            } catch (err) {
                throw new Error(err);
            }
        });
    }

    private getService(): UserService {
        return new UserService();
    }

    //
    // public loginUser(request: Request, response: Response, next?: NextFunction): Promise<any> {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const data = await this.getService().loginUser(request.body);
    //             return data;
    //         } catch (err) {
    //             throw new Error(err);
    //         }
    //     });
    // }
    //

    //
    // public updateUser(request: Request, response: Response, next?: NextFunction): Promise<any> {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const data = await this.getService().updateUser(request.body);
    //             return data;
    //         } catch (err) {
    //             throw new Error(err);
    //         }
    //     });
    // }
}
