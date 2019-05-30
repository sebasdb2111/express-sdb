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
// import { Jwt } from '../services/jwt';
const user_dao_1 = require("./user.dao");
class UserService {
    getUser(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDao = new user_dao_1.UserDao();
            const userId = request.params.id;
            const user = yield userDao.findById(userId);
            return Promise.resolve(user);
        });
    }
    saveUser(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDao = new user_dao_1.UserDao();
            const userData = request.body;
            // tslint:disable-next-line:no-console
            console.log('asdaf', userData);
            const user = yield userDao.save(userData);
            return Promise.resolve(user);
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map