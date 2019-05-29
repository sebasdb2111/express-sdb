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
const user_dao_1 = require("./user.dao");
class UserQuery extends user_dao_1.UserDao {
    saveUser() {
    }
    loginUser() {
    }
    /**
     * @param filter filter params
     * @returns array of elements found
     */
    getUser(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.getModel().findById(filter).exec();
            console.log('model para get user', result);
            return Promise.resolve(result ? result.toObject() : null);
            // User.findById(filter, async (err, user) => {
            //     if (err) return res.status(500).send({message: 'Request error'});
            //     if (!user) return res.status(404).send({message: 'User not exist'});
            //     followThisUser(req.user.sub, userId).then((value) => {
            //         user.password = undefined;
            //         return res.status(200).send({
            //             user,
            //             following: value.following,
            //             followed: value.followed,
            //             favorites: value.favorites
            //         });
            //     });
            // });
        });
    }
    updateUser() {
    }
    removeUser() {
    }
}
exports.UserQuery = UserQuery;
//# sourceMappingURL=user.model.js.map