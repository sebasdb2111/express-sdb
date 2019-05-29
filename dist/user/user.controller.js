"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("./user.service");
class UserController {
    constructor() {
        this.getUser = this.getUser.bind(this);
        // this.loginUser = this.loginUser.bind(this);
        // this.saveUser = this.saveUser.bind(this);
        // this.updateUser = this.updateUser.bind(this);
    }
    getService() {
        return new user_service_1.UserService();
    }
    getUser(request, response, next) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = this.getService().getUser(request);
                // console.log('respuesta de data', data);
                return Promise.resolve(response.status(200).send({
                    data
                }));
            }
            catch (err) {
                Promise.reject(err);
            }
        }));
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map